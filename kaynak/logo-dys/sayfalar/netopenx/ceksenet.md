---
title: "CekSenet"
source: https://dys.logo.cloud/external?cid=87c666b7-2dca-430b-a870-c89e66ac87a9&link=154769de-20a9-418a-af33-d188962c0f2b&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [CekSenet](https://dys.logo.cloud/external?cid=87c666b7-2dca-430b-a870-c89e66ac87a9&link=154769de-20a9-418a-af33-d188962c0f2b&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# CekSenet

C#

**Borç Çeki Kaydı**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CekSenetOrnek
     {
         public static void BorcCekiKaydet()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             CekSenetAna cekSenetAna = default(CekSenetAna);
             CekSenet cekSenet = default(CekSenet);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                 cekSenetAna = kernel.yeniCekSenAna(sirket, TCekSenType.csBCEK);
                 cekSenet = cekSenetAna.EvrakYeni();
                 cekSenet.CEKSERI = "A";
                 cekSenet.SC_CIKTRH = DateTime.Now;
                 cekSenet.SC_VERENK = "VADESIZTL";               //Banka Hesap Kodu
                 cekSenet.SC_YERI = "C";             
                 cekSenet.SC_VERILENK = "00002";                 //Verilen Cari Kodu
                 cekSenet.VADETRH = DateTime.Now.AddMonths(1);
                 cekSenet.SC_ODETRH = cekSenet.VADETRH;
                 cekSenet.Proje_Kodu = "033";
                 cekSenet.Plasiyer_Kodu = "02";
                 cekSenet.Tutar = 500;
                 cekSenetAna.EvraklariKaydet(TCekSenetEvrakKaydetmeTipi.ektCekSenVerme);
             }
             finally
             {
                 Marshal.ReleaseComObject(cekSenet);
                 Marshal.ReleaseComObject(cekSenetAna);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }                                     
         }       
     }
 }
```

**Müşteri Çeki Kaydı**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CekSenetOrnek
     {
         public static void MusteriCekiKaydet()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             CekSenetAna cekSenetAna = default(CekSenetAna);
             CekSenet cekSenet = default(CekSenet);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                 cekSenetAna = kernel.yeniCekSenAna(sirket, TCekSenType.csMCEK);
                 cekSenet = cekSenetAna.EvrakYeni();
                 cekSenet.CEKSERI = "H";
                 cekSenet.SC_GIRTRH = DateTime.Now;
                 cekSenet.SC_VERENK = "00002";
                 cekSenet.AS_C = "A";
                 cekSenet.SC_YERI = "P";                               
                 cekSenet.VADETRH = DateTime.Now.AddMonths(1);
                 cekSenet.SC_ODETRH = cekSenet.VADETRH;
                 cekSenet.Proje_Kodu = "033";                
                 cekSenet.Plasiyer_Kodu = "02";
                 cekSenet.Tutar = 500;
                 cekSenetAna.EvraklariKaydet(TCekSenetEvrakKaydetmeTipi.ektCekSenAlma);
             }
             finally
             {
                 Marshal.ReleaseComObject(cekSenet);
                 Marshal.ReleaseComObject(cekSenetAna);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }                                     
         }        
     }
 }
```

**Borç Senedi Kaydı**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CekSenetOrnek
     {
         public static void BorcSenediKaydet()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             CekSenetAna cekSenetAna = default(CekSenetAna);
             CekSenet cekSenet = default(CekSenet);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                 cekSenetAna = kernel.yeniCekSenAna(sirket, TCekSenType.csBSEN);
                 cekSenet = cekSenetAna.EvrakYeni();
                 cekSenet.CEKSERI = "A";
                 cekSenet.YERI = "IZMIR";
                 cekSenet.SC_YERI = "C";
                 cekSenet.SC_CIKTRH = DateTime.Now;
                 cekSenet.SC_VERILENK = "00002";                 //Verilen Cari Kodu
                 cekSenet.VADETRH = DateTime.Now.AddMonths(1);
                 cekSenet.SC_ODETRH = cekSenet.VADETRH;
                 cekSenet.Proje_Kodu = "033";
                 cekSenet.Plasiyer_Kodu = "02";
                 cekSenet.Tutar = 500;
                 cekSenetAna.EvraklariKaydet(TCekSenetEvrakKaydetmeTipi.ektCekSenVerme);
             }
             finally
             {
                 Marshal.ReleaseComObject(cekSenet);
                 Marshal.ReleaseComObject(cekSenetAna);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }                
         }
     }
 }
