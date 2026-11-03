---
title: TBLSTOKURMEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokurmek/
---

# TBLSTOKURMEK

> TBLSTOKURM TABLOSUNDAKİ INCKEYNO BİLGİLERİ TUTULUR

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 1

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNOEK` | TDBINTEGER | hayır |  | TBLSTOKURM-INCKEYNO kolonuna karşılık gelir. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNOEK
FROM dbo.TBLSTOKURMEK WITH (NOLOCK);
```
