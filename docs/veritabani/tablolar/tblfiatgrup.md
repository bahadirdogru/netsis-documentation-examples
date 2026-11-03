---
title: TBLFIATGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfiatgrup/
---

# TBLFIATGRUP

> FİAT GRUBU TANIMLAMALARI TABLOSUDUR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `FGRUP`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FGRUP` | varchar(15) | hayır |  | Fiat grubu |
| 3 | `GACIKLAMA` | varchar(50) | evet |  | Grup açıklama bilgisi |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır | `-1` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFIATGRUP_PK` | `FGRUP` |
| FOREIGN KEY | `TBLFIATGRUP_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLFIATGRUP_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFIATGRUP_IND_1` | `ISLETME_KODU, SUBE_KODU, FGRUP` | Unique |
| `TBLFIATGRUP_IND_ADI` | `ISLETME_KODU, SUBE_KODU, GACIKLAMA` | Duplicate |
| `TBLFIATGRUP_PK` | `FGRUP` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, FGRUP, GACIKLAMA, SUBE_KODU
FROM dbo.TBLFIATGRUP WITH (NOLOCK);
```