```

**Müşteri Senedi Kaydı**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CekSenetOrnek
     {
         public static void MusteriSenediKaydet()
         {
             Kernel kernel = new Kernel();
             Sirket sirket = default(Sirket);
             CekSenetAna cekSenetAna = default(CekSenetAna);
             CekSenet cekSenet = default(CekSenet);
             try
             {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                               "vt kull adi",
                                               "vt kull sifre",
                                               "netsis kull adi",
                                               "netsis sifre",
                                               0);
                 cekSenetAna = kernel.yeniCekSenAna(sirket, TCekSenType.csMSEN);
                 cekSenet = cekSenetAna.EvrakYeni();
                 cekSenet.CEKSERI = "A";
                 cekSenet.SC_GIRTRH = DateTime.Now;
                 cekSenet.SC_VERENK = "00002";
                 cekSenet.AS_C = "A";
                 cekSenet.SC_YERI = "P";                
                 cekSenet.VADETRH = DateTime.Now.AddMonths(1);
                 cekSenet.SC_ODETRH = cekSenet.VADETRH;
                 cekSenet.Proje_Kodu = "033";
                 cekSenet.Plasiyer_Kodu = "02";
                 cekSenet.Tutar = 500;
                 cekSenetAna.EvraklariKaydet(TCekSenetEvrakKaydetmeTipi.ektCekSenAlma);
             }
             finally
             {
                 Marshal.ReleaseComObject(cekSenet);
                 Marshal.ReleaseComObject(cekSenetAna);
                 Marshal.ReleaseComObject(sirket);
                 kernel.FreeNetsisLibrary();
                 Marshal.ReleaseComObject(kernel);
             }               
         }        
     }
 }
```

**Senet Tanzim İşlemleri- Taksitli Satış**

```csharp
 using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CekSenetOrnek
     {
         public static void MusteriSenediKaydet()
         {
             Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            CekSenetAna cekSenetAna = default(CekSenetAna);
            CekSenet cekSenet = default(CekSenet);
            Kefil kef1 = default(Kefil);
           
            
//senet tanzim ekran kodu - taksitli satış parametlerelerindeki tanzimde cariye işlensin paraMetresine göre çalışmaktadır.
               
                
	try
                 {
　
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "ENT9",
                                              "TEMELSET",
                                              "",
                                              "NETSIS",
                                              "NET1",
                                              0);
                cekSenetAna = kernel.yeniCekSenAna(sirket, TCekSenType.csMSEN);
                cekSenet = cekSenetAna.EvrakYeni();
                cekSenet.SC_VERENK = "320-01-041"; //Banka Hesap Kodu 
                 cekSenet.SC_NO = "V00000000000020";
                cekSenet.SC_YERI = "P";
                cekSenet.VADETRH = DateTime.Now.AddMonths(1);
                cekSenet.SC_ODETRH = cekSenet.VADETRH;
                cekSenet.Tutar = 800;
                cekSenet.AS_C = "A";
                //cekSenet.Proje_Kodu = "1";
                 //cekSenet.Plasiyer_Kodu = "1";
                 kef1 = cekSenetAna.yeniKefil();
                kef1.KefilCariKodu = "001"; //birden fazla kefil varsa kefil kodu girilebilinir.
                cekSenetAna.EvraklariKaydet(TCekSenetEvrakKaydetmeTipi.ektSenetTanzim);
            }
　
            
		finally
             {
                Marshal.ReleaseComObject(cekSenet);
                Marshal.ReleaseComObject(cekSenetAna);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }         
	}        
}
 }
```

  

VB

**Müşteri Çeki Kaydı**

