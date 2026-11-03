---
title: TBLIHRODEMEACIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrodemeacik/
---

# TBLIHRODEMEACIK

> ÖDEME AÇIKLAMA KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 14

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisidir. |
| 2 | `ODEMETIP` | TDBINTEGER | evet |  | TBLIHRODEMETIP-ODEMETIP kolonuna karşılık gelir. |
| 3 | `ACIKTR` | varchar(255) | evet |  | Ödeme Açıklamaları(TR) bilgisi yer alır. |
| 4 | `ACIKEN` | varchar(255) | evet |  | Ödeme Açıklamaları(EN) bilgisi yer alır. |
| 5 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ODEMETIP, ACIKTR, ACIKEN, SUBE_KODU, KAYITYAPANKUL
FROM dbo.TBLIHRODEMEACIK WITH (NOLOCK);
```
