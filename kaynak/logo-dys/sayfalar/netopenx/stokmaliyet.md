---
title: "StokMaliyet"
source: https://dys.logo.cloud/external?cid=29fcbde9-bd0b-4e9c-9949-a278b8a3bc69&link=281003b8-ad1e-45a0-a4f6-540f0d3bc47d&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [StokMaliyet](https://dys.logo.cloud/external?cid=29fcbde9-bd0b-4e9c-9949-a278b8a3bc69&link=281003b8-ad1e-45a0-a4f6-540f0d3bc47d&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# StokMaliyet

**VB**

**Maliyet Çalıştırma**

```
Sub StokMaliyet()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Maliyet As NetOpenX.StokMaliyet
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Maliyet = Kernel.yeniMaliyet(Sirket, mtStokMaliyet)
Maliyet.YillikIslemYapilacak = True
'Maliyet.SubelerDahil = True
MsgBox (Maliyet.MaliyetTipi)
Maliyet.DonguSayisi = 2
Maliyet.TurKisitlamasi = tkHepsi
Maliyet.Calistir
 
Set Maliyet = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
