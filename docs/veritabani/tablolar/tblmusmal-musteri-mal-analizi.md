---
title: TBLMUSMAL (Müşteri Mal Analizi)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmusmal-musteri-mal-analizi/
---

# TBLMUSMAL (Müşteri Mal Analizi)

> EK ANALİZ HAZIRLIĞI MÜŞTERİ BAZINDA MAL ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Belgelerde girilen cari kodu gösterir. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Belgelerde girilen stok kodu göterir. |
| 5 | `SATMIK` | TDBFLOAT | evet | `0` | Belgelerde stoğa ait satış miktarını gösterir. |
| 6 | `BRUTSATT` | TDBFLOAT | evet | `0` | Belge içindeki stoğun brüt satış tutarını gösterir. |
| 7 | `NETSATT` | TDBFLOAT | evet | `0` | Belge içindeki stoğun net satış tutarını gösterir. |
| 8 | `IADEMIK` | TDBFLOAT | evet | `0` | Belgelerde stoğa ait iade miktarını gösterir. |
| 9 | `IADETUT` | TDBFLOAT | evet | `0` | Belge içindeki stoğun iade tutarını gösterir. |
| 10 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa esnek yapılandırma kodlarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUSMAL_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMUSMAL_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUSMAL_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique,Non-clustered |
| `TBLMUSMAL_IND` | `ISLETME_KODU+SUBE_KODU+CARI_KOD+STOK_KODU+YAPKOD` | Unique,Non-clustered |
| `TBLMUSMAL_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, CARI_KOD, STOK_KODU, SATMIK, BRUTSATT
FROM dbo.TBLMUSMAL (Müşteri Mal Analizi) WITH (NOLOCK);
```
