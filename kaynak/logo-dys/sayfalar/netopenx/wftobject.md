---
title: "WFTObject"
source: https://dys.logo.cloud/external?cid=ba25aa6f-0016-49cb-a2ca-4688f2777275&link=0cd5bd93-3803-4d6e-91af-bef7eda2ce46&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [WFTObject](https://dys.logo.cloud/external?cid=ba25aa6f-0016-49cb-a2ca-4688f2777275&link=0cd5bd93-3803-4d6e-91af-bef7eda2ce46&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# WFTObject

**VB**

**İş Akışta Bekleyen Kayıtların Onaylanması**

```
Sub ISAKISONAY()
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim Core As ICore
Dim FWFTObj As WFTObject
Dim RS As NetRs
Dim KayitExist As Boolean
  
Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
Set Core = Kernel.yeniNetsisCore(Sirket)
Set FWFTObj = Kernel.yeniIsAkis(Sirket)
Set RS = Kernel.yeniNetRS(Sirket)
 
Call RS.NetsisTransaction(ttBaslat)
On Error GoTo hata
  
FWFTObj.TransactSupport = False
Call RS.Ac("SELECT * FROM WORKFLOWTRA TRA, WORKPATH PATH WHERE TRA.PATHKODU = PATH.PATHKODU AND TRA.SUBE_KODU = 0 AND KULLANICINO = 1 AND DURUMU = '" & "B" & "'")
RS.IlkK
  
FWFTObj.PATHKODU = RS.FieldByName("PathKodu").AsString
FWFTObj.ONAYNUMARASI = RS.FieldByName("ONAYNUMARASI").AsInteger
FWFTObj.ModulNo = RS.FieldByName("ModulNo").AsInteger
FWFTObj.ProgramNo = RS.FieldByName("ProgramNo").AsInteger
FWFTObj.IncKeyNo = RS.FieldByName("IncKeyNo").AsInteger
FWFTObj.DURUMU = wfdOnaylanmis
FWFTObj.Aciklama = " İş akış onay "
FWFTObj.KULLANICINO = RS.FieldByName("KULLANICINO").AsInteger
FWFTObj.DBOPTYPE = wfproOnay
FWFTObj.ILKACIKLAMA = RS.FieldByName("ILKACIKLAMA").AsString
FWFTObj.WFONTABLES = RS.FieldByName("WFONTABLES").AsString
FWFTObj.WFPROCESSTYPE = wfproOnay
FWFTObj.Calistir
FWFTObj.CIKISZAMANI = Now
FWFTObj.KAPKULLANICINO = Core.NetLibSession.NetsisUserId
FWFTObj.kayitDuzelt
  
Call RS.NetsisTransaction(ttBitir)
  
Set Core = Nothing
Set Sirket = Nothing
Set FWFTObj = Nothing
Set RS = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
Exit Sub
hata:
    Call RS.NetsisTransaction(ttGeriAl)
    MsgBox Kernel.SonNetsisHata.Detay
End Sub
```
