---
title: TBLSTOKDP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokdp/
---

# TBLSTOKDP

> LOKAL DEPO TANIMLAMALARINI TUTAR. STOK MODÜLÜ LOKAL DEPO TANIMLAMALARINDAN KAYIT YAPILIR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `DEPO_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DEPO_KODU` | TDBSMALLINT | hayır | `0` | Lokal depo tanımlaması yapılırken tanımlanan depo kodu bilgisini gösterir. |
| 2 | `DEPO_ISMI` | varchar(20) | evet |  | Lokal depo isminin girileceği alandır. |
| 3 | `DEPO_KILITLE` | char(1) | evet |  | Lokal deponun kilitli olup olmadığını gösterir. Eğer lokal depo kilitli ise 'E', değilse 'H' değerini gösterir. |
| 4 | `CARI_KODU` | TDBCARIKOD | evet |  | Her müşterinin deposunu lokal depo olarak tanımlayarak takip etmek isteyenler için cari kodunun girileceği sahadır. |
| 5 | `EKSIBAKIYE` | char(1) | evet |  | Lokal depo bazında eksi bakiye kontrolünün yapılıp yapılmayacağını gösterir. Eğer eksi bakiye kontrolü yapılıyorsa 'E', yapılmıyorsa 'H' değerini gösterir. |
| 6 | `FIAT_TIPI` | char(1) | evet |  | Raporlama aöaçlı olup, depo fiyat cinsini gösterir. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `S_YEDEK1` | TDBREFKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `S_YEDEK2` | varchar(8) | evet |  | Stoğun hareket gördüğü birden fazla deponun bakiyesi kümüle edilerek toplam değer üzerinden bakiye kontrolü gerçekleştirilmek istendiğinde, bakiyesi kümüle edilecek depoların ortak bakiye kodu sahasına aynı değer girilmelidir. Bu saha ortak bakiye kodu sahasına girilen değeri gösterir. |
| 10 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK1` | char(1) | evet |  | Dinamik depo uygulaması için lokasyon takibi parametresi mutlaka işaretlenmelidir. Eğer bu parametre işaretli ise 'E' değerini gösterir. |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `EMANETDEPO` | char(1) | evet |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKDP_PKEY` | `DEPO_KODU` |
| FOREIGN KEY | `TBLSTOKDP_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKDP_IND_1` | `CARI_KODU` | Non-unique, Non-clustered |
| `TBLSTOKDP_IND_2` | `S_YEDEK2` | Non-unique, Non-clustered |
| `TBLSTOKDP_IND_3` | `SUBE_KODU+DEPO_ISMI` | Non-unique, Non-clustered |
| `TBLSTOKDP_IND_4` | `SUBE_KODU+DEPO_KILITLE` | Non-unique, Non-clustered |
| `TBLSTOKDP_IND_5` | `SUBE_KODU` | Non-unique, Non-clustered |
| `TBLSTOKDP_PKEY` | `DEPO_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 DEPO_KODU, DEPO_ISMI, DEPO_KILITLE, CARI_KODU, EKSIBAKIYE, FIAT_TIPI
FROM dbo.TBLSTOKDP WITH (NOLOCK);
```
