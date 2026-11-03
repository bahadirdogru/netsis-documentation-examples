---
title: TBLYANS700
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblyans700/
---

# TBLYANS700

> DÖNEM SONU İŞLEMLER>GELİR HESAPLARI YANSITMA GİRİŞİNDE TANIMLANAN YANSITMA MUHASEBE HESAPLARINI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `ISLETME_KODU+MUHASEBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MUHASEBE_KODU` | TDBMUHKOD | hayır |  | Gelir hesapları yansıtma girişinde girilen muhasebe hesap kodunu gösterir. |
| 3 | `YANSITMA_KODU` | TDBMUHKOD | evet |  | İlgili muhasebe hesabları için girilen yansıtma hesaplarını gösterir. |
| 4 | `KONTROL` | char(1) | evet |  | İlgili muhasebe hesapları için girilen yansıtma hesapları girildiğinde '1' değerini, girilmediğinde ise 'E' değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLYANS700_PKEY` | `ISLETME_KODU+MUHASEBE_KODU` |
| FOREIGN KEY | `TBLYANS700_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLYANS700_PKEY` | `ISLETME_KODU+MUHASEBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MUHASEBE_KODU, YANSITMA_KODU, KONTROL
FROM dbo.TBLYANS700 WITH (NOLOCK);
```
