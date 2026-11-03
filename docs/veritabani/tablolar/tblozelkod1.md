---
title: TBLOZELKOD1
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblozelkod1/
---

# TBLOZELKOD1

> ÖZEL KOD1 TANIMLAMA KAYITLARINI TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `OZELKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OZELKOD` | char(1) | hayır |  | Tanımlanan kod1 değerini gösterir. |
| 3 | `ACIKLAMA` | varchar(30) | evet |  | Tanımlanan kod1 değerine ait açıklamayı gösterir. |
| 4 | `HESAP_KODU` | TDBMUHKOD | evet |  | Özel kod1 kullanılarak kesilen faturalarda, satış hesaplarının istenilen muhasebe hesabına aktarılması için girilen muhasebe kodunu gösterir. |
| 5 | `HANGIFIYAT` | char(1) | evet |  | İlgili kod1 değeri için girilmesi gereken fiyat kodunu gösterir. Satış işlemlerinde girilen kod1 değerine göre burada belirlenen satış fiyatı stok kartlarından getirilir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLOZELKOD1_PKEY` | `OZELKOD` |
| FOREIGN KEY | `TBLOZELKOD1_FKEY` | `HESAP_KODU` |
| FOREIGN KEY | `TBLOZELKOD1_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLOZELKOD1_IND1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLOZELKOD1_PKEY` | `OZELKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, OZELKOD, ACIKLAMA, HESAP_KODU, HANGIFIYAT
FROM dbo.TBLOZELKOD1 WITH (NOLOCK);
```
