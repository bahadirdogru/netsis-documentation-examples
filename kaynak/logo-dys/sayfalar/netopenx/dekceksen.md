---
title: "DekCekSen"
source: https://dys.logo.cloud/external?cid=5398f8d5-1c4a-41ec-85fc-eb0740de8825&link=00c284aa-2b39-4b76-a5ce-429db6558267&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [DekCekSen](https://dys.logo.cloud/external?cid=5398f8d5-1c4a-41ec-85fc-eb0740de8825&link=00c284aa-2b39-4b76-a5ce-429db6558267&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# DekCekSen

**VB**

**Çek Senet Tahsil Dekontu**

```
Sub CekSenetTahsilDekontu()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim DekCekSen As  NetOpenX50.DekCekSen
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", "sube kodu")
     
    Set DekCekSen = Kernel.yeniCSDekont(Sirket, csCek)
    DekCekSen.Aciklama = "Aciklama"
    DekCekSen.AlacakCari = "Alacak Cari Kodu"
    DekCekSen.Banka_Kodu = "Banka Kodu"
    DekCekSen.BankaBorcBedel = "Banka Borç Bedeli"
    DekCekSen.BorcCari = "Borç Cari Kodu"
    DekCekSen.C_M = "Cari / Muhasebe"
    DekCekSen.CariRaporKodu = "Cari Rapor Kodu"
    DekCekSen.Dekont_Tarihi = "Dekont Tarihi"
    DekCekSen.DovizKuru = "Döviz Kuru"
    DekCekSen.DovizTipi = "Döviz Tipi"
    DekCekSen.Fisno = "Fiş Numarası"
    DekCekSen.GiderHesapKodu = "Gider Hesap Kodu"
    DekCekSen.Islem_Tarihi = "İşlem Tarihi"
    DekCekSen.KURFARKI = "Kur Farkı"
    DekCekSen.Plasiyer_Kodu = "Plasiyer Kodu"
    DekCekSen.ReferansKodu = "Referans Kodu"
    DekCekSen.SC_NO = "Çek/Senet No"
    DekCekSen.Seri = "Seri No"
    DekCekSen.TahsilMasraf = "Tahsil Masraf"
    DekCekSen.TTHesap_Kodu = "TTHesapKodu"
    DekCekSen.VirmanHesapKodu = "VirmanHesapKodu"
    DekCekSen.CSDOdeme (csMCEK)  
    Set DekCekSen = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Borç Çeki Ödentisi**

```
Sub BorcCekiOdentisi()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim DekCekSen As NetOpenX50.DekCekSen
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", "sube kodu")
      
    DekCekSen = Kernel.yeniCSDekont(Sirket, TDekCSTip.csCek)
    DekCekSen.SC_NO = "B00000000000044"
    DekCekSen.Seri = "A"
    DekCekSen.AlacakCari = "15"
    DekCekSen.BorcCari = "100"
    DekCekSen.C_M = "B"
    DekCekSen.Banka_Kodu = "1"
    DekCekSen.Dekont_Tarihi = Date.Now
    'DekCekSen.DovizKuru = "Döviz Kuru"
    DekCekSen.DovizTipi = 1
    DekCekSen.Islem_Tarihi = Date.Now
    DekCekSen.Aciklama = "Aciklama"
    DekCekSen.BCSDOdeme(TCekSenType.csBCEK)
    Set DekCekSen = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```
