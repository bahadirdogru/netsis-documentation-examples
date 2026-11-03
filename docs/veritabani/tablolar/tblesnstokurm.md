---
title: TBLESNSTOKURM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnstokurm/
---

# TBLESNSTOKURM

> ÜRETİM>KAYIT>SÜPER REÇETE KAYDI EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 59
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Reçetesi oluştutulacak mamul/yarı mamulü gösterir. |
| 3 | `HAM_KODU` | TDBSTOKKOD | hayır |  | Mamülün ya da yarı mamülün reçetesinde bulunan yarı mamul ya da bileşeni gösterir. |
| 4 | `MIKTAR` | TDBFLOAT | evet | `-1` | Bir birim mamül ya da yarımamülün üretimi için ne miktarda yarı mamül ya da bileşen gerektiğini gösterir. |
| 5 | `STOK_MALIYET` | char(1) | evet | `S` | Reçete bilgileri-2 sekmesinde bileşen bilgileri alanında stok seçili ise 'S', maliyet seçili ise 'M' değerini gösterir. |
| 6 | `MIKTARSABITLE` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde bileşen bilgileri alanında miktar sabitle parametresini gösterir. |
| 7 | `KAYIT_TARIHI` | TDBDATETIME | evet |  | Üretim reçetelerinin kayıt tarihini gösterir. |
| 8 | `GECERLILIK_TARIHI` | TDBDATETIME | evet |  | Üzerinde bulunulan bileşenin belli bir süre sonra başka bir malzeme ile değiştirilmesi planlanıyorsa, değişiklik tarihini gösterir. |
| 9 | `GEC_SON_BILESEN` | TDBSTOKKOD | evet |  | Reçetedeki herhangi bir bileşenin, belli bir süre sonrasında hangi malzeme ile değiştirileceğini gösterir. |
| 10 | `GEC_SON_MIKTAR` | TDBFLOAT | evet | `0` | Bileşenin miktarsal değişikliğini gösterir. |
| 11 | `GEC_FLAG` | TDBSMALLINT | hayır | `0` | Geçerlilik olup olmadığını belirleyen sahadır. |
| 12 | `BASLANGIC_TARIHI` | TDBDATETIME | evet | `getdate()` | Malzeme gereksinim planlama çalıştırıldığında sistem tarih bilgisini gösterir. Planlama sırasında stok, sipariş, iş emri bakiyeleri kontrol edilirken bu tarih baz alınır. |
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
| 27 | `SETNO` | varchar(25) | evet | `0` | Reçete bilgileri-2 sekmesinde geçerlilik bilgileri alanındaki revizyon numarasını gösterir. |
| 28 | `GEC_SON_SETNO` | varchar(25) | evet | `0` | Reçete bilgileri-2 sekmesinde geçerlilik bilgileri alanındaki son revizyon numarasını gösterir. |
| 29 | `GEC_SON_DURUM` | char(1) | evet | `E` | Reçete bilgileri-2 sekmesinde geçerlilik bilgileri alanındaki son durumu gösterir. |
| 30 | `OPR_BIL` | char(1) | evet | `B` | Reçete içindeki girilenlerin operasyon mu yoksa bileşen mi olduğunu gösterir. |
| 31 | `OPNO` | varchar(8) | hayır |  | Reçeteye kaydedilen bileşen veya yarı mamül için kullanılan sıra numarasıni gösterir. |
| 32 | `ACIKLAMA` | TDBMEMO | evet |  | İlgili bileşen ya da yarımamül için reçete bazında girilen açıklamayı gösterir. |
| 33 | `OPMIK` | TDBFLOAT | evet | `-1` | MRP' de oprasyon tanımlama ekranında tanımlanan simultane tezgah miktarına girilen değeri gösterir. |
| 34 | `ISTKODU` | varchar(5) | evet |  | MRP' de oprasyon tanımlama ekranında tanımlanan operasyonun hangi iş istasyonunda yapıldığını gösterir. |
| 35 | `SETUPSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan hazırlık süresine girilen süreyi gösterir. |
| 36 | `URETSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan üretim süresine girilen süreyi gösterir. |
| 37 | `GECISSURE` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan geçiş süresine girilen süreyi gösterir. |
| 38 | `OVERLAPMIK` | TDBFLOAT | evet | `0` | MRP' de oprasyon tanımlama ekranında tanımlanan geçiş miktarına girilen miktarı gösterir. |
| 39 | `ISCILIKMAL` | TDBFLOAT | evet | `0` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki işçilik maliyetini gösterir. |
| 40 | `DIGERMAL` | TDBFLOAT | evet | `0` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki diğer maliyetleri gösterir. |
| 41 | `GENELMAL` | TDBFLOAT | evet | `0` | Genel maliyeti gösterir. |
| 42 | `OPERASYON_UAK` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki son operasyon parametresini gösterir. |
| 43 | `SON_OPERASYON` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki Ü.A dahil edilsin parametresini gösterir. |
| 44 | `ONCELIK` | TDBINTEGER | evet | `0` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında ürün ağaçlarındaki malzemeler için öncelik sırasını gösterir. |
| 45 | `PLANLAMA_ORANI` | TDBFLOAT | evet | `0` | Ürün ağacında tanımlı olan bir malzemenin ve alternatif malzemelerin oranlar bazında gereksinimi karşılaması isteniyorsa girilen oranı gösterir. |
| 46 | `ALTERNATIF_POLITIKASI_DAT` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında depolararası transfer fişi alanında seçileni gösterir. |
| 47 | `ALTERNATIF_POLITIKASI_ACF` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında ambar çıkış fişi alanında seçileni gösterir. |
| 48 | `ALTERNATIF_POLITIKASI_USK` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında üretim sonu kaydı alanında seçileni gösterir. |
| 49 | `ALTERNATIF_POLITIKASI_MRP` | char(1) | evet | `H` | Reçete bilgileri-2 sekmesinde alternatif politikalar alanında mrp alanında seçileni gösterir. |
| 50 | `SARFEDILEN_MAMUL` | TDBSTOKKOD | evet |  | Reçete bilgilerinde sarfedilen mamu kodu alanına girilen mamül kodunu gösterir. |
| 51 | `OPKODU` | TDBSTOKKOD | evet |  | MRP' de oprasyon tanımlama ekranında tanımlanan tanımlanan operasyon kodunu gösterir. |
| 52 | `SBOMSCRIPT` | TDBMEMO | evet |  | Script sekmesinde yazılan script cüölesini gösterir. |
| 53 | `MAMYAPKOD` | varchar(15) | evet | `NULL` | Mamülün varsa yapılandırma kodunu gösterir. |
| 54 | `HAMYAPKOD` | varchar(15) | evet | `NULL` | Hammaddenin varsa yapılandıema kodunu gösterir. |
| 55 | `GECSONBILYAPKOD` | varchar(15) | evet | `NULL` | Geçerliliği sonlanmış bileşenin varsa yapılandırma kodunu gösterir. |
| 56 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 57 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 58 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 59 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLESNSTOKURM_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLESNSTOKURM_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLESNSTOKURM_FKEY1` | `ISTKODU` |
| FOREIGN KEY | `TBLESNSTOKURM_FKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLESNSTOKURM_FKEY3` | `YAPKOD` |
| FOREIGN KEY | `TBLESNSTOKURM_FKEY4` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNSTOKURM_IND_1` | `GEC_FLAG+MAMUL_KODU` | Non-unique, Non-clustered |
| `TBLESNSTOKURM_IND_2` | `GEC_FLAG+HAM_KODU` | Non-unique, Non-clustered |
| `TBLESNSTOKURM_IND_3` | `GEC_FLAG+MAMUL_KODU+MAMYAPKOD+GEC_SON_BILESEN+GECSONBILYAPKOD+KAYIT_TARIHI+OPNO` | Unique, Non-clustered |
| `TBLESNSTOKURM_IND_4` | `GECERLILIK_TARIHI` | Non-unique, Non-clustered |
| `TBLESNSTOKURM_IND_5` | `GEC_FLAG+GEC_SON_BILESEN` | Non-unique, Non-clustered |
| `TBLESNSTOKURM_IND_6` | `MAMUL_KODU` | Non-unique, Non-clustered |
| `TBLESNSTOKURM_PKEY` | `INCKEYNO` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MAMUL_KODU, HAM_KODU, MIKTAR, STOK_MALIYET, MIKTARSABITLE
FROM dbo.TBLESNSTOKURM WITH (NOLOCK);
```
