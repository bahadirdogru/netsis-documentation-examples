---
title: NetOpenX (COM)
url: https://netsis.bahadirdogru.com/netopenx/
---

# NetOpenX (COM)

**NetOpenX**, Netsis'in kart ve belgelerini program dışından, Netsis iş kurallarını uygulayarak eklemek, okumak, değiştirmek ve silmek için sunduğu COM kütüphanesidir. Dosya adı `NetOpenX50.dll`'dir ve her Netsis setiyle birlikte `TEMELSET` (9.x'te `ENTERPRISE9`) klasöründe gelir. Ayrı bir kurulum programı yoktur.

NetOpenX ile yazılan bir fatura, Netsis ekranından girilmiş gibi davranır: numara verilir, stok ve cari hareketleri oluşur, bakiyeler güncellenir, muhasebe entegrasyonu hazırlanır.

> [NetOpenX REST](/rest/) de arka planda bu kütüphaneyi kullanır. Nesne ve alan adları (`FatUst`, `STra_GCMIK`, `KDV_DAHILMI`…) iki tarafta büyük ölçüde aynıdır.

## Gereksinimler

- Netsis kurulu bir Windows makinesi (istemci ya da sunucu). NetOpenX, Netsis'in kendi DLL'lerini ve veritabanı bağlantı katmanını kullanır.
- **NetOpenX Runtime lisansı.** Lisans Netsis Merkezi Kimlik Yönetimi'nden (SSO) indirilmiş olmalıdır. Geliştirme lisansı Logo çözüm ortağı üzerinden alınır.
- .NET Framework 4.x (örnekler 4.7.2 ve 4.8 ile yazıldı) ya da COM çağırabilen herhangi bir dil (VB6, VBScript, Delphi, Python `win32com`…).
- Kullanılan DLL ile veritabanının **aynı Netsis sürümünde** olması. Sürüm farkı, alan eksikliği ya da bağlantı hatası olarak döner.

## Kurulum (DLL'i register etmek)

1. Netsis sürümüne uygun `NetOpenX50.dll`'in yerini bulun (ör. `C:\NETSIS\ENTERPRISE9\` ya da `...\TEMELSET\`).
2. **Kolay yol:** Netsis kurulum klasöründeki `ENTERPRISE9\Servis\RegControl.exe`'yi **yönetici olarak** çalıştırın. Netsis bileşenlerini toplu register eder.
3. **Elle:** yönetici komut isteminde:

   ```bat
   regsvr32 "C:\NETSIS\ENTERPRISE9\NetOpenX50.dll"
   rem kaldırmak için
   regsvr32 /u "C:\NETSIS\ENTERPRISE9\NetOpenX50.dll"
   ```

4. Visual Studio'da **Add Reference → COM** sekmesinden `NetOpenX50` kütüphanesini ekleyin. Listede yoksa ya da farklı bir yol/sürüm gösteriyorsa DLL yanlış register edilmiştir.

`.csproj` içinde referans şöyle görünür:

```xml
<COMReference Include="NetOpenX50">
  <Guid>{184B0A14-1416-44D7-978C-DECC4FC09693}</Guid>
  <VersionMajor>5</VersionMajor>
  <VersionMinor>0</VersionMinor>
  <Lcid>0</Lcid>
  <WrapperTool>tlbimp</WrapperTool>
  <Isolated>False</Isolated>
  <EmbedInteropTypes>True</EmbedInteropTypes>
</COMReference>
```

Basım ve e-belge HTML'i gibi işlerde ek olarak `NetBasimX` kütüphanesi de referans edilebilir.

### 32 / 64 bit

Netsis istemcisi ve `NetOpenX50.dll` 32 bit'tir. .NET projesini **x86** hedefiyle ya da **AnyCPU + Prefer 32-bit** ile derleyin. 64 bit süreçten çağrılırsa COM sınıfı bulunamaz (`REGDB_E_CLASSNOTREG`, "Class not registered"). IIS'te barındırıyorsanız uygulama havuzunda *Enable 32-Bit Applications* açık olmalıdır.

## Nesne modeli

```text
Kernel                       giriş noktası; diğer nesneleri üretir
 ├─ yeniSirket(...)  → Sirket    şirkete (veritabanına) oturum
 ├─ yeniFatura(sirket, TFaturaTip) → Fatura
 │     ├─ Ust()          → FatUst      belge başlığı
 │     ├─ kalemYeni(stok)→ FatKalem    yeni satır
 │     ├─ get_Kalem(i)   → FatKalem    mevcut satır (okumada; VB'de Kalem(i))
 │     └─ EIrsaliyeEkYeni() → IEIrsEkBilgi  e-irsaliye taşıma bilgisi
 ├─ yeniCari(sirket)  → Cari
 ├─ yeniStok(sirket)  → Stok   (TemelBilgi(), EkBilgi())
 ├─ yeniEBelge(sirket, TEBelgeTip) → EBelge
 ├─ yeniKasa, yeniDekont, yeniCekSenAna, yeniFis, yeniIsEmri, yeniUretim, yeniNetRS, yeniBasim …
 ├─ Version, SirketListesi, SonNetsisHata
 └─ FreeNetsisLibrary()          kaynakları bırakır
```

40'tan fazla fabrika metodunun tam listesi: **[Nesne kataloğu](/netopenx/nesne-katalogu/)**.

Sayfalar:

- [Nesne kataloğu](/netopenx/nesne-katalogu/): tüm `kernel.yeni…` nesneleri ve `Sirket` üzerindeki işlemler.
- [Bağlantı ve kaynak yönetimi](/netopenx/baglanti/): `Kernel`, `Sirket`, `try/finally` şablonu.
- [Fatura ve irsaliye](/netopenx/fatura-ve-irsaliye/): `Fatura`, `FatUst`, `FatKalem` ile belge kaydı, okuma, silme.
- [Belge dönüşümleri](/netopenx/belge-donusumleri/): sipariş → irsaliye/fatura, irsaliye → fatura, numara değiştirme.
- [Depo ve ambar fişleri](/netopenx/depo-ve-ambar/): depolar arası transfer, ambar giriş/çıkış.
- [Cari ve stok](/netopenx/cari-ve-stok/): kart oluşturma, okuma, silme.
- [E-belge](/netopenx/e-belge/): e-fatura, e-arşiv, e-irsaliye taslağı ve görüntüleme.
- [Diğer işlemler](/netopenx/diger-islemler/): hesaplama, TCMB banka kodları, talep/teklif okuma.
- [NetRS ve transaction](/netopenx/netrs-ve-transaction/): oturum üzerinden SQL, `NetsisTransaction`.
- [Enum'lar](/netopenx/enumlar/): `TFaturaTip`, `TFaturaTipi`, `TEBelgeTip`…
- [Hatalar ve sorun giderme](/netopenx/hatalar/).

## Adlandırma alışkanlıkları

- Metotlar Türkçe ve küçük harfle başlar: `yeniSirket`, `kayitYeni`, `kayitOku`, `kayitSil`, `kayitDuzelt`.
- Bazı metotlar büyük harfle başlar: `Ust()`, `OkuUst()`, `OkuKalem()`, `YeniNumara()`, `NumaraDegistir()`, `Siparis2IrsFat()`, `Irsaliye2Fatura()`, `HesaplamalariYap()`.
- Özellik adları veritabanı kolonlarına yakındır ama birebir değildir: `FatUst.CariKod` → `TBLFATUIRS.CARI_KODU`; `FatKalem.STra_GCMIK` → `TBLSTHAR.STHAR_GCMIK`; `FatUst.EKACK1` → `TBLFATUEK.ACIK1`.
- Enum'lar `T` önekiyle başlar: `TFaturaTip`, `TVTTipi`, `TOkumaTipi`.
