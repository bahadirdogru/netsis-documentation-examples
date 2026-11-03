---
title: "GenelRehber"
source: https://dys.logo.cloud/external?cid=dc972e15-40dc-40b1-b1be-6b98774a7e53&link=3bc2182b-df0f-4df8-821f-18e4ee5e2aac&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [GenelRehber](https://dys.logo.cloud/external?cid=dc972e15-40dc-40b1-b1be-6b98774a7e53&link=3bc2182b-df0f-4df8-821f-18e4ee5e2aac&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# GenelRehber

**C#**

**GenelRehber**

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
 
    string strArray = sirket.GenelRehber("CASABIT", "CARI_KOD", "Cari Adı", 0, "CARI_ISIM", "Cari İsim", 0, "", "", 0, "", "", 0, "", "", 0, "Cari Rehberi", "", 0, "CARI_KOD");
    for (int i = 0; i < strArray.Split(';').Length; i++)
    {
        MessageBox.Show(strArray.Split(';')[i]);
    }
 
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
