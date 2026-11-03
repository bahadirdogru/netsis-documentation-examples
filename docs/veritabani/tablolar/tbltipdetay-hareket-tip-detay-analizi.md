---
title: TBLTIPDETAY (Hareket Tip Detay Analizi)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltipdetay-hareket-tip-detay-analizi/
---

# TBLTIPDETAY (Hareket Tip Detay Analizi)

> EK ANALİZ HAZIRLIĞI STOK HAREKET TİPLERİ BAZINDA GİRİŞ/ÇIKIŞ TOPLAMLARI TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 90
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `DEPO_KODU` | TDBSMALLINT | hayır | `0` | Stokların bulunduğu depo kodunu gösterir. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 5 | `DEVIRMIK` | TDBFLOAT | evet | `0` | Stok bazındaki devir miktarını gösterir. |
| 6 | `GIRMIK_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki giriş miktarını gösterir. |
| 7 | `GIRMIK_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki giriş miktarını gösterir. |
| 8 | `GIRMIK_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki giriş miktarını gösterir. |
| 9 | `GIRMIK_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki giriş miktarını gösterir. |
| 10 | `GIRMIK_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki giriş miktarını gösterir. |
| 11 | `GIRMIK_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki giriş miktarını gösterir. |
| 12 | `GIRMIK_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki giriş miktarını gösterir. |
| 13 | `GIRMIK_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki giriş miktarını gösterir. |
| 14 | `GIRMIK_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki giriş miktarını gösterir. |
| 15 | `GIRMIK_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki giriş miktarını gösterir. |
| 16 | `GIRMIK_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki giriş miktarını gösterir. |
| 17 | `GIRMIK_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki giriş miktarını gösterir. |
| 18 | `GIRMIK_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki giriş miktarını gösterir. |
| 19 | `GIRTUT_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki giriş tutarını gösterir. |
| 20 | `GIRTUT_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki giriş tutarını gösterir. |
| 21 | `GIRTUT_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki giriş tutarını gösterir. |
| 22 | `GIRTUT_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki giriş tutarını gösterir. |
| 23 | `GIRTUT_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki giriş tutarını gösterir. |
| 24 | `GIRTUT_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki giriş tutarını gösterir. |
| 25 | `GIRTUT_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki giriş tutarını gösterir. |
| 26 | `GIRTUT_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki giriş tutarını gösterir. |
| 27 | `GIRTUT_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki giriş tutarını gösterir. |
| 28 | `GIRTUT_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki giriş tutarını gösterir. |
| 29 | `GIRTUT_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki giriş tutarını gösterir. |
| 30 | `GIRTUT_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki giriş tutarını gösterir. |
| 31 | `GIRTUT_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki giriş tutarını gösterir. |
| 32 | `CIKMIK_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki çıkış miktarını gösterir. |
| 33 | `CIKMIK_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki çıkış miktarını gösterir. |
| 34 | `CIKMIK_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki çıkış miktarını gösterir. |
| 35 | `CIKMIK_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki çıkış miktarını gösterir. |
| 36 | `CIKMIK_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki çıkış miktarını gösterir. |
| 37 | `CIKMIK_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki çıkış miktarını gösterir. |
| 38 | `CIKMIK_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki çıkış miktarını gösterir. |
| 39 | `CIKMIK_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki çıkış miktarını gösterir. |
| 40 | `CIKMIK_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki çıkış miktarını gösterir. |
| 41 | `CIKMIK_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki çıkış miktarını gösterir. |
| 42 | `CIKMIK_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki çıkış miktarını gösterir. |
| 43 | `CIKMIK_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki çıkış miktarını gösterir. |
| 44 | `CIKMIK_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki çıkış miktarını gösterir. |
| 45 | `CIKTUT_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki çıkış tutarını gösterir. |
| 46 | `CIKTUT_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki çıkış tutarını gösterir. |
| 47 | `CIKTUT_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki çıkış tutarını gösterir. |
| 48 | `CIKTUT_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki çıkış tutarını gösterir. |
| 49 | `CIKTUT_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki çıkış tutarını gösterir. |
| 50 | `CIKTUT_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki çıkış tutarını gösterir. |
| 51 | `CIKTUT_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki çıkış tutarını gösterir. |
| 52 | `CIKTUT_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki çıkış tutarını gösterir. |
| 53 | `CIKTUT_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki çıkış tutarını gösterir. |
| 54 | `CIKTUT_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki çıkış tutarını gösterir. |
| 55 | `CIKTUT_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki çıkış tutarını gösterir. |
| 56 | `CIKTUT_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki çıkış tutarını gösterir. |
| 57 | `CIKTUT_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki çıkış tutarını gösterir. |
| 58 | `TGIRMIK` | TDBFLOAT | evet | `0` | Stok bazında toplam giriş miktarını gösterir. |
| 59 | `TGIRTUT` | TDBFLOAT | evet | `0` | Stok bazında toplam giriş tutarını gösterir. |
| 60 | `TCIKMIK` | TDBFLOAT | evet | `0` | Stok bazında toplam çıkış miktarını gösterir. |
| 61 | `TCIKTUT` | TDBFLOAT | evet | `0` | Stok bazında toplam çıkış tutarını gösterir. |
| 62 | `GIRMIK2_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 63 | `GIRMIK2_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 64 | `GIRMIK2_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 65 | `GIRMIK2_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 66 | `GIRMIK2_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 67 | `GIRMIK2_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 68 | `GIRMIK2_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 69 | `GIRMIK2_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 70 | `GIRMIK2_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 71 | `GIRMIK2_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 72 | `GIRMIK2_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 73 | `GIRMIK2_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 74 | `GIRMIK2_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki ikinci giriş miktarını gösterir. |
| 75 | `CIKMIK2_1` | TDBFLOAT | evet | `0` | Hareket türü A (Devir) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 76 | `CIKMIK2_2` | TDBFLOAT | evet | `0` | Hareket türü B (Depolar) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 77 | `CIKMIK2_3` | TDBFLOAT | evet | `0` | Hareket türü C (Üretim) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 78 | `CIKMIK2_4` | TDBFLOAT | evet | `0` | Hareket türü D (Muhtelif) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 79 | `CIKMIK2_5` | TDBFLOAT | evet | `0` | Hareket türü E (Maliyet) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 80 | `CIKMIK2_6` | TDBFLOAT | evet | `0` | Hareket türü F (Konsinye) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 81 | `CIKMIK2_7` | TDBFLOAT | evet | `0` | Hareket türü G (Müstahsil) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 82 | `CIKMIK2_8` | TDBFLOAT | evet | `0` | Hareket türü H (İrsaliye) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 83 | `CIKMIK2_9` | TDBFLOAT | evet | `0` | Hareket türü I (Kapalı FAtura) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 84 | `CIKMIK2_10` | TDBFLOAT | evet | `0` | Hareket türü J (Açık Fatura) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 85 | `CIKMIK2_11` | TDBFLOAT | evet | `0` | Hareket türü K (Muht Müş Fa) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 86 | `CIKMIK2_12` | TDBFLOAT | evet | `0` | Hareket türü L (İade) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 87 | `CIKMIK2_13` | TDBFLOAT | evet | `0` | Hareket türü M (Zayi iade) olan stok bazındaki ikinci çıkış miktarını gösterir. |
| 88 | `TGIRMIK2` | TDBFLOAT | evet | `0` | Stok bazında toplam ikinici giriş miktarını gösterir. |
| 89 | `TCIKMIK2` | TDBFLOAT | evet | `0` | Stok bazında toplam ikinci çıkış tutarını gösterir. |
| 90 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa esnek yapılandırma kodlarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTIPDETAY_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSATDUMY_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TIPDETAY_IND` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+DEPO_KODU+YAPKOD` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, DEPO_KODU, STOK_KODU, DEVIRMIK, GIRMIK_1
FROM dbo.TBLTIPDETAY (Hareket Tip Detay Analizi) WITH (NOLOCK);
```
