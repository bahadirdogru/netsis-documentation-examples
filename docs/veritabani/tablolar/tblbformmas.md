---
title: TBLBFORMMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbformmas/
---

# TBLBFORMMAS

> B FORMU PARAMETRE KAYITLARINI VE MÜKELLEF VE DÜZENLEYEN BİLGİLERİ KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 110

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BFORMULIMIT` | TDBFLOAT | hayır |  | Limit tutar sahasıdır. |
| 3 | `MVERGINUMARASI` | varchar(15) | evet |  | Mukellef vergi kimlik numarası sahasıdır. |
| 4 | `MVERGIDAIRESI` | varchar(50) | evet |  | Mukellef vergi dairesi sahasıdır. |
| 5 | `MSOYADI` | varchar(50) | evet |  | Mukellefin soyadının tutuldugu sahadır. |
| 6 | `MADI` | varchar(50) | evet |  | Mukellefin adının tutuldugu sahadır. |
| 7 | `MTCKIMLIKNO` | varchar(35) | evet |  | Mukellef TC Kimlik numarasinin tutuldugu sahadır. |
| 8 | `ONAYLAYANTIPI` | char(1) | evet |  | Onaylayan tipini tutan sahadır. |
| 9 | `OVERGINUMARASI` | varchar(15) | evet |  | Onaylayan vergi kimlik numarasını tutan sahadır. |
| 10 | `OSOYADI` | varchar(50) | evet |  | Onaylayanın soyadını tutan sahadır. |
| 11 | `OADI` | varchar(50) | evet |  | Onaylayanın adını tutan sahadır. |
| 12 | `OTCKIMLIKNO` | varchar(35) | evet |  | Onaylayanın TC kimlik numarasını tutan sahadır. |
| 13 | `HSVTIPI` | char(1) | evet |  | HSV(Hangi sıfatla verildigi) tipini tutar. |
| 14 | `HVERGINUMARASI` | varchar(15) | evet |  | Mukellef yada kanuni temsilcinin vergi numarasıdır. |
| 15 | `HSOYADI` | varchar(50) | evet |  | Mukellef yada kanuni temsilcinin soyadını tutan sahadır. |
| 16 | `HADI` | varchar(50) | evet |  | Mukellef yada kanuni temsilcinin adını tutan sahadır. |
| 17 | `HTCKIMLIKNO` | varchar(35) | evet |  | Mukellef yada kanuni temsilcinin TC kimlik numarasini tutan sahadır. |
| 18 | `OTICSICILNO` | varchar(15) | evet |  | Onaylayanın ticaret sicil numarasını tutan sahadır. |
| 19 | `OEPOSTA` | varchar(30) | evet |  | Onaylayanın eposta adresini tutan sahadır. |
| 20 | `OALANKOD` | varchar(8) | evet |  | Onaylayanın telefon numarası alan kodudur. |
| 21 | `OTELNO` | varchar(10) | evet |  | Onaylayanın telefon numarasıdır. |
| 22 | `MTICSICILNO` | varchar(15) | evet |  | Mukellef ticaret sicil numarasını tutan sahadır. |
| 23 | `MEPOSTA` | varchar(30) | evet |  | Mukellef eposta adresini tutan sahadır. |
| 24 | `MALANKOD` | varchar(8) | evet |  | Mukellef telefon numarası alan kodunu tutan sahadır. |
| 25 | `MTELNO` | varchar(10) | evet |  | Mukellef telefon numarasını tutan sahadırt. |
| 26 | `HTICSICILNO` | varchar(15) | evet |  | Mukellef yada kanuni temsilcinin ticaret sicil numarasini tutan sahadır. |
| 27 | `HEPOSTA` | varchar(30) | evet |  | Mukellef yada kanuni temsilcinin eposta adresini tutan sahadır. |
| 28 | `HALANKOD` | varchar(8) | evet |  | Mukellef yada kanuni temsilcinin telefonnumarası alan kodunu tutan sahadır. |
| 29 | `HTELNO` | varchar(10) | evet |  | Mukellef yada kanuni temsilcinin telefon numarasını tutan sahadır. |
| 30 | `FATURAKISIT` | TDBMEMO | evet |  | Faturalardan getirilmeyecek kyıtlar için kısıt girilsin seçili olması durumunda girilen kısıtın xml olarak bilgisi tutulur. |
| 31 | `DMTVERGINUMARASI` | varchar(15) | evet |  | Dar mükellef temsilcisi vergi numarası yer alır. |
| 32 | `DMTSOYADI` | varchar(150) | evet |  | Dar mükellef temsilcisi soyadı bligisi yer alır. |
| 33 | `DMTADI` | varchar(150) | evet |  | Dar mükellef temsilcisi isim bilgisi yer alır. |
| 34 | `DMTTCKIMLIKNO` | varchar(35) | evet |  | Dar mükellef temsilcisi tckimlik numarası bilgisi yer alır. |
| 35 | `DMTTICSICILNO` | varchar(15) | evet |  | Dar mükellef temsilcisi ticaret sicil numarası bilgisi yer alır. |
| 36 | `DMTEPOSTA` | varchar(60) | evet |  | Dar mükellef temsilcisi e-posta bilgisi yer alır. |
| 37 | `DMTALANKOD` | varchar(8) | evet |  | Dar mükellef temsilcisi alan kodu bilgisi yer alır. |
| 38 | `DMTTELNO` | varchar(10) | evet |  | Dar mükellef temsilcisi telefon numarası bilgisi yer alır. |
| 39 | `GONDERENTIPI` | char(1) | evet |  | Bildirimi gönderen tipi bilgisi yer alır. |
| 40 | `GVERGINUMARASI` | varchar(15) | evet |  | Bildirimi gönderen VKNO bilgisi yer alır. |
| 41 | `GSOYADI` | varchar(150) | evet |  | Bildirimi gönderen soyadı/ünvan bilgisi yer alır. |
| 42 | `GADI` | varchar(150) | evet |  | Bildirimi gönderen adı bilgisi yer alır. |
| 43 | `GTCKIMLIKNO` | varchar(35) | evet |  | Bildirimi gönderen tc kimlik numarası bilgisi yer alır. |
| 44 | `GODASICILNO` | varchar(15) | evet |  | Bildirimi gönderen Oda sicil numarası bilgisi yer alır. |
| 45 | `GEPOSTA` | varchar(60) | evet |  | Bildirimi gönderen e-posta bligisi yer alır. |
| 46 | `GALANKOD` | varchar(8) | evet |  | Bildirimi gönderen alan kodu bilgisi yer alır. |
| 47 | `GTELNO` | varchar(10) | evet |  | Bildirimi gönderen telefon bilgisi yer alır. |
| 48 | `YMMVERGINUMARASI` | varchar(15) | evet |  | YMM bilgileri vergi kimlik numarası bilgisi yer alır. |
| 49 | `YMMSOYADI` | varchar(150) | evet |  | YMM bilgileri soyadı bilgisi yer alır. |
| 50 | `YMMADI` | varchar(150) | evet |  | YMM bilgileri adı bilgisi yer alır. |
| 51 | `YMMTCKIMLIKNO` | varchar(35) | evet |  | YMM bilgileri tckno bilgisi yer alır. |
| 52 | `YMMODASICILNO` | varchar(15) | evet |  | YMM bilgileri oda sicil numarası bilgisi yer alır. |
| 53 | `YMMEPOSTA` | varchar(60) | evet |  | YMM bilgileri e-posta bilgisi yer alır. |
| 54 | `YMMALANKOD` | varchar(8) | evet |  | YMM bilgileri alan kodu bilgisi yer alır. |
| 55 | `YMMTELNO` | varchar(10) | evet |  | YMM bilgileri telefon bilgisi yer alır. |
| 56 | `BASTARIH` | TDBDATETIME | evet |  | B formu parametrelerindeki başlangıç tarihi bilgisi yer alır. |
| 57 | `BITTARIH` | TDBDATETIME | evet |  | B formu parametrelerindeki bitiş tarihi bilgisi yer alır. |
| 58 | `MKMAHALLE` | varchar(50) | evet |  | Mükellef kimlik bilgilerindeki mahalle bilgisi yer alır. |
| 59 | `MKSOKAK` | varchar(50) | evet |  | Mükellef kimlik bilgilerindeki sokak bilgisi yer alır. |
| 60 | `MKBINA_NUM` | varchar(15) | evet |  | Mükellef kimlik bilgilerindeki bina numarası bilgisi yer alır. |
| 61 | `MKSEHIR` | varchar(15) | evet |  | Mükellef kimlik bilgilerindeki şehir bilgisi yer alır. |
| 62 | `MKPOSTAKODU` | varchar(8) | evet |  | Mükellef kimlik bilgilerindeki posta kodu bilgisi yer alır. |
| 63 | `MKULKE` | varchar(15) | evet |  | Mükellef kimlik bilgilerindeki ülke bilgisi yer alır. |
| 64 | `MKWEB` | varchar(60) | evet |  | Mükellef kimlik bilgilerindeki web adresi bilgisi yer alır. |
| 65 | `MKTIP` | varchar(1) | evet |  | NULL |
| 66 | `MKTIPSERINO` | varchar(15) | evet |  | NULL |
| 67 | `HSVSMAHALLE` | varchar(50) | evet |  | HSV mahalle bilgisi yer alır. |
| 68 | `HSVSSOKAK` | varchar(50) | evet |  | HSV sokak bilgisi yer alır. |
| 69 | `HSVSBINA_NUM` | varchar(15) | evet |  | HSV bina numarası blgisi yer alır. |
| 70 | `HSVSSEHIR` | varchar(15) | evet |  | HSV şehir bilgisi yer alır. |
| 71 | `HSVSPOSTAKODU` | varchar(8) | evet |  | HSV posta kodu bilgisi yer alır. |
| 72 | `HSVSULKE` | varchar(15) | evet |  | HSV ülke bilgisi yer alır. |
| 73 | `HSVSWEB` | varchar(60) | evet |  | HSV web adresi bilgisi yer alır. |
| 74 | `HSVDMAHALLE` | varchar(50) | evet |  | Düzenleyen bilgileri mahalle bilgisi yer alır. |
| 75 | `HSVDSOKAK` | varchar(50) | evet |  | Düzenleyen bilgileri sokak bilgisi yer alır. |
| 76 | `HSVDBINA_NUM` | varchar(15) | evet |  | Düzenleyen bilgileri bina numarası bilgisi yer alır. |
| 77 | `HSVDSEHIR` | varchar(15) | evet |  | Düzenleyen bilgileri şehir bilgisi yer alır. |
| 78 | `HSVDPOSTAKODU` | varchar(8) | evet |  | Düzenleyen bilgileri posta kodu bilgisi yer alır. |
| 79 | `HSVDULKE` | varchar(15) | evet |  | Düzenleyen bilgileri ülke bilgisi yer alır. |
| 80 | `HSVDWEB` | varchar(60) | evet |  | Düzenleyen bilgileri web adresi bilgisi yer alır. |
| 81 | `MKFAALIYET` | varchar(100) | evet |  | Faaliyet Kodu-NACE değeri yer alır. |
| 82 | `MKHDONEMBAS` | TDBDATETIME | evet |  | Dönem başlangıç tarihi bilgisi yer alır. |
| 83 | `MKHDONEMBIT` | TDBDATETIME | evet |  | Dönem bitiş tarihi bilgisi yer alır. |
| 84 | `HSVSACIKLAMA` | varchar(100) | evet |  | HSV sözleşme açıklama bilgisi yer alır. |
| 85 | `HSVSCESIDI` | varchar(50) | evet |  | HSV sözleşme çeşidi bilgisi yer alır. |
| 86 | `HSVSTARIHI` | TDBDATETIME | evet |  | HSV sözleşme tarihi bilgisi yer alır. |
| 87 | `HSVSNUMARASI` | varchar(15) | evet |  | HSV sözleşme numarası bilgisi yer alır. |
| 88 | `HSVSTEL` | TDBTELFAX | evet |  | HSV İrt. Tel ono bilgisi yer alır. |
| 89 | `HSVSEPOSTA` | varchar(60) | evet |  | HSV e-posta bilgisi yer alır. |
| 90 | `HSVDACIKLAMA` | varchar(100) | evet |  | Düzenleyen bilgileri sözleşme açıklama bilgisi yer alır. |
| 91 | `HSVDCESIDI` | varchar(50) | evet |  | Düzenleyen bilgileri sözleşme çeşidi bilgisi yer alır. |
| 92 | `HSVDTARIHI` | TDBDATETIME | evet |  | Düzenleyen bilgileri sözleşme tarihi bilgisi yer alır. |
| 93 | `HSVDNUMARASI` | varchar(15) | evet |  | Düzenleyen bilgileri sözleşme numarası bilgisi yer alır. |
| 94 | `HSVDTEL` | TDBTELFAX | evet |  | Düzenleyen bilgileri telefon numarası bilgisi yer alır. |
| 95 | `HSVDEPOSTA` | varchar(60) | evet |  | Düzenleyen bilgileri e-posta bilgisi yer alır. |
| 96 | `MFAXNO` | TDBTELFAX | evet |  | İdari ve mükellef bilgilerindeki faks numarası yer alır. |
| 97 | `DMTFAXNO` | TDBTELFAX | evet |  | Dar mükellef bilgilerindeki faks numarası bilgisi yer alır. |
| 98 | `HFAXNO` | TDBTELFAX | evet |  | HSV faks numarası bilgisi yer alır. |
| 99 | `OFAXNO` | TDBTELFAX | evet |  | Düzenleyen bilgileri faks numarası yer alır. |
| 100 | `GFAXNO` | TDBTELFAX | evet |  | Gönderen bligileri faks numarası yer alır. |
| 101 | `YMMFAXNO` | TDBTELFAX | evet |  | YMM bilgilerindeki faks numarası bilgisi yer alır. |
| 102 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 103 | `EDEFTERSUBE_KODU` | TDBSMALLINT | evet |  | edefter şube kodu bilgisi yer alır. |
| 104 | `EDEFTERSUBEUNVAN` | varchar(150) | evet |  | Edefter şube ünvan bilgisi yer alır. |
| 105 | `CURRENCYCODE` | varchar(3) | evet |  | Edefterin tutulduğu para birimi bilgisi yer alır. |
| 106 | `ALISFATDOVKUR` | varchar(100) | evet |  | Alış faturaları kaynak döviz kuru bilgisi yer alır. |
| 107 | `SATISFATDOVKUR` | varchar(100) | evet |  | Satış faturaları kaynak döviz kuru bilgisi yer alır. |
| 108 | `DIGERDOVKUR` | varchar(100) | evet |  | Diğer fişler için kaynak döviz kuru bilgisi yer alır. |
| 109 | `EDEFTERDONEMAYBASI` | char(1) | evet |  | E-defter dönem başlangıcı düzenlemesi için eklenen alan |
| 110 | `EDEFTERBELGEKONTROL` | char(1) | evet |  | E-defter oluşturulan aya ait belgelerde değişiklik yapılamasın parametresi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BFORMULIMIT, MVERGINUMARASI, MVERGIDAIRESI, MSOYADI, MADI
FROM dbo.TBLBFORMMAS WITH (NOLOCK);
```
