---
title: TBLPROFORMAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblproformamas/
---

# TBLPROFORMAMAS

> PROFORMA FATURAYA AİT BİLGİLER YER ALIR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 93

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 2 | `FTIRSIP` | char(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 3 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 4 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari Kodu bilgisi yer alır. |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi yer alır. |
| 6 | `TIPI` | TDBBYTE | evet |  | 6-proforma(taslak fatura),1-kesin fatura |
| 7 | `BRUTTUTAR` | TDBFLOAT | evet |  | Brüt tutar bilgisi yer alır. |
| 8 | `SAT_ISKT` | TDBFLOAT | evet |  | Satır iskontosu tutarı yer alır. |
| 9 | `MFAZ_ISKT` | TDBFLOAT | evet |  | Mal fazlası iskontosu bilgisi yer alır. |
| 10 | `GEN_ISK1T` | TDBFLOAT | evet |  | Genel iskonto 1 tutarı yer alır. |
| 11 | `GEN_ISK2T` | TDBFLOAT | evet |  | Genel iskonto 2 tutarı yer alır. |
| 12 | `GEN_ISK3T` | TDBFLOAT | evet |  | Genel iskonto 3 tutarı yer alır. |
| 13 | `GEN_ISK1O` | TDBFLOAT | evet |  | Genel iskonto 1 oranı yer alır. |
| 14 | `GEN_ISK2O` | TDBFLOAT | evet |  | Genel iskonto 2 oranı yer alır. |
| 15 | `GEN_ISK3O` | TDBFLOAT | evet |  | Genel iskonto 3 oranı yer alır. |
| 16 | `KDV` | TDBFLOAT | evet |  | KDV tutarı bilgisi yer alır. |
| 17 | `FAT_ALTM1` | TDBFLOAT | evet |  | Fatura alt maliyet 1 tutarı yer alır. |
| 18 | `FAT_ALTM2` | TDBFLOAT | evet |  | Fatura alt maliyet 2 tutarı yer alır. |
| 19 | `ACIKLAMA` | varchar(20) | evet |  | Açıklama bligisi yer alır. |
| 20 | `KOD1` | char(1) | evet |  | Özel Kod 1 bilgisi yer alır. |
| 21 | `KOD2` | char(1) | evet |  | Özel Kod 2 bilgisi yer alır. |
| 22 | `ODEMEGUNU` | TDBSMALLINT | evet |  | Ödeme günü bilgisi yer alır. |
| 23 | `ODEMETARIHI` | TDBDATETIME | evet |  | Ödeme tarihi bilgisi yer alır. |
| 24 | `KDV_DAHILMI` | char(1) | evet |  | KDvV dahil ise E değerini değil ise H değerini alır. |
| 25 | `FATKALEM_ADEDI` | TDBSMALLINT | evet |  | Fatura kalem adedi bilgis yer alır. |
| 26 | `SIPARIS_TEST` | TDBDATETIME | evet |  | Sipariş teslim tarihi bilgisi yer alır. |
| 27 | `TOPLAM_MIK` | decimal(15,5) | evet |  | 0 |
| 28 | `TOPDEPO` | TDBBYTE | evet |  | 0 |
| 29 | `YEDEK22` | varchar(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `CARI_KOD2` | TDBCARIKOD | evet |  | cari kod 2 bilgisi yer alır. |
| 31 | `YEDEK` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `UPDATE_KODU` | char(1) | evet |  | NULL |
| 33 | `SIRANO` | TDBINTEGER | hayır |  | 0 |
| 34 | `KDV_DAHIL_BRUT_TOP` | TDBFLOAT | evet |  | KDV dahil brüt tutar bilgisi yer alır. |
| 35 | `KDV_TENZIL` | TDBFLOAT | evet |  | KDV tenzil tutarı yer alır. |
| 36 | `MALFAZLASIKDVSI` | TDBFLOAT | evet |  | Mal fazlası Kdv si tutarı yer alır. |
| 37 | `GENELTOPLAM` | TDBFLOAT | evet |  | Genel toplam bilgisi yer alır. |
| 38 | `YUVARLAMA` | TDBFLOAT | evet |  | Yuvarlama tutarı bilgisi yer alır. |
| 39 | `SATIS_KOND` | varchar(4) | evet |  | NULL |
| 40 | `PLA_KODU` | varchar(8) | evet |  | Plasiyer kodu bilgisi yer alır. |
| 41 | `DOVIZTIP` | TDBBYTE | evet |  | Döviz tipi bilgisi yer alır. |
| 42 | `DOVIZTUT` | TDBFLOAT | evet |  | Döviz tutarı bilgisi yer alır. |
| 43 | `KS_KODU` | varchar(8) | evet |  | Kasa kodu bilgisi yer alır. |
| 44 | `BAG_TUTAR` | TDBFLOAT | evet |  | 0 |
| 45 | `YEDEK2` | varchar(7) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `HIZMET_FAT` | char(1) | evet |  | NULL |
| 47 | `VADEBAZT` | TDBDATETIME | evet |  | NULL |
| 48 | `KAPATILMIS` | char(1) | evet |  | Kapatılmış ise S değerini alır. |
| 49 | `S_YEDEK1` | TDBBELGENO | evet |  | Sipariş revizyon takibi için kullanılmaktadır. |
| 50 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `C_YEDEK6` | char(1) | evet |  | E-yurtdışı yani ihracat faturası |
| 55 | `B_YEDEK7` | TDBBYTE | evet |  | 1- fason sipariş, default 0 |
| 56 | `I_YEDEK8` | TDBSMALLINT | evet |  | MRP sipariş oluşturma için kullanılan sahadır. |
| 57 | `L_YEDEK9` | TDBINTEGER | evet |  | Ambar kabul numarası olarak kullanılmaktadır. |
| 58 | `AMBAR_KBLNO` | varchar(15) | evet |  | NULL |
| 59 | `D_YEDEK10` | TDBDATETIME | evet |  | fiili tarih bilgisi yer alır. |
| 60 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 61 | `KOSULKODU` | varchar(8) | evet |  | Koşul kodu bilgisi yer alır |
| 62 | `FIYATTARIHI` | TDBDATETIME | evet |  | Fiyat tarihi bilgisi yer alır. |
| 63 | `KOSULTARIHI` | TDBDATETIME | evet |  | Koşul tarihi bilgisi yer alır. |
| 64 | `GENISK1TIP` | TDBSMALLINT | evet |  | Genel iskonto 1 tip bilgisi yer alır |
| 65 | `GENISK2TIP` | TDBSMALLINT | evet |  | Genel iskonto 2 tip bilgisi yer alır |
| 66 | `GENISK3TIP` | TDBSMALLINT | evet |  | Genel iskonto 3 tip bilgisi yer alır |
| 67 | `EXPORTTYPE` | TDBBYTE | evet |  | İthalat ihracat tipi bilgisi yer alır. |
| 68 | `EXGUMRUKNO` | varchar(20) | evet |  | NULL |
| 69 | `EXGUMTARIH` | TDBDATETIME | evet |  | NULL |
| 70 | `EXFIILITARIH` | TDBDATETIME | evet |  |  |
| 71 | `EXPORTREFNO` | varchar(20) | evet |  | Export referans numarası bilgisi tutulur |
| 72 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 73 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 74 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 75 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 76 | `GELSUBE_KODU` | TDBSMALLINT | evet |  | 0 |
| 77 | `GITSUBE_KODU` | TDBSMALLINT | evet |  | 0 |
| 78 | `ONAYTIPI` | char(1) | hayır |  | Onay tipi bilgisi yer alır. |
| 79 | `ONAYNUM` | TDBINTEGER | hayır |  | Onay numarası bilgisi yer alır. |
| 80 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 81 | `ODEKOD` | TDBGRUPKOD | evet |  | NULL |
| 82 | `BRMALIYET` | TDBFLOAT | evet |  | 0 |
| 83 | `KOSVADEGUNU` | TDBSMALLINT | evet |  | 0 |
| 84 | `YAPKOD` | varchar(15) | evet |  | NULL |
| 85 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Gib fatura numarası bilgisi yer alır. |
| 86 | `EBELGE` | TDBINTEGER | evet |  | Ebelge numarasını gösterir. |
| 87 | `EXTERNALAPPID` | VarChar(50) | evet |  | Proforma faturadaki nakliye döviz tutarı ek maliyet olarak eklendiyse burada tutar. |
| 88 | `EXTERNALREFID` | VarChar(50) | evet |  | Proforma faturadaki sigorta döviz tutarı ek maliyet olarak eklendiyse burada tutar. |
| 89 | `HALFAT` | TDBINTEGER | evet |  | NULL |
| 90 | `FAT_ALTM3` | TDBFLOAT | evet |  | NULL |
| 91 | `DOVBAZTAR` | TDBDATETIME | evet |  | Döviz baz tarihinin veritabanında saklanması desteklenmiştir. |
| 92 | `OTVTEVTUTAR` | TDBFLOAT | evet |  | ÖTV tevfikat tutarı için eklenen saha |
| 93 | `TOPGIRDEPO` | TDBSMALLINT | evet |  | Toplu giriş depo için eklenen saha |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FTIRSIP, FATIRS_NO, CARI_KODU, TARIH, TIPI
FROM dbo.TBLPROFORMAMAS WITH (NOLOCK);
```
