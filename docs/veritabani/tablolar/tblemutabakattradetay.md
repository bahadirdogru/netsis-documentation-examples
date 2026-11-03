---
title: TBLEMUTABAKATTRADETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakattradetay/
---

# TBLEMUTABAKATTRADETAY

> E-mutabakat belde detaylarının tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `TRAINCKEYNO` | TDBINTEGER | hayır |  | TBLEMUTABAKATTRA (INCKEYNO) |
| 4 | `BELGENO` | TDBBELGENO | evet |  | Belge numarası bilgisi yer alır. |
| 5 | `FTIRSIP` | char(1) | evet |  | belgeye ait fatuirsdaki FTIRSIP kolonuna karşılık gelir. |
| 6 | `TUTAR` | TDBFLOAT | hayır |  | Tutar bilgisi yer alır. |
| 7 | `BORCALACAK` | char(1) | evet |  | B-orç,A-lacak |
| 8 | `DOVIZTUTAR` | TDBFLOAT | evet |  | Döviz tutar bilgisi yer alır. |
| 9 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 10 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Gib fatura numarası bilgisi yer alır. |
| 11 | `MODULNO` | varchar(50) | evet |  | NULL |
| 12 | `ULKE_KODU` | varchar(4) | evet |  | NULL |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, TRAINCKEYNO, BELGENO, FTIRSIP, TUTAR
FROM dbo.TBLEMUTABAKATTRADETAY WITH (NOLOCK);
```
