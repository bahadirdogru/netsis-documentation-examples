---
title: TBLFORECASTTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblforecasttip/
---

# TBLFORECASTTIP

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 20
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KOD` | varchar(15) | evet |  | Kod numarasının tutulduğu sahadır |
| 4 | `FORECASTTIP` | TDBSMALLINT | hayır |  |  |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 16 | `PLANID` | TDBINTEGER | hayır |  | Plan ID |
| 17 | `ROOTID` | TDBINTEGER | hayır |  |  |
| 18 | `AKTIF_PASIF` | TDBSMALLINT | hayır |  | Aktif Pasif bilgisi yer alır. |
| 19 | `TEMPLATE` | TDBSMALLINT | hayır |  |  |
| 20 | `TAHMINYONTEMI` | varchar(40) | evet |  |  |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFORECASTTIP_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, KOD, FORECASTTIP, C_YEDEK1, C_YEDEK2
FROM dbo.TBLFORECASTTIP WITH (NOLOCK);
```
