---
title: "DagFisOlus"
source: https://dys.logo.cloud/external?cid=40c3a1df-25a9-41e5-bfc5-e254c7e2886c&link=400b832f-3448-465e-a92a-602cc10f927e&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [DagFisOlus](https://dys.logo.cloud/external?cid=40c3a1df-25a9-41e5-bfc5-e254c7e2886c&link=400b832f-3448-465e-a92a-602cc10f927e&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# DagFisOlus

**VB**

**Dağıtım Fişi Oluşturma**

```vb
Sub DagitimFisiOlusturma()
 
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Maliyet As NetOpenX.DagFisOlus
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
    Set Maliyet = Kernel.yeniMaliyet(Sirket, mtDagitimFisiOlusturma)
    Maliyet.Fisno = "000000000000001"
    Maliyet.FisTarih = CDate("29/02/2016")
    Maliyet.DagitimTuru = dftMiktarsal
    Maliyet.ProjeKoduKontYapilsin = False
    Maliyet.BasIslemSiraNo = ""
    Maliyet.BitIslemSiraNo = ""
    Maliyet.Calistir
 
    Set Maliyet = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
 
End Sub
```
