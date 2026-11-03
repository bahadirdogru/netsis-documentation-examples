---
title: TBLFATUNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuno/
---

# TBLFATUNO

> FATURA IRSALIYE SIPARIS AMBAR FISLERI NUMARALARINI TUTAR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Evrak için seri numarası girilmişse seri numarası bilgisini gösterir. |
| 3 | `TIP` | char(1) | hayır |  | Girilen Evrak tipini gösterir.(Fatura+İrsaliye+sipariş vb.) |
| 4 | `NUMARA` | TDBBELGENO | evet | `0` | Evrak numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFATUNO_FKEY` | `SUBE_KODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUNO_IND_1` | `SUBE_KODU+SERI+TIP` | Unique,Non-clustered |
| `TBLFATUNO_IND_2` | `TIP` | Non-unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, TIP, NUMARA
FROM dbo.TBLFATUNO WITH (NOLOCK);
```
