---
title: Logo e-devlet araçları
description: Logo indirme sunucusundaki Windows/TOOLS klasörü; e-fatura, e-arşiv, e-defter araçları, şema ve kod dosyaları ile hangisinin Netsis'le ilgili olduğu.
---

# Logo e-devlet araçları

Logo'nun indirme sunucusunda Netsis setlerinin yanında bir de [`Windows/TOOLS`](https://download.logo.com.tr/#/Windows/TOOLS/) klasörü vardır. Bu klasörde e-fatura, e-arşiv, e-defter ve banka entegrasyonu için yardımcı araçlar, şema dosyaları ve dokümanlar bulunur.

Klasördeki araçların çoğu **Logo Tiger / Go ailesi** (Logo Connect, `LBSConnLib.dll`) içindir; Netsis bu araçları kullanmaz. Netsis için asıl işe yarayanlar GİB kod listeleri, UBL-TR şema dosyaları ve Netsis'e özel banka paketidir. Bu sayfa hangi dosyanın ne olduğunu ve Netsis'le ilgisini özetler.

- Doğrudan dosya adresi: `https://download.logo.com.tr/Windows/TOOLS/<yol>`
- Klasör ağacı (83 dosya, 42 klasör) 2026-11-04 tarihinde alındı. Tarihler dosyanın sunucuya yüklendiği gündür.

## Netsis için işe yarayanlar

