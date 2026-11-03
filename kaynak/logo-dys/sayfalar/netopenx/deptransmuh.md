---
title: "DepTransMuh"
source: https://dys.logo.cloud/external?cid=9cd3d7eb-c706-471e-86d2-cda7c9c5d705&link=34f94abf-014b-4f84-869f-d5ab84c4d0c9&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [DepTransMuh](https://dys.logo.cloud/external?cid=9cd3d7eb-c706-471e-86d2-cda7c9c5d705&link=34f94abf-014b-4f84-869f-d5ab84c4d0c9&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# DepTransMuh

**VB**

**Depolar Arası Transfer Kaydı Muhasebeleştirme**

```
Sub DepTransMuhasebelestir()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Maliyet As NetOpenX.DepTransMuh
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767) 
Set Maliyet = Kernel.yeniMaliyet(Sirket, mtDepTransMuhasebelestir)
Maliyet.AyKodu = "03"
Maliyet.YilKodu = "2003"
Maliyet.MuhtelifTipHarDahEt = True
Maliyet.EntBilMerkezdeOlus = True
Maliyet.FarkTransferMuhKodu = "101-02-0001"
Maliyet.CikisHesapTipi = hsAlHes
Maliyet.MuhTipi = mhDetayli
Maliyet.Calistir
 
Set Maliyet = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
