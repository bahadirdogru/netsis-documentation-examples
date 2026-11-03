---
title: "Dekont"
source: https://dys.logo.cloud/external?cid=30739156-93f6-4c63-85d5-1b30eb74e3e7&link=b34cd971-cc8a-49c0-a1b0-6ac679a4e5d2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Dekont](https://dys.logo.cloud/external?cid=30739156-93f6-4c63-85d5-1b30eb74e3e7&link=b34cd971-cc8a-49c0-a1b0-6ac679a4e5d2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Dekont

**C#**

**DoEkle Dekont Kayıt Silme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Dekont dekont = default(Dekont);
 
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
    dekont = kernel.yeniDekont(sirket);
    dekont.kayitOku(TOkumaTipi.otAc, "DEKONT_NO=1");
    var result = dekont.kayitOku(TOkumaTipi.otIlk);
    while (result)
    {
        MessageBox.Show(dekont.Seri_No + "  " + dekont.Dekont_No + "" + dekont.Sira_No);
        dekont.SDekont(TDekOpr.doSil);
    }
}
finally
{
    Marshal.ReleaseComObject(dekont);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Dekomas Kayıt Silme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Dekont dekont = default(Dekont);
Dekomas dekomas = default(Dekomas);
 
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
    dekont = kernel.yeniDekont(sirket);
    dekomas = kernel.yeniDekomas(sirket);
 
    if (dekomas.BelgeGetir("SM", 12))
    {
        dekomas.TumKalemleriSil();
    }
 
}
catch (Exception)
{
 
    throw;
}
finally
{
    Marshal.ReleaseComObject(dekont);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Cari Dekont Kaydı**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public class DekontOrnek
     {
         public static void CDekont_Kaydet()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             Dekont dekont = default(Dekont);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                               0);
                 dekont = kernel.yeniDekont(sirket);
                 dekont.Seri_No = "01";
                 dekont.Kod = "00002";
                 dekont.C_M = "C";
                 dekont.Fisno = "A";
                 dekont.Plasiyer = "02";
                 dekont.B_A = "B";
                 dekont.ValorGun = 0;
                 dekont.ValorTrh = DateTime.Now;
                 dekont.DovTL = "D";
                 dekont.DOVTUT = 500;
                 dekont.Tutar = 750;
                 dekont.Tarih = DateTime.Now;
                 dekont.Proje_Kodu = "033";
                 dekont.CDekont(TDekOpr.doEkle);
             }
             finally
             {
                 Marshal.ReleaseComObject(dekont);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }           
         }       
     }
 }
```

**Stok Dekont Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public class DekontOrnek
    {
        public static void SDekont_Kaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Dekont dekont = default(Dekont);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                              0);
                dekont = kernel.yeniDekont(sirket);
                dekont.Seri_No = "01";
                dekont.Kod = "00001";
                dekont.C_M = "S";
                dekont.Fisno = "A";               
                dekont.B_A = "B";
                dekont.ValorGun = 0;
                dekont.ValorTrh = DateTime.Now;
                dekont.DovTL = "D";
                dekont.DOVTUT = 500;
                dekont.Tutar = 750;
                dekont.Tarih = DateTime.Now;
                dekont.Proje_Kodu = "033";
                dekont.Plasiyer = "02";
                dekont.SDekont(TDekOpr.doEkle);
            }
            finally
            {
                Marshal.ReleaseComObject(dekont);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Muhasebe Dekont Kaydı**

```csharp
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public class DekontOrnek
    {
        public static void MDekont_Kaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Dekont dekont = default(Dekont);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                              0);
                dekont = kernel.yeniDekont(sirket);
                dekont.Seri_No = "01";
                dekont.Kod = "100-01-001";
                dekont.C_M = "M";    
                dekont.Fisno = "A";               
                dekont.B_A = "B";
                dekont.ValorGun = 0;
                dekont.ValorTrh = DateTime.Now;
                dekont.DovTL = "D";
                dekont.DOVTUT = 500;
                dekont.Tutar = 750;
                dekont.Tarih = DateTime.Now;
                dekont.Proje_Kodu = "033";
                dekont.Plasiyer = "02";
                dekont.MDekont(TDekOpr.doEkle);
            }
            finally
            {
                Marshal.ReleaseComObject(dekont);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            } 
        }       
    }
