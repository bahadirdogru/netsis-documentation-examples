---
title: TBLTEKLIFMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblteklifmas/
---

# TBLTEKLIFMAS

> TALEP-TEKLİF ÜST BİLGİLER MASTER KAYITLARINI TUTAR

- **Modül:** [TALEP-TEKLİF](/veritabani/moduller/talep-teklif/)
- **Kolon sayısı:** 93

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FTIRSIP` | char(1) | hayır |  | Satış talep kaydı giriliyorsa 'G', satış teklif kaydı giriliyorsa 'H', satın alma talep kaydı giriliyorsa ise 'C', satın alma teklif kaydı giriliyorsa 'D' değerini göstrerir. |
| 3 | `FATIRS_NO` | TDBBELGENO | hayır |  | Girilen satın alma/satış talep/teklif numarasını gösterir. |
| 4 | `CARI_KODU` | TDBCARIKOD | hayır |  | Girilen satın alma/satış talep/teklif kaydı içindeki cari kodu gösterir. |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Satın alma/satış talep/teklifin kayıt tarihini gösterir. |
| 6 | `TIPI` | TDBBYTE | evet | `0` | Üst bilgiler sekmesindeki tipi alanında seçileni gösterir. Yurtiçi seçildiğinde '2', yurtdışı seçildiğinde '6' değerini gösterir. |
| 7 | `BRUTTUTAR` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde brüt toplamı gösterir. |
| 8 | `SAT_ISKT` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde satır bazı iskonto tutarını gösterir. |
| 9 | `MFAZ_ISKT` | TDBFLOAT | evet | `0` | Toplam sekmesindeki mal fazlası tutarını gösterir. |
| 10 | `GEN_ISK1T` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto1 tutarını gösterir. |
| 11 | `GEN_ISK2T` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto2 tutarını gösterir. |
| 12 | `GEN_ISK3T` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto3 tutarını gösterir. |
| 13 | `GEN_ISK1O` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto1 oranını gösterir. |
| 14 | `GEN_ISK2O` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto2 oranını gösterir. |
| 15 | `GEN_ISK3O` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde girilen genel iskonto3 oranını gösterir. |
| 16 | `KDV` | TDBFLOAT | evet | `0` | Toplamlar sekmesindeki kdv oranını gösterir. |
| 17 | `FAT_ALTM1` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde genel maliyet1 alanına girilen maliyet tutarını gösterir. |
| 18 | `FAT_ALTM2` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde genel maliyet2 alanına girilen maliyet tutarını gösterir. |
| 19 | `ACIKLAMA` | varchar(20) | evet |  | Üst bilgiler sekmesindeki açıklama alanına girilen açıklamayı gösterir. |
| 20 | `KOD1` | char(1) | evet |  | Üst bilgiler sekmesinde özel kod1 alanında girilen kodu gösterir. |
| 21 | `KOD2` | char(1) | evet |  | Üst bilgiler sekmesinde özel kod2 alanında girilen kodu gösterir. |
| 22 | `ODEMEGUNU` | TDBSMALLINT | evet | `0` | Toplamlar sekmesinde vade gününü gösterir. |
| 23 | `ODEMETARIHI` | TDBDATETIME | evet |  | Toplamlar sekmeindeki vade tarihini gösterir. |
| 24 | `KDV_DAHILMI` | char(1) | evet |  | Üst bilgiler sekmesinde kdv dahil parametresini gösterir. |
| 25 | `FATKALEM_ADEDI` | TDBSMALLINT | evet | `0` | Satın alma/satış talep/teklif kayıtlarında girilen stok adedini gösterir. |
| 26 | `SIPARIS_TEST` | TDBDATETIME | evet |  | Üst bilgiler sekmesinde teslim tarihini gösterir. |
| 27 | `TOPLAM_MIK` | decimal(15,5) | evet | `0` | Toplam miktarı gösterir. |
| 28 | `TOPDEPO` | TDBBYTE | evet | `0` | Toplu depo kodunu gösterir. |
| 29 | `YEDEK22` | varchar(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `CARI_KOD2` | TDBCARIKOD | evet |  | Teslim cari kodunu gösterir |
| 31 | `YEDEK` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `SIRANO` | TDBINTEGER | hayır | `0` | Evrakra girilen stokların kalem sıra numarasını gösterir. |
| 34 | `KDV_DAHIL_BRUT_TOP` | TDBFLOAT | evet | `0` | Eczacı uygulamasında kullanılır. |
| 35 | `KDV_TENZIL` | TDBFLOAT | evet | `0` | Eczacı uygulamasında kullanılır. |
| 36 | `MALFAZLASIKDVSI` | TDBFLOAT | evet | `0` | Eczacı uygulamasında kullanılır. |
| 37 | `GENELTOPLAM` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde genel toplamı gösterir. |
| 38 | `YUVARLAMA` | TDBFLOAT | evet | `0` | Genel toplamın yuvarlanması için kullanılan sahadır. |
| 39 | `SATIS_KOND` | varchar(4) | evet |  |  |
| 40 | `PLA_KODU` | varchar(8) | evet |  | Plasiyer kodunu gösterir. |
| 41 | `DOVIZTIP` | TDBBYTE | evet | `0` | Satın alma/satış talep/teklifin içindeki stokların döviz tipini gösterir. |
| 42 | `DOVIZTUT` | TDBFLOAT | evet | `0` | Satın alma/satış talep/teklifin içindeki stokların döviz tutarını gösterir. |
| 43 | `KS_KODU` | varchar(8) | evet |  | Toplamlar sekmesindeki kasa kodunu gösterir. |
| 44 | `BAG_TUTAR` | TDBFLOAT | evet | `0` | Bağlantı tutar sahasıdır |
| 45 | `YEDEK2` | varchar(7) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `HIZMET_FAT` | char(1) | evet |  | Hizmet Faturası olup olmadığını gösterir.(E/H) |
| 47 | `VADEBAZT` | TDBDATETIME | evet |  | Vade baz tarihini gösterir. |
| 48 | `KAPATILMIS` | char(1) | evet |  |  |
| 49 | `S_YEDEK1` | TDBBELGENO | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `C_YEDEK6` | char(1) | evet |  | Girilen belge tipi yurt içi ise 'X', yurt dışı ise 'E' değerini gösterir. |
| 55 | `B_YEDEK7` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `I_YEDEK8` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `AMBAR_KBLNO` | varchar(15) | evet |  | Satış/satın alma talep teklifleştirildiğinde ya da satış/satın alma teklif siparişleştirildiğinde talep ya da teklif numarasını gösterir. |
| 59 | `D_YEDEK10` | TDBDATETIME | evet |  | Üst bilgiler sekmesinde ist. Tes. Tarihini gösterir. |
| 60 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 61 | `KOSULKODU` | varchar(8) | evet |  | Satın alma/satış talep/teklifin içindeki varsa koşul kodunu gösterir. |
| 62 | `FIYATTARIHI` | TDBDATETIME | evet |  | Koşul bilgileri sekmesindekş fiyat tarihini gösterir. |
| 63 | `KOSULTARIHI` | TDBDATETIME | evet |  | Satın alma/satış talep/teklifin içindeki koşul tarihini gösterir. |
| 64 | `GENISK1TIP` | TDBSMALLINT | evet | `0` | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 65 | `GENISK2TIP` | TDBSMALLINT | evet | `0` | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 66 | `GENISK3TIP` | TDBSMALLINT | evet | `0` | Cari>koşul kayıtları> iskonto tip tanımlarında kullanıcı tarafından tanımlanan iskonto tiplerini gösterir. |
| 67 | `EXPORTTYPE` | TDBBYTE | evet | `0` | İthalat tipli girilen evraklar için '2', ihracat tipli girilen evraklar için '1'değerini gösterir. |
| 68 | `EXGUMRUKNO` | varchar(10) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 69 | `EXGUMTARIH` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 değerini atar |
| 70 | `EXFIILITARIH` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 değerini atar |
| 71 | `EXPORTREFNO` | varchar(10) | evet |  | İthalat/İhracat tipli evraklarda kullanıcı tarafından girilen Export Ref.No sahasını gösterir. |
| 72 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 73 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 74 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 75 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 76 | `GELSUBE_KODU` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 77 | `GITSUBE_KODU` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 78 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 79 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 80 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ODEKOD` | TDBGRUPKOD | evet |  | Ödeme kodunu gösterir. |
| 82 | `BRMALIYET` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 83 | `KOSVADEGUNU` | TDBSMALLINT | evet |  | Koşul bilgileri sekmesinde koşul vade gününü gösterir. |
| 84 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |
| 85 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Resmi fatura numarası yer alır. |
| 86 | `EBELGE` | TDBINTEGER | evet |  | Ebelge numarası yer alır. |
| 87 | `EXTERNALAPPID` | VarChar(50) | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. |
| 88 | `EXTERNALREFID` | VarChar(50) | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. |
| 89 | `HALFAT` | TDBINTEGER | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. |
| 90 | `FAT_ALTM3` | TDBFLOAT | evet |  | TBLFATUIRS tablosu ile bu tablo eşit olması için bulunur. Bu tablo için kullanılmaz. |
| 91 | `DOVBAZTAR` | TDBDATETIME | evet |  | Döviz baz tarihinin veritabanında saklanması desteklenmiştir. |
| 92 | `OTVTEVTUTAR` | TDBFLOAT | evet |  | ÖTV tevkifat tutar için eklenen saha |
| 93 | `TOPGIRDEPO` | TDBSMALLINT | evet |  | Toplu giriş depo için eklenen saha |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTEKLIFMAS_IND_2` | `FTIRSIP+CARI_KODU` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_3` | `TARIH+FTIRSIP` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_4` | `FTIRSIP+SIRANO` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_5` | `FTIRSIP+UPDATE_KODU` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_6` | `SUBE_KODU+FTIRSIP` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_7` | `S_YEDEK1` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_8` | `ISLETME_KODU+SUBE_KODU` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLTEKLIFMAS_PKEY` | `SUBE_KODU+FTIRSIP+FATIRS_NO+CARI_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FTIRSIP, FATIRS_NO, CARI_KODU, TARIH, TIPI
FROM dbo.TBLTEKLIFMAS WITH (NOLOCK);
```
