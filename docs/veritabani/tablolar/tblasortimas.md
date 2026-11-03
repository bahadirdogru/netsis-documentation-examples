---
title: TBLASORTIMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblasortimas/
---

# TBLASORTIMAS

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `ASORTIKOD` | varchar(15) | hayır |  | Asorti kodu bilgisi yer alır. |
| 3 | `ASORTIACIK` | varchar(50) | hayır |  | Asorti açıklama bilgisi yer alır. |
| 4 | `BOZKOD` | varchar(8) | hayır |  | Ana özellik satır bilgisi yer alır. |
| 5 | `BDEGERKOD` | varchar(8) | evet |  | Ana değer satır bilgisi yer alır. |
| 6 | `AOZKOD` | varchar(8) | hayır |  | Asorti özellik sütun bilgisi yer alır. |
| 7 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ASORTIKOD, ASORTIACIK, BOZKOD, BDEGERKOD, AOZKOD
FROM dbo.TBLASORTIMAS WITH (NOLOCK);
```
