---
title: "Banka Havale/Eft"
source: https://dys.logo.cloud/external?cid=b6c2458d-b1cf-40ed-a009-cb56297ee7b5&link=1d07983f-5e1e-4dd2-a341-0060188422b5&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Banka Havale/Eft](https://dys.logo.cloud/external?cid=b6c2458d-b1cf-40ed-a009-cb56297ee7b5&link=1d07983f-5e1e-4dd2-a341-0060188422b5&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Banka Havale/Eft

**C#**

**Banka Havale/Eft - Virman**

```
Kernel kernel = new Kernel();
  Sirket sirket = default(Sirket);
  BankaHavaleEftVirman bankaHavaleEftVirman = default(BankaHavaleEftVirman);
  BankaLogTra bankalogtra = default(BankaLogTra);
    try
    {
          sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
          "vt adi",
          "vt kull adi",
          "vt kull sifre",
          "netsis kull adi",
         "netsis sifre",
          0);
        bankaHavaleEftVirman = kernel.yeniBankaHavaleEftVirman(sirket, TBankaHavaleEftTip.tbCariHvl,
            0,"001015"); // 0 Gelen 1 giden
        bankalogtra = bankaHavaleEftVirman.EvrakYeni();
        bankalogtra.NetHesKodu = "001015";
        bankalogtra.KarsiHesKod = "320-01-048";
        bankalogtra.Tutar = 1350;
        bankalogtra.PlasiyerKodu = "1";
        bankalogtra.SubeKodu = 0;
        bankalogtra.YevAciklama = "Havale";
 
        bankaHavaleEftVirman.EvrakKaydet();
    }
finally
    {
        Marshal.ReleaseComObject(bankaHavaleEftVirman);
        Marshal.ReleaseComObject(sirket);
        kernel.FreeNetsisLibrary();
        Marshal.ReleaseComObject(kernel);
    }
```

**VB**

**Banka Havale/Eft - Virman**  Expand source

```
Sub banka()      
        Dim Kernel As New NetOpenX50.Kernel
        Dim Sirket As NetOpenX50.Sirket
        Dim BankaHavaleEftVirman As NetOpenX50.BankaHavaleEftVirman
        Dim BankaLogTra As NetOpenX50.BankaLogTra
 
        Set Sirket = Kernel.yeniSirket(TVTTipi.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
        BankaHavaleEftVirman = Kernel.yeniBankaHavaleEftVirman(Sirket, TBankaHavaleEftTip.tbCariHvl,
          0, "001015")
        BankaLogTra = BankaHavaleEftVirman.EvrakYeni()
        BankaLogTra.NetHesKodu = "001015"
        BankaLogTra.KarsiHesKod = "320-01-048"
        BankaLogTra.Tutar = 1
        BankaLogTra.PlasiyerKodu = "1"
        BankaLogTra.SubeKodu = 0
        BankaLogTra.YevAciklama = "Cari Havale"
        BankaHavaleEftVirman.EvrakKaydet()
 
        Sirket = Nothing
        BankaHavaleEftVirman = Nothing
        BankaLogTra = Nothing
        Kernel.FreeNetsisLibrary()
        Kernel = Nothing
     
End Sub
```
