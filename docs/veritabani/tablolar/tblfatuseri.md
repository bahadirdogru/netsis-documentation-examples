---
title: TBLFATUSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuseri/
---

# TBLFATUSERI

> FATURA SERI BİLGİLERİNİ TUTAR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `SUBE_KODU+TIP`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TIP` | TDBSMALLINT | hayır |  | Serinin tanımlandığı belge tipini gösterir. |
| 3 | `DEFSERI` | char(1) | evet |  | Seri numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFATUSERI_PKEY` | `SUBE_KODU+TIP` |
| FOREIGN KEY | `TBLFATUSERI_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUSERI_PKEY` | `SUBE_KODU+TIP` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TIP, DEFSERI
FROM dbo.TBLFATUSERI WITH (NOLOCK);
```
