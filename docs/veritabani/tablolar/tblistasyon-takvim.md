---
title: TBLISTASYON_TAKVIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblistasyon-takvim/
---

# TBLISTASYON_TAKVIM

> KAYIT>TAKVİM TANIMLAMALARI>İSTASYONU ÇALIŞMA TAKVİMİ EKRANINDA TAKVİM OLUŞTUR BUTONUNA BASIDIĞINDA TANIMLANAN AYLIK TAKVİM KAYITLARINI GÖSTERİR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `ISTKODU+TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISTKODU` | varchar(5) | hayır |  | İstasyon kodunu gösterir. |
| 2 | `TARIH` | TDBDATETIME | hayır |  | İlgili aya ait takvim günlerini gösterir. |
| 3 | `VARDIYASAY` | TDBFLOAT | evet | `0` | Vardiya sayısını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISTASYON_TAKVIM_PKEY` | `ISTKODU+TARIH` |
| FOREIGN KEY | `TBLISTASYON_TAKVIM_FKEY` | `ISTKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISTASYON_TAKVIM_PKEY` | `ISTKODU+TARIH` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISTKODU, TARIH, VARDIYASAY
FROM dbo.TBLISTASYON_TAKVIM WITH (NOLOCK);
```
