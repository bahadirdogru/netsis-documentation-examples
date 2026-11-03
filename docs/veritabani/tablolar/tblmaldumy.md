---
title: TBLMALDUMY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaldumy/
---

# TBLMALDUMY

> MALCIRO DOSYASININ TOPLAMLARI ILE ILISKILI TABLODUR

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `ISLETME_KODU, DUMY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUMY` | char(1) | hayır | `1` | TBLMALCIRO tablosundaki dumy kolonunu gösterir. Default 1 değeri atılır. |
| 3 | `BRUTAL_TOP` | TDBFLOAT | evet | `0` | Brut alıslar toplamıdır. |
| 4 | `NETAL_TOP` | TDBFLOAT | evet | `0` | Net alıslar toplamıdır. |
| 5 | `IADEAL_TOP` | TDBFLOAT | evet | `0` | Iade alıslar toplamıdır. |
| 6 | `BRUTSAT_TOP` | TDBFLOAT | evet | `0` | Brut satıslar toplamıdır. |
| 7 | `NETSAT_TOP` | TDBFLOAT | evet | `0` | Net satıslar toplamıdır. |
| 8 | `IADESAT_TOP` | TDBFLOAT | evet | `0` | Iade satıslar toplamıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALDUMY_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMALDUMY_PKEY` | `ISLETME_KODU, DUMY` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALDUMY_IND_2` | `ISLETME_KODU` | Nonclustered |
| `TBLMALDUMY_PKEY` | `ISLETME_KODU, DUMY` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUMY, BRUTAL_TOP, NETAL_TOP, IADEAL_TOP, BRUTSAT_TOP
FROM dbo.TBLMALDUMY WITH (NOLOCK);
```
