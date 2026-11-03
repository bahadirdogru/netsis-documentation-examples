---
title: TBLBNKLOGTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnklogtra/
---

# TBLBNKLOGTRA

> BANKA MODULU HAREKET KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 128

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BA` | char(1) | evet |  | B=Borc ;A=Alacak hareketini tutar. |
| 2 | `ISLEMTIPI` | TDBBYTE | evet |  | Musteri/Satıcı Havale/Eft=0; Banka hesapları arası havale/eft kayıtları=1; Banka hesapları arası virman=2; Repo vadeli hesap acma=5;Faiz isleme kapatma=7; Spot kredi acma=6 |
| 3 | `REFERANSNO` | varchar(20) | hayır |  | Referans numarasını tutar. |
| 4 | `YERTIPI` | TDBBYTE | evet |  | Musteri/Satıcı Havale/Eft=0; Banka hesapları arası havale/eft kayıtları=1; Banka hesapları arası virman =1;Repo vadeli hesap acma=1 ;Faiz isleme kapatma=1,Spot kredi acma=1 |
| 5 | `TERSKAYIT` | char(1) | evet |  | Ters kayıt ise E; degil ise H degerini tutar. |
| 6 | `TERSREFERANSNO` | varchar(20) | evet |  | Ters kayıt referans numarasını tutar. |
| 7 | `NETHESKODU` | varchar(15) | evet |  | Banka hesap kodunu tutan sahadır. |
| 8 | `KARSIHESKOD` | varchar(15) | evet |  | Karsı banka hesap kodu sahasıdır. Cari secilmis ise cari kodunu tutan sahadır. |
| 9 | `KARSIBANKAKODU` | varchar(10) | evet |  | Karsı bankanın kodunu tutan sahadır. |
| 10 | `KARSISUBEKODU` | varchar(10) | evet |  | Karsı bankanın sube kodunu tutan sahadır. |
| 11 | `KARSIBANKAHESNO` | varchar(30) | evet |  | Karsı bankanın hesap kodunu tutan sahadır. |
| 12 | `DEKONTNO` | varchar(15) | evet |  | Dekont no sahasıdır. |
| 13 | `TUTAR` | TDBFLOAT | evet |  | Tutar sahasıdır. |
| 14 | `DOVIZTIPI` | TDBBYTE | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DOVIZTUTAR` | TDBFLOAT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KARSIDOVIZTIPI` | TDBBYTE | evet |  | Gelen olarak secilen islemlerde karsı tarafın bize gonderdigi tutar dovizli ise doviz tipi sahasıdır. |
| 17 | `KARSIDOVIZTUTAR` | TDBFLOAT | evet |  | Gelen olarak secilen islemlerde karsı tarafın bize gonderdigi tutar dovizli ise doviz tutar sahasıdır. |
| 18 | `GELGIDBA` | char(1) | evet |  | İslem masrafı borc olarak islenecek ise B;alacak olarak islenecek ise A degerini tutan sahadır. |
| 19 | `GELGIDMUHKODU` | TDBMUHKOD | evet |  | İslem masrafı muhasabe kodu sahasıdır. |
| 20 | `GELGIDTUTAR` | TDBFLOAT | evet |  | İslem masrafı tutarıdır. |
| 21 | `GELGIDDOVIZTIPI` | TDBBYTE | evet |  | İslem masrafı dovizli ise doviz tipini tutan sahadır. |
| 22 | `GELGIDDOVIZTUTAR` | TDBFLOAT | evet |  | İslem masrafı dovizli ise doviz tutarı sahasıdır. |
| 23 | `GELGIDNETHESKODU` | varchar(15) | evet |  | İslem masrafının yansıtılacagı banka hesap kodu sahasıdır. |
| 24 | `GELGIDPROJEKODU` | varchar(15) | evet |  | İslem masrafı proje kodu sahasıdır. |
| 25 | `GELGIDMUHREFKOD` | varchar(15) | evet |  | İslem masrafı muhasebe referans kodu sahasıdır. |
| 26 | `VERGIBA1` | char(1) | evet |  | Yapılan islemden alınan vergi borc olarak islenecek ise B;alacak olarak islenecek ise A degerini tutan sahadır. |
| 27 | `VERGIMUHKODU1` | TDBMUHKOD | evet |  | Yapılan islemden alınan verginin muhasabe kodu sahasıdır. |
| 28 | `VERGITUTAR1` | TDBFLOAT | evet |  | Yapılan islemden alınan verginin tutarıdır. |
| 29 | `VERGIDOVIZTIPI1` | TDBBYTE | evet |  | Yapılan islemden alınan verginin dovizli ise doviz tipini tutan sahadır. |
| 30 | `VERGIDOVIZTUTAR1` | TDBFLOAT | evet |  | Yapılan islemden alınan verginin dovizli ise doviz tutarı sahasıdır. |
| 31 | `VERGINETHESKODU1` | varchar(15) | evet |  | Yapılan islemden alınan verginin nin yansıtılacagı banka hesap kodu sahasıdır. |
| 32 | `VERGIPROJEKODU1` | varchar(15) | evet |  | Yapılan islemden alınan verginin proje kodu sahasıdır. |
| 33 | `VERGIMUHREFKOD1` | varchar(15) | evet |  | Yapılan islemden alınan verginin muhasebe referans kodu sahasıdır. |
| 34 | `VERGIBA2` | char(1) | evet |  | Yapılan islemden alınan 2. vergi borc olarak islenecek ise B;alacak olarak islenecek ise A degerini tutan sahadır. |
| 35 | `VERGIMUHKODU2` | TDBMUHKOD | evet |  | Yapılan islemden alınan 2.verginin muhasabe kodu sahasıdır. |
| 36 | `VERGITUTAR2` | TDBFLOAT | evet |  | Yapılan islemden alınan 2. verginin tutarıdır. |
| 37 | `VERGIDOVIZTIPI2` | TDBBYTE | evet |  | Yapılan islemden alınan 2.verginin dovizli ise doviz tipini tutan sahadır. |
| 38 | `VERGIDOVIZTUTAR2` | TDBFLOAT | evet |  | Yapılan islemden alınan 2.verginin dovizli ise doviz tutarı sahasıdır. |
| 39 | `VERGINETHESKODU2` | varchar(15) | evet |  | Yapılan islemden alınan 2. verginin nin yansıtılacagı banka hesap kodu sahasıdır. |
| 40 | `VERGIPROJEKODU2` | varchar(15) | evet |  | Yapılan islemden alınan 2.verginin proje kodu sahasıdır. |
| 41 | `VERGIMUHREFKOD2` | varchar(15) | evet |  | Yapılan islemden alınan 2.verginin muhasebe referans kodu sahasıdır. |
| 42 | `YEDMASBA1` | char(1) | evet |  | Yapılan islemden alınan 3. vergi borc olarak islenecek ise B;alacak olarak islenecek ise A degerini tutan sahadır. |
| 43 | `YEDMASMUHKODU1` | TDBMUHKOD | evet |  | Yapılan islemden alınan 3.verginin muhasabe kodu sahasıdır. |
| 44 | `YEDMASTUTAR1` | TDBFLOAT | evet |  | Yapılan islemden alınan 3. verginin tutarıdır. |
| 45 | `YEDMASDOVIZTIPI1` | TDBBYTE | evet |  | Yapılan islemden alınan 3.verginin dovizli ise doviz tipini tutan sahadır. |
| 46 | `YEDMASDOVIZTUTAR1` | TDBFLOAT | evet |  | Yapılan islemden alınan 3.verginin dovizli ise doviz tutarı sahasıdır. |
| 47 | `YEDMASNETHESKODU1` | varchar(15) | evet |  | Yapılan islemden alınan 3. verginin nin yansıtılacagı banka hesap kodu sahasıdır. |
| 48 | `YEDMASPROJEKODU1` | varchar(15) | evet |  | Yapılan islemden alınan 3.verginin proje kodu sahasıdır. |
| 49 | `YEDMASMUHREFKOD1` | varchar(15) | evet |  | Yapılan islemden alınan 3.verginin muhasebe referans kodu sahasıdır. |
| 50 | `YEDMASBA2` | char(1) | evet |  | Yapılan islemden alınan 4. vergi borc olarak islenecek ise B;alacak olarak islenecek ise A degerini tutan sahadır. |
| 51 | `YEDMASMUHKODU2` | TDBMUHKOD | evet |  | Yapılan islemden alınan 4.verginin muhasabe kodu sahasıdır. |
| 52 | `YEDMASTUTAR2` | TDBFLOAT | evet |  | Yapılan islemden alınan 4. verginin tutarıdır. |
| 53 | `YEDMASDOVIZTIPI2` | TDBBYTE | evet |  | Yapılan islemden alınan 4.verginin dovizli ise doviz tipini tutan sahadır. |
| 54 | `YEDMASDOVIZTUTAR2` | TDBFLOAT | evet |  | Yapılan islemden alınan 4.verginin dovizli ise doviz tutarı sahasıdır. |
| 55 | `YEDMASNETHESKODU2` | varchar(15) | evet |  | Yapılan islemden alınan 4. verginin nin yansıtılacagı banka hesap kodu sahasıdır. |
| 56 | `YEDMASPROJEKODU2` | varchar(15) | evet |  | Yapılan islemden alınan 4.verginin proje kodu sahasıdır. |
| 57 | `YEDMASMUHREFKOD2` | varchar(15) | evet |  | Yapılan islemden alınan 4.verginin muhasebe referans kodu sahasıdır. |
| 58 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 59 | `BNKOPTARIH` | TDBDATETIME | evet |  | İslem tarihini tutan sahadır. |
| 60 | `VADETARIH` | TDBDATETIME | evet |  | Vade tarihi sahasıdır. |
| 61 | `EFFEKTIFTARIH` | TDBDATETIME | evet |  | Efektif tarih sahasıdır. |
| 62 | `FAIZORAN` | TDBFLOAT | evet |  | Faiz oranı sahasıdır. |
| 63 | `ACIKLAMA` | varchar(50) | evet |  | Banka hesap hareketlerine atılan acıklmayı tutan sahadır. |
| 64 | `KARSIACIKLAMA` | varchar(50) | evet |  | Karsı banka hesap yada cari hareket kayıtlarına atılan acıklamayı tutan sahadır. |
| 65 | `YEVACIKLAMA` | varchar(50) | evet |  | Entegrasyon kayıtlarına atılan yevmiye acıklamayı tutan sahadır. |
| 66 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Entegre anahtar degerini tutan sahadır. |
| 67 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 68 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodu sahasıdır. |
| 69 | `MUHREFKOD` | TDBPROJEKOD | evet |  | Muhasebe referans kodu sahasıdır. |
| 70 | `HESAPTIPI` | TDBBYTE | evet |  | Faiz isleme kapatma yapılan vadeli hesap ise 1;repo hesabı ise 2 degerini tutan sahadır. |
| 71 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 72 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 73 | `YEDEK1` | varchar(15) | evet |  | Cari rapor kodunu tutan sahadır. |
| 74 | `YEDEK2` | char(1) | evet |  | Repo/vadeli hesap acma ve spot kredi acma isleminde devir kaydı isaretli ise E degerini tutan sahadır. |
| 75 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 76 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 77 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 78 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 79 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 80 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 81 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 82 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 83 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 84 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 85 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 86 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 87 | `YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 88 | `YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 89 | `ONAYTIPI` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 90 | `ONAYNUM` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 91 | `MASRAFTEKCOK` | TDBBYTE | evet |  | Kredi kartı ile gelen kayıtlarda 1 değerini, havale eft ile gelen kayıtlarda 0 değerini gösterir |
| 92 | `KAYNAK` | char(1) | evet |  | Kredi kartı ile gönderilmiş ise K değeri , havale ile gönderilmiş ise NULL değerini gösterir. |
| 93 | `LIBORORAN` | TDBFLOAT | evet |  |  |
| 94 | `SPREADORAN` | TDBFLOAT | evet |  |  |
| 95 | `IHRACAT` | char(1) | evet |  |  |
| 96 | `TAKSIT` | TDBBYTE | evet |  | Taksit sayısı bilgisi yer alır. |
| 97 | `DONEM` | TDBBYTE | evet |  | Dönem bilgisi yer alır. |
| 98 | `TAKSITTUTAR` | TDBFLOAT | evet |  | Taksit tutarı bilgisi yer alır. |
| 99 | `TAKSITDOVTUTAR` | TDBFLOAT | evet |  | Taksit döviz tutarı bilgisi yer alır. |
| 100 | `KALANTUTAR` | TDBFLOAT | evet |  | Ana para tutarı kalan bilgisi yer alır. |
| 101 | `KALANDOVTUTAR` | TDBFLOAT | evet |  | Ana para kalan döviz tutarı bilgisi yer alır. |
| 102 | `HANGITAKSIT` | TDBBYTE | evet |  |  |
| 103 | `KARSIIBANNO` | varchar(30) | evet |  |  |
| 104 | `BASITFAIZKULLAN` | char(1) | evet |  | Basit faiz oranı kullanılsın bilgisi yer alır. |
| 105 | `ODEPLAN` | char(1) | evet |  | Taksitli uzun vadeli kredi açmada ödeme planı kullanılsın alanını gösterir. |
| 106 | `FAIZVERGIDAHIL` | char(1) | evet |  | Taksitli uzun vadeli kredi açmada faize vergi dahil alanını gösterir. |
| 107 | `CEZABA` | char(1) | evet |  | ceza borç alacak bilgisi yer alır. |
| 108 | `CEZAMUHKODU` | TDBMUHKOD | evet |  | Ceza için girilen muhasebe kodu bilgisi yer alır. |
| 109 | `CEZATUTAR` | TDBFLOAT | evet |  | Ceza için girilen tutar bilgisi yer alır. |
| 110 | `CEZADOVIZTIPI` | TDBBYTE | evet |  | Ceza için girilen döviz tipi bilgisi yer alır. |
| 111 | `CEZADOVIZTUTAR` | TDBFLOAT | evet |  | Ceza için girilen döviz tutar bilgisi yer alır. |
| 112 | `CEZANETHESKODU` | varchar(15) | evet |  |  |
| 113 | `CEZAPROJEKODU` | varchar(15) | evet |  | Ceza için girilen proje kodu bilgisi yer alır. |
| 114 | `CEZAMUHREFKOD` | varchar(15) | evet |  | Ceza için girilen muhasebe referans kodu bilgisi yer alır. |
| 115 | `CEZAORANI` | TDBFLOAT | evet |  | Ceza oranı bilgisi yer alır. |
| 116 | `ERKENKAPATILMIS` | char(1) | evet |  | Faiz işleme kapatma ekranındaki kredi erken kapansın parametresi tutulur. |
| 117 | `ARAODEME` | char(1) | evet |  | Rotatif kredilerde faiz işlemede ara ödeme alanı eklenmiştir. |
| 118 | `KREDI_NO` | varchar(50) | evet |  | Kredi no bilgisi yer alır. |
| 119 | `BELGE_TURU` | char(1) | evet |  | Belge türü bilgisi yer alır. |
| 120 | `STOPAJBA` | char(1) | evet |  | Faiz işleme kapatma ekranında girilen stopaj borç alacak bilgisi yer alır. |
| 121 | `STOPAJMUHKODU` | TDBMUHKOD | evet |  | Stopaj için girilen muhasebe kodu bilgisi yer alır. |
| 122 | `STOPAJTUTAR` | TDBFLOAT | evet |  | Stopaj tutarı bilgisi yer alır. |
| 123 | `STOPAJDOVIZTIPI` | TDBBYTE | evet |  | Stopaj döviz tipi yer alır. |
| 124 | `STOPAJDOVIZTUTAR` | TDBFLOAT | evet |  | stopaj döviz tutarı yer alır. |
| 125 | `STOPAJNETHESKODU` | varchar(15) | evet |  | Stopaj hesap kodu yer alır. |
| 126 | `STOPAJPROJEKODU` | varchar(15) | evet |  | stopaj için girilen proje kodu bilgisi yer alır. |
| 127 | `STOPAJMUHREFKOD` | varchar(15) | evet |  | Stopaj için girilen muhasebe referans kodu bilgisi yer alır. |
| 128 | `VADEDENONCE` | char(1) | evet |  | Banka modülü İşlemler menüsünün altına "Vadeli Hesap Para Çekme" ekranı eklenmiştir. Bu ekran aracılığı ile "Vadeli Hesap Açma" işleminde "Vadesinden önce çekilebilir" seçeneğinin işaretlendiği vadeli hesaplardan para çekme işlemi gerçekleştirilmektedir.(9032) |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKLOGTRA_IND_1` | `SUBE_KODU, ISLEMTIPI, NETHESKODU, BA` | Nonclustered |
| `TBLBNKLOGTRA_IND_2` | `SUBE_KODU` | Nonclustered |
| `TBLBNKLOGTRA_IND_3` | `ENTEGREFKEY` | Nonclustered |
| `TBLBNKLOGTRA_IND_ONUM` | `ONAYNUM` | Nonclustered |
| `TBLBNKLOGTRA_IND_OTIP` | `ONAYTIPI` | Nonclustered |
| `TBLBNKLOGTRAPK` | `REFERANSNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 BA, ISLEMTIPI, REFERANSNO, YERTIPI, TERSKAYIT, TERSREFERANSNO
FROM dbo.TBLBNKLOGTRA WITH (NOLOCK);
```
