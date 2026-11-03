---
title: TBLIHRKONTEYNIRTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrkonteynirtip/
---

# TBLIHRKONTEYNIRTIP

> KONTEYNER TANIM KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TIP_KODU` | varchar(10) | hayır |  | Tip kodu bilgisi yer alır. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 3 | `HACIM` | TDBFLOAT | evet |  | Hacim bilgisi yer alır. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 TIP_KODU, ACIKLAMA, HACIM, SUBE_KODU, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLIHRKONTEYNIRTIP WITH (NOLOCK);
```
