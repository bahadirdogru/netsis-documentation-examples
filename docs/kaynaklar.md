---
title: Kaynaklar
url: https://netsis.bahadirdogru.com/kaynaklar/
---

# Kaynaklar

## Birincil kaynaklar

- **Logo DYS / Polaris — Netsis Uyarlama Araçları.** NetOpenX, NetOpenX Rest (Temel, Başlangıç, Kütüphane, Örnek Kaynak Kodlar), Netsis Data Inspector, sürüm duyuruları, Postman örnekleri.
  - [Polaris: Netsis Uyarlama Araçları](https://polaris.logo.cloud/docs/netsis-uyarlama-araclari)
  - Logo DYS NetOpenX Rest sayfaları (`dys.logo.cloud`)
- **Logo indirme sunucusu:** [download.logo.com.tr/#/Windows/NETSISERP/](https://download.logo.com.tr/#/Windows/NETSISERP/). Kurulum setleri, yamalar ve sürüm listesi (`files.json`). Özet: [Sürümler ve indirme](/surumler/).
- **Logo örnek projeleri:** `DocProje` (NetOpenX ve Rest Client C# örnek projesi, WinForms, .NET 4.7.2), `EGTM24-25` (eğitim örnekleri), `NoxRestNativeFaturaOrnek` (ham HTTP ile fatura).

## Depodaki Logo DYS kopyası

| Klasör | İçerik |
|--------|--------|
| `sayfalar/netopenx/` | NetOpenX temelleri, başlangıç ve 50 nesne için C#, VB ve Delphi örnekleri |
| `sayfalar/netopenx-rest/` | NetOpenX Rest temelleri, kurulum, kütüphane (uç kataloğu), GET/POST/PUT, RestClient örnek kodları, Test App |
| `sayfalar/netsis-data-inspector-ndi/` | NDI temelleri, kurulum, dinamik kodlama kütüphanesi, dizayn, örnekler, webinar listesi |
| `ekler/` | `Netsis Uyarlama Araclari.pdf`, `NetOpenXRest.pdf`, `NDI.pdf`, örnek projeler (`DocProje.zip`, `EGTM24-25.rar`, `NoxRestNativeFaturaOrnek.rar`, `NetOpenX Ebelge.rar`, `NetopenXStokKartıOku.rar`, `NetopenxNetRSKullanımı.rar`, `NetopenxReferansEkleme.rar`, `NdiDemirbasPrj.zip`), NDI tasarım XML'leri, kurulum ekran görüntüleri |

Yeniden üretmek için: `node tools/import-dys.js <döküm.json>` (döküm, sayfalar Vaadin ile yüklendiğinden tarayıcıda alınır).
- **NetsisQuick** (Bahadır Doğru). NetOpenX COM ile Excel'den sipariş, irsaliye, fatura, depolar arası transfer, ambar fişi, e-belge oluşturan WinForms uygulaması (.NET 4.8). [NetOpenX](/netopenx/) bölümündeki kod örneklerinin çoğu bu projedeki üretim kodundan sadeleştirilmiştir.
- **Canlı denemeler** (2026-11). Bir test şirketinde NetOpenX REST ile yapılan yazma denemeleri ve salt okunur SQL ile okuma ekranları kuran bir web uygulaması. [Canlı denemeler](/rest/canli-denemeler/), [Okuma SQL, yazma REST](/entegrasyon-deseni/) ve [Finans tabloları](/veritabani/finans-tablolari/) sayfaları buradan beslenir; şirket verisi ve sunucu bilgisi alınmamıştır.

## bahadirdogru.com yazıları

- [NetOpenX temel bilgiler](https://bahadirdogru.com/netopenx-temel-bilgiler/): kurulum, register, ilk fatura, kaynak temizliği.
- [NetOpenX ve Rest Client C# örnek proje](https://bahadirdogru.com/netopenx-ve-rest-client-c-rnek-proje/)
- [NetOpenX: tevkifatlı fatura](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/)
- [NetOpenX: TCMB banka kayıtları online güncelleme](https://bahadirdogru.com/c-tcmb-banka-kay%C4%B1tlar%C4%B1-online-gncelleme/)
- [NetOpenX: talep - teklif okuma](https://bahadirdogru.com/c-talep-teklif-okuma/)

## Sürümler

Netsis ERP setleri, yamalar, yayın tarihleri ve indirme bağlantıları için [Sürümler ve indirme](/surumler/) bölümüne bakın. E-fatura kod listeleri (tevkifat, KDV istisna, ödeme şekli) ve Logo'nun e-devlet araçları için [Logo e-devlet araçları](/logo-araclari/).

## Diğer araçlar

- **Netsis Data Inspector (NDI):** Netsis veritabanını incelemek ve ekran tasarlamak için uyarlama aracı; kütüphanesi VB Script'tir.
- **NetBasimX:** Netsis dizaynlarıyla basım için COM kütüphanesi.
- Üçüncü taraf `mcp-netsis-rest-api` (MCP sunucusu): doğrudan SQL erişimi ve sabit sunucu adresi içerir; üretimde kullanmadan önce inceleyin.

## Lisans

Bu sitenin içeriği ve kodu MIT lisanslıdır. Netsis, NetOpenX ve Logo, Logo Yazılım'ın ticari markalarıdır; bu site Logo ile bağlantılı değildir.
