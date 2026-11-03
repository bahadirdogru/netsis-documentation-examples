---
title: "TopluFatura"
source: https://dys.logo.cloud/external?cid=5f5175b3-3aa3-4286-9163-5fcad5b55cbd&link=65da2dc9-d81e-41b1-9339-63c8cfafa598&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [TopluFatura](https://dys.logo.cloud/external?cid=5f5175b3-3aa3-4286-9163-5fcad5b55cbd&link=65da2dc9-d81e-41b1-9339-63c8cfafa598&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# TopluFatura

**C# / İrsaliyelerin Toplu Faturalaştırılması**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
  
namespace NetOpenXTest
{
    public static class TopluFaturaOrnek
    {
        public static void IrsaliyeleriTopluFaturalastir()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            TopluFatura topluFat = default(TopluFatura);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                                  "vt adı",
                                                  "vt kull adı",
                                                  "vt kull şifre",
                                                  "netsis kull adı",
                                                  "netsis şifre",
                                                   0);
                topluFat = kernel.yeniTopluFatura(sirket, TFaturaTip.ftSIrs);
  
                topluFat.IrsaliyelerBirlessin = true;               
                topluFat.FaturalastirmaKirilim = TFaturaKirilim.fkKosulKod;
                topluFat.AltCariKodu = "00002";
                topluFat.UstCariKodu = "00002";
                topluFat.AltIrsaliyeNumarasi = "I00000000000021";
                topluFat.UstIrsaliyeNumarasi = "I00000000000022";
                topluFat.FaturaNumarasi = "F00000000000113"; //Oluşacak olan faturanın numarasını belirtir
                topluFat.AltIrsaliyeTipi = TFaturaTipi.ft_Kapali;
                topluFat.UstIrsaliyeTipi = TFaturaTipi.ft_Acik;
 
                topluFat.HaricTutulacakBelgeNoEkle("A00000000000127"); //verilen aralık dışında tutulacak belge
                 
                topluFat.IrsaliyeleriFaturalastir(); //irsaliyeleri faturalaştırır
            }
            finally
            {
                Marshal.ReleaseComObject(topluFat);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```
