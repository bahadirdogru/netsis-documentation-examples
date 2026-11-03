---
title: TBLEFATOZELKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatozelkod/
---

# TBLEFATOZELKOD

> E-DEVLET ÖZEL KOD TANIMLAMA BİLGİLERİNİN TUTULDUĞU TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 5

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TIP` | TDBBYTE | hayır |  | 1-özel matrah,2-İstisna kodları,3-Kısmi istisna kodları,4-Tevkifat kodları,5-ÖTV İstisna kodları |
| 2 | `KOD` | int | hayır |  | Girilen Kod bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(150) | evet |  | Açıklama bilgisi yer alır. |
| 4 | `IYEDEK1` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 5 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 TIP, KOD, ACIKLAMA, IYEDEK1, SYEDEK1
FROM dbo.TBLEFATOZELKOD WITH (NOLOCK);
```
