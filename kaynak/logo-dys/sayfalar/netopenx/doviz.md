---
title: "Doviz"
source: https://dys.logo.cloud/external?cid=34fee337-6439-4563-a372-f09eaf247185&link=83ecc4de-d8a6-4546-893b-97892fbb4cf4&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Doviz](https://dys.logo.cloud/external?cid=34fee337-6439-4563-a372-f09eaf247185&link=83ecc4de-d8a6-4546-893b-97892fbb4cf4&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Doviz

**VB**

**Döviz Kaydı**

```
Sub DovizKaydet()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Doviz As NetOpenX.Doviz
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Doviz = Kernel.yeniDoviz(Sirket)
 
Call Doviz.NetsisTransaction(ttBAslat)
Doviz.BIRIM = 3
Doviz.ISIM = "ER"
Doviz.NETSISSIRA = 9
Call Doviz.kayitYeni
Call Doviz.NetsisTransaction(ttBitir)
 
Set Sirket = Nothing
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Döviz Okuma**

```
Sub DovizOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Doviz As NetOpenX.Doviz
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Doviz = Kernel.yeniDoviz(Sirket)
 
Call Doviz.kayitOku(otAc)
'MsgBox "acıldı"
Call Doviz.kayitOku(otIlk)
'MsgBox Doviz.Sira & "--" & Doviz.BIRIM & "--" & Doviz.ISIM
Call Doviz.kayitOku(otSonraki)
'MsgBox Doviz.Sira & "--" & Doviz.BIRIM & "--" & Doviz.ISIM
Call Doviz.kayitOku(otOnceki)
'MsgBox Doviz.Sira & "--" & Doviz.BIRIM & "--" & Doviz.ISIM
Call Doviz.kayitOku(otSon)
'MsgBox Doviz.Sira & "--" & Doviz.BIRIM & "--" & Doviz.ISIM
 
Set Sirket = Nothing
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Döviz Kuru Güncelleme**

```
Dim Kernel
Dim Sirket
Dim Doviz
 
Set Kernel = createobject("NetOpenX.Kernel")
Set Sirket = Kernel.yeniSirket(vtMSSQL, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 0)
Set Doviz = Kernel.yeniDoviz(Sirket)
     
Call Doviz.DovizKurGuncelle(Date)
     
Set Sirket = Nothing
Set Doviz = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```
