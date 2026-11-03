---
title: TBLCRMKISIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmkisit/
---

# TBLCRMKISIT

> Açıklama yok.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(100) | hayır |  | Evrağın ekli olduğu stok/cari kodu gösterir. |
| 2 | `DATA` | text | evet |  |  |
| 3 | `KISITDATA` | text | evet |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLCRMKISIT_PKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMKISIT_PKEY` | `KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, DATA, KISITDATA
FROM dbo.TBLCRMKISIT WITH (NOLOCK);
```
