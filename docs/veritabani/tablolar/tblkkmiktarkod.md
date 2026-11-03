---
title: TBLKKMIKTARKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkmiktarkod/
---

# TBLKKMIKTARKOD

> KALİTE ISO 2859 STANDARD DESTEĞİ İLE GELEN KALİTE KONTROL MİKTAR KODLARI YER ALIR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 20

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `KOD` | TDBGRUPKOD | hayır |  | Kod bilgisi yer alır. |
| 3 | `SEVIYE` | TDBGRUPKOD | hayır |  | Seviye bilgisi yer alır. |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 5 | `BASMIK` | TDBFLOAT | evet |  | Başlangıç miktarı bilgisi yer alır. |
| 6 | `BITMIK` | TDBFLOAT | evet |  | Bitiş miktarı bligisi yer alır. |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KOD, SEVIYE, ACIKLAMA, BASMIK, BITMIK
FROM dbo.TBLKKMIKTARKOD WITH (NOLOCK);
```
