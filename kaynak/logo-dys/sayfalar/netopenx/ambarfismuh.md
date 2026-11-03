---
title: "AmbarFisMuh"
source: https://dys.logo.cloud/external?cid=ab3372a0-6dc3-4929-a01a-6f27bd57177e&link=72c27b4a-b8bc-4ebd-a5b0-8a2189fa710a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [AmbarFisMuh](https://dys.logo.cloud/external?cid=ab3372a0-6dc3-4929-a01a-6f27bd57177e&link=72c27b4a-b8bc-4ebd-a5b0-8a2189fa710a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# AmbarFisMuh

**VB**

**Ambar Fişi Muhasebeleştirme**

```
Sub AmbarFisiMuhasebelestirme()
 
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Maliyet As NetOpenX.AmbarFisMuh
 
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 0)
    Set Maliyet = Kernel.yeniMaliyet(Sirket, mtAmbFisMuhasebelestir)
    Maliyet.Ay = "01"
    Maliyet.Yil = "2003"
    Maliyet.Aciklama = "NetOpenX"
    Maliyet.GrupKod1 = ""
    Maliyet.GrupKod2 = ""
    Maliyet.SubelerDahil = True
    Maliyet.HesapTipi = hsAlHes
    Maliyet.AmbFisNoKirilimliAktar = True
    Maliyet.Calistir
 
    Set Maliyet = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
 
End Sub
```

**C#**

**Ambar Fişi Muhasebeleştirme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
AmbarFisMuh maliyet = default(AmbarFisMuh);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,"vt adi",
        "vt kull adi","vt kull sifre","netsis kull adi","netsis sifre",0);
    maliyet = kernel.yeniMaliyet(sirket, mtAmbFisMuhasebelestir);
    maliyet.Ay = "01";
    maliyet.Yil = "2003";
    maliyet.Aciklama = "NetOpenX";
    maliyet.GrupKod1 = "";
    maliyet.GrupKod2 = "";
    maliyet.SubelerDahil = true;
    maliyet.HesapTipi = hsAlHes;
    maliyet.AmbFisNoKirilimliAktar = true;
    maliyet.Calistir();
}
finally
{
    Marshal.ReleaseComObject(maliyet);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```
