---
title: TBLGENEL_TAKVIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblgenel-takvim/
---

# TBLGENEL_TAKVIM

> KAYIT>TAKVİM TANIMLAMALARI>FABRİKA ÇALIŞMA TAKVİMİ EKRANINDA TAKVİM OLUŞTUR BUTONUNA BASIDIĞINDA TANIMLANAN AYLIK TAKVİM KAYITLARINI GÖSTERİR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `ISLETME_KODU+TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | İlgili aya ait takvim günlerini gösterir. |
| 3 | `VARDIYASAYI` | TDBFLOAT | evet | `0` | Vardiya sayısını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLGENEL_TAKVIM_PKEY` | `ISLETME_KODU+TARIH` |
| FOREIGN KEY | `TBLGENEL_TAKVIM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLGENEL_TAKVIM_PKEY` | `ISLETME_KODU+TARIH` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, TARIH, VARDIYASAYI
FROM dbo.TBLGENEL_TAKVIM WITH (NOLOCK);
```
