---
title: Fatura ve irsaliye
url: https://netsis.bahadirdogru.com/netopenx/fatura-ve-irsaliye/
---

# Fatura ve irsaliye

Netsis'te fatura, irsaliye, sipariş, teklif, talep, depolar arası transfer ve ambar fişi **aynı nesneyle** yazılır: `Fatura`. Belgenin türünü `kernel.yeniFatura(sirket, TFaturaTip)` çağrısındaki enum belirler.

| Belge | `TFaturaTip` | Tablo |
|-------|--------------|-------|
| Satış faturası | `ftSFat` | `TBLFATUIRS` (FTIRSIP=1) + `TBLSTHAR` |
| Alış faturası | `ftAFat` | `TBLFATUIRS` (2) |
| Satış irsaliyesi | `ftSIrs` | `TBLFATUIRS` (3) |
| Alış irsaliyesi | `ftAIrs` | `TBLFATUIRS` (4) |
| Müşteri (satış) siparişi | `ftSSip` | `TBLSIPAMAS` (6) + `TBLSIPATRA` |
| Satıcı (alış) siparişi | `ftASip` | `TBLSIPAMAS` (7) |
| Satış teklifi | `ftSatTeklif` | teklif tabloları |
| Lokal depolar arası transfer | `ftLokalDepo` | `TBLFATUIRS` (8) |
| Ambar giriş / çıkış fişi | `ftAmbarG` / `ftAmbarC` | `TBLFATUIRS` (9 / 8) |

