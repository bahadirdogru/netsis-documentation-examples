---
title: Canlı denemeler
url: https://netsis.bahadirdogru.com/rest/canli-denemeler/
---

# Canlı denemeler

Bu sayfa NetOpenX REST uçlarının bir test şirketinde (canlı şirketin yedekten geri yüklenmiş kopyası) denenmesiyle öğrenilenleri toplar. Denemeler 2026-11'de yapıldı. Sonuçlar bir kuruluma aittir; şirket parametreleri farklıysa davranış da farklı olabilir. Kendi test şirketinizde yeniden sınayın.

Sürümler: denemelerin çoğu 9.0.71 ile yapıldı. `NetOpenX50.dll` güncellenince servis 9.0.72.5 oldu ve cari kartı ile sipariş yazma bu sürümde yeniden denendi. Aşağıda başka sürüm yazmayan satırlar 9.0.71 sonucudur.

## Özet

| Kaynak | Sonuç | Bilinmesi gereken |
|--------|-------|-------------------|
| Sipariş (`ftSSip`, `ftASip`) | Yazma ve silme çalışıyor | `KosulluHesapla: false`, `STra_BF` ve `STra_KDV` açıkça verilmeli |
| Satış ve alış irsaliyesi | Yazma ve silme çalışıyor | `TBLFATUIRS`, `TBLSTHAR`, `TBLFATUEK` yazılıyor |
| Satış faturası | Yazma ve silme çalışıyor | `Seri` e-belge birim kodu olmalı, stok kartında muhasebe detay kodu gerekli |
| Alış faturası | Yazma ve silme çalışıyor | Elle `FATIRS_NO`, `GIB_FATIRS_NO` ve kalemde `MuhasebeKodu` |
| `SiparisToIrsFat`, `IrsToFat` | Onaylı siparişte çalışıyor | Hedef `FATIRS_NO` zorunlu |
| Sipariş onayı | REST ile yapılamadı | Yeni sipariş `TIPI = 3` kalıyor |
| Ambar fişleri, `ftLokalDepo` | Yazma ve silme çalışıyor | Ambarda `CariKod` çıkış yeridir |
| Stok kartı | `POST`, `GET`, `PUT`, `DELETE` | `Payda_1`, `Payda2` zorunlu; kısmi `PUT` diğer alanları koruyor |
| Stok hareketi | `POST`, `DELETE` | `SonKayitNoAl: true` ile kimlik döner |
| Cari kartı (9.0.72.5) | `POST`, `GET`, `PUT`, `DELETE` | DLL veritabanıyla uyumlu olmalı |
| Cari hareket | `POST`, `GET`, `DELETE` | `Hka` zorunlu |
| Kasa | `POST`, `GET`, `DELETE` | Proje ve plasiyer kodu zorunluydu; bir kayıt üç tabloya işliyor |
| Çek/senet | Yazılıyor, silinemedi | `DELETE` hata verdi |
| Hızlı tahsilat | Kaydedilemedi | `SozKodu` tanımı gerekli |
| `Print/*` | Çalışmadı | Sunucuda varsayılan yazıcı yok |

