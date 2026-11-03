---
title: TBLSIP12TMP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsip12tmp/
---

# TBLSIP12TMP

> ÜRETİM>KAYIT>BÜTÇE PLANLAMA EKRANINDAN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 3 | `MIKTAR_1` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için ocak ayı için girilen ihtiyaç miktarını gösterir. |
| 4 | `MIKTAR_2` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için şubat ayı için girilen ihtiyaç miktarını gösterir. |
| 5 | `MIKTAR_3` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için mart ayı için girilen ihtiyaç miktarını gösterir. |
| 6 | `MIKTAR_4` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için nisan ayı için girilen ihtiyaç miktarını gösterir. |
| 7 | `MIKTAR_5` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için mayıs ayı için girilen ihtiyaç miktarını gösterir. |
| 8 | `MIKTAR_6` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için haziran ayı için girilen ihtiyaç miktarını gösterir. |
| 9 | `MIKTAR_7` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için temmuz ayı için girilen ihtiyaç miktarını gösterir. |
| 10 | `MIKTAR_8` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için ağustos ayı için girilen ihtiyaç miktarını gösterir. |
| 11 | `MIKTAR_9` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için eylül ayı için girilen ihtiyaç miktarını gösterir. |
| 12 | `MIKTAR_10` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için ekim ayı için girilen ihtiyaç miktarını gösterir. |
| 13 | `MIKTAR_11` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için kasım ayı için girilen ihtiyaç miktarını gösterir. |
| 14 | `MIKTAR_12` | TDBFLOAT | evet | `0` | Aylık girilen üretim hedefleri için aralık ayı için girilen ihtiyaç miktarını gösterir. |
| 15 | `YAPKOD` | varchar(15) | evet | `NULL` | Stok kodunun eğer varsa yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSIP12TMP_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSIP12TMP_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIP12TMP_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLSIP12TMPPKEYIDX` | `SUBE_KODU+STOK_KODU+YAPKOD` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOK_KODU, MIKTAR_1, MIKTAR_2, MIKTAR_3, MIKTAR_4
FROM dbo.TBLSIP12TMP WITH (NOLOCK);
```
