---
title: "Basim"
source: https://dys.logo.cloud/external?cid=dd4b39f9-2d02-445b-95d3-7602b2e30771&link=977787b0-c6db-477b-bced-9656628eca45&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Basim](https://dys.logo.cloud/external?cid=dd4b39f9-2d02-445b-95d3-7602b2e30771&link=977787b0-c6db-477b-bced-9656628eca45&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Basim

**C#**

**Pdf Basim**

```csharp
//Dikkat !! Bu basım türünü kullanabilmek için projenize Ortak Klasörü altından
// NetBasimX.dll'i referans vermeniz gerekmektedir.
  
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
NetBasim netbasim = new NetBasim();
string pdfName = "";
  
try  {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
        netbasim.init(kernel.yeniNetsisCore(sirket));
        pdfName = netbasim.PdfBasimYap(61, "FATIRS_NO='T00000000000095'", "C:\\Temp");
 
      }
finally
    {
        Marshal.ReleaseComObject(basim);
        Marshal.ReleaseComObject(kasa);
        Marshal.ReleaseComObject(sirket);
        kernel.FreeNetsisLibrary();
        Marshal.ReleaseComObject(kernel);
    }
```

**Kasa basim**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Kasa kasa = default(Kasa);
Basim basim = default(Basim);
try
  {
        sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
    basim = kernel.yeniBasim(sirket);
    kasa = kernel.yeniKasa(sirket);               
    kasa.KsMas_Kod = "10"; // Kasa Kodu
    kasa.Kod = "120-04"; //Cari Kodu
 
   if( kasa.kayitOku(TOkumaTipi.otAc, "FISNO='24'"))
   {
        kasa.kayitOku(TOkumaTipi.otIlk);
   }
    
    basim.KasaBasim(kasa,136, TKasaBasimTipi.kbDiger);
}
    finally
{
    Marshal.ReleaseComObject(basim);
    Marshal.ReleaseComObject(kasa);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Dizayn No ile Fatura Basımı**

```
using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class BasimOrnek
     {
         public static void FaturaBasimDizaynNo()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             Basim basim = default(Basim);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                               0);
                 basim = kernel.yeniBasim(sirket);
                 string faturaNo = "000000000001E39";
                 string cariKod = "00002";
                 basim.FaturaBasimDizaynNo(TFaturaTip.ftSSip, faturaNo, cariKod, 88);
             }
             finally
             {
                 Marshal.ReleaseComObject(basim);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }
         }
     }
 }
```

**İrsaliye / Fatura Kalem Barkod Basım**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Basim basim = default(Basim);
try
{
  sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
          0);
  fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
  fatura.OkuUst("R00000000002130");
  fatUst = fatura.Ust();
  fatura.OkuKalem();
 
  basimObj = kernel.yeniBasim(sirket);
  for (int i = 0; i <= fatura.KalemAdedi - 1; i++)
     {
       basimObj.PDFPath = @"C:\temp";
       basimObj.IrsFatBarkodKalemBas(fatura, 2, "BRKD1", 1);
       MessageBox.Show(basimObj.PDFPath);
     }
 }
 catch (Exception ex)
  {
     MessageBox.Show(ex.Message);
  }
  finally
   {
     Marshal.ReleaseComObject(fatUst);
     Marshal.ReleaseComObject(fatura);
     Marshal.ReleaseComObject(sirket);
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
   }
