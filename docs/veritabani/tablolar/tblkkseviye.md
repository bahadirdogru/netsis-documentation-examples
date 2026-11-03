---
title: TBLKKSEVIYE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkseviye/
---

# TBLKKSEVIYE

> KALİTE ISO 2859 STANDARD DESTEĞİ İLE GELEN KALİTE KONTROL SEVİYE KODLARI YER ALIR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 17

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `KOD` | TDBGRUPKOD | hayır |  | Kod bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 4 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KOD, ACIKLAMA, C_YEDEK1, C_YEDEK2, I_YEDEK1
FROM dbo.TBLKKSEVIYE WITH (NOLOCK);
```
