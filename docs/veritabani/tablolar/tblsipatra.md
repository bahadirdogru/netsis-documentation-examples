---
title: TBLSIPATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsipatra/
---

# TBLSIPATRA

> SİPARİŞ HAREKET KAYITLARINI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 85
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## İlgili sayfalar

- [Belge dönüşümleri (NetOpenX COM)](/netopenx/belge-donusumleri/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 2 | `FISNO` | TDBBELGENO | hayır |  | Tblsipamas tablosundaki fatirs_no yu (belge numarasını) gösterir. |
| 3 | `STHAR_GCMIK` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış miktarını gösterir. |
| 4 | `STHAR_GCMIK2` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış ikinci miktarını gösterir. |
| 5 | `CEVRIM` | decimal(28,14) | evet | `0` | Stok hareket bazında farklı çevrim değerlerini gösterir. |
| 6 | `STHAR_GCKOD` | char(1) | hayır |  | Stok hareketlerinin giriş/çıkış hareketlerini gösterir. |
| 7 | `STHAR_TARIH` | TDBDATETIME | hayır |  | Stok hareket tarihini gösterir. |
| 8 | `STHAR_NF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın net fiyatını gösterir. |
| 9 | `STHAR_BF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın brüt fiyatını gösterir. |
| 10 | `STHAR_IAF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın iade fiyatını gösterir. |
| 11 | `STHAR_KDV` | TDBKDVORAN | evet | `0` | Stok hareket kaydının kdv oranını gösterir. |
| 12 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Siparişte bulunan stoğun depo kodunu gösterir. |
| 13 | `STHAR_ACIKLAMA` | varchar(35) | evet |  | Fatura/siparişten gelen kayıtlar için cari kodu gösterir. |
| 14 | `STHAR_SATISK` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan satır iskontosunu gösterir. |
| 15 | `STHAR_MALFISK` | decimal(15,5) | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan mal fazlası iskontosunu gösterir. |
| 16 | `STHAR_FTIRSIP` | char(1) | hayır |  | Müşteri siparişi ise '6'+satıcı siparişi ise '7' değerini gösterir. |
| 17 | `STHAR_SATISK2` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 2. satır iskontosunu gösterir. |
| 18 | `LISTE_FIAT` | TDBBYTE | evet | `0` | Alış-satış fatura parametrelerinde fiat birimi sorulsun mu parametresi işaretli olduğunda belgede f. Birim alanı aktif hale gelir. Stok kartı ölçü birimi sekmesindeki fiyat birimi sahasında seçileni gösterir. Belgede kullanıcı isterse bu tanımlamayı elle değiştirebilir. |
| 19 | `STHAR_HTUR` | char(1) | hayır |  | Sipariş içindeki stok kalemlerinin kapalı olup olmadığını gösterir. İlgili sipariş kalemi kapalı ise 'K'+değilse 'H' değerini gösterir. Sipariş üzerinde revizyon yapıldıgında ya da sipariş içindeki miktar değiştirildiğinde 'E' değerini gösterir. |
| 20 | `STHAR_DOVTIP` | TDBBYTE | evet | `0` | Sipariş içindeki stoğun döviz tipini gösterir. |
| 21 | `PROMASYON_KODU` | TDBBYTE | evet | `0` | Satır bazında tanımlanan promosyon kodunu gösterir. |
| 22 | `STHAR_DOVFIAT` | decimal(28,15) | evet | `0` | Sipariş içindeki stoğun döviz tutarını gösterir. |
| 23 | `STHAR_ODEGUN` | TDBSMALLINT | evet | `0` | Müşteri veya satıcı siparişlerinde toplamlar sekmesindeki vade gün alanında girilen gün sayısını gösterir. Vade tarihine tarih girişmişse program otomatik vade gününü hesaplayarak vade gün alanına gün değerinin atar. |
| 24 | `STRA_SATISK3` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 3. satır iskontosunu gösterir. |
| 25 | `STRA_SATISK4` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 4. satır iskontosunu gösterir. |
| 26 | `STRA_SATISK5` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 5. satır iskontosunu gösterir. |
| 27 | `STRA_SATISK6` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 6. satır iskontosunu gösterir. |
| 28 | `STHAR_BGTIP` | char(1) | evet |  | Default 'I' değeri atılır. |
| 29 | `STHAR_KOD1` | char(1) | evet |  | Sipariş içindeki özel kod1 için girilen kodu gösterir. |
| 30 | `STHAR_KOD2` | char(1) | evet |  | Sipariş içindeki özel kod2 için girilen kodu gösterir. Siparişte stoktan ayırma yapıldıysa bu kolonda 'S' ya da 'B' değerini de tutar. |
| 31 | `STHAR_SIPNUM` | TDBBELGENO | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 32 | `STHAR_CARIKOD` | TDBCARIKOD | evet |  | Teslim cari kodunu gösterir. |
| 33 | `STHAR_SIP_TURU` | char(1) | evet |  | Sipatra tablosunda STHAR_HTUR = 'K' ise , sthar tablosunda (sipariş teslim edilmişse) STHAR_SIP_TURU=’K’ ise ve sipamas tablosunda tipi=2 ise kapalı demektir. |
| 34 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `EKALAN_NEDEN` | char(1) | evet |  | Stok ismi ya da ebat bilgisini tutar. |
| 36 | `EKALAN` | varchar(35) | evet |  | Alış-satış fatura parametrelerinde ek alan kullanımı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan1 alanına girilen açıklamayı gösterir. |
| 37 | `EKALAN1` | varchar(35) | evet |  | Alış-satış fatura parametrelerinde ek alan2 kullanılsın mı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan2 alanına girilen açıklamayı gösterir. |
| 38 | `REDMIK` | decimal(15,5) | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 39 | `REDNEDEN` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 40 | `SIRA` | TDBSMALLINT | evet | `0` | Sipariş içine girilen stokların sırasını gösterir. |
| 41 | `STRA_SIPKONT` | TDBSMALLINT | evet | `0` | Sipariş içine girilen stok kontrolünü sağlar. Sira field ında program tarafından atılan sıra numaralarıyla aynı kayıtların tutar. |
| 42 | `AMBAR_KABULNO` | varchar(15) | evet |  | Satış/satın alma talep/teklif siparişleştiğinde talep ya da teklif numarasını gösterir. |
| 43 | `FIRMA_DOVTIP` | TDBBYTE | evet | `0` | Firma döviz tipini gösterir. |
| 44 | `FIRMA_DOVTUT` | TDBFLOAT | evet | `0` | Firma döviz tutarını gösterir. İrsaliyeleşen ya da faturalaşan siparişlerin teslim miktarını gösterir. |
| 45 | `FIRMA_DOVMAL` | TDBFLOAT | evet | `0` | Döviz maliyet firmasını gösterir |
| 46 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `IRSALIYE_NO` | TDBBELGENO | evet |  | İrsaliye tarihini gösterir. |
| 48 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | İrsaliye numarasını gösterir. |
| 49 | `KOSULKODU` | varchar(8) | evet |  | Sipariş için varsa koşul kodunu gösterir. |
| 50 | `ECZA_FAT_TIP` | TDBBYTE | evet | `0` | Ecza deposu sistemindeki fatura tipini gösterir. |
| 51 | `STHAR_TESTAR` | TDBDATETIME | evet |  | Alış-satış fatura parametrelerinde sipairş kaydında her satırda teslim tarihi sorulsun mu parametresi işaretli olduğunda stok kalemi bazında teslim tarihi alanına girilen tarih bilgisini gösterir. |
| 52 | `OLCUBR` | TDBBYTE | evet | `0` | Sipariş içindeki stokların hangi öçü biriminin kullanıldığını gösterir. |
| 53 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 54 | `VADE_TARIHI` | TDBDATETIME | evet |  | Kalemler sekmesindeki stok bazındaki vade tarihini gösterir. |
| 55 | `LISTE_NO` | varchar(8) | evet |  | Özel fiyat listesindeki kaçıncı fiyat olduğunu gösterir. |
| 56 | `BAGLANTI_NO` | TDBINTEGER | evet | `0` | Üst bilgiler sekmesindeki bağlantı numarası alanına girilen numarayı gösterir. Cari>bağlantı-sipariş kayıtları>bağlantı kayıtlarında tanımlanan bağlantı numaraları) |
| 57 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 58 | `MUH_KODU` | TDBMUHKOD | evet |  | Sipariş içindeki stok bazında referans kodunu gösterir. |
| 59 | `S_YEDEK1` | TDBREFKOD | evet |  | Sipariş içindeki stok bazında referans kodunu gösterir. |
| 60 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Siparişin d.a.t ile teslim bilgisini tutar. |
| 62 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 63 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 64 | `C_YEDEK6` | char(1) | evet |  |  |
| 65 | `B_YEDEK7` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 66 | `I_YEDEK8` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 67 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Karma koli stokları için kullanılan bir alan. KARMA KOLİ STOĞU için -1 değeri alır. KARMA KOLİ STOĞUna ait bileşenler için KOLİnin INCKEYNO bilgisini tutar. |
| 68 | `D_YEDEK10` | TDBDATETIME | evet |  | Üst bilgiler sekmesinde İst. Tes tarih alanına girilen tarih bilgisini gösterir. |
| 69 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 70 | `FIYATTARIHI` | TDBDATETIME | evet |  | İlgili siparişe ait fiyat tarihini gösterir. |
| 71 | `KOSULTARIHI` | TDBDATETIME | evet |  | İlgili siparişe ait koşul tarihini gösterir. |
| 72 | `SATISK1TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.1 Tip alanına girileni gösterir. |
| 73 | `SATISK2TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.2 Tip alanına girileni gösterir. |
| 74 | `SATISK3TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.3 Tip alanına girileni gösterir. |
| 75 | `SATISK4TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.4 Tip alanına girileni gösterir. |
| 76 | `SATISK5TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.5 Tip alanına girileni gösterir. |
| 77 | `SATISK6TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için+belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.6 Tip alanına girileni gösterir. |
| 78 | `EXPORTTYPE` | TDBBYTE | evet | `0` | Üst bilgiler sekmesinde tipi yurt dışı seçildiğinde ith/ihr tipi alanında seçileni gösterir. |
| 79 | `EXPORTMIK` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 80 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 82 | `KKMALF` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 83 | `STRA_IRSKONT` | TDBSMALLINT | evet | `0` | Sipariş irsaliyeleştiğinde ya da faturalaştığında+sipariş içinde bulunan stoklara ait sıra numaralarını gösterir. (İrsaliyeleşen ya da faturalaşan sipariş içinde stok kontrolünü sağlar.) |
| 84 | `YAPKOD` | varchar(15) | evet | `0` | Stoğun varsa yapılandırma kodunu gösterir. |
| 85 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | Evrağa girilen mamülün varsa yapılandıema kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSIPATRAPKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSIPATRA_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSIPATRA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSIPATRA_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLSIPATRAMAMYAPKODFKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLSIPATRAYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIPATRA_IDX_YAPKOD1` | `YAPKOD+STOK_KODU+FISNO` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_2` | `STOK_KODU+STHAR_TARIH` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_3` | `STHAR_GCKOD+STHAR_BGTIP+FISNO+STHAR_ACIKLAMA` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_4` | `STHAR_TARIH` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_5` | `STHAR_GCKOD+FISNO+STRA_SIPKONT` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_6` | `SUBE_KODU+DEPO_KODU+STOK_KODU+STHAR_TARIH` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_7` | `STHAR_TESTAR+STHAR_GCKOD+STOK_KODU` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_8` | `INCKEYNO` | Unique,Non-clustered |
| `TBLSIPATRA_IND_9` | `SUBE_KODU+STHAR_FTIRSTIP+FISNO+STHAR_ACIKLAMA+SIRA` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_ONUM` | `ONAYNUM` | Non-unique,Non-clustered |
| `TBLSIPATRA_IND_OTIP` | `ONAYTIPI` | Non-unique,Non-clustered |
| `TBLSIPATRAPKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, FISNO, STHAR_GCMIK, STHAR_GCMIK2, CEVRIM, STHAR_GCKOD
FROM dbo.TBLSIPATRA WITH (NOLOCK);
```
