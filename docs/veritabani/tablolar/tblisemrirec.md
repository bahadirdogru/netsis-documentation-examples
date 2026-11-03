---
title: TBLISEMRIREC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemrirec/
---

# TBLISEMRIREC

> KAYIT>İŞ EMRİ GİRİŞİ EKRANINDA İŞ EMRİNE BAĞLI REÇETE KAYITLARI SEKMESİNDE GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 53
- **Birincil anahtar:** `ISEMRINO`
- **Not:** Bu tablo şema dokümanında ikinci kez, [ÜRETİM modülünde](/veritabani/tablolar/tblisemrirec-2/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISEMRINO` | TDBBELGENO | hayır |  | İş emri numarasını gösterir. |
| 2 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamül kodunu gösterir. |
| 3 | `HAM_KODU` | TDBSTOKKOD | hayır |  | Mamül içindeki hammadde kodunu gösterir. |
| 4 | `MIKTAR` | TDBFLOAT | evet | `0` | İş emrime bağlı mamül ya da yarı mamülün reçete içindeki yarımamül ya da bileşen miktarını gösterir. |
| 5 | `STOK_MALIYET` | char(1) | evet |  | Reçete bilgileri-2 sekmesinde bileşen bilgileri alanında stok seçili ise 'S', maliyet seçili ise 'M' değerini gösterir. |
| 6 | `MIKTARSABITLE` | char(1) | evet |  | Reçete bilgileri-2 sekmesinde bileşen bilgileri alanında miktar sabitle parametresini gösterir. |
| 7 | `KAYIT_TARIHI` | TDBDATETIME | evet |  | Üretim reçetelerinin kayıt tarihini gösterir. |
| 8 | `GECERLILIK_TARIHI` | TDBDATETIME | evet |  | Üzerinde bulunulan bileşenin belli bir süre sonra başka bir malzeme ile değiştirilmesi planlanıyorsa, değişiklik tarihini gösterir. |
| 9 | `GEC_SON_BILESEN` | TDBSTOKKOD | evet |  | Reçetedeki herhangi bir bileşenin, belli bir süre sonrasında hangi malzeme ile değiştirileceğini gösterir. |
| 10 | `GEC_SON_MIKTAR` | TDBFLOAT | evet | `0` | Bileşenin miktarsal değişikliğini gösterir. |
| 11 | `GEC_FLAG` | TDBBYTE | hayır | `0` | Geçerlilik olup olmadığını belirleyen sahadır. |
| 12 | `BASLANGIC_TARIHI` | TDBDATETIME | evet |  | Malzeme gereksinim planlama çalıştırıldığında sistem tarih bilgisini gösterir. Planlama sırasında stok, sipariş, iş emri bakiyeleri kontrol edilirken bu tarih baz alınır. |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Reçete bilgileri-2 sekmesinde bileşene ya da yarı mamüle ait fire miktarını gösterir. |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Reçete bilgileri-2 sekmesinde bileşene ya da yarı mamüle ait sabit fire miktarını gösterir. |
| 21 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `OPERASYON_UAK` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki son operasyon parametresini gösterir. |
| 29 | `SON_OPERASYON` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki Ü.A dahil edilsin parametresini gösterir. |
| 30 | `OPR_BIL` | char(1) | evet | `B` | Reçete içindeki girilenlerin operasyon mu yoksa bileşen mi olduğunu gösterir. Operasyon seçili ise 'O', bileşen seçili ise 'B' değerini gösterir. |
| 31 | `OPNO` | varchar(8) | hayır |  | Reçeteye kaydedilen bileşen veya yarı mamül için kullanılan sıra numarasıni gösterir. |
| 32 | `ACIKLAMA` | TDBMEMO | evet |  | İlgili bileşen ya da yarımamül için reçete bazında girilen açıklamayı gösterir. |
| 33 | `OPMIK` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan simultane tezgah miktarına girilen değeri gösterir. |
| 34 | `ISTKODU` | varchar(5) | evet |  | MRP' de oprasyon tanımlama ekranında tanımlanan operasyonun hangi iş istasyonunda yapıldığını gösterir. |
| 35 | `SETUPSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan hazırlık süresine girilen süreyi gösterir. |
| 36 | `URETSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan üretim süresine girilen süreyi gösterir. |
| 37 | `GECISSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan geçiş süresine girilen süreyi gösterir. |
| 38 | `OVERLAPMIK` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan geçiş miktarına girilen miktarı gösterir. |
| 39 | `ISCILIKMAL` | TDBFLOAT | evet | `0` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki işçilik maliyetini gösterir. |
| 40 | `DIGERMAL` | TDBFLOAT | evet | `0` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki diğer maliyetleri gösterir. |
| 41 | `GENELMAL` | TDBFLOAT | evet | `0` | Genel maliyeti gösterir. |
| 42 | `ONCELIK` | TDBINTEGER | evet | `0` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında ürün ağaçlarındaki malzemeler için öncelik sırasını gösterir. |
| 43 | `PLANLAMA_ORANI` | TDBFLOAT | evet | `0` | Ürün ağacında tanımlı olan bir malzemenin ve alternatif malzemelerin oranlar bazında gereksinimi karşılaması isteniyorsa girilen oranı gösterir. |
| 44 | `ALTERNATIF_POLITIKASI_DAT` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında depolararası transfer fişi alanında seçileni gösterir. |
| 45 | `ALTERNATIF_POLITIKASI_ACF` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında ambar çıkış fişi alanında seçileni gösterir. |
| 46 | `ALTERNATIF_POLITIKASI_USK` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında üretim sonu kaydı alanında seçileni gösterir. |
| 47 | `ALTERNATIF_POLITIKASI_MRP` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında mrp alanında seçileni gösterir. |
| 48 | `SARFEDILEN_MAMUL` | varchar(35) | evet |  | Reçete bilgilerinde sarfedilen mamu kodu alanına girilen mamül kodunu gösterir. |
| 49 | `OPKODU` | TDBSTOKKOD | evet |  | MRP' de oprasyon tanımlama ekranında tanımlanan tanımlanan operasyon kodunu gösterir. |
| 50 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | Mamülün varsa yapılandırma kodunu gösterir. |
| 51 | `HAMYAPKOD` | varchar(15) | evet | `NULL` | Hammaddenin varsa yapılandıema kodunu gösterir. |
| 52 | `GECSONBILYAPKOD` | varchar(15) | evet | `NULL` | Geçerliliği sonlanmış bileşenin varsa yapılandırma kodunu gösterir. |
| 53 | `MAKINCKEYNO` | TDBINTEGER | evet |  | Makine inckey numarasını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISEMRIREC_FKEY` | `ISEMRINO` |
| FOREIGN KEY | `TBLISEMRIREC_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLISEMRIREC_FKEY3` | `ISTKODU` |
| FOREIGN KEY | `TBLISEMRIREC_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLISEMRIREC_FKMAKINE` | `INCKEYNO` |
| FOREIGN KEY | `TBLISEMRIRECFKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLISEMRIRECFKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLISEMRIRECFKEY3` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISEMRIREC_IDX_YAPKOD1` | `MAMYAPKOD+MAMUL_KODU` | Non-unique, Non-clustered |
| `TBLISEMRIREC_IDX_YAPKOD2` | `HAMYAPKOD+HAM_KODU` | Non-unique, Non-clustered |
| `TBLISEMRIREC_IND_1` | `ISEMRINO+GEC_FLAG+MAMUL_KODU+HAM_KODU+KAYIT_TARIHI+OPNO` | Unique, Non-clustered |
| `TBLISEMRIREC_IND_2` | `ISEMRINO+GEC_FLAG+MAMUL_KODU+KAYIT_TARIHI+OPNO` | Unique, Non-clustered |
| `TBLISEMRIREC_IND_5` | `HAM_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISEMRINO, MAMUL_KODU, HAM_KODU, MIKTAR, STOK_MALIYET, MIKTARSABITLE
FROM dbo.TBLISEMRIREC WITH (NOLOCK);
```
