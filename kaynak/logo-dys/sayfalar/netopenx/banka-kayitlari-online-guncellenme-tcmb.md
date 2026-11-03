---
title: "Banka Kayıtları Online Güncellenme TCMB"
source: https://dys.logo.cloud/external?cid=6314470e-5efe-4116-a250-f12c04ba6c82&link=1d809277-4ecb-4002-9cf6-ca3165e4303c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Banka Kayıtları Online Güncellenme TCMB](https://dys.logo.cloud/external?cid=6314470e-5efe-4116-a250-f12c04ba6c82&link=1d809277-4ecb-4002-9cf6-ca3165e4303c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Banka Kayıtları Online Güncellenme TCMB

**C#**

**TCMB Banka Kayıtları Online Güncelleme**

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
                sirket.TCMBBankaKodlariOnlineGuncelleme("0001", "");
 
            }
            catch (Exception exp)
            {
                MessageBox.Show("Hata: " + exp.Message);
            }
            finally
            {
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```
