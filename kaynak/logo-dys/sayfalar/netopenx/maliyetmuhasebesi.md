---
title: "MaliyetMuhasebesi"
source: https://dys.logo.cloud/external?cid=61f4d96a-4f02-4284-a92f-abb607a0e0de&link=14f8b2f7-af1f-4af4-8436-8b4b49078283&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [MaliyetMuhasebesi](https://dys.logo.cloud/external?cid=61f4d96a-4f02-4284-a92f-abb607a0e0de&link=14f8b2f7-af1f-4af4-8436-8b4b49078283&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# MaliyetMuhasebesi

**VB**

**Maliyet Muhasebesi Çalıştırma**

```vb
Sub MaliyetMuhasabesi()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Maliyet As NetOpenX.MaliyetMuhasebesi
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767) 
Set Maliyet = Kernel.yeniMaliyet(Sirket, mtMaliyetMuhasebesi)
 
Maliyet.AyKodu = 3
Maliyet.YilKodu = 2004
Maliyet.HazirlikYapilacak = True
Maliyet.MahsupOlusturulacak = True
Maliyet.PaylastirmaHasTutar = 1
Maliyet.GenelSafhaSayisi = 2
Maliyet.Calistir
  
Set Maliyet = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
