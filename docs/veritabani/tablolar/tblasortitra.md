---
title: TBLASORTITRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblasortitra/
---

# TBLASORTITRA

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AKOD` | varchar(15) | hayır |  | Asorti kodu bilgisi yer alır. |
| 2 | `ANAOZKOD` | varchar(8) | hayır |  | Ana özellik satır bilgisi yer alır. |
| 3 | `ANADEGERKOD` | varchar(8) | hayır |  | Ana değer satır bilgisi yer alır. |
| 4 | `ASORTIOZKOD` | varchar(8) | hayır |  | Asorti özellik sütun bilgisi yer alır. |
| 5 | `ASORTIDEGERKOD` | varchar(8) | hayır |  | Asorti için tanımlı değer kodları yer alır. |
| 6 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 7 | `YUZDE` | TDBFLOAT | evet |  | 0 |
| 8 | `YAPKOD` | varchar(15) | hayır |  | Yapılandırma kodu bilgisi yer alır. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | NULL |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | NULL |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | NULL |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | NULL |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 22 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 25 | `V_YEDEK1` | varchar(50) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 26 | `V_YEDEK2` | varchar(50) | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 AKOD, ANAOZKOD, ANADEGERKOD, ASORTIOZKOD, ASORTIDEGERKOD, MIKTAR
FROM dbo.TBLASORTITRA WITH (NOLOCK);
```
