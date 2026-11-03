---
title: "Kasa"
source: https://dys.logo.cloud/external?cid=b1ff1c66-921b-4707-b1bb-34173b8bd731&link=626dbd96-f642-4499-ab12-bc7d028a914c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Kasa](https://dys.logo.cloud/external?cid=b1ff1c66-921b-4707-b1bb-34173b8bd731&link=626dbd96-f642-4499-ab12-bc7d028a914c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Kasa

C#

**Cari Ödeme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KasaOrnek
    {
        public static void CariOdeme()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "00";  //Kasa Kodu
                kasa.IO = "G";
                kasa.Tip = "C";
                kasa.Kod = "00002";     //Cari Kodu
                kasa.Fisno = "99";
                kasa.Tutar = 500;
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.Islem(TKasaIslem.tkCariOdeme);
            }
            finally
            {
 
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Fatura Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
   public static class KasaOrnek
    {
        public static void FaturaKayit()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "00";      //Kasa Kodu
                kasa.IO = "G";
                kasa.Tip = "F";
                kasa.Kod = "100-02-001";    //Muhasebe Karsilik Kodu
                kasa.Fisno = "x09";
                kasa.Tutar = 500;
                kasa.Kdv_Dahil = "E";
                kasa.Kdv_Oran = 18;
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.Islem(TKasaIslem.tkFaturaKayit);
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                kasa = default(Kasa);
 
                Marshal.ReleaseComObject(sirket);
                sirket = default(Sirket);
 
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
                kernel = default(Kernel);
            }
        }       
    }
}
```

**Çek Ödeme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KasaOrnek
    {
        public static void CekOdeme()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "00";              //Kasa Kodu
                kasa.IO = "G";
                kasa.Tip = "E";
                kasa.Tutar = 15;
                kasa.Fisno = "H00000000011299";     //Çek numarasi
                kasa.Cari_Muh = "C";
                kasa.Kod = "00002";                 //Veren Cari Kodu
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.CSKOdeme(TCekSenType.csMCEK);
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Senet Ödeme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KasaOrnek
    {
        public static void SenetOdeme()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "00";              //Kasa Kodu
                kasa.IO = "G";                               
                kasa.Tip = "S";
                kasa.Tutar = 200;
                kasa.Fisno = "A70000000000051";     //Senet numarasi
                kasa.Cari_Muh = "C";
                kasa.Kod = "00002";                 //Veren Cari Kodu
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.CSKOdeme(TCekSenType.csMSEN);
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Muhtelif İşlem**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
   public static class KasaOrnek
    {
       public static void MuhtelifIslem()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "00";     //Kasa Kodu
                kasa.IO = "G";
                kasa.Tip = "M";
                kasa.Kod = "100-02-001";   //Muhasebe Karsilik Kodu
                kasa.Fisno = "141";               
                kasa.Tutar = 500;
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.Islem(TKasaIslem.tkMuhtelif);
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Kasa Transfer**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KasaOrnek
    {
        public static void KasaTransfer()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "01";         //Transfer Kasasi (kaynak kasa)
                kasa.Yedek1 = "00";            //Çalisilan Kasa  (hedef kasa) 
                kasa.IO = "C";
                kasa.Tip = "T";
                kasa.Fisno = "9";
                kasa.DovizTut = 300;           //Transfer Kasasi dovizli ise Doviz Tutar miktari girilir
                kasa.Tutar = 450;
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.Islem(TKasaIslem.tkKasaTransfer);  
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Banka Hareket Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KasaOrnek
    {
       public static void BankaHareket()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Kasa kasa = default(Kasa);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                              0);
                kasa = kernel.yeniKasa(sirket);
                kasa.KsMas_Kod = "01";     //Kasa Kodu
                kasa.IO = "G";
                kasa.Tip = "B";
                kasa.Fisno = "25";
                kasa.Kod = "001015";       //Banka Hesap Kodu
                kasa.DovizTut = 300;       //Dovizli kasa için doviz tutari girilir
                kasa.Tutar = 450;      
                kasa.Plasiyer_Kodu = "02";
                kasa.Proje_Kodu = "033";
                kasa.Tarih = DateTime.Today;
                kasa.Islem(TKasaIslem.tkBankaHareket);
            }
            finally
            {
                Marshal.ReleaseComObject(kasa);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Fatura Kaydında Çoklu Kalem Girişi**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
 
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void KasaKalem()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    Kasa kasa = default(Kasa);
    KasaKdv kasaKdv = default(KasaKdv);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
 
      kasa = kernel.yeniKasa(sirket);
      kasa.KsMas_Kod = "1"; //Kasa Kodu
      kasa.IO = "G";
      kasa.Tip = "F";
      kasa.Kod = "600-01-001"; //Muhasebe Karsilik Kodu
      kasa.Fisno = "x10";
      kasa.Tarih = DateTime.Today;
 
      kasaKdv = kasa.KasaKalemYeni();
      kasaKdv.Kdv_Dahil = true;
      kasaKdv.Kod = "600-01-001";
      kasaKdv.Tutar = 200;
      kasaKdv.KdvMuhKod = "702-01-001";
      kasaKdv.Kdv_Oran = 8;
      kasaKdv.Miktar = 1;
 
      kasaKdv = kasa.KasaKalemYeni();
      kasaKdv.Kdv_Dahil = true;
      kasaKdv.Kod = "600-01-002";
      kasaKdv.Tutar = 400;
      kasaKdv.KdvMuhKod = "191-20-01";
      kasaKdv.Kdv_Oran = 8;
      kasaKdv.Miktar = 1;
      kasaKdv.Aciklama = "ac2";
 
      kasa.Islem(TKasaIslem.tkFaturaKayit);
 
    finally
    {
      Marshal.ReleaseComObject(kasaKdv);
      Marshal.ReleaseComObject(kasa);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

**Kasa Kalemleri Okuma**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
 
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void KasaKalemOku()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    Kasa kasa = default(Kasa);
    KasaKdv kasaKdv = default(KasaKdv);
    string fisno;
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
 
      kasa = kernel.yeniKasa(sirket);
      kasa.kayitOku(TOkumaTipi.otAc, "FISNO='" + fisno + "'");
      kasa.kayitOku(TOkumaTipi.otIlk);
      for (int i = 0; i <= kasa.KdvKalemAdedi-1; i++)
      {
          kasaKdv = kasa.get_KdvKalem(i);
          MessageBox.Show(kasaKdv.Kod);
      }
 
    finally
    {
      Marshal.ReleaseComObject(kasaKdv);
      Marshal.ReleaseComObject(kasa);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

VB

**Cari / Fatura / Muhtelif / Transfer İşlemleri**

```
Sub Kasa()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Kasa As NetOpenX.Kasa
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Kasa = Kernel.yeniKasa(Sirket)
 
