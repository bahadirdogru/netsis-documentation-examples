---
title: Kaynaklar
url: https://netsis.bahadirdogru.com/kaynaklar/
---

# Kaynaklar

## Birincil kaynaklar

- **Logo DYS / Polaris — Netsis Uyarlama Araçları.** NetOpenX, NetOpenX Rest (Temel, Başlangıç, Kütüphane, Örnek Kaynak Kodlar), Netsis Data Inspector, sürüm duyuruları, Postman örnekleri.
  - [Polaris: Netsis Uyarlama Araçları](https://polaris.logo.cloud/docs/netsis-uyarlama-araclari)
  - Logo DYS NetOpenX Rest sayfaları (`dys.logo.cloud`)
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

## bahadirdogru.com yazıları

- [NetOpenX temel bilgiler](https://bahadirdogru.com/netopenx-temel-bilgiler/): kurulum, register, ilk fatura, kaynak temizliği.
- [NetOpenX ve Rest Client C# örnek proje](https://bahadirdogru.com/netopenx-ve-rest-client-c-rnek-proje/)
- [NetOpenX: tevkifatlı fatura](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/)
- [NetOpenX: TCMB banka kayıtları online güncelleme](https://bahadirdogru.com/c-tcmb-banka-kay%C4%B1tlar%C4%B1-online-gncelleme/)
- [NetOpenX: talep - teklif okuma](https://bahadirdogru.com/c-talep-teklif-okuma/)

## Sürüm takvimi (örnek)

| Sürüm | Tarih |
|-------|-------|
| 9.0.39-2022.R1 | 2022-01-24 |
| 9.0.40-2022.R2 | 2022-03-21 |
| 9.0.41-2022.R3 | 2022-05-23 |
| 9.0.42-2022.R4 | 2022-07-25 |
| 9.0.43-2022.R5 | 2022-10-03 |
| 9.0.44-2022.R6 | 2022-11-28 |
| 9.0.45-2023.R1 | 2023-01-23 |
| 9.0.46-2023.R2 | 2023-03-06 |
| 9.0.47-2023.R3 | 2023-04-10 |
| 9.0.48-2023.R4 | 2023-05-29 |
| 9.0.49-2023.R5 | 2023-07-17 |
| 9.0.50-2023.R6 | 2023-09-18 |
| 9.0.51-2023.R7 | 2023-10-23 |
| 9.0.52-2023.R8 | 2023-12-04 |
| 9.0.53-2024.R1 | 2024-01-15 |

Sonraki sürümler ve her sürümün yenilikleri için Logo'nun sürüm duyurularına bakın.

## Diğer araçlar

- **Netsis Data Inspector (NDI):** Netsis veritabanını incelemek ve ekran tasarlamak için uyarlama aracı; kütüphanesi VB Script'tir.
- **NetBasimX:** Netsis dizaynlarıyla basım için COM kütüphanesi.
- Üçüncü taraf `mcp-netsis-rest-api` (MCP sunucusu): doğrudan SQL erişimi ve sabit sunucu adresi içerir; üretimde kullanmadan önce inceleyin.

## Lisans

Bu sitenin içeriği ve kodu MIT lisanslıdır. Netsis, NetOpenX ve Logo, Logo Yazılım'ın ticari markalarıdır; bu site Logo ile bağlantılı değildir.