```vb
Sub CekSenVerme()

	Dim Kernel As New NetOpenX.Kernel
	Dim Sirket As NetOpenX.Sirket
	Dim CekSenetAna As NetOpenX.CekSenetAna
	Dim CekSenet As NetOpenX.CekSenet

	Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
	Set CekSenetAna = Kernel.yeniCekSenAna(Sirket, csMCEK)
	Call CekSenetAna.NetsisTransaction(ttBAslat)
	Set CekSenet = CekSenetAna.EvrakYeni
	CekSenet.SC_VERENK = "DEN3"
	CekSenet.SC_VERILENK = "102-001-01"
	CekSenet.SC_NO = "J00000000000004"
	CekSenet.TUTAR = 9000000
	CekSenet.VADETRH = CDate("01/01/2016")
	'"A"sıl/"C"iro Çek
	CekSenet.As_C = "A"
	CekSenet.PROJE_KODU = "001"
	CekSenetAna.EvraklariKaydet (ektCekSenVerme)
	Call CekSenetAna.NetsisTransaction(ttBitir)
	Set Sirket = Nothing
	Set CekSenet = Nothing
	Call Kernel.FreeNetsisLibrary
	Set Kernel = Nothing

End Sub
```

**Müşteri Senedi Kaydı**

```vb
Sub CekSenAlma()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim CekSenetAna As NetOpenX50.CekSenetAna
    Dim CekSenet As NetOpenX50.CekSenet
    
    On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull şifre", "netsis kull adı", "netsis kull şifre", "şube kodu")
    Set CekSenetAna = Kernel.yeniCekSenAna(Sirket, csMSEN)
    
    Set CekSenet = CekSenetAna.EvrakYeni
    CekSenet.SC_GIRTRH = CDate("16.02.2016")
    CekSenet.SC_VERENK = "00003"
    CekSenet.AS_C = "A"
    CekSenet.SC_SONDUR = "B"
    CekSenet.SC_YERI = "P"
    CekSenet.VADETRH = CDate("01.01.2019")
    CekSenet.SC_ODETRH = CDate("01.01.2019")
    CekSenet.Tutar = 1
    CekSenet.Proje_Kodu = "033"
    CekSenet.KURFARKI = 0
    CekSenet.YERI = "ISTANBUL"
    CekSenet.Update_Kodu = "X"
    CekSenet.DOVTIP = 1
    CekSenet.DOVTUT = 1
    CekSenet.GIRILDIGIYER = 2
    CekSenet.KayitYapanKul = "TCIZMELI"
    CekSenet.Plasiyer_Kodu = "01"
    
    Set CekSenet = CekSenetAna.EvrakYeni
    CekSenet.SC_GIRTRH = CDate("16.02.2016")
    CekSenet.SC_VERENK = "00003"
    CekSenet.AS_C = "A"
    CekSenet.SC_SONDUR = "B"
    CekSenet.SC_YERI = "P"
    CekSenet.VADETRH = CDate("01.01.2019")
    CekSenet.SC_ODETRH = CDate("01.01.2019")
    CekSenet.Tutar = 10
    CekSenet.Proje_Kodu = "033"
    CekSenet.KURFARKI = 0
    CekSenet.YERI = "ISTANBUL"
    CekSenet.Update_Kodu = "X"
    CekSenet.DOVTIP = 1
    CekSenet.DOVTUT = 10
    CekSenet.GIRILDIGIYER = 2
    CekSenet.KayitYapanKul = "TCIZMELI"
    CekSenet.Plasiyer_Kodu = "01"
    
    CekSenetAna.EvraklariKaydet (ektCekSenAlma)
    
    Set Sirket = Nothing
    Set CekSenet = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Çek Senet Tahsilatı**

```vb
Sub CekSenTahsil()

	Dim Kernel As New NetOpenX.Kernel
	Dim Sirket As NetOpenX.Sirket
	Dim CekSenetAna As NetOpenX.CekSenetAna
	Dim CekSenet As NetOpenX.CekSenet

	Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
	Set CekSenetAna = Kernel.yeniCekSenAna(Sirket, csMCEK)
	Call CekSenetAna.NetsisTransaction(ttBAslat)
	Set CekSenet = CekSenetAna.EvrakYeni
	CekSenet.SC_VERENK = "DEN3"
	CekSenet.SC_VERILENK = "102-001-01"
	CekSenet.SC_NO = "J00000000000004"
	CekSenet.TUTAR = 9000000
	CekSenet.VADETRH = CDate("01/01/2016")
	'"A"sıl/"C"iro Çek
	CekSenet.As_C = "A"
	CekSenet.PROJE_KODU = "001"
	CekSenetAna.EvraklariKaydet (ektCekSenTahsil)
	Call CekSenetAna.NetsisTransaction(ttBitir)

	Set Sirket = Nothing
	Set CekSenet = Nothing
	Call Kernel.FreeNetsisLibrary
	Set Kernel = Nothing

