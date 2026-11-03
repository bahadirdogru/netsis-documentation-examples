---
title: TBLKDVTEVKIFATTUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkdvtevkifattur/
---

# TBLKDVTEVKIFATTUR

> Açıklama yok.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `TUR_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TUR_KODU` | TDBSMALLINT | hayır |  |  |
| 2 | `TUR_AD` | varchar(200) | hayır |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKDVTEVKIFATTUR_PKEY` | `TUR_KODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKDVTEVKIFATTUR_PKEY` | `TUR_KODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 TUR_KODU, TUR_AD
FROM dbo.TBLKDVTEVKIFATTUR WITH (NOLOCK);
```
