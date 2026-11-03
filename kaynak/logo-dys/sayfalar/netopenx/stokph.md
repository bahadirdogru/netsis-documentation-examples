---
title: "StokPH"
source: https://dys.logo.cloud/external?cid=d86ce1fa-167a-4271-94c3-90d7d20f30f7&link=a15592e1-92b7-48fc-bbc8-9fc0e09b9780&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [StokPH](https://dys.logo.cloud/external?cid=d86ce1fa-167a-4271-94c3-90d7d20f30f7&link=a15592e1-92b7-48fc-bbc8-9fc0e09b9780&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# StokPH

**VB**

**Stok Bakiyesi Getirme**

```vb
Sub BakiyeGetir()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim StokPH As New NetOpenX.StokPH
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
 
StokPH.Stok_Kodu = "15010003"
Call Sirket.Bakiye_Getir(StokPH)
'MsgBox StokPH.Top_Cikis_Mik
'MsgBox StokPH.Top_Giris_Mik
'MsgBox StokPH.Mus_Top_Siparis
'MsgBox StokPH.Mus_Top_Teslim
 
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
End Sub
```
