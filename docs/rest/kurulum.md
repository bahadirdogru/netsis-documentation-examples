---
title: Kurulum
url: https://netsis.bahadirdogru.com/rest/kurulum/
---

# Kurulum

## Ön koşullar

- Netsis **Temelset 8.06 ve üzeri**.
- Microsoft **.NET Framework 4.0** veya üzeri.
- Netsis **Merkezi Kimlik (SSO)** kurulu ve erişilebilir; NetOpenX lisansı SSO'dan indirilmiş.
- Setup dosyası kurulu Netsis sürümüyle uyumlu olmalı.

## Setup adımları (NetsisNoxRestSetup.exe)

1. Dosyayı **yönetici olarak** çalıştırın.
2. Kurulum dili: Türkçe veya İngilizce.
3. Ön koşul kontrolünde tüm maddeler **Başarılı** olmalı; değilse eksik bileşeni kurun.
4. **Özellik seçimi:** "NetOpenX Rest Yönetim Paneli" ve "NetOpenX Rest" seçili olmalı. Değilse sağ tık → "Diske Yükle".
5. **Netsis Merkezi Kimlik Denetimi Servis Konfigürasyonu:**
   - *SSO Service Adresi*: "Bul" ile ağdaki SSO servisleri listelenir. Elle: `sunucu-adı:2023/NetsisSsoService`.
   - *SSO STS URL*: `http://SunucuAdı/NetsisSTS`. "Dene" ile test edilir.
6. **Sanal dizin:** varsayılan `C:\Netsis\Enterprise8\Nox\`. Altında `WS` ve `WSManager` klasörleri oluşur.
7. Windows servisi: **Netsis NetOpenX Rest Service** (`services.msc`).

## Kurulum sonrası kontrol

1. **Servis yöneticisi:** `...\Nox\WSManager\NetOpenX.Rest.Service.WSManager.exe` servis durumunu, ayarlarını ve logları gösterir.
   - "Servis Yöntemi" bölümünde *Servis* dizini kurulumun `WS` klasörünü göstermeli (ör. `C:\Program Files (x86)\Netsis\Nox\WS`). Yanlış ya da boş dizin servisin başlamamasına yol açar.
   - Sol alttaki kimlik yönetimi simgesiyle SSO değerleri yeniden okunur, "Kaydet" yapılır.
   - Servis "Stopped" ise "Başlat". Hata ayrıntısı için sağ alttaki **Log** düğmesi `...\Nox\WS\log` klasörünü açar.
2. **Yardım sayfası:** `http://localhost:7070/api/v2/help`. Tüm uçlar, parametreler ve model tipleri burada listelenir. Tek uç için: `http://localhost:7070/api/v2/helpinfo?apiId=<METHOD>-api-v2-<yol>` (ör. `POST-api-v2-ItemSlips-Calculate`). Yardım sayfaları token istemez.
3. **Test uygulaması:** `NetOpenX.Rest.TestApp.exe`. "Operation" sekmesindeki "Path" alanına yardım sayfasındaki yol yazılarak çağrı denenir.
4. **Anonim sağlık kontrolü:**

   ```bash
   curl http://localhost:7070/api/v2/public/Ping
   # "02.11.2026 02:01 > OK"
   curl http://localhost:7070/api/v2/public/Version
   # "9.0.68.0"
   curl http://localhost:7070/api/v2/HealthCheck
   # {"IsSuccessful":true,"Description":"NetOpenX Kernel oluşturuldu. Versiyon: 9.0.68.0 ..."}
   ```

## Port

Dokümantasyon ve örnekler `7070` kullanır; bazı eğitim örnekleri `9090` kullanır. Gerçek kurulumlarda farklı portlar da kullanılır. Kullanılan portu servis yöneticisinden kontrol edin.

## Token süresi

- Varsayılan **20 dakika**.
- "NetOpenX Rest Manager" ekranında *Access token geçerlilik süresi* alanından değiştirilir.
- Süresi dolmuş ya da hiç olmayan token ile gelen istekler `401` ile reddedilir; yeni token alınmalıdır.

## Sürümle gelen uç sayısı

9.0.68 sürümlü bir sunucunun yardım sayfasında **379 uç** listelenmiştir. Kaynak başına en çok uç: `ItemSlips` 23, `Company` 18, `Mrp` 11, `DocumentLocking` 10, `PlanningRecord` 9, `EDocument` 8, `MaintenanceOrders` 8, `Print` 8, `StatementsHeader` 8, `ARPs` 7, `ExRates` 7, `QualityControls` 7; ayrıca `definitions` 47 ve `services` 49 şema ucu. Sürümünüzdeki tam listeyi her zaman `api/v2/help`'ten alın.
