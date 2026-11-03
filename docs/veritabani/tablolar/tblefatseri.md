---
title: TBLEFATSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatseri/
---

# TBLEFATSERI

> E-DEVLET BELGE BİRİM KODLARININ TUTULDUĞU TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 13

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 2 | `SERI` | varchar(3) | hayır |  | Seri bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | açıklama bilgisi yer alır. |
| 4 | `C_YEDEK1` | char(1) | evet |  | A-RŞİV serisi. |
| 5 | `C_YEDEK2` | char(1) | evet |  | İnternet fatura serisi işaretli ise E değerini alır. |
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
FROM dbo.TBLEFATSERI WITH (NOLOCK);
```
