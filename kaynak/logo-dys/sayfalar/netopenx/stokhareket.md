---
title: "StokHareket"
source: https://dys.logo.cloud/external?cid=25fb65d0-8593-4211-8cd0-2c6930099a1c&link=93c04a32-7396-4f96-b7c2-285a7f4a940c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [StokHareket](https://dys.logo.cloud/external?cid=25fb65d0-8593-4211-8cd0-2c6930099a1c&link=93c04a32-7396-4f96-b7c2-285a7f4a940c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# StokHareket

**C# / Stok Hareket Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class StokHareketOrnek
    {
        public static void kayitYeni()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            StokHareket StHar = default(StokHareket);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                StHar = kernel.yeniStokHareket(sirket);
                StHar.Stok_Kodu = "00003";
                StHar.Sthar_Tarih = DateTime.Now;
                StHar.Sthar_Htur = "M";
                StHar.Sthar_Bf = 12;
                StHar.Sthar_Gckod = "G";
                StHar.DEPO_KODU = 1;               
                StHar.Sthar_Gcmik = 6;
                StHar.Plasiyer_Kodu = "02";
                StHar.Proje_Kodu = "033";
                StHar.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(StHar);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**C# / Reçeteli Kayıt**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class StokHareketOrnek
    {
        public static void ReceteliKayit()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            StokHareket StHar = default(StokHareket);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                StHar = kernel.yeniStokHareket(sirket);
                StHar.Fisno = "C";
                StHar.Stok_Kodu = "MAM01";
                StHar.DEPO_KODU = 2;
                StHar.GirisDepoKodu = 2;
                StHar.Sthar_Gcmik = 2;
                StHar.Plasiyer_Kodu = "02";
                StHar.Proje_Kodu = "033";
                StHar.Sthar_Tarih = DateTime.Now;
                StHar.ReceteliKayit(TUretSonDepo.usdAktif, false, false);
            }
            finally
            {
                Marshal.ReleaseComObject(StHar);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```
