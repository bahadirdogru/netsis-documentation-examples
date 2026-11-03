---
title: Cari ve stok
url: https://netsis.bahadirdogru.com/netopenx/cari-ve-stok/
---

# Cari ve stok kartları

Kart nesneleri (`Cari`, `Stok`) belge nesnelerinden farklı bir okuma modeli kullanır: `kayitOku(TOkumaTipi, filtre)` ile bir kayıt kümesi açılır, sonra üzerinde gezinilir.

## kayitOku

```csharp
Cari cari = kernel.yeniCari(sirket);
if (cari.kayitOku(TOkumaTipi.otAc, "CASABIT.CARI_KOD = '120-01-001'"))
{
    cari.kayitOku(TOkumaTipi.otIlk);   // ilk kayda konumlan
    // ... alanları oku ya da değiştir
}
```

| `TOkumaTipi` | Anlamı |
|--------------|--------|
| `otAc` | Filtreyle kümeyi aç. Kayıt varsa `true` döner |
| `otIlk` | İlk kayda git |
| `otSonraki`, `otOnceki`, `otSon` | Sonraki, önceki, son kayda git |

Kümede gezinirken `TemelBilgi()` / `EkBilgi()` nesneleri o anki kaydı gösterir; örneğin `cari.TemelBilgi().CARI_ISIM`.

Filtre bir SQL `WHERE` parçasıdır ve **tablo takma adı** ister: cari için `CASABIT.`, stok için `stsabit.` (öneksiz `TBL`). Değerleri kullanıcı girdisinden alıyorsanız tırnakları kaçırın (`'` → `''`).

## Cari silme

```csharp
Cari cari = kernel.yeniCari(sirket);
if (cari.kayitOku(TOkumaTipi.otAc, $"CASABIT.CARI_KOD='{kod.Replace("'", "''")}'"))
{
    cari.kayitOku(TOkumaTipi.otIlk);
    cari.kayitSil();
}
```

Hareketi olan cari Netsis tarafından silinmez; hata döner.

## Cari oluşturma

Cari kartı `TemelBilgi` ve `EkBilgi` alt nesneleriyle yazılır. REST'teki `CariTemelBilgi` (`ARPsPrimInfo`) ve `CariEkBilgi` (`ARPsSuppInfo`) bu iki nesnenin karşılığıdır. Alan adları için [REST cari gövdesine](/rest/json-ornekleri/#cari-karti) ve `TBLCASABIT` / `TBLCASABITEK` tablolarına bakın.

```csharp
Cari cari = kernel.yeniCari(sirket);
CariTemelBilgi tb = cari.TemelBilgi();   // TBLCASABIT
CariEkBilgi ek    = cari.EkBilgi();      // TBLCASABITEK
try
{
    tb.CARI_KOD  = "120-01-999";
    tb.CARI_ISIM = "Örnek Ticaret A.Ş.";
    tb.CARI_TIP  = "S";                  // Logo örneğindeki değer; kurulumunuzdaki tipleri kontrol edin
    tb.M_KOD     = "120-01-999";         // muhasebe kodu
    tb.CARI_IL   = "İstanbul";
    ek.CARI_KOD   = tb.CARI_KOD;
    ek.TcKimlikNo = "11111111111";
    cari.kayitYeni();
}
finally
{
    Marshal.ReleaseComObject(ek);
    Marshal.ReleaseComObject(tb);
    Marshal.ReleaseComObject(cari);
}
```

Yapı Logo'nun resmî "Cari Kayıt" örneğiyle aynıdır (`TemelBilgi()`, `EkBilgi()`, `kayitYeni()`). Düzeltme için kaydı `kayitOku` ile açıp alanları değiştirdikten sonra `kayitDuzelt()` çağrılır.

## Stok kartı oluşturma

```csharp
Stok stok = kernel.yeniStok(sirket);
StokTemelBilgi tb = stok.TemelBilgi();   // TBLSTSABIT
StokEkBilgi ek    = stok.EkBilgi();      // TBLSTSABITEK

tb.Stok_Kodu  = "STK-0001";
tb.Stok_Adi   = "Örnek ürün";
tb.Grup_Kodu  = "GRP1";
tb.Kod_1      = "SERI";           // Kod_1..Kod_5 rapor/özel kodları
tb.Olcu_Br1   = "AD";
tb.Olcu_Br2   = "KL";
tb.Pay_1 = 1; tb.Payda_1 = 1;     // ölçü birimi 2 çevrimi
tb.Pay2  = 1; tb.Payda2  = 1;     // ölçü birimi 3 çevrimi
tb.KDV_Orani     = 20;
tb.Alis_Kdv_Kodu = 20;
tb.Satis_Fiat1   = 100;           // Satis_Fiat1..4, Alis_Fiat1..4
tb.Barkod1       = "8690000000001";  // Barkod1..3
tb.Satici_Kodu   = "320-01-001";
tb.DEPO_KODU     = 1;

ek.Stok_Kodu = tb.Stok_Kodu;
ek.Ingisim   = "Sample product";
ek.Kull1S    = "Kullanıcı tanımlı metin 1";   // Kull1S..Kull8S
ek.Kull1N    = 42;                            // Kull1N..Kull8N

stok.kayitYeni();
```

`StokTemelBilgi`'de gözlenen diğer alanlar: `Uretici_Kodu`, `Olcu_Br3`, `Fiat_birimi`, `Azami_Stok`, `Asgari_Stok`, `Sat_Dov_Tip`, `Alis_Dov_Tip`, `Dov_Alis_Fiat`, `Dov_Mal_Fiat`, `Dov_Satis_Fiat`, `Muh_DetayKodu`, `Birim_Agirlik`, `Nakliyet_Tut`, `Onceki_Kod`, `Sonraki_Kod`, `SONSTOKKODU`, `BOY`, `EN`, `GENISLIK`. `StokEkBilgi`'de: `Birim_Maliyet`.

> **Sık hata:** `stok.TemelBilgi()` çağrılmadan `StokTemelBilgi` değişkenine yazmak `NullReferenceException` verir. Önce `kernel.yeniStok(sirket)`, sonra `TemelBilgi()` / `EkBilgi()`.

## Stok silme

```csharp
Stok stok = kernel.yeniStok(sirket);
if (stok.kayitOku(TOkumaTipi.otAc, "stsabit.STOK_KODU = 'STK-0001'"))
{
    stok.kayitOku(TOkumaTipi.otIlk);
    stok.kayitSil();
}
```

REST karşılıkları: [`api/v2/ARPs`](/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions), [`api/v2/Items`](/rest/uclar/#stok-items-ve-stok-hareketi-itemtransactions).
