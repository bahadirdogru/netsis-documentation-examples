---
title: "NDI Örnekler"
source: https://dys.logo.cloud/external?cid=47caedc7-7f2f-42be-8c1b-76cbb9a15c5f&link=a5ca15d3-766b-4072-958c-492f38ca4260&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: index.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NDI Örnekler](https://dys.logo.cloud/external?cid=47caedc7-7f2f-42be-8c1b-76cbb9a15c5f&link=a5ca15d3-766b-4072-958c-492f38ca4260&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NDI Örnekler

NDI ile tasarlanmış demirbaş örneğini aşağıdaki linkten indirebilirsiniz.

[NdiDemirbasPrj.zip](../../ekler/NdiDemirbasPrj.zip)

**SOAP WS tüketen örnek**

```
dim istek
istek="<?xml version=""1.0"" encoding=""utf-8""?>"
istek=istek+"<soapenv:Envelope"
istek=istek+" xmlns:soapenv=""http://schemas.xmlsoap.org/soap/envelope/"" "
istek=istek+" xmlns:ws=""http://ws.xxtg/"" "
istek=istek+">"
istek=istek+"<soapenv:Header>"
istek=istek+"</soapenv:Header>"
istek=istek+"   <soapenv:Body>"
istek=istek+"      <ws:GetPoInformation>"
istek=istek+"         <arg0>"& g_po_param &"</arg0>"
istek=istek+"      </ws:GetPoInformation>"
istek=istek+"   </soapenv:Body>"
istek=istek+"</soapenv:Envelope>"
 
 
Dim oHttp
Set oHttp = CreateObject("MSXML2.XmlHttp")
 
strURL = "http://10.201.213.82:33031/TSatisNetsisIntegration/GetPOInformationWS"
 
'username:password - base64 çevrimi > TkVUU0lTRU5URzp3ZWxjb21lMQ==
oHttp.open "POST",strURL , false
 
oHttp.setRequestHeader "Authorization", "Basic TkVUU0lTRU5URzp3ZWxjb21lMQ=="
oHttp.setRequestHeader "Content-Type", "text/xml; charset=utf-8"
oHttp.send istek
 
--------------------------------------------------------------------------------------------------
 
Function GetData() As Boolean
  Dim objHTTP As New MSXML2.XMLHTTP
  Dim strURL As String
  Dim strUserName As String
  Dim strPassword As String
  strUserName = "xxx"
  strPassword = "xxx"
  strURL = "http://xyz.com"
  objHTTP.Open "GET", strURL, False
  objHTTP.setRequestHeader "Authorization", "Basic " & Base64Encode(strUserName & ":" & strPassword)
  objHTTP.setRequestHeader "Content-Type", "text"
  objHTTP.send "Nothing"
  Dim strResponseReceived As String
  strResponseReceived = objHTTP.responseText
  MsgBox strResponseReceived
End Function
 
Function Base64Encode(sText)
  Dim oXML, oNode
  Set oXML = CreateObject("Msxml2.DOMDocument.3.0")
  Set oNode = oXML.createElement("base64")
  oNode.DataType = "bin.base64"
  oNode.nodeTypedValue = Stream_StringToBinary(sText)
  Base64Encode = oNode.Text
  Set oNode = Nothing
  Set oXML = Nothing
End Function
 
Function Stream_StringToBinary(Text)
  Const adTypeText = 2
  Const adTypeBinary = 1
  'Create Stream object
  Dim BinaryStream 'As New Stream
  Set BinaryStream = CreateObject("ADODB.Stream")
  'Specify stream type - we want To save text/string data.
  BinaryStream.Type = adTypeText
  'Specify charset For the source text (unicode) data.
  BinaryStream.Charset = "us-ascii"
  'Open the stream And write text/string data To the object
  BinaryStream.Open
  BinaryStream.WriteText Text
  'Change stream type To binary
  BinaryStream.Position = 0
  BinaryStream.Type = adTypeBinary
  'Ignore first two bytes - sign of
  BinaryStream.Position = 0
  'Open the stream And get binary data from the object
  Stream_StringToBinary = BinaryStream.Read
  Set BinaryStream = Nothing
End Function
```

Logo Netsis 3 Standard, Logo Netsis Wings, Logo Netsis 3 Enterprise, Logo Netsis Wings Enterprise çözümleri ile kullanılabilen 'Netsis Data Inspector (NDI)' modülünün anlatıldığı webinarımız için [tıklayınız](logo-netsis-3-enterprise-cozum-webinarlari.md)...
