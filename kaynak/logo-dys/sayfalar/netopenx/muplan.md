---
title: "MuPlan"
source: https://dys.logo.cloud/external?cid=27d9d4ac-7673-4468-9bf7-f33f8ce56154&link=22835aaa-7337-4721-8993-7d12540f0293&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [MuPlan](https://dys.logo.cloud/external?cid=27d9d4ac-7673-4468-9bf7-f33f8ce56154&link=22835aaa-7337-4721-8993-7d12540f0293&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# MuPlan

**C#**

**Hesap Planı Kaydı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
MuPlan muPlan = default(MuPlan);
MuplanTemelBilgi muplanTemelBilgi = default(MuplanTemelBilgi);
MuplanEkBilgi muplanEkBilgi = default(MuplanEkBilgi);
 
try
 {
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                "vt adi",
                "vt kull adi",
                "vt kull sifre",
                "netsis kull adi",
                "netsis sifre",
                0);
      muPlan = kernel.YeniMuPlan(sirket);
      muplanTemelBilgi = muPlan.TemelBilgi();
      muplanTemelBilgi.Hesap_Kodu = "100-10";
      muplanTemelBilgi.Hs_Adi = "DENEMEHESAP";
      muplanTemelBilgi.Agm = "G";
      muplanTemelBilgi.Calis_Tip = "B";
      muplanTemelBilgi.Calis_Bag = "F";
      muplanTemelBilgi.Hs_Blkz = "G";
      muplanTemelBilgi.Hs_Grkod = "95";
 
      muplanEkBilgi = muPlan.EkBilgi();
      muplanEkBilgi.Kod = "100-10";
      muplanEkBilgi.Kull1S = "YEDEKALAN";
 
      muPlan.kayitYeni();
 }
 finally
  {
     Marshal.ReleaseComObject(muplanEkBilgi);
     Marshal.ReleaseComObject(muplanTemelBilgi);
     Marshal.ReleaseComObject(muPlan);
     Marshal.ReleaseComObject(sirket);
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

**VB**

**Hesap Planı Kaydı**

```
Sub MuplanKayitYeni()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim MPlan As NetOpenX50.Muplan
    Dim MPlanTemel As NetOpenX50.MuplanTemelBilgi
    Dim MPlanEk As NetOpenX50.MuplanEkBilgi
  
    Set Sirket = Kernel.yeniSirket(vtMSSQL, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 0)
  
    Set MPlan = Kernel.yeniMuplan(Sirket)
    
    Set MPlanTemel = MPlan.TemelBilgi
    MPlanTemel.Hesap_Kodu = "100-10"
    MPlanTemel.Hs_Adi = "DENEMEHESAP"
    MPlanTemel.Agm = "G"
    MPlanTemel.Calis_Tip = "B"
    MPlanTemel.Calis_Bag = "F"
    MPlanTemel.Hs_Blkz = "G"
    MPlanTemel.Hs_Grkod = "95"
  
    Set MPlanEk = MPlan.EkBilgi
    MPlanEk.Kod = "100-10"
    MPlanEk.Kull1S = "YEDEKALAN"
  
    MPlan.kayitYeni
  
    Set MPlanTemel = Nothing
    Set MPlanEk = Nothing
    Set MPlan = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```
