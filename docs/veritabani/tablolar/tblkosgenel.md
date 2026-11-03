---
title: TBLKOSGENEL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosgenel/
---

# TBLKOSGENEL

> KOSUL GENEL KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 54
- **Birincil anahtar:** `KOSUL_KOD, BASLANGICTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOSUL_KOD` | varchar(8) | hayır |  | Koşul Kodunu gösterir. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Koşul Açıklamasını gösterir. |
| 3 | `BASLANGICTAR` | TDBDATETIME | hayır |  | Başlangıç Tarihini gösterir. |
| 4 | `BITISTAR` | TDBDATETIME | evet |  | Bitiş Tarihini gösterir. |
| 5 | `FIATTAR` | TDBDATETIME | evet |  | Fiyat Tarihini gösterir. |
| 6 | `KOSULTAR` | TDBDATETIME | evet |  | Koşul Tarihini gösterir. |
| 7 | `ISKORANI` | TDBFLOAT | evet | `0` | Genel İskonto-1 i gösterir. |
| 8 | `ISKORANI2` | TDBFLOAT | evet | `0` | Genel İskonto-2 yi gösterir. |
| 9 | `ISKORANI3` | TDBFLOAT | evet | `0` | Genel İskonto-3 ü gösterir. |
| 10 | `LISTEFIATI` | TDBBYTE | evet | `-1` | Liste Fiyatını gösterir. |
| 11 | `VADEGUNU` | TDBSMALLINT | evet | `0` | Vade Gününü gösterir. |
| 12 | `PESISKORAN` | TDBFLOAT | evet | `0` | 30 Gün İçin Peşin İskonto Oranını gösterir. |
| 13 | `GECIKMEKATSAYI` | TDBFLOAT | evet | `0` | 30 Gün İçin Fiyata Ekleme Katsayısını gösterir. |
| 14 | `VADEGUNLERI1` | TDBSMALLINT | evet | `0` | Vade Günü-1 i gösterir. |
| 15 | `VADEGUNLERI2` | TDBSMALLINT | evet | `0` | Vade Günü-2 yi gösterir. |
| 16 | `VADEGUNLERI3` | TDBSMALLINT | evet | `0` | Vade Günü-3 ü gösterir. |
| 17 | `VADEGUNLERI4` | TDBSMALLINT | evet | `0` | Vade Günü-4 ü gösterir. |
| 18 | `VADELISTEFIATI1` | TDBBYTE | evet | `0` | Vade Liste Fiyatı-1 i gösterir |
| 19 | `VADELISTEFIATI2` | TDBBYTE | evet | `0` | Vade Liste Fiyatı-1 i gösterir |
| 20 | `VADELISTEFIATI3` | TDBBYTE | evet | `0` | Vade Liste Fiyatı-1 i gösterir |
| 21 | `VADELISTEFIATI4` | TDBBYTE | evet | `0` | Vade Liste Fiyatı-1 i gösterir |
| 22 | `GENELISKTIP1` | TDBSMALLINT | evet | `0` | Genel İskonto-1 tipini gösterir. |
| 23 | `GENELISKTIP2` | TDBSMALLINT | evet | `0` | Genel İskonto-2 tipini gösterir. |
| 24 | `GENELISKTIP3` | TDBSMALLINT | evet | `0` | Genel İskonto-3 tipini gösterir. |
| 25 | `SATIRISKTIP1` | TDBSMALLINT | evet | `0` | Satır İskonto-1 tipini gösterir. |
| 26 | `SATIRISKTIP2` | TDBSMALLINT | evet | `0` | Satır İskonto-2 tipini gösterir. |
| 27 | `SATIRISKTIP3` | TDBSMALLINT | evet | `0` | Satır İskonto-3 tipini gösterir. |
| 28 | `SATIRISKTIP4` | TDBSMALLINT | evet | `0` | Satır İskonto-4 tipini gösterir. |
| 29 | `SATIRISKTIP5` | TDBSMALLINT | evet | `0` | Satır İskonto-5 tipini gösterir. |
| 30 | `SATIRISKTIP6` | TDBSMALLINT | evet | `0` | Satır İskonto-6 tipini gösterir. |
| 31 | `RANGEISK` | char(1) | evet | `H` | İskonto Aralığı Var mı? parametresi işaretli ise E, değil ise H değerini alır. |
| 32 | `MIKTUT` | char(1) | evet | `T` | Miktar M, Tutar T değerini ifade etmektedir. |
| 33 | `DEGER1` | TDBFLOAT | evet | `0` | Değer-1 i gösterir. |
| 34 | `DEGER2` | TDBFLOAT | evet | `0` | Değer-2 yi gösterir. |
| 35 | `DEGER3` | TDBFLOAT | evet | `0` | Değer-3 ü gösterir. |
| 36 | `DEGER4` | TDBFLOAT | evet | `0` | Değer-4 ü gösterir. |
| 37 | `DEGER5` | TDBFLOAT | evet | `0` | Değer-5 ü gösterir. |
| 38 | `DEGER6` | TDBFLOAT | evet | `0` | Değer-6 ü gösterir. |
| 39 | `ISK1` | TDBFLOAT | evet | `0` | İskonto-1 i gösterir. |
| 40 | `ISK2` | TDBFLOAT | evet | `0` | İskonto-2 yi gösterir. |
| 41 | `ISK3` | TDBFLOAT | evet | `0` | İskonto-3 ü gösterir. |
| 42 | `ISK4` | TDBFLOAT | evet | `0` | İskonto-4 ü gösterir. |
| 43 | `ISK5` | TDBFLOAT | evet | `0` | İskonto-5 ü gösterir. |
| 44 | `ISK6` | TDBFLOAT | evet | `0` | İskonto-6 ü gösterir. |
| 45 | `HANGIISK` | TDBBYTE | evet | `0` | Hangi Satır İskontosunda olduğunu gösterir. |
| 46 | `KAPATILMIS` | char(1) | evet | `H` | Koşul Kapatılsın Mı? parametresi işaretli ise E, değil ise H değerini alır. |
| 47 | `VADETARIHI` | TDBDATETIME | evet |  | Sabit Vade Tarihini gösterir. |
| 48 | `FAIZORANI` | TDBFLOAT | evet | `0` | Faiz Oranını gösterir. |
| 49 | `RISKSIZICINVADE` | TDBSMALLINT | evet | `0` | Risksiz için artı vadeyi gösterir. |
| 50 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 53 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 54 | `ODEKOD` | TDBGRUPKOD | evet |  | Ödseme Kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSGENEL_FKEY` | `KOSUL_KOD` |
| PRIMARY KEY | `TBLKOSGENEL_PKEY` | `KOSUL_KOD, BASLANGICTAR` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSGENEL_PKEY` | `KOSUL_KOD, BASLANGICTAR` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KOSUL_KOD, ACIKLAMA, BASLANGICTAR, BITISTAR, FIATTAR, KOSULTAR
FROM dbo.TBLKOSGENEL WITH (NOLOCK);
```
