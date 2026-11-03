---
title: TBLMRP_DETAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrp-detail/
---

# TBLMRP_DETAIL

> MRP RAPORU DETAY KAYITLARINI TUTAN TABLODUR./DETAY KAYITLARI AYRI LISTELE PARAMETRESI ISARETLENDIGINDE KAYIT OLUSUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 16

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `HAMKOD` | TDBSTOKKOD | hayır |  | Bilesenin kodunu tutar. |
| 3 | `HAMTAR` | TDBDATETIME | hayır |  | Bilesene gereksinim duyulan tarihi tutar. |
| 4 | `MAMKOD` | TDBSTOKKOD | hayır |  | Mamul kodunu tutar. |
| 5 | `MAMTAR` | TDBDATETIME | hayır |  | Mamulun uretim tarihini tutar. |
| 6 | `HAMMIK` | TDBFLOAT | evet | `((0))` | Gereksinim duyulan bilesen miktarını tutan sahadır. |
| 7 | `MAMMIK` | TDBFLOAT | evet | `((0))` | Mamulun uretim miktarıdır. |
| 8 | `HATA` | TDBDATETIME | evet |  |  |
| 9 | `TEPEMAM` | TDBSTOKKOD | hayır |  | Uretimi yapılacak ana mamul. |
| 10 | `TEPETAR` | TDBDATETIME | hayır |  | Ana mamulun uretim tarihi. |
| 11 | `ISEMMIK` | TDBFLOAT | evet | `((0))` | İsemrinden girilmesi gereken miktar. |
| 12 | `TEPESIPNO` | TDBBELGENO | hayır | `('000000000000000')` | Ana mamulun siparis numarası. |
| 13 | `HAMYAPKOD` | varchar(15) | evet |  | Bilesenin yapılandırma kodu. |
| 14 | `MAMYAPKOD` | varchar(15) | evet |  | Mamulun yapılandırma kodu. |
| 15 | `TEPEMAMYAPKOD` | varchar(15) | evet |  | Ana mamulun yapılandırma kodu. |
| 16 | `TEPESIPKONT` | TDBSMALLINT | evet | `((0))` | Siparis sıra numarasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRP_DETAIL_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRP_DETAIL_IDX_YAPKOD1` | `HAMYAPKOD, HAMKOD` | Nonclustered |
| `TBLMRP_DETAIL_IDX_YAPKOD2` | `MAMYAPKOD, MAMKOD` | Nonclustered |
| `TBLMRP_DETAIL_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLMRP_DETAIL_IND_2` | `HAMKOD, HAMYAPKOD, HAMTAR, MAMKOD, MAMYAPKOD, MAMTAR, TEPEMAM, TEPEMAMYAPKOD, TEPETAR, TEPESIPNO, TEPESIPKONT` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, HAMKOD, HAMTAR, MAMKOD, MAMTAR, HAMMIK
FROM dbo.TBLMRP_DETAIL WITH (NOLOCK);
```
