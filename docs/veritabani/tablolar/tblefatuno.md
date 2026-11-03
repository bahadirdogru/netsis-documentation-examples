---
title: TBLEFATUNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatuno/
---

# TBLEFATUNO

> E-DEVLET FATURALARININ SON KALINAN NUMARASININ TUTULDUĞU TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 4

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 2 | `SERI` | char(3) | evet |  | Edevlet seri bilgisi yer alır. |
| 3 | `TIP` | char(1) | hayır |  | 1-efatura,earşiv,3-ihracat faturası |
| 4 | `NUMARA` | TDBBELGENO | evet |  | Son kalınan numara bilgisi yer alır |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, TIP, NUMARA
FROM dbo.TBLEFATUNO WITH (NOLOCK);
```
