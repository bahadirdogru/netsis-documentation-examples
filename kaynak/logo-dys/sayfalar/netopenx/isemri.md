---
title: "Isemri"
source: https://dys.logo.cloud/external?cid=75f3e4d1-48d0-4db5-8351-bf8ec62858c0&link=072a7751-8225-4706-a45f-4484b7319f32&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Isemri](https://dys.logo.cloud/external?cid=75f3e4d1-48d0-4db5-8351-bf8ec62858c0&link=072a7751-8225-4706-a45f-4484b7319f32&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Isemri

**C#**

**İş Emri - Yeni Kayıt**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class IsEmriOrnek
    {
       public static void IsEmriKaydet()
       {
           Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           IsEmri Isemri = default(IsEmri);
           try
           {
               sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
               Isemri = kernel.yeniIsEmri(sirket);
               Isemri.IsEmriNo = "X00000000000018";               
               Isemri.Tarih = Convert.ToDateTime("2015-01-01");
               Isemri.StokKodu = "M1";
               Isemri.Miktar = 100;
               Isemri.SiparisNo = "A00000000001162";  // Müşteri sipariş no
               Isemri.SipKont = 2;                    // Müşteri sipariş sıra no
               Isemri.TeslimTarihi = Convert.ToDateTime("2015-01-02");
               Isemri.kayitYeni();
           }
           catch (Exception ex)
           {
               MessageBox.Show(ex.Message);
           }
           finally
           {
               Marshal.ReleaseComObject(Isemri);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }
       }
    }
}
```

**İş Emri - Kayıt Düzelt**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class IsEmriOrnek
    {
       public static void IsEmriKaydet()
       {
               Kernel kernel = new Kernel();
               Sirket sirket = default(Sirket);
               IIsEmri isEmri = default(IIsEmri);
               try
               {
                   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                                 "ENTERPRISE9",
                                                 "sa",
                                                 "sapass",
                                                 "NETSIS",
                                                 "1",
                                                 0);
 
                   isEmri = kernel.yeniIsEmri(sirket);
                   isEmri.kayitOku(TOkumaTipi.otAc, "ISEMRINO = \'000000000000001\'");
                   isEmri.Miktar = 1000;
                   isEmri.Aciklama = "test1";
                   isEmri.kayitDuzelt();
               }
               catch (Exception ex)
               {
                   MessageBox.Show(ex.Message);
               }
               finally
               {
                   Marshal.ReleaseComObject(isEmri);
                   Marshal.ReleaseComObject(sirket);
                   kernel.FreeNetsisLibrary();
                   Marshal.ReleaseComObject(kernel);
               }
    
       }
    }
}
```

**İş Emri Silme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
IsEmri Isemri = default(IsEmri);
 
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                    0);
    Isemri = kernel.yeniIsEmri(sirket);
    Isemri.kayitOku(TOkumaTipi.otAc, "ISEMRINO='000000000000001'");
    string isemrino = Isemri.IsEmriNo;
    Isemri.kayitSil();
 
    MessageBox.Show(isemrino + " nolu isemri silindi");
     
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    Marshal.ReleaseComObject(Isemri);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Reçeteden İş Emri Oluşturma**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
RecetedenIsemri tmpReceteden = default(RecetedenIsemri);
 
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                    0);
 
    tmpReceteden = kernel.yeniRecetedenIsemri(sirket);
 
    tmpReceteden.IsEmriNo = "000000000000069";
 
    tmpReceteden.IsemriSecimListHazirla();
    for (int i = 0; i < tmpReceteden.IsemriSecimList.Count; i++)
    {
        RecetedenIsemriSecim tmpRecetedenIsemriSecim = tmpReceteden.IsemriSecimList.Get(i);
        if (tmpRecetedenIsemriSecim.StokKodu == "YARIMAMUL1")
            tmpRecetedenIsemriSecim.Secim = true;
        else tmpRecetedenIsemriSecim.Secim = false;
    }
    tmpReceteden.IsemriSecimListtenIsemirleriniOlustur();
}
catch (Exception ex)
{
    MessageBox.Show("Hata: " + ex.Message);
}
finally
{
    Marshal.ReleaseComObject(tmpReceteden);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**VB**

**İş Emri - Yeni Kayıt**

```vb
Sub IsEmriKaydet()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Isemri As NetOpenX50.Isemri
    Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis sube)
 
    Set Isemri = Kernel.yeniIsEmri(Sirket)
    Isemri.IsEmriNo = "X00000000000018"
    Isemri.Tarih = "2015-01-01"
    Isemri.StokKodu = "M1"
    Isemri.Miktar = 100
    Isemri.SiparisNo = "A00000000001162"    'Müşteri sipariş no
    Isemri.SipKont = 2                      'Müşteri sipariş sıra no
    Isemri.TeslimTarihi = "2015-01-02"
    Isemri.kayitYeni
    Set Isemri = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```