End Sub
```

**Müşteri Senedi Parçalı Tahsilatı**

```vb
Sub MusteriSenetiParcaliTahsilati()
    Dim kernel As New NetOpenX50.kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim CekSenAna As NetOpenX50.CekSenetAna
    Dim CekSen As NetOpenX50.CekSenet
    
    On Error GoTo Hata:
    Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis kull sifre", "sube kodu")
    Set CekSenAna = kernel.yeniCekSenAna(Sirket, csMSEN)
   
    Set CekSen = CekSenAna.EvrakYeni
    CekSen.SC_NO = "A00000000000054"
    CekSen.SC_VERILENK = "00003"
    CekSen.Tutar = 3
    CekSen.KasaKodu = "01"
    CekSen.SC_CIKTRH = Now
    
    CekSenAna.EvraklariKaydet (ektParcaliTahsilat)
    
    Set Sirket = Nothing
    Set CekSen = Nothing
    Set CekSenAna = Nothing
    Call kernel.FreeNetsisLibrary
    Set kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Çek Senet Okuma**

```vb
Sub CekSenOku() 
	Dim Kernel As New NetOpenX.Kernel
	Dim Sirket As NetOpenX.Sirket
	Dim CekSenetAna As NetOpenX.CekSenetAna
	Dim CekSenetOkunan As NetOpenX.CekSenet

	Set Sirket = Kernel.yeniSirket(vtOracle, "YAZ30", "FUSION30", "", "NETSIS", "", 32767)
	Set CekSenetAna = Kernel.yeniCekSenAna(Sirket, csMCEK)
	Set CekSenetOkunan = CekSenetAna.OkunanCS
	If CekSenetAna.kayitOku(otAc) Then
		'MsgBox "kayit açıldı"
		CekSenetAna.kayitOku (otIlk)
		'MsgBox CekSenetOkunan.SC_NO & "----" & CekSenetOkunan.SC_VERENK & "-----" & CekSenetOkunan.SC_VERILENK & "-----" & CekSenetOkunan.SC_YERI
		CekSenetAna.kayitOku (otSonraki)
		'MsgBox CekSenetOkunan.SC_NO & "----" & CekSenetOkunan.SC_VERENK & "-----" & CekSenetOkunan.SC_VERILENK & "-----" & CekSenetOkunan.SC_YERI
		CekSenetAna.kayitOku (otSonraki)
		'MsgBox CekSenetOkunan.SC_NO & "----" & CekSenetOkunan.SC_VERENK & "-----" & CekSenetOkunan.SC_VERILENK & "-----" & CekSenetOkunan.SC_YERI
		CekSenetAna.kayitOku (otOnceki)
		'MsgBox CekSenetOkunan.SC_NO & "----" & CekSenetOkunan.SC_VERENK & "-----" & CekSenetOkunan.SC_VERILENK & "-----" & CekSenetOkunan.SC_YERI
		CekSenetAna.kayitOku (otSon)
		'MsgBox CekSenetOkunan.SC_NO & "----" & CekSenetOkunan.SC_VERENK & "-----" & CekSenetOkunan.SC_VERILENK & "-----" & CekSenetOkunan.SC_YERI
	End If

	Set Sirket = Nothing
	Set CekSenet = Nothing
	Call Kernel.FreeNetsisLibrary
	Set Kernel = Nothing
End Sub
```
