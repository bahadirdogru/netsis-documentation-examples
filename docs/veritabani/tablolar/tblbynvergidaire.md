---
title: TBLBYNVERGIDAIRE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbynvergidaire/
---

# TBLBYNVERGIDAIRE

> beyanname vergi daireleri listesi yer alır.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 3

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `VDKOD` | varchar(6) | hayır |  | Vergi dairesi kodu yer alır. |
| 2 | `VDIL` | varchar(100) | hayır |  | Vergi dairesi il bilgisi yer alır. |
| 3 | `VDAD` | varchar(100) | hayır |  | Vergi dairesi adı bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 VDKOD, VDIL, VDAD
FROM dbo.TBLBYNVERGIDAIRE WITH (NOLOCK);
```
