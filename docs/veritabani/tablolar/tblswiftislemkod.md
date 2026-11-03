---
title: TBLSWIFTISLEMKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftislemkod/
---

# TBLSWIFTISLEMKOD

> MT940 KAYITLARI-İŞLEM KODLARI BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 16

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLEM_KODU` | TDBGRUPKOD | hayır |  | Tanımlı olan işlem kodları yer alır. |
| 2 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama bilgisi yer alır. |
| 3 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 4 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLEM_KODU, ACIKLAMA, C_YEDEK1, C_YEDEK2, I_YEDEK1, I_YEDEK2
FROM dbo.TBLSWIFTISLEMKOD WITH (NOLOCK);
```
