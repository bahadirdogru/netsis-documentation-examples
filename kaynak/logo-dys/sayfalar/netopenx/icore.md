---
title: "ICore"
source: https://dys.logo.cloud/external?cid=37e74f34-8b07-4ce1-900e-c6d6f69c278b&link=4bfdb80f-1cc5-4448-9e78-9b49924559ca&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [ICore](https://dys.logo.cloud/external?cid=37e74f34-8b07-4ce1-900e-c6d6f69c278b&link=4bfdb80f-1cc5-4448-9e78-9b49924559ca&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# ICore

**C#**

**Program Bilgisi Okuma**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
using NetsisCOMLibrary;
namespace NetOpenXTest
{
    public static class ICoreOrnek
    {
        public static void ProgramInformation()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            ICore netsisCore = default(ICore);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                                  "vt adi",
                                                  "vt kull adi",
                                                  "vt kull sifre",
                                                  "netsis kull adi",
                                                  "netsis kull sifre",
                                                  "sube kodu");
                //Örnek program bilgileri
                netsisCore = kernel.yeniNetsisCore(sirket);
                int ProductId = netsisCore.NetLibSession().NetsisUrunNumarasi;
                int UserCount = netsisCore.NetLibSession().TotalUserCount;
                bool SingleMachine = netsisCore.NetLibSession().TekMakine;
                string CustomerId = netsisCore.NetLibSession().MusteriNumarasi;
            }
            finally
            {
                Marshal.ReleaseComObject(netsisCore);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            } 
        }
    }
}
```

**VB**

**Aktif Kullanıcı Numarası**

```
Sub NETSISCORE()
  
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim Core As ICore
  
Set Sirket = Kernel.yeniSirket(vtMSSQL, "TEST", "sa", "sapass", "NETSIS", "", 0)
Set Core = Kernel.yeniNetsisCore(Sirket)
MsgBox Core.NetLibSession.NetsisUserId
  
Set Core = Nothing
Set Sirket = Nothing
Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**SMS Gönderme**

```
Sub TrySMS()
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As Sirket
Dim Core As ICore
On Error GoTo Hata:
  
Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull şifre", "netsis kull adı", "netsis kull şifre", şube kodu)
Set Core = Kernel.yeniNetsisCore(Sirket)
Set SMSObj = Core.NetLibSMS("Netsis", Now, Now)
Call SMSObj.SendMessage("Netsis", Now, Now, "Deneme", "00905333333333", "01", "Netsis")
  
Hata:
    MsgBox Err.Description
End Sub
```
