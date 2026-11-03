---
title: TBLMALCIRO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmalciro/
---

# TBLMALCIRO

> EK ANALIZLER / MAL CIRO VE SATIS ANALIZI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 15

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu sahasıdır. |
| 4 | `ALMIK` | TDBFLOAT | evet | `0` | Alıs miktarıdır. |
| 5 | `BRUTALT` | TDBFLOAT | evet | `0` | Brut alıs tutarıdır. |
| 6 | `NETALT` | TDBFLOAT | evet | `0` | Net alıs tutarıdır. |
| 7 | `IADEALMIK` | TDBFLOAT | evet | `0` | Iade alınan miktardır. |
| 8 | `IADEALT` | TDBFLOAT | evet | `0` | Iade alıs tutarıdır. |
| 9 | `SATMIK` | TDBFLOAT | evet | `0` | Satıs miktarıdır. |
| 10 | `BRUTSATT` | TDBFLOAT | evet | `0` | Brut alıs tutarıdır. |
| 11 | `NETSATT` | TDBFLOAT | evet | `0` | Net satıs tutarıdır. |
| 12 | `IADESATMIK` | TDBFLOAT | evet | `0` | Satıs iadesi miktarıdır. |
| 13 | `IADESATT` | TDBFLOAT | evet | `0` | Satıs iade tutarıdır. |
| 14 | `DUMY` | char(1) | evet | `1` | Default 1 değeri atılır. |
| 15 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodu sahasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALCIRO_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMALCIRO_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALCIRO_IDX_YAPKOD1` | `YAPKOD, STOK_KODU` | Nonclustered |
| `TBLMALCIRO_IND` | `ISLETME_KODU, SUBE_KODU, STOK_KODU, YAPKOD` | Nonclustered, unique |
| `TBLMALDUMY_IND_1` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, STOK_KODU, ALMIK, BRUTALT, NETALT
FROM dbo.TBLMALCIRO WITH (NOLOCK);
```
