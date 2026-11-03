---
title: SQL örnekleri
description: Netsis veritabanı için sık kullanılan okuma sorguları.
---

# SQL örnekleri

Aşağıdaki sorgular **salt okunur** raporlama içindir. Hepsi bir şirket veritabanında çalışır (ör. `USE ACME2024;`). Şube ve işletme kodlarını kendi kurulumunuza göre değiştirin.

> Uygulama kodunda değerleri metin birleştirerek sorguya koymayın; parametre kullanın (`@CariKod`). Aşağıdaki örneklerde okunabilirlik için sabit değer yazıldı.

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
