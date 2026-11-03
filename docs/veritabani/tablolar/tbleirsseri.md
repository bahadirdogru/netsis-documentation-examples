---
title: TBLEIRSSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsseri/
---

# TBLEIRSSERI

> E-irsaliye çoklu seri bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 13

## İlgili sayfalar

- [E-belge (NetOpenX COM)](/netopenx/e-belge/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 2 | `SERI` | varchar(3) | hayır |  | Çoklu belge girişindeki girilen seri bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Seriye girilen açıklama bilgisi yer alır. |
| 4 | `C_YEDEK1` | char(1) | evet |  | E-irsaliye yanıt serisi işaretli ise E değerini alır. |
| 5 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 6 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 7 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 8 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 9 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 10 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, ACIKLAMA, C_YEDEK1, C_YEDEK2, I_YEDEK1
FROM dbo.TBLEIRSSERI WITH (NOLOCK);
```
