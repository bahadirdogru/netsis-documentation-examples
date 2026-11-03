---
title: TBLSTOKURMALT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokurmalt/
---

# TBLSTOKURMALT

> ÜRETİM>KAYIT>ALTERNATİF MALZEME PLANLAMA EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 46
- **Birincil anahtar:** `STOK_KODU`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `OPR_BIL` | char(1) | evet | `B` | Alternatif tanımı yapılacak kaydın reçetedeki bir bileşen mi yoksa operasyon mu olduğunu gösterir. Bileşen seçili ise 'B', operasyon seçili ise 'O' değerini gösterir. |
| 2 | `OPNO` | varchar(8) | evet |  | Reçetede seçilen bileşenini, reçetedeki sıra numarasını gösterir. |
| 3 | `BILESENKODU` | TDBSTOKKOD | hayır |  | Alternatif tanımı yapılacak bileşen/operasyon kodunu gösterir. |
| 4 | `ALTKODU` | TDBSTOKKOD | hayır |  | Seçilen bileşenin, alternatif kodunu gösterir. |
| 5 | `MAMULKODU` | TDBSTOKKOD | evet |  | Alternatif tanımı yapılacak bileşen/operasyona ait mamul/yarımamul kodunu gösterir. |
| 6 | `PLANLAMA_ORANI` | TDBFLOAT | evet | `0` | Mamulün üretimi sırasında, yarımamulden ne kadar kullanılacağı gösteren oranı gösterir. |
| 7 | `ONCELIK` | TDBINTEGER | evet | `0` | Bir bileşen için birden fazla alternatif malzeme tanımlandığındaki önceliklerini gösterir. |
| 8 | `MIKTAR_KAT_SABIT` | char(1) | evet | `S` | Alternatif malzeme miktarı için reçetedeki bileşen miktarının belli bir katı ya da sabit bir miktar olup olmadığın gösterir. Sabit seçili ise 'S', kat seçili ise 'K' değerini gösterir. |
| 9 | `MIKTAR` | TDBFLOAT | evet | `0` | Alternatif malzemeye ait miktar/kat bilgisini gösterir. |
| 10 | `FIREMIKTAR` | TDBFLOAT | evet | `0` | Alternatif malzemeye ait fire miktarını gösterir. |
| 11 | `ACIKLAMA` | TDBMEMO | evet |  | Alternatif malzemeye ait açıklama bilgisini gösterir. |
| 12 | `OPMIK` | TDBFLOAT | evet | `0` | Mrpde operasyon tanımlamada tanımlanan simultane tezgah miktarına girilen değeri gösterir. |
| 13 | `ISTKODU` | varchar(5) | evet |  | Mrpde operasyon tanımlamada tanımlanan operasyonun hangi iş istasyonunda yapıldığını gösterir. |
| 14 | `SURE_KAT_SABIT` | char(1) | evet | `S` | Maliyet tanımı-2 sekmesinde süre alanında kat seçili ise 'K', sabit seçili ise 'S' değerini gösterir. |
| 15 | `SETUPSURE` | TDBFLOAT | evet | `0` | Mrpde operasyon tanımlamada tanımlanan hazırlık süresine girilen süreyi gösterir. |
| 16 | `URETSURE` | TDBFLOAT | evet | `0` | Mrpde operasyon tanımlamada üretim süresine girilen süreyi gösterir. |
| 17 | `GECISSURE` | TDBFLOAT | evet | `0` | Mrpde operasyon tanımlamada geçiş süresine girilen süreyi gösterir. |
| 18 | `GECISMIK` | TDBFLOAT | evet | `0` | Maliyet tanımı-2 sekmesinde geçiş miktarını gösterir. |
| 19 | `MALIYET_KAT_SABIT` | char(1) | evet | `S` | Maliyet tanımı-2 sekmesinde maliyet alanında kat seçili ise 'K', sabit seçili ise 'S' değerini gösterir. |
| 20 | `ISCILIKMAL` | TDBFLOAT | evet | `0` | Reçete tanımlama Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki işçilik maliyetini gösterir. |
| 21 | `DIGERMAL` | TDBFLOAT | evet | `0` | Reçete tanımlama Reçete bilgileri-2 sekmesinde operasyon bilgileri alanındaki diğer maliyetleri gösterir. |
| 22 | `GENELMAL` | TDBFLOAT | evet | `0` | Reçete tanımlama Reçete bilgileri-2 sekmesinde genel maliyeti gösterir. |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK7` | TDBFLOAT | evet |  | Alternatif malzemeye ait sabit fire miktarını gösterir. |
| 30 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `D_YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `D_YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `V_YEDEK15` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `V_YEDEK16` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 43 | `MAMYAPKOD` | varchar(15) | evet | `null` | Mamülün yapılandırma kodunu gösterir. |
| 44 | `BILYAPKOD` | varchar(15) | evet | `null` | Bileşenin yapılandırma kodunu gösterir. |
| 45 | `ALTYAPKOD` | varchar(15) | evet | `null` | Mamülün ya da yarı mamülün reçetesindeki bileşenin alternatifi için yapılandırma kodunu gösterir. |
| 46 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKURMALT_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKURMALT_FKEY1` | `ISTKODU` |
| FOREIGN KEY | `TBLSTOKURMALT_FKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLSTOKURMALT_FKEY3` | `YAPKOD` |
| FOREIGN KEY | `TBLSTOKURMALT_FKEY4` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKURMALT_IND_1` | `BILESENKODU+ALTKODU+MAMULKODU+ONCELIK` | Unique, Non-clustered |
| `TBLSTOKURMALT_IND2` | `INCKEYNO` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 OPR_BIL, OPNO, BILESENKODU, ALTKODU, MAMULKODU, PLANLAMA_ORANI
FROM dbo.TBLSTOKURMALT WITH (NOLOCK);
```
