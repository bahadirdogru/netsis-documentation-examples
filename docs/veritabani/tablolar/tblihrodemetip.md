---
title: TBLIHRODEMETIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrodemetip/
---

# TBLIHRODEMETIP

> ÖDEME TİP KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 14

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisidir. |
| 2 | `ODEMETIP` | varchar(25) | hayır |  | Verilen Ödeme tipi bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(255) | evet |  | Girilen açıklama bilgisi yer alır. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Akreditif tipli işaretli ise E değerini alır. |
| 10 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(50) | evet |  | Uluslararası ödeme kodu bilgisi yer alır. |
| 14 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ODEMETIP, ACIKLAMA, SUBE_KODU, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLIHRODEMETIP WITH (NOLOCK);
```
