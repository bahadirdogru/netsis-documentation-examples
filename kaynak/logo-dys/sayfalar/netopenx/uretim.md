---
title: "Uretim"
source: https://dys.logo.cloud/external?cid=125e7e2e-3520-49ea-988e-7cad0679b8ad&link=828bf6e0-7bb6-4073-ae84-5d4af95d4e41&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Uretim](https://dys.logo.cloud/external?cid=125e7e2e-3520-49ea-988e-7cad0679b8ad&link=828bf6e0-7bb6-4073-ae84-5d4af95d4e41&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Uretim

**C#**

**Kayıt Fiş Numarası ile Üretim Sonu Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class UretimOrnek
    {
        public static void KayitFisNoIleUretimSonu()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Uretim uretim = default(Uretim);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                uretim = kernel.yeniUretim(sirket);
                uretim.UretSon_FisNo = uretim.SonFisNumarasi("C");
                uretim.UretSon_Mamul = "MAM01";
                uretim.UretSon_Tarih = DateTime.Now;
                uretim.Proje_Kodu = "033";
                uretim.UretSon_Miktar = 9;
                uretim.UretSon_Depo = 2;        //Local Depo Kodu
                uretim.I_Yedek1 = 1;            //Çikis Depo Kodu
                //Üretim kaydi atiliyor
                uretim.kayitYeni();
                //Stok hareketleri gerçeklestiriliyor
                uretim.kayitFisNoIleUretimSonu(uretim.UretSon_FisNo, TUretSonDepo.usdAktif, false, false);               
            }
            finally
            {
                Marshal.ReleaseComObject(uretim);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Delphi**

**Kayıt Fiş Numarası ile Üretim Sonu Kaydı**

```
unit UntUretim;
 
interface
 
uses Classes, SysUtils;
 
type
Uretim = class
public
  class procedure Kaydet;
end;
 
implementation
 
uses NetOpenX50_TLB;
 
{ Uretim }
 
class procedure Uretim.Kaydet;
var
  Kernel : IKernel;
  Sirket : ISirket;
  Uretim : IUretim;
begin
  Kernel := CoKernel.Create;
  try
    Sirket := Kernel.yeniSirket(vtMSSQL, 'vt adı', 'vt kull adı', 'vt kull şifre', 'netsis kull adı', 'netsis şifre', 0);
    Uretim := Kernel.yeniUretim(Sirket);
    Uretim.UretSon_FisNo := Uretim.SonFisNumarasi('A');
 
    Uretim.UretSon_Mamul := 'MAM01';
    Uretim.UretSon_Tarih := StrToDate('30.11.2007');
    Uretim.Proje_Kodu := '033';
    Uretim.UretSon_Miktar := 9;
    Uretim.UretSon_Depo := 2; //lokal depo kodu
    Uretim.I_Yedek1 := 1; //çıkış depo kodu
    
    Uretim.kayitYeni;
    Uretim.kayitFisNoIleUretimSonu(Uretim.UretSon_FisNo, usdAktif, false, false); //stok hareketlerini gerçekleştir
  finally
    Uretim := nil;
    Sirket := nil;
    Kernel.FreeNetsisLibrary;
    Kernel := nil;
  end;
end;
end.
```

**İş Emrinden Üretim Sonu Kaydı**

```
unit UntUretSonKayit;
 
interface
 
uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, NetOpenX_TLB;
 
Type
  TfrmUretim = class(TForm)
    btnUretSonKayit: TButton;
    Procedure btnUretSonKayitClick(Sender: TObject);
  Private
    Procedure IsEmrindenUretSonkayit;
  Public
    { Public declarations }
  End;
 
Var
  frmUretim: TfrmUretim;
 
Implementation
 
{$R *.dfm}
 
Procedure TfrmUretim.btnUretSonKayitClick(Sender: TObject);
Begin
  IsEmrindenUretSonkayit;
End;
 
Procedure TfrmUretim.IsEmrindenUretSonkayit;
Var
  Sirket : ISirket;
  Kernel : IKernel;
  Uretim : IUretim
  TmpFisNo : String;
Begin
 {
  Procedure kayitFisNoIleUretimSonu
  (
    FisNo : WideString;
      *Belirtilen fisno için üretim sonu kaydı yapılmasını saglar.
    UretSonDepo : TUretSonDepo;
      * Uretim sonu kaydında, bakiye kontrolunun hangi depoya göre yapılacağını belirler.
    YariMamuldeStokKullan : WordBool;
      * Uretim sonu kaydında, otomatik yarımamüllerde stoktan kullanılıp kullanılmayacağını belirler.
    MaliyetlerCarpilsin : WordBool;
      * Bileşik maliyet hesabı yapılıp yapılmayacağını belirler.
   )
  }
  Kernel:=CoKernel.Create;
 
  Try
    Sirket := Kernel.yeniSirket(vtMSSQL, 'vt adı', 'vt kull adı', 'vt kull şifre', 'netsis kull adı', 'netsis şifre', 0);
    Uretim := Kernel.yeniUretim(Sirket);
    Uretim.TransactSupport := False;
    Try
      Uretim.NetsisTransaction(ttBaslat);
      Uretim.IsEmrindenGetir('A00000000000008');
      Uretim.UretSon_FisNo := TmpFisNo;
      Uretim.UretSon_Tarih := Date;
      Uretim.UretSon_Miktar := 2;
      Uretim.kayitYeni;
 
      Uretim.kayitFisNoIleUretimSonu(TmpFisNo, usdAktif, False, False);
    Except
      On E:Exception Do
      Begin
        Uretim.NetsisTransaction(ttGeriAl);
        ShowMessage('Uretim Sonu kayıdı yapılırken hata oluştu. '+#13#10+'Dönen Hata: '+Kernel.SonNetsisHata.Hata+#13#10 + ' Detay : ' + Kernel.SonNetsisHata.Detay);
        Exit;
      End;
    End;
    Uretim.NetsisTransaction(ttBitir);
  Finally
    Sirket := nil;
    Uretim := nil;
    Kernel.FreeNetsisLibrary;
    Kernel := nil;
  End;
 
End;
 
end.
```

**VB**

**Üretim Sonu Kaydı Silme**

```
Sub UretimKayitSil()
  Dim kernel As New NetOpenX50.kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Uretim As NetOpenX50.Uretim
  On Error GoTo Hata:
   
  Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis_sube)
  Set Uretim = kernel.yeniUretim(Sirket)
   
  Call Uretim.kayitOku(otAc, "INCKEYNO=375")
   
  Dim KayitBulundu As Boolean
  KayitBulundu = Uretim.kayitOku(otIlk)
  If KayitBulundu Then
    Uretim.kayitSil
  Else
    MsgBox ("Kayıt Bulunamadı")
  End If
   
  Set Uretim = Nothing
  Set Sirket = Nothing
  Call kernel.FreeNetsisLibrary
  Set kernel = Nothing
  Exit Sub
Hata:
  MsgBox (Err.Description)
End Sub
```
