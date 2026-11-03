---
title: TBLKOSDETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosdetay/
---

# TBLKOSDETAY

> DETAY KOSUL KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 61
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOSUL_KOD` | varchar(8) | evet |  | Koşul Kodunu gösterir. |
| 2 | `BASLANGICTARIHI` | TDBDATETIME | evet |  | Başlangıç Tarihini gösterir. |
| 3 | `BITISTARIHI` | TDBDATETIME | evet |  | Bitiş Tarihini gösterir. |
| 4 | `STOKKODU` | TDBSTOKKOD | evet |  | Stok Kodunu gösterir. |
| 5 | `RAPORKODU` | varchar(8) | evet |  | Koşul Rapor Kodunu gösterir. |
| 6 | `VADEGUNU` | TDBSMALLINT | evet | `0` | Vade Gününü gösterir. |
| 7 | `ORANTUTAR` | char(1) | evet | `O` | Oran O, Tutar T değerini ifade etmektedir. |
| 8 | `DEGERI` | TDBFLOAT | evet | `0` | Değeri göstermektedir. |
| 9 | `ISKORAN2` | TDBFLOAT | evet | `0` | İskonto 2 yi gösterir. |
| 10 | `ISKORAN3` | TDBFLOAT | evet | `0` | İskonto 3 ü gösterir. |
| 11 | `ISKORAN4` | TDBFLOAT | evet | `0` | İskonto 4 ü gösterir. |
| 12 | `ISKORAN5` | TDBFLOAT | evet | `0` | İskonto 5 i gösterir. |
| 13 | `ISKORAN6` | TDBFLOAT | evet | `0` | İskonto 6 yı gösterir. |
| 14 | `FIATTARIHI` | TDBDATETIME | evet |  | Fiat tarihini gösterir. |
| 15 | `LISTEFIATI` | TDBBYTE | evet | `0` | Liste Fiatını gösterir. |
| 16 | `MALFSTOKKODU` | TDBSTOKKOD | evet |  | Mal Fazlası Stok Kodunu gösterir. |
| 17 | `MALFMIKTAR1` | TDBFLOAT | evet | `0` | Miktar-1 i gösterir. |
| 18 | `MALFAZLASI1` | TDBFLOAT | evet | `0` | Mal Fazlası-1 i gösterir. |
| 19 | `MALFMIKTAR2` | TDBFLOAT | evet | `0` | Miktar-2 yi gösterir. |
| 20 | `MALFAZLASI2` | TDBFLOAT | evet | `0` | Mal Fazlası-2 yi gösterir. |
| 21 | `RANGEISK` | char(1) | evet | `H` | İskonto Aralığı Var mı? parametresi işaretli ise E, değil ise H değerini alır. |
| 22 | `MIKTUT` | char(1) | evet | `T` | Miktar M, Tutar T değerini ifade etmektedir. |
| 23 | `DEGER1` | TDBFLOAT | evet | `0` | Değer-1 i gösterir. |
| 24 | `DEGER2` | TDBFLOAT | evet | `0` | Değer-2 yi gösterir. |
| 25 | `DEGER3` | TDBFLOAT | evet | `0` | Değer-3 ü gösterir. |
| 26 | `DEGER4` | TDBFLOAT | evet | `0` | Değer-4 ü gösterir. |
| 27 | `DEGER5` | TDBFLOAT | evet | `0` | Değer-5 ü gösterir. |
| 28 | `DEGER6` | TDBFLOAT | evet | `0` | Değer-6 ü gösterir. |
| 29 | `ISK1` | TDBFLOAT | evet | `0` | İskonto-1 i gösterir. |
| 30 | `ISK2` | TDBFLOAT | evet | `0` | İskonto-2 yi gösterir. |
| 31 | `ISK3` | TDBFLOAT | evet | `0` | İskonto-3 ü gösterir. |
| 32 | `ISK4` | TDBFLOAT | evet | `0` | İskonto-4 ü gösterir. |
| 33 | `ISK5` | TDBFLOAT | evet | `0` | İskonto-5 ü gösterir. |
| 34 | `ISK6` | TDBFLOAT | evet | `0` | İskonto-6 ü gösterir. |
| 35 | `HANGIISK` | TDBBYTE | evet | `0` | Hangi Satır İskontosunda olduğunu gösterir. |
| 36 | `KAPATILMIS` | char(1) | evet | `H` | Koşul Kapatılsın Mı? parametresi işaretli ise E, değil ise H değerini alır. |
| 37 | `VADETARIHI` | TDBDATETIME | evet |  | Sabit Vade Tarihini gösterir. |
| 38 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 43 | `CMHESAPDAHIL` | char(1) | evet | `H` | Dönem Sonu Ciro/ Mik. Hesaplamasına Dahil Edilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 44 | `CIROISKDAHIL` | char(1) | evet | `H` | Ciro İskontosuna Dahil Edilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 45 | `PESISKORAN` | TDBFLOAT | evet | `0` | 30 Gün İçin Peşin İskonto Oranı |
| 46 | `GECIKMEKATSAYI` | TDBFLOAT | evet | `0` | 30 Gün İçin Fiyata Ekleme Katsayısı |
| 47 | `VADEKODU` | varchar(8) | evet |  | Vade Kodunu gösterir. |
| 48 | `VADEHANGIISK` | TDBBYTE | hayır | `0` | Vadenin Hangi İskontoda olduğunu gösterir. |
| 49 | `VADEISKONTOTIPI` | TDBSMALLINT | hayır | `0` | Vadenin İskonto Tipini gösterir. |
| 50 | `OLCUBR` | TDBBYTE | evet | `0` | Ölçü Birimini gösterir. Ölçü Birimi-1 1, Ölçü Birimi-2 2, Ölçü Birimi-3 3, Birim Seçimi-1 4, Birim Seçimi-2 5 değerini ifade etmektedir. |
| 51 | `FIYATGRUBU` | varchar(15) | evet |  | Fiyat Grubunu gösterir. |
| 52 | `STOKILISKI` | text | evet |  | Geçeri Stoklar bölümünde yapılan kısıtlamaları gösterir. |
| 53 | `MALFISKILISKI` | text | evet |  | Mal Fazlası bölümünden yapılan kısıtlamaları gösterir. |
| 54 | `MALFISKGRUPMU` | char(1) | evet | `H` | Mal Fazlası Grup Mu parametresi işaretli ise E, değil ise H değerini alır. |
| 55 | `MIKTAR1` | TDBFLOAT | evet | `0` | Fiyat Miktar aralığındaki 1. Miktarı gösterir. |
| 56 | `MIKTAR2` | TDBFLOAT | evet | `0` | Fiyat Miktar aralığındaki 2. Miktarı gösterir. |
| 57 | `MIKTAR3` | TDBFLOAT | evet | `0` | Fiyat Miktar aralığındaki 3. Miktarı gösterir. |
| 58 | `MIKTAR4` | TDBFLOAT | evet | `0` | Fiyat Miktar aralığındaki 4. Miktarı gösterir. |
| 59 | `FIREHANGIISK` | TDBBYTE | evet | `0` | Firenin Hangi İskontoda olduğunu gösterir. |
| 60 | `FIREISKONTOTIPI` | TDBSMALLINT | evet | `0` | Fire İskonto Tipini gösterir. |
| 61 | `ISLEMTIPI` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSDETAY_FKEY` | `KOSUL_KOD` |
| FOREIGN KEY | `TBLKOSDETAYFKEY2` | `FIYATGRUBU` |
| FOREIGN KEY | `TBLKOSDETAYFKEY3` | `VADEKODU` |
| PRIMARY KEY | `TBLKOSDETAY_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSDETAY_IND_1` | `KOSUL_KOD, BASLANGICTARIHI, STOKKODU, RAPORKODU` | Nonclustered, unique |
| `TBLKOSDETAY_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KOSUL_KOD, BASLANGICTARIHI, BITISTARIHI, STOKKODU, RAPORKODU, VADEGUNU
FROM dbo.TBLKOSDETAY WITH (NOLOCK);
```
