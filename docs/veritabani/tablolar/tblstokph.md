---
title: TBLSTOKPH
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokph/
---

# TBLSTOKPH

> STOK KODU BAZINDA BAKİYELERİ TUTAR. KULLANICILAR TARAFINDAN MÜDAHALE EDİLEMEZ. TRİGGER TARAFINDAN GÜNCELLNİR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok/lokal depo uygulamasındaki ilgili stok kodunu gösterir. |
| 3 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `PROMOSYON_KODU` | TDBBYTE | evet | `0` | Stok/lokal depo uygulamasındaki ilgili stoğun promosyon kodunu gösterir. |
| 5 | `CEVRIM` | TDBFLOAT | evet | `0` | Stok/lokal depo uygulamasındaki ilgili stoğun giriş/çıkış çevrim değerini gösterir. |
| 6 | `KILIT` | char(1) | evet |  | Lokal depoda stok giriş/çıkışının durdurulması için kilit bilgisini gösterir. |
| 7 | `KONTROL` | char(1) | evet |  |  |
| 8 | `TOP_GIRIS_MIK` | TDBFLOAT | evet | `0` | Lokal depo uygulamasında ilgili stoğun bulunduğu lokal depodaki toplam giriş miktarını gösterir. (stok kartında lokal depo bakiye listesi sekmesinde görülür.) |
| 9 | `TOP_GIRIS_TUT` | TDBFLOAT | evet | `0` | İlgili lokal depoda bulunan stoğun toplam giriş tutarını gösterir. |
| 10 | `TOP_CIKIS_MIK` | TDBFLOAT | evet | `0` | Lokal depo uygulamasında ilgili stoğun bulunduğu lokal depodaki toplam çıkış miktarını gösterir. (stok kartında lokal depo bakiye listesi sekmesinde görülür.) |
| 11 | `TOP_CIKIS_TUT` | TDBFLOAT | evet | `0` | İlgili lokal depoda bulunan stoğun toplam çıkış tutarını gösterir. |
| 12 | `SON_GIR_BR_FIAT` | TDBFLOAT | evet | `0` | Lokal depo bazında giren stoğun son giriş brüt fiyatını gösterir. |
| 13 | `SON_GIR_NET_FIAT` | TDBFLOAT | evet | `0` | Lokal depo bazında giren stoğun son giriş net fiyatını gösterir. |
| 14 | `MALIYET_TUT` | TDBFLOAT | evet | `0` | Stok parametrelerinde maliyet sistemi parametresi işaretlendiğinde ilgili stoğa ait maliyet tutarını gösterir. |
| 15 | `STOK_DAGITIM` | TDBFLOAT | evet | `0` | Lokal depo bazında stoktan ayrılmış miktarı gösterir. |
| 16 | `MUS_TOP_SIPARIS` | TDBFLOAT | evet | `0` | Lokal depo bazında, müşterilerin ilgili stok için vermiş oldukları toplam sipariş miktarını gösterir. |
| 17 | `MUS_TOP_TESLIM` | TDBFLOAT | evet | `0` | Lokal depo bazında, müşterilerin vermiş oldukları siparişler için toplam teslim miktarını gösterir. |
| 18 | `SAT_TOP_TESLIM` | TDBFLOAT | evet | `0` | Lokal depo bazında, satıcılara ilgili stok için vermiş olduğumuz toplam sipariş miktarını gösterir. |
| 19 | `SAT_TOP_SIPARIS` | TDBFLOAT | evet | `0` | Lokal depo bazında, satıcıların ilgili stok için vermiş olduğumuz sipariş için toplam teslim ettikleri miktarı gösterir. |
| 20 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YOLMIK` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YAPKOD` | varchar(15) | evet | `null` | İlgili stoğun yapılandırma kodu varsa, yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKPH_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKPH_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSTOKPHFKEY2` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKPH_IDX_YAPKOD1` | `YAPKOD+ STOK_KODU+SUBE_KODU+DEPO_KODU` | Non-unique, Non-clustered |
| `TBLSTOKPH_IND_1` | `SUBE_KODU+STOK_KODU+DEPO_KODU+YAPKOD+CEVRIM` | Clustered |
| `TBLSTOKPH_IND_2` | `SUBE_KODU+STOK_KODU+DEPO_KODU` | Non-unique, Non-clustered |
| `TBLSTOKPH_IND_3` | `STOK_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOK_KODU, DEPO_KODU, PROMOSYON_KODU, CEVRIM, KILIT
FROM dbo.TBLSTOKPH WITH (NOLOCK);
```