Kasa.KsMas_Kod = "01"
Kasa.Kod = "DENIZ" 'Cari Kod
Kasa.Fisno = "0000001"
Kasa.Aciklama = "NetopenX Aktarimi" Kasa.Tip = "C" 'Cari
'Kasa.Tip = "F" 'Fatura
'Kasa.Tip = "M" 'Muhtelif
'Kasa.Tip = "T" 'Transfer
Kasa.IO = "G"
Kasa.Tutar = 1000000
Kasa.Yedek6 = "D" 'Rapor Kodu
Kasa.Tarih = Date
Call Kasa.Islem(tkCariOdeme)
'Call Kasa.Islem(tkFaturaKayit)
'Call Kasa.Islem(tkMuhtelif)
'Transfer için
'Kasa.Yedek1 = "02"
'Kasa.IO = "C"
'Call Kasa.Islem(tkKasaTransfer)
Set Kasa = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**Çek / Senet / Kredi Ödeme İşlemleri**

```
Sub KasaCekSenet()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Kasa As NetOpenX.Kasa
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Kasa = Kernel.yeniKasa(Sirket) Kasa.KsMas_Kod = "01"
Kasa.Kod = "DENIZ" 'Cari Kod
Kasa.Fisno = "H00000000000001"
Kasa.Aciklama = "Netopenx Aktarimi"
Kasa.Tip = "E" 'ç"E"k
Kasa.IO = "G"
Kasa.Tutar = 80000000
Kasa.Yedek6 = "D" 'Rapor Kodu
Kasa.Tarih = Date
Kasa.Cari_Muh = "C"
Kasa.CSKOdeme (csMCEK)
Set Kasa = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**Kasa Kaydı İptali**

```
Sub Kasa()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Kasa As NetOpenX50.Kasa
    On Error GoTo Hata
     
    Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", subekodu)
    Set Kasa = Kernel.yeniKasa(Sirket)  
    If (Kasa.kayitOku(otAc, "KSMAS_KOD = '00'")) Then
        'kasa kodu 00 olan kayıtlardan ilkini iptal etmek istiyoruz
        Kasa.kayitOku (otIlk)
        Kasa.Islem (tkKasaIptal)
    End If
    
    Set Kasa = Nothing
    Set Sirket = Nothing
    Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox (Err.Description)
End Sub
```
