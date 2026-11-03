---
title: TBLSERINUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblserinum/
---

# TBLSERINUM

> SERI NUMARA KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `SUBE_KODU+BASLANGIC`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BASLANGIC` | varchar(35) | hayır |  | Seri başlangıçlarını gösterir. |
| 3 | `ARTAN` | varchar(35) | evet |  | İlgili seriden kaç adet kullanıldığını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSERINUM_PKEY` | `SUBE_KODU+BASLANGIC` |
| FOREIGN KEY | `TBLSERINUM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSERINUM_PKEY` | `SUBE_KODU+BASLANGIC` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BASLANGIC, ARTAN
FROM dbo.TBLSERINUM WITH (NOLOCK);
```
