---
title: TBLSAT12DUMY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsat12dumy/
---

# TBLSAT12DUMY

> SAT12 İLE TOPLAMLARIN TUTULDUĞU TABLODUR. Dumy kolonuyla SAT12' ye join olur

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `ISLETME_KODU+DUMY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUMY` | char(1) | hayır |  | SAT12 tablosundaki dumy kolonunu gösterir. Default 1 değeri atılır. |
| 3 | `GENELTOPMIK` | TDBFLOAT | evet | `0` | Genel toplam miktari gösterir. |
| 4 | `GENELTOPNET` | TDBFLOAT | evet | `0` | Genel toplam tutarı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSAT12DUMYPKEY` | `ISLETME_KODU+DUMY` |
| FOREIGN KEY | `TBLSAT12DUMY_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSAT12DUMYPKEY` | `ISLETME_KODU+DUMY` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUMY, GENELTOPMIK, GENELTOPNET
FROM dbo.TBLSAT12DUMY WITH (NOLOCK);
```
