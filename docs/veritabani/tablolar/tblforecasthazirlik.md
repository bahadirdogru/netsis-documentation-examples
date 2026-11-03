---
title: TBLFORECASTHAZIRLIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblforecasthazirlik/
---

# TBLFORECASTHAZIRLIK

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 31
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `PERIYOTNO` | TDBSMALLINT | hayır |  | Periyod numarasıdır. |
| 4 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu tutar. |
| 5 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodunu tutar. |
| 6 | `KOD` | varchar(15) | evet |  | Kod numarasının tutlduğu sahadır |
| 7 | `MIKTAR` | TDBFLOAT | hayır |  | Miktar alanını tutar. |
| 8 | `TUTAR` | TDBFLOAT | hayır |  | Tutar bilgisini tutar. |
| 9 | `FIRMA_DOVTUT` | TDBFLOAT | hayır |  | Girilen sipariş miktarının teslim edilmiş miktarını gösterir. |
| 10 | `YILKODU` | varchar(4) | hayır |  | Yıl kodu sahasıdır. |
| 11 | `FLAG` | char(1) | hayır |  | 1 Alış, 2 Satış, 3 Sarf,4 Üretim'i ifade eder |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `ROOTID` | TDBINTEGER | hayır |  |  |
| 23 | `PLANID` | TDBINTEGER | hayır |  |  |
| 24 | `MIKTAR2` | TDBFLOAT | hayır |  |  |
| 25 | `OLCUBR_MIKTAR2` | TDBSMALLINT | hayır |  |  |
| 26 | `ISMISSING` | char(1) | evet |  |  |
| 27 | `MISSING_MIKTAR` | TDBFLOAT | evet |  |  |
| 28 | `SIRKET` | varchar(30) | evet |  |  |
| 29 | `SUBE_KODU` | TDBSMALLINT | hayır |  |  |
| 30 | `ISDECIMAL` | int | evet |  |  |
| 31 | `GUNCELSATIS` | TDBBYTE | hayır |  | 9025 seti ile birlikte tahminlemede güncel satışların da gelmesi desteklenmiştir. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `FORECASTHAZIRLIK_IND_1` | `FLAG, KOD, PERIYOTNO` | nonclustered |
| `TBLFORECASTHAZIRLIK_IDX_YAPKOD` | `YAPKOD, STOK_KODU` | nonclustered |
| `TBLFORECASTHAZIRLIK_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, PERIYOTNO, STOK_KODU, YAPKOD, KOD
FROM dbo.TBLFORECASTHAZIRLIK WITH (NOLOCK);
```
