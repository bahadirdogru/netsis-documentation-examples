---
title: TBLAL12DUMY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblal12dumy/
---

# TBLAL12DUMY

> AL12 TABLOSU ILE ILISKILI TOPLAMLAR TABLOSU)(DUMY ILE JOIN

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUMY` | char(1) | hayır |  | TBLAL12 tablosundaki dumy kolonunu gösterir. Default 1 değeri atılır. |
| 3 | `GENELTOPMIK` | TDBFLOAT | evet | `0` | Genel toplam miktarını gosterir. |
| 4 | `GENELTOPNET` | TDBFLOAT | evet | `0` | Genel toplam tutarını gosterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLAL12DUMY_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLAL12DUMY_FKEY` | `ISLETME_KODU, DUMY` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLAL12DUMY_PKEY` | `ISLETME_KODU, DUMY` | Unique,Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUMY, GENELTOPMIK, GENELTOPNET
FROM dbo.TBLAL12DUMY WITH (NOLOCK);
```
