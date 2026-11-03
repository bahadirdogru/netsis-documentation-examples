---
title: "Kur"
source: https://dys.logo.cloud/external?cid=8b22f096-69a7-4b2c-ad24-c5462cda2ba4&link=f7468e7e-a792-4a65-9950-c147d504421a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Kur](https://dys.logo.cloud/external?cid=8b22f096-69a7-4b2c-ad24-c5462cda2ba4&link=f7468e7e-a792-4a65-9950-c147d504421a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Kur

**VB**

**Kur Kaydı**

```
Sub KurKaydet()
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Kur As NetOpenX.Kur    
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
    Set Kur = Kernel.yeniKur(Sirket)
    Kur.Sira = 1
    Kur.Tarih = Date
    Kur.DOV_ALIS = 9000
    Kur.DOV_SATIS = 9000
    Call Kur.kayitYeni
     
    Set Sirket = Nothing
    Set Doviz = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```

**Kur Okuma**

```
Sub KurOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Kur As NetOpenX.Kur
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Kur = Kernel.yeniKur(Sirket)
Call Kur.kayitOku(otAc)
Call Kur.kayitOku(otIlk)
'MsgBox Kur.DOV_ALIS & "--" & Kur.DOV_SATIS & "--" & Kur.TARIH & "--" & Kur.Sira
Call Kur.kayitOku(otSonraki)
'MsgBox Kur.DOV_ALIS & "--" & Kur.DOV_SATIS & "--" & Kur.TARIH & "--" & Kur.Sira
Call Kur.kayitOku(otOnceki)
'MsgBox Kur.DOV_ALIS & "--" & Kur.DOV_SATIS & "--" & Kur.TARIH & "--" & Kur.Sira
Call Kur.kayitOku(otSon)
'MsgBox Kur.DOV_ALIS & "--" & Kur.DOV_SATIS & "--" & Kur.TARIH & "--" & Kur.Sira
 
Set Sirket = Nothing
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
