---
title: TBLBARKODBIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbarkodbil/
---

# TBLBARKODBIL

> STOKBAR ISLEMLERI-BARKOD DIZAYNI- SAHA BILGILERI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIZAYN_KODU` | varchar(20) | evet |  | Barkod dizaynının kodunu tutan sahadır. |
| 2 | `TEXT_PROG` | char(1) | evet |  | Program ise 0; Text ise 1 degerini tutar. |
| 3 | `BARKOD` | char(1) | evet |  | Barkod isaretli ise E degerini tutar. |
| 4 | `BASILACAK_ALAN` | TDBSMALLINT | evet | `0` | Basılacak alan numarasını tutar. |
| 5 | `BARKOD_TIP` | char(1) | evet |  | Barkod tipini tutan sahadır. |
| 6 | `CHECK_DIGIT` | char(1) | evet |  | Check_digit parametresi isaretli ise E degerini tutar. |
| 7 | `X_KOORDINAT` | TDBFLOAT | evet | `0` | Etikete basımı yapılacak alanın soldan mesafesinin dot cinsinden girileceği sahadır. |
| 8 | `Y_KOORDINAT` | TDBFLOAT | evet | `0` | Etikete basımı yapılacak alanın üstten mesafesinin dot cinsinden girileceği sahadır. |
| 9 | `ROTASYON` | char(1) | evet |  | Açısını tutan sahadır. |
| 10 | `BUYUKLUK` | TDBSMALLINT | evet | `0` | Karakter buyuklugunu tutan sahadır. |
| 11 | `GENISLIK` | TDBSMALLINT | evet | `0` | Karakter genisligini tutan sahadır. |
| 12 | `FONT` | varchar(10) | evet |  | Font büyüklügünü tutan sahadır. |
| 13 | `TEXT` | varchar(50) | evet |  | Text alanını tutan sahadır. |
| 14 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ONDALIK` | TDBBYTE | evet |  | Onlalık sahasını tutar. |
| 16 | `YENITL` | char(1) | evet | `0` | TL fiyat parametresi isaretli ise E degerini tutar. |
| 17 | `FIYATYUVTIPI` | TDBBYTE | evet | `0` | Fiyat yuvarlama tipini tutan sahadır. |
| 18 | `SIRA_NO` | TDBBYTE | evet | `0` | Sıra no alanını tutan sahadır. |
| 19 | `UZUNLUK` | TDBBYTE | evet | `0` | Uzunluk alanını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBARKODBIL_FKEY` | `DIZAYN_KODU` |
| PRIMARY KEY | `TBLBARKODBIL_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBARKODBIL_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 DIZAYN_KODU, TEXT_PROG, BARKOD, BASILACAK_ALAN, BARKOD_TIP, CHECK_DIGIT
FROM dbo.TBLBARKODBIL WITH (NOLOCK);
```
