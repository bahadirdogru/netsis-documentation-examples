---
title: Hatalar ve sorun giderme
url: https://netsis.bahadirdogru.com/netopenx/hatalar/
---

# Hatalar ve sorun giderme

NetOpenX hataları .NET'e `System.Runtime.InteropServices.COMException` olarak gelir. Netsis'in kendi mesajı `ex.Message` içindedir; `ex.ErrorCode` HRESULT değeridir.

## Netsis hata kodu

Son Netsis hatasının sayısal kodu `kernel.SonNetsisHata` nesnesindedir. Mesaj metnini ayrıştırmak yerine bu kodu kullanın:

```csharp
try
{
    fatura.OkuUst("GECERSIZNO", "GECERSIZCARI");
}
catch (COMException)
{
    var hata = kernel.SonNetsisHata;
    if (hata != null && hata.Kod == 401)
        Console.WriteLine("Fatura bulunamadı.");
    else
        throw;
}
```

| Kod | Anlamı (gözlenen) |
|-----|-------------------|
| `401` | Okunmak istenen kayıt bulunamadı (`OkuUst` ile olmayan belge). REST'te de giriş hatasında `Hata Kodu : 401` döner. |

Kod listesi Logo tarafından yayımlanmamıştır; Delphi örneği yalnızca `401`'i gösterir. REST istemcisinde aynı bilgi `JKernel.SonNetsisHata.Kod` olarak geçer.

## Teşhis edilebilir hata mesajı

Hatanın hangi belgede, hangi satırda çıktığını bilmeden çözmek zordur. NetsisQuick her işlemde bağlamı da mesaja ekler:

```csharp
public static string HataOlustur(string islem, IDictionary<string, string> detay, Exception ex)
{
    var sb = new StringBuilder();
    sb.AppendLine($"{islem} işleminde hata oluştu");
    foreach (var d in detay.Where(d => !string.IsNullOrEmpty(d.Value)))
        sb.AppendLine($"{d.Key}: {d.Value}");
    sb.AppendLine($"Hata: {ex.Message}");
    if (ex is COMException com)
    {
        sb.AppendLine($"COM Hata Kodu: {com.ErrorCode}");
        sb.AppendLine($"COM Hata Kaynağı: {com.Source}");
    }
    return sb.ToString();
}

// kullanım
catch (Exception ex)
{
    throw new Exception(HataOlustur("SiparisOlustur", new Dictionary<string, string> {
        ["Veritabanı"] = db, ["Cari Kodu"] = cari, ["Excel satırı"] = index.ToString(),
        ["Stok Kodu"] = stokKodu }, ex));
}
```

## Sık karşılaşılan durumlar

| Belirti | Olası neden | Çözüm |
|---------|-------------|-------|
| `Class not registered` / `REGDB_E_CLASSNOTREG` (0x80040154) | DLL register edilmemiş ya da süreç 64 bit | `RegControl.exe` / `regsvr32`; projeyi x86 derleyin |
| Visual Studio COM listesinde NetOpenX yok veya yanlış sürüm | Yanlış DLL register edilmiş | Doğru sürümün DLL'ini yeniden register edin |
| Bağlantıda lisans hatası | NetOpenX lisansı yok / indirilmemiş / tüm lisanslar kullanımda | SSO'dan lisansı indirin; bırakılmayan oturumları kapatın (`LogOff`, `FreeNetsisLibrary`) |
| Bağlantıda kullanıcı/şifre hatası | Netsis kullanıcısı ya da DB kullanıcısı yanlış | `yeniSirket` parametre sırasını kontrol edin ([Bağlantı](/netopenx/baglanti/)) |
| Kayıtta "stok kodu bulunamadı" benzeri hata | `kalemYeni`'ye geçersiz stok kodu ya da barkod verildi | Önce barkodu stok koduna çevirin |
| Kayıtta risk hatası | `RiskKontrol = true` ve cari risk limiti aşıldı | Risk limitini kontrol edin ya da bayrağı kapatın |
| Kaydedilen numara beklenenden farklı | Aynı numara başka kullanıcı tarafından alındı | `kayitYeni()` sonrası `Ust().FATIRS_NO`'yu okuyun |
| `NullReferenceException` stok kartında | `TemelBilgi()` / `EkBilgi()` çağrılmadı | [Cari ve stok](/netopenx/cari-ve-stok/#stok-karti-olusturma) |
| Uzun çalışan serviste bellek artışı, rastgele hatalar | COM nesneleri bırakılmıyor | `finally` içinde `Marshal.ReleaseComObject` ve `FreeNetsisLibrary` |
| Sürüm güncellemesi sonrası alan hataları | DLL ile veritabanı sürümü farklı | DLL'i aynı setten yeniden register edin, projeyi yeniden derleyin |
| `Kolon uyuşmazlığı: Tabloda tanımlı olan … sahası, NetOpenX arabiriminde tanımlı değil` | DLL veritabanından eski. Kayıt yarım kalabilir: REST'te `TBLCASABIT` yazılıp `TBLCASABITEK` yazılmadı | DLL'i veritabanıyla uyumlu sürüme getirin; REST servisi de `NetOpenX50.dll` kullanır |
| `Seri 3 karakter olmalıdır. EFatura Numara Alma işleminde hata oluştu` | E-fatura carisine e-belge birim kodu dışında seri verildi | `TBLEFATPRM.BIRIMKOD` ya da `TBLEARSIVPRM.BIRIMKOD` kullanın |
| `Sipariş onaysız işlem yapılamaz` | Sipariş `TIPI = 3` | Siparişi önce onaylayın ([Sipariş onayı](/netopenx/belge-donusumleri/#siparis-onayi)) |
| `Resmi Evrak Numarası Girilmelidir!` | Alış faturasında `GIB_FATIRS_NO` boş | Resmi evrak numarasını verin |
| `Stok kodu için muhasebe kodu veya referans kodu tanımlanmamış` | Muhasebeleştirme stok hesabını bulamadı | Kalemde muhasebe kodu verin ya da stok detay kodunu tanımlayın |

## Hata ayıklama ipuçları

- İşlemi önce **test şirketinde** (canlının kopyası) çalıştırın.
- Netsis ekranında aynı belgeyi elle girmeyi deneyin. Ekran hata veriyorsa sorun NetOpenX'te değil, veride ya da parametrededir.
- Yazma sonrası sonucu SQL ile doğrulayın: `TBLFATUIRS`, `TBLSTHAR`, `TBLCAHAR`.
- Toplu işlerde her belgeyi ayrı `try/catch` içine alın ve hangi satırın hata verdiğini kaydedin; bir belgedeki hata diğerlerini durdurmasın.
