---
title: TBLTMPDISSIPATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltmpdissipatra/
---

# TBLTMPDISSIPATRA

> İŞLEMLER> DİSPATCHING (DAĞITIM SİSTEMİ) SİPARİŞ YÜKLE BUTONUNA BASILDIKTAN SONRA BU TABLOYA KAYITLAR ATILIR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 62
- **Birincil anahtar:** `INCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 2 | `FISNO` | TDBBELGENO | evet |  | Tblsipamas tablosundaki fatirs_no yu (belge numarasını) gösterir. |
| 3 | `STHAR_GCMIK` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış miktarını gösterir. |
| 4 | `STHAR_GCMIK2` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış ikinci miktarını gösterir. |
| 5 | `CEVRIM` | decimal(28,14) | evet | `0` | Stok hareket bazında farklı çevrim değerlerini gösterir. |
| 6 | `STHAR_GCKOD` | char(1) | evet |  | Stok hareketlerinin giriş/çıkış hareketlerini gösterir. |
| 7 | `STHAR_TARIH` | TDBDATETIME | evet |  | Stok hareket tarihini gösterir. |
| 8 | `STHAR_NF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın net fiyatını gösterir. |
| 9 | `STHAR_BF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın brüt fiyatını gösterir. |
| 10 | `STHAR_IAF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın iade fiyatını gösterir. |
| 11 | `STHAR_KDV` | TDBKDVORAN | evet | `0` | Stok hareket kaydının kdv oranını gösterir. |
| 12 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Siparişte bulunan stoğun depo kodunu gösterir. |
| 13 | `STHAR_ACIKLAMA` | varchar(35) | evet |  | Fatura/siparişten gelen kayıtlar için cari kodu gösterir. |
| 14 | `STHAR_SATISK` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan satır iskontosunu gösterir. |
| 15 | `STHAR_MALFISK` | decimal(15,5) | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan mal fazlası iskontosunu gösterir. |
| 16 | `STHAR_FTIRSIP` | char(1) | evet |  | Müşteri siparişi ise '6', satıcı siparişi ise '7' değerini gösterir. |
| 17 | `STHAR_SATISK2` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 2. satır iskontosunu gösterir. |
| 18 | `STHAR_HTUR` | TDBFLOAT | evet |  | Sipariş içindeki stok kalemlerinin kapalı olup olmadığını gösterir. İlgili sipariş kalemi kapalı ise 'K', değilse 'H' değerini gösterir. |
| 19 | `STHAR_DOVTIP` | TDBFLOAT | evet | `0` | Sipariş içindeki stoğun döviz tipini gösterir. |
| 20 | `PROMASYON_KODU` | TDBFLOAT | evet | `0` | Satır bazında tanımlanan promosyon kodunu gösterir. |
| 21 | `STHAR_DOVFIAT` | TDBFLOAT | evet | `0` | Sipariş içindeki stoğun döviz tutarını gösterir. |
| 22 | `STHAR_ODEGUN` | char(1) | evet | `0` | Müşteri veya satıcı siparişlerinde toplamlar sekmesindeki vade gün alanında girilen gün sayısını gösterir. Vade tarihine tarih girişmişse program otomatik vade gününü hesaplayarak vade gün alanına gün değerinin atar. |
| 23 | `STRA_SATISK3` | TDBBYTE | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 3. satır iskontosunu gösterir. |
| 24 | `STRA_SATISK4` | TDBBYTE | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 4. satır iskontosunu gösterir. |
| 25 | `STRA_SATISK5` | TDBFLOAT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 5. satır iskontosunu gösterir. |
| 26 | `STRA_SATISK6` | TDBSMALLINT | evet | `0` | Sipariş içindeki ilgili stok kalemi için yapılan 6. satır iskontosunu gösterir. |
| 27 | `STHAR_BGTIP` | char(1) | evet |  | Default 'I' değeri atılır. |
| 28 | `STHAR_KOD1` | char(1) | evet |  | Sipariş içindeki özel kod1 için girilen kodu gösterir. |
| 29 | `STHAR_KOD2` | char(1) | evet |  | Sipariş içindeki özel kod2 için girilen kodu gösterir. |
| 30 | `STHAR_SIPNUM` | TDBBELGENO | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 31 | `STHAR_CARIKOD` | TDBCARIKOD | evet |  | Teslim cari kodunu gösterir. |
| 32 | `STHAR_SIP_TURU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 33 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `EKALAN_NEDEN` | char(1) | evet |  | Stok ismi ya da ebat bilgisini tutar. |
| 35 | `EKALAN` | varchar(35) | evet |  | Alış-satış fatura parametrelerinde ek alan kullanımı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan1 alanına girilen açıklamayı gösterir. |
| 36 | `EKALAN1` | varchar(35) | evet |  | Alış-satış fatura parametrelerinde ek alan2 kullanılsın mı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan2 alanına girilen açıklamayı gösterir. |
| 37 | `REDMIK` | decimal(15,5) | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 38 | `REDNEDEN` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 39 | `SIRA` | TDBSMALLINT | evet | `0` | Sipariş içine girilen stokların sırasını gösterir. |
| 40 | `STRA_SIPKONT` | TDBSMALLINT | evet | `0` | Sipariş içine girilen stok kontrolünü sağlar. Sira field ında program tarafından atılan sıra numaralarıyla aynı kayıtların tutar. |
| 41 | `AMBAR_KABULNO` | varchar(15) | evet |  | Satış/satın alma talep/teklif siparişleştiğinde talep ya da teklif numarasını gösterir. |
| 42 | `FIRMA_DOVTIP` | TDBBYTE | evet | `0` | Firma döviz tipini gösterir. |
| 43 | `FIRMA_DOVTUT` | TDBFLOAT | evet | `0` | Firma döviz tutarını gösterir. İrsaliyeleşen ya da faturalaşan sipairşin teskim miktarını gösterir. |
| 44 | `FIRMA_DOVMAL` | TDBFLOAT | evet | `0` | Firmanın döviz tutarını gösterir |
| 45 | `UPDATE_KODU` | char(1) | evet |  | Siparişleri yükle butonuna basıldığında update kodu 'Y' olan siparişlerin update kodunu NULL olur. |
| 46 | `IRSALIYE_NO` | TDBBELGENO | evet |  | İrsaliye tarihini gösterir. |
| 47 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | İrsaliye numarasını gösterir. |
| 48 | `KOSULKODU` | varchar(8) | evet |  | Sipariş için varsa koşul kodunu gösterir. |
| 49 | `STHAR_TESTAR` | TDBDATETIME | evet |  | Alış-satış fatura parametrelerinde sipairş kaydında her satırda teslim tarihi sorulsun mu parametresi işaretli olduğunda stok kalemi bazında teslim tarihi alanına girilen tarih bilgisini gösterir. |
| 50 | `OLCUBR` | TDBBYTE | evet | `0` | Sipariş içindeki stokların hangi öçü biriminin kullanıldığını gösterir. |
| 51 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `VADE_TARIHI` | TDBDATETIME | evet |  | Kalemler sekmesindeki stok bazındaki vade tarihini gösterir. |
| 53 | `LISTE_NO` | varchar(8) | evet |  | Özel fiyat listesindeki kaçıncı fiyat olduğunu gösterir. |
| 54 | `BAGLANTI_NO` | TDBINTEGER | evet | `0` | Üst bilgiler sekmesindeki bağlantı numarası alanına girilen numarayı gösterir. Cari>bağlantı-sipariş kayıtları>bağlantı kayıtlarında tanımlanan bağlantı numaraları) |
| 55 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 56 | `MUH_KODU` | TDBMUHKOD | evet |  | Sipariş içindeki stok bazında referans kodunu gösterir. |
| 57 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 58 | `FIYATTARIHI` | TDBDATETIME | evet |  | İlgili siparişe ait fiyat tarihini gösterir. |
| 59 | `KOSULTARIHI` | TDBDATETIME | evet |  | İlgili siparişe ait koşul tarihini gösterir. |
| 60 | `STRA_IRSKONT` | TDBSMALLINT | evet | `0` | Sipariş irsaliyeleştiğinde ya da faturalaştığında, sipariş içinde bulunan stoklara ait sıra numaralarını gösterir. (İrsaliyeleşen ya da faturalaşan sipariş içinde stok kontrolünü sağlar.) |
| 61 | `IRSMIK` | TDBINTEGER | evet |  |  |
| 62 | `BELGE_NO` | varchar(15) | hayır | `0` | Sipariş seçimi sekmesinde dispatching plan numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTMPDISSIPATRAKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLTMPDISSIPATRA_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLTMPDISSIPATRA_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTMPDISSIPATRA_IND1` | `UPDATE_KODU+STHAR_TESTAR+STHAR_ACIKLAMA+STOK_KODU` | Non-unique,Non-clustered |
| `TBLTMPDISSIPATRA_IND2` | `SUBE_KODU+UPDATE_KODU+STHAR_TESTAR+STHAR_ACIKLAMA+STOK_KODU` | Non-unique,Non-clustered |
| `TBLTMPDISSIPATRAKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, FISNO, STHAR_GCMIK, STHAR_GCMIK2, CEVRIM, STHAR_GCKOD
FROM dbo.TBLTMPDISSIPATRA WITH (NOLOCK);
```
