---
title: "Kernel"
source: https://dys.logo.cloud/external?cid=45785932-7678-4327-b6ca-fcf9b836fd7c&link=0e278e99-e513-49a8-a08d-9f9130443498&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Kernel](https://dys.logo.cloud/external?cid=45785932-7678-4327-b6ca-fcf9b836fd7c&link=0e278e99-e513-49a8-a08d-9f9130443498&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Kernel

**C#**

**Ek Modül Kontrolü**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
     
namespace NetOpenXTest
{
    public static class KernelOrnek
    {
        public static void EkModulVar()
        {
            Kernel kernel = new Kernel();
            try
            {
                //////////////////////////////////////////////
                //EkModulVar metoduna gönderilecek   /
                //değer: [0, 254] aralığında                 /
                //olabilir.                                            /
                //////////////////////////////////////////////               
                int EkModulNo = 100;
                var EkModulVar = kernel.get_EkModulVar(EkModulNo);
                if (!EkModulVar)
                    Console.WriteLine("Belirttiğiniz modül yüklü değil.");
            }
            finally
            {
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Şirket Listesi Getirme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class KernelOrnek
    {
        public static void GetSirketListesi()
        {
            Kernel kernel = new Kernel();
            SirketList sirketList = default(SirketList);
            try
            {
                sirketList = kernel.SirketListesi;
                for (int i = 0; i < sirketList.SirketSayisi; i++)
                {
                    SirketInfo sirket = sirketList.get_SirketInfo(i);
                    Console.WriteLine("Sirket Adi : {0}, Sirket Yili : {1}", sirket.SirketAdi, sirket.SirketYili);
                }
            }
            finally
            {
                Marshal.ReleaseComObject(sirketList);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**VB**

**Versiyon Bilgisi Gösterme**

```
Dim Kernel
Set Kernel = CreateObject("NetOpenX50.Kernel")
MsgBox Kernel.Version
  
Kernel.FreeNetsisLibrary
Kernel = Nil
```

**Temelset Dinamik Kodlama ile NetOpenX Kullanımı**

```
Dim Sirket
Dim Kernel
 
Set Kernel = CreateObject("NetopenX50.Kernel")
Set Sirket = Kernel.yeniSirketAktifEXE( NETSISCORE )
'................
'................
 
Set Sirket = Nothing
Call Kernel.FreeNetsislibrary
Set Kernel = Nothing
```

**Delphi**

**Hata Kodu Yorumlama**

```delphi
Class Procedure Fatura.HataYorumla;
Var
  Kernel      : IKernel;
  Sirket      : ISirket;
  Fatura      : IFatura;
Begin
  Kernel := CoKernel.Create;
  Try
    Try
      Sirket := Kernel.yeniSirket(vtMSSQL, 'vt adı', 'vt kull adı', 'vt kull sifre', 'netsis kull adı', 'netsis kull sifre', sube kodu);
      Fatura := Kernel.yeniFatura(Sirket, ftSFat);      
      Fatura.OkuUst('GecersizFatNo', 'GecersizCariKod');
    Except
      On E: Exception Do
      Begin
        If Assigned(Kernel.SonNetsisHata) Then
          If ( Kernel.SonNetsisHata.Kod = 401 ) Then
            ShowMessage('Fatura bilgileri bulunamadı.');
      End;
    End;
  Finally
    Fatura      := nil;
    Sirket      := nil;
    Kernel.FreeNetsisLibrary;
    Kernel      := nil;
  End;
End;
```
