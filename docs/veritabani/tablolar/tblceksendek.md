---
title: TBLCEKSENDEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblceksendek/
---

# TBLCEKSENDEK

> DEKONT MODULUNDEN YAPILAN CEK/SENET ISLEMLERININ KAYITLARINI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 42
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SERI_NO` | varchar(2) | hayır |  | Dekont seri numarasini tutan sahadır. |
| 4 | `DEKONT_NO` | TDBINTEGER | hayır |  | Dekont numarasını tutan sahadır. |
| 5 | `DEKONT_PRGNO` | TDBSMALLINT | hayır |  | Cek tahsil dekontu=6 ;Borc senedi/ceki odeme dekontu=10; Portfoydeki senet karsılıksız dekontu=16;Satıcıdan gelen protestolu senet dekontu=4; |
| 6 | `CEKSENTIP` | TDBBYTE | hayır |  | Musteri cekleri=1;Borc cekleri=2;Musteri senetleri=3 ;Borc senetleri=4 olarak tutulur. |
| 7 | `FISNO` | TDBBELGENO | evet |  | Fis numarasini tutan sahadır. |
| 8 | `ISLEM_TARIHI` | TDBDATETIME | evet |  | İslem yapilan tarihi tutan sahadır. |
| 9 | `DEKTUTAR` | TDBFLOAT | evet | `0` | Dekont tutar sahasıdır. |
| 10 | `DEKDOVTIPI` | TDBBYTE | evet | `0` | Dekont dovizli ise doviz tipi sahasıdır. |
| 11 | `DEKDOVTUT` | TDBFLOAT | evet | `0` | Doviz tutarı sahasıdır. |
| 12 | `DEKDOVKUR` | TDBFLOAT | evet | `0` | Doviz dekont kurunu tutan sahadır. |
| 13 | `DEKKURFARKI` | TDBFLOAT | evet | `0` | Kur farknı tutan sahadır. |
| 14 | `TAHTEMHES_KOD` | varchar(35) | evet |  | Banka tahsil/teminat hesap kodunu tutan sahadır. |
| 15 | `GIDERHES_KOD` | varchar(35) | evet |  | Gider hesap kodu sahasıdır. |
| 16 | `VIRMANHES_KOD` | varchar(35) | evet |  | Virman hesap kodu sahasıdır. |
| 17 | `ALACAKCARI_KODU` | varchar(35) | evet |  | Alacaklı cari kodu sahasıdır. |
| 18 | `BORCCARI_KODU` | varchar(35) | evet |  | Borclu cari kodu sahasıdır. |
| 19 | `TAHSILMASRAFTUT` | TDBFLOAT | evet | `0` | Tahsil masraflarıdır. |
| 20 | `BANKABORCBEDELI` | TDBFLOAT | evet | `0` | Tahsil masrafları düşüldüğünde bankanın ödemesi gereken kalan tutardır. |
| 21 | `PROTMASRAFTUT` | TDBFLOAT | evet | `0` | Protesto masrafını tutan sahadır. |
| 22 | `GENGIDMASRAFTUT` | TDBFLOAT | evet | `0` | Genel gider masrafını tutan sahadır. |
| 23 | `DEKONTACIK` | varchar(50) | evet |  | Dekont acıklama sahasıdır. |
| 24 | `CARIACIK` | varchar(50) | evet |  | Cari Hareket kayıtlarına atılacak olan acıklamadır. |
| 25 | `YEVMIYEACIK` | varchar(50) | evet |  | Yevmiye fisi acıklama sahasıdır. |
| 26 | `DEKPLASKODU` | TDBPLASIYER | evet |  | Dekont plasiyer kodu sahasıdır. |
| 27 | `DEKREFKODU` | TDBREFKOD | evet |  | Referans kodu sahasıdır. |
| 28 | `CARIMUHASEBE` | char(1) | evet |  | Cari ise C; Muhasebe ise M degerini tutan sahadır. |
| 29 | `BANKAKODU` | varchar(35) | evet |  | Borc cek ve senetleri icin banka kodu sahasıdır. |
| 30 | `SC_NO` | varchar(15) | evet |  | İslem yapılan senet/cek numarasıdır. |
| 31 | `SC_CIKTRH` | TDBDATETIME | evet |  | Senet/cekin tahsile cıkıs tarihi. |
| 32 | `SC_ODETRH` | TDBDATETIME | evet |  | Senet/cekin odeme tarihi. |
| 33 | `SC_VERILENK` | varchar(35) | evet |  | Senet/cekin verilen kodu. |
| 34 | `SC_BANKNO` | varchar(20) | evet |  | Senet/cekin banka numarasını tutar |
| 35 | `SC_SONDUR` | char(1) | evet |  | Senet/cekin son durumunu tutar. |
| 36 | `SC_YERI` | char(1) | evet |  | Senet/cekin son yerine tutar. |
| 37 | `TUTAR` | TDBFLOAT | evet | `0` | Tutar sahasıdır. |
| 38 | `KURFARKI` | TDBFLOAT | evet | `0` | Kur farknı tutan sahadır. |
| 39 | `SC_ALB_NO` | varchar(15) | evet |  | Senet/cek alındı bordro numarasıdır. |
| 40 | `SC_VERB_NO` | varchar(15) | evet |  | Senet/cek verildi bordro numarasıdır. |
| 41 | `YERI` | varchar(25) | evet |  | Devir cek girisinde bulunan cekin bankasıdır. |
| 42 | `TERSISLEM` | char(1) | evet | `H` | Ters islem ise E degerini tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCEKSENDEK_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCEKSENDEKPKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCEKSENDEK_IND_2` | `SUBE_KODU, SERI_NO, DEKONT_NO` | Nonclustered, unique |
| `TBLCEKSENDEKPKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, INCKEYNO, SERI_NO, DEKONT_NO, DEKONT_PRGNO, CEKSENTIP
FROM dbo.TBLCEKSENDEK WITH (NOLOCK);
```
