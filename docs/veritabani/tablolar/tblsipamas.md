---
title: TBLSIPAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsipamas/
---

# TBLSIPAMAS

> SİPARİŞ SABİT BİLGİLENİRİN TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 93

## İlgili sayfalar

- [Belge dönüşümleri (NetOpenX COM)](/netopenx/belge-donusumleri/)
- [ItemSlips (REST)](/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FTIRSIP` | char(1) | hayır |  | Müşteri siparişi giriliyorsa '6'+satıcı siparişi giriliyorsa '7' değerini gösterir. |
| 3 | `FATIRS_NO` | TDBBELGENO | hayır |  | Belge numarasını gösterir. |
| 4 | `CARI_KODU` | TDBCARIKOD | hayır |  | Belgede girilen cari kodu gösterir. |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Belge tarihini gösterir. |
| 6 | `TIPI` | TDBBYTE | evet |  | Belge tipi yurt içi ise '2'+yurtdışı ise '6' değerini gösterir. Sipariş kapatılmışsa '1' değerini gösterir. '3' ise onaylanmamış sipariş olduğunu ifade eder. |
| 7 | `BRUTTUTAR` | TDBFLOAT | evet |  | Stok miktarı ile birim fiyatı çarparak hesapladığı değeri gösterir. |
| 8 | `SAT_ISKT` | TDBFLOAT | evet |  | Satır bazında uygulanacak olan iskontonun % olarak girilen değeri gösterir. |
| 9 | `MFAZ_ISKT` | TDBFLOAT | evet |  | Mal fazlası iskontosunun % olarak girilen değeri gösterir. |
| 10 | `GEN_ISK1T` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto1 tutarını gösterir. |
| 11 | `GEN_ISK2T` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto2 tutarını gösterir. |
| 12 | `GEN_ISK3T` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto3 tutarını gösterir. |
| 13 | `GEN_ISK1O` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto1 oranını gösterir. |
| 14 | `GEN_ISK2O` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto2 oranını gösterir. |
| 15 | `GEN_ISK3O` | TDBFLOAT | evet |  | Fatura kayıtları sırasında fatura toplamına uygulanmak istenen genel iskonto3 oranını gösterir. |
| 16 | `KDV` | TDBFLOAT | evet |  | Stok sabit kayıtlarında yazılı kdv oranına göre hesaplanan kdv tutarını gösterir. |
| 17 | `FAT_ALTM1` | TDBFLOAT | evet |  | Satış/alış fat parametrelerinde ek maliyet sekmesindeki ek maliyet1/2 parametreleri işaretli olduğunda ambalaj+nakliye gibi fatura tutarına ilave olan değerlerin girilmesi istendiğinde kullanılır. |
| 18 | `FAT_ALTM2` | TDBFLOAT | evet |  | Satış/alış fat parametrelerinde ek maliyet sekmesindeki ek maliyet1/2 parametreleri işaretli olduğunda ambalaj+nakliye gibi fatura tutarına ilave olan değerlerin girilmesi istendiğinde kullanılır. |
| 19 | `ACIKLAMA` | varchar(20) | evet |  | Özel kod ve açıklama sekmesinde ilgili belgeye ait özel açıklamalar girilmişse gösterir. |
| 20 | `KOD1` | char(1) | evet |  | Satış/alış fatura parametrelerinde özel kod sekmesinde özel kod1/2 işaretlendiğinde+belgeleri belli gruplar altında toplayabilmek için girilen kod değerini gösterir. |
| 21 | `KOD2` | char(1) | evet |  | Satış/alış fatura parametrelerinde özel kod sekmesinde özel kod1/2 işaretlendiğinde+raporlama amaçlı tanımlanan kod değerlerini gösterir. |
| 22 | `ODEMEGUNU` | TDBSMALLINT | evet |  | Girilen belgede toplamlar sekmesinde vade günü sahasına girilen gün değerini gösterir. |
| 23 | `ODEMETARIHI` | TDBDATETIME | evet |  | Belge tarihine vade günü eklendikten sonra toplamlar sekmesinde vade tarihi alanındaki değeri gösterir. |
| 24 | `KDV_DAHILMI` | char(1) | evet |  | Girilen belgede kdv dahil ise 'E'+değil ise 'H' değerini gösterir. |
| 25 | `FATKALEM_ADEDI` | TDBSMALLINT | evet |  | Belgede girilen stok kalem adedini gösterir. |
| 26 | `SIPARIS_TEST` | TDBDATETIME | evet |  | Sipariş bağlantılı kesilen faturalarda sipariş tarihini gösterir. Girilen siparişin tarihini gösterir. |
| 27 | `TOPLAM_MIK` | decimal(15,5) | evet |  | Stok kartında girilen birim ağırlık ile toplam miktarının çarpımını gösterir. |
| 28 | `TOPDEPO` | TDBBYTE | evet |  | Toplu depo kodu kullanılıyorsa+ilgili depoya ait kodu gösterir. |
| 29 | `YEDEK22` | varchar(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `CARI_KOD2` | TDBCARIKOD | evet |  | Farklı teslim yeri varsa+teslimin gerçekleşeceği cari kodunu gösterir. |
| 31 | `YEDEK` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `UPDATE_KODU` | char(1) | evet |  | Tamamlanmamış müşteri/satıcı siparişler için 'Y' değerini atar. Sipariş tamamlanınca 'NULL' değerini atar. |
| 33 | `SIRANO` | TDBINTEGER | hayır |  | Siparişte girilen stok kalemlerinin sırasını gösterir. |
| 34 | `KDV_DAHIL_BRUT_TOP` | TDBFLOAT | evet |  | Default 0 değeri atılır. Hiçbir kayıt tutmamaktadır. |
| 35 | `KDV_TENZIL` | TDBFLOAT | evet |  | Ezca deposu faturasında kdv tenzili gösterir. |
| 36 | `MALFAZLASIKDVSI` | TDBFLOAT | evet |  | Ezca deposu faturasında mal fazlası kdvsini gösterir. |
| 37 | `GENELTOPLAM` | TDBFLOAT | evet |  | Siparişin kdv dahil brüt toplamını gösterir. |
| 38 | `YUVARLAMA` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `SATIS_KOND` | varchar(4) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `PLA_KODU` | varchar(8) | evet |  | Plasiyer uygulaması açık ise plasiyer kodunu gösterir. |
| 41 | `DOVIZTIP` | TDBBYTE | evet |  | Girilen döviz tipini gösterir. |
| 42 | `DOVIZTUT` | TDBFLOAT | evet |  | Girilen döviz tipine göre döviz tutarını gösterir. |
| 43 | `KS_KODU` | varchar(8) | evet |  | Belgenin toplamlar sekmesindeki kasa kodunu gösterir. Program tara |
| 44 | `BAG_TUTAR` | TDBFLOAT | evet |  | Siparişte seçilen cari bağlantı kodunun tutulduğu alandır. |
| 45 | `YEDEK2` | varchar(7) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `HIZMET_FAT` | char(1) | evet |  | Hizmet Faturası olup olmadığını (E/H) gösterir. |
| 47 | `VADEBAZT` | TDBDATETIME | evet |  | Vade baz tarihini gösterir. |
| 48 | `KAPATILMIS` | char(1) | evet |  | Sipariş açık ise 'S', kapatılmış ise 'K' değerini atar |
| 49 | `S_YEDEK1` | TDBBELGENO | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `C_YEDEK6` | char(1) | evet |  | Girilen sipariş tipi yurt içi ise 'X'+yurt dışı ise 'E' değerini gösterir. |
| 55 | `B_YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `I_YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `L_YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `AMBAR_KBLNO` | varchar(15) | evet |  | Satış/satın alma talep/teklif siparişleştiğinde talep ya da teklif numarasını gösterir. |
| 59 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 60 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 61 | `KOSULKODU` | varchar(8) | evet |  | Belgede koşul bilgileri sekmesinde girilen koşul kodunu gösterir. |
| 62 | `FIYATTARIHI` | TDBDATETIME | evet |  | Belgedeki koşul bilgileri sekmesinde girilen fiyat tarihini gösterir. |
| 63 | `KOSULTARIHI` | TDBDATETIME | evet |  | Belgedeki koşul bilgileri sekmesinde girilen koşul tarihini gösterir. |
| 64 | `GENISK1TIP` | TDBSMALLINT | evet |  | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 65 | `GENISK2TIP` | TDBSMALLINT | evet |  | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 66 | `GENISK3TIP` | TDBSMALLINT | evet |  | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 67 | `EXPORTTYPE` | TDBBYTE | evet |  | Siapriş ekranının üst bilgiler sekmesinde ihr/ith tipini gösterir. |
| 68 | `EXGUMRUKNO` | varchar(10) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 69 | `EXGUMTARIH` | TDBDATETIME | evet |  | Sipariş kayıtları girildikçe program tarafından değerler atılır. |
| 70 | `EXFIILITARIH` | TDBDATETIME | evet |  | Sipariş kayıtları girildikçe program tarafından değerler atılır. |
| 71 | `EXPORTREFNO` | varchar(10) | evet |  | Sipariş ekranının üst bilgiler sekmesinde tip olarak yurt dışı seçildiğinde girilmesi gereken export ref numarasını gösterir. |
| 72 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 73 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 74 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 75 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 76 | `GELSUBE_KODU` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 77 | `GITSUBE_KODU` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 78 | `ONAYTIPI` | char(1) | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 79 | `ONAYNUM` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 80 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ODEKOD` | TDBGRUPKOD | evet |  | Belgedeki koşul bilgileri sekmesindeki ödeme kodunu gösterir. |
| 82 | `BRMALIYET` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 83 | `KOSVADEGUNU` | TDBSMALLINT | evet |  | Belgedeki koşul bilgileri sekmesinde vade gününü gösterir. |
| 84 | `YAPKOD` | varchar(15) | evet |  | Esnek yapılandırma uygulaması açıksa+girilen belgede esnek yap kodunu gösterir. |
| 85 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Bir şey için kullanılmaz. Tablonun TblFatuirs ile aynı olması için bulunuyor. |
| 86 | `EBELGE` | TDBINTEGER | evet |  | Ebelge numarası yer alır. |
| 87 | `EXTERNALAPPID` | VarChar(50) | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. Dövizli maliyet için eklendi. |
| 88 | `EXTERNALREFID` | VarChar(50) | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. Dövizli maliyet için eklendi. |
| 89 | `HALFAT` | TDBINTEGER | evet |  | null |
| 90 | `FAT_ALTM3` | TDBFLOAT | evet |  | null |
| 91 | `DOVBAZTAR` | TDBDATETIME | evet |  | Döviz baz tarihinin veritabanında saklanması desteklenmiştir. |
| 92 | `OTVTEVTUTAR` | TDBFLOAT | evet |  | ÖTV tevkifat tutar bilgisi yer alır. |
| 93 | `TOPGIRDEPO` | TDBSMALLINT | evet |  | Toplu giriş depo bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSMSMAS_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FTIRSIP, FATIRS_NO, CARI_KODU, TARIH, TIPI
FROM dbo.TBLSIPAMAS WITH (NOLOCK);
```
