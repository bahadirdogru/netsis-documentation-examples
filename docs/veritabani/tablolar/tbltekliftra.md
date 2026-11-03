---
title: TBLTEKLIFTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltekliftra/
---

# TBLTEKLIFTRA

> SATIŞ/SATIN ALMA TALEP/TEKLİF EVRAKLARINDA DETAY BİLGİLERİNİ TUTAR

- **Modül:** [TALEP-TEKLİF](/veritabani/moduller/talep-teklif/)
- **Kolon sayısı:** 85
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | İlgili belgedeki stok kodunu gösterir. |
| 2 | `FISNO` | TDBBELGENO | hayır |  | TBLTEKLIFMAS tablosundaki FATIRS_NO field ındaki numarayı gösterir. |
| 3 | `STHAR_GCMIK` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış miktarını gösterir. |
| 4 | `STHAR_GCMIK2` | TDBFLOAT | evet | `0` | İlgili belgede bulunan stok kodunun giriş/çıkış ikinci miktarını gösterir. |
| 5 | `CEVRIM` | decimal(28,14) | evet | `0` | Stok hareket bazında farklı çevrim değerlerini gösterir. |
| 6 | `STHAR_GCKOD` | char(1) | hayır |  | Stok hareketlerinin giriş/çıkış hareketlerini gösterir. |
| 7 | `STHAR_TARIH` | TDBDATETIME | hayır |  | Stok hareket tarihini gösterir. Satış/satın alma talep/teklif belgelerinin kayıt tarihini gösterir. |
| 8 | `STHAR_NF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın net fiyatını gösterir. |
| 9 | `STHAR_BF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın brüt fiyatını gösterir. |
| 10 | `STHAR_IAF` | TDBFLOAT | evet | `0` | Stok hareketine ait kaydın iade fiyatını gösterir. |
| 11 | `STHAR_KDV` | TDBKDVORAN | evet | `0` | Stok hareket kaydının kdv oranını gösterir. |
| 12 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | İlgili belge içindeki stoğun depo kodunu gösterir. |
| 13 | `STHAR_ACIKLAMA` | varchar(35) | evet |  | İlgili belge içindeki cari kodu gösterir. |
| 14 | `STHAR_SATISK` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan satır iskontosunu gösterir. |
| 15 | `STHAR_MALFISK` | decimal(15,5) | evet | `0` | İlgili belge içindeki stok kalemi için yapılan mal fazlası iskontosunu gösterir. |
| 16 | `STHAR_FTIRSIP` | char(1) | hayır |  | TBLTEKLIFMAS tablosundaki FTIRSIP field' ını gösterir. (Belge tipini gösterir.) |
| 17 | `STHAR_SATISK2` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan 2. satır iskontosunu gösterir. |
| 18 | `LISTE_FIAT` | TDBBYTE | evet | `0` | Talep-teklif parametrelerinde fiyat birimi sorulsun parametresi işaretli olduğunda belgede f. Birim sahası aktif hale gelir. Stok kartı ölçü birimi sekmesindeki fiyat birimi sahasında seçileni gösterir. Belgede kullanıcı isterse bu tanımlamayı elle değiştirebilir. |
| 19 | `STHAR_HTUR` | char(1) | hayır |  | Belge içindeki stok kalemlerinin kapalı olup olmadığını gösterir. İlgili talep,teklif kalemi kapalı ise 'K', değilse 'H' değerini gösterir. |
| 20 | `STHAR_DOVTIP` | TDBBYTE | evet | `0` | Belge içinde girilen stoğun döviz tipini gösterir. |
| 21 | `PROMASYON_KODU` | TDBBYTE | evet | `0` | Satır bazında tanımlanan promosyon kodunu gösterir. |
| 22 | `STHAR_DOVFIAT` | TDBFLOAT | evet | `0` | Belge içinde girilen stoğun döviz tutarını gösterir. |
| 23 | `STHAR_ODEGUN` | TDBSMALLINT | evet | `0` | Satın alma/satış talep/teklif belgelerinde toplamlar sekmesindeki vade gün alanında girilen gün sayısını gösterir. Vade tarihine tarih girişmişse program otomatik vade gününü hesaplayarak vade gün alanına gün değerinin atar. |
| 24 | `STRA_SATISK3` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan 3. satır iskontosunu gösterir. |
| 25 | `STRA_SATISK4` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan 4. satır iskontosunu gösterir. |
| 26 | `STRA_SATISK5` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan 5. satır iskontosunu gösterir. |
| 27 | `STRA_SATISK6` | TDBFLOAT | evet | `0` | İlgili belge içindeki stok kalemi için yapılan 6. satır iskontosunu gösterir. |
| 28 | `STHAR_BGTIP` | char(1) | evet |  | Default 'I' değeri atılır. |
| 29 | `STHAR_KOD1` | char(1) | evet |  | Satın alma/satış talep/teklif içindeki özel kod1 için girilen kodu gösterir. |
| 30 | `STHAR_KOD2` | char(1) | evet |  | Satın alma/satış talep/teklif içindeki özel kod2 için girilen kodu gösterir. |
| 31 | `STHAR_SIPNUM` | TDBBELGENO | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 32 | `STHAR_CARIKOD` | TDBCARIKOD | evet |  | Teslim cari kodunu gösterir. |
| 33 | `STHAR_SIP_TURU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 34 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `EKALAN_NEDEN` | char(1) | evet |  | Stok ismi ya da ebat bilgisini tutar. |
| 36 | `EKALAN` | varchar(35) | evet |  | Talep-teklif parametrelerinde ek alan kullanılacak mı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan1 alanına girilen açıklamayı gösterir. |
| 37 | `EKALAN1` | varchar(35) | evet |  | Talep-teklif parametrelerinde ek alan2 kullanılacak mı parametresi işaretli olduğunda stok kalemi bazında açılan ekalan2 alanına girilen açıklamayı gösterir. |
| 38 | `REDMIK` | decimal(15,5) | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 39 | `REDNEDEN` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 40 | `SIRA` | TDBSMALLINT | evet | `0` | Belge içine girilen stokların sırasını gösterir. |
| 41 | `STRA_SIPKONT` | TDBSMALLINT | evet | `0` | Belge içine girilen stok kontrolünü sağlar. Sira field ında program tarafından atılan sıra numaralarıyla aynı kayıtların tutar. |
| 42 | `AMBAR_KABULNO` | varchar(15) | evet |  | Satış/satın alma talep teklifleştirildiğinde ya da satış/satın alma teklif siparişleştirildiğinde talep ya da teklif numarasını gösterir. |
| 43 | `FIRMA_DOVTIP` | TDBBYTE | evet | `0` | Firma döviz tipini gösterir. |
| 44 | `FIRMA_DOVTUT` | TDBFLOAT | evet | `0` | Firma döviz tutarını gösterir. |
| 45 | `FIRMA_DOVMAL` | TDBFLOAT | evet | `0` | Firma döviz maliyet bilgisini gösterir. |
| 46 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `IRSALIYE_NO` | TDBBELGENO | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 48 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | Kalemler sekmesinde stok bazında girilen yükleme tarihi alanında girilen tarih bilgisini gösterir. |
| 49 | `KOSULKODU` | varchar(8) | evet |  | Koşul kodunu gösterir. |
| 50 | `ECZA_FAT_TIP` | TDBBYTE | evet | `0` | Ecza deposu sistemindeki fatura tipini gösterir. |
| 51 | `STHAR_TESTAR` | TDBDATETIME | evet |  | Talep-teklif parametrelerinde satr bazında teslim tarihi sorulsun parametresi işaretli olduğunda stok kalemi bazında teslim tarihi alanına girilen tarih bilgisini gösterir. |
| 52 | `OLCUBR` | TDBBYTE | evet | `0` | Belge içindeki stokların hangi öçü biriminin kullanıldığını gösterir. |
| 53 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 54 | `VADE_TARIHI` | TDBDATETIME | evet |  | Kalemler sekmesindeki stok bazındaki vade tarihini gösterir. |
| 55 | `LISTE_NO` | varchar(8) | evet |  | Özel fiyat listesindeki kaçıncı fiyat olduğunu gösterir. |
| 56 | `BAGLANTI_NO` | TDBINTEGER | evet | `0` | Üst bilgiler sekmesindeki bağlantı numarası alanına girilen numarayı gösterir. Cari>bağlantı-sipariş kayıtları>bağlantı kayıtlarında tanımlanan bağlantı numaraları) |
| 57 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 58 | `MUH_KODU` | TDBMUHKOD | evet |  | Hizmet belgesi için girilmesi gereken muhasebe kodunu gösterir. |
| 59 | `S_YEDEK1` | TDBREFKOD | evet |  | Belge içindeki stok bazında referans kodunu gösterir. |
| 60 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 62 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 63 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 64 | `C_YEDEK6` | char(1) | evet |  | Kalemler sekmesinde kesin/plan parametresi işaretli ise 'P', işaretli değil ise 'K' değerini gösterir. |
| 65 | `B_YEDEK7` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 66 | `I_YEDEK8` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 67 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 68 | `D_YEDEK10` | TDBDATETIME | evet |  | Üst bilgiler sekmesinde İst. Tes tarih alanına girilen tarih bilgisini gösterir. |
| 69 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 70 | `FIYATTARIHI` | TDBDATETIME | evet |  | Fiyat tarihini gösterir. |
| 71 | `KOSULTARIHI` | TDBDATETIME | evet |  | Koşul tarihini gösterir. |
| 72 | `SATISK1TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.1 Tip alanına girileni gösterir. |
| 73 | `SATISK2TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.2 Tip alanına girileni gösterir. |
| 74 | `SATISK3TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.3 Tip alanına girileni gösterir. |
| 75 | `SATISK4TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.4 Tip alanına girileni gösterir. |
| 76 | `SATISK5TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.5 Tip alanına girileni gösterir. |
| 77 | `SATISK6TIP` | TDBSMALLINT | evet | `0` | Satır Bazında girilen iskontolar için, belirli tipler bazında farklı muhasebe hesap kodlarının çalışması için kullanılan sahadır. Kalemler sekmesinde İsk.6 Tip alanına girileni gösterir. |
| 78 | `EXPORTTYPE` | TDBBYTE | evet | `0` | Üst bilgiler sekmesinde tipi yurt dışı seçildiğinde ith/ihr tipi alanında seçileni gösterir. |
| 79 | `EXPORTMIK` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 80 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 81 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 82 | `KKMALF` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 83 | `STRA_IRSKONT` | TDBSMALLINT | evet | `0` | Satış/satın alma talep teklifleştirildiğinde ya da satış/satın alma teklif siparişleştirildiğinde, talep ya da teklif içinde bulunan stoklara ait sıra numaralarını gösterir. (Teklifleşen ya da siparişleştirilen stok kontrolünü sağlar.) |
| 84 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |
| 85 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | Evrağa girilen mamülün varsa yapılandıema kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTEKLIFTRA_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLTEKLIFTRA_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLTEKLIFTRA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLTEKLIFTRA_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLTEKLIFTRAMAMYAPKODFKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLTEKLIFTRAYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTEKLIFTRA_IDX_YAPKOD1` | `YAPKOD+STOK_KODU+FISNO` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_1` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_2` | `STOK_KODU+STHAR_TARIH` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_3` | `STHAR_GCKOD+STHAR_BGTIP+FISNO+STHAR_ACIKLAMA` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_4` | `STHAR_TARIH` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_5` | `STHAR_GCKOD+FISNO+STRA_SIPKONT` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_6` | `SUBE_KODU+DEPO_KODU+STOK_KODU+STHAR_TARIH` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_7` | `STHAR_TESTAR+STHAR_GCKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLTEKLIFTRA_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, FISNO, STHAR_GCMIK, STHAR_GCMIK2, CEVRIM, STHAR_GCKOD
FROM dbo.TBLTEKLIFTRA WITH (NOLOCK);
```
