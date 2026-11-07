---
title: SQL örnekleri
url: https://netsis.bahadirdogru.com/veritabani/sql-ornekleri/
---

# SQL örnekleri

Aşağıdaki sorgular **salt okunur** raporlama içindir. Hepsi bir şirket veritabanında çalışır (ör. `USE ACME2024;`). Şube ve işletme kodlarını kendi kurulumunuza göre değiştirin.

> Uygulama kodunda değerleri metin birleştirerek sorguya koymayın; parametre kullanın (`@CariKod`). Aşağıdaki örneklerde okunabilirlik için sabit değer yazıldı.

> Netsis kurulumları eski SQL Server sürümlerinde çalışabilir (2008 R2 sahada görülür). `OFFSET … FETCH`, `SUM() OVER (ORDER BY …)` gibi 2012 ile gelen yapılar orada çalışmaz; eski sürüm uyumlu karşılıkları [Sayfalama ve eski sürümler](#sayfalama-ve-eski-surumler) bölümünde. Sürümü öğrenmek için `SELECT SERVERPROPERTY('ProductVersion');`.

## Cari

### Cari listesi

```sql
SELECT CARI_KOD, dbo.TRK(CARI_ISIM) AS CARI_ISIM, CARI_TIP, CARI_IL, VERGI_DAIRESI, VERGI_NUMARASI,
       M_KOD AS MUHASEBE_KODU, PLASIYER_KODU, EMAIL
FROM TBLCASABIT WITH (NOLOCK)
WHERE ISLETME_KODU = 1 AND SUBE_KODU = 0
ORDER BY CARI_KOD;
```

### Cari bakiyesi

```sql
SELECT h.CARI_KOD, dbo.TRK(c.CARI_ISIM) AS CARI_ISIM,
       SUM(h.BORC) AS BORC, SUM(h.ALACAK) AS ALACAK,
       SUM(h.BORC) - SUM(h.ALACAK) AS BAKIYE
FROM TBLCAHAR h WITH (NOLOCK)
JOIN TBLCASABIT c WITH (NOLOCK) ON c.CARI_KOD = h.CARI_KOD
GROUP BY h.CARI_KOD, c.CARI_ISIM
HAVING ABS(SUM(h.BORC) - SUM(h.ALACAK)) > 0.009
ORDER BY BAKIYE DESC;
```

### Cari ekstresi

```sql
SELECT TARIH, VADE_TARIHI, BELGE_NO, ACIKLAMA, BORC, ALACAK,
       SUM(BORC - ALACAK) OVER (ORDER BY TARIH, INC_KEY_NUMBER) AS YURUYEN_BAKIYE
FROM TBLCAHAR WITH (NOLOCK)
WHERE CARI_KOD = '120-01-001'
ORDER BY TARIH, INC_KEY_NUMBER;
```

`SUM() OVER (ORDER BY …)` SQL Server 2012 ve sonrasında çalışır; eski sürüm için ilişkili alt sorgu:

```sql
SELECT TOP 100 h.TARIH, h.BELGE_NO, h.BORC, h.ALACAK,
       (SELECT SUM(ISNULL(x.BORC, 0) - ISNULL(x.ALACAK, 0))
        FROM TBLCAHAR x WITH (NOLOCK)
        WHERE x.CARI_KOD = h.CARI_KOD
          AND (x.TARIH < h.TARIH OR (x.TARIH = h.TARIH AND x.INC_KEY_NUMBER <= h.INC_KEY_NUMBER))) AS YURUYEN_BAKIYE
FROM TBLCAHAR h WITH (NOLOCK)
WHERE h.CARI_KOD = '120-01-001'
ORDER BY h.TARIH DESC, h.INC_KEY_NUMBER DESC;
```

### Cari yaşlandırma

Vade tarihine göre 30 günlük dilimler; vade boşsa belge tarihi alınır. Net = borç − alacak; bakiyesi sıfır olan cariler elenir.

```sql
SELECT x.CARI_KOD,
       SUM(CASE WHEN x.GUN <= 30 THEN x.NET ELSE 0 END)             AS VADE_0_30,
       SUM(CASE WHEN x.GUN BETWEEN 31 AND 60 THEN x.NET ELSE 0 END) AS VADE_31_60,
       SUM(CASE WHEN x.GUN BETWEEN 61 AND 90 THEN x.NET ELSE 0 END) AS VADE_61_90,
       SUM(CASE WHEN x.GUN > 90 THEN x.NET ELSE 0 END)              AS VADE_90_USTU,
       SUM(x.NET) AS TOPLAM
FROM (SELECT CARI_KOD, ISNULL(BORC, 0) - ISNULL(ALACAK, 0) AS NET,
             DATEDIFF(day, ISNULL(VADE_TARIHI, TARIH), GETDATE()) AS GUN
      FROM TBLCAHAR WITH (NOLOCK)) x
GROUP BY x.CARI_KOD
HAVING SUM(x.NET) <> 0
ORDER BY TOPLAM DESC;
```

> `TBLCASABIT.CM_BORCT` ve `CM_ALACT` özet alanlarına güvenmeyin: REST ile eklenen cari hareket bunları artırmadı, silmek düşürdü. Bakiyeyi her zaman `TBLCAHAR` toplamından alın.

### Carinin açık siparişleri

```sql
SELECT TOP 100 FATIRS_NO, TARIH, SIPARIS_TEST AS TESLIM, TIPI, GENELTOPLAM
FROM TBLSIPAMAS WITH (NOLOCK)
WHERE CARI_KODU = '120-01-001'
  AND FTIRSIP IN ('6', '7')
  AND TIPI <> 1                                    -- kapalı değil
  AND (KAPATILMIS IS NULL OR KAPATILMIS <> 'K')
ORDER BY TARIH DESC;
```

### Carinin plasiyeri

```sql
SELECT PLASIYER_KODU FROM TBLCASABIT WHERE CARI_KOD = '120-01-001';
```

## Stok

### Barkoddan stok kodu

```sql
SELECT STOK_KODU FROM TBLSTSABIT WITH (NOLOCK)
WHERE BARKOD1 = '8690000000001' OR BARKOD2 = '8690000000001' OR BARKOD3 = '8690000000001';
```

### Depo bazında stok miktarı (hareketten)

```sql
SELECT h.STOK_KODU, dbo.TRK(s.STOK_ADI) AS STOK_ADI, h.DEPO_KODU,
       SUM(CASE WHEN h.STHAR_GCKOD = 'G' THEN h.STHAR_GCMIK ELSE -h.STHAR_GCMIK END) AS MIKTAR
FROM TBLSTHAR h WITH (NOLOCK)
JOIN TBLSTSABIT s WITH (NOLOCK) ON s.STOK_KODU = h.STOK_KODU
GROUP BY h.STOK_KODU, s.STOK_ADI, h.DEPO_KODU
HAVING SUM(CASE WHEN h.STHAR_GCKOD = 'G' THEN h.STHAR_GCMIK ELSE -h.STHAR_GCMIK END) <> 0;
```

> Siparişler `TBLSIPATRA`'dadır, `TBLSTHAR`'a girmez; bu yüzden yukarıdaki sorgu fiili stoğu verir. Faturalanmış irsaliyelerin hem irsaliye hem fatura satırı oluşup oluşmadığı kurulum parametrelerine bağlıdır; kendi verinizde `STHAR_HTUR` dağılımını kontrol edin.

### Depo bazında bakiye (özet tablodan)

`TBLSTOKPH` Netsis'in tetikleyiciyle güncellediği depo bazında toplamları tutar; büyük `TBLSTHAR` taramasından çok daha hızlıdır. Promosyon ve yapılandırma kodu satırları ayrı olduğu için stok + depo bazında toplanır.

```sql
SELECT p.STOK_KODU, MAX(s.STOK_ADI) AS STOK_ADI, p.DEPO_KODU, MAX(d.DEPO_ISMI) AS DEPO_ISMI,
       SUM(ISNULL(p.TOP_GIRIS_MIK, 0)) AS GIRIS,
       SUM(ISNULL(p.TOP_CIKIS_MIK, 0)) AS CIKIS,
       SUM(ISNULL(p.TOP_GIRIS_MIK, 0) - ISNULL(p.TOP_CIKIS_MIK, 0)) AS BAKIYE
FROM TBLSTOKPH p WITH (NOLOCK)
LEFT JOIN TBLSTSABIT s WITH (NOLOCK) ON s.STOK_KODU = p.STOK_KODU
LEFT JOIN TBLSTOKDP  d WITH (NOLOCK) ON d.DEPO_KODU = p.DEPO_KODU
GROUP BY p.STOK_KODU, p.DEPO_KODU
ORDER BY p.STOK_KODU, p.DEPO_KODU;
```

Hareketten hesaplanan miktarla (üstteki sorgu) karşılaştırıp kendi verinizde tutarlı olduğunu bir kez doğrulayın.

### Devir hızı (son 90 gün)

Satış kaynaklı çıkışlar (`STHAR_HTUR` `J` fatura, `N` irsaliye, `H` ambar çıkışı) bakiyeye oranlanır.

```sql
SELECT t.STOK_KODU, s.STOK_ADI, t.CIKIS_90, ISNULL(b.BAKIYE, 0) AS BAKIYE,
       CASE WHEN ISNULL(b.BAKIYE, 0) > 0 THEN t.CIKIS_90 / b.BAKIYE END AS DEVIR_ORANI
FROM (SELECT STOK_KODU, SUM(STHAR_GCMIK) AS CIKIS_90
      FROM TBLSTHAR WITH (NOLOCK)
      WHERE STHAR_GCKOD = 'C' AND STHAR_HTUR IN ('J', 'N', 'H')
        AND STHAR_TARIH >= DATEADD(day, -90, GETDATE())
      GROUP BY STOK_KODU) t
LEFT JOIN (SELECT STOK_KODU, SUM(ISNULL(TOP_GIRIS_MIK, 0) - ISNULL(TOP_CIKIS_MIK, 0)) AS BAKIYE
           FROM TBLSTOKPH WITH (NOLOCK) GROUP BY STOK_KODU) b ON b.STOK_KODU = t.STOK_KODU
LEFT JOIN TBLSTSABIT s WITH (NOLOCK) ON s.STOK_KODU = t.STOK_KODU
ORDER BY t.CIKIS_90 DESC;
```

`STHAR_HTUR` değerleri kurulumdan kuruluma değişebilir; kendi verinizde dağılımına bakın: `SELECT STHAR_HTUR, STHAR_GCKOD, COUNT(*) FROM TBLSTHAR GROUP BY STHAR_HTUR, STHAR_GCKOD`.

### Depo listesi

```sql
SELECT DEPO_KODU, dbo.TRK(DEPO_ISMI) AS DEPO_ISMI
FROM TBLSTOKDP WHERE SUBE_KODU = 0;
```

## Fatura ve irsaliye

### Belge başlığı ve kalemleri

```sql
SELECT f.FTIRSIP, f.FATIRS_NO, f.CARI_KODU, f.TARIH, f.GENELTOPLAM, f.GIB_FATIRS_NO,
       h.STOK_KODU, h.STHAR_GCMIK AS MIKTAR, h.STHAR_NF AS NET_FIYAT, h.STHAR_KDV AS KDV_ORANI, h.DEPO_KODU
FROM TBLFATUIRS f WITH (NOLOCK)
JOIN TBLSTHAR h WITH (NOLOCK)
  ON  h.FISNO          = f.FATIRS_NO
  AND h.STHAR_FTIRSIP  = f.FTIRSIP
  AND h.STHAR_ACIKLAMA = f.CARI_KODU      -- kalemde cari kodu STHAR_ACIKLAMA'dadır
WHERE f.FTIRSIP = '1'                       -- satış faturası
  AND f.FATIRS_NO = 'ABC2024000000123';
```

### Ek açıklamalar (EKACK1..16)

```sql
SELECT f.FATIRS_NO, e.ACIK1, e.ACIK2, e.ACIK3
FROM TBLFATUIRS f
JOIN TBLFATUEK e ON e.FKOD = f.FTIRSIP AND e.FATIRSNO = f.FATIRS_NO AND e.CKOD = f.CARI_KODU
WHERE f.FTIRSIP = '1' AND f.FATIRS_NO = 'ABC2024000000123';
```

### Faturanın GİB numarası

```sql
SELECT GIB_FATIRS_NO FROM TBLFATUIRS
WHERE FATIRS_NO = 'ABC2024000000123' AND CARI_KODU = '120-01-001';
```

### Günlük satış özeti

```sql
SELECT CAST(TARIH AS date) AS GUN, COUNT(*) AS FATURA, SUM(GENELTOPLAM) AS TOPLAM
FROM TBLFATUIRS WITH (NOLOCK)
WHERE FTIRSIP = '1' AND TARIH >= DATEADD(day, -30, CAST(GETDATE() AS date))
GROUP BY CAST(TARIH AS date)
ORDER BY GUN;
```

## Sipariş

### Açık sipariş kalemleri

```sql
SELECT m.FATIRS_NO AS SIPARIS_NO, m.CARI_KODU, m.TARIH, t.STOK_KODU,
       t.STHAR_GCMIK AS MIKTAR, t.STHAR_NF AS FIYAT, t.DEPO_KODU
FROM TBLSIPAMAS m WITH (NOLOCK)
JOIN TBLSIPATRA t WITH (NOLOCK)
  ON t.FISNO = m.FATIRS_NO AND t.STHAR_FTIRSIP = m.FTIRSIP AND t.STHAR_ACIKLAMA = m.CARI_KODU
WHERE m.FTIRSIP = '6'          -- müşteri siparişi
  AND m.TIPI <> 1;             -- kapalı olmayanlar
```

## Finans

Tablolar ve anahtarlar: [Finans tabloları](/veritabani/finans-tablolari/).

### Kasa hareketleri

```sql
SELECT SIRA, KSMAS_KOD, TARIH, FISNO, IO, TIP, CARI_MUH, KOD, ACIKLAMA, TUTAR, PLASIYER_KODU, PROJE_KODU
FROM TBLKASA WITH (NOLOCK)
WHERE KSMAS_KOD = '01'
ORDER BY TARIH DESC, SIRA DESC;
```

`SIRA` kaydın kimliğidir; REST `DELETE SafeDeposits/{SIRA}` de bunu ister. Kasa bakiyesi:

```sql
SELECT KSMAS_KOD,
       SUM(CASE WHEN IO = 'G' THEN TUTAR ELSE 0 END) AS GELIR,
       SUM(CASE WHEN IO = 'C' THEN TUTAR ELSE 0 END) AS GIDER,
       SUM(CASE WHEN IO = 'G' THEN TUTAR ELSE -TUTAR END) AS BAKIYE
FROM TBLKASA WITH (NOLOCK)
GROUP BY KSMAS_KOD;
```

### Banka hesapları ve hareketleri

```sql
SELECT h.NETHESKODU, h.ACIKLAMA, b.BANKAADI, h.BANKAHESNO, h.IBANNO, h.DOVIZTIPI
FROM TBLBNKHESSABIT h WITH (NOLOCK)
LEFT JOIN TBLBNKSABIT b WITH (NOLOCK) ON b.NETBANKAKODU = h.NETBANKAKODU
ORDER BY h.NETHESKODU;

SELECT TOP 100 TARIH, VADETARIH, BA, TUTAR, ACIKLAMA, BELGENO, PROJEKODU
FROM TBLBNKHESTRA WITH (NOLOCK)
WHERE NETHESKODU = 'BNK-001'
ORDER BY TARIH DESC, INCKEYNO DESC;
```

### Çek ve senet listesi

Dört tablo aynı yapıdadır; müşteri evrakında cari `SC_VERENK`, borç evrakında `SC_VERILENK` kolonundadır.

```sql
SELECT TUR, SC_NO, CARI_KOD, SC_GIRTRH, VADETRH, TUTAR, SC_SONDUR, SC_BANKNO
FROM (
  SELECT 'Musteri ceki'   AS TUR, SC_NO, SC_GIRTRH, VADETRH, TUTAR, SC_SONDUR, SC_BANKNO, SC_VERENK   AS CARI_KOD FROM TBLMCEK WITH (NOLOCK)
  UNION ALL
  SELECT 'Musteri senedi',        SC_NO, SC_GIRTRH, VADETRH, TUTAR, SC_SONDUR, SC_BANKNO, SC_VERENK              FROM TBLMSEN WITH (NOLOCK)
  UNION ALL
  SELECT 'Borc ceki',             SC_NO, SC_GIRTRH, VADETRH, TUTAR, SC_SONDUR, SC_BANKNO, SC_VERILENK            FROM TBLBCEK WITH (NOLOCK)
  UNION ALL
  SELECT 'Borc senedi',           SC_NO, SC_GIRTRH, VADETRH, TUTAR, SC_SONDUR, SC_BANKNO, SC_VERILENK            FROM TBLBSEN WITH (NOLOCK)
) u
ORDER BY VADETRH DESC;
```

Tür etiketleri bilerek ASCII yazıldı; bağlantının kod sayfasına bağlı kalmaz. `SC_SONDUR`: `P` portföy, `B` banka, `O` ödendi, `I` iade (gözlem).

### Vadesi yaklaşan çek ve senetler

Aynı birleşim üzerinde; 30 gün içinde vadesi gelen, henüz ödenmemiş evraklar:

```sql
SELECT TUR, SC_NO, CARI_KOD, VADETRH, TUTAR, SC_SONDUR,
       DATEDIFF(day, GETDATE(), VADETRH) AS KALAN_GUN
FROM ( /* üstteki UNION ALL */ ) u
WHERE SC_SONDUR IN ('P', 'B')
  AND VADETRH <= DATEADD(day, 30, GETDATE())
ORDER BY VADETRH;
```

### Dekont başlığı ve satır toplamları

Başlık ve satırlar `SERI_NO + DEKONT_NO` ile bağlanır; iki tablodaki `INCKEYNO` ayrı sayaçlardır, bağ **değildir**.

```sql
SELECT m.SERI_NO, m.DEKONT_NO, t.TARIH, t.SATIR, t.BORC, t.ALACAK
FROM TBLDEKOMAS m WITH (NOLOCK)
LEFT JOIN (SELECT SERI_NO, DEKONT_NO, MIN(TARIH) AS TARIH, COUNT(*) AS SATIR,
                  SUM(CASE WHEN B_A = 'B' THEN ISNULL(TUTAR, 0) ELSE 0 END) AS BORC,
                  SUM(CASE WHEN B_A = 'A' THEN ISNULL(TUTAR, 0) ELSE 0 END) AS ALACAK
           FROM TBLDEKOTRA WITH (NOLOCK)
           GROUP BY SERI_NO, DEKONT_NO) t
  ON t.SERI_NO = m.SERI_NO AND t.DEKONT_NO = m.DEKONT_NO
ORDER BY t.TARIH DESC;

-- Bir dekontun satırları
SELECT SIRA_NO, TARIH, FISNO, C_M, KOD, B_A, TUTAR, ACIKLAMA1
FROM TBLDEKOTRA WITH (NOLOCK)
WHERE SERI_NO = 'A' AND DEKONT_NO = 12
ORDER BY SIRA_NO;
```

## Sayfalama ve eski sürümler

SQL Server 2008 R2'de `OFFSET … FETCH` yoktur. Sayfalama `ROW_NUMBER()` ile yazılır; sıralama anahtarı tekil olmalıdır, yoksa sayfalar arasında satır kayar (tarihe eşitlik bozucu olarak kimlik ekleyin):

```sql
SELECT CARI_KOD, CARI_ISIM, CARI_IL
FROM (
  SELECT c.*, ROW_NUMBER() OVER (ORDER BY CARI_KOD ASC) AS RN
  FROM TBLCASABIT c WITH (NOLOCK)
  WHERE CARI_TIP = 'A'
) x
WHERE RN BETWEEN 201 AND 250      -- 5. sayfa, sayfa boyu 50
ORDER BY RN;

-- Toplam satır sayısı ayrı sorguyla
SELECT COUNT(*) FROM TBLCASABIT WITH (NOLOCK) WHERE CARI_TIP = 'A';
```

Diğer 2008 uyumlu karşılıklar:

| 2012+ | 2008 R2 |
|-------|---------|
| `SUM(x) OVER (ORDER BY …)` | ilişkili alt sorgu ([yürüyen bakiye](#cari-ekstresi)) |
| `FORMAT()` | `CONVERT(varchar, TARIH, 104)`; gün başı için `DATEADD(day, DATEDIFF(day, 0, TARIH), 0)` (`CAST(… AS date)` 2008'de de çalışır) |
| `IIF`, `CONCAT`, `TRY_CONVERT` | `CASE`, `+` ile birleştirme, `CONVERT` |

## E-belge ve dizayn

```sql
-- E-fatura / e-arşiv serileri (şube 0)
SELECT BIRIMKOD FROM TBLEFATPRM   WHERE SUBE_KODU = 0;
SELECT BIRIMKOD FROM TBLEARSIVPRM WHERE SUBE_KODU = 0;

-- E-irsaliye serileri
SELECT SERI FROM TBLEIRSSERI WHERE C_YEDEK1 IS NULL AND SUBE_KODU = 0;

-- Dizaynlar: 99 e-fatura, 100 e-arşiv, 104 e-irsaliye
SELECT DIZAYNNO, dbo.TRK(DZNADI + ' [' + DZNACIK + ']') AS ADI
FROM TBLDIZAYNSABIT
WHERE DIZAYNTIPI = 99 AND ISLETME_KODU = 1 AND SUBE_KODU = 0;
```

## Tanımlar

```sql
-- Aktif işletme
SELECT ISLETME_KODU FROM TBLISLETMELER WITH (NOLOCK) WHERE AKTIF = 'E' AND ISLETME_KODU > 0;

-- Masraf merkezleri
SELECT MKOD, dbo.TRK(ISNULL(ACIKLAMA, '')) AS ACIKLAMA, MUHKOD, SATMUHKOD
FROM TBLMASRAF WHERE ISLETME_KODU = 1 AND SUBE_KODU = 0 AND MKOD IS NOT NULL;

-- Sunucudaki şirketler
SELECT DISTINCT SIRKET, SIRKETYILI FROM NETSIS.dbo.SIRKETLER30;
```

## Dikkatli güncellemeler

Netsis'in kendisinin de yalnızca tek alan değiştirdiği bilinen birkaç işlem SQL ile yapılabilir. Yine de **test şirketinde deneyin**, işlemi bir transaction içinde yapın ve etkilenen satır sayısını kontrol edin.

```sql
-- Müşteri siparişini onayla (TIPI=2) ya da onayı geri al (TIPI=3)
BEGIN TRAN;
UPDATE TBLSIPAMAS SET TIPI = 2
WHERE FTIRSIP = '6' AND FATIRS_NO = @SiparisNo AND CARI_KODU = @CariKod;
-- @@ROWCOUNT = 1 değilse ROLLBACK
COMMIT;
```

Belge, kart ve hareket **oluşturma, silme ve tutar değiştirme** işleri için [NetOpenX](/netopenx/) kullanın.
