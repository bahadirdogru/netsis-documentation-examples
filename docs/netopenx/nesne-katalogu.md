---
title: Nesne kataloğu
url: https://netsis.bahadirdogru.com/netopenx/nesne-katalogu/
---

# Nesne kataloğu

NetOpenX'te her iş nesnesi `Kernel` üzerindeki bir `yeni…` fabrika metoduyla, açık bir `Sirket` oturumu verilerek üretilir. Bu tablo Logo'nun resmî örnek kodlarından (Logo DYS, "NetOpenX - Örnekler") derlenmiştir. "Örnek" sütunu, örneklerin bu depodaki kopyasına gider ([kaynak/logo-dys](https://github.com/bahadirdogru/netsis-documentation-examples/tree/main/kaynak/logo-dys)).

> Üye listeleri örneklerde geçenlerle sınırlıdır. Tam liste için Visual Studio'da **Object Browser → NetOpenX50** açın.


## Kartlar

| Fabrika | Nesne | Başlıca üyeler | Örnek |
|---------|-------|----------------|-------|
| `yeniCari(sirket)` | `Cari` | `TemelBilgi()` → `CariTemelBilgi`, `EkBilgi()` → `CariEkBilgi`, `kayitYeni`, `kayitOku`, `kayitDuzelt`, `kayitSil`, `NetsisTransaction` | [Cari](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/cari.md) |
| `yeniStok(sirket)` | `Stok` | `TemelBilgi()` → `StokTemelBilgi`, `EkBilgi()` → `StokEkBilgi`, `kayitYeni`, `kayitOku`, `kayitDuzelt`, `kayitSil`, `NetsisTransaction` | [Stok](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/stok.md) |
| `yeniMuplan(sirket)` | `Muplan` | `TemelBilgi()`, `EkBilgi()`, `kayitYeni` (muhasebe hesap planı, `TBLMUPLAN`) | [MuPlan](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/muplan.md) |
| `yeniProje(sirket)` | `Proje` | `Proje_Kodu`, `Proje_Aciklama`, `kayitYeni`, `kayitOku` | [Proje](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/proje.md) |
| `yeniDoviz(sirket)` | `Doviz` | `BIRIM`, `ISIM`, `NETSISSIRA`, `kayitYeni`, `kayitOku`, `DovizKurGuncelle()` | [Doviz](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/doviz.md) |
| `yeniKur(sirket)` | `Kur` | `Sira`, `Tarih`, `DOV_ALIS`, `DOV_SATIS`, `kayitYeni`, `kayitOku` | [Kur](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/kur.md) |
| `yeniPlanlamaKayitlari(sirket, TStokPlanlamaKayitTip)` | `PlanlamaKayitlari` | `Stok_Kodu`, `SIPARISKARSILAMA`, `SIPARISTAKIP`, `PlanlamaTipi`, `TEDARIKCITERCIH`, `REZERV_BAK_TAKIP`, `kayitYeni` | [Planlama](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/planlamakayitlari.md) |
| `yeniBaglantiAna(sirket)` | `BaglantiAna` | `Oku()`, `BaglantiAdedi`, `Baglanti` (cari bağlantı/sözleşme kayıtları) | [Bağlantı](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/baglanti.md) |

## Stok ve satış belgeleri

| Fabrika | Nesne | Başlıca üyeler | Örnek |
|---------|-------|----------------|-------|
| `yeniFatura(sirket, TFaturaTip)` | `Fatura` | `Ust()`, `kalemYeni(stok)`, `get_Kalem(i)` / `KalemAdedi`, `OkuUst`, `OkuKalem`, `YeniNumara`, `kayitYeni`, `kayitSil`, `HesaplamalariYap`, `Siparis2IrsFat`, `Irsaliye2Fatura`, `NumaraDegistir`, `SiparisRevizyon`, `tahsilatYeni`, `TahsilatKayitKullan`, `KosulluHesapla`, `FiyatSistemineGoreHesapla`, `StokKartinaGoreHesapla`, `OtomatikCevrimYapilsin` | [Fatura](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/fatura.md) |
| `yeniStokHareket(sirket)` | `StokHareket` | `Stok_Kodu`, `Sthar_Tarih`, `Sthar_Htur`, `Sthar_Gckod`, `Sthar_Gcmik`, `Sthar_Bf`, `DEPO_KODU`, `GirisDepoKodu`, `kayitYeni`, `ReceteliKayit()` | [StokHareket](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/stokhareket.md) |
| `new StokPH` + `sirket.Bakiye_Getir(stokPH)` | `StokPH` | `Stok_Kodu` verilir; `Top_Giris_Mik`, `Top_Cikis_Mik`, `Mus_Top_Siparis`, `Mus_Top_Teslim` okunur | [StokPH](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/stokph.md) |
| `yeniTopluFatura(sirket, TFaturaTip)` | `TopluFatura` | `AltCariKodu`, `UstCariKodu`, `AltIrsaliyeNumarasi`, `UstIrsaliyeNumarasi`, `FaturaNumarasi`, `IrsaliyelerBirlessin`, `FaturalastirmaKirilim`, `HaricTutulacakBelgeNoEkle()`, `IrsaliyeleriFaturalastir()` | [TopluFatura](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/toplufatura.md) |
| `yeniTopluSiparisToIrsFat(sirket, kaynakTip, hedefTip)` | `SiparisTopluIrsFat` | `HaricTutulacakSiparisNoEkle()`, `TopluSiparisToIrsFat()` | [Toplu sipariş](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/siparisten-toplu-irsaliye-fatura-olusturma.md) |
| `YeniTalepTeklifIslem(sirket)` | `TalepTeklifIslem` | `BelgeTipi`, `BelgeNo`, `YeniNumara()`, `kalemYeni()`, `BelgelerKapatilsin`, `Siparislestir()`, `Tekliflestir()` | [Fatura](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/fatura.md) |
| `yeniMustahsil(sirket, cariKod)` | `Mustahsil` | `Ust`, `KalemEkle()`, `Sakla()`, `MakbuzOku()`, `NumaraDegistir()` | [Müstahsil](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/mustahsil.md) |
| `yeniMamulRezervasyonu(sirket)` | `MamulRezervasyonu` | Müşteri siparişine mamul rezervasyonu ve iptali (`TMamulRezervasyonuIslemTipi`) | [Rezervasyon](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/mamul-rezervasyon.md) |

## Finans

| Fabrika | Nesne | Başlıca üyeler | Örnek |
|---------|-------|----------------|-------|
| `yeniKasa(sirket)` | `Kasa` | `KsMas_Kod`, `IO`, `Tip`, `Kod`, `Cari_Muh`, `Fisno`, `Tutar`, `Kdv_Dahil`, `Kdv_Oran`, `Islem(TKasaIslem)`, `CSKOdeme()`, `KasaKalemYeni()`, `KdvKalemAdedi`, `kayitOku` | [Kasa](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/kasa.md) |
| `yeniHizliTahsilatAna(sirket)` | `HizliTahsilatAna` | `IslemTarihi`, `KasaKod`, `BelgeNo`, `CariKod`, `DOVTIP`, `tahsilatYeni()`, `kayitYeni`, `Oku()`, `kayitSil` | [HızlıTahsilat](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/hizlitahsilat.md) |
| `yeniCekSenAna(sirket, TCekSenType)` | `CekSenetAna` | `EvrakYeni()`, `EvraklariKaydet()`, `yeniKefil()`, `OkunanCS`, `kayitOku()`, `NetsisTransaction` | [ÇekSenet](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/ceksenet.md) |
| `yeniCSDekont(sirket, TDekCSTip)` | `DekCekSen` | Çek/senet tahsil ve ödeme dekontu: `SC_NO`, `Seri`, `C_M`, `Banka_Kodu`, `Dekont_Tarihi`, `CSDOdeme()`, `BCSDOdeme()` | [DekÇekSen](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/dekceksen.md) |
| `yeniDekont(sirket)` | `Dekont` | `CDekont()` cari, `SDekont()` stok, `MDekont()` muhasebe, `BDekont()` banka; `Kod`, `C_M`, `B_A`, `Tutar`, `Tarih`, `kayitOku` | [Dekont](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/dekont.md) |
| `yeniDekomas(sirket)` | `Dekomas` | Genel dekont: `YeniNumaraAl()`, `KalemEkle()`, `Tamamla()`, `BelgeGetir()`, `TumKalemleriSil()` | [Dekomas](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/dekomas.md) |
| `yeniBankaHesTraAna(sirket)` | `BankaHesTraAna` | `HareketYeni()`, `HareketKaydet()`, `kayitOku()`, `OkunanHesTra` | [Banka hareket](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/banka-hesap-hareketleri.md) |
| `yeniBankaHavaleEftVirman(sirket, TBankaHavaleEftTip, …)` | `BankaHavaleEftVirman` | `EvrakYeni()`, `EvrakKaydet()` | [Havale/EFT](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/banka-havale-eft.md) |

## Muhasebe ve maliyet

| Fabrika | Nesne | Başlıca üyeler | Örnek |
|---------|-------|----------------|-------|
| `yeniFis(sirket)` | `FisAna` | Yevmiye fişi: `AyKodu`, `YilKodu`, `FisTip` (`TFisType.ftMahsup`), `Tarih`, `detayYeni()` (`TFisAnaDetayType.fdtBorc`/`fdtAlacak`), `kayitYeni()` | [FisAna](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/fisana.md) |
| `yeniMaliyet(sirket, TMaliyetTip)` | `AmbarFisMuh`, `DepTransMuh`, `DagFisOlus`, `MaliyetMuhasebesi`, `StokMaliyet`, `StDovEnfCevir` | Ambar fişi / depo transferi muhasebeleştirme, dağıtım fişi, maliyet muhasebesi, stok maliyeti, enflasyon çevrimi; parametreler + `Calistir()` | [Maliyet](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/stokmaliyet.md) |

## Üretim

| Fabrika | Nesne | Başlıca üyeler | Örnek |
|---------|-------|----------------|-------|
| `yeniIsEmri(sirket)` | `IsEmri` | `IsEmriNo`, `Tarih`, `StokKodu`, `Miktar`, `SiparisNo`, `TeslimTarihi`, `kayitYeni`, `kayitOku`, `kayitDuzelt`, `kayitSil` | [İşemri](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/isemri.md) |
| `yeniRecetedenIsemri(sirket)` | `RecetedenIsemri` | `IsemriSecimListHazirla()`, `IsemriSecimList`, `IsemriSecimListtenIsemirleriniOlustur()` | [İşemri](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/isemri.md) |
| `yeniUretim(sirket)` | `Uretim` | Üretim sonu kaydı: `UretSon_FisNo`, `SonFisNumarasi()`, `UretSon_Mamul`, `UretSon_Miktar`, `UretSon_Depo`, `kayitYeni()`, `kayitFisNoIleUretimSonu()`, `kayitSil` | [Üretim](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/uretim.md) |
| `yeniSerbestUSK(sirket)` | `SerbestUSK` | Serbest üretim sonu: `FisUret()`, `Kaydet()`, `FisYukle()`, `KalemGetir()`, `YeniKalem()`, `SeriEkle()`, `KalemFireDetayEkle()`, `HataKodu`, `HataMesaji` | [SerbestUSK](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/serbestusk.md) |
| `yeniUAK(sirket)` / `yeniUakToUsk(sirket)` | `UAK`, `UakToUsk` | Üretim akış kontrol: `UAKYeniKayit()`, `UAKKaydet()`, `UAKOku()`, `UAKSil()`; `UretimSonuKayitlariOlustur()` | [UAK](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/uak.md) |
| `yeniMrp(sirket)` | `Mrp` | `MGPCalistir()`, `GereksinimPlanlamaOlustur()`, `IsEmirleriniDengele()`, `TalepleriDengele()` | [MRP](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/mrp.md) |

## Sistem ve yardımcılar

| Fabrika / üye | Nesne | Başlıca üyeler | Örnek |
|---------------|-------|----------------|-------|
| `yeniNetRS(sirket)` | `NetRS` | SQL: `Ac(sql)`, `EOF`, `FieldByName(ad).AsString`, `SonrakiK()`, `IlkK()`, `Calistir(sql)`, `NetsisTransaction()` | [NetRS](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/netrs.md) · [NetRS ve transaction](/netopenx/netrs-ve-transaction/) |
| `yeniBasim(sirket)` | `Basim` | `FaturaBasimDizaynNo()`, `FaturaBasim()`, `YevmiyeFisBasimDizaynNo()`, `CekSenetBasimDizaynNo()`, `KasaBasim()`, `IrsFatBarkodBas()`, `IrsFatBarkodKalemBas()`, `FiyatListesiBarkodBas()`, `PDFPath` | [Basım](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/basim.md) |
| `yeniBelgeKilitleme(sirket)` | `BelgeKilitleme` | Fatura, yevmiye, iş emri, reçete, bakım emri kilitleme (`TBelgeKilitlemeBelgeTipi`, `TBelgeKilitDurumTipi`) | [Kilitleme](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/belge-kilitleme.md) |
| `yeniNetsisBildirim(sirket)` | `NetsisBildirim` | `AliciEkle()`, `Baslik`, `Mesaj`, `GonderimTarih`, `DosyaEkle()`, `NetsisLinkEkle()`, `Gonder()` | [Bildirim](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/bildirim-giris.md) |
| `yeniNetsisCore(sirket)` | `ICore` | `NetLibSession` (program bilgisi, aktif kullanıcı), `NetLibSMS()` | [ICore](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/icore.md) |
| `yeniIsAkis(sirket)` | `WFTObject` | İş akışında bekleyen kayıtları onaylama: `PATHKODU`, `ONAYNUMARASI`, `DURUMU`, `Calistir`, `kayitDuzelt` | [WFT](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/wftobject.md) |
| `yeniSirketAktifEXE(...)` | `Sirket` | Netsis içinden (Temelset dinamik kodlama) çalışan koddan açık oturumu kullanır | [Kernel](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/kernel.md) |
| `kernel.Version`, `kernel.SirketListesi`, `kernel.get_EkModulVar(no)`, `kernel.SonNetsisHata` | `Kernel` | Sürüm, şirket listesi (`SirketInfo.SirketAdi`, `SirketYili`), ek modül kontrolü, son hata | [Kernel](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/kernel.md) |

## Sirket üzerindeki işlemler

`Sirket` nesnesi yalnızca oturum değildir; şirket düzeyi toplu işlemleri de taşır. REST'teki [`CompanyManager`](/rest/istemci-kutuphanesi/#companymanager) yöntemlerinin COM karşılıklarıdır.

| Metot | İşlem |
|-------|-------|
| `CariDovizFarklariniKapat(CariKurFarkibilgi)` | Cari döviz (kur) farkı kapama |
| `MuhAydanAyaFisAktarim(...)` | Muhasebe fişini aydan aya aktarma |
| `MuhHesapKoduAktarim(...)` | Muhasebe hesap kodu aktarımı |
| `CariKoduDegistir(...)`, `StokKoduDegistir(...)` | Kod değiştirme (virman seçenekli) |
| `FisNumaraDegisikligi(...)` | Yevmiye fiş numarası değiştirme |
| `CariHareketKontrol`, `StokHareketKontrol`, `BankaHareketKontrol`, `YevmiyeKontrol` | Hareket ve fiş tutarlılık kontrolleri |
| `AcikReceteAnaliziCalistir(...)`, `ReceteStokBaglantiOlustur(...)` | Reçete işlemleri |
| `EPostaGonder(...)` | Netsis e-posta altyapısıyla gönderim |
| `TCMBBankaKodlariOnlineGuncelleme(...)` | TCMB banka/şube listesini güncelle |
| `KvkkAnonimlestir(...)` | KVKK anonimleştirme |
| `GenelRehber(...)` | Genel rehber |
| `Bakiye_Getir(StokPH)` | Stok bakiyesi |
| `KantardanSayiOku(...)` | Kantar entegrasyonu |
| `DovizCevrim(...)`, `getirNDS(...)` | Döviz çevrimi, NDS bilgisi |
| `SirketAdi`, `SirketYili`, `LogOff()` | Oturum bilgisi ve kapatma |

Parametre ayrıntıları Logo örneğindedir: [Sirket](https://github.com/bahadirdogru/netsis-documentation-examples/blob/main/kaynak/logo-dys/sayfalar/netopenx/sirket.md).
