---
title: TBLEMUSTAHSILPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemustahsilprm/
---

# TBLEMUSTAHSILPRM

> E-Müstahsil parametresine ait kayıtlar yer alır.

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 20

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `SERTIFIKASERINO` | varchar(50) | evet |  | NULL |
| 4 | `EMUSTENTEG` | varchar(1) | evet |  | E-Müstahsil uygulaması kullanılsın işaretli ise E değerini alır. |
| 5 | `PATH` | varchar(200) | evet |  | NULL |
| 6 | `BIRIMKOD` | varchar(3) | evet |  | NULL |
| 7 | `BIRIMETIKET` | varchar(200) | evet |  | NULL |
| 8 | `COKLUBIRIM` | char(1) | evet |  | NULL |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, SERTIFIKASERINO, EMUSTENTEG, PATH, BIRIMKOD
FROM dbo.TBLEMUSTAHSILPRM WITH (NOLOCK);
```
