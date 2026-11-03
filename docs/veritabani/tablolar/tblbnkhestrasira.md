---
title: TBLBNKHESTRASIRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkhestrasira/
---

# TBLBNKHESTRASIRA

> TBLHESTRA-INCKEYNO SAHASINA ATANACAK OLAN SONRAKI SAYIYI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `NEXTINCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NEXTINCKEYNO` | TDBINTEGER | hayır |  | TBLHESTRA tablosunda yer alan INCKEYNO'Noya atanacak olan sonraki sayıyı tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLBNKHESTRASIRAPK` | `NEXTINCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKHESTRASIRAPK` | `NEXTINCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 NEXTINCKEYNO
FROM dbo.TBLBNKHESTRASIRA WITH (NOLOCK);
```
