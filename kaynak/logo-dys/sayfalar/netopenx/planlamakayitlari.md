---
title: "PlanlamaKayitlari"
source: https://dys.logo.cloud/external?cid=733c36c2-3c35-450a-9739-8e4d85eb2069&link=b82b4b3c-8237-4e19-875b-938246ce8209&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [PlanlamaKayitlari](https://dys.logo.cloud/external?cid=733c36c2-3c35-450a-9739-8e4d85eb2069&link=b82b4b3c-8237-4e19-875b-938246ce8209&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# PlanlamaKayitlari

**C#**

**Stok-Cari-Müşteri/Satıcı Planlama Kayıtları**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
PlanlamaKayitlari planlamaKayit = default(PlanlamaKayitlari);
 try
  {
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                               "vt adi",
                               "vt kull adi",
                               "vt kull sifre",
                               "netsis kull adi",
                               "netsis sifre",
                                0);
         //Planlama Tipleri: tpCari, tpStok, tpMusteriSatici
         planlamaKayit = kernel.yeniPlanlamaKayitlari(sirket, TStokPlanlamaKayitTip.tpStok);
         planlamaKayit.Stok_Kodu = "SER1X";
         planlamaKayit.SIPARISKARSILAMA = "M";
         planlamaKayit.SIPARISTAKIP = "H";
         planlamaKayit.PlanlamaTipi = "P";
         planlamaKayit.TEDARIKCITERCIH = "K";
         planlamaKayit.REZERV_BAK_TAKIP = "E";
         planlamaKayit.ONEMSIZ_STOK = "H";
         planlamaKayit.KESINLESEN_GUNCELLENMESIN = "H";
         planlamaKayit.SIPARIS_ONAYLI = "V";
         planlamaKayit.REC_ISEM_OLUS = "E";
         planlamaKayit.kayitYeni();
  }
 finally
  {
         Marshal.ReleaseComObject(planlamaKayit);
         Marshal.ReleaseComObject(sirket);
         kernel.FreeNetsisLibrary();
         Marshal.ReleaseComObject(kernel);
  }
```