```

**Banka Dekont Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public class DekontOrnek
    {
        public static void BDekont_Kaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Dekont dekont = default(Dekont);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                              0);
                dekont = kernel.yeniDekont(sirket);
                dekont.Seri_No = "01";
                dekont.Kod = "001015";
                dekont.C_M = "B";
                dekont.Fisno = "A";
                dekont.Plasiyer = "02";
                dekont.B_A = "B";
                dekont.ValorGun = 0;
                dekont.ValorTrh = DateTime.Now;
                dekont.DOVTIP = 1;
                dekont.DovTL = "D";
                dekont.DOVTUT = 500;
                dekont.Tutar = 750;
                dekont.Tarih = DateTime.Now;
                dekont.Proje_Kodu = "033";
                dekont.BDekont(TDekOpr.doEkle);
            }
            finally
            {
                Marshal.ReleaseComObject(dekont);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**VB**

**Muhasebe Dekont Kaydı**

```
Sub MuhasebeDekontIslem()
 
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Dekont As NetOpenX.Dekont
 
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
    Set Dekont = Kernel.yeniDekont(Sirket)
    Dekont.Kod = "DENIZ-001" 'Muavin Kod
    Dekont.C_M = "M"              '"M"uhasebe
    Dekont.B_A = "B"               '"B"orç
    Dekont.Tutar = "1000000"
    Dekont.DovTL = "T"            '"T"L
    Dekont.Seri_No = "N"
    Dekont.Sube_Kodu = 32767
    Dekont.MDekont (doEkle)
  
    Set Dekont = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
  
