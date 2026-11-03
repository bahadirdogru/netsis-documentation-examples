---
title: TBLDAGYUKNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagyukno/
---

# TBLDAGYUKNO

> DISPATCHING YUKLEME VE BELGE NUMARA DUZENLEME KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 4

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Seri numarasını tutar. |
| 3 | `TIP` | char(1) | hayır |  | Dispatching yukleme no=1; Dispatching belge no=2 degerlerini tutar. |
| 4 | `NUMARA` | TDBBELGENO | evet | `0` | Numara bilgisini tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGYUKNO_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGYUKNO_IND_1` | `SUBE_KODU, SERI, TIP` | nonclustered, unique |
| `TBLDAGYUKNO_IND_2` | `TIP` | nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, TIP, NUMARA
FROM dbo.TBLDAGYUKNO WITH (NOLOCK);
```