Tam liste: [Enum'lar](/netopenx/enumlar/#tfaturatip).

## Yeni belge: adım adım

```csharp
Fatura fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);

// 1) Numara al. Parametre seri önekidir ("A", "ABC" ...)
string no = fatura.YeniNumara("ABC");

// 2) Başlık
FatUst ust = fatura.Ust();
ust.FATIRS_NO   = no;
ust.CariKod     = "120-01-001";
ust.Tarih       = DateTime.Today;
ust.FiiliTarih  = DateTime.Today;
ust.ENTEGRE_TRH = DateTime.Today;
ust.TIPI        = TFaturaTipi.ft_Acik;     // açık fatura
ust.KDV_DAHILMI = false;
ust.PLA_KODU    = "01";                     // plasiyer
ust.Proje_Kodu  = "1";
ust.EKACK1      = "Sipariş: 4711";          // ek açıklama 1..16

// 3) Kalemler
FatKalem kalem = fatura.kalemYeni("STK001");   // stok kodu
kalem.DEPO_KODU  = 1;
kalem.STra_GCMIK = 10;       // miktar
kalem.STra_BF    = 125.50;   // brüt birim fiyat
kalem.STra_NF    = 125.50;   // net birim fiyat
kalem.STra_KDV   = 20;       // KDV oranı
kalem.STra_SatIsk = 5;       // satır iskontosu 1 (%)

// 4) Kaydet
fatura.kayitYeni();
string kaydedilenNo = ust.FATIRS_NO;   // Netsis numarayı değiştirmiş olabilir
```

> **Numara değişebilir.** `YeniNumara` ile alınan numara, kayıt anında başka bir kullanıcı aynı numarayı kullandıysa Netsis tarafından ilerletilir. Her zaman `kayitYeni()` sonrası `ust.FATIRS_NO`'yu okuyun.

### Hesaplama bayrakları

`kayitYeni()` öncesi `Fatura` nesnesinde ayarlanır:

| Özellik | Etkisi |
|---------|--------|
| `KosulluHesapla` | Koşul (kampanya, iskonto) tanımlarına göre hesapla |
| `FiyatSistemineGoreHesapla` | Fiyat listesinden fiyat getir |
| `StokKartinaGoreHesapla` | Stok kartındaki fiyat/KDV ile hesapla |
| `RiskKontrol` | Cari risk limitini kontrol et; aşılırsa kayıt hata verir |

Toplamları kaydetmeden görmek için `fatura.HesaplamalariYap()` çağrılır; sonra `FatUst` üzerindeki toplam alanları okunabilir.

### FatUst alanları

| Alan | Tablo kolonu | Açıklama |
|------|--------------|----------|
| `FATIRS_NO` | `FATIRS_NO` | Belge no (15 karakter) |
| `GIB_FATIRS_NO` | `GIB_FATIRS_NO` | GİB (e-fatura/e-arşiv) numarası, 16 karakter |
| `CariKod` | `CARI_KODU` | Cari. Ambar fişinde masraf merkezi kodu yazılır |
| `CARI_KOD2` | `CARI_KOD2` | Farklı teslim (teslim carisi) |
| `Tarih` | `TARIH` | Belge tarihi |
| `FiiliTarih` | | Fiili sevk/teslim tarihi |
| `ENTEGRE_TRH` | | Muhasebe entegrasyon tarihi |
| `SIPARIS_TEST` | `SIPARIS_TEST` | Sipariş teslim tarihi |
| `FIYATTARIHI`, `KOSULTARIHI`, `DovBazTarihi` | | Fiyat, koşul ve döviz baz tarihleri |
| `TIPI` | `TIPI` | `TFaturaTipi`: açık, kapalı, iade, ihracat… |
| `KDV_DAHILMI` | `KDV_DAHILMI` | Fiyatlar KDV dahil mi |
| `PLA_KODU` | `PLA_KODU` | Plasiyer |
| `Proje_Kodu` | `PROJE_KODU` | Proje |
| `KOD1`, `KOD2` | `KOD1`, `KOD2` | Özel kodlar |
| `KOSVADEGUNU` | `KOSVADEGUNU` | Vade günü |
| `EKACK1` … `EKACK16` | `TBLFATUEK.ACIK1..16` | Ek açıklamalar |
| `EIrsaliye` | | `true`: e-irsaliye olarak işaretle |
| `EfaturaCarisiMi` | | Salt okunur; cari e-fatura mükellefi mi |
| `EFatOzelKod` | | E-fatura istisna/özel kodu (ör. KDV istisna kodu; liste: [E-belge kod listeleri](/logo-araclari/e-belge-kodlari/#kdv-istisna-kodlari)) |
| `AMBHARTUR` | | Ambar hareket türü (`TAmbarHarTur`) |
| `CikisYeri` | | Ambar çıkış yeri (`TCikisYeri`) |
| `FAT_ALTM1`, `FAT_ALTM2` | `FAT_ALTM1/2` | Fatura alt maliyet tutarları |

### FatKalem alanları

| Alan | Tablo kolonu | Açıklama |
|------|--------------|----------|
| (kurucu) `kalemYeni(stokKodu)` | `STOK_KODU` | Stok kodu |
| `STra_GCMIK` | `STHAR_GCMIK` | Miktar |
| `STra_BF` | `STHAR_BF` | Brüt birim fiyat |
| `STra_NF` | `STHAR_NF` | Net birim fiyat |
| `STra_KDV` | `STHAR_KDV` | KDV oranı |
| `STra_SatIsk`, `STra_SatIsk2` … `STra_SatIsk6` | `STHAR_SATISK…` | Satır iskontoları |
| `STra_DOVTIP`, `STra_DOVFIAT` | `STHAR_DOVTIP`, `STHAR_DOVFIAT` | Döviz tipi ve dövizli fiyat |
| `Olcubr` | `OLCUBR` | Ölçü birimi sırası (1, 2, 3) |
| `DEPO_KODU` | `DEPO_KODU` | Depo (çıkış deposu) |
| `Gir_Depo_Kodu` | | Depolar arası transferde giriş deposu |
| `ProjeKodu` | `PROJE_KODU` | Kalem proje kodu |
| `MuhasebeKodu` | `MUH_KODU` | Kalem muhasebe kodu (ambar fişlerinde) |
| `Ekalan`, `Ekalanneden` | `EKALAN`, `EKALAN_NEDEN` | Ek alan. `Ekalanneden = "1"` iken `Ekalan` kalem açıklaması (ör. hizmet kartında satır adı) olarak basılır |

> `STra_SatIsk` ilk iskontodur. NetsisQuick'in eski bir sürümünde üç iskonto da `STra_SatIsk`'e yazılıp birbirini ezmişti; 2. ve 3. iskonto için `STra_SatIsk2`, `STra_SatIsk3` kullanın.

### Barkoddan stok kodu bulmak

`kalemYeni` stok kodu ister. Elinizde barkod varsa önce SQL ile çevirin:

```sql
SELECT STOK_KODU FROM TBLSTSABIT WHERE BARKOD1 = @barkod
```

## Mevcut belgeyi okumak

```csharp
Fatura fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSatTeklif);
fatura.OkuUst("000000000088886", "120-01-001");   // belge no, cari kod
fatura.OkuKalem();

FatUst ust = fatura.Ust();
for (int i = 0; i < fatura.KalemAdedi; i++)
{
    FatKalem k = fatura.get_Kalem(i);      // C#'ta indeksli özellik; VB/Delphi'de fatura.Kalem(i)
    Console.WriteLine($"{k.StokKodu} {k.STra_GCMIK} x {k.STra_BF}");
}
```

`OkuUst` belge numarası **ve cari kodu** ister, çünkü aynı numara farklı carilerde tekrar edebilir. Belge bulunamazsa hata fırlar ve `kernel.SonNetsisHata.Kod` `401` olur ([Hatalar](/netopenx/hatalar/#netsis-hata-kodu)).

Logo'nun örneğinde bu okuma deseniyle bir faturayı başka bir şirkete kopyalama da gösterilir: kaynak kalemlerden `STra_GCMIK`, `STra_GCMIK2`, `CEVRIM`, `STra_TAR`, `STra_NF`, `STra_BF`, `STra_IAF`, `STra_KDV`, `DEPO_KODU` hedef faturanın `kalemYeni(stokKodu)` satırına aktarılır.

## Belgeyi silmek

```csharp
Fatura irsaliye = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
irsaliye.OkuUst(irsaliyeNo, cariKod);
irsaliye.OkuKalem();
irsaliye.kayitSil();
```

Silme, ekrandan silmede olduğu gibi belgeye bağlı stok ve cari hareketlerini de kaldırır. E-belgesi gönderilmiş ya da faturalanmış bir irsaliyeyi silmeyin; önce bağlı belgeyi ele alın.

## Belgeyi düzeltmek

Okunan belgede alan değiştirip `kayitDuzelt()` çağrılır (metot NetsisQuick'te yorum satırı olarak geçer; davranışı doğrulanmadı):

```csharp
fatura.OkuUst(no, cari);
fatura.OkuKalem();
fatura.Ust().Tarih = new DateTime(2024, 5, 1);
fatura.kayitDuzelt();
```

## E-irsaliye olarak kaydetmek

E-irsaliye numarası farklı bir metotla alınır ve taşıma bilgisi eklenir:

```csharp
Fatura irs = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
FatUst ust = irs.Ust();
ust.EIrsaliye = true;
ust.FATIRS_NO = irs.YeniEIrsaliyeNumara("EIR");   // e-irsaliye serisi (TBLEIRSSERI)
ust.CariKod = cariKod;
ust.Tarih = DateTime.Today;

IEIrsEkBilgi ek = irs.EIrsaliyeEkYeni();
ek.PLAKA = "34ABC123";
ek.TASIYICIVKN = "1234567890";
ek.TASIYICIADI = "Taşıyıcı A.Ş.";
ek.TASIYICIIL = "İstanbul";
ek.TASIYICIILCE = "Tuzla";
ek.TASIYICIULKE = "TR";
ek.TASIYICIPOSTAKODU = "34940";
ek.SOFOR1ADI = "Ad"; ek.SOFOR1SOYADI = "Soyad"; ek.SOFOR1TCKN = "11111111111";
ek.SEVKTAR = DateTime.Now;
ek.DORSEPLAKA1 = "34XYZ99";

FatKalem k = irs.kalemYeni("STK001");
k.STra_GCMIK = 5; k.DEPO_KODU = 1;
irs.kayitYeni();
```

`IEIrsEkBilgi` ayrıca `SOFOR2…`, `SOFOR3…`, `SOFOR1ACIKLAMA`, `DORSEPLAKA2`, `DORSEPLAKA3` alanlarını taşır. Taslak oluşturma ve gönderim için [E-belge](/netopenx/e-belge/).

## Excel'den toplu belge (NetsisQuick deseni)

NetsisQuick, Excel satırlarını kalemlere çevirir. Satır başına beklenen kolonlar:

| Excel kolonu | Hedef |
|--------------|-------|
| `StokKodu` ya da `Barkod` | `kalemYeni(...)` |
| `Adet` | `STra_GCMIK` |
| `BrutFiyat`, `NetFiyat` | `STra_BF`, `STra_NF` |
| `Iskonto1..3` | `STra_SatIsk`, `STra_SatIsk2`, `STra_SatIsk3` |
| `StokAdi` | `Ekalanneden = "1"`, `Ekalan = StokAdi` |
| `EkAck1..16` (ilk satır) | `FatUst.EKACK1..16` |
| `MuhasebeKodu` | `MuhasebeKodu` (ambar fişi) |

NetsisQuick yalnızca dolu hücreleri ilgili alana yazar. Boş fiyatı `0` olarak yazmak, Netsis'in stok kartından ya da fiyat listesinden getireceği fiyatı ezebilir.
