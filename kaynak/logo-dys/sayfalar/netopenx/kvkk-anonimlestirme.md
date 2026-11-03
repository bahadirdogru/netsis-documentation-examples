---
title: "KVKK Anonimleştirme"
source: https://dys.logo.cloud/external?cid=b4ff8097-9429-453e-bc9e-8324da0a6e6d&link=6634d81c-00ff-42ef-aa07-6fcc54316500&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [KVKK Anonimleştirme](https://dys.logo.cloud/external?cid=b4ff8097-9429-453e-bc9e-8324da0a6e6d&link=6634d81c-00ff-42ef-aa07-6fcc54316500&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# KVKK Anonimleştirme

C#

**KVKK Anonimleştirme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
 try
  {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
          "vt adi",
          "vt kull adi",
          "vt kull sifre",
          "netsis kull adi",
         "netsis sifre",
          0);
     sirket.KvkkAnonimlestir(TKayitTipi.tkCari, "0098", false);
  }
  finally
   {
     Marshal.ReleaseComObject(sirket);
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
   }
```