Denenmedi: `CopyItemSlip`, `OrderRevision`, `ChangeNumber`, `ChangeCode`, `GLSlips` yazma, `StatementsHeader`, üretim uçları ve e-belge uçları. `ReadAndSave` denendi ama zaman aşımına düştü; [Servis kesintisi](#servis-kesintisi).

## Sipariş

Çalışan en küçük gövde:

```json
{
  "FaturaTip": 7,
  "Seri": "S",
  "KayitliNumaraOtomatikGuncellensin": true,
  "EPostaGonderilsin": false,
  "RiskKontrol": false,
  "KosulluHesapla": false,
  "FatUst": { "CariKod": "120-01-001", "Tarih": "2026-11-06", "TIPI": 2, "KDV_DAHILMI": false, "EKACK1": "Referans" },
  "Kalems": [ { "StokKodu": "STK001", "DEPO_KODU": 1, "STra_GCMIK": 3, "STra_BF": 100, "STra_KDV": 20, "STra_SatIsk": 10 } ]
}
```

- **Toplam 0 yazılması.** `KosulluHesapla` verilmezse varsayılanı `true`. Fiyatı olmayan stok kartında `STra_BF` sıfırlandı, satır ve başlık 0 yazıldı. `false` ile gövdedeki fiyat kullanıldı. Fiyatlı kartta davranış doğrulanmadı.
- **Fiyat.** Yalnız `STra_NF` vermek yetmedi; `STra_BF` gerekli. Net fiyat sunucuda brüt ve iskontodan hesaplanıyor.
- **KDV.** `STra_KDV` verilmezse stok kartındaki oran kullanılıyor; oran 0 olan kartta KDV 0 geldi.
- **`Calculate` ile kayıt** aynı toplamı verdi. `Calculate` yanıtında hesaplanmış net fiyat `Kalems` içinde değil, `YedekKalems` içinde.
- **`Calculate` yanıtındaki `FATIRS_NO`** kullanılmamalı. Boş serili bir `TBLFATUNO` satırından üretilen, belgeyle ilgisiz bir değer döndü.

### Sipariş onayı

Yeni sipariş `TBLSIPAMAS.TIPI = 3` (onaysız) kaydedildi. Gövdede `TIPI` için `2`, `1` ve `ft_YurtIci`, ayrıca `OnayTipi: "A"` denendi, sonuç değişmedi. `POST` yanıtı, `GET` ve `Details` yine `2` gösterdi; onay durumu tablodan okunmalı. REST'te onay ucu bulunamadı. COM tarafında da ayrı metot gözlenmedi; bkz. [Sipariş onayı](/netopenx/belge-donusumleri/#siparis-onayi).

## Fatura

**Satış faturası.** `Seri` yanlışsa kayıt e-belge numarası alma adımında düşer: `Seri 3 karakter olmalıdır. EFatura Numara Alma işleminde hata oluştu`. `FatUst.EfaturaCarisiMi` `true` ise `TBLEFATPRM.BIRIMKOD`, değilse `TBLEARSIVPRM.BIRIMKOD` verilir; e-arşiv yolu denenmedi. Doğru seriyle `GIB_FATIRS_NO` kendiliğinden doldu. Kayıt e-belge oluşturmadı: `TBLEFATMAS` ve `TBLEARSIV` değişmedi.

Stok kartında muhasebe detay kodu yoksa kayıt muhasebeleştirmede düşer: `Stok detay kodu bulunamadı … Muhasebeleştirmede hata var … Operation aborted`.

**Alış faturası.** `Seri` ile numara üretimi `Bu yöntem sadece satış faturası belgelerinde çalıştırılmalıdır` hatası verdi. Elle numara verince kayıt ilerledi:

- Kalemde `MuhasebeKodu` gerekti (`TBLSTMUHDETAY.ALIS_HESABI`), yoksa: `Stok kodu için muhasebe kodu veya referans kodu tanımlanmamış`.
- `GIB_FATIRS_NO` gerekti, yoksa: `Resmi Evrak Numarası Girilmelidir!`.

## Belge dönüşümleri

`SiparisToIrsFat` ve `IrsToFat` onaylı siparişle çalıştı: siparişten irsaliye, irsaliyeden fatura ve siparişten fatura. Gövde: [Siparişten fatura](/rest/json-ornekleri/#siparisten-fatura).

- `ItemSlip.FatUst.FATIRS_NO` zorunlu, yoksa `Hedef nesne için belge numarası tanımlanmalı`. Fatura hedefinde `GIB_FATIRS_NO` da verildi.
- Onaysız siparişte `Sipariş onaysız işlem yapılamaz` döner. Kalemde `STra_SIPNUM` ile doğrudan irsaliye yazmak da aynı hatayı verir.
- `ItemSlip.FatUst.EKACK1` yeni belgeye yazılmadı.
- Fatura kesilen irsaliyenin `FTIRSIP` değeri `3`'ten `A`'ya döner; fatura silinince `3`'e geri döner.
- Fatura ve irsaliye silmek stok ve cari hareketlerini geri aldı.

## Numara

- `POST` yanıtındaki `FATIRS_NO` esas alınmalı; `Seri` her belge tipinde uygulanmadı.
- `KayitliNumaraOtomatikGuncellensin: true` iken kayıtlı numara verilirse sonraki boş numaraya geçer. `false` iken `Hata Kodu : 402 … Daha önceden kaydedilmiş` döner.
- `NewNumber` sayacı artırmıyor, `TBLFATUNO + 1` döndürüyor.
- Risk hatasıyla düşen `POST` numara yaktı. Silinen belgeler sayaçları geri almıyor.
- `RiskKontrol` gönderilmezse risk kontrolü açık sayılıyor. `RISK_SINIRI` 0 olan caride `MÜŞTERİ RİSKLİ` hatası verir.

## Stok ve ambar

- Ambar fişinde `FatUst.CariKod` çıkış yeridir, `AMBHARTUR` ve `CikisYeri` verilir.
- `ftAmbarG` (8) `FTIRSIP = 9`, `ftAmbarC` (9) `FTIRSIP = 8` yazar. `ftLokalDepo` (5) de `8` ve `9` kullanır. Ambar ile depolar arası `STHAR_HTUR` ile ayrılır (`D` ambar, `B` depolar arası).
- `ftLokalDepo` tek kalemde iki `TBLSTHAR` satırı üretir; cari hareketi oluşmaz.
- `ftDepo` (4) ile kayıt zaman aşımına düştü, kullanmayın.
- `TBLSTOKPH` stok hareketi eklenince güncelleniyor. Silmenin toplamları geri alıp almadığı doğrulanmadı.

## Cari

**DLL uyumsuzluğu.** 9.0.71 ile `POST ARPs` şu hatayı verdi: `Kolon uyuşmazlığı: Tabloda tanımlı olan EBELUNVAN sahası, NetOpenX arabiriminde tanımlı değil`. Çözüm servisin kullandığı `NetOpenX50.dll` dosyasını veritabanıyla uyumlu sürüme getirmek oldu. Bu uyumsuzlukta kayıt yarım kalır: `TBLCASABIT` yazılır, `TBLCASABITEK` yazılmaz. Yarım satır `GET ARPs` listesinde görünür, ama `GET {id}` ve `DELETE` onu bulamaz; DLL güncellendikten sonra da REST ile silinemedi.

- `GET ARPs` listesi `fields` verilse de `CariEkBilgi`'yi döndürür; içinde `TcKimlikNo` olabilir. Liste için `ARPs/PrimInfo` kullanın.
- `ARPTransactions` eklerken `SonKayitNoAl: true` verin; `false` ise `Inc_Key_Number` 0 döner ve kaydı silemezsiniz.
- Cari hareket silmek `CM_BORCT` ve `CM_ALACT` özetini düşürdü, eklemek artırmadı. Bakiyeyi `TBLCAHAR` toplamından hesaplayın.

## Kasa, çek, tahsilat

- **Kasa.** Bir `POST` kasa satırı, cari hareket ve iki satırlık muhasebe fişi üretti; `DELETE` üçünü de geri aldı. `Proje_Kodu` ve `Plasiyer_Kodu` bu şirkette zorunluydu. `SafeDeposits/LastBalance?id=` istenen kasanın değil başka bir kasanın toplamlarını döndürdü (tek örnek).
- **Çek.** `Tip` ve `CekSenEvrakKaydetmeTip` sayıyla çalıştı. Gövdedeki `BordroNo` ve `SC_NO` yok sayıldı, numarayı sunucu verdi. `DELETE` ve `POST .../Delete` `Nesne başvurusu bir nesnenin örneğine ayarlanmadı` döndü, kayıt silinemedi. `?docType=` listesi `Data: [null]` döndü. Aynı hata 9.0.72.5'te de sürdü.
- **Hızlı tahsilat.** `SozKodu` `TBLKRTSOZMAS`'taki bir tanıma bağlı görünüyor; tablo boş olduğu için kayıt yapılamadı.

## Yanıt alanları

`POST`, `GET` ve `Details` yanıtındaki `EPostaGonderilsin`, `RiskKontrol`, `KosulluHesapla` bayrakları gönderilen değeri yansıtmıyor, kernel varsayılanını gösteriyor. `TIPI` ve `ISLETME_KODU` da tablodan farklı dönebiliyor. Kayıttan sonra doğrulama tablodan yapılmalı.

## Servis kesintisi

Denemelerde servis iki kez kesildi:

- `FaturaTip: 4` gövdesi dakikalarca asılı kaldı, aynı sırada `ReadAndSave` zaman aşımına düştü. Servis `HealthCheck`'e yanıt vermedi, sonra bağlantı reddetti ve kendiliğinden geri geldi. Bu sırada `public/Ping` yanıt veriyordu.
- Muhasebeleştirmesi düşen bir faturadan sonra servis kısa süre bağlantı reddetti.

Nedeni doğrulanmadı. İlk kesintide birkaç istemci aynı anda çalışıyordu. Sonuçlar:

- Sağlık kontrolünü `HealthCheck` ile yapın, `public/Ping` yeterli değil.
- Yazma çağrılarını sıraya alın, aynı anda göndermeyin.
- Zaman aşımından sonra önce okuyun; [Çift kayıt riski](/rest/transaction-ve-hatalar/#cift-kayit-riski).

## Test şirketi

- Test şirketini yedekten geri yükleyin. Tablo kopyalama yöntemleri varsayılanları, yabancı anahtarları ve tetikleyicileri düşürebilir; böyle bir kopyada `Cannot insert the value NULL into column` hataları çıkar.
- Kopya gerçek e-belge ve e-posta ayarlarını taşır. Denemede e-belge gönderme uçlarını çağırmayın, `EPostaGonderilsin: false` gönderin.
- Kopyadaki tetikleyiciler başka veritabanlarına yazıyor olabilir. Yazmadan önce `sys.sql_modules` içinde canlı veritabanı adını arayın.
- Her deneme kaydını tanınır bir etiketle işaretleyin (`EKACK1`), silin ve canlıda iz kalmadığını kontrol edin.
