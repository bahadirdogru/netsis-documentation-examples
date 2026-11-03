---
title: "Yevmiye Kontrol"
source: https://dys.logo.cloud/external?cid=c883eaa6-b469-49ab-93bb-a158e48d7012&link=9a06e055-c6e8-48e7-9496-80bf57c96ff8&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Yevmiye Kontrol](https://dys.logo.cloud/external?cid=c883eaa6-b469-49ab-93bb-a158e48d7012&link=9a06e055-c6e8-48e7-9496-80bf57c96ff8&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Yevmiye Kontrol

**C#**

```java
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
      sirket.YevmiyeKontrol(true);
   }
   catch (Exception ex)
     {
       MessageBox.Show(ex.Message);
     }
   finally
     {
        Marshal.ReleaseComObject(sirket);
        kernel.FreeNetsisLibrary();
        Marshal.ReleaseComObject(kernel);
     }
```
