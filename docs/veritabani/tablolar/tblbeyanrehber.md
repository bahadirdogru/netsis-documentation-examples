---
title: TBLBEYANREHBER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbeyanrehber/
---

# TBLBEYANREHBER

> Beyanname il ilçe kodları yer alır.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TAG` | varchar(100) | hayır |  |  |
| 2 | `KOD` | varchar(60) | hayır |  | Kod bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(150) | evet |  | Açıklama bilgisi yer alır. |
| 4 | `DEGER` | varchar(50) | evet |  |  |
| 5 | `CYEDEK1` | varchar(150) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `CYEDEK2` | varchar(150) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 TAG, KOD, ACIKLAMA, DEGER, CYEDEK1, CYEDEK2
FROM dbo.TBLBEYANREHBER WITH (NOLOCK);
```
