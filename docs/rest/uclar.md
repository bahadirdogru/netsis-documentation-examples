---
title: Uçlar
url: https://netsis.bahadirdogru.com/rest/uclar/
---

# Uç kataloğu

Tüm yollar `http://<sunucu>:<port>/` köküne görelidir ve `Authorization: Bearer <token>` ister (aksi belirtilmedikçe). Liste uçları [sorgu parametrelerini](/rest/sorgulama/) kabul eder. Her kaynak için ayrıca `GET api/v2/definitions/<Kaynak>` ve `GET api/v2/services/<Kaynak>` şema uçları vardır.

İstek gövdeleri: [JSON örnekleri](/rest/json-ornekleri/). Bileşik `{id}` biçimleri: [Kimlikler ve enum'lar](/rest/kimlikler-ve-enumlar/).

## Cari (ARPs) ve cari hareket (ARPTransactions)

Tablolar: `TBLCASABIT`, `TBLCASABITEK`, `TBLCAHAR`.

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/ARPs` | Cari listesi |
| GET | `api/v2/ARPs/{id}` | Tek cari (`id` = `CARI_KOD`) |
| POST | `api/v2/ARPs` | Yeni cari |
| PUT | `api/v2/ARPs/{id}` | Cari güncelle |
| DELETE | `api/v2/ARPs/{id}` | Cari sil |
| GET | `api/v2/ARPs/PrimInfo` | Tüm cari temel bilgileri (`ARPsPrimInfo`) |
| POST | `api/v2/ARPs/Risk` | Cari risk bilgisi (NetOpenX `RiskBul`) |
| GET | `api/v2/ARPTransactions` | Cari hareketler |
| GET | `api/v2/ARPTransactions/{id}` | Tek hareket (`id` = `INC_KEY_NUMBER`) |
| POST | `api/v2/ARPTransactions` | Yeni hareket |
| PUT | `api/v2/ARPTransactions/{id}` | Hareket güncelle |
| DELETE | `api/v2/ARPTransactions/{id}` | Hareket sil |

Cari gövdesi iki parçalıdır: `CariTemelBilgi` (`ARPsPrimInfo` → `TBLCASABIT`) ve `CariEkBilgi` (`ARPsSuppInfo` → `TBLCASABITEK`), ayrıca `SubelerdeOrtak`, `IsletmelerdeOrtak` bayrakları. [Örnek](/rest/json-ornekleri/#cari-karti).

> `Kolon uyuşmazlığı … NetOpenX arabiriminde tanımlı değil` hatası servisin `NetOpenX50.dll` dosyasının veritabanından eski olduğunu gösterir ve yarım cari kaydı bırakır ([Canlı denemeler](/rest/canli-denemeler/#cari)). Liste için `ARPs/PrimInfo` kullanın: `GET ARPs`, `fields` verilse de `CariEkBilgi`'yi döndürür.

```csharp
var m = new ARPsManager(oAuth2);
var yeni = m.PostInternal(new ARPs
{
    CariTemelBilgi = new ARPsPrimInfo { CARI_KOD = "J0001", CARI_ISIM = "Rest Cari", CARI_TIP = "S", Sube_Kodu = 0,
                                        CARI_ADRES = "İzmir", CARI_IL = "İzmir", CARI_ILCE = "Konak", CARI_TEL = "2320000000" },
    CariEkBilgi    = new ARPsSuppInfo { CARI_KOD = "J0001", TcKimlikNo = "11111111111" }
});
if (!yeni.IsSuccessful) throw new Exception(yeni.ErrorDesc);

// Güncelleme: yalnızca değişen alanlar
m.PutInternal("J0001", new ARPs { CariTemelBilgi = new ARPsPrimInfo { CARI_KOD = "J0001", CARI_ILCE = "Karşıyaka" } });

// Cari hareket
new ARPTransactionsManager(oAuth2).PostInternal(new ARPTransactions
{
    CARI_KOD = "J0001", Tarih = DateTime.Today, Hka = "A", Aciklama = "rest", SonKayitNoAl = true
});
```

## Stok (Items) ve stok hareketi (ItemTransactions)

Tablolar: `TBLSTSABIT`, `TBLSTSABITEK`, `TBLSTHAR`.

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/Items` | Stok kartları (sıralama örneği: `ISLETME_KODU ASC, STOK_KODU ASC`) |
| GET | `api/v2/Items/{id}` | Tek stok (`id` = `STOK_KODU`) |
| POST | `api/v2/Items` | Yeni stok |
| PUT | `api/v2/Items/{id}` | Güncelle |
| DELETE | `api/v2/Items/{id}` | Sil |
| GET | `api/v2/Items/PrimInfo` | Stok temel bilgileri (`ItemPrimInfos`) |
| GET/POST/PUT/DELETE | `api/v2/ItemTransactions[/{id}]` | Stok hareketi CRUD |

Stok gövdesi: `StokTemelBilgi` (`ItemsPrimInfo`) + `StokEkBilgi` (`ItemsSuppInfo`). En küçük gövde stok kodu, adı, `Payda_1` ve `Payda2` alanlarıdır; paydalar verilmezse `CC_PAYDA_1` kısıtına takılır. [Örnek](/rest/json-ornekleri/#stok-karti).

## Fatura, irsaliye ve sipariş (ItemSlips)

Tablolar: `TBLFATUIRS`, `TBLFATUEK`, `TBLSTHAR`, `TBLSIPAMAS`, `TBLSIPATRA`. COM karşılığı: [Fatura ve irsaliye](/netopenx/fatura-ve-irsaliye/).

| Yöntem | Yol | Açıklama (NetOpenX karşılığı) |
|--------|-----|-------------------------------|
| GET | `api/v2/ItemSlips/{id}` | Tek belge. `id` = `FaturaTip;FATIRS_NO;CARI_KOD`, ör. `ftSSip;000000000000123;120-01-001` |
| GET | `api/v2/ItemSlips?docType={docType}` | Belge tipine göre liste |
| POST | `api/v2/ItemSlips` | Yeni belge (`kayitYeni`) |
| DELETE | `api/v2/ItemSlips/{id}` | Sil |
| POST | `api/v2/ItemSlips/Details` | `ItemSlipsParam` ile tek belge oku |
| POST | `api/v2/ItemSlips/Delete` | Parametreyle sil |
| POST | `api/v2/ItemSlips/Calculate` | Kaydetmeden hesapla (`HesaplamalariYap`) |
| POST | `api/v2/ItemSlips/Html` | Belge HTML'i (`GetFaturaHTML`) |
| POST | `api/v2/ItemSlips/NewNumber` | Yeni belge numarası (`YeniNumara`) |
| POST | `api/v2/ItemSlips/NewEItemSlipsNumber` | Yeni e-fatura numarası (`YeniEfaturaNumara`) |
| POST | `api/v2/ItemSlips/NewEWaybillNumber` | Yeni e-irsaliye numarası |
| GET | `api/v2/ItemSlips/NewEArchiveNumber/{serialNo}` | Yeni e-arşiv numarası |
| POST | `api/v2/ItemSlips/IncrementNumber` | Numarayı 1 artır (`NoArtiBir`) |
| POST | `api/v2/ItemSlips/IrsToFat` | İrsaliyeden fatura (`Irsaliye2Fatura`) |
| POST | `api/v2/ItemSlips/SiparisToIrsFat` | Siparişten irsaliye/fatura (`Siparis2IrsFat`) |
| POST | `api/v2/ItemSlips/TopluSiparisToIrsFat` | Toplu siparişten irsaliye/fatura |
| POST | `api/v2/ItemSlips/ChangeNumber` | Belge no ve cari kodu değiştir (`NumaraDegistir`) |
| POST | `api/v2/ItemSlips/ChangeCode` | Cari kodu değiştir (`KodDegistir`) |
| POST | `api/v2/ItemSlips/CopyItemSlip` | Belge kopyala |
| POST | `api/v2/ItemSlips/OrderRevision` | Sipariş revizyonu |
| POST | `api/v2/ItemSlips/ReadAndSave` | Oku ve yeniden kaydet |
| POST | `api/v2/ItemSlips/SendEMailDesign` | Dizaynla e-posta gönder (`DizaynEpostaGonder`) |
| POST | `api/v2/ItemSlips/DeleteItemSlipLinkedWaybill` | Faturaya bağlı irsaliyeyi sil |
| GET | `api/v2/ItemSlips/ContractsOpenPrice?restRecord={restRecord}` | Belgelenmemiş |

> **`ItemSlips` için `PUT` yoktur.** Belge değiştirmek için silip yeniden oluşturun ya da `ReadAndSave` / `ChangeNumber` gibi işlem uçlarını kullanın.

> Sipariş, fatura ve dönüşümlerde gereken alanlar: [Canlı denemeler](/rest/canli-denemeler/). `KosulluHesapla` varsayılanı `true`, `RiskKontrol` varsayılanı açıktır; açıkça gönderin. `ReadAndSave` ve `FaturaTip: 4` denemede zaman aşımına düştü.

Gövde yapısı: üst düzeyde `FaturaTip`, `Seri`, hesaplama bayrakları, `FatUst` (başlık), `Kalems` (satırlar). Alan listesi ve örnek: [JSON örnekleri](/rest/json-ornekleri/#fatura). Dönüşüm uçlarının gövdesi `{ ItemSlip, DocumentType, DocumentNumber, CustomerCode }` biçimindedir; `ItemSlip` hedef belgenin başlığını ve bayraklarını taşır.

```csharp
var m = new ItemSlipsManager(oAuth2);
var fatura = new ItemSlips
{
    FaturaTip = JTFaturaTip.ftSFat,
    KayitliNumaraOtomatikGuncellensin = true,
    FatUst = new ItemSlipsHeader { Tip = JTFaturaTip.ftSFat, CariKod = "120-01-001", Tarih = DateTime.Today,
                                   TIPI = JTFaturaTipi.ft_Acik, KDV_DAHILMI = false },
    Kalems = new List<ItemSlipLines> {
        new ItemSlipLines { StokKodu = "STK001", STra_GCMIK = 3, STra_BF = 100, STra_NF = 100, DEPO_KODU = 1, STra_KDV = 20 }
    }
};
var hesap = m.Calculate(fatura);        // önce kontrol (kayıt yok)
var kayit = m.PostInternal(fatura);     // kaydet
string no = kayit.Data.FatUst.FATIRS_NO;
```

## Toplu faturalama (BatchInvoicing)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| POST | `api/v2/BatchInvoicing` | İrsaliyeleri toplu faturalar: satış irsaliyesi → satış faturası, alış irsaliyesi → alış faturası |

[Örnek gövde](/rest/json-ornekleri/#toplu-faturalama).

## Muhasebe fişi (GLSlips) ve hesap planı (GLAccounts)

Tablolar: `TBLMUHFIS`, `TBLMUPLAN`.

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/GLSlips` | Fişler; `expandLevel=full` ile `GLSlipLines` ve `GLSlipLines2` dahil |
| GET | `api/v2/GLSlips/{id}` | Tek fiş |
| POST | `api/v2/GLSlips` | Yeni fiş |
| DELETE | `api/v2/GLSlips/{id}` | Sil. Logo sayfasında yol `GLSlps` yazılı; servis şeması (`services/GLSlips`) `GLSlips` gösteriyor, çağrılarak denenmedi |
| POST | `api/v2/GLSlips/Details` | `GLSlipsParam` ile oku |
| POST | `api/v2/GLSlips/Delete` | `GLSlipsParam` ile sil |
| GET | `api/v2/GLAccounts` | Hesap planı (`sort=HESAP_KODU ASC`, `q=SUBE_KODU='1'`) |
| GET/POST/PUT/DELETE | `api/v2/GLAccounts[/{id}]` | Hesap CRUD (`id` = hesap kodu) |

## Çek ve senet (CheckAndPNotesMain)

Tablolar: `TBLMCEK`, `TBLMSEN`, `TBLBCEK`, `TBLBSEN`.

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/CheckAndPNotesMain/{id}` | Tek bordro. `id` = `JTCekSenType;SC_ALB_NO`, ör. `csMCEK;A00000000000001` |
| GET | `api/v2/CheckAndPNotesMain?docType={docType}` | Tipe göre liste |
| POST | `api/v2/CheckAndPNotesMain` | Yeni bordro |
| DELETE | `api/v2/CheckAndPNotesMain/{id}` | Sil |
| POST | `api/v2/CheckAndPNotesMain/Details` | `CheckAndPNotesMainParam` ile oku |
| POST | `api/v2/CheckAndPNotesMain/Delete` | Parametreyle sil |

```csharp
var bordro = new CheckAndPNotesMain
{
    Tip = JTCekSenType.csMCEK,
    CekSenEvrakKaydetmeTip = JTCekSenetEvrakKaydetmeTipi.ektCekSenAlma,
    OtoNumaraGetir = true,
    Evraklar = new List<CheckAndPNotes> {
        new CheckAndPNotes { CEKSERI = "H", SC_GIRTRH = DateTime.Today, SC_VERENK = "120-01-001",
                             AS_C = "A", SC_YERI = "P", VADETRH = DateTime.Today.AddMonths(1),
                             SC_ODETRH = DateTime.Today.AddMonths(1), Tutar = 500 }
    }
};
var r = new CheckAndPNotesMainManager(oAuth2).PostInternal(bordro);
var bordroNo = r.Data.BordroNo;
```

`AS_C` = `A` (alacak), `SC_YERI` = `P` (portföy) örneklerden alınmıştır; diğer değerler belgelenmemiştir.

> Denemede `Tip` ve `CekSenEvrakKaydetmeTip` sayıyla çalıştı, bordro silinemedi, `?docType=` listesi `Data: [null]` döndü ([Canlı denemeler](/rest/canli-denemeler/#kasa-cek-tahsilat)).

## Kasa (SafeDeposits)

Tablo: `TBLKASA`.

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/SafeDeposits` | Kasa hareketleri |
| GET | `api/v2/SafeDeposits/{id}` | Tek kayıt |
| POST | `api/v2/SafeDeposits` | Yeni kayıt |
| DELETE | `api/v2/SafeDeposits/{id}` | Sil |
| GET | `api/v2/SafeDeposits/LastBalance?id={id}` | Kasa son bakiyesi (`KasaSonBakiye`) |

Alan değerleri `TBLKASA` açıklamasından: `IO` = `G` gelir / `C` gider; `Tip` = `B` banka, `C` cari, `E` çek, `F` fatura, `M` muhtelif, `S` senet, `T` transfer; `Cari_Muh` = `C` cari / `M` muhasebe / `B` banka. [Örnek](/rest/json-ornekleri/#kasa).

Bir kasa kaydı cari hareket ve muhasebe fişi de üretir, silmek üçünü geri alır. `LastBalance` bir denemede istenen kasanın değil başka bir kasanın toplamını döndürdü; bakiyeyi tablodan doğrulayın.

## Hızlı tahsilat (MixedReceiptsMain)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/MixedReceiptsMain/{id}` | Tek tahsilat. `id` = `KasaKod;BelgeNo;CariKod;yyyy-MM-dd` |
| POST | `api/v2/MixedReceiptsMain` | Yeni |
| DELETE | `api/v2/MixedReceiptsMain/{id}` | Sil |
| POST | `api/v2/MixedReceiptsMain/Details` | Parametreyle oku |
| POST | `api/v2/MixedReceiptsMain/Delete` | Parametreyle sil |

```csharp
var mr = new MixedReceiptsMain
{
    IslemTarihi = DateTime.Today, KasaKod = "01", BelgeNo = "56565656", CariKod = "120-01-001", DOVTIP = 0,
    Tahsilats = new List<MixedReceipts> {
        new MixedReceipts { Aciklama = "nakit", SozKodu = "NAKIT", Tutar = 150, TaksitSay = 0 }
    }
};
new MixedReceiptsMainManager(oAuth2).PostInternal(mr);
```

`SozKodu` hazır bir değer değildir, `TBLKRTSOZMAS`'taki tanıma bağlı görünür; tablo boşken `Sözleşme kodu bulunamadı` döner.

## Döviz ve kur (ForExs, ExRates)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET/POST | `api/v2/ForExs` | Döviz tanımları (`BIRIM`, `ISIM`, `NETSISSIRA`) |
| GET/PUT/DELETE | `api/v2/ForExs/{id}` | Tek döviz. Başka yerde kullanılan döviz silinmez |
| GET | `api/v2/ForExs/RefreshExRates?date={date}` | Verilen tarihin kurlarını güncelle (`DovizKurGuncelle`) |
| GET/POST | `api/v2/ExRates` | Kur listesi / yeni kur. `SIRA` döviz tanımına referanstır |
| GET/PUT/DELETE | `api/v2/ExRates/{id}` | Tek kur |
| POST | `api/v2/ExRates/Details`, `api/v2/ExRates/Delete` | `ExRatesParam` ile oku/sil |

## Basım (Print)

Basım uçları **PDF'i bayt dizisi** olarak döndürür (JSON'da base64 metin; C#'ta `result.Data` → `byte[]`). `DesignNumber`, Netsis'te tanımlı dizayn numarasıdır (`TBLDIZAYNSABIT.DIZAYNNO`).

| Yol (POST) | Parametre | Alanlar | NetOpenX karşılığı |
|------------|-----------|---------|-------------------|
| `api/v2/Print/ItemSlipsPrinting` | `ItemSlipsPrintParam` | `DesignNumber`, `DocumentType`, `DocumentNumber`, `CustomerCode`, `StreamSupport` | `FaturaBasimDizaynNo` |
| `api/v2/Print/GLSlipsPrinting` | `GLSlipsPrintParam` | `DesignNumber`, `GLSlipsId`, `Month` | `YevmiyeFisBasimDizaynNo` |
| `api/v2/Print/CheckAndPNotesMainPrinting` | `CheckAndPNotesMainPrintParam` | `BordroNo`, `Tip`, `DesignNumber` | `CekSenetBasimDizaynNo` |
| `api/v2/Print/SafeDepositsPrinting` | `SafeDepositPrintParam` | `DesignNumber`, `PrintingType`, `Sira` | `KasaBasim` |
| `api/v2/Print/StatementsHeaderPrinting` | `StatementsHeaderPrintParam` | | `DekontBasimDizaynNo` |

```csharp
var pdf = new PrintManager(oAuth2).ItemSlipsPrinting(new ItemSlipsPrintParam
{
    CustomerCode = "120-01-001", DesignNumber = 1005,
    DocumentNumber = "ABC2024000000123", DocumentType = JTFaturaTip.ftSFat
});
File.WriteAllBytes(@"C:\Temp\fatura.pdf", pdf.Data);
```

Sunucuda varsayılan yazıcı yoksa basım uçları `There is no default printer currently selected` döner; servis hesabına yazıcı tanımlamanın çözüp çözmediği doğrulanmadı. HTML için `ItemSlips/Html` çalışır.

Barkod basımı için `PrintManager.ItemSlipsItemsBatchBarcodePrinting` ve `ItemSlipsItemBarcodePrinting` vardır ([istemci kütüphanesi](/rest/istemci-kutuphanesi/)).

## E-belge (EDocument)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| POST | `api/v2/EDocument` | E-belge taslağı. `Tip`: 0 e-arşiv, 1 e-fatura, 2 e-irsaliye |
| POST | `api/v2/EDocument/SendEDocument` | Entegratöre/GİB'e gönder. **Geri alınamaz** |
| POST | `api/v2/EDocument/ShowEDocument` | HTML görüntüle. `HtmlPath` boşsa HTML yanıtta döner |

Diğer e-belge yöntemleri (yanıt, kalem yanıtı, e-arşiv iptali, cari güncelleme) [istemci kütüphanesinde](/rest/istemci-kutuphanesi/#edocumentmanager) listelenmiştir. [JSON örnekleri](/rest/json-ornekleri/#e-belge).

## Dinamik depo (DynamicWarehsSlips)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| POST | `api/v2/DynamicWarehsSlips` | Yeni dinamik depo (hücre) fişi |

```csharp
var dyn = new DynamicWarehsSlips
{
    HareketTipi = JTDepoIslemTipi.ditYerlestirme,
    BelgeTipi = JTDepoBelgeTipi.dbtAlisFaturasi,
    BelgeNumarasi = "A00000000000001", CariKodu = "320-01-001",
    Harekets = new List<DynWarehsSlipLines> {
        new DynWarehsSlipLines { HucreHareketKalems = new List<DynWarehsSlipCellLines> {
            new DynWarehsSlipCellLines { HucreKodu = "H1", NetMiktar = 5, HareketTipi = JTDepoHareketTipi.dhtNormal, StokKodu = "001" } } }
    }
};
new DynamicWarehsSlipsManager(oAuth2).PostInternal(dyn);
```

## Üretim

### Serbest üretim / SUSK (FinishedGoodsReceiptWChanges)

| Yöntem | Yol | Açıklama |
|--------|-----|----------|
| GET | `api/v2/FinishedGoodsReceiptWChanges` | Kayıtlar (sıralama `UretSon_FisNo`, `UretSon_Tarih`) |
| GET | `api/v2/FinishedGoodsReceiptWChanges/{id}` | Tek fiş (`id` = `UretSon_FisNo`; `FisYukle`) |
| DELETE | `api/v2/FinishedGoodsReceiptWChanges/{id}` | Sil |
| POST | `api/v2/FinishedGoodsReceiptWChanges/ReceiptProduce` | Fişi üret ve kaydet (`FisUret` + `Kaydet`) |
| POST | `api/v2/FinishedGoodsReceiptWChanges/Save` | Son üretilen fişi sakla |
| GET | `api/v2/FinishedGoodsReceiptWChanges/GetFromProductionOrder/{id}` | İş emrinden getir (`IsEmrindenGetir`) |

`UretSon_Depo` giriş deposu, `I_Yedek1` çıkış deposu, `BAKIYE_DEPO` = `0` verilen depo / `1` tüm depolar. [Örnek](/rest/json-ornekleri/#serbest-uretim).

### İş emri, reçete, MRP

| Yol | Açıklama |
|-----|----------|
| `POST api/v2/ProductionOrder` | İş emri kaydı (`JIsEmri`). [Örnek](/rest/json-ornekleri/#is-emri) |
| `Mrp`, `PlanningRecord`, `BOM`, `ProcessControl`, `ProductMaterialCost`, `QualityControls`, `MaintenanceOrders` | Uç yolları sürüme göre `api/v2/help`'ten alınmalı; yönetici metotları [istemci kütüphanesinde](/rest/istemci-kutuphanesi/) |

## Sipariş, makbuz ve diğer belgeler

| Kaynak | Uçlar | Not |
|--------|-------|-----|
| `ProducerReceipt` (müstahsil) | `GET/POST api/v2/ProducerReceipt`, `GET .../ReadLastNumber?customerCode=` | Son numara (`SonNumaraOku`) |
| `StatementsHeader` (dekont) | `GET api/v2/StatementsHeader`, `GET/POST/PUT/DELETE .../{id}`, `POST .../Details`, `POST .../Delete` | Kalemlerle birlikte okur |
| `WorkFlow` (iş akışı) | `GET/POST api/v2/WorkFlow` | `POST` kaydın akış durumunu değiştirir; sıralama `PATHKODU` |
| `ContractsMain` (bağlantı) | `GET api/v2/ContractsMain/{id}` | Yalnızca tek kayıt okuma |
| `CompaniesInfo` | `GET api/v2/CompaniesInfo[/{id}]` | Şirket isim bilgileri |
| `Project` | `GET/POST api/v2/Project`, `GET/PUT/DELETE .../{id}` | `PROJE_KODU`, `PROJE_ACIKLAMA` (`TBLPROJE`) |
| `DocumentLocking` | çeşitli | Belge kilitleme (9.0.6x'te görüldü) |
| `Company` | çeşitli | Şirket düzeyi işlemler: bakiye devri, kod değiştirme, rapor çalıştırma… ([CompanyManager](/rest/istemci-kutuphanesi/#companymanager)) |

## Sorgu (Queries)

| Yol | Açıklama | Veritabanı |
|-----|----------|------------|
| `GET/POST api/v2/Queries` | Verilen SQL'i çalıştırır. **Select, insert, update, delete** | Yalnızca MSSQL |
| `GET/POST api/v2/Queries/NetRS` | NetRS ile SQL çalıştırır | MSSQL ve Oracle |

> **Ham SQL çalıştırır ve yazma yapabilir.** Uygulamalarınızda okuma için bile tercih etmeyin; doğrudan SQL bağlantısı ya da tipli uçlar daha güvenlidir. Sunucuda bu uçlara erişimi kısıtlayın ([Güvenlik](/rest/guvenlik/)).

## Sistem uçları

| Yöntem | Yol | Token | Açıklama |
|--------|-----|-------|----------|
| POST | `api/v2/token` | — | Token al ([Kimlik doğrulama](/rest/kimlik-dogrulama/)) |
| GET | `api/v2/revoke` | evet | Oturumu kapat |
| GET | `api/v2/ping` | evet | Token geçerli mi |
| GET | `api/v2/public/Ping` | hayır | Servis ayakta mı |
| GET | `api/v2/public/Version` | hayır | NetOpenX sürümü |
| GET | `api/v2/public/NetsisMasterVersion` | hayır | Ana veritabanı sürümü |
| GET | `api/v2/public/AuthorizedBranches?company=&username=` | hayır | Kullanıcının yetkili şubeleri |
| GET | `api/v2/public/CompanyList` | hayır | Şirket listesi. Bazı kurulumlarda `Invalid object name 'DBMONITOR..TBLSUBELER'` hatası verir; şirketler için `NETSIS..SIRKETLER30` okunabilir |
| GET | `api/v2/public/GetLicInfo/KeyInfo` | hayır | Lisans bilgisi |
| GET | `api/v2/HealthCheck` | hayır | Kernel oluşturma testi |
| GET | `api/v2/OpenTransaction` | evet | Transaction aç ([Transaction](/rest/transaction-ve-hatalar/)) |
| GET | `api/v2/CommitTransaction?transId=` | evet | Onayla |
| GET | `api/v2/RollBackTransaction?transId=` | evet | Geri al |
| GET | `api/v2/services`, `api/v2/services/describe` | | API şeması |
| GET | `api/v2/help`, `api/v2/helpinfo?apiId=` | hayır | Yardım sayfaları |

`services/describe` tüm uçları listelemez; `services/<Kaynak>` ve `helpinfo?apiId=POST-api-v2-ItemSlips-ReadAndSave` biçimi daha güvenilirdir. Servis sağlığı için `HealthCheck` kullanın: kernel takıldığında `public/Ping` yanıt vermeye devam edebilir.
