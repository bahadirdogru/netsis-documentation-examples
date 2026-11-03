---
title: Bilinen sorunlar ve açık sorular
url: https://netsis.bahadirdogru.com/rest/bilinen-sorunlar/
---

# Bilinen sorunlar ve açık sorular

Logo'nun örnek kodları çalışma garantisi vermez. Kopyalamadan önce derleyin ve test şirketinde sınayın.

## Dokümantasyon ve örneklerdeki tutarsızlıklar

- **POST/PUT açıklaması ters.** "Temel" sayfası PUT'u oluşturma, POST'u güncelleme olarak anlatır; uç kataloğu ve davranış standarttır (POST oluşturur).
- **`GLSlps` yazımı.** Muhasebe fişi silme yolu sayfada `api/v2/GLSlps/{id}` yazılı; `GLSlips` olması beklenir.
- **Varsayılan `limit`.** Bir sayfada 20, diğerinde 10. Her zaman açıkça verin.
- **`ContractsMain` şeması.** Açıklama alanında yanlışlıkla "BatchInvoicing" yazılı.
- **Değişken adları.** Örneklerde `_ArpsManager`, `_ARPsManager` ve tanımsız `_CustomersManager` karışık kullanılmış.
- **"Cari Ekle" örneği önce siler.** `DeleteInternalById` ardından `PostInternal` çağrılıyor; var olan kaydı siler.
- **Tip uyumsuzlukları.** `CheckAndPNotesMainParam.BordroNo` bir yerde tam sayı, diğerinde metin; döviz örneğinde `string sira = 5;` derlenmez; fatura JSON'unda `"STra_DOVTIP": "2"` tırnaklı.
- **`FaturaTip` iki yerde.** `ItemSlips.FaturaTip` ve `FatUst.Tip` birlikte veriliyor; hangisinin öncelikli olduğu yazmıyor. İkisini aynı değerle gönderin.
- **Numara çakışması.** Bir örnekte `FATIRS_NO` elle verilmiş ve `KayitliNumaraOtomatikGuncellensin = true` aynı anda ayarlı; sunucunun hangisini kullanacağı belirsiz. Kayıt sonrası dönen numarayı okuyun.
- **Müstahsil Postman örneği** çek/senet gövdesinin kopyası; müstahsil için doğru gövde değil.
- **Serbest üretim alan adları:** `UretSon_MalY1` / `UretSon_Maly2` yazımı tutarsız; `definitions` çıktısından doğrulayın.
- **Örnek projelerde her işlemde yeniden login** yapılıyor; token yeniden kullanılmıyor.
- **Postman token gövdesinde** `dbpassword={{}}` değişken adı eksik.
- **Tarih biçimi.** Bir örnekte tarih `DateTime.Now.ToString()` ile gönderiliyor; bölgesel ayara bağlıdır. ISO 8601 kullanın.
- **Token yanıtı** bir örnekte elle virgül/iki nokta ile ayrıştırılıyor; gerçek bir JSON ayrıştırıcı kullanın.

## Açık sorular (doğrulanmadı)

1. Token yanıtının tam alan listesi (`access_token`, `expires_in`, `token_type`…).
2. `dbtype` sayısal değerleri (`0` = MSSQL varsayımı).
3. `TokenRestSettings.Init`'in ikinci ve üçüncü parametreleri.
4. Yazma çağrılarının transaction'a nasıl bağlandığı.
5. HTTP hata kodlarının tam eşlemesi.
6. `SonKayitNoAl`, `Hka`, `Hareket_Turu`, `AS_C`, `SC_YERI`, `SC_SONDUR`, `IO`, `Tip`, `Kdv_Dahil` alanlarının tam değer listeleri.
7. Sayısal enum değerlerinin (`TIPI: 2`, `BatchInvoicing.FaturaTip: 2`) karşılıkları.
8. `api/v2/public/CompanyList`'in hangi kurulumlarda çalıştığı (bazılarında `DBMONITOR..TBLSUBELER` hatası).

Bu soruların yanıtını biliyorsanız [GitHub'da](https://github.com/bahadirdogru/netsis-documentation-examples) katkıda bulunun.
