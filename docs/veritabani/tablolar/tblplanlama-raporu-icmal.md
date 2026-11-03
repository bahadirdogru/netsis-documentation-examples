---
title: TBLPLANLAMA_RAPORU_ICMAL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblplanlama-raporu-icmal/
---

# TBLPLANLAMA_RAPORU_ICMAL

> EK ANALİZ HAZIRLIĞI SEVKİYAT PLANLAMA İCMAL LİSTE ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 4 | `MUSTERI_SIP_BAK` | TDBFLOAT | evet | `0` | Müşteri sipariş bakiyesini gösterir. |
| 5 | `STOK_BAK` | TDBFLOAT | evet | `0` | Stok bakiyesini gösterir. |
| 6 | `SATICI_SIP_BAK` | TDBFLOAT | evet | `0` | Satıcı sipariş bakiyesini gösterir. |
| 7 | `ISEMRI_BAK` | TDBFLOAT | evet | `0` | İş emri bakiyesini gösterir. |
| 8 | `SONRA_GIRIS` | TDBFLOAT | evet | `0` | Sonraki satıcı sipariş miktarını gösterir. |
| 9 | `TESLIM_ET` | TDBFLOAT | evet | `0` | Siparişin teslim edilmiş miktarını gösterir. |
| 10 | `SONRA_BAK` | TDBFLOAT | evet | `0` | Sonraki bakiyeyi gösterir. |
| 11 | `SONRA_TESLIM_ET` | TDBFLOAT | evet | `0` | Sonraki teslim edilmesi gereken miktarı gösterir. |
| 12 | `KALAN_MUSSIP_BAK` | TDBFLOAT | evet | `0` | Kalan müşteri sipariş bakiyesini gösterir. |
| 13 | `KALAN_STOK_BAK` | TDBFLOAT | evet | `0` | Kalan stok bakiyesini gösterir. |
| 14 | `URET_SATIN_AL` | TDBFLOAT | evet | `0` | Uretilemesi gereken miktarı gösterir. |
| 15 | `SIPARIS_AL` | TDBFLOAT | evet | `0` | Alınması gereken sipariş miktarını gösterir. |
| 16 | `MUS_SIP_MIK` | TDBFLOAT | evet | `0` | Müşteri sipariş miktarını gösterir. |
| 17 | `MUS_TES_MIK` | TDBFLOAT | evet | `0` | Müşteri siparişinin teslim edilen miktarını gösterir. |
| 18 | `SEVK_MIK` | TDBFLOAT | evet | `0` | Siparişin sevk edilen miktarını gösterir. |
| 19 | `YUKLE_MIK` | TDBFLOAT | evet | `0` | Siparişin yükleme miktarını gösterir. |
| 20 | `SEVKSON_MUSTERI_SIP_BAK` | TDBFLOAT | evet | `0` | Sevk sonrası müşteri sipariş bakiyesini gösterir. |
| 21 | `SEVKSON_STOK_BAK` | TDBFLOAT | evet | `0` | Sevk sonrası stok bakiyesini gösterir. |
| 22 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yaplandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPLANLAMA_RAPORU_ICMAL_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLPLANLAMA_RAPORU_ICMAL_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLPLANLAMA_RAPORU_ICMAL_FKEY2` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPLANLAMA_RAPORU_ICMAL_IND1` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+YAPKOD` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, STOK_KODU, MUSTERI_SIP_BAK, STOK_BAK, SATICI_SIP_BAK
FROM dbo.TBLPLANLAMA_RAPORU_ICMAL WITH (NOLOCK);
```
