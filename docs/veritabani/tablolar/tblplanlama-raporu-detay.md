---
title: TBLPLANLAMA_RAPORU_DETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblplanlama-raporu-detay/
---

# TBLPLANLAMA_RAPORU_DETAY

> EK ANALİZ HAZIRLIĞI SEVKİYAT PLANLAMA DETAY LİSTE ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 4 | `SIPNO` | TDBBELGENO | evet |  | Sipariş numarasını gösterir. |
| 5 | `CARI_KODU` | TDBCARIKOD | evet |  | Sipariş için girilen cari kodunu gösterir. |
| 6 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 7 | `TESTAR` | TDBDATETIME | evet |  | Siparişin teslim tarihini gösterir. |
| 8 | `MUSTERI_SIP_BAK` | TDBFLOAT | evet | `0` | Müşterinin siparişin teslim edilen miktarı çıkarıldıktan sonraki bakiyesini gösterir. |
| 9 | `TESLIM_ET` | TDBFLOAT | evet | `0` | Siparişin teslim edilmiş miktarını gösterir. |
| 10 | `SONRA_BAK` | TDBFLOAT | evet | `0` | Siparişin teslim edildikten sonraki bakiyesini gösterir. MUSTERI_SIP_BAK fieldiyle aynı değeri gösterir. |
| 11 | `SONRA_TESLIM_ET` | TDBFLOAT | evet | `0` | Sonraki teslim edilmesi gereken miktarı gösterir. |
| 12 | `KALAN_MUSSIP_BAK` | TDBFLOAT | evet | `0` | Kalan müşteri sipariş bakiyesini gösterir. |
| 13 | `KALAN_STOK_BAK` | TDBFLOAT | evet | `0` | Kalan stok bakiyesini gösterir. |
| 14 | `URET_SATIN_AL` | TDBFLOAT | evet | `0` | Uretilemesi gereken miktarı gösterir. |
| 15 | `INCKEYNO` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `MUS_SIP_MIK` | TDBFLOAT | evet | `0` | Müşteri sipariş miktarını gösterir. |
| 17 | `MUS_TES_MIK` | TDBFLOAT | evet | `0` | Müşteri siparişinin teslim edilen miktarını gösterir. |
| 18 | `SEVK_MIK` | TDBFLOAT | evet | `0` | Siparişin sevk edilen miktarını gösterir. |
| 19 | `YUKLE_MIK` | TDBFLOAT | evet | `0` | Siparişin yükleme miktarını gösterir. |
| 20 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yaplandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPLANLAMA_RAPORU_DETAY_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLPLANLAMA_RAPORU_DETAY_FKEY1` | `CARI_KOD` |
| FOREIGN KEY | `TBLPLANLAMA_RAPORU_DETAY_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLPLANLAMA_RAPORU_DETAY_FKEY3` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPLANLAMA_RAPORU_DETAY_IND1` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+YAPKOD+SIPNO+INCKEYNO` | Unique,Non-clustered |
| `TBLPLANLAMA_RAPORU_DETAY_IND2` | `ISLETME_KODU+SUBE_KODU+SIPNO+STOK_KODU+YAPKOD+INCKEYNO` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, STOK_KODU, SIPNO, CARI_KODU, SIPTAR
FROM dbo.TBLPLANLAMA_RAPORU_DETAY WITH (NOLOCK);
```
