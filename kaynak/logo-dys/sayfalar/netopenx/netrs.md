---
title: "NetRS"
source: https://dys.logo.cloud/external?cid=0f09259d-9e62-4ad5-afd5-6ec92f09e94b&link=5544f8d3-057b-4155-b794-0962dfdcf5f2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NetRS](https://dys.logo.cloud/external?cid=0f09259d-9e62-4ad5-afd5-6ec92f09e94b&link=5544f8d3-057b-4155-b794-0962dfdcf5f2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NetRS

**C#**

**NetRS Kullanımı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
 
 
    NetRS netRS = kernel.yeniNetRS(sirket);
 
    netRS.Ac("SELECT * FROM CASABIT");
 
    while (!netRS.EOF)
    {
        MessageBox.Show(netRS.FieldByName("CARI_KOD").AsString);
        netRS.SonrakiK();
    }
 
    
 
}
finally
{
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**NetRS**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
NetRS NetQuery = default(NetRS);
 
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "EGTM", "TEMELSET", "", "Admin", "Admin", 0);
    NetQuery = kernel.yeniNetRS(sirket);
    NetQuery.NetsisTransaction(TTransactionTipi.ttBaslat);
    NetQuery.Calistir("INSERT INTO CASABIT (SUBE_KODU,ISLETME_KODU,CARI_KOD,CARI_ISIM) VALUES (0,1,'00002','XXXXX')");
    NetQuery.Calistir("INSERT INTO CASABITEK (CARI_KOD) VALUES ('00002')");
    NetQuery.NetsisTransaction(TTransactionTipi.ttBitir);
 
}
catch (Exception ex)
{
    MessageBox.Show(ex.ToString());
    NetQuery.NetsisTransaction(TTransactionTipi.ttGeriAl);
}
finally
{
    Marshal.ReleaseComObject(NetQuery);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**VB**

**NetRS Kullanımı**

```
Sub NetsisQuery()
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim NetQuery As NetOpenX.NetRS
 
Set Sirket = Kernel.yeniSirket(vtMSSQL, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "NET1", 0)
Set NetQuery = Kernel.yeniNetRS(Sirket)
Call NetQuery.Ac("select * from CASABIT")
While Not NetQuery.EOF
  MsgBox NetQuery.FieldByName("CARI_KOD").AsString
  NetQuery.SonrakiK
Wend
 
Set NetQuery = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Insert / Delete / Update İşlemleri**

```
Sub NetQueryExec()
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim NetQuery As NetOpenX.NetRS
 
Set Sirket = Kernel.yeniSirket(vtMSSQL, "enterprıse8", "TEMELSET", "", "NETSIS", "NET1", 0)
Set NetQuery = Kernel.yeniNetRS(Sirket)
Call NetQuery.Calistir("INSERT INTO CASABIT (SUBE_KODU,ISLETME_KODU,CARI_KOD,CARI_ISIM) VALUES (0,1,'8889','XXXXX')")
 
Set NetQuery = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```
