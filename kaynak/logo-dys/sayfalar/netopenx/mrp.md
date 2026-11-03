---
title: "MRP"
source: https://dys.logo.cloud/external?cid=807de3e4-4805-409d-8611-1bd07f51e5bb&link=db6eb3fe-de2e-41ad-b8fb-e3916c28a209&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [MRP](https://dys.logo.cloud/external?cid=807de3e4-4805-409d-8611-1bd07f51e5bb&link=db6eb3fe-de2e-41ad-b8fb-e3916c28a209&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# MRP

**C#**

**MGP Çalıştır**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
 {
     public static class MRP
     {
         public static void MGPCalistir()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             Mrp mrp = default(Mrp);
             NetStrList netStrList = new NetStrList();
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                 mrp = kernel.yeniMrp(sirket);
                 mrp.BASTAR = Convert.ToDateTime(DateTime.Now.ToString("dd/MM/yyyy"));
                 mrp.BITTAR  = Convert.ToDateTime(DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"));
                 mrp.Detayli = true;
                 mrp.BakKont = true;
                 mrp.GnlYapKodDestek = false;
                 mrp.YapKodKontrol = false;
                 mrp.IsEmrHaricNoBas = string.Empty;
                 mrp.IsEmrHaricNoBit = string.Empty;
                 mrp.IsEmriKont = true;
                 mrp.MamKont = true;
                 mrp.MinStokBak = true;
                 mrp.SipKont = true;
                 netStrList.Add("MRP");
                 mrp.SirketListesi = netStrList;
                 mrp.MGPCalistir();
             }
             finally
             {
                 Marshal.ReleaseComObject(netStrList);
                 Marshal.ReleaseComObject(mrp);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }
         }
     }
 }
```

```csharp
{
 
               Kernel kernel = new Kernel();
               Sirket sirket = new Sirket();
               NetOpenX50.Mrp mrp = new NetOpenX50.Mrp();          
               Mrp = kernel.yeniMrp(sirket);            
               MrpGereksinimPlanOlusturPrm MrpParam = new MrpGereksinimPlanOlusturPrm();
 
 
    try
    {
       sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis sifre", 0);
            MrpParam.BaslangicTarihi = Convert.ToDateTime(DateTime.Now.ToString("dd/MM/yyyy"));
            MrpParam.BitisTarihi = Convert.ToDateTime(DateTime.Now.AddYears(1).ToString("dd/MM/yyyy"));
            MrpParam.BazTarihi = Convert.ToDateTime(DateTime.Now.ToString("dd/MM/yyyy"));
            MrpParam.BaslangicOncesiSipTarih = Convert.ToDateTime(DateTime.Now.AddYears(-1).ToString("dd/MM/yyyy"));
            MrpParam.PlanlamaTipi = 0;
            MrpParam.UrunTipi = TMrpUrunTipi.mutSiparisBakiye;
            MrpParam.Aciklama = "Test";
            MrpParam.BaslangicSiparisNo = "";
            MrpParam.SadeceOnayliSiparisler = false;
            MrpParam.SiparisBazindaAyrim = true;
            MrpParam.BaslangicSiparisNo = String.Empty;
            MrpParam.BitisSiparisNo = String.Empty;
            MrpParam.FabrikaKodu = "ISTANBUL";
            MrpParam.Siparis = TMrpSiparis.msHepsi;
            Mrp.GereksinimPlanlamaOlustur(MrpParam);
    }
    catch(exeption Ex)
    {
 
     messagebox.show(Ex.message);
    }
 
          finally
    {
 
    if (mrp != null)
    Marshal.ReleaseComObject(mrp);
    if (sirket != null)
    Marshal.ReleaseComObject(sirket);
    if (kernel != null)
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
 
 
    }
 
 
}
```

```csharp
{
 
    Kernel kernel = new Kernel();
    Sirket sirket = new Sirket();
    NetOpenX50.Mrp mrp = new NetOpenX50.Mrp();
    mrp = kernel.yeniMrp(sirket);
    IsEmriDengelemePrm IsEmrPrm = new IsEmriDengelemePrm();
 
 
        sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis sifre", 0);
            IsEmrPrm.CikisDepoKodu = 1;
            IsEmrPrm.GirisDepoKodu = 2;
            IsEmrPrm.CikisIcinStokDepoKullan = true;
            IsEmrPrm.GirisIcinStokDepoKullan = true;
            //IsEmrPrm.FabrikaKodu = "ISTANBUL";
            IsEmrPrm.FasonSeriKodu = String.Empty;
            IsEmrPrm.KayitTarihi = Convert.ToDateTime(DateTime.Now.ToString("dd/MM/yyyy"));
            IsEmrPrm.Oturum = "1";
            IsEmrPrm.ReceteSaklansin = false;
            IsEmrPrm.SiparisleriBildirimTarihineAc = false;
            IsEmrPrm.StokKodu = String.Empty;
            IsEmrPrm.YapKod = String.Empty;
            IsEmrPrm.IsEmriSeriKodu = "X";
            IsEmrPrm.MevcutMrpYedeklensin = false;
            mrp.IsEmirleriniDengele(IsEmrPrm);
            List<IsEmriDengelemeSonuc> IsEmrSonuc = new List<IsEmriDengelemeSonuc>();
            int counter = mrp.IsEmriDengelemeSonucCount();
            //Ortaya cikacak sonuc datasi dolasiliyor.
            for (int i = 0; i < counter - 1; i++)
            {
              IsEmriDengelemeSonuc Sonuc = mrp.IsEmriDengelemeSonucGetir(i);
              IsEmrSonuc.Add(Sonuc);
 
            }
       finally
      {
       if (mrp != null)
       Marshal.ReleaseComObject(mrp);
       if (sirket != null)
       Marshal.ReleaseComObject(sirket);
       if (kernel != null)
       kernel.FreeNetsisLibrary();
       Marshal.ReleaseComObject(kernel);
      }
```

```
Kernel kernel = new Kernel();
Sirket sirket = new Sirket();
NetOpenX50.Mrp mrp = new NetOpenX50.Mrp();
TalepDengelemePrm tlpdng = new TalepDengelemePrm();
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                        "ENTERPRISE9",
                        "TEMELSET",
                        "",
                        "Admin",
                        "Admin",
                        0);
    mrp = kernel.yeniMrp(sirket);
 
    tlpdng.Oturum = "1";
    tlpdng.SaticiKoduBosIhtiyaclar = TSaticiKoduBosIhtiyaclar.biBosOlanGetirilsin;
    tlpdng.TalepBaslangicNo = "T00000000000040";
    tlpdng.TalepKayitTarihi = DateTime.Now;
    tlpdng.SaticiKodu = "320-01-044";
    tlpdng.MalKabulDepoKodu = 1;
 
    tlpdng.MevcutMrpYedeklensin = false;
 
    mrp.TalepleriDengele(tlpdng);
    List<TalepDengelemeSonuc> SatSipSonuc = new List<TalepDengelemeSonuc>();
    int counter = mrp.TalepDengelemeSonucCount();
 
    //Ortaya cikacak sonuc datasi dolasiliyor.
    for (int i = 0; i <= counter - 1; i++)
    {
        TalepDengelemeSonuc Sonuc = mrp.TalepDengelemeSonucGetir(i);
        SatSipSonuc.Add(Sonuc);
        MessageBox.Show(Sonuc.EskiMusSipNo + " " + Sonuc.EskiMusSipKont);
    }
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    if (mrp != null)
        Marshal.ReleaseComObject(mrp);
    if (sirket != null)
        Marshal.ReleaseComObject(sirket);
    if (kernel != null)
        kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```
