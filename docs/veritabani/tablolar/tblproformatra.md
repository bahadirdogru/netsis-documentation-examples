---
title: TBLPROFORMATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblproformatra/
---

# TBLPROFORMATRA

> PROFORMA FATURAYA AİT KALEM BİLGİLERİ DETAYLARI YER ALIR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 86

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi yer alır. |
| 2 | `FISNO` | TDBBELGENO | hayır |  | TBLPROFORMAMAS-FATIRS_NO alanına karşılık gelir. |
| 3 | `STHAR_GCMIK` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 4 | `STHAR_GCMIK2` | TDBFLOAT | evet |  | 2. miktar bilgisi yer alır. |
| 5 | `CEVRIM` | decimal(28,14) | evet |  | Çevrim bilgisi yer alır. |
| 6 | `STHAR_GCKOD` | char(1) | hayır |  | G-iriş,C-ıkış |
| 7 | `STHAR_TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi yer alır. |
| 8 | `STHAR_NF` | TDBFLOAT | evet |  | Net fiyat bilgisi yer alır. |
| 9 | `STHAR_BF` | TDBFLOAT | evet |  | Brüt fiyat bilgisi yer alır. |
| 10 | `STHAR_IAF` | TDBFLOAT | evet |  | Stok hareketlerinin iade fiyatını gösterir. |
| 11 | `STHAR_KDV` | TDBKDVORAN | evet |  | Stok hareket kayıtlarının kdv oranını gösterir. |
| 12 | `DEPO_KODU` | TDBSMALLINT | evet |  | Depo kodu bilgisi yer alır. |
| 13 | `STHAR_ACIKLAMA` | varchar(35) | evet |  | Cari kodu bilgisi yer alır. |
| 14 | `STHAR_SATISK` | TDBFLOAT | evet |  | Satır iskontosu bilgisi yer alır. |
| 15 | `STHAR_MALFISK` | decimal(15,5) | evet |  | Mal fazlası iskontodu bilgisi yer alır. |
| 16 | `STHAR_FTIRSIP` | char(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 17 | `STHAR_SATISK2` | TDBFLOAT | evet |  | Satır iskontosu 2 bilgisi yer alır. |
| 18 | `LISTE_FIAT` | TDBBYTE | evet |  | Liste fiyatı bilgisi yer alır. |
| 19 | `STHAR_HTUR` | char(1) | hayır |  | Stok hareketlerinin türünü gösterir. Devir hareketi girilmiş ise 'A', fatura tipli hareket ie 'J', irsaliye tipli hareket ise 'H', depolararası transfer ise 'B' , Faturalaşmış irsaliye ise 'N' değerini gösterir. 'L' değeri ise saıştan ve alıştan iadeleri gösterir.C-üretim,D-muhtelif, E-maliyet,F-Konsinye,G-müstahsil,I-kapalı fatura,K-Muht.Müş.Fatura,M-zayi iade. |
| 20 | `STHAR_DOVTIP` | TDBBYTE | evet |  | Döviz tipi bilgisi yer alır. |
| 21 | `PROMASYON_KODU` | TDBBYTE | evet |  | Promasyon kodu bilgisi yer alır. 0 |
| 22 | `STHAR_DOVFIAT` | decimal(28,15) | evet |  | Döviz fiyat bilgisi yer alır. |
| 23 | `STHAR_ODEGUN` | TDBSMALLINT | evet |  | Ödeme günü bilgisi yer alır. |
| 24 | `STRA_SATISK3` | TDBFLOAT | evet |  | Satır iskontosu 3 bilgisi yer alır. |
| 25 | `STRA_SATISK4` | TDBFLOAT | evet |  | Satır iskontosu 4 bilgisi yer alır. |
| 26 | `STRA_SATISK5` | TDBFLOAT | evet |  | Satır iskontosu 5 bilgisi yer alır. |
| 27 | `STRA_SATISK6` | TDBFLOAT | evet |  | Satır iskontosu 6 bilgisi yer alır. |
| 28 | `STHAR_BGTIP` | char(1) | evet |  | İlgili kaydın faturadan mı yoksa irsaliyeden mi geldiğini belirleyen sahadır.Fatura için F,irsaliye için I değerini alır. U ve V harfleri için her 2 harf için de üretim yapıldıgında atılmaktadır. U harfi stoklara giriş oldugunda sthar_gckod G iken, V harfi için stoklardan çıkış oldugunda sthar_gckod C oldugunda atılır. |
| 29 | `STHAR_KOD1` | char(1) | evet |  | Özel kod 1 bilgisi yer alır. |
| 30 | `STHAR_KOD2` | char(1) | evet |  | Özel kod 2 bilgisi yer alır. |
| 31 | `STHAR_SIPNUM` | TDBBELGENO | evet |  | Sipariş numarası bilgisi yer alır. |
| 32 | `STHAR_CARIKOD` | TDBCARIKOD | evet |  | Cari kodu bilgisi yer alır. |
| 33 | `STHAR_SIP_TURU` | char(1) | evet |  |  |
| 34 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodu bilgisi yer alır. |
| 35 | `EKALAN_NEDEN` | char(1) | evet |  | Fatura belgesşnde girilen fatura bilgisinı tutar |
| 36 | `EKALAN` | varchar(100) | evet |  | Ekalan2 yi tutar |
| 37 | `EKALAN1` | varchar(100) | evet |  | Ekalan bilgisini tutar |
| 38 | `REDMIK` | decimal(15,5) | evet |  | ÖTV bilgisi yer alır. |
| 39 | `REDNEDEN` | TDBBYTE | evet |  | Red nedenini tutar |
| 40 | `SIRA` | TDBSMALLINT | evet |  | Sıra bilgisini tutar |
| 41 | `STRA_SIPKONT` | TDBSMALLINT | evet |  | Siparişin içindeki sıra numarasını gösterir. |
| 42 | `AMBAR_KABULNO` | varchar(15) | evet |  | Satış/satın alma talep/teklif siparişleştiğinde talep ya da teklif numarasını gösterir. |
| 43 | `FIRMA_DOVTIP` | TDBBYTE | evet |  | Firma döviz tipini gösterir. |
| 44 | `FIRMA_DOVTUT` | TDBFLOAT | evet |  | Teslim miktarı bilgisi yer alır. |
| 45 | `FIRMA_DOVMAL` | TDBFLOAT | evet |  | Mal fazlası teslim miktarı bilgisi yer alır. |
| 46 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `IRSALIYE_NO` | TDBBELGENO | evet |  | İrsaliye numarası bilgisi yer alır. |
| 48 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | İrsaliye tarihi bilgisi yer alır. |
| 49 | `KOSULKODU` | varchar(8) | evet |  | Koşul kodu bilgisi yer alır. |
| 50 | `ECZA_FAT_TIP` | TDBBYTE | evet |  | 0 |
| 51 | `STHAR_TESTAR` | TDBDATETIME | evet |  | Teslim tarihi bilgisi yer alır. |
| 52 | `OLCUBR` | TDBBYTE | evet |  | Ölçü birimi bilgisi yer alır. |
| 53 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından verilen Inckey numarasıdır. |
| 54 | `VADE_TARIHI` | TDBDATETIME | evet |  | vade tarihi bilgisi yer alır. |
| 55 | `LISTE_NO` | varchar(8) | evet |  | Stoklara ait fiyat listelerindeki kaçıncı fiyata göre işlem yapılsdığını gösterir. |
| 56 | `BAGLANTI_NO` | TDBINTEGER | evet |  | Stok hareketine bağlı varsa bağlantı numarasını gösterir. |
| 57 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 58 | `MUH_KODU` | TDBMUHKOD | evet |  | Satış-alış faturalarında fason uygulamasında kalemler sekmesinde çıkan ek bilgi girişi ekranında çıkan grup kodunu gösterir. |
| 59 | `S_YEDEK1` | TDBREFKOD | evet |  | Ref. Kodu için kullanılmaktadır. |
| 60 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `F_YEDEK3` | TDBFLOAT | evet |  | Depolar arası transfer teslim miktarı tutulur. |
| 62 | `F_YEDEK4` | TDBFLOAT | evet |  | Depolar arası transfer mal fazlası teslim miktarı tutulur. |
| 63 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 64 | `C_YEDEK6` | char(1) | evet |  | I - İTHALAT İHRACAT |
| 65 | `B_YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 66 | `I_YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 67 | `L_YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 68 | `D_YEDEK10` | TDBDATETIME | evet |  | Fiili tarih bilgisi yer alır. |
| 69 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 70 | `FIYATTARIHI` | TDBDATETIME | evet |  | Fiyat tarihi bilgisi yer alır. |
| 71 | `KOSULTARIHI` | TDBDATETIME | evet |  | Koşul tarihi bilgisi yer alır. |
| 72 | `SATISK1TIP` | TDBSMALLINT | evet |  | Satır iskontosu 1 tip bilgisi yer alır. |
| 73 | `SATISK2TIP` | TDBSMALLINT | evet |  | Satır iskontosu 2 tip bilgisi yer alır. |
| 74 | `SATISK3TIP` | TDBSMALLINT | evet |  | Satır iskontosu 3 tip bilgisi yer alır. |
| 75 | `SATISK4TIP` | TDBSMALLINT | evet |  | Satır iskontosu 4 tip bilgisi yer alır. |
| 76 | `SATISK5TIP` | TDBSMALLINT | evet |  | Satır iskontosu 5 tip bilgisi yer alır. |
| 77 | `SATISK6TIP` | TDBSMALLINT | evet |  | Satır iskontosu 6 tip bilgisi yer alır. |
| 78 | `EXPORTTYPE` | TDBBYTE | evet |  | Export tipinin tutulduğu sahadır |
| 79 | `EXPORTMIK` | TDBFLOAT | evet |  | Export miktarının tutulduğu sahadır |
| 80 | `ONAYTIPI` | char(1) | hayır |  | Onay tipi bilgisi yer alır.A |
| 81 | `ONAYNUM` | TDBINTEGER | hayır |  | Onay numarası bilgisi yer alır.0 |
| 82 | `KKMALF` | TDBFLOAT | evet |  | Kalite kontrol mal fazlasını tutar |
| 83 | `STRA_IRSKONT` | TDBSMALLINT | evet |  | İrsaliyedeki sıra numarasını tutar |
| 84 | `YAPKOD` | varchar(15) | evet |  | Stoğun varsa yapılandırma kodunu gösterir. |
| 85 | `MAMYAPKOD` | varchar(15) | evet |  | İlgili stok mamül ise mamülün yapılandırma kodu varsa onu gösterir. |
| 86 | `OTVFIYAT` | TDBFLOAT | evet |  | 0 |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, FISNO, STHAR_GCMIK, STHAR_GCMIK2, CEVRIM, STHAR_GCKOD
FROM dbo.TBLPROFORMATRA WITH (NOLOCK);
```
