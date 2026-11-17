---
title: Cari risk
description: Netsis'in cari risk hesabı; TBLCARISK kolonları, kalan kredi formülü ve standart tablolar üzerinde düz SQL ile yeniden kurulumu.
---

# Cari risk

Netsis bir belgeyi kaydederken carinin riskini kontrol eder (`RiskKontrol`) ve aşılmışsa `MÜŞTERİ RİSKLİ` hatası verir ([Sipariş hesaplama ve değiştirme](/rest/siparis-islemleri/#risk-reddi)). Aynı sayıyı önceden görmek için formül düz SQL ile yeniden kurulabilir. Bu sayfadaki bulgular tek bir test şirketinde, Netsis çekirdeği 9.0.72.5 ile yapılan canlı denemelerden gelir. Sorgunun önceki sürümü (bakiye kart özetinden, sevk ve yükleme `TBLCARISK`'teki saklanan sütunlardan, teminat limitten düşülerek) o şirketin bütün carilerinde Netsis'in kendi risk raporuyla aynı sonucu verdi. Bakiye dalı, teminat işareti ve `TEMINATI` terimi, sevk ve yükleme blokları sonradan Netsis'in risk fonksiyonunun metnine göre değiştirildi ve veriyle doğrulanmadı. Kendi şirketinizde de karşılaştırıp doğrulayın. «doğrulanmadı» işaretli parçalar test verisiyle sınanamadı.

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
     RISKLIMITI
  +  (banka teminatları + TEMINATI) × TEMINATIO / 100
  −  bakiye          (BORCRISKO > 0 ise BORCRISKO / 100 × TBLCAHAR toplamı, değilse kart bakiyesinin tamamı)
  −  senet asıl      × SARISKO   / 100
  −  senet ciro      × SCRISKO   / 100
  −  çek asıl        × CARISKO   / 100
  −  çek ciro        × CCRISKO   / 100
  −  açık siparişler × SIPRISKO  / 100
  −  sevk riski toplamı     × SEVKRISKO / 100
  −  yükleme riski toplamı  × YUKRISKO  / 100
```

Netsis'in red metnindeki «Risk değeri» = `RISKLIMITI` − kalan kredi.

İrsaliye terimi formüle alınmadı. Netsis'in risk fonksiyonu faturalanmamış satış irsaliyelerini (`FTIRSIP` 3, başlıkta `UPDATE_KODU` 'Y' değil) `GENELTOPLAM × IRSRISKO / 100` olarak hesaplar, ama satış parametresi `IRS_CARI` = `'E'` iken bu terimi toplamdan geri çıkarır. Kendi şirketinizde parametreyi `TBLSFATUPRM.IRS_CARI`'den okuyun (`SUBE_KODU` ile şubenizin satırı). `SFATUPRM` görünümü şubeyi Netsis oturumundan aldığı için oturum dışında, örneğin salt okunur bir SQL girişinde, satır döndürmez. `IRS_CARI` `'E'` değilse irsaliye terimini ekleyin.

Risk grubu: Netsis uygulaması risk fonksiyonuna (`CARISKBUL`, `INTERNALCARISKBUL`) grup desteğini (`@GRPDESTEK` = `'E'`) geçirirse ve carinin `TBLCARISK.RISKGRUP`'u doluysa, hesap grubun bütün carilerinin `TBLCARISK` satırları üzerinden yapılır; limitler ve riskler toplanır. Grup desteği bir tabloda tutulmaz, uygulamanın verdiği parametredir ve SQL'den okunamaz. Aşağıdaki sorgu tek cariyi hesaplar.

Terimlerin kaynağı:

| Terim | Kaynak |
|-------|--------|
| Bakiye | BORCRISKO 0, negatif ya da boşsa Netsis kartın `TBLCASABIT.CM_BORCT − CM_ALACT` değerini tam (yüzde uygulamadan) alır; BORCRISKO sıfırdan büyükse `BORCRISKO / 100 × SUM(TBLCAHAR.BORC − TBLCAHAR.ALACAK)` kullanır. Kart özet kolonları yalnız ilk dalda kullanılır; hareketle uyumsuz kalabildiklerine dair uyarı: [Cari bakiyesi](/veritabani/sql-ornekleri/#cari-bakiyesi). Aşağıdaki SQL iki dalı da kurar |
| Çek / senet | `TBLMCEK` ve `TBLMSEN`; cari `SC_VERENK`, `AS_C = 'A'` (asıl) ya da `'C'` (ciro), `SC_SONDUR = 'B'`, `SC_YERI <> 'I'`; `SC_YERI = 'C'` olanlar yalnız bugün < `SC_ODETRH` + 2 iken sayılır; `TUTAR` toplanır |
| Banka teminatı | `TBLBNKTEMSABIT`: `CARIKODU`, `RISKEDAHIL = 'E'`, `DURUM = 0`, `VADETARIH` bugün ya da sonrası ya da boş; `TUTAR`. Netsis teminatı ek limit gibi sayar: bu toplamı ve `TBLCARISK.TEMINATI`'yı `TEMINATIO` / 100 ile kalan krediye ekler. Bu terim veriyle **doğrulanmadı**; işareti risk fonksiyonunun metninden okundu |
| Açık sipariş | `TBLSIPATRA` ↔ `TBLSIPAMAS` (`SUBE_KODU`, `STHAR_FTIRSIP = FTIRSIP`, `FISNO = FATIRS_NO`, `STHAR_ACIKLAMA = CARI_KODU`), başlıkta `UPDATE_KODU` 'Y' değil (kalem süzgeci olarak `STHAR_GCKOD = 'C'` aşağıdaki SQL'de kullanılır; Netsis'in risk hesabı `GCKOD` süzmez); açık miktar = `STHAR_GCMIK − FIRMA_DOVTUT − sevk edilen`; Netsis açık siparişi yalnız satış siparişi (`FTIRSIP` 6) ve `STHAR_HTUR <> 'K'` kalemleri üzerinden sayar. Tutar Netsis'te açık × ((`STHAR_NF` + `REDMIK`) × (1 + `STHAR_KDV` / 100) − gümüş tevkifatı) olarak hesaplanır (`TBLSIPATRA.REDMIK` fonksiyonda `OTV` adıyla geçer; gümüş tevkifatı yalnız gümüş tevkifatı parametresi açık ve başlıkta `KDV_DAHILMI` = `'H'` iken uygulanır). Her açık kaleme başlığın `FAT_ALTM2` tutarı (negatifse ve satış parametresi `TEV_RISKEDAHILETME` açıksa) ve `FAT_ALTM1` × (1 + nakliye KDV oranı / 100) tutarı («ek maliyet 1 riske dahil» parametresi varsa) eklenir; başlık tutarları belge başına bir kez değil, açık kalem başına eklenir. Aşağıdaki sade SQL yalnız açık × `STHAR_NF` × (1 + `STHAR_KDV` / 100) toplar. Faturalanmamış satış irsaliyesi ayrı bir terimdir (formülün altındaki `IRS_CARI` notu). Yalnız açık > 0 olanlar |
| Sevk edilen | Netsis açık sipariş riskinde `NSF_SEVKYUKKALMIKGETIR(FISNO, STRA_SIPKONT, 1)` fonksiyonunu kullanır. Fonksiyon `KUMGENEL`'de `FUNCTIONID = 1` ve `ANAHTAR = FISNO + '-' + STRA_SIPKONT` satırının `TOPLAM1` değerinden (sevk), bu siparişe bağlı sevk satırlarının `FUNCTIONID = 3` kayıtlarındaki `TOPLAM3` toplamını (yükleme) çıkarır. `NSF_SEVKKALMIKGETIR` ise verilen `FUNCTIONID` ve `ANAHTAR` için `TOPLAM1` toplamını döndüren genel okuyucudur ve sevk riskinde kullanılır. Aşağıdaki SQL yalnız `FUNCTIONID = 1` `TOPLAM1` değerini düşer (`NSF_SEVKKALMIKGETIR(…, 1)`); yükleme düşümü yoktur, bu yüzden yüklemesi olan siparişte açık miktar Netsis'inkinden küçük çıkabilir (**doğrulanmadı**) |
| Sevk riski | `TBLSEVKTRA` (`TIP = 1`) satırlarında (`MIKTAR` − `KUMGENEL` `FUNCTIONID = 3` toplamı) × siparişin `STHAR_NF` × (1 + `STHAR_KDV` / 100) toplamı; `SEVKRISKO` ile çarpılır. `TBLCARISK.SEVKRISK` sütunu ham tutar olarak saklanır ama formülde yer almaz |
| Yükleme riski | `TIP = 3` yükleme satırlarının `MIKTAR` × sipariş birim fiyatı × (1 + KDV / 100) toplamı, `IRSFLAG` 1 olmayanlar; `YUKRISKO` ile çarpılır. `TBLCARISK.YUKRISK` sütunu formülde yer almaz |

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
           x.RISKLIMITI
         + (x.TEMINAT + x.TEMINATI) * x.TEMINATIO / 100.0
         - x.BAKIYE_RISK
         - x.SENET_ASIL  * x.SARISKO   / 100.0
         - x.SENET_CIRO  * x.SCRISKO   / 100.0
         - x.CEK_ASIL    * x.CARISKO   / 100.0
         - x.CEK_CIRO    * x.CCRISKO   / 100.0
         - x.ACIK_SIPARIS * x.SIPRISKO / 100.0
         - x.SEVK_TOPLAM * x.SEVKRISKO / 100.0
         - x.YUK_TOPLAM  * x.YUKRISKO  / 100.0 AS KALAN_KREDI
  FROM (
    SELECT r.CARIKOD,
           ISNULL(r.RISKLIMITI, 0) AS RISKLIMITI,
           ISNULL(r.TEMINATI, 0)   AS TEMINATI,
           ISNULL(r.TEMINATIO, 0)  AS TEMINATIO,
           ISNULL(r.SARISKO, 0)    AS SARISKO,
           ISNULL(r.SCRISKO, 0)    AS SCRISKO,
           ISNULL(r.CARISKO, 0)    AS CARISKO,
           ISNULL(r.CCRISKO, 0)    AS CCRISKO,
           ISNULL(r.SIPRISKO, 0)   AS SIPRISKO,
           ISNULL(r.SEVKRISKO, 0)  AS SEVKRISKO,
           ISNULL(r.YUKRISKO, 0)   AS YUKRISKO,
           CASE WHEN r.BORCRISKO > 0
                THEN r.BORCRISKO / 100.0 * h.HAREKET_BAKIYE
                ELSE b.BAKIYE END AS BAKIYE_RISK,
           t.TEMINAT,
           e.CEK_ASIL, e.CEK_CIRO, e.SENET_ASIL, e.SENET_CIRO,
           s.ACIK_SIPARIS, sv.SEVK_TOPLAM, yk.YUK_TOPLAM
    FROM TBLCARISK r WITH (NOLOCK)

    -- bakiye: kart özeti (BORCRISKO 0, negatif ya da boşken)
    CROSS JOIN (SELECT ISNULL(SUM(ISNULL(CM_BORCT, 0) - ISNULL(CM_ALACT, 0)), 0) AS BAKIYE
                FROM TBLCASABIT WITH (NOLOCK)
                WHERE CARI_KOD = @CariKod) b

    -- bakiye: hareket toplamı (BORCRISKO > 0 iken)
    CROSS JOIN (SELECT ISNULL(SUM(BORC - ALACAK), 0) AS HAREKET_BAKIYE
                FROM TBLCAHAR WITH (NOLOCK)
                WHERE CARI_KOD = @CariKod) h

    -- banka teminatları (doğrulanmadı)
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

    -- açık siparişler (NSF_SEVKKALMIKGETIR(..., 1) satır içine alındı; Netsis'in yükleme düşümü yok)
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

    -- sevk riski toplamı (doğrulanmadı: TBLSEVKMAS bağı ve sipariş başlığı / STHAR_HTUR <> 'K' koşulu alınmadı)
    CROSS JOIN (
      SELECT ISNULL(SUM(q.ACIK_SEVK * q.STHAR_NF * (1 + q.STHAR_KDV / 100.0)), 0) AS SEVK_TOPLAM
      FROM (
        SELECT tr.STHAR_NF, tr.STHAR_KDV,
               sv.MIKTAR - ISNULL((SELECT SUM(k.TOPLAM1)
                                   FROM KUMGENEL k WITH (NOLOCK)
                                   WHERE k.FUNCTIONID = 3
                                     AND k.ANAHTAR = sv.BELGENO + '-' + CONVERT(varchar(10), sv.SIRA)), 0) AS ACIK_SEVK
        FROM TBLSEVKTRA sv WITH (NOLOCK)
        JOIN TBLSIPATRA tr WITH (NOLOCK)
          ON  tr.SUBE_KODU = sv.SUBE_KODU
          AND tr.STHAR_FTIRSIP = '6'
          AND tr.FISNO = sv.SIPNO
          AND tr.STRA_SIPKONT = sv.SIPKONT
        WHERE sv.TIP = 1 AND tr.STHAR_ACIKLAMA = @CariKod
      ) q
      WHERE q.ACIK_SEVK > 0
    ) sv

    -- yükleme riski toplamı (doğrulanmadı)
    CROSS JOIN (
      SELECT ISNULL(SUM(y.MIKTAR * tr.STHAR_NF * (1 + tr.STHAR_KDV / 100.0)), 0) AS YUK_TOPLAM
      FROM TBLSEVKTRA sv WITH (NOLOCK)
      JOIN TBLSIPATRA tr WITH (NOLOCK)
        ON  tr.SUBE_KODU = sv.SUBE_KODU
        AND tr.STHAR_FTIRSIP = '6'
        AND tr.FISNO = sv.SIPNO
        AND tr.STRA_SIPKONT = sv.SIPKONT
      JOIN TBLSEVKTRA y WITH (NOLOCK)
        ON  y.SUBE_KODU = sv.SUBE_KODU
        AND y.TIP = 3
        AND y.SIPNO = sv.BELGENO
        AND y.SIPKONT = sv.SIRA
      WHERE sv.TIP = 1 AND tr.STHAR_ACIKLAMA = @CariKod
        AND (y.IRSFLAG <> 1 OR y.IRSFLAG IS NULL)
    ) yk

    WHERE r.CARIKOD = @CariKod
  ) x
) y;
```

Notlar:

- `STRA_SIPKONT` sayısal kolondur; anahtar `FISNO + '-' + CAST(STRA_SIPKONT AS VARCHAR(10))` biçiminde kurulur. Bu biçimle kurulan sorgunun önceki sürümü (sevk ve yükleme saklanan sütunlardan) Netsis'in risk raporuyla bütün carilerde aynı sonucu verdi; sonradan değiştirilen terimler (bakiye dalı, teminat, sevk, yükleme) doğrulanmadı.
- `SC_YERI <> 'I'` koşulu `SC_YERI` boş olan satırları dışarıda bırakır; Netsis'in kendi hesabı da böyle davrandı. Boş değer görüyorsanız sonucu raporla karşılaştırın.
- Çok sayıda cari için döngü yerine her terimi `GROUP BY` ile bir kez hesaplayıp `CARIKOD` üzerinden birleştirin; yukarıdaki biçim tek cari içindir.
- Bu hesap yalnızca okur. `TBLCARISK` kaydı yazmak için SQL kullanmayın ([Genel bakış](/genel-bakis/#yazma-kurali)).
