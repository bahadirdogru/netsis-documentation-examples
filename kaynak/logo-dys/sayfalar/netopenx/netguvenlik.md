---
title: "NetGuvenlik"
source: https://dys.logo.cloud/external?cid=41ed85e7-3931-4e16-9090-3eb16287e3b6&link=bed45046-06a4-4445-b684-a8d3794af997&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NetGuvenlik](https://dys.logo.cloud/external?cid=41ed85e7-3931-4e16-9090-3eb16287e3b6&link=bed45046-06a4-4445-b684-a8d3794af997&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NetGuvenlik

**VB**

**Güvenlik Bilgileri Okuma**

```
Sub GuvenlikOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Guvenlik As NetOpenX.NetGuvenlik
 
MsgBox guvenlik.GuvenlikSunucusu
MsgBox guvenlik.KurulumTipi
MsgBox guvenlik.LisansSayisi
MsgBox guvenlik.MusteriKodu
MsgBox guvenlik.ProgramListe(1)
MsgBox guvenlik.UrunSurumu
Set Guvenlik = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```
