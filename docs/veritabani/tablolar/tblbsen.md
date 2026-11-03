---
title: TBLBSEN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbsen/
---

# TBLBSEN

> DEVIR SENET GIRISI VE CARI HESABA SENET CIROSUNDAN YAPILAN KAYITLARI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 63

## İlgili sayfalar

- [Çek/senet (REST)](/rest/uclar/#cek-ve-senet-checkandpnotesmain)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SC_NO` | TDBBELGENO | hayır |  | Borc senedinin numarasını tutan sahadır. |
| 3 | `SC_GIRTRH` | TDBDATETIME | evet |  | Portfoye girtis tarihini tutar. |
| 4 | `VADETRH` | TDBDATETIME | evet |  | Cekin vade tarihini tutar. |
| 5 | `SC_CIKTRH` | TDBDATETIME | evet |  | Portfoyden cıkıs tarihini tutan sahadır. |
| 6 | `SC_ODETRH` | TDBDATETIME | evet |  | Cekin odeme tarihi. |
| 7 | `SC_VERENK` | varchar(15) | evet |  | Borc senedinin bankasını tutan sahadır. |
| 8 | `SC_ABORCLU` | varchar(30) | evet |  | Asıl borclu alanını tutar. |
| 9 | `AS_C` | char(1) | evet |  | Asıl borclu mu, yoksa ciro mu bilgisini tutar. |
| 10 | `SC_VERILENK` | varchar(35) | evet |  | Verilen kodu alanını tutar. |
| 11 | `SC_VERYCM` | char(1) | evet |  | Cariden cıkıs yapılmıs ise E, muhasebeden cıkıs yapılmıs ise H degerini tutar. |
| 12 | `SC_BANKNO` | varchar(20) | evet |  | Cekin banka numarasını tutan sahadır. |
| 13 | `SC_SONDUR` | char(1) | evet |  | Cekin son durumunu tutar. |
| 14 | `SC_YERI` | char(1) | evet |  | Cekin son yerini tutan sahadır. |
| 15 | `RAPOR_KODU` | char(1) | evet |  | Rapor kodunu tutan sahadır. |
| 16 | `TUTAR` | TDBFLOAT | evet |  | Tutar sahasıdır. |
| 17 | `KURFARKI` | TDBFLOAT | evet |  | Senedin olusan kur farkının kaydedildigi sahadır. |
| 18 | `SC_ALB_NO` | TDBBELGENO | evet |  | Senedin alındı bordro numarasını tutar. |
| 19 | `SC_VERB_NO` | TDBBELGENO | evet |  | Senedin verildi bordro numarasını tutar. |
| 20 | `YERI` | varchar(25) | evet |  | Senedin bankasını tutar. |
| 21 | `C_NUMARA` | varchar(10) | evet |  | Senedin bankasının hesap numarasını tutar. |
| 22 | `UPDATE_KODU` | char(1) | evet |  | Yeni girilen cekde X dir.Konsolidasyon sonrasında bosaltılır. Bilginin konsolide edilip edilmedigine dair isaret tutulur. |
| 23 | `DOVTIP` | TDBBYTE | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DOVTUT` | TDBFLOAT | evet |  | Doviz tutarı sahasıdır. |
| 25 | `GIRILDIGIYER` | TDBBYTE | evet |  | Devir cek girisinden kayıt edildi ise 1; cari hesaba cek cirosundan kayıt edildi ise 2 degerini tutar. |
| 26 | `FIRMADOVTIP` | TDBBYTE | evet |  | Firma doviz tipini tutan sahadır. |
| 27 | `FIRMADOVTUT` | TDBFLOAT | evet |  | Firma doviz tutarının sahasıdır. |
| 28 | `CEKSERI` | varchar(25) | evet |  | Cekin seri numarasini tutar. |
| 29 | `PLASIYER_KODU` | varchar(8) | evet |  | Plasiyer kodunu tutar. |
| 30 | `PLASIYER_TARIH` | TDBDATETIME | evet |  | Cekin zimmet tarihini tutan sahadır. |
| 31 | `RAP_KOD` | varchar(15) | evet |  | Rapor kodunu tutar. |
| 32 | `GIRIS_BORDRO` | char(1) | evet |  | Bordro tamamlanmıs ise E degerini tutar. |
| 33 | `CIKIS_BORDRO` | char(1) | evet |  | Bordro tamamlanmıs ise E degerini tutar. |
| 34 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 45 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 46 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 48 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `ONAYTIPI` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 50 | `ONAYNUM` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `VONAYNUM` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `VONAYTIPI` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 53 | `CEK_SUBE` | varchar(50) | evet |  | Çek-senetin şubesi bilgisi yer alır. |
| 54 | `CEK_IL` | varchar(50) | evet |  | Çek-senetin il bilgisi yer alır. |
| 55 | `CEK_ILCE` | varchar(50) | evet |  | Çek-senetin ilçe bilgisi yer alır. |
| 56 | `IBANNO` | varchar(30) | evet |  | Iban no bilgisi yer alır. |
| 57 | `YEDEK11` | TDBDATETIME | evet |  |  |
| 58 | `ACIKLAMA1` | varchar(50) | evet |  | Açıklama 1 bilgisi yer alır. |
| 59 | `ACIKLAMA2` | varchar(50) | evet |  | Açıklama 2 bligisi yer alır. |
| 60 | `ACIKLAMA3` | varchar(50) | evet |  | Açıklama 3 bilgisi yer alır. |
| 61 | `TAHSILODENENTUT` | TDBFLOAT | evet |  | Ödenen tutar bilgisi yer alır. |
| 62 | `ASILBORCLUTCKIMLIKNO` | varchar(15) | evet |  | Asıl borçlu tc kimlik numarası bilgisi yer alır. |
| 63 | `ASILBORCLUVERGI_NUMARASI` | varchar(15) | evet |  | Asıl borçlu vergi numarası bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBSEN_IND_1` | `SUBE_KODU, SC_NO` | Nonclustered, unique |
| `TBLBSEN_IND_4` | `SC_VERILENK, VADETRH` | Nonclustered |
| `TBLBSEN_IND_6` | `SC_VERB_NO` | Nonclustered |
| `TBLBSEN_IND_7` | `YERI, VADETRH` | Nonclustered |
| `TBLBSEN_IND_ONUM` | `ONAYNUM` | Nonclustered |
| `TBLBSEN_IND_OTIP` | `ONAYTIPI` | Nonclustered |
| `TBLBSEN_IND_VONUM` | `VONAYNUM` | Nonclustered |
| `TBLBSEN_IND_VOTIP` | `VONAYTIPI` | Nonclustered |
| `TBLBSEN_PKEY` | `SC_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SC_NO, SC_GIRTRH, VADETRH, SC_CIKTRH, SC_ODETRH
FROM dbo.TBLBSEN WITH (NOLOCK);
```
