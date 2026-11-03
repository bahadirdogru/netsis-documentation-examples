---
title: TBLKODHARICHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkodharichar/
---

# TBLKODHARICHAR

> HARIC TUTULACAK SUBE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `TABLENAME, SUBE_KODU, KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TABLENAME` | varchar(50) | hayır |  | Haric tutulacak sube kodu kaydının yapıldıgı tablonun ismini tutan sahadır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KOD` | varchar(35) | hayır |  | Haric tutulan kodu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKODHARICHAR_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLKODHARICHAR_PKEY` | `TABLENAME, SUBE_KODU, KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKODHARICHAR_PKEY` | `TABLENAME, SUBE_KODU, KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 TABLENAME, SUBE_KODU, KOD
FROM dbo.TBLKODHARICHAR WITH (NOLOCK);
```
