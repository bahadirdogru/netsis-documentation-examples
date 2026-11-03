---
title: TBLSTHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsthar/
---

# TBLSTHAR

> STOK HAREKET BİLGİLERİNİ TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 87
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## İlgili sayfalar

- [Fatura ve irsaliye (NetOpenX COM)](/netopenx/fatura-ve-irsaliye/)
- [Temel tablolar](/veritabani/temel-tablolar/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 2 | `FISNO` | TDBBELGENO | evet |  | Stok hareket kayıtlarının fis numaralarını gösterir. |
| 3 | `STHAR_GCMIK` | TDBFLOAT | evet | `0` | Stok hareketlerinin giriş/çıkış miktarını gösterir. |
| 4 | `STHAR_GCMIK2` | TDBFLOAT | evet | `0` | Stok hareketlerinin ikinic giriş/çıkış miktarını gösterir. |
| 5 | `CEVRIM` | decimal(28,14) | evet | `0` | Farklı çevrim değerinin stok hareketi bazında tutulduğu sahadır. |
| 6 | `STHAR_GCKOD` | char(1) | hayır |  | Stok hareketlerinin giriş/çıkış hareketi olup olmadığını gösterir.Giriş hareketi ise 'G', çıkış hareketi ise 'C' değerini gösterir. |
| 7 | `STHAR_TARIH` | TDBDATETIME | hayır |  | Stok hareketlerinin kayıt tarihini gösterir. |
| 8 | `STHAR_NF` | TDBFLOAT | evet | `0` | Stok hareketlerinin net fiyatını gösterir. |
| 9 | `STHAR_BF` | TDBFLOAT | evet | `0` | Stok hareketlerinin brüt fiyatını gösterir. |
| 10 | `STHAR_IAF` | TDBFLOAT | evet | `0` | Stok hareketlerinin iade fiyatını gösterir. |
| 11 | `STHAR_KDV` | TDBKDVORAN | evet | `0` | Stok hareket kayıtlarının kdv oranını gösterir. |
| 12 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Stok hareketinin ilgili olduğu depo kodunu gösterir. |
| 13 | `STHAR_ACIKLAMA` | varchar(35) | evet |  | Stok hareketinin ilgili olduğu cari kodu gösterir. |
| 14 | `STHAR_SATISK` | TDBFLOAT | evet | `0` | İlgili belgedeki stok kalemine ait satır iskontosunu gösterir.Yüzde girilmiş ise girdiğimiz sayıyı 10000 e bölerek bu alanda gösteriyoruz tutar girilmiş ise aynı değerle bu alanda tutuyoruz. |
| 15 | `STHAR_MALFISK` | TDBFLOAT | evet | `0` | İlgili belgedeki stok kalemine ait mal fazlası iskontosunu gösterir. |
| 16 | `STHAR_FTIRSIP` | char(1) | evet |  | Tblfatuirs ftirsip sahası ile aynı bilgiyi tutar |
| 17 | `STHAR_SATISK2` | TDBFLOAT | evet | `0` | Belge içindeki ilgili stok kalemi için yapılan 2. satır iskontosunu gösterir. |
| 18 | `LISTE_FIAT` | TDBBYTE | evet | `0` | Stoğun hangi liste fiyatına göre girildiğini gösterir. |
| 19 | `STHAR_HTUR` | char(1) | hayır |  | Stok hareketlerinin türünü gösterir. Devir hareketi girilmiş ise 'A', fatura tipli hareket ie 'J', irsaliye tipli hareket ise 'H', depolararası transfer ise 'B' , Faturalaşmış irsaliye ise 'N' değerini gösterir. 'L' değeri ise saıştan ve alıştan iadeleri gösterir.C-üretim,D-muhtelif, E-maliyet,F-Konsinye,G-müstahsil,I-kapalı fatura,K-Muht.Müş.Fatura,M-zayi iade. |
| 20 | `STHAR_DOVTIP` | TDBBYTE | evet | `0` | Stok hareketine ait döviz tipini gösterir. |
| 21 | `PROMASYON_KODU` | TDBBYTE | evet | `0` | Satır bazındaki promosyon kodunu gösterir. |
| 22 | `STHAR_DOVFIAT` | decimal(28,15) | evet | `0` | Stok hareketine ait döviz tutarını gösterir. |
| 23 | `STHAR_ODEGUN` | TDBSMALLINT | evet |  | Stok hareketine ait ödeme gününü gösterir. |
| 24 | `STRA_SATISK3` | TDBFLOAT | evet | `0` | Belge içindeki ilgili stok kalemi için yapılan 3. satır iskontosunu gösterir. |
| 25 | `STRA_SATISK4` | TDBFLOAT | evet | `0` | Belge içindeki ilgili stok kalemi için yapılan 4. satır iskontosunu gösterir. |
| 26 | `STRA_SATISK5` | TDBFLOAT | evet | `0` | Belge içindeki ilgili stok kalemi için yapılan 5. satır iskontosunu gösterir. |
| 27 | `STRA_SATISK6` | TDBFLOAT | evet | `0` | Belge içindeki ilgili stok kalemi için yapılan 6. satır iskontosunu gösterir. |
| 28 | `STHAR_BGTIP` | char(1) | evet |  | İlgili kaydın faturadan mı yoksa irsaliyeden mi geldiğini belirleyen sahadır.Fatura için F,irsaliye için I değerini alır. U ve V harfleri için her 2 harf için de üretim yapıldıgında atılmaktadır. U harfi stoklara giriş oldugunda sthar_gckod G iken, V harfi için stoklardan çıkış oldugunda sthar_gckod C oldugunda atılır. |
| 29 | `STHAR_KOD1` | char(1) | evet |  | İlgili stok harektinde varsa özel kod-1' i gösterir. |
| 30 | `STHAR_KOD2` | char(1) | evet |  | İlgili stok harektinde varsa özel kod-2' yi gösterir. |
| 31 | `STHAR_SIPNUM` | TDBBELGENO | evet |  | Stok hareketlerinin sipariş bağlantısı varsa sipariş numarasını gösterir. Sipariş bağlantısı yoksa NULL değerini gösterir. |
| 32 | `STHAR_CARIKOD` | TDBCARIKOD | evet |  | Stok hareketi ile ilgili teslim cari kodunu gösterir. |
| 33 | `STHAR_SIP_TURU` | char(1) | evet |  | Sipariş bağlantılı faturalarda siparişin tütünü gösterir.(Ambar giriş çıkıştan m ise masraf merkezi s ise stok kodu gibi anlama gelir) |
| 34 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `EKALAN_NEDEN` | char(1) | evet |  | Fatura belgesşnde girilen fatura bilgisinı tutar |
| 36 | `EKALAN` | varchar(35) | evet |  | Ekalan2 yi tutar |
| 37 | `EKALAN1` | varchar(35) | evet |  | Ekalan bilgisini tutar |
| 38 | `REDMIK` | TDBFLOAT | evet | `0` | ÖTV bilgisi yer alır. |
| 39 | `REDNEDEN` | TDBBYTE | evet | `0` | Red nedenini tutar |
| 40 | `SIRA` | TDBSMALLINT | evet | `0` | Sıra bilgisini tutar |
| 41 | `STRA_SIPKONT` | TDBSMALLINT | evet | `0` | Siparişin içindeki sıra numarasını gösterir. |
| 42 | `AMBAR_KABULNO` | TDBBELGENO | evet |  | Satış/satın alma talep/teklif siparişleştiğinde talep ya da teklif numarasını gösterir. |
| 43 | `FIRMA_DOVTIP` | TDBBYTE | evet | `0` | Firma döviz tipini gösterir. |
| 44 | `FIRMA_DOVTUT` | TDBFLOAT | evet | `0` | Stok çevrim için kullanılır. |
| 45 | `FIRMA_DOVMAL` | TDBFLOAT | evet | `0` | Firma döviz maliyet bilgisini gösterir. |
| 46 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `IRSALIYE_NO` | TDBBELGENO | evet |  | Stok hareketinin bağlı olduğu irsaliye numarasını gösterir. |
| 48 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | Stok hareketinin bağlı olduğu irsaliye tarihini gösterir. |
| 49 | `KOSULKODU` | varchar(8) | evet |  | Stok harekeri ile ilgili koşul kodunu gösterir. |
| 50 | `ECZA_FAT_TIP` | TDBBYTE | evet | `0` |  |
| 51 | `STHAR_TESTAR` | TDBDATETIME | evet |  | İlgili stok hareketinin tesim tarihini gösterir. |
| 52 | `OLCUBR` | TDBBYTE | evet | `0` | Ölçü birimini gösterir. |
| 53 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 54 | `VADE_TARIHI` | TDBDATETIME | evet |  | İlgili stok hareketinin vade tarihini gösterir. |
| 55 | `LISTE_NO` | varchar(8) | evet |  | Stoklara ait fiyat listelerindeki kaçıncı fiyata göre işlem yapılsdığını gösterir. |
| 56 | `BAGLANTI_NO` | TDBINTEGER | evet | `0` | Stok hareketine bağlı varsa bağlantı numarasını gösterir. |
| 57 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 58 | `MUH_KODU` | TDBMUHKOD | evet |  | Satış-alış faturalarında fason uygulamasında kalemler sekmesinde çıkan ek bilgi girişi ekranında çıkan grup kodunu gösterir. |
| 59 | `S_YEDEK1` | TDBREFKOD | evet |  | Referans numarasını gösterir. Muhasebe referans kodu alanını tutar. |
| 60 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `F_YEDEK3` | TDBFLOAT | evet |  | İrsaliye faturalaştığında sthar_gcmik alanındaki değeri bu alana atar. Sthar_gcmik alanı boşalır. |
| 62 | `F_YEDEK4` | TDBFLOAT | evet |  | Puan değeri, ithalat tipli belgelerde de kapatma sonrasında mal bedelinin tl karşılığı yine bu alanda tutuluyor |
| 63 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Devir'le gelen kayıtlarda değer atılır, ayrıca hareket kontrol için sayaç olarak kullanılmaktadır |
| 64 | `C_YEDEK6` | char(1) | evet |  | I - İTHALAT İHRACAT D- DEPO TRANSFERİ X-ÜRETİM M-MALİYET ambar g/c = X,D:lokal depo,kesinleşmiş-planlanan bilgisi de tutuluyor |
| 65 | `B_YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 66 | `I_YEDEK8` | TDBSMALLINT | evet |  | Kullanıcı numarasına karşılık geliyor (satınalma talep'te örneğin üst bilgilerde sorduğumuz kullanıcı seçimi) |
| 67 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Karma kolı olan stokta -1 yazar, karma koliye ait bileşenlere ise karma koliye ait inckeyno'yu atar. Karma koli ile bağlantısı yoksa 0 olur |
| 68 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha.Fiili tarih bilgisi |
| 69 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 70 | `FIYATTARIHI` | TDBDATETIME | evet |  | İlgili stoğun fiyat tarihini gösterir. |
| 71 | `KOSULTARIHI` | TDBDATETIME | evet |  | Stok hareketiyle ilgili koşul tarihini gösterir. |
| 72 | `SATISK1TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.1 Tip alanına girileni gösterir. |
| 73 | `SATISK2TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.2 Tip alanına girileni gösterir. |
| 74 | `SATISK3TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.3 Tip alanına girileni gösterir. |
| 75 | `SATISK4TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.4 Tip alanına girileni gösterir. |
| 76 | `SATISK5TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.5 Tip alanına girileni gösterir. |
| 77 | `SATISK6TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. İlgili belge içinde İsk.6 Tip alanına girileni gösterir. |
| 78 | `EXPORTTYPE` | TDBBYTE | evet | `0` | Export tipinin tutulduğu sahadır |
| 79 | `EXPORTMIK` | TDBFLOAT | evet | `0` | Export miktarının tutulduğu sahadır |
| 80 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 82 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 83 | `KKMALF` | TDBFLOAT | evet | `0` | Kalite kontrol mal fazlasını tutar |
| 84 | `STRA_IRSKONT` | TDBSMALLINT | evet | `0` | İshalyedeki sıra numarasını tutar |
| 85 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |
| 86 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | İlgili stok mamül ise mamülün yapılandırma kodu varsa onu gösterir. |
| 87 | `OTVFIYAT` | TDBFLOAT | evet |  | 0 |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTHAR_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSTHAR_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTHAR_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSTHAR_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLSTHARMAMYAPKODFKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLSTHARYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTHAR_IDX_YAPKOD1` | `YAPKOD+STOK_KODU+FISNO` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_1` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_2` | `SUBE_KODU+STOK_KODU+STHAR_TARIH+INCKEYNO` | Clustered |
| `TBLSTHAR_IND_3` | `STHAR_GCKOD+STHAR_BGTIP+FISNO+STHAR_ACIKLAMA` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_4` | `STHAR_TARIH` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_5` | `STHAR_SIPNUM+STHAR_GCKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_6` | `SUBE_KODU+DEPO_KODU+STOK_KODU+STHAR_TARIH` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_7` | `STHAR_TESTAR+STHAR_GCKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_8` | `SUBE_KODU+STHAR_FTIRSIP+FISNO+STHAR_ACIKLAMA+SIRA` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_9` | `STOK_KODU+STHAR_TARIH+INCKEYNO` | Unique, Non-clustered |
| `TBLSTHAR_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLSTHAR_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLSTHAR_PKEY` | `INCKEYNO` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, FISNO, STHAR_GCMIK, STHAR_GCMIK2, CEVRIM, STHAR_GCKOD
FROM dbo.TBLSTHAR WITH (NOLOCK);
```
