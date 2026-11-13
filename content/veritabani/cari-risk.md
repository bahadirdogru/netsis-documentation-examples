---
title: Cari risk
description: Netsis'in cari risk hesabı; TBLCARISK kolonları, kalan kredi formülü ve standart tablolar üzerinde düz SQL ile yeniden kurulumu.
---

# Cari risk

Netsis bir belgeyi kaydederken carinin riskini kontrol eder (`RiskKontrol`) ve aşılmışsa `MÜŞTERİ RİSKLİ` hatası verir ([Sipariş hesaplama ve değiştirme](/rest/siparis-islemleri/#risk-reddi)). Aynı sayıyı önceden görmek için formül düz SQL ile yeniden kurulabilir. Bu sayfadaki bulgular tek bir test şirketinde, Netsis çekirdeği 9.0.72.5 ile yapılan canlı denemelerden gelir; sorgu o şirketin bütün carilerinde Netsis'in kendi risk raporuyla aynı sonucu verdi. Kendi şirketinizde de karşılaştırıp doğrulayın. «doğrulanmadı» işaretli parçalar test verisiyle sınanamadı.

## Tablolar ve kolonlar

`TBLCARISK` (anahtar `CARIKOD`):

| Kolon grubu | Kolonlar |
|-------------|----------|
| Limit | `RISKLIMITI`, `TEMINATI` |
| Saklanan tutarlar | `CARISK` (çek asıl), `CCRISK` (çek ciro), `SARISK` (senet asıl), `SCRISK` (senet ciro), `IRSRISK`, `SIPRISK`, `SEVKRISK`, `YUKRISK` |
| Yüzdeler | `RISKLIMITIO`, `TEMINATIO`, `BORCRISKO`, `CARISKO`, `CCRISKO`, `SARISKO`, `SCRISKO`, `IRSRISKO`, `SIPRISKO`, `SEVKRISKO`, `YUKRISKO` |
| Davranış | `SIPRISKDAVRAN`, `IRSRISKDAVRAN`, `FATRISKDAVRAN`, `SEVKRISKDAVRAN`, `YUKRISKDAVRAN`, `DEKRISKDAVRAN` (`0` işlem durdurulsun, `1` yapılmasın) |

Gözlemler:

- Limit `TBLCARISK.RISKLIMITI` içindedir. `TBLCASABIT.RISK_SINIRI` test şirketinde her kartta 0 idi.
- Carinin risk anahtarı `TBLCASABITEK.CARIRISK` (`E` / `H`); REST'te `CariEkBilgi.CariRisk`.
- `TBLCARISK` içindeki saklanan tutar kolonları test şirketinde 0 idi; canlı rakamlar hareket tablolarından hesaplanır.
- `SEVKRISK`, `YUKRISK`, `*DAVRAN` ve bazı yüzde kolonları sitedeki şema dökümünde yoktur, test şirketinde vardı; `TBLCASABITEK.CARIRISK` ve aşağıdaki `KUMGENEL` için de aynısı geçerli. Kendi veritabanınızda kolonun varlığını `INFORMATION_SCHEMA.COLUMNS` ile kontrol edin.

## Formül

```text
Kalan kredi =
    (− banka teminatları × TEMINATIO / 100)
  +  RISKLIMITI
  −  bakiye          × BORCRISKO / 100
  −  senet asıl      × SARISKO   / 100
  −  senet ciro      × SCRISKO   / 100
  −  çek asıl        × CARISKO   / 100
  −  çek ciro        × CCRISKO   / 100
  −  açık siparişler × SIPRISKO  / 100
  −  SEVKRISK        × SEVKRISKO / 100
  −  YUKRISK         × YUKRISKO  / 100
```

Netsis'in red metnindeki «Risk değeri» = `RISKLIMITI` − kalan kredi. Test şirketinin kendi raporunda irsaliye terimi (`IRSRISKO`) yoktu; o yüzden formüle alınmadı, sizin raporunuzda varsa ekleyin.

Terimlerin kaynağı:

| Terim | Kaynak |
|-------|--------|
| Bakiye | `TBLCASABIT.CM_BORCT − CM_ALACT`. Bu özet kolonların hareketle uyumsuz kalabildiğine dair uyarı: [Cari bakiyesi](/veritabani/sql-ornekleri/#cari-bakiyesi). Netsis'in risk hesabı bunları kullandığı için burada da kullanılır |
| Çek / senet | `TBLMCEK` ve `TBLMSEN`; cari `SC_VERENK`, `AS_C = 'A'` (asıl) ya da `'C'` (ciro), `SC_SONDUR = 'B'`, `SC_YERI <> 'I'`; `SC_YERI = 'C'` olanlar yalnız bugün < `SC_ODETRH` + 2 iken sayılır; `TUTAR` toplanır |
| Banka teminatı | `TBLBNKTEMSABIT`: `CARIKODU`, `RISKEDAHIL = 'E'`, `DURUM = 0`, `VADETARIH` bugün ya da sonrası ya da boş; `TUTAR`. Test şirketinde hiç satır yoktu: bu terim veriyle **doğrulanmadı**; işareti de formülden okundu |
| Açık sipariş | `TBLSIPATRA` ↔ `TBLSIPAMAS` (`SUBE_KODU`, `STHAR_FTIRSIP = FTIRSIP`, `FISNO = FATIRS_NO`, `STHAR_ACIKLAMA = CARI_KODU`), `STHAR_GCKOD = 'C'`, başlıkta `UPDATE_KODU` 'Y' değil; açık miktar = `STHAR_GCMIK − FIRMA_DOVTUT − sevk edilen`; tutar = açık × `STHAR_NF` × (1 + `STHAR_KDV` / 100); yalnız açık > 0 olanlar |
| Sevk edilen | Netsis'te `NSF_SEVKKALMIKGETIR(FISNO + '-' + STRA_SIPKONT, 1)` skaler fonksiyonu; içi `KUMGENEL` tablosunda `FUNCTIONID = 1` ve `ANAHTAR = FISNO + '-' + STRA_SIPKONT` için `SUM(TOPLAM1)` |

Salt okunur bir SQL girişinde `NSF_*` fonksiyonlarında genellikle EXECUTE, tanımlarında VIEW DEFINITION yetkisi yoktur; bu yüzden fonksiyonu çağırmak yerine sorgusu satır içine alınır (aşağıda).

## Düz SQL

SQL Server 2008 R2 ile uyumludur (`OFFSET`, `FORMAT`, pencere toplamı yok). `@CariKod` uygulamada parametre olarak verilir.

```sql
DECLARE @CariKod varchar(15);
DECLARE @Bugun   datetime;
SET @CariKod = 'CARI001';
SET @Bugun   = DATEADD(day, DATEDIFF(day, 0, GETDATE()), 0);

SELECT y.CARIKOD, y.RISKLIMITI,
       y.KALAN_KREDI,
       y.RISKLIMITI - y.KALAN_KREDI AS RISK_DEGERI
FROM (
  SELECT x.CARIKOD, x.RISKLIMITI,
         - x.TEMINAT * x.TEMINATIO / 100.0
         + x.RISKLIMITI
         - x.BAKIYE      * x.BORCRISKO / 100.0
         - x.SENET_ASIL  * x.SARISKO   / 100.0
         - x.SENET_CIRO  * x.SCRISKO   / 100.0
         - x.CEK_ASIL    * x.CARISKO   / 100.0
         - x.CEK_CIRO    * x.CCRISKO   / 100.0
         - x.ACIK_SIPARIS * x.SIPRISKO / 100.0
         - x.SEVKRISK    * x.SEVKRISKO / 100.0
         - x.YUKRISK     * x.YUKRISKO  / 100.0 AS KALAN_KREDI
  FROM (
    SELECT r.CARIKOD,
           ISNULL(r.RISKLIMITI, 0) AS RISKLIMITI,
           ISNULL(r.TEMINATIO, 0)  AS TEMINATIO,
           ISNULL(r.BORCRISKO, 0)  AS BORCRISKO,
           ISNULL(r.SARISKO, 0)    AS SARISKO,
           ISNULL(r.SCRISKO, 0)    AS SCRISKO,
           ISNULL(r.CARISKO, 0)    AS CARISKO,
           ISNULL(r.CCRISKO, 0)    AS CCRISKO,
           ISNULL(r.SIPRISKO, 0)   AS SIPRISKO,
           ISNULL(r.SEVKRISK, 0)   AS SEVKRISK,
           ISNULL(r.SEVKRISKO, 0)  AS SEVKRISKO,
           ISNULL(r.YUKRISK, 0)    AS YUKRISK,
           ISNULL(r.YUKRISKO, 0)   AS YUKRISKO,
           b.BAKIYE, t.TEMINAT,
           e.CEK_ASIL, e.CEK_CIRO, e.SENET_ASIL, e.SENET_CIRO,
           s.ACIK_SIPARIS
    FROM TBLCARISK r WITH (NOLOCK)

    -- bakiye
    CROSS JOIN (SELECT ISNULL(SUM(ISNULL(CM_BORCT, 0) - ISNULL(CM_ALACT, 0)), 0) AS BAKIYE
                FROM TBLCASABIT WITH (NOLOCK)
                WHERE CARI_KOD = @CariKod) b

    -- banka teminatları (doğrulanmadı: test şirketinde satır yoktu)
    CROSS JOIN (SELECT ISNULL(SUM(TUTAR), 0) AS TEMINAT
                FROM TBLBNKTEMSABIT WITH (NOLOCK)
                WHERE CARIKODU = @CariKod AND RISKEDAHIL = 'E' AND DURUM = 0
                  AND (VADETARIH IS NULL OR VADETARIH >= @Bugun)) t

    -- bekleyen çek ve senetler (müşteri evrakı)
    CROSS JOIN (
      SELECT
        ISNULL(SUM(CASE WHEN u.TIP = 'CEK'  AND u.AS_C = 'A' THEN u.TUTAR END), 0) AS CEK_ASIL,
        ISNULL(SUM(CASE WHEN u.TIP = 'CEK'  AND u.AS_C = 'C' THEN u.TUTAR END), 0) AS CEK_CIRO,
        ISNULL(SUM(CASE WHEN u.TIP = 'SEN'  AND u.AS_C = 'A' THEN u.TUTAR END), 0) AS SENET_ASIL,
        ISNULL(SUM(CASE WHEN u.TIP = 'SEN'  AND u.AS_C = 'C' THEN u.TUTAR END), 0) AS SENET_CIRO
      FROM (
        SELECT 'CEK' AS TIP, AS_C, TUTAR, SC_SONDUR, SC_YERI, SC_ODETRH
        FROM TBLMCEK WITH (NOLOCK) WHERE SC_VERENK = @CariKod
        UNION ALL
        SELECT 'SEN', AS_C, TUTAR, SC_SONDUR, SC_YERI, SC_ODETRH
        FROM TBLMSEN WITH (NOLOCK) WHERE SC_VERENK = @CariKod
      ) u
      WHERE u.SC_SONDUR = 'B'
        AND u.SC_YERI <> 'I'
        AND (u.SC_YERI <> 'C' OR @Bugun < DATEADD(day, 2, u.SC_ODETRH))
    ) e

    -- açık siparişler (NSF_SEVKKALMIKGETIR satır içine alındı)
    CROSS JOIN (
      SELECT ISNULL(SUM(a.ACIK * a.STHAR_NF * (1 + a.STHAR_KDV / 100.0)), 0) AS ACIK_SIPARIS
      FROM (
        SELECT tr.STHAR_NF, tr.STHAR_KDV,
               tr.STHAR_GCMIK - ISNULL(tr.FIRMA_DOVTUT, 0)
               - ISNULL((SELECT SUM(k.TOPLAM1)
                         FROM KUMGENEL k WITH (NOLOCK)
                         WHERE k.FUNCTIONID = 1
                           AND k.ANAHTAR = tr.FISNO + '-' + CONVERT(varchar(10), tr.STRA_SIPKONT)), 0) AS ACIK
        FROM TBLSIPATRA tr WITH (NOLOCK)
        JOIN TBLSIPAMAS m WITH (NOLOCK)
          ON  m.SUBE_KODU = tr.SUBE_KODU
          AND m.FTIRSIP   = tr.STHAR_FTIRSIP
          AND m.FATIRS_NO = tr.FISNO
          AND m.CARI_KODU = tr.STHAR_ACIKLAMA
        WHERE tr.STHAR_ACIKLAMA = @CariKod
          AND tr.STHAR_GCKOD = 'C'
          AND ISNULL(m.UPDATE_KODU, '') <> 'Y'
      ) a
      WHERE a.ACIK > 0
    ) s

    WHERE r.CARIKOD = @CariKod
  ) x
) y;
```

Notlar:

- `STRA_SIPKONT` sayısal kolondur; anahtar `FISNO + '-' + CAST(STRA_SIPKONT AS VARCHAR(10))` biçiminde kurulur. Bu biçimle kurulan sorgu, test şirketinin kendi risk raporuyla bütün carilerde aynı sonucu verdi.
- `SC_YERI <> 'I'` koşulu `SC_YERI` boş olan satırları dışarıda bırakır; Netsis'in kendi hesabı da böyle davrandı. Boş değer görüyorsanız sonucu raporla karşılaştırın.
- Çok sayıda cari için döngü yerine her terimi `GROUP BY` ile bir kez hesaplayıp `CARIKOD` üzerinden birleştirin; yukarıdaki biçim tek cari içindir.
- Bu hesap yalnızca okur. `TBLCARISK` kaydı yazmak için SQL kullanmayın ([Genel bakış](/genel-bakis/#yazma-kurali)).
