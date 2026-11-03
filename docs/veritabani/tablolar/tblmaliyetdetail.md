---
title: TBLMALIYETDETAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaliyetdetail/
---

# TBLMALIYETDETAIL

> Açıklama yok.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 75

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  |  |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi yer alır. |
| 4 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 5 | `GRUP_KODU` | TDBSTOKKOD | evet |  | Grup kodu bilgisi yer alır. |
| 6 | `ANAKOD` | varchar(15) | evet |  |  |
| 7 | `HAT_KODU` | varchar(35) | evet |  | Hat kodu bilgisi yer alır. |
| 8 | `SIPNO` | TDBBELGENO | evet |  | Sipariş no bilgisi yer alır. |
| 9 | `SIPKONT` | TDBSMALLINT | evet |  | Sipkont bilgisi yer alır. |
| 10 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 11 | `URETMIK` | TDBFLOAT | evet |  | Üretim miktarı bilgisi yer alır. |
| 12 | `HAMSTUT` | TDBFLOAT | evet |  |  |
| 13 | `ISCILIK` | TDBFLOAT | evet |  | İşçilik tutarı bilgisi yer alır. |
| 14 | `ISCILIK2` | TDBFLOAT | evet |  | İşçilik2 bilgisi yer alır. |
| 15 | `ENERJI` | TDBFLOAT | evet |  | Enerji tutarı bilgisi yer alır. |
| 16 | `AMORTISMAN` | TDBFLOAT | evet |  | amortısman tutarı bilgisi yer alır. |
| 17 | `AMBALAJ` | TDBFLOAT | evet |  | ambalaj tutarı bilgisi yer alır. |
| 18 | `YARDSER` | TDBFLOAT | evet |  | Yardımcı servis tutarı bilgisi yer alır. |
| 19 | `YEDEKP` | TDBFLOAT | evet |  |  |
| 20 | `MALGIDER1` | TDBFLOAT | evet |  | Gider1 tutar bilgisi yer alır. |
| 21 | `MALGIDER2` | TDBFLOAT | evet |  | Gider2 bilgisi yer alır. |
| 22 | `MALGIDER3` | TDBFLOAT | evet |  | Gider3 bilgisi yer alır. |
| 23 | `MALGIDER4` | TDBFLOAT | evet |  | Gider4 bilgisi yer alır. |
| 24 | `MALGIDER5` | TDBFLOAT | evet |  | Gider5 bilgisi yer alır. |
| 25 | `MALFIAT` | TDBFLOAT | evet |  |  |
| 26 | `SATIS_TUT` | TDBFLOAT | evet |  | Satış tutarı bilgisi yer alır. |
| 27 | `SATIS_MIK` | TDBFLOAT | evet |  | satış miktarı bilgisi yer alır. |
| 28 | `ORTSFIAT` | TDBFLOAT | evet |  | Ortalama satış fiyatı bilgisi yer alır. |
| 29 | `ORTMAL` | TDBFLOAT | evet |  | Ortalama maliyet bilgisi yer alır. |
| 30 | `IADETUT` | TDBFLOAT | evet |  | İade tutarı bilgisi yer alır. |
| 31 | `YARIMSARF` | TDBFLOAT | evet |  |  |
| 32 | `IADEMIK` | TDBFLOAT | evet |  | İade miktarı yer alır. |
| 33 | `CURHAMSTUT` | TDBFLOAT | evet |  |  |
| 34 | `CURISCILIK` | TDBFLOAT | evet |  |  |
| 35 | `CURISCILIK2` | TDBFLOAT | evet |  |  |
| 36 | `CURENERJI` | TDBFLOAT | evet |  |  |
| 37 | `CURAMORTISMAN` | TDBFLOAT | evet |  |  |
| 38 | `CURAMBALAJ` | TDBFLOAT | evet |  |  |
| 39 | `CURYARDSER` | TDBFLOAT | evet |  |  |
| 40 | `CURYEDEKP` | TDBFLOAT | evet |  |  |
| 41 | `CURMALGIDER1` | TDBFLOAT | evet |  |  |
| 42 | `CURMALGIDER2` | TDBFLOAT | evet |  |  |
| 43 | `CURMALGIDER3` | TDBFLOAT | evet |  |  |
| 44 | `CURMALGIDER4` | TDBFLOAT | evet |  |  |
| 45 | `CURMALGIDER5` | TDBFLOAT | evet |  |  |
| 46 | `CURMALFIAT` | TDBFLOAT | evet |  |  |
| 47 | `CURSATIS_TUT` | TDBFLOAT | evet |  |  |
| 48 | `CURORTSFIAT` | TDBFLOAT | evet |  |  |
| 49 | `CURORTMAL` | TDBFLOAT | evet |  |  |
| 50 | `CURIADETUT` | TDBFLOAT | evet |  |  |
| 51 | `CURYARIMSARF` | TDBFLOAT | evet |  |  |
| 52 | `CURHAMORAN` | TDBFLOAT | evet |  |  |
| 53 | `HAMYUZ` | TDBFLOAT | evet |  |  |
| 54 | `ISCYUZ` | TDBFLOAT | evet |  |  |
| 55 | `ENERJIYUZ` | TDBFLOAT | evet |  |  |
| 56 | `AMORYUZ` | TDBFLOAT | evet |  |  |
| 57 | `AMBYUZ` | TDBFLOAT | evet |  |  |
| 58 | `YARDSERYUZ` | TDBFLOAT | evet |  |  |
| 59 | `YEDEKPYUZ` | TDBFLOAT | evet |  |  |
| 60 | `MALGIDER1_YUZ` | TDBFLOAT | evet |  |  |
| 61 | `MALGIDER2_YUZ` | TDBFLOAT | evet |  |  |
| 62 | `MALGIDER3_YUZ` | TDBFLOAT | evet |  |  |
| 63 | `MALGIDER4_YUZ` | TDBFLOAT | evet |  |  |
| 64 | `MALGIDER5_YUZ` | TDBFLOAT | evet |  |  |
| 65 | `MASRAFYUZ` | TDBFLOAT | evet |  |  |
| 66 | `STOK_MIK` | TDBFLOAT | evet |  | İşletme mık bilgisi yer alır. |
| 67 | `YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 68 | `YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 69 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 70 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 71 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 72 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 73 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 74 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 75 | `DEVIR` | char(1) | hayır |  | Devir girişi yapılabilmesi için eklenen saha. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, TARIH, STOK_KODU, GRUP_KODU, ANAKOD
FROM dbo.TBLMALIYETDETAIL WITH (NOLOCK);
```
