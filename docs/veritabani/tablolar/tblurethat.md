---
title: TBLURETHAT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurethat/
---

# TBLURETHAT

> Gezgin\Üretim\Üretim\Kayıt\Hat Tanımlama kayıtları yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 22

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `HAT_KODU` | varchar(35) | hayır |  | Hat kodu bilgisi yer alır. |
| 3 | `HAT_ISMI` | varchar(100) | evet |  | Hat ismi bilgisi yer alır. |
| 4 | `YM_SARF_HAT_BAZINDA` | char(1) | evet |  | YM sarf bazında işaretli ise E değerini alır. |
| 5 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 21 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, HAT_KODU, HAT_ISMI, YM_SARF_HAT_BAZINDA, D_YEDEK1, D_YEDEK2
FROM dbo.TBLURETHAT WITH (NOLOCK);
```
