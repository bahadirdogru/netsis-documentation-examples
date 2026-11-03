---
title: Bağlantı ve kaynak yönetimi
description: Kernel ve Sirket nesneleri, yeniSirket parametreleri, COM nesnelerini doğru bırakma.
---

# Bağlantı ve kaynak yönetimi

Her NetOpenX işlemi aynı iskeletle başlar: bir `Kernel` oluştur, `yeniSirket` ile şirkete bağlan, işi yap, **her durumda** oturumu kapat ve COM nesnelerini bırak.

## yeniSirket

```csharp
using NetOpenX50;
using System.Runtime.InteropServices;

Kernel kernel = new Kernel();
Sirket sirket = kernel.yeniSirket(
    TVTTipi.vtMSSQL,   // 1. veritabanı tipi (Oracle için vtOracle)
    "ACME2024",        // 2. şirket = veritabanı adı
    "TEMELSET",        // 3. veritabanı kullanıcısı
    "",                // 4. veritabanı şifresi
    "NETSIS",          // 5. Netsis kullanıcı adı
    "netsis_sifresi",  // 6. Netsis şifresi
    0);                // 7. şube kodu
```

| # | Parametre | Not |
|---|-----------|-----|
| 1 | `TVTTipi` | `vtMSSQL` ya da `vtOracle` |
| 2 | Şirket adı | Netsis'teki şirket kodu; SQL Server'da veritabanı adıdır. Liste: `NETSIS.dbo.SIRKETLER30` |
| 3 | DB kullanıcısı | Çoğu kurulumda `TEMELSET` |
| 4 | DB şifresi | `TEMELSET` kullanıcısının şifresi (çoğu kurulumda boş) |
| 5 | Netsis kullanıcısı | Programa giriş yapan kullanıcı; yetkileri uygulanır. Kayıtlarda `KAYITYAPANKUL` olarak görünür |
| 6 | Netsis şifresi | |
| 7 | Şube kodu | `TBLSUBELER`'deki şube. Tek şubeli kurulumlarda `0`. Logo'nun bazı eski örneklerinde `32767` geçer (anlamı belgelenmemiş) |

## Kernel bilgileri

`Kernel`, şirkete bağlanmadan da bazı bilgileri verir:

```csharp
Kernel kernel = new Kernel();
try
{
    string surum = kernel.Version;                 // NetOpenX sürümü

    SirketList liste = kernel.SirketListesi;       // sunucudaki şirketler
    for (int i = 0; i < liste.SirketSayisi; i++)
    {
        SirketInfo s = liste.get_SirketInfo(i);
        Console.WriteLine($"{s.SirketAdi} {s.SirketYili}");
    }
    Marshal.ReleaseComObject(liste);

    bool ekModulVar = kernel.get_EkModulVar(100);  // ek modül yüklü mü (0–254)
}
finally
{
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

Netsis'in içinden çalışan kodda (Temelset dinamik kodlama, NDI) yeni oturum açmak yerine açık oturum kullanılır: `kernel.yeniSirketAktifEXE(NETSISCORE)`.

> Bağlantı bilgilerini koda gömmeyin. NetsisQuick bunları `Properties.Settings` içinde tutar; daha iyisi Windows Credential Manager ya da şifreli yapılandırmadır.

## Doğru şablon: try / catch / finally

COM nesneleri .NET çöp toplayıcısıyla zamanında bırakılmaz. Bırakılmayan `Kernel` ve `Sirket`, Netsis oturumunu ve veritabanı bağlantısını açık tutar; uzun çalışan uygulamalarda lisans ve bellek sorunlarına yol açabilir. Logo'nun ve bahadirdogru.com'un tüm örnekleri bu yüzden `finally` içinde temizlik yapar.

```csharp
Kernel kernel = null;
Sirket sirket = null;
Fatura fatura = null;
try
{
    kernel = new Kernel();
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, db, dbUser, dbPass, netsisUser, netsisPass, sube);

    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
    // ... iş ...
}
catch (COMException ex)
{
    // Netsis'in hata mesajı ex.Message içindedir (ör. "Stok kodu bulunamadı")
    throw new Exception($"Netsis hatası ({ex.ErrorCode:X}): {ex.Message}", ex);
}
finally
{
    if (fatura != null) Marshal.ReleaseComObject(fatura);
    if (sirket != null) { sirket.LogOff(); Marshal.ReleaseComObject(sirket); }
    if (kernel != null) { kernel.FreeNetsisLibrary(); Marshal.ReleaseComObject(kernel); }
}
```

Sıra önemlidir: önce iş nesneleri (`FatKalem`, `FatUst`, `Fatura`, `EBelge`…), sonra `sirket.LogOff()` + `Sirket`, en son `kernel.FreeNetsisLibrary()` + `Kernel`.

Bazı örneklerde ayrıca şu eklenir:

```csharp
GC.Collect();
GC.WaitForPendingFinalizers();
```

## Yeniden kullanılabilir yardımcı

Her metotta aynı bloğu yazmamak için:

```csharp
public static class Netsis
{
    public static T Run<T>(string db, Func<Kernel, Sirket, T> work)
    {
        Kernel kernel = null;
        Sirket sirket = null;
        try
        {
            kernel = new Kernel();
            sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, db,
                Config.DbUser, Config.DbPassword, Config.NetsisUser, Config.NetsisPassword, Config.Sube);
            return work(kernel, sirket);
        }
        finally
        {
            if (sirket != null) { sirket.LogOff(); Marshal.ReleaseComObject(sirket); }
            if (kernel != null) { kernel.FreeNetsisLibrary(); Marshal.ReleaseComObject(kernel); }
        }
    }
}

// kullanım
string no = Netsis.Run("ACME2024", (k, s) =>
{
    var f = k.yeniFatura(s, TFaturaTip.ftSSip);
    try { /* ... */ f.kayitYeni(); return f.Ust().FATIRS_NO; }
    finally { Marshal.ReleaseComObject(f); }
});
```

## Oturum ömrü

- Her işlemde yeni oturum açmak basit ve güvenlidir ama yavaştır (bağlantı birkaç saniye sürebilir).
- Toplu işlerde tek bir `Kernel`/`Sirket` açıp çok sayıda belge yazmak daha hızlıdır. Bu durumda hata alan belgeden sonra nesnenin durumuna güvenmeyin; o belge için yeni `Fatura` nesnesi oluşturun.
- Aynı `Kernel`/`Sirket` nesnesini birden fazla thread'den aynı anda kullanmayın. Paralel iş gerekiyorsa her thread kendi oturumunu açsın; eşzamanlı oturum sayısını lisans sınırlar.
- Delphi tabanlı COM sunucuları genellikle tek iş parçacıklı (STA) modelle çalışır. Windows servisinde ya da ASP.NET'te sorun yaşarsanız işi STA bir thread'de çalıştırmayı deneyin (doğrulanmadı).
