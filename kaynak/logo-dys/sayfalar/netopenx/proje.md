---
title: "Proje"
source: https://dys.logo.cloud/external?cid=44f57053-5d36-46e7-925a-f5651cb2a47d&link=f4e5a374-7cb9-461f-a846-59bc3027a4b6&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Proje](https://dys.logo.cloud/external?cid=44f57053-5d36-46e7-925a-f5651cb2a47d&link=f4e5a374-7cb9-461f-a846-59bc3027a4b6&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Proje

**VB**

**Proje Kodu Kaydı**

```
Sub ProjeIslem()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Proje As NetOpenX.Proje
  
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Proje = Kernel.yeniProje(Sirket)
Proje.Proje_Kodu = "002"
Proje.Proje_Aciklama = "Demo Projesi Açýldý"
Proje.kayitYeni
 
Set Proje = Nothing
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Proje Kodu Okuma**

```
Sub ProjeOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Proje As NetOpenX.Proje
  
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Proje = Kernel.yeniProje(Sirket)
Proje.kayitOku (otAc)
Proje.kayitOku (otIlk)
MsgBox (Proje.Proje_Kodu) Set Proje = Nothing
 
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
