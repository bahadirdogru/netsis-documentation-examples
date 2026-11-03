---
title: TBLBCK_MRP_DETAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mrp-detail/
---

# TBLBCK_MRP_DETAIL

> SAKLANAN URETIM PLANLARI MRP RAPORU DETAY KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 17

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BCKNO` | varchar(8) | hayır |  | Revisyon numarasini tutan sahadır. |
| 3 | `HAMKOD` | TDBSTOKKOD | hayır |  | Bilesenin kodunu tutar. |
| 4 | `HAMYAPKOD` | varchar(15) | evet | `NULL` | Bilesene gereksinim duyulan tarihi tutar. |
| 5 | `HAMTAR` | TDBDATETIME | hayır |  | Mamul kodunu tutar. |
| 6 | `MAMKOD` | TDBSTOKKOD | hayır |  | Mamulun uretim tarihini tutar. |
| 7 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | Gereksinim duyulan bilesen miktarını tutan sahadır. |
| 8 | `MAMTAR` | TDBDATETIME | hayır |  | Mamulun uretim miktarıdır. |
| 9 | `HAMMIK` | TDBFLOAT | evet | `0` | Gereksinim duyulan bilesen miktarını tutan sahadır. |
| 10 | `MAMMIK` | TDBFLOAT | evet | `0` | Uretimi yapılacak ana mamul. |
| 11 | `HATA` | TDBDATETIME | evet |  | Ana mamulun uretim tarihi. |
| 12 | `TEPEMAM` | TDBSTOKKOD | hayır |  | İsemrinden girilmesi gereken miktar. |
| 13 | `TEPEMAMYAPKOD` | varchar(15) | evet | `NULL` | Ana mamulun siparis numarası. |
| 14 | `TEPETAR` | TDBDATETIME | hayır |  | Bilesenin yapılandırma kodu. |
| 15 | `ISEMMIK` | TDBFLOAT | evet | `0` | Mamulun yapılandırma kodu. |
| 16 | `TEPESIPNO` | varchar(15) | evet | `0` | Ana mamulun yapılandırma kodu. |
| 17 | `TEPESIPKONT` | TDBSMALLINT | evet | `0` | Siparis sıra numarasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBCK_MRP_DETAIL_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBCK_MRP_DETAILFKEY` | `MAMYAPKOD` |
| FOREIGN KEY | `TBLBCK_MRP_DETAILFKEY1` | `HAMYAPKOD` |
| FOREIGN KEY | `TBLBCK_MRP_DETAILFKEY2` | `TEPEMAMYAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCK_MRP_DETAIL_IDX_YAPKOD1` | `HAMYAPKOD, HAMKOD` | Nonclustered |
| `TBLBCK_MRP_DETAIL_IDX_YAPKOD2` | `MAMYAPKOD, MAMKOD` | Nonclustered |
| `TBLBCK_MRP_DETAIL_IND_1` | `BCKNO, HAMKOD, HAMYAPKOD, HAMTAR, MAMKOD, MAMYAPKOD, MAMTAR, TEPEMAM, TEPEMAMYAPKOD, TEPETAR, TEPESIPNO, TEPESIPKONT` | Nonclustered, unique |
| `TBLBCK_MRP_DETAIL_IND_2` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BCKNO, HAMKOD, HAMYAPKOD, HAMTAR, MAMKOD
FROM dbo.TBLBCK_MRP_DETAIL WITH (NOLOCK);
```