```

**Modül Dizaynı ile Fatura Basımı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class BasimOrnek
    {
        public static void FaturaBasim()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Basim basim = default(Basim);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                                  0);
                basim = kernel.yeniBasim(sirket);
                string faturaNo = "Z00000000000005";
                string cariKod = "00002";
                basim.FaturaBasim(TFaturaTip.ftSIrs, faturaNo, cariKod);
            }
            finally
            {
                Marshal.ReleaseComObject(basim);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Dizayn No ile Yevmiye Fişi Basımı**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
 
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void YevmiyeFisBasim()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    Basim basim = default(Basim);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
            0);
 
      basim = kernel.yeniBasim(sirket);
      basim.YevmiyeFisBasimDizaynNo("000000000000001", 8, 1007);
    }
    finally
    {
      Marshal.ReleaseComObject(basim);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

**VB**

**Dizayn No ile Müşteri Senedi Basımı**

```
Sub MusteriSenetBasimi()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket 
  Dim Basim As NetOpenX50.Basim
  On Error GoTo Hata:
  
  Set Sirket = Kernel.yeniSirket(TVTTipi.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
  Set Basim = Kernel.yeniBasim(Sirket)
  Call Basim.CekSenetBasimDizaynNo(csMSEN, "A00000000000009", 12)
  
  Set Sirket = Nothing
  Set Basim = Nothing
  Call Kernel.FreeNetsisLibrary
  Set Kernel = Nothing
   
  Exit Sub
Hata:
  MsgBox (Err.Description)
End Sub
```

**Fiyat Listesinden Barkod Basımı**

```
Sub FiyatListesindenBarkodBas()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim BarkodBilgi As New NetOpenX50.BarkodBilgi
  Dim Basim As NetOpenX50.Basim
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket (NetOpenX50.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                     "şube kodu")
    Set Basim = Kernel.yeniBasim(Sirket)
     
    BarkodBilgi.StokKodu = "00055"
    BarkodBilgi.DizaynKodu = "DizaynStok"
    BarkodBilgi.BakiyeMiktarBas = False
    BarkodBilgi.Adet = 1
    BarkodBilgi.Tarih = Now
    BarkodBilgi.FiyatListesi = flSatis
     
    Call Basim.FiyatListesiBarkodBas(BarkodBilgi)
     
    Set Basim = Nothing
    Set BarkodBilgi = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**İrsaliye / Faturadan Barkod Basımı**

```
Sub IrsFatBarkodBas()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Basim As NetOpenX50.Basim
  Dim Fat As NetOpenX50.Fatura
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
    If IsNull(Sirket) Then
        MsgBox ("Sirket Olusturulamadi")
    End If
     
    Set Fat = Kernel.yeniFatura(Sirket, ftSIrs)
    Call Fat.OkuUst("000000000000004", "C0001")
    Fat.OkuKalem
     
    Set Basim = Kernel.yeniBasim(Sirket)
    Call Basim.IrsFatBarkodBas(Fat, "DENEME", 1)
     
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Depolar Arası Transferden Barkod Basımı**

```
Sub DepoBelgeBarkodBas()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Basim As NetOpenX50.Basim
  Dim Fat As NetOpenX50.Fatura
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
    If IsNull(Sirket) Then
        MsgBox ("Sirket Olusturulamadi")
    End If
     
    Set Fat = Kernel.yeniFatura(Sirket, ftDepo)
    Call Fat.OkuUst("000000000000004", "")
    Fat.OkuKalem
     
    Set Basim = Kernel.yeniBasim(Sirket)
    Call Basim.IrsFatBarkodBas(Fat, "DENEME", 1)
     
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Delphi**

**Modül Dizaynı ile Fatura Basımı**

```
Unit FaturaBasim;
 
Interface
 
Uses
    Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
    Dialogs, StdCtrls,NetOpenX_TLB;
 
Type
    TForm3 = class(TForm)
    BtnFatBas: TButton;
    Procedure BtnFatBasClick(Sender: TObject);
Private
    Procedure FaturaBas;
End;
 
Var
    Form3: TForm3;
 
implementation
{$R *.dfm}
 
Procedure TForm3.BtnFatBasClick(Sender: TObject);
Begin
 FaturaBas;
End;
 
Procedure TForm3.FaturaBas;
Var
  Sirket: ISirket;
  Kernel: IKernel;
  Basim : IBasim;
Begin
{
 Function FaturaBasim
 (
  FaturaTipi: TFaturaTip;
  * Basimi yapılacak belgenin tipi (satış faturası için AfSfat,vs.)
  FatNo: WideString;
  * Basimi yapılacak belgenin numarası (15 karakter olmalı)
  CariKodu: WideString
  * Basimi yapılacak belgenin cari kodu
 ) WordBool : Basım işleminin gerçekleşip gerçekleşmediğini gösterir.
}
 
 Kernel:=CoKernel.Create;
 Try
  Sirket := Kernel.yeniSirket(vtMSSQL, 'ENTERPRISE8', 'TEMELSET', '', 'NETSIS', '', 0);
  Basim := Kernel.yeniBasim(Sirket);
  Basim.FaturaBasim( ftSFat, '000000000000111', 'C001');
 Finally
  Sirket := nil;
  Basim := nil;
  Kernel.FreeNetsisLibrary;
  Kernel := nil;
 End;
```
