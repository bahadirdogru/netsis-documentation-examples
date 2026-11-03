---
title: TBLIHRGUMRUKMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrgumrukmas/
---

# TBLIHRGUMRUKMAS

> GÜMRÜK OFİS TANIMLAMA KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GUMRUK_KODU` | varchar(15) | hayır |  | Gümrük kodu bilgisi yer alır. |
| 2 | `GUMRUK_ADI` | varchar(50) | evet |  | Gümrük adı bilgisi yer alır. |
| 3 | `YURTDISI` | varchar(1) | evet |  | Yurtdısı gümrük işaretli ise E değerini alır. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Aktif ise E değerini alır. |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | decimal(28,8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | decimal(28,8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 GUMRUK_KODU, GUMRUK_ADI, YURTDISI, SUBE_KODU, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLIHRGUMRUKMAS WITH (NOLOCK);
```
