---
title: TBLEFATKISIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatkisit/
---

# TBLEFATKISIT

> EFATURA GELEN KUTUSUNA AİT KISIT BİLGİSİNİN TUTULDUĞU TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | şube kodu bilgisi yer alır. |
| 3 | `NESNEADI` | varchar(50) | hayır |  | sube bilgisi yer alır |
| 4 | `KOLONADI` | varchar(50) | hayır |  | Kolon adı bilgisi yer alır. |
| 5 | `VALIDATIONSQL` | TDBMEMO | evet |  | Kısıt bilgisi yer alır |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı yer alır. |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 KULLANICI_NO, SUBE_KODU, NESNEADI, KOLONADI, VALIDATIONSQL, KAYITYAPANKUL
FROM dbo.TBLEFATKISIT WITH (NOLOCK);
```
