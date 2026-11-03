---
title: TBLMUHACIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhacik/
---

# TBLMUHACIK

> MUHASEBE/KAYIT/FİŞ AÇIKLAMA KAYITLARINI TUTAR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `AID`
- **Identity:** `AID` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `AID` | TDBINTEGER | hayır |  | Programın atadığı fiş açıklamalarının sıra numarasını gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Fiş açıklamalarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHACIK_PKEY` | `AID` |
| FOREIGN KEY | `TBLMUHACIK_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHACIK_IND_1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLMUHACIK_PKEY` | `AID` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, AID, ACIKLAMA
FROM dbo.TBLMUHACIK WITH (NOLOCK);
```
