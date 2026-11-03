---
title: Sürümler ve indirme
description: Netsis ERP setlerinin Logo indirme sunucusundaki yeri, sürüm numaralandırması, güncel setler, tam set klasör yapısı ve NetOpenX dosyalarının yeri.
---

# Sürümler ve indirme

Logo, Netsis ERP kurulum setlerini ve yamalarını herkese açık indirme sunucusunda yayınlar:

- **Web arayüzü:** [download.logo.com.tr/#/Windows/NETSISERP/](https://download.logo.com.tr/#/Windows/NETSISERP/)
- **Doğrudan dosya adresi:** `https://download.logo.com.tr/Windows/NETSISERP/<dosya>` (ör. [`9_0_72_5.rar`](https://download.logo.com.tr/Windows/NETSISERP/9_0_72_5.rar)).
- **Makine okunur liste:** [`files.json`](https://download.logo.com.tr/Windows/NETSISERP/files.json). Her set için sürüm, dosya yolu, boyut (KB), yayın tarihi (`gg/aa/yyyy`) ve sürüm notu bağlantısı içerir.

Ayrıntılı listeler:

- [Tüm sürümler](/surumler/tum-surumler/): 4.0'dan bugüne her set ve yama, tarih ve indirme bağlantısıyla. Netsis HR setleri de burada.
- [Yama içerikleri](/surumler/yama-icerikleri/): güncel yamaların hangi dosyaları değiştirdiği, NetOpenX'i güncelleyen yamalar.

## Sürüm numarası

Sürümler `9.0.<set>.<yama>` biçimindedir. Dosya adlarında noktalar alt çizgiye döner: `9.0.72.3` → `9_0_72_3.rar`.

| Parça | Anlamı |
|-------|--------|
| `9.0` | Ana sürüm. Eski ana sürümler 4.0, 5.0, 7.0, 8.0'dır. |
| `<set>` | Set numarası. Her yeni set yeni özellikler ve veritabanı değişiklikleri getirir. |
| `<yama>` | `0` tam set demektir. `1` ve sonrası o setin yamalarıdır (hotfix). |

- **Tam set** (`9_0_72_0.rar`, yaklaşık 4 GB) kurulum için gereken her şeyi içerir.
- **Yama** (`9_0_72_3.rar`, genellikle 20–700 MB) yalnızca değişen dosyaları içerir. Aynı setin tam sürümü kurulu olmalıdır. Bir yamanın önceki yamaları içerip içermediğini sürüm notundan kontrol edin.
- Logo birden fazla seti aynı anda destekler. Örneğin 2026 Eylül'ünde `9.0.70` ve `9.0.72` hatları için aynı gün yama çıktı.
- Eski setler sunucunun `Archive/` klasörüne taşınır.

## Güncel setler

Liste 2026-11-03 tarihinde alındı.

| Hat | Tam set | Son yama | Son yama tarihi |
|-----|---------|----------|-----------------|
| 9.0.72 | `9.0.72.0` (2026-07-06) | `9.0.72.5` | 2026-09-25 |
| 9.0.70 | `9.0.70.0` (2026-02-23) | `9.0.70.11` | 2026-09-25 |
| 9.0.66 | `9.0.66.0` (2025-09-15) | `9.0.66.11` | 2026-04-16 |

Sürüm notları: [Logo portal – NETSIS ERP yama duyuruları](https://portal.logo.com.tr/document/release-announcements-patch?p=NETSIS-ERP).

## Kurulumu kendi aracınızla takip etmek

`files.json` küçük bir dosyadır. Yeni bir yama çıkıp çıkmadığını kontrol eden bir betik yazmak için uygundur:

```js
const res = await fetch('https://download.logo.com.tr/Windows/NETSISERP/files.json');
const { FileRootPath, Files } = JSON.parse((await res.text()).replace(/^\uFEFF/, '')); // dosya BOM ile başlar
const key = v => v.split('.').map(n => n.padStart(4, '0')).join('.');
const latest = Files.filter(f => f.FileVersion.startsWith('9.0.72.'))
  .sort((a, b) => key(b.FileVersion).localeCompare(key(a.FileVersion)))[0];
console.log(latest.FileVersion, latest.ReleaseDate, FileRootPath + latest.FilePath);
```

- Dosya UTF-8 BOM ile başlar. `JSON.parse` öncesi BOM'u atın.
- Liste sürüm sırasına göre değil, kabaca yayın sırasına göre dizilidir. Sürümü sayısal olarak karşılaştırın (`9.0.70.10` > `9.0.70.9`).
- `ReleaseDate` `gg/aa/yyyy` biçimindedir. Bazı eski kayıtlarda `DocumentURL` yoktur.
- Sunucudaki `Archive/` klasöründe listede geçmeyen birkaç dosya da vardır ([Tüm sürümler](/surumler/tum-surumler/#listede-olmayan-arsiv-dosyalari)).

## Tam set klasör yapısı

`9_0_72_0` setinin açık klasörüne göre. Kurulumdan sonra çoğu klasör Netsis kurulum dizininde (ör. `C:\NETSIS\`) aynı adla yer alır.

| Klasör | Dosya | İçerik |
|--------|------:|--------|
| `TemelSet` | 621 | Ana modül DLL'leri (`MUHASEBE.dll` vb.), **`NetOpenX50.dll`**, e-fatura konsolu, `XSLT`, `xsd`, `TUIK`, `OnlineBankacilik`, `OzelDLL`, `OzelPrg` alt klasörleri |
| `EXEFILES` | 25 | Lisans türüne göre çalıştırılabilir dosyalar: `Enterprise9`, `Standard9`, `Entegre9`, `Netlite9`. Her birinde `Ephesus.exe`, `NDI.exe`, `NETDEMIR.exe`, `NETPER.exe` ve web sürümleri |
| `Ortak` | 80 | Modüllerin ortak kullandığı DLL ve OCX'ler (döviz, e-posta, dizayn, NDI çalıştırıcısı, kullanıcı yönetimi) |
| `NetTLB` | 26 | COM tip kütüphaneleri (`.tlb`): `NetsisCOMLibrary50`, `NetsisDizayn50`, `NetsisEdefter`, `NetsisKosul50` vb. |
| `Kurulum` | 41 | Ek kurulumlar: **`NetsisNoxRestSetup.exe`** (NetOpenX REST), `NetsisMobileRestServiceSetup.exe`, `EFatura/EFaturaSetup.exe`, `EntegratorServisSetup.exe`, `SsoSetup.exe`, `NetsisAISvcSetup.msi`, DYS ve IDM ajanları, e-reçete betikleri, yardımcılar (OLE DB sürücüsü, WebView2, Access Database Engine) |
| `Servis` | 24 | Sunucu tarafı araçlar: `DBUpdate.exe`, `NetSrv90.exe`, `NETJOB.exe`, `KurGuncelle.exe`, `NetUpdate.exe`, e-fatura servis araçları, Redis |
| `DBUPDATE` | 13 | Veritabanı güncelleme betikleri (`NetDBMas`, `NetDBTra`, `CMas1`, `CTra1`) ve `NetFKey.Dat` |
| `NetFile` | 8 | Netsis Data Inspector (NDI) API ve tasarım DLL'leri (`NDIAPIX50.dll`, `NDIDesign.dll`) |
| `Diller` | 966 | Dil kaynak DLL'leri (`MUHTRK.dll`, `MUHING.dll`, ... ; x64 alt klasörü) |
| `Personel` | 15 | Personel / bordro modülü |
| `Demirbas` | 8 | Demirbaş modülü |
| `DocPlace` | 421 | Doküman yönetimi (istemci, sunucu, REST servisi) |
| `VUI` | 469 | Web arayüzü sunucusu (32/64 bit ikililer, sertifikalar) |
| `web` | 328 | Web istemci betikleri ve stilleri |
| `Agent` | 16 | Netsis Agent servisi (`NAF.Services.Agent.exe`) |
| `CokluUlus` | 18 | Çoklu ülke (ör. Azerbaycan) yazı tipleri ve ayarları |
| `NavSmart`, `Sso`, `Client`, `Temalar`, `Yardim`, `VTGuvenlik` | — | Akıllı menü, tek oturum açma, istemci OCX'i, temalar, yardım dosyaları (`.chm`), veritabanı güvenliği |

## NetOpenX ile ilgili dosyalar

| Dosya | Setteki yeri | Not |
|-------|--------------|-----|
| `NetOpenX50.dll` | `TemelSet/` | COM kütüphanesi. Kurulumdan sonra register edilmelidir: [NetOpenX kurulum](/netopenx/). |
| `NetsisNoxRestSetup.exe` | `Kurulum/` | NetOpenX REST servisinin kurulumu: [REST kurulum](/rest/kurulum/). |
| `*.tlb` | `NetTLB/` | Diğer Netsis COM kütüphanelerinin tip bilgisi (dizayn, koşul, e-defter). |
| `NDIAPIX50.dll` | `NetFile/` | Netsis Data Inspector API'si. |

Çoğu yama `NetOpenX50.dll`'i ve REST kurulumunu da günceller. Hangi yamanın bunlara dokunduğu [Yama içerikleri](/surumler/yama-icerikleri/#netopenx-ve-rest-i-guncelleyen-yamalar) sayfasında.

## Entegrasyon geliştiricileri için yama kontrol listesi

1. Sürüm notunu okuyun; veritabanı değişikliği varsa [şema](/veritabani/) sayfalarındaki kolonlar sizin sürümünüzde farklı olabilir.
2. Yama `NetOpenX50.dll` içeriyorsa DLL'i yeniden register edin. Interop DLL'ini (`Interop.NetOpenX50.dll`) yeniden üretmek gerekebilir; uygulamanızı yeniden derleyip test edin.
3. Yama `NetsisNoxRestSetup.exe` içeriyorsa REST servisini güncelleyin ve servisin yeniden başladığını doğrulayın.
4. Uygulamanızın kullandığı Netsis sürümünü kayıt altına alın. Hata bildirirken sürümü (`9.0.72.3` gibi) belirtin.

> Kurulum dosyaları Logo Yazılım'a aittir ve Netsis lisansıyla kullanılır. Bu site dosyaları barındırmaz, yalnızca Logo'nun sunucusuna bağlantı verir.
