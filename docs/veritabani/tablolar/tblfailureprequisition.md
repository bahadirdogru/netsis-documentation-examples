---
title: TBLFAILUREPREQUISITION
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfailureprequisition/
---

# TBLFAILUREPREQUISITION

> Makine bakım talep onaylarının tutulduğu tablodur.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inceky numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi ye alır |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `CODE` | varchar(15) | hayır |  | bakım kodu bilgisi yer alır |
| 5 | `OWNER` | varchar(30) | evet |  | 1 |
| 6 | `DESCRIPTION` | TDBMEMO | evet |  | açıklama bilgisi yer alır |
| 7 | `STATUS` | char(1) | hayır |  | 1- onaylandı, 0- beklemede |
| 8 | `PREQDATE` | TDBDATETIME | hayır |  | onaylanma tarihi |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt ypan kullanıcı bilgisi yer alır. |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi yer alır |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır |
| 13 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `MAKINCKEYNO` | TDBINTEGER | evet |  |  |
| 24 | `DEPARTMAN` | varchar(15) | evet |  | Departman kodu bilgisi yer alır |
| 25 | `KATEGORI` | TDBBYTE | hayır |  | Kategorı kodu bilgisi yer alır |
| 26 | `ONCELIK` | TDBBYTE | hayır |  | Oncelık kodu bilgisi yer alır |
| 27 | `ARIZAKODU` | varchar(8) | evet |  | Arızakodu kodu bilgisi yer alır |
| 28 | `PERINCKEYNO` | TDBINTEGER | evet |  |  |
| 29 | `MAKTIP` | TDBINTEGER | hayır |  | 0- makine 1, kaynak |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CODE, OWNER, DESCRIPTION
FROM dbo.TBLFAILUREPREQUISITION WITH (NOLOCK);
```
