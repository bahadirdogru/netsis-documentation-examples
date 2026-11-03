---
title: "Dekomas"
source: https://dys.logo.cloud/external?cid=36af672e-5be7-4967-96d7-50242413c602&link=5c4c2a94-87db-47fc-9e12-508c62984242&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Dekomas](https://dys.logo.cloud/external?cid=36af672e-5be7-4967-96d7-50242413c602&link=5c4c2a94-87db-47fc-9e12-508c62984242&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Dekomas

**C#**

**Genel Dekont Kaydı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Dekont dekont = default(Dekont);
Dekomas dekomas = default(Dekomas);
 
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "TESTDT", "TEMELSET", "", "netsis", "net1", 0);
 
    dekomas = kernel.yeniDekomas(sirket);
    int dekontno = dekomas.YeniNumaraAl("GD");
     
    dekont = dekomas.KalemEkle(TDekontTip.dekMuhasebe);
    dekont.Dekont_No = dekontno;
    dekont.Tutar = 453.63;
    dekont.Miktar = 1;
    dekont.Kod = "191-01-001";
    dekont.B_A = "B";
    dekont.DovTL = "T";
    dekont.Proje_Kodu = "b";
    dekont.Genel_KDV = "G";
    dekont.Kdv_Dahil = "H";
    dekont.Kdv_Oran = 18;
    dekont.Plasiyer = "1";
 
    dekont = dekomas.KalemEkle(TDekontTip.dekCari);
    dekont.Dekont_No = dekontno;
    dekont.Tutar = 453.63;
    dekont.Miktar = 1;
    dekont.Kod = "120-01-014";
    dekont.B_A = "A";
    dekont.DovTL = "T";
    dekont.Proje_Kodu = "b";
    dekont.Genel_KDV = "C";
    dekont.Kdv_Oran = 18;
    dekont.Kdv_Dahil = "H";
    dekont.Plasiyer = "1";
 
    dekomas.Tamamla();
    MessageBox.Show(dekomas.Dekont_No.ToString());
}
finally
{
    Marshal.ReleaseComObject(dekomas);
    Marshal.ReleaseComObject(dekont);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Genel Dekont Sil**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Dekont dekont = default(Dekont);
Dekomas dekomas = default(Dekomas);
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "TESTDT", "TEMELSET", "", "netsis", "net1", 0);
    dekont = kernel.yeniDekont(sirket);
    dekomas = kernel.yeniDekomas(sirket);
 
    var result = dekomas.BelgeGetir("GD", 1867);
 
    if (result == true)
    {
        MessageBox.Show(Convert.ToString(dekomas.IncKeyNo));
        dekomas.TumKalemleriSil();
        dekomas.Tamamla();
    }
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    Marshal.ReleaseComObject(dekont);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**VB**

**Genel Dekont Kaydı**

```
Sub YeniDekontBelge()
 
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Dekomas As NetOpenX50.Dekomas
    Dim Dekont As NetOpenX50.Dekont
    On Error GoTo Hata:
 
      Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", 
"netsis kull", "netsis sifre", sube kodu)
 
      Set Dekomas = Kernel.yeniDekomas(Sirket)
      Dekomas.YeniNumaraAl ("ad")
      'Seri Numarasına göre yeni dekont numarası alındı
 
      Set Dekont = Dekomas.KalemEkle(dekCari)
      Dekont.Tutar = 100
      Dekont.Miktar = 2
      Dekont.Kod = "C0001"
      Dekont.B_A = "B"
      Dekont.DovTL = "T"
      Dekont.Tarih = Date
      Dekont.Plasiyer = "S001"
      Dekont.Proje_Kodu = "P001"
 
      Set Dekont = Dekomas.KalemEkle(dekStok)
      Dekont.Tutar = 100
      Dekont.Miktar = 2
      Dekont.Kod = "S0001"
      Dekont.B_A = "A"
      Dekont.DovTL = "T"
      Dekont.Tarih = Date
      Dekont.Plasiyer = "S001"
      Dekont.Proje_Kodu = "P001"
      Dekont.DEPO_KODU = 1
 
      Dekomas.Tamamla
      'Dekont belgesine ait kayıtların oluşturulması (veritabanına yansıtılması) için
'bu metodun kullanılması gereklidir.
 
      Set Dekont = Nothing
      Set Dekomas = Nothing
      Set Sirket = Nothing
      Call Kernel.FreeNetsisLibrary
      Set Kernel = Nothing
      Exit Sub
    Hata:
        MsgBox Err.Description
End Sub
```

**Dekont Düzeltme**

```vb
Sub DekontBelgeDuzelt()
 
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Dekomas As NetOpenX50.Dekomas
    Dim Dekont As NetOpenX50.Dekont
    On Error GoTo Hata:
 
      Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull", "netsis sifre", sube kodu)
 
      Set Dekomas = Kernel.yeniDekomas(Sirket)
 
      If Dekomas.BelgeGetir("ad", 46) Then
 
      Set Dekont = Dekomas.Kalem(0)
      Dekont.Tutar = 260
 
      Dekomas.Tamamla
      'Dekont belgesine ait kayıtların oluşturulması (veritabanına yansıtılması) için bu metodun kullanılması gereklidir.
 
      End If
 
      Set Dekont = Nothing
      Set Dekomas = Nothing
      Set Sirket = Nothing
      Call Kernel.FreeNetsisLibrary
      Set Kernel = Nothing
      Exit Sub
    Hata:
        MsgBox Err.Description
    End Sub
```
