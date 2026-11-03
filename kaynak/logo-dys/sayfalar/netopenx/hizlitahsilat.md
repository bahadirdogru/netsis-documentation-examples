---
title: "HizliTahsilat"
source: https://dys.logo.cloud/external?cid=cbbf3783-2607-40b1-8ccd-4c162a60fc02&link=dd2cedca-6c24-4078-a68c-cbb7d1bb1d0a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [HizliTahsilat](https://dys.logo.cloud/external?cid=cbbf3783-2607-40b1-8ccd-4c162a60fc02&link=dd2cedca-6c24-4078-a68c-cbb7d1bb1d0a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# HizliTahsilat

**VB**

**Hızlı Tahsilat Kaydı**

```
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim TahsilAna As NetOpenX50.HizliTahsilatAna
Dim tahsil As NetOpenX50.HizliTahsilat
  
Set Sirket = Kernel.yeniSirket(vtMSSQL, "TEST", "sa", "sapass", "NETSIS", "1", 0)
  
Set TahsilAna = Kernel.yeniHizliTahsilatAna(Sirket)
  
TahsilAna.IslemTarihi = Date
TahsilAna.KasaKod = "01"
TahsilAna.BelgeNo = "78787878"
TahsilAna.CariKod = "00001"
TahsilAna.DOVTIP = 1
  
Set tahsil = TahsilAna.tahsilatYeni()
  
tahsil.Aciklama = 3
tahsil.SozKodu = "NAKİT"
tahsil.Tutar = 10
tahsil.PLA_KODU = 1
tahsil.Referans_Kodu = 1
'tahsil.KartNo = "0000000000000000"
tahsil.TaksitSay = 0
tahsil.DovTutar = 3
tahsil.Kur = 4
  
TahsilAna.kayitYeni
  
  
  
Set tahsil = Nothing
Set TahsilAna = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```

**Hızlı Tahsilat Okuma**

```
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim TahsilAna As NetOpenX50.HizliTahsilatAna
 Set Sirket = Kernel.yeniSirket(vtMSSQL, "TEST", "sa", "sapass", "NETSIS", "1", 0)
  
Set TahsilAna = Kernel.yeniHizliTahsilatAna(Sirket)
  
TahsilAna.KasaKod = "01"
  
Call TahsilAna.Oku("1", "00001", CDate("14.02.2013"))
  
  
Set TahsilAna = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```

**Hızlı Tahsilat Silme**

```
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim TahsilAna As NetOpenX50.HizliTahsilatAna
 Set Sirket = Kernel.yeniSirket(vtMSSQL, "TEST", "sa", "sapass", "NETSIS", "1", 0)
  
Set  TahsilAna = Kernel.yeniHizliTahsilatAna(Sirket)
  
TahsilAna.KasaKod = "01"
  
Call TahsilAna.Oku("1", "00001", CDate("14.02.2013"))
  
Call TahsilAna.kayitSil
  
   
Set TahsilAna = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```

**C#**

**Hızlı Tahsilat Kaydı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
HizliTahsilat tahsil = default(HizliTahsilat);
HizliTahsilatAna tahsilAna = default(HizliTahsilatAna);
  
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                  "vt adi",
                                  "vt kull adi",
                                  "vt kull sifre",
                                  "netsis kull adi",
                                  "netsis sifre",
                                  0);
     
    tahsilAna = kernel.YeniHizliTahsilatAna(sirket);
    tahsilAna.IslemTarihi = DateTime.Now;
    tahsilAna.KasaKod = "01";
    tahsilAna.BelgeNo = "1231231";
    tahsilAna.CariKod = "002_1";
    tahsilAna.DOVTIP = 1;
    tahsil = tahsilAna.tahsilatYeni();
    tahsil.Aciklama = "3";
    tahsil.SozKodu = "NAKİT";
    tahsil.Tutar = 10;
    tahsil.PLA_KODU = "1";
    tahsil.Referans_Kodu = "1";
    tahsil.KartNo = "0000000000000000";
    tahsil.TaksitSay = 0;
    tahsil.DovTutar = 3;
    tahsil.Kur = 4;
    tahsilAna.kayitYeni();
 
}
finally
{
    Marshal.ReleaseComObject(tahsil);
    Marshal.ReleaseComObject(tahsilAna);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Hızlı Tahsilat Okuma**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
HizliTahsilat tahsil = default(HizliTahsilat);
HizliTahsilatAna tahsilAna = default(HizliTahsilatAna);
  
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                  "vt adi",
                                  "vt kull adi",
                                  "vt kull sifre",
                                  "netsis kull adi",
                                  "netsis sifre",
                                  0);
    tahsilAna.KasaKod = "01";
    tahsilAna = kernel.YeniHizliTahsilatAna(sirket);
    tahsilAna.Oku("1","00001",Convert.ToDateTime("29.03.2016"));
 
}
finally
{
    Marshal.ReleaseComObject(tahsil);
    Marshal.ReleaseComObject(tahsilAna);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Hızlı Tahsilat Silme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
HizliTahsilat tahsil = default(HizliTahsilat);
HizliTahsilatAna tahsilAna = default(HizliTahsilatAna);
   
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                  "vt adi",
                                  "vt kull adi",
                                  "vt kull sifre",
                                  "netsis kull adi",
                                  "netsis sifre",
                                  0);
    tahsilAna.KasaKod = "01";    
    tahsilAna = kernel.YeniHizliTahsilatAna(sirket);
 
    tahsilAna.kayitSil();
  
}
finally
{
    Marshal.ReleaseComObject(tahsil);
    Marshal.ReleaseComObject(tahsilAna);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```