| Dosya | Tarih | Boyut | Ne işe yarar |
|-------|-------|------:|--------------|
| [`Tevkifat_KdvMuafiyet_Xml/VatDeducts.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_KdvMuafiyet_Xml/VatDeducts.xml), [`VatExcepts.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_KdvMuafiyet_Xml/VatExcepts.xml) | 2021-12-02 | 4 KB, 15 KB | KDV tevkifat kodları/oranları ve KDV istisna kodları. Tablo hâli: [E-belge kod listeleri](/logo-araclari/e-belge-kodlari/) |
| [`E-Fatura/PayMeansCodes.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/E-Fatura/PayMeansCodes.xml) | 2015-03-01 | 13 KB | E-fatura ödeme şekli kodları. Tablo hâli: [E-belge kod listeleri](/logo-araclari/e-belge-kodlari/#odeme-sekli-kodlari) |
| [`E_FaturaServer/XSD.zip`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/E_FaturaServer/XSD.zip) | 2017-07-06 | 129 KB | UBL-TR şema dosyaları (`Package.xsd`, `Manifest.xsd`, `BasicTypes.xsd`, ISO/UNECE kod listeleri) ve `EInvoiceSchematron.xml`. Kendi ürettiğiniz e-fatura XML'ini doğrulamak için |
| [`E_FaturaServer/EInvoiceSchematron.rar`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/E_FaturaServer/EInvoiceSchematron.rar) | 2026-03-10 | 24 KB | E-fatura schematron kuralları (`EInvoiceSchematron.xml`). Klasördeki en güncel doğrulama dosyası; bir önceki sürüm `EInvoiceSchematron_old.rar` |
| [`LogoConnect_11_11_SematronDosyalari/Schematron_11_11.zip`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/LogoConnect_11_11_SematronDosyalari/Schematron_11_11.zip) | 2022-12-31 | 207 KB | E-fatura ve e-arşiv schematron'u, Logo Connect'in kendi biçiminde (`.ldxConfig`) |
| [`EDEFTER/xsd.rar`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/EDEFTER/xsd.rar) | 2019-04-25 | 71 KB | E-defter XBRL GL şemaları (`gl-cor`, `gl-bus`, `gl-muc` …) |
| [`eLogoBanking/eLogoBankingNetsis.zip`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/eLogoBanking/eLogoBankingNetsis.zip) | 2026-06-10 | 94.6 MB | eLogo Banking'in **Netsis sürümü** (adından). Yanındaki `eLogoBanking.zip` diğer Logo ürünleri içindir. İçeriği bu sitede incelenmedi |
| [`E-Fatura_Donusum_Sablonlari.xlsx`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/E-Fatura_Donusum_Sablonlari.xlsx) | 2014-04-02 | 90 KB | Büyük alıcıların (Migros, Tofaş, Renault, Metro, A101, BİM, ŞOK, Arçelik vb. 29 firma) e-faturada zorunlu tuttuğu ek alanlar: alan adı, açıklama, ERP karşılığı ve UBL-TR yolu (ör. sipariş no → `Invoice/OrderReference/ID`). Netsis'ten bu firmalara fatura keserken hangi bilginin nereye gitmesi gerektiğini gösterir. 2014 tarihli; firmaların güncel kurallarını kontrol edin |

## Genel e-belge dokümanları

Üründen bağımsız, süreç anlatan dokümanlar. Çoğu 2013–2019 tarihlidir; mevzuat değişmiş olabilir.

| Dosya | Tarih | Konu |
|-------|-------|------|
| [`E-Fatura/e-Fatura.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/E-Fatura/e-Fatura.pdf) | 2013-08-16 | E-fatura genel tanıtım (aynı dosya `Is_ortaklari_e_devlet_uygulamalari/` altında da var) |
| [`E-Fatura/e-Logo_Ozel_Entegratorluk_Portali_Kilavuzu.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/E-Fatura/e-Logo_Ozel_Entegratorluk_Portali_Kilavuzu.pdf) | 2014-03-07 | eLogo özel entegratör portalı kullanım kılavuzu |
| [`Earşiv Raporlarının Günlük Gönderim Süreci Hakkında.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Ear%C5%9Fiv%20Raporlar%C4%B1n%C4%B1n%20G%C3%BCnl%C3%BCk%20G%C3%B6nderim%20S%C3%BCreci%20Hakk%C4%B1nda.pdf) | 2018-12-20 | E-arşiv raporlarının GİB'e günlük gönderimi |
| [`EARSIVMAILING/e-Arşiv Mailing Tasarımı Oluşturma.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/EARSIVMAILING/e-Ar%C5%9Fiv%20Mailing%20Tasar%C4%B1m%C4%B1%20Olu%C5%9Fturma.pdf) | 2019-12-16 | E-arşiv fatura e-postası tasarımı (eLogo portalı) |
| [`e-Mustahsil_Makbuzu_Dokumani.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/e-Mustahsil_Makbuzu_Dokumani/e-Mustahsil_Makbuzu_Dokumani.pdf) | 2019-02-11 | E-müstahsil makbuzu |
| [`SIPARIS PORTALI/eLogo_Siparis_Portali.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/SIPARIS%20PORTALI/eLogo_Siparis_Portali.pdf) (+ `.mp4`) | 2019-01-18 | eLogo sipariş portalı |
| [`EDEFTER/Logo_E-Defter_Kontrol_Raporu.pdf`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/EDEFTER/Logo_E-Defter_Kontrol_Raporu.pdf) | 2015-06-26 | E-defter kontrol raporu (Logo ürünleri için; rapor dosyası `.LRG`) |
| [`E-Defter.pdf`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/E-Defter.pdf), [`Logoda_e-Fatura.pptx`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/Logoda_e-Fatura.pptx) | 2013 | İş ortakları için e-defter ve e-fatura tanıtım sunumları |
| [`IP_Bilgileri_Guncelleme.pdf`](https://download.logo.com.tr/Windows/TOOLS/Is_ortaklari_e_devlet_uygulamalari/IP_Bilgileri_Guncelleme.pdf) | 2018-11-14 | eLogo servis IP adreslerinin güncellenmesi (güvenlik duvarı izinleri için) |
| `E_FaturaServer/Dokumanlar/` (7 dosya) | 2013–2015 | Logo e-Fatura Sunucusu gereksinimleri, kurulumu ve test işlemleri |

## Logo Tiger / Go ürünleri için olanlar

Netsis'te kullanılmaz; ne olduklarını tanımak için listelenmiştir.

| Klasör / dosya | Ne |
|----------------|----|
| `LBSConnlib.dll_*`, `*_LBSConnLib.rar`, `2.94.00.01-LBSConnLib.dll/` | Logo Connect bağlantı kütüphanesi sürümleri (Tiger/Go e-devlet modülü) |
| `LogoConnect_*`, `TigerPlus_LogoConnect 2.41.00.00 exe.rar`, `LogoConnect_EFATURASIGN/` | Logo Connect yamaları, raporları, kaynak dosyaları ve imza bileşeni |
| `Diyalogo.dll/` | E-mutabakat modülü bileşeni (Logo ERP 2.86 öncesi/sonrası için ayrı paketler) |
| `MUKELLEF_KONTROL/` | Mükellef kontrol aracı (`Mukellef.exe`) ve güncelleme notu (PDF) |
| `EDEFTER/2.56_e-defter`, `2.57_e-defter`, `LbsEDefterWS/`, `e-Defter_Imzalama/` | Logo e-defter uygulaması ve imzalama aracı |
| `E_FaturaServer/Efatura_Server_*.rar`, `eFaturaServer_1.70.00.zip` | Logo e-Fatura Sunucusu (doğrudan GİB entegrasyonu yapan kurumlar için). En yenisi 1.70.00 (2025-05-06) |
| `GARANTILOGO.DLL/`, `GARANTILOGO.DLL_NEW/` | Garanti bankası entegrasyon DLL'i (adından) |
| `ISBASI_MM/` | İşbaşı mali müşavir portalından Luca'ya aktarım |
| `TOPLU VERI INDIR/`, `Connect_Script_Egitim_Materyalleri.rar` | Toplu veri indirme aracı, Logo Connect betik eğitimi |
| `Logo_JavaTimeZoneUpdate.rar` | Java saat dilimi güncellemesi (Java tabanlı e-defter araçları için) |
| `2.72.00.00_TigerWings_LBIConfig.rar` | Tiger Wings yapılandırması |
| `eLogoAktivasyonSetup_V2.0.zip`, `AktivasyonExe/` | eLogo aktivasyon kurulumu |
| `MusteriDogrulamaSureci/`, `ChatBot_Sozlesme/`, `Fesih_belgesi.docx` | Müşteri formları ve sözleşmeler |

## Notlar

- Sunucu bir CrushFTP arayüzüdür. Klasör listesi `POST https://download.logo.com.tr/WebInterface/function/` adresine `command=getXMLListing&format=JSONOBJ&path=/Windows/TOOLS/` gövdesiyle alınabilir; oturum gerekmez.
- XML kod dosyaları **ISO-8859-9** (Türkçe) kodludur. UTF-8 olarak okursanız Türkçe karakterler bozulur.
- `PayMeansCodes.xml` biçimsel olarak hatalıdır (`<PAYMEANSCODE>` açılıp `</PAYMEANS>` ile kapanır). XML ayrıştırıcıyla değil, metin olarak okuyun.
- Dosyalar Logo Yazılım'a aittir. Bu site dosyaları barındırmaz, yalnızca bağlantı verir.
