---
title: TBLMALIYET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaliyet/
---

# TBLMALIYET

> MALİYET BİLGİ GİRİŞİ SAYFASINDAKİ KAYITLARI TUTAR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 77
- **Birincil anahtar:** `KOD, TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KOD` | TDBSTOKKOD | hayır |  | Maliyet grup kodu sahasıdır. |
| 3 | `HAMYUZ` | TDBFLOAT | evet | `0` | Hammadde maliyet yüzdesidir. |
| 4 | `ISCYUZ` | TDBFLOAT | evet | `0` | İscilik maliyet yüzdesidir. |
| 5 | `ENERJIYUZ` | TDBFLOAT | evet | `0` | Enerji maliyet yüzdesidir. |
| 6 | `AMORYUZ` | TDBFLOAT | evet | `0` | Amortisman maliyet yüzdesidir. |
| 7 | `TARIH` | TDBDATETIME | hayır |  | Tarih sahasıdır. |
| 8 | `AMBYUZ` | TDBFLOAT | evet | `0` | Ambalaj maliyet yüzdesidir. |
| 9 | `YARDSERYUZ` | TDBFLOAT | evet | `0` | Yardımcı servis maliyet yüzdesidir. |
| 10 | `YEDEKPYUZ` | TDBFLOAT | evet | `0` | Yedek parca maliyet yüzdesidir. |
| 11 | `MALGIDER1_YUZ` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-1 maliyet yüzdesidir. |
| 12 | `MALGIDER2_YUZ` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-2 maliyet yüzdesidir. |
| 13 | `MALGIDER3_YUZ` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-3 maliyet yüzdesidir. |
| 14 | `HAMORAN` | TDBFLOAT | evet | `0` | Ham madde oranının tutulduğu sahadır |
| 15 | `MALGIDER4_YUZ` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-4 maliyet yüzdesidir. |
| 16 | `MALGIDER5_YUZ` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-5 maliyet yüzdesidir. |
| 17 | `URETMIK` | TDBFLOAT | evet | `0` | Uretim miktarı sahasıdır. |
| 18 | `MASRAFYUZ` | TDBFLOAT | evet | `0` | Masraf yüzdesinin tutulduğu sahadır |
| 19 | `HAMMIK` | TDBFLOAT | evet | `0` | Hammade sarf miktarı. |
| 20 | `HAMSTUT` | TDBFLOAT | evet | `0` | Hammadde sarf tutarı. |
| 21 | `ISCILIK` | TDBFLOAT | evet | `0` | İscilik-1 maliyet tutarıdır. |
| 22 | `ENERJI` | TDBFLOAT | evet | `0` | Enerji maliyet tutarıdır. |
| 23 | `AMORTISMAN` | TDBFLOAT | evet | `0` | Amortisman maliyet tutarıdır. |
| 24 | `AMBALAJ` | TDBFLOAT | evet | `0` | Ambalaj maliyet tutarıdır. |
| 25 | `YARDSER` | TDBFLOAT | evet | `0` | Yardımcı servis maliyet tutarıdır. |
| 26 | `YEDEKP` | TDBFLOAT | evet | `0` | Yedek parça maliyet tutarıdır. |
| 27 | `MALGIDER1` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-1 maliyet tutarıdır. |
| 28 | `MALGIDER2` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-2 maliyet tutarıdır. |
| 29 | `MALGIDER3` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-3 maliyet tutarıdır. |
| 30 | `MALFIAT` | TDBFLOAT | evet | `0` | Aylık Mal. Fiyat sahasıdır. |
| 31 | `STOK_MIK` | TDBFLOAT | evet | `0` | Bakiye stok miktarıdır. |
| 32 | `SATIS_TUT` | TDBFLOAT | evet | `0` | Satıs tutarıdır. |
| 33 | `SATIS_MIK` | TDBFLOAT | evet | `0` | Satıs miktarıdır. |
| 34 | `ORTSFIAT` | TDBFLOAT | evet | `0` | Ortalama satıs fiyatıdır. |
| 35 | `ORTMAL` | TDBFLOAT | evet | `0` | Ortalama maliyet sahasıdır. |
| 36 | `IADETUT` | TDBFLOAT | evet | `0` | İade tutarıdır. |
| 37 | `YARIMSARF` | TDBFLOAT | evet | `0` | Yarımamul sarfıdır. |
| 38 | `ISCILIK2` | TDBFLOAT | evet | `0` | İscilik-2 maliyeti. |
| 39 | `MALGIDER4` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-4 maliyet tutarıdır. |
| 40 | `MALGIDER5` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-5 maliyet tutarıdır. |
| 41 | `IADEMIK` | TDBFLOAT | evet | `0` | İade miktarıdır. |
| 42 | `ANAKOD` | varchar(15) | evet |  | Grup kodunun baglı oldugu ana grup kodudur. |
| 43 | `YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `YEDEK3` | TDBFLOAT | evet | `0` | Fason üretim miktarıdır. |
| 46 | `YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `YEDEK11` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `YEDEK12` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `CURHAMSTUT` | TDBFLOAT | evet | `0` | Dovizli hammadde sarf tutarıdır. |
| 56 | `CURISCILIK` | TDBFLOAT | evet | `0` | Dövizli işçilik-1 maliyet tutarıdır. |
| 57 | `CURENERJI` | TDBFLOAT | evet | `0` | Dövizli enerji maliyet tutarıdır. |
| 58 | `CURAMORTISMAN` | TDBFLOAT | evet | `0` | Dövizli amortisman maliyet tutarıdır. |
| 59 | `CURAMBALAJ` | TDBFLOAT | evet | `0` | Dövizli ambalaj maliyet tutarıdır. |
| 60 | `CURYARDSER` | TDBFLOAT | evet | `0` | Dövizli yardımcı servis maliyet tutarıdır. |
| 61 | `CURYEDEKP` | TDBFLOAT | evet | `0` | Dövizli yedek parca maliyet tutarıdır. |
| 62 | `CURMALGIDER1` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-1 dovizli maliyet tutarıdır. |
| 63 | `CURMALGIDER2` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-2 dovizli maliyet tutarıdır. |
| 64 | `CURMALGIDER3` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-3 dovizli maliyet tutarıdır. |
| 65 | `CURMALFIAT` | TDBFLOAT | evet | `0` | Dovizli aylık maliyet fiyatıdır. |
| 66 | `CURSATIS_TUT` | TDBFLOAT | evet | `0` | Dovizli satıs tutarıdır. |
| 67 | `CURORTSFIAT` | TDBFLOAT | evet | `0` | Dovizli ortalama satıs fiyatıdır. |
| 68 | `CURORTMAL` | TDBFLOAT | evet | `0` | Dovizli ortalama maliyet sahasıdır. |
| 69 | `CURIADETUT` | TDBFLOAT | evet | `0` | Dovizli iade tutarıdır. |
| 70 | `CURYARIMSARF` | TDBFLOAT | evet | `0` | Dovizli yarımamul rasfıdır. |
| 71 | `CURISCILIK2` | TDBFLOAT | evet | `0` | Dövizli işçilik-2 maliyet tutarıdır. |
| 72 | `CURMALGIDER4` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-4 dovizli maliyet tutarıdır. |
| 73 | `CURMALGIDER5` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-5 dovizli maliyet tutarıdır. |
| 74 | `CURHAMORAN` | TDBFLOAT | evet | `0` | Dovizli Ham. Oran sahasıdır. |
| 75 | `EXPSATISTUT` | TDBFLOAT | evet | `0` | İhracat tutarıdır. |
| 76 | `CUREXPSATISTUT` | TDBFLOAT | evet | `0` | Dovizli ihracat iade tutarıdır. |
| 77 | `EXPSATISMIK` | TDBFLOAT | evet | `0` | İhracat miktarıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALIYET_FKEY` | `KOD` |
| FOREIGN KEY | `TBLMALIYET_FKEY1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMALIYETPKEY` | `KOD, TARIH` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALIYET_IND_1` | `KOD` | Nonclustered |
| `TBLMALIYET_IND_3` | `TARIH, KOD` | Nonclustered, unique |
| `TBLMALIYET_IND_4` | `TARIH, ANAKOD` | Nonclustered |
| `TBLMALIYET_IND_5` | `ISLETME_KODU` | Nonclustered |
| `TBLMALIYETPKEY` | `KOD, TARIH` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KOD, HAMYUZ, ISCYUZ, ENERJIYUZ, AMORYUZ
FROM dbo.TBLMALIYET WITH (NOLOCK);
```
