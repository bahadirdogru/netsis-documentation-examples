---
title: TBLSTOKURSNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokursno/
---

# TBLSTOKURSNO

> ÜRETİM>İŞLEMLER>DOKÜMAN NUMARALARI EKRANINDA GİRİLEN SERİ KAYITLARINI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | İş emirleri ve üretim sonu fişlerinin serilerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKURSNO_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSTOKURSNO_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKURSNO_IND_1` | `SERI` | Unique, Non-clustered |
| `TBLSTOKURSNO_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI
FROM dbo.TBLSTOKURSNO WITH (NOLOCK);
```
