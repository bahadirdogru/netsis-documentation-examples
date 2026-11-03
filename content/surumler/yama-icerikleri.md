---
title: Yama içerikleri
description: Güncel Netsis ERP yamalarının hangi dosyaları değiştirdiği; NetOpenX50.dll ve NetOpenX REST kurulumunu güncelleyen yamalar.
---

# Yama içerikleri

Sunucu, güncel setlerin içeriğini `.rar` dosyasının yanında açık klasör olarak da tutar. Bu sayfa her yamanın hangi dosyaları getirdiğini listeler. Klasör yolları kurulum dizinine göredir (ör. `TemelSet/NetOpenX50.dll` → `C:\NETSIS\TemelSet\NetOpenX50.dll` gibi). Liste 2026-11-03 tarihinde alındı.

## NetOpenX ve REST'i güncelleyen yamalar

Entegrasyon yazıyorsanız önemli olan iki dosya `TemelSet/NetOpenX50.dll` (COM) ve `Kurulum/NetsisNoxRestSetup.exe` (REST servisi). Bir yamada bu dosyalar varsa NetOpenX davranışı değişmiş olabilir; uygulamanızı yamadan sonra yeniden test edin.

| Yama | Tarih | NetOpenX50.dll | NetsisNoxRestSetup.exe |
|---|---|---|---|
| [`9.0.72.5`](#9-0-72-5) | 2026-09-25 | var | var |
| [`9.0.72.3`](#9-0-72-3) | 2026-09-10 | var | var |
| [`9.0.72.2`](#9-0-72-2) | 2026-07-31 | var | var |
| [`9.0.72.1`](#9-0-72-1) | 2026-07-17 | var | — |
| [`9.0.70.11`](#9-0-70-11) | 2026-09-25 | var | var |
| [`9.0.70.10`](#9-0-70-10) | 2026-09-10 | var | var |
| [`9.0.70.9`](#9-0-70-9) | 2026-07-31 | var | var |
| [`9.0.70.7`](#9-0-70-7) | 2026-06-12 | var | var |
| [`9.0.70.5`](#9-0-70-5) | 2026-05-15 | var | var |
| [`9.0.70.4`](#9-0-70-4) | 2026-05-07 | var | var |
| [`9.0.70.2`](#9-0-70-2) | 2026-03-18 | var | var |
| [`9.0.70.1`](#9-0-70-1) | 2026-03-09 | var | var |
| [`9.0.66.9`](#9-0-66-9) | 2026-03-09 | var | var |
| [`9.0.66.7`](#9-0-66-7) | 2026-02-03 | var | var |
| [`9.0.66.6`](#9-0-66-6) | 2026-01-30 | var | var |
| [`9.0.66.5`](#9-0-66-5) | 2025-12-26 | var | var |
| [`9.0.66.4`](#9-0-66-4) | 2025-12-12 | var | var |
| [`9.0.66.1`](#9-0-66-1) | 2025-09-30 | var | var |

Aşağıda listelenen yamalardan bu tabloda olmayanlar bu iki dosyaya dokunmaz. Açık klasörü olmayan eski yamaların içeriği bu sayfada yok.

## 9.0.72.5

2026-09-25 · 37 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_72_5/) · [9_0_72_5.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_5.rar)

| Klasör | Dosyalar |
|---|---|
| `Demirbas` | `DEMIRBAS.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Ortak` | `DOVIZ.dll`, `DizaynM.dll`, `KULLANIC.dll`, `LOG.dll`, `WorkFlow.dll` |
| `TemelSet` | `BCEK.dll`, `Bsen.dll`, `DEVIR.dll`, `DINDEPO.dll`, `DisTicaret.dll`, `ENTEGRE.dll`, `KASA.dll`, `Kargo.dll`, `MALIYETM.dll`, `MUHASEBE.dll`, `MakBkm.dll`, `NetOpenX50.dll` ★, `POS.dll`, `RAPOR.dll`, `STOK.dll`, `Teklif.dll`, `UretAK.dll`, `banka.dll`, `cari.dll`, `dagitim.dll`, `dekont.dll`, `fatura.dll`, `kantar.dll`, `kkont.dll`, `mcek.dll`, `mrp.dll`, `msen.dll`, `mustf.dll`, `uretim.dll`, `yardimci.dll` |

## 9.0.72.4

2026-09-21 · 10 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_72_4/) · [9_0_72_4.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_4.rar)

| Klasör | Dosyalar |
|---|---|
| `Personel` | `LogoBes.exe`, `NikOpenX50.dll`, `PENTEG.dll`, `PERRAPOR.dll`, `PERSONEL.dll`, `PYardim.dll`, `PerDizayn.dll`, `PerExcelGr.dll`, `PerNNR.dll`, `PerNetGr.dll` |

## 9.0.72.3

2026-09-10 · 41 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_72_3/) · [9_0_72_3.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_3.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `KASA.dll`, `NetOpenX50.dll` ★, `STOK.dll`, `Teklif.dll`, `cari.dll`, `dekont.dll`, `dizayn.dll`, `fatura.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.72.2

2026-07-31 · 11 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_72_2/) · [9_0_72_2.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_2.rar)

| Klasör | Dosyalar |
|---|---|
| `Demirbas` | `DEMIRBAS.dll` |
| `Diller` | `MUHALM.dll`, `MUHARB.dll`, `MUHAZR.dll`, `MUHFRS.dll`, `MUHING.dll`, `MUHRUS.dll`, `MUHTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `MUHASEBE.dll`, `NetOpenX50.dll` ★ |

## 9.0.72.1

2026-07-17 · 12 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_72_1/) · [9_0_72_1.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_1.rar)

| Klasör | Dosyalar |
|---|---|
| `Ortak` | `WorkFlow.dll` |
| `TemelSet` | `DisTicaret.dll`, `KASA.dll`, `MUHASEBE.dll`, `NetOpenX50.dll` ★, `Teklif.dll`, `cari.dll`, `dekont.dll`, `dizayn.dll`, `fatura.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.70.11

2026-09-25 · 5 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_11/) · [9_0_70_11.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_11.rar)

| Klasör | Dosyalar |
|---|---|
| `Demirbas` | `DEMIRBAS.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `MUHASEBE.dll`, `NetOpenX50.dll` ★, `fatura.dll` |

## 9.0.70.10

2026-09-10 · 40 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_10/) · [9_0_70_10.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_10.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `KASA.dll`, `NetOpenX50.dll` ★, `Teklif.dll`, `cari.dll`, `dekont.dll`, `dizayn.dll`, `fatura.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.70.9

2026-07-31 · 10 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_9/) · [9_0_70_9.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_9.rar)

| Klasör | Dosyalar |
|---|---|
| `Diller` | `MUHALM.dll`, `MUHARB.dll`, `MUHAZR.dll`, `MUHFRS.dll`, `MUHING.dll`, `MUHRUS.dll`, `MUHTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `MUHASEBE.dll`, `NetOpenX50.dll` ★ |

## 9.0.70.8

2026-07-17 · 4 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_8/) · [9_0_70_8.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_8.rar)

| Klasör | Dosyalar |
|---|---|
| `TemelSet` | `DisTicaret.dll`, `MUHASEBE.dll`, `NetsisEDefter.dll`, `dekont.dll` |

## 9.0.70.7

2026-06-12 · 4 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_7/) · [9_0_70_7.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_7.rar)

| Klasör | Dosyalar |
|---|---|
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `MUHASEBE.dll`, `NetOpenX50.dll` ★, `NetsisEDefter.dll` |

## 9.0.70.6

2026-06-04 · 25 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_6/) · [9_0_70_6.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_6.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `MUHALM.dll`, `MUHARB.dll`, `MUHAZR.dll`, `MUHFRS.dll`, `MUHING.dll`, `MUHRUS.dll`, `MUHTRK.dll` |
| `Ortak` | `NetFKey.Dat` |
| `TemelSet` | `DisTicaret.dll`, `FATURA.dll`, `MUHASEBE.dll`, `NetsisEDefter.dll` |

## 9.0.70.5

2026-05-15 · 25 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_5/) · [9_0_70_5.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_5.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `MUHALM.dll`, `MUHARB.dll`, `MUHAZR.dll`, `MUHFRS.dll`, `MUHING.dll`, `MUHRUS.dll`, `MUHTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Ortak` | `NetFKey.Dat` |
| `TemelSet` | `MUHASEBE.dll`, `NetOpenX50.dll` ★, `NetsisEDefter.dll` |

## 9.0.70.4

2026-05-07 · 40 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_4/) · [9_0_70_4.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_4.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `NetOpenX50.dll` ★, `Teklif.dll`, `dekont.dll`, `dizayn.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.70.3

2026-04-16 · 18 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_3/) · [9_0_70_3.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_3.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Demirbas` | `DEMIRENT.dll` |
| `Ortak` | `NetFKey.Dat` |
| `TemelSet` | `EBynGndr.dll`, `MUHASEBE.dll`, `beyanres.dll` |

## 9.0.70.2

2026-03-18 · 6 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_2/) · [9_0_70_2.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_2.rar)

| Klasör | Dosyalar |
|---|---|
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `EBynGndr.dll`, `FATURA.dll`, `MUHASEBE.dll`, `NetOpenX50.dll` ★, `beyanres.dll` |

## 9.0.70.1

2026-03-09 · 35 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_70_1/) · [9_0_70_1.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_70_1.rar)

| Klasör | Dosyalar |
|---|---|
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DEKDZN.dll`, `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `KASADZN.dll`, `MALIYETM.dll`, `MALIYETMRes.dll`, `MUHASEBE.dll`, `MUHASEBERes.dll`, `MUSTDZN.dll`, `NetOpenX50.dll` ★, `NetsisEDefter.dll`, `Teklif.dll`, `barkddzn.dll`, `dekont.dll`, `dizayn.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.66.11

2026-04-16 · 17 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_11/) · [9_0_66_11.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_11.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Ortak` | `NetFKey.Dat` |
| `TemelSet` | `EBynGndr.dll`, `MUHASEBE.dll`, `beyanres.dll` |

## 9.0.66.10

2026-03-18 · 3 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_10/) · [9_0_66_10.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_10.rar)

| Klasör | Dosyalar |
|---|---|
| `TemelSet` | `EBynGndr.dll`, `MUHASEBE.dll`, `beyanres.dll` |

## 9.0.66.9

2026-03-09 · 35 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_9/) · [9_0_66_9.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_9.rar)

| Klasör | Dosyalar |
|---|---|
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DEKDZN.dll`, `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `KASADZN.dll`, `MALIYETM.dll`, `MALIYETMRes.dll`, `MUHASEBE.dll`, `MUHASEBERes.dll`, `MUSTDZN.dll`, `NetOpenX50.dll` ★, `NetsisEDefter.dll`, `Teklif.dll`, `barkddzn.dll`, `dekont.dll`, `dizayn.dll`, `kantar.dll`, `mustf.dll` |

## 9.0.66.8

2026-02-05 · 3 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_8/) · [9_0_66_8.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_8.rar)

| Klasör | Dosyalar |
|---|---|
| `Demirbas` | `DEMIRBAS.dll`, `DEMIRENT.dll` |
| `TemelSet` | `FATURA.dll` |

## 9.0.66.7

2026-02-03 · 3 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_7/) · [9_0_66_7.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_7.rar)

| Klasör | Dosyalar |
|---|---|
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `TemelSet` | `FATURA.dll`, `NetOpenX50.dll` ★ |

## 9.0.66.6

2026-01-30 · 45 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_6/) · [9_0_66_6.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_6.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Demirbas` | `DEMIRBAS.dll` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `MUHASEBE.dll`, `MUSTDZN.dll`, `NetOpenX50.dll` ★, `Teklif.dll`, `barkddzn.dll`, `dekont.dll`, `dizayn.dll`, `kantar.dll`, `mustf.dll` |
| `TemelSet/XSLT` | `general.xslt` |

## 9.0.66.5

2025-12-26 · 49 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_5/) · [9_0_66_5.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_5.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll`, `STKALM.dll`, `STKARB.dll`, `STKAZR.dll`, `STKFRS.dll`, `STKING.dll`, `STKRUS.dll`, `STKTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `DBUpdate.exe`, `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DEVIR.dll`, `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `NetOpenX50.dll` ★, `STOK.dll`, `Teklif.dll`, `dekont.dll`, `dizayn.dll`, `mustf.dll` |

## 9.0.66.4

2025-12-12 · 36 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_4/) · [9_0_66_4.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_4.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `DOVIZ.dll`, `NetFKey.Dat`, `WorkFlow.dll` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaCariUpdate.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `CARI.dll`, `DisTicaret.dll`, `EBynGndr.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `MUHASEBE.dll`, `NetOpenX50.dll` ★, `Teklif.dll`, `beyanres.dll`, `dekont.dll`, `dizayn.dll`, `mustf.dll` |

## 9.0.66.3

2025-10-13 · 1 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_3/) · [9_0_66_3.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_3.rar)

| Klasör | Dosyalar |
|---|---|
| `TemelSet` | `FATURA.dll` |

## 9.0.66.2

2025-10-03 · 58 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_2/) · [9_0_66_2.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_2.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `PERALM.dll`, `PERARB.dll`, `PERAZR.dll`, `PERFRS.dll`, `PERING.dll`, `PERRUS.dll`, `PERTRK.dll`, `PKULALM.dll`, `PKULARB.dll`, `PKULAZR.dll`, `PKULFRS.dll`, `PKULING.dll`, `PKULRUS.dll`, `PKULTRK.dll`, `PRAPALM.dll`, `PRAPARB.dll`, `PRAPAZR.dll`, `PRAPFRS.dll`, `PRAPING.dll`, `PRAPRUS.dll`, `PRAPTRK.dll`, `PYARALM.dll`, `PYARARB.dll`, `PYARAZR.dll`, `PYARFRS.dll`, `PYARING.dll`, `PYARRUS.dll`, `PYARTRK.dll` |
| `EXEFILES/Entegre9` | `NETPER.exe` |
| `EXEFILES/Enterprise9` | `NETPER.exe` |
| `EXEFILES/Netlite9` | `NETPER.exe` |
| `EXEFILES/Standard9` | `NETPER.exe` |
| `Ortak` | `NetFKey.Dat` |
| `Personel` | `LogoBes.exe`, `NikOpenX50.dll`, `PENTEG.dll`, `PERRAPOR.dll`, `PERSONEL.dll`, `PYardim.dll`, `PerDizayn.dll`, `PerExcelGr.dll`, `PerNNR.dll`, `PerNetGr.dll` |
| `TemelSet` | `DisTicaret.dll`, `FATURA.dll` |

## 9.0.66.1

2025-09-30 · 72 dosya · [klasörü aç](https://download.logo.com.tr/#/Windows/NETSISERP/9_0_66_1/) · [9_0_66_1.rar](https://download.logo.com.tr/Windows/NETSISERP/9_0_66_1.rar)

| Klasör | Dosyalar |
|---|---|
| `DBUPDATE` | `CMas1.M80`, `CMas1.O80`, `CMas1.P80`, `CTra1.M80`, `CTra1.O80`, `CTra1.P80`, `NetDBMas.M80`, `NetDBMas.O80`, `NetDBMas.P80`, `NetDBTra.M80`, `NetDBTra.O80`, `NetDBTra.P80`, `NetFKey.Dat` |
| `Diller` | `FATALM.dll`, `FATARB.dll`, `FATAZR.dll`, `FATFRS.dll`, `FATING.dll`, `FATRUS.dll`, `FATTRK.dll`, `NETALM.dll`, `NETARB.dll`, `NETAZR.dll`, `NETFRS.dll`, `NETING.dll`, `NETRUS.dll`, `NETTRK.dll`, `PERALM.dll`, `PERARB.dll`, `PERAZR.dll`, `PERFRS.dll`, `PERING.dll`, `PERRUS.dll`, `PERTRK.dll`, `PKULALM.dll`, `PKULARB.dll`, `PKULAZR.dll`, `PKULFRS.dll`, `PKULING.dll`, `PKULRUS.dll`, `PKULTRK.dll`, `PRAPALM.dll`, `PRAPARB.dll`, `PRAPAZR.dll`, `PRAPFRS.dll`, `PRAPING.dll`, `PRAPRUS.dll`, `PRAPTRK.dll`, `PYARALM.dll`, `PYARARB.dll`, `PYARAZR.dll`, `PYARFRS.dll`, `PYARING.dll`, `PYARRUS.dll`, `PYARTRK.dll` |
| `Kurulum` | `NetsisNoxRestSetup.exe` ★ |
| `Kurulum/EFatura` | `EFaturaSetup.exe` |
| `Kurulum/EFatura/Yedek` | `Netsis.EFatura.WebService.dll` |
| `Ortak` | `NetFKey.Dat` |
| `Servis` | `EFaturaAyarlar.exe`, `EFaturaDbConsole.exe` |
| `TemelSet` | `DisTicaret.dll`, `EFatura.dll`, `EFaturaConsole.exe`, `FATURA.dll`, `KASA.dll`, `NetOpenX50.dll` ★, `NetsisEDefter.dll`, `Teklif.dll`, `dekont.dll`, `dizayn.dll`, `mrp.dll` |

★ NetOpenX COM ya da REST dosyası.
