# Kaynak notları

Sitedeki bilginin nereden alındığını kaydeder. Bu klasör (`kaynak/`) sitede yayınlanmaz: `tools/build.js` yalnızca `content/` ve `data/` klasörlerini okur.

Bir sayfayı güncellerken ya da bir bilginin doğruluğundan şüphelendiğinizde önce buradaki kaynağa bakın.

## Kaynak listesi

| # | Kaynak | Nerede | Alınma tarihi | Ne alındı |
|---|--------|--------|---------------|-----------|
| K1 | **TEMELSET şema Excel'i** (`TEMELSETGUNCEL2.xlsm`) | Yerel dosya (`Desktop\TEMELSETGUNCEL2.xlsm`). Repoda yok (`.gitignore`: `*.xlsm`, `*.xlsx`). | 2026-11 | 714 tablo, 18.625 kolon: tip, uzunluk, boş geçilebilirlik, varsayılan, PK/FK, indeks, açıklama, modül |
| K2 | **API.NETSIS.REST.md** | `C:\Git\pyinfograticmain\API.NETSIS.REST.md` (başka bir projenin iç dokümanı; Logo DYS NetOpenX Rest sayfalarından derlenmiş) | 2026-11 | REST mimarisi, kurulum, token, sorgu parametreleri, uç kataloğu, JSON gövdeleri, istemci kütüphanesi, bilinen sorunlar |
| K3 | **bahadirdogru.com yazıları** | [NetOpenX temel bilgiler](https://bahadirdogru.com/netopenx-temel-bilgiler/), [NetOpenX ve Rest Client C# örnek proje](https://bahadirdogru.com/netopenx-ve-rest-client-c-rnek-proje/), [tevkifatlı fatura](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/), [TCMB banka kayıtları](https://bahadirdogru.com/c-tcmb-banka-kay%C4%B1tlar%C4%B1-online-gncelleme/), [talep-teklif okuma](https://bahadirdogru.com/c-talep-teklif-okuma/) | 2026-11 | NetOpenX kurulum/register, ilk fatura, kaynak temizliği, tevkifat, banka kayıtları, talep/teklif okuma |
| K4 | **NetsisQuick** | `C:\Git\netsis-quick` (özellikle `NetsisQuick/cNetsis.cs`) | 2026-11 | Üretimde çalışan NetOpenX COM kodu: bağlantı, sipariş/irsaliye/fatura, belge dönüşümleri, depo transferi, ambar fişi, e-belge, hata yönetimi, Excel kolon eşlemesi |
| K5 | **Logo DYS – Netsis Uyarlama Araçları** | 6 kök sayfa, aşağıda. Kopyası: [`logo-dys/`](logo-dys/README.md) (76 sayfa, 123 görsel, 28 ek) | 2026-11-03 | NetOpenX nesne örnekleri (C#/VB/Delphi), Kernel, NetOpenX Rest temel/başlangıç/kütüphane/örnek kodlar, NDI, eğitim örnekleri, DocProje |
| K6 | **Logo indirme sunucusu** | [download.logo.com.tr/#/Windows/NETSISERP/](https://download.logo.com.tr/#/Windows/NETSISERP/). Kopyası: [`logo-indirme/`](logo-indirme/) (`files.json`, `agac.tsv`) | 2026-11-03 | 265 sürümün listesi, tarih, boyut, sürüm notu bağlantısı; açık klasörlerden tam set yapısı ve yama içerikleri |
| K8 | **Logo indirme sunucusu – TOOLS** | [download.logo.com.tr/#/Windows/TOOLS/](https://download.logo.com.tr/#/Windows/TOOLS/). Kopyası: [`logo-indirme/tools-agac.tsv`](logo-indirme/tools-agac.tsv) ve [`logo-indirme/tools/`](logo-indirme/tools/) (kod XML'leri, şemalar, küçük PDF'ler; ikili araçlar indirilmedi) | 2026-11-04 | Tevkifat/istisna/ödeme şekli kod XML'leri, UBL-TR XSD ve schematron, e-belge dokümanları, alıcı firma e-fatura şablonları |
| K9 | **Canlı REST denemeleri** | Bir test şirketinde (canlının yedekten kopyası) yapılan denemeler; ham kayıtlar `C:\Git\pyinfograticmain\API.NETSIS.REST.md` §18.4 (ilk tur 2026-11-06, ikinci tur 2026-11-07) | 2026-11-07 | Sınanmış gövdeler, hata metinleri, enum eşlemeleri, kayıt kimlikleri (`SIRA`, `Inc_Key_Number`), kısmi `PUT`, kasa ve çek kaydının `TBLCAHAR` yan etkisi. Şirket verisi, sunucu adresi ve seri kodları sayfalara alınmadı |
| K10 | **Panel okuma kataloğu ve finans tabloları** | `C:\Git\pyinfograticmain` içinde `DATA.NETSIS.md` §5.9 ve §8, `platform/backend/app/erp/read/catalog/*.py` (19 okuma varlığının SQL'i), `docs/adr/0026-netsis-okuma-yazma-katmanlari.md` | 2026-11-07 | Finans tablolarının anahtarları ve değer listeleri (test şirketinin şemasından ve veri dağılımından; sayılar alınmadı), dekont anahtarı, salt okunur SQL + REST yazma deseni, SQL Server 2008 R2 uyumlu sorgular |
| K7 | **Genel Netsis bilgisi** | Kaynak belirtilmeden yazılan, sahada yaygın bilinen bilgi | — | Sayfalarda "doğrulanmadı" diye işaretli olanlar bu gruptadır |

### K5: Logo DYS kök sayfaları

| Kök | Kopyadaki klasör |
|-----|------------------|
| [cid=0280b7f9-56c9-46f2-8c36-195aaea22caf](https://dys.logo.cloud/external?cid=0280b7f9-56c9-46f2-8c36-195aaea22caf) | `logo-dys/sayfalar/` altında kök sırasına göre (ayrıntı: [`logo-dys/README.md`](logo-dys/README.md)) |
| [cid=5dcfec07-7aa7-4c10-bf39-b476f60383c9](https://dys.logo.cloud/external?cid=5dcfec07-7aa7-4c10-bf39-b476f60383c9) | 〃 |
| [cid=9c38eb5c-9677-4855-b18e-601c61c0371b](https://dys.logo.cloud/external?cid=9c38eb5c-9677-4855-b18e-601c61c0371b) | 〃 |
| [cid=109d9ba9-76e4-4a80-9918-a13240ab7d70](https://dys.logo.cloud/external?cid=109d9ba9-76e4-4a80-9918-a13240ab7d70) | 〃 |
| [cid=327edb4c-821c-4939-b528-d903c5ec4366](https://dys.logo.cloud/external?cid=327edb4c-821c-4939-b528-d903c5ec4366) | 〃 |
| [cid=7035c039-10d4-4d07-acec-71c0bfe7b429](https://dys.logo.cloud/external?cid=7035c039-10d4-4d07-acec-71c0bfe7b429) | 〃 |

Kopyanın üst başlıkları: NetOpenX, NetOpenX Rest, Netsis Data Inspector (NDI), Netsis Uyarlama Araçları Eğitimi, Eğitim Örnekleri, NetOpenX ve Rest Client C# Proje.

## Sayfa → kaynak eşlemesi

| Sayfa (`content/`) | Ana kaynak | Ek kaynak | Not |
|--------------------|------------|-----------|-----|
| `index.md`, `genel-bakis.md` | K4, K3 | K1, K2 | "Doğrudan SQL ile yazmayın" kuralı NetsisQuick deneyimi ve Logo'nun NetOpenX tanımına dayanır |
| `llm.md` | — | — | Sitenin kendi yapısını anlatır |
| `kaynaklar.md` | Hepsi | — | Sitede yayınlanan kısa kaynak listesi. Excel adı orada bilerek geçmez |
| `veritabani/index.md`, tablo ve modül sayfaları, `ortak-kolonlar`, `veri-tipleri`, `tum-tablolar` | K1 | — | `tools/import-excel.js` ile `data/schema.json`'a dönüştürülür. Excel'deki hatalar (ör. `TBLFATUIRS.TBLTEKLIFMAS` → `FTIRSIP`) betikte düzeltilir. `TEMP`, `TEST`, `AA_`, `YEDEK`, `YDK` önekli yerel tablolar dışarıda bırakılır |
| `veritabani/temel-tablolar.md` | K1 | K4 | Tablo ilişkileri (ör. `TBLSTHAR` ↔ `TBLFATUIRS` birleşimi, `FTIRSIP` belge tipleri) kolon adlarından ve NetsisQuick sorgularından çıkarıldı |
| `veritabani/sql-ornekleri.md` | K1, K4 | K7, K10 | `NETSIS..SIRKETLER30`, `dbo.TRK()` gibi bilgiler saha bilgisi. Yaşlandırma, depo bakiyesi, devir hızı, finans ve sayfalama sorguları K10'daki katalogdan sadeleştirildi; test şirketinde çalıştığı görüldü |
| `veritabani/finans-tablolari.md` | K10 | K1, K9 | Değer listeleri test şirketinin dağılımından (yalnız görülen değerler, sayılar değil). `TBLBNKHESTRA` hareket türü kolonları doğrulanmadı |
| `entegrasyon-deseni.md` | K10 | K9 | Bir uygulamada kurulan desen; uygulamanın adı ve adresi sayfada yok |
| `netopenx/index.md` | K3 (temel bilgiler) | K5 (NetOpenX Temelleri/Başlangıç) | Kurulum, register, 32 bit uyarısı |
| `netopenx/baglanti.md` | K4 (`cNetsis.cs`) | K5 (Kernel, Baglanti), K3 | `yeniSirket` parametreleri, `FreeNetsisLibrary`, `Marshal.ReleaseComObject` |
| `netopenx/nesne-katalogu.md` | K5 (NetOpenX Örnekler, 50 nesne) | — | 40+ `kernel.yeni…` fabrika metodu |
| `netopenx/fatura-ve-irsaliye.md` | K4 | K5 (Fatura, TopluFatura), K3 (tevkifat) | C# kalem okuma `get_Kalem(i)` ile; Excel kolon eşlemesi K4'ten |
| `netopenx/belge-donusumleri.md` | K4 | K5 | `Siparis2IrsFat`, `Irsaliye2Fatura`; e-fatura numara biçimi |
| `netopenx/depo-ve-ambar.md` | K4 | K5 (AmbarFisMuh, DepTransMuh) | |
| `netopenx/cari-ve-stok.md` | K5 (Cari, stok kartı örneği) | K4, K3 (TCMB banka, talep/teklif) | Logo örneği doğrulanmış hâliyle alındı |
| `netopenx/e-belge.md` | K4 | K5 (`NetOpenX Ebelge.rar` eki) | |
| `netopenx/netrs-ve-transaction.md` | K5 (NetRS, `NetopenxNetRSKullanımı.rar`) | K4 | `NetsisTransaction(ttBaslat/ttBitir/ttGeriAl)` |
| `netopenx/diger-islemler.md` | K5 | K4 | NetBasimX, dekont, kasa, döviz vb. |
| `netopenx/enumlar.md` | K5, K4 | — | Bazı enum'lar yalnızca NetsisQuick yorum satırlarında geçer; sayfada belirtildi |
| `netopenx/hatalar.md` | K4 | K5, K7 | `SonNetsisHata.Kod` 401 = kayıt bulunamadı; COM hata kodları saha bilgisi |
| `rest/index.md`, `rest/kurulum.md` | K2 | K5 (NetOpenX Rest Temel, `NetOpenXRest.pdf`) | Ürün ailesi, lisans, mimari |
| `rest/kimlik-dogrulama.md` | K2 | K5 (Başlangıç 1) | `POST api/v2/token`, form gövdesi, `grant_type=password` |
| `rest/sorgulama.md` | K2 | K5 (Başlangıç 2 - GET) | `limit`, `offset`, `sort`, `fields`, `q` |
| `rest/uclar.md` | K2 | K5 (Kütüphane) | Uç kataloğu |
| `rest/istemci-kutuphanesi.md` | K2 | K5 (RestClient örnek kodlar, DocProje) | |
| `rest/json-ornekleri.md` | K2 | K5 (Başlangıç 3 - POST, 4 - PUT; `NoxRestNativeFaturaOrnek.rar`) | `ItemSlips` gövdesi |
| `rest/kimlikler-ve-enumlar.md`, `rest/transaction-ve-hatalar.md` | K2 | K5, K7, K9 | `TResult` zarfı; `SafeDeposits` kimliği K9 |
| `rest/canli-denemeler.md`, `rest/uclar.md` ve `rest/json-ornekleri.md` kasa/çek/cari notları | K9 | K10 | İkinci tur bölümü 9.0.72.5 ile |
| `rest/guvenlik.md` | K2 | K7 | |
| `rest/bilinen-sorunlar.md` | K2 | K5, K7 | Logo örneklerindeki hatalar |
| `surumler/index.md` | K6 | — | Elle yazıldı; klasör açıklamaları dosya adlarından çıkarıldı |
| `logo-araclari/index.md` | K8 | — | Elle yazıldı. Dosya açıklamalarının bir kısmı yalnızca dosya adından çıkarıldı; sayfada "(adından)" diye işaretli |
| `logo-araclari/e-belge-kodlari.md` | K8 | — | `tools/import-indirme.js` üretir. XML'ler 2021 tarihli; GİB güncel listesiyle karşılaştırılmadı |
| `surumler/tum-surumler.md`, `surumler/yama-icerikleri.md` | K6 | — | `tools/import-indirme.js` üretir, elle düzenlemeyin |

"Ek kaynak" sütunundaki eşleme, içerik hazırlanırken kullanılan kaynakların özetidir; satır satır atıf değildir. Kesin atıf gereken bir bilgi için ilgili kaynağa dönüp doğrulayın.

## Yeniden üretme

| Çıktı | Komut | Girdi |
|-------|-------|-------|
| `data/schema.json` | `npm run import:excel` | K1 Excel dosyası (yerelde) |
| `kaynak/logo-dys/` | `node tools/import-dys.js <döküm.json>` | Tarayıcıda alınan DYS dökümü (sayfalar Vaadin iframe'inde yüklenir) |
| `content/surumler/tum-surumler.md`, `yama-icerikleri.md`, `content/logo-araclari/e-belge-kodlari.md` | `npm run import:indirme` | `kaynak/logo-indirme/files.json`, `agac.tsv`, `tools-agac.tsv`, `tools/` altındaki XML'ler |
| `docs/` | `npm run build` | `content/`, `data/` |

`agac.tsv` tarayıcıda CrushFTP'nin `getXMLListing` komutuyla (`POST /WebInterface/function/`, `command=getXMLListing&format=JSONOBJ&path=...`) klasör klasör alındı. `files.json` doğrudan indirilebilir.

## Yayınlanmayan / ayıklanan bilgiler

- Excel dosyasının adı ve hücre konumları sitede gösterilmez. `data/schema.json` repoda bu bilgileri (`source` alanları) içerir, sitede yayınlanan kopyadan çıkarılır.
- NetsisQuick'teki şirket adları, sunucu adresleri, kullanıcı adları ve şifreler örneklere taşınmadı; örneklerde yer tutucu kullanıldı.
- Yerel veritabanı nesneleri (test/yedek tablolar) şemadan çıkarıldı.
- Logo DYS içeriği ve kurulum dosyaları Logo Yazılım'a aittir; sitede kopyalanmaz, yalnızca özetlenir ve bağlantı verilir.
