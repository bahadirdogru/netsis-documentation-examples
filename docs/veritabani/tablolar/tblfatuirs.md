---
title: TBLFATUIRS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuirs/
---

# TBLFATUIRS

> FATURA İRSALİYE BİLGİLERİ TABLOSUDUR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 93

## İlgili sayfalar

- [Fatura ve irsaliye (NetOpenX COM)](/netopenx/fatura-ve-irsaliye/)
- [ItemSlips (REST)](/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips)
- [Temel tablolar](/veritabani/temel-tablolar/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FTIRSIP` | char(1) | evet |  | Bu bölüm faturanın tipini ne olduğu konusunda bilgi verir.Satış Faturası 1,Alış Faturası 2,Satış İrsaliyesi 3,Alış İrsaliyesi 4,Müşteri Siparişi 6,Satıcı Siparişi 7,D.A.T lokal depo ve ambar çıkış fişi ve şubeler arası D.A.T için D.A.T çıkış hareketi 8 , Ambar giriş fişi ve şubeler arası D.A.T için D.A.T giriş hareketi 9,Saklanmış İrsaliye(Faturalanmış irsaliye) satış ise A, alış ise B değerini alır.Parçalı irsaliye satış ise E, alış ise F değerini alır. İki irsaliye birleştirilip tek bir proformaya bağlanır ise irsaliyelere ait kayıtlar Z tipinde tutulmaktadır. |
| 3 | `FATIRS_NO` | TDBBELGENO | evet |  | Belge numarısıdır |
| 4 | `CARI_KODU` | TDBCARIKOD | evet |  | Cari kod bilgisi bu sahada tutulur |
| 5 | `TARIH` | TDBDATETIME | evet |  | Fatura tarihidir |
| 6 | `TIPI` | TDBBYTE | evet | `0` | Kapalı fatura 1,açık fatura 2,muhtelif fatura 3,iade fatura 4,zayi iade 5 ve ithalat/ihracat faturası için 6 değeri alır. |
| 7 | `BRUTTUTAR` | TDBFLOAT | evet | `0` | Stok miktarı ile birim fiyat çarpımının brüt tutar olarak yazıldığı bölümdür. |
| 8 | `SAT_ISKT` | TDBFLOAT | evet | `0` | Satır iskontosu tutarıdır. |
| 9 | `MFAZ_ISKT` | TDBFLOAT | evet | `0` | Mal fazlası iskonto bilgisi bu sahada tutulur |
| 10 | `GEN_ISK1T` | TDBFLOAT | evet | `0` | Genel iskonto 1 tutarıdır. |
| 11 | `GEN_ISK2T` | TDBFLOAT | evet | `0` | Genel iskonto 2 tutarıdır. |
| 12 | `GEN_ISK3T` | TDBFLOAT | evet | `0` | Genel iskonto 3 tutarıdır. |
| 13 | `GEN_ISK1O` | TDBFLOAT | evet | `0` | Genel iskonto 1 oranıdır. |
| 14 | `GEN_ISK2O` | TDBFLOAT | evet | `0` | Genel iskonto 2 oranıdır. |
| 15 | `GEN_ISK3O` | TDBFLOAT | evet | `0` | Genel iskonto 3 oranıdır. |
| 16 | `KDV` | TDBFLOAT | evet | `0` | Kdv tutarı bu sahada tutulur. |
| 17 | `FAT_ALTM1` | TDBFLOAT | evet | `0` | Fatura alt maliyet 1 tutarı |
| 18 | `FAT_ALTM2` | TDBFLOAT | evet | `0` | Fatura alt maliyet 2 tutarı |
| 19 | `ACIKLAMA` | varchar(20) | evet |  | Fatura açıklama bilgisi |
| 20 | `KOD1` | char(1) | evet |  | Özel kod1 değeri |
| 21 | `KOD2` | char(1) | evet |  | Özel kod2 değeri |
| 22 | `ODEMEGUNU` | TDBSMALLINT | evet | `0` | Vade günü |
| 23 | `ODEMETARIHI` | TDBDATETIME | evet |  | Vade tarihi |
| 24 | `KDV_DAHILMI` | char(1) | evet |  | “KDV Dahil/ Hariç Sorusu Her Faturada Sorulsun” parametresinin işaretlenmesine bağlı olarak E/H kaydı atılır |
| 25 | `FATKALEM_ADEDI` | TDBSMALLINT | evet | `0` | Faturada ki kalem sayısıdır. |
| 26 | `SIPARIS_TEST` | TDBDATETIME | evet |  | Sipariş teslim tarihidir. Teslim tarihi burada tutuluyor. Entegrasyon tarhi bilgisi yer alır. |
| 27 | `TOPLAM_MIK` | decimal(15,5) | evet | `0` | Stok kartlarında ki birim ağırlık çarpı girilen miktarlar toplamıdır. |
| 28 | `TOPDEPO` | TDBSMALLINT | evet | `0` | Toplu depo kullanılıyor ise ilgili faturaya ait depo kodudur. |
| 29 | `YEDEK22` | varchar(2) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 30 | `CARI_KOD2` | TDBCARIKOD | evet |  | Farki teslim uygulaması kullanılıyor ise bağlantılı cari kodunun tutulduğu sahadır. |
| 31 | `YEDEK` | char(1) | evet |  | Ambar giriş/çıkış fişleri için X ; lokal depolar arası transfer kayıtları için D ; şubeler arası depolar arası transfer kayıtları için ise '' (boş) değerini alır. |
| 32 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `SIRANO` | TDBINTEGER | evet | `0` | Faturada girilen stokların kalem sıra bilgisinin tutulduğu sahadır. |
| 34 | `KDV_DAHIL_BRUT_TOP` | TDBFLOAT | evet | `0` | Kdv dahil brüt fatura toplamı |
| 35 | `KDV_TENZIL` | TDBFLOAT | evet | `0` | Eczacı uygulamasında ki KDV tenzil tutarıdır. |
| 36 | `MALFAZLASIKDVSI` | TDBFLOAT | evet | `0` | Eczacı uygumasında mal fazlası KDV'sinin tutulduğu sahadır. |
| 37 | `GENELTOPLAM` | TDBFLOAT | evet | `0` | Faturanın genel toplamının tutulduğu sahadır. |
| 38 | `YUVARLAMA` | TDBFLOAT | evet | `0` | Faturada ki yuvarlama tutarı bu sahada tutulur. |
| 39 | `SATIS_KOND` | varchar(4) | evet |  | Şu anda kullanılmıyor. |
| 40 | `PLA_KODU` | TDBPLASIYER | evet |  | Plasiyer kodu bilgisi bu sahada tutulmaktadır. |
| 41 | `DOVIZTIP` | TDBBYTE | evet | `0` | Faturanın döviz tipi |
| 42 | `DOVIZTUT` | TDBFLOAT | evet | `0` | Faturanın döviz tutarı |
| 43 | `KS_KODU` | varchar(8) | evet |  | Kapakı faturada kullanılan kasa kodu bu sahada tutulur. |
| 44 | `BAG_TUTAR` | TDBFLOAT | evet | `0` | Bağlantı kayıtlarında faturada yapılan toplam bağlantı tutarıdır. |
| 45 | `YEDEK2` | varchar(7) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 46 | `HIZMET_FAT` | char(1) | evet |  | Hizmet Faturası olup olmadığı(E/H) |
| 47 | `VADEBAZT` | TDBDATETIME | evet |  | Faturada girilen vade baz tarihi |
| 48 | `KAPATILMIS` | char(1) | evet |  | İrsaliyeden faturalaştırılan faturalar için S kodlanır |
| 49 | `S_YEDEK1` | TDBBELGENO | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır. Faturalaşmış irsaliye var ise fatura numarası burada tutuluyor |
| 50 | `S_YEDEK2` | varchar(8) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 51 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 52 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır. Masraf merkezi kodu burada tutulur.Değişsin parametresi tutulur.0-döviz fiyat,1-kur,2-fiyat |
| 53 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır. Faturalaşmış irsaliye var ise fatura numarası burada tutuluyor |
| 54 | `C_YEDEK6` | char(1) | evet |  | D.A.T için B ,ambar giriş/çıkış fişlerinde ise çıkış yeri bilgisi atılır diğer kayıtlar için ise X değeri almaktadır. |
| 55 | `B_YEDEK7` | TDBBYTE | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 56 | `I_YEDEK8` | TDBSMALLINT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 57 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 58 | `AMBAR_KBLNO` | varchar(15) | evet |  | Alış İrsaliyelerinde Ambar Fişno Takibi parametresi açıksa Ambar Fiş No bu alanda tutulur. Bedelsiz ihracat kapatma bilgisi tutulur. |
| 59 | `D_YEDEK10` | TDBDATETIME | evet |  | Fiili tarih bu sahada tutulur. |
| 60 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje takibi söz konusu ise Proje kodu bu sahada saklanır |
| 61 | `KOSULKODU` | varchar(8) | evet |  | Koşul uygulaması varsa koşul kodu bu alanda tutulur |
| 62 | `FIYATTARIHI` | TDBDATETIME | evet |  | Özel Fiyat sistemi açıksa girilen fiyat tarihi |
| 63 | `KOSULTARIHI` | TDBDATETIME | evet |  | Koşul tanımlamasında varsa koşul tarihi |
| 64 | `GENISK1TIP` | TDBSMALLINT | evet | `0` | Kullanıcı tarafından İskonto Tip Kayıtları' nden tanımlanan iskontolar. |
| 65 | `GENISK2TIP` | TDBSMALLINT | evet | `0` | Kullanıcı tarafından İskonto Tip Kayıtları' nden tanımlanan iskontolar. |
| 66 | `GENISK3TIP` | TDBSMALLINT | evet | `0` | Kullanıcı tarafından İskonto Tip Kayıtları' nden tanımlanan iskontolar. |
| 67 | `EXPORTTYPE` | TDBBYTE | evet | `0` | 1 FOB 2 CIF 3 CF 4 FOT 5 IHRAÇ KAYITLI 6 DAF 7 EXW 8 iHR KUR FARKI 9 CIP 10 CPT 11 DAT 12 DAP 13 DDP 14 DES 15 DEQ 16 DDU 17 FCA 18 FAS 19 CFR |
| 68 | `EXGUMRUKNO` | varchar(20) | evet |  | Şu anda kullanılmıyor.GCB numarası bilgisi yer alır. |
| 69 | `EXGUMTARIH` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 atar |
| 70 | `EXFIILITARIH` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 atar |
| 71 | `EXPORTREFNO` | varchar(20) | evet |  | İthalat/İhracat faturalarında kullanıcı tarafından girilen Export Ref.No sahası |
| 72 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 73 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 74 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 75 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 76 | `GELSUBE_KODU` | TDBSMALLINT | evet |  | Şubeler arası transfer işleminde gelen(giriş) şube kodu |
| 77 | `GITSUBE_KODU` | TDBSMALLINT | evet |  | Şubeler arası transfer işleminde giden(çıkış) şube kodu |
| 78 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 79 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 80 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ODEKOD` | TDBGRUPKOD | evet |  | Cari hesaba bölünerek geçsin parametresi kullanılıyorsa ve carinin kartında ödeme kodu tanımlanmış veya fatura/irsaliye girişinde ödeme kodu secilmiş ise ödeme kodu bilgisi bu sahada tutulur. |
| 82 | `BRMALIYET` | TDBFLOAT | evet | `0` | Birim maliyet sahasıdır nakliye uygulamasında kullanılır. |
| 83 | `KOSVADEGUNU` | TDBSMALLINT | evet |  | Koşuldan gelen vade günü bilgisi tutulmaktadır |
| 84 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma Kodu bilgisinin saklandığı alandır |
| 85 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Gib fatura numarası yer alır. |
| 86 | `EXTERNALAPPID` | varchar(50) | evet |  | NetopenX için eklenmiş alandır. |
| 87 | `EXTERNALREFID` | varchar(50) | evet |  | NetopenX için eklenmiş alandır. |
| 88 | `EBELGE` | TDBINTEGER | evet |  | Ebelge numarsaı yer allır. |
| 89 | `HALFAT` | TDBINTEGER | evet |  | Hal faturası tipi yer alır. 0-Hiçbiri,1-Komisyoncu,2-Satış |
| 90 | `FAT_ALTM3` | TDBFLOAT | evet |  | Ek maliyet 3 e girilen tutar yer alır. |
| 91 | `DOVBAZTAR` | TDBDATETIME | evet |  | Döviz baz tarihinin veritabanında saklanması desteklenmiştir. |
| 92 | `OTVTEVTUTAR` | TDBFLOAT | evet |  | ÖTV tevkifat tutarı bilgisi yer alır. |
| 93 | `TOPGIRDEPO` | TDBSMALLINT | evet |  | Toplu giriş depo bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUIRS_IND_1` | `FTIRSIP, FATIRS_NO, CARI_KODU` | Unique |
| `TBLFATUIRS_IND_2` | `FTIRSIP, CARI_KODU` | Duplicate |
| `TBLFATUIRS_IND_3` | `TARIH, FTIRSIP` | Duplicate |
| `TBLFATUIRS_IND_4` | `FTIRSIP, SIRANO` | Duplicate |
| `TBLFATUIRS_IND_5` | `FTIRSIP, UPDATE_KODU` | Duplicate |
| `TBLFATUIRS_IND_6` | `SUBE_KODU, FTIRSIP` | Duplicate |
| `TBLFATUIRS_IND_7` | `S_YEDEK1` | Duplicate |
| `TBLFATUIRS_IND_8` | `ISLETME_KODU, SUBE_KODU` | Duplicate |
| `TBLFATUIRS_IND_ONUM` | `ONAYNUM` | Duplicate |
| `TBLFATUIRS_IND_OTIP` | `ONAYTIPI` | Duplicate |
| `TBLFATUIRSPKEY` | `FTIRSIP, FATIRS_NO, CARI_KODU` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FTIRSIP, FATIRS_NO, CARI_KODU, TARIH, TIPI
FROM dbo.TBLFATUIRS WITH (NOLOCK);
```
