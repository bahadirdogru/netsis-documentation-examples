---
title: TBLFIYATLISTINFO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfiyatlistinfo/
---

# TBLFIYATLISTINFO

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `INCKEYNO` | int | hayır |  | Inckey numarası bilgisi yer alır. |
| 4 | `FLISTKOD` | varchar(50) | hayır |  | Fiyat listesi kodu bilgisi yer alır. |
| 5 | `FLISTACIKLMA` | varchar(200) | evet |  | Açıklama bilgisi yer alır. |
| 6 | `A_S` | char(1) | evet |  | A-lış,S-atış |
| 7 | `BASTAR` | TDBDATETIME | evet |  | Başlangıç tarihi bilgisi yer alır. |
| 8 | `BITTAR` | TDBDATETIME | evet |  | Bitiş tarihi bilgisi yer alır. |
| 9 | `FIYATGRUBU` | varchar(15) | evet |  | Fiyat grubu bilgisi yer alır. |
| 10 | `FIYATDOVIZTIPI` | TDBBYTE | evet |  | Fiyat döviz tipi bilgisi yer alır. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `I_YEDEK1` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `I_YEDEK2` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `F_YEDEK1` | decimal(28,8) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `F_YEDEK2` | decimal(28,8) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `D_YEDEK1` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 22 | `D_YEDEK2` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, INCKEYNO, FLISTKOD, FLISTACIKLMA, A_S
FROM dbo.TBLFIYATLISTINFO WITH (NOLOCK);
```
