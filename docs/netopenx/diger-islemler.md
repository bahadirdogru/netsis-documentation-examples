---
title: Diğer işlemler
url: https://netsis.bahadirdogru.com/netopenx/diger-islemler/
---

# Diğer işlemler

## Kaydetmeden hesaplama

```csharp
Fatura f = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
FatUst ust = f.Ust();
ust.CariKod = "00001"; ust.Tarih = DateTime.Now; ust.TIPI = TFaturaTipi.ft_Acik;
FatKalem k = f.kalemYeni("STK01");
k.STra_GCMIK = 1; k.STra_NF = 100; k.STra_BF = 100; k.STra_KDV = 20; k.DEPO_KODU = 1;

f.HesaplamalariYap();     // toplamlar, KDV, iskontolar hesaplanır
// ust üzerindeki toplam alanlarını oku; istersen sonra f.kayitYeni()
```

## Fatura alt maliyet alanı (tevkifatlı fatura örneği)

[bahadirdogru.com'daki tevkifatlı fatura örneği](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/) `HesaplamalariYap()` sonrasında başlıktaki `FAT_ALTM2` alanını `-1` yapıp kaydeder. Tevkifat oranı ve kodu bu örnekte gösterilmez; Netsis'te tevkifat genellikle stok/cari kartındaki tevkifat tanımı ve e-fatura parametresi (`TBLEFATPRM.EFATTEVKOD`) üzerinden gelir. Kendi kurulumunuzda test şirketinde doğrulayın.

```csharp
f.HesaplamalariYap();
f.Ust().FAT_ALTM2 = -1;
f.kayitYeni();
```

## TCMB banka kodlarını güncelleme

`Sirket` nesnesi üzerinde, TCMB'nin yayımladığı banka/şube listesini çevrimiçi güncelleyen bir metot vardır:

```csharp
sirket.TCMBBankaKodlariOnlineGuncelleme("0001", "");
```

Parametrelerin anlamı belgelenmemiştir (ilk parametre örnekte banka kodu biçiminde).

## Talep / teklif okuma

```csharp
Fatura teklif = kernel.yeniFatura(sirket, TFaturaTip.ftSatTeklif);
teklif.OkuUst(teklifNo, cariKod);
teklif.OkuKalem();
for (int i = 0; i < teklif.KalemAdedi; i++)
{
    FatKalem k = teklif.get_Kalem(i);
    // k.StokKodu, k.STra_BF ...
}
```

Talep ve teklifleri siparişe ya da teklife dönüştürmek için COM'da `kernel.YeniTalepTeklifIslem(sirket)` nesnesi vardır: `BelgeTipi`, `BelgeNo`, `kalemYeni()`, `BelgelerKapatilsin` ayarlanır, sonra `Siparislestir()` ya da `Tekliflestir()` çağrılır. REST karşılığı `DemandOfferManager.ConvertToOrder` / `ConvertToOffer` ([istemci kütüphanesi](/rest/istemci-kutuphanesi/)). Talep tipleri: `ftSatTalep`, `ftAlTalep`; teklif tipleri: `ftSatTeklif`, `ftAlTeklif`.

## Stok bakiyesi

```csharp
StokPH ph = new StokPH();        // VB: Dim StokPH As New NetOpenX.StokPH
ph.Stok_Kodu = "STK001";
sirket.Bakiye_Getir(ph);
double giris = ph.Top_Giris_Mik, cikis = ph.Top_Cikis_Mik;
double sipBekleyen = ph.Mus_Top_Siparis, sipTeslim = ph.Mus_Top_Teslim;
```

Örnek Logo'nun VB kodundan uyarlanmıştır; SQL'de `TBLSTOKPH` tablosuna karşılık gelir.

## Diğer nesneler

Kasa, dekont, çek/senet, banka hareketi, havale/EFT, yevmiye fişi, iş emri, üretim sonu, MRP, maliyet, basım, belge kilitleme, bildirim, iş akışı onayı gibi işlemlerin her biri ayrı bir `kernel.yeni…` nesnesiyle yapılır. Tam liste: [Nesne kataloğu](/netopenx/nesne-katalogu/).

## Oracle üzerinde bağlantı

```csharp
sirket = kernel.yeniSirket(TVTTipi.vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "sifre", 0);
```

Eski bir örnekte enum adları `NETSISVT.vtOracle` ve `FaturaTipi.ftSatTeklif` olarak geçer; bu, NetOpenX'in eski tür kitaplığı adlarıdır. `NetOpenX50` ile `TVTTipi` ve `TFaturaTip` kullanılır.

## Basım (NetBasimX)

Fatura ve diğer belgelerin Netsis dizaynıyla basımı için `NetBasimX` COM kütüphanesi vardır. NetsisQuick referans eder ama kullanım örneği bu sitede henüz yok. REST tarafında basım uçları PDF döndürür: [Basım (Print)](/rest/uclar/#basim-print).
