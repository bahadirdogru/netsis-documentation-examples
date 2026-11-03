---
title: TBLSIPMALMUS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsipmalmus/
---

# TBLSIPMALMUS

> EK ANALİZ HAZIRLIĞI MÜŞTERİ MAL BAZINDA SİPARİŞ ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 4 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kodu gösterir. |
| 5 | `BAGSIPMIK` | TDBFLOAT | evet | `0` | İlgili carinin o stok için girmiş olduğu sipariş miktarını gösterir. |
| 6 | `STAYSIPMIK` | TDBFLOAT | evet | `0` | Stoktan ayrılan sipariş miktarını gösterir. |
| 7 | `TOPSIPMIK` | TDBFLOAT | evet | `0` | Toplam sipariş miktarını gösterir. |
| 8 | `TOPSIPTUT` | TDBFLOAT | evet | `0` | Toplam sipariş tutarını gösterir. |
| 9 | `BAGTESMIK` | TDBFLOAT | evet | `0` | Teslim edilen sipariş miktarını gösterir. |
| 10 | `STAYTESMIK` | TDBFLOAT | evet | `0` | Stoktan ayrılan sipariş miktarı içinden teslim edilen miktarı gösterir. |
| 11 | `TOPTESMIK` | TDBFLOAT | evet | `0` | Toplam teslim sipariş miktarını gösterir. |
| 12 | `TOPTESTUT` | TDBFLOAT | evet | `0` | Toplam teslim sipariş tutarını gösterir. |
| 13 | `BAGFARKMIK` | TDBFLOAT | evet | `0` | Teslim edilmesi gereken sipariş miktarını gösterir. |
| 14 | `STAYFARKMIK` | TDBFLOAT | evet | `0` | Stoktan ayrılan sipariş miktarı içinden teslim edilmesi gereken sipariş miktarını gösterir. |
| 15 | `FARKMIK` | TDBFLOAT | evet | `0` | Teslim edilmesi gereken sipariş miktarını gösterir. |
| 16 | `FARKTUT` | TDBFLOAT | evet | `0` | Teslim edilmesi gereken sipariş tutarını gösterir. |
| 17 | `STOK_MIK` | TDBFLOAT | evet | `0` | Teslim edilmeyen sipariş miktarı düşülmüş stok miktarını gösterir. |
| 18 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSIPMALMUS_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSIPMALMUS_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIPMALMUS_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique,Non-clustered |
| `TBLSIPMALMUS_IND_1` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+YAPKOD+CARI_KOD` | Unique,Non-clustered |
| `TBLSIPMALMUS_IND_2` | `ISLETME_KODU+SUBE_KODU+CARI_KOD+STOK_KODU` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, STOK_KODU, CARI_KOD, BAGSIPMIK, STAYSIPMIK
FROM dbo.TBLSIPMALMUS WITH (NOLOCK);
```
