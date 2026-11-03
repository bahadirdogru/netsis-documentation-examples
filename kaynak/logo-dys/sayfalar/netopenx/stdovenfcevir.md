---
title: "StDovEnfCevir"
source: https://dys.logo.cloud/external?cid=118ee908-8c8f-4be0-8c13-f3e3b9894566&link=926cfe1b-33ee-40a1-8e89-0ca744324f9d&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [StDovEnfCevir](https://dys.logo.cloud/external?cid=118ee908-8c8f-4be0-8c13-f3e3b9894566&link=926cfe1b-33ee-40a1-8e89-0ca744324f9d&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# StDovEnfCevir

**VB**

**Stok / Döviz Enflasyona Çevrim**

```
Sub StDovEnfCevir()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Maliyet As NetOpenX.StDovEnfCevir
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Maliyet = Kernel.yeniMaliyet(Sirket, mtStokDovEnfCevir)
 
Maliyet.StokKodu = "KABLO"
'Maliyet.GrupKodu = "MALZ01"
'Maliyet.KOD1 = "KOD01"
Maliyet.Tarih1 = CDate("01/01/2016")
Maliyet.Tarih2 = CDate("31/12/2016")
Maliyet.Calistir Set Maliyet = Nothing
 
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