End Sub
```

**Dekont Okuma**

```
Sub DekontOku()
 
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Dekont As NetOpenX.Dekont
 
    Set Sirket = Kernel.yeniSirket(vtOracle, ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
    Set Dekont = Kernel.yeniDekont(Sirket)
    If Dekont.kayitOku(otAc, " ACIKLAMA LIKE '%DEMO%'")Then
    'MsgBox "kayıt açıldı"
    Dekont.kayitOku (otIlk)
    'MsgBox Dekont.Entegrefkey
    End If
    Set Dekont = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
  
End Sub
```

**Delphi**

**Cari Dekont Kaydı**

```delphi
Unit DekKayit;
Interface
 
Uses
Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
Dialogs, StdCtrls,NetOpenX_TLB;
 
Type
TForm2 = class(TForm)
  BtnDekontKayit: TButton;
  procedure BtnDekontKayitClick(Sender: TObject);
Private
  Procedure DekontKayit;
End;
 
Var
Form2: TForm2;
 
Implementation
 
{$R *.dfm}
 
Procedure TForm2.BtnDekontKayitClick(Sender: TObject);
Begin
  DekontKayit;
End;
 
Procedure TForm2.DekontKayit;
Var
  Sirket: ISirket;
  Kernel: IKernel;
  Dekont : IDekont;
Begin
{
  Function CDekont
  (
  Opr: TDekOpr;
  * Dekont işlem tipidir.
  doEkle: yeni kayıt.
  doDuzelt: varolan kayıt üzerinde değişiklik.
  doSil: kayit silme.
  ) WordBool : İşlemin gerçekleşip gerçekleşmediğini gösterir.
  * Parametrede belirtilen cari dekont işlemini gerçekleştirir
}
 
 Kernel:=CoKernel.Create;
 Try
   Sirket := Kernel.yeniSirket(vtMSSQL, "ENTERPRISE8", "TEMELSET", "", "NETSIS", 'net1', 0);
   Dekont := kernel.yeniDekont(Sirket);
   Dekont.Fisno := 'F0001';
   Dekont.Seri_No := 'VR';
   Dekont.C_M := 'C';
   Dekont.SubeGirilecek := 'H';
   Dekont.CMISLENECEK := 'H';
   Dekont.Kdv_Dahil := 'E';
   Dekont.DovTL := 'T';
   Dekont.Kdv_Oran := 18.0;
   Dekont.Tutar := 100000000;
   Dekont.B_A := 'A';
   Dekont.Plasiyer := '01';
   Dekont.EXPORTREFNO := 'NetOpExp01';
   Dekont.Tarih := EncodeDate(2016,1,1);
   Dekont.ValorTrh := EncodeDate(2016,1,30);
   Dekont.ValorGun := 30;
   Dekont.Kod := 'C001';
   Dekont.Aciklama1 := 'Açıklama 1';
   Dekont.Aciklama2 := 'Açıklama 2';
   Dekont.Aciklama3 := 'Açıklama 3';
   Try
     Dekont.CDekont (doEkle);
   Except
   On E:Exception Do
   Begin
    ShowMessage('Dekont kayıdı yapılırken hata oluştu. '+#13#10+'Dönen Hata: '+Kernel.SonNetsisHata.Hata);
    Exit;
   End;
  End;
  Finally
   Sirket := nil;
   Dekont := nil;
   Kernel.FreeNetsisLibrary;
   Kernel := nil;
  End;
 End;
end.
```

**Dekont Düzeltme**

```delphi
unit DekontDuzelt;
 
interface
 
uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, NETOPENX_TLB;
 
type
  TForm1 = class(TForm)
    BtnDekDuzelt: TButton;
    procedure FormCreate(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
    procedure BtnDekDuzeltClick(Sender: TObject);
  private
    Kernel: IKernel;
    Sirket: ISirket;
  public
  end;
 
var
  Form1: TForm1;
 
implementation
 
{$R *.dfm}
 
Procedure TForm1.FormCreate(Sender: TObject);
Begin
  Kernel:=CoKernel.Create;
  Sirket := Kernel.yeniSirket(vtMSSQL, 'FUSION30', 'TEMELSET', '', 'NETSIS', 'deneme', 0);
End;
 
Procedure TForm1.FormDestroy(Sender: TObject);
Begin
  Kernel.FreeNetsisLibrary;
  Kernel := Nil;
  Sirket := Nil;
  Inherited;
End;
 
procedure TForm1.BtnDekDuzeltClick(Sender: TObject);
Var
  Dekont : IDekont;
  NetQuery : INetRS
Begin
  Dekont := Kernel.yeniDekont(Sirket);
  NetQuery := Kernel.yeniNetRS(Sirket);
  Try
    Try
      NetQuery.Ac(' SELECT * FROM DEKOTRA WHERE (SERI_NO = ''GD'') AND ( DEKONT_NO = ''1'') ');
      NetQuery.IlkK;
      While Not NetQuery.EOF Do
      Begin
        If Dekont.kayitOku(otAc, ' SERI_NO = ''GD'' AND DEKONT_NO = ''1'' AND SIRA_NO= '+NetQuery.FieldByName('SIRA_NO').AsString) Then
          If Dekont.kayitOku (otIlk,'') then
          Begin
            Dekont.Tutar := Dekont.Tutar + 1000000;
            If Dekont.C_M = 'C' Then
              Dekont.CDekont( doDuzelt )
            Else
            If Dekont.C_M = 'M' Then
              Dekont.MDekont( doDuzelt );
          End;
        NetQuery.SonrakiK;
      End;
    Except
    On E:Exception Do
    Begin
      ShowMessage('Dekont duzeltme işlemi yapılırken hata oluştu. '+#13#10+'Dönen Hata: '+Kernel.SonNetsisHata.Hata);
      Exit;
    End;
  End;
  Finally
    Dekont := nil;
    NetQuery := nil;
  End;
End;
end.
```
