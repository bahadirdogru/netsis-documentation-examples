---
title: "Cari"
source: https://dys.logo.cloud/external?cid=da26f29e-dc9d-47a3-95a0-0e8b84dc8e02&link=4fa37dc7-3c6e-4587-aef7-7b3ba8e71be8&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Cari](https://dys.logo.cloud/external?cid=da26f29e-dc9d-47a3-95a0-0e8b84dc8e02&link=4fa37dc7-3c6e-4587-aef7-7b3ba8e71be8&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Cari

**C#**

**Cari Kayıt**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class CariOrnek
    {
        public static void Kaydet()
        {
             Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           Cari cari = default(Cari);
           CariTemelBilgi cariTmlBlg = default(CariTemelBilgi);
           CariEkBilgi cariEkBlg = default(CariEkBilgi);
 
 
           try
           {
              sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                
               cari = kernel.yeniCari(sirket);
               cariTmlBlg = cari.TemelBilgi();
               cariEkBlg = cari.EkBilgi();
               cariTmlBlg.CARI_KOD = "Cari.01";
               cariTmlBlg.CARI_ISIM = "Cari Hesap Ismi";
               cariTmlBlg.CARI_TIP = "S";
               cariEkBlg.CARI_KOD = cariTmlBlg.CARI_KOD;
               cariEkBlg.TcKimlikNo = "Cari345lsdd";
               cari.kayitYeni();
               MessageBox.Show("Kayıt islemi basarılı");
           }
           catch (Exception ex)
           {
                MessageBox.Show(ex.Message);
           }
           finally
           {
               Marshal.ReleaseComObject(cariEkBlg);
               Marshal.ReleaseComObject(cariTmlBlg);
               Marshal.ReleaseComObject(cari);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
               
           }
        }
    }
}
```

**Cari Okuma**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class CariOrnek
    {
        public static void Kaydet()
        {
           Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           Cari cari = default(Cari);
           CariTemelBilgi caritemel = default(CariTemelBilgi);
                      
           try
           {
               sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
 
               cari = kernel.yeniCari(sirket);
               caritemel = cari.TemelBilgi();
               cari.kayitOku(TOkumaTipi.otAc, "CASABIT.CARI_KOD='Cari.01'");   
               {
                   cari.kayitOku(TOkumaTipi.otIlk);
                   MessageBox.Show(caritemel.CARI_KOD);
               }
 
 
           }
           catch (Exception ex)
           {
              MessageBox.Show(ex.Message);
           }
           finally
           {
               Marshal.ReleaseComObject(cari);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }        
   }
    }
}
```

**Cari Silme**

```
using System;
 using System.Runtime.InteropServices;
 using NetOpenX50;
 namespace NetOpenXTest
 {
     public static class CariOrnek
     {
         public static void Kaydet()
         {
            
           Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Cari cari = default(Cari);
             
            try
            {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                               0);
  
                cari = kernel.yeniCari(sirket);
                if (cari.kayitOku(TOkumaTipi.otAc, "CASABIT.CARI_KOD='Cari.01'"))
                {
                    cari.kayitOku(TOkumaTipi.otIlk);
                    cari.kayitSil();
                    MessageBox.Show("Silme işlemi başarılı");
                }
 
 
            }
            catch (Exception ex)
            {
               MessageBox.Show(ex.Message);
            }
            finally
            {
                Marshal.ReleaseComObject(cari);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
     }
     }
 }
```

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
CariKurFarkibilgi cariKurFarkibilgi;
try
 
{ sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
    cariKurFarkibilgi = new CariKurFarkibilgi();
    cariKurFarkibilgi.CariKodu1 = "120-01-001";
    cariKurFarkibilgi.CariKodu2 = "Z1";
    cariKurFarkibilgi.HareketTipbas = THareketTipAraligi.Devir;
    cariKurFarkibilgi.HareketTipson = THareketTipAraligi.Muhtelif;
    cariKurFarkibilgi.TarihAraligi = TTarihAraligi.TKayit;
    cariKurFarkibilgi.KurTarihi = DateTime.Today;
    cariKurFarkibilgi.DovTipBas = 1;
    cariKurFarkibilgi.DovTipSon = 20;
    cariKurFarkibilgi.ReferansKodu = String.Empty;
    cariKurFarkibilgi.BorcAlacak = TBorcAlacak.cdHepsi;
    cariKurFarkibilgi.DovizCevrimTipi = TDovCevrimTipi.EfektifAlis;
    cariKurFarkibilgi.SifirBakiyeDahilMi = true;
    cariKurFarkibilgi.SubeKirilimli = true;
    cariKurFarkibilgi.SadeceDovizliCariler = true;
    cariKurFarkibilgi.DovizBakiyesiSifirOlanlarDahil = true;
    cariKurFarkibilgi.ProjeKoduKirilimli = false;
    cariKurFarkibilgi.BasTarih = new DateTime(DateTime.Now.Year, 1, 1);
    cariKurFarkibilgi.BitTarih = new DateTime(DateTime.Now.Year, 12, 31);
    sirket.CariDovizFarklariniKapat(cariKurFarkibilgi);
    MessageBox.Show("Cari kur farkı bitti");
}
finally
 
{
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**VB**

**Cari Kaydı**

```
Sub CariKaydet()
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Cari As NetOpenX.Cari
    Dim CariTemel As NetOpenX.CariTemelBilgi
    Dim CariEk As NetOpenX.CariEkBilgi  
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
     
    Set Cari = Kernel.yeniCari(Sirket)
    Set CariTemel = Cari.TemelBilgi
    Set CariEk = Cari.EkBilgi
    Cari.NetsisTransaction (ttBaslat)
    CariTemel.ISLETME_KODU = 0
    CariTemel.Sube_Kodu = 32767
    CariTemel.CARI_KOD = "denizDemo"
    CariTemel.CARI_TIP = "A"
    CariTemel.CARI_ADRES = "Şehit Nevres Bulvarı Kızılay İş Merkezi"
    CariTemel.CARI_IL = "İzmir"
    CariTemel.CARI_ILCE = "Bornova"
    CariTemel.CARI_TEL = "05324850616"
    CariTemel.DOVIZLIMI = "E"
    CariTemel.ACIK1 = "AÇIKLAMA1 Sahası"
    CariEk.CARI_KOD = "denizDemo"
    CariEk.Kull1S = "yedek56"
    CariEk.Kull2S = "yedek56"
    Call Cari.kayitYeni
    Cari.NetsisTransaction (ttBitir)
    Set Sirket = Nothing
    Set Cari = Nothing
    Set CariTemel = Nothing
    Set CariEk = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```

**Cari Okuma**

```vb
Sub CariOku()
 
    Dim Kernel As New NetOpenX.Kernel
    Dim Sirket As NetOpenX.Sirket
    Dim Cari As NetOpenX.Cari
    Dim CariTemel As NetOpenX.CariTemelBilgi
    Dim CariEk As NetOpenX.CariEkBilgi
 
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
    Set Cari = Kernel.yeniCari(Sirket)
    Set CariTemel = Cari.TemelBilgi
    Set CariEk = Cari.EkBilgi
    If Cari.kayitOku(otAc, "CASABIT.CARI_KOD='00001'") Then
    'MsgBox "kayit açıldı"
    Cari.kayitOku (otIlk)
    'MsgBox Cari.TemelBilgi.CARI_KOD & " --- " & Cari.TemelBilgi.CARI_ISIM & Cari.EkBilgi.CARI_KOD
    Cari.kayitOku (otSonraki)
    'MsgBox Cari.TemelBilgi.CARI_KOD & " --- " & Cari.TemelBilgi.CARI_ISIM
    Cari.kayitOku (otSonraki)
    'MsgBox Cari.TemelBilgi.CARI_KOD & " --- " & Cari.TemelBilgi.CARI_ISIM
    Cari.kayitOku (otOnceki)
    'MsgBox Cari.TemelBilgi.CARI_KOD & " --- " & Cari.TemelBilgi.CARI_ISIM
    Cari.kayitOku (otSon)
    'MsgBox Cari.TemelBilgi.CARI_KOD & " --- " & Cari.TemelBilgi.CARI_ISIM
    End If
 
    Set Sirket = Nothing
    Set Cari = Nothing
    Set CariTemel = Nothing
    Set CariEk = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
  
End Sub
```

**Delphi**

**Cari Kaydı / Okuma / Düzeltme / Silme**

```
Procedure TfrmDelphiTopluOrnek.BtnCariOkuClick(Sender: TObject);
Var
  Cari : ICari;
  CariTemel : ICariTemelBilgi;
  CariEk : ICariEkBilgi;
Begin
  //Cari için yeni bir nesne alınıyor
  Cari := Kernel.yeniCari(Sirket);
  //cari özel bir tablo olduğu için CaSabit ve CaSabitEk tablolarına ait iki ayrı nesne hazırlanıyor
  CariTemel := Cari.TemelBilgi;
  CariEk := Cari.EkBilgi;
  //Filter verilmeden tüm CaSabit&CaSabitEk kayıt bilgileri aciliyor
  If Cari.kayitOku(otAc, '') Then
  Begin
    //NetOpenX nesnelerinde kayıt navigation enum. değerleri
    Cari.kayitOku(otIlk,'');
    Cari.kayitOku(otSonraki,'');
    Cari.kayitOku(otSonraki,'');
    Cari.kayitOku(otOnceki,'');
    Cari.kayitOku(otSon,'');
   //Ekrana Müşteri adı bilgisi yazdırılıyor
    ShowMessage(CariTemel.CARI_ISIM);
  End;
End;
 
Procedure TfrmDelphiTopluOrnek.BtnCariKayitClick(Sender: TObject);
Var
  Cari : ICari;
  CariTemel : ICariTemelBilgi;
  CariEk : ICariEkBilgi;
Begin
{. Cari nesnesi iki adet tabloyu aynı anda handle ettiği için Transaction
destekli kullanılmalıdır
 
. NetOpenX in nesnelerinde veri tabanı işlemi yaparken Transaction kullanılmasına
gerek yoktur. Bu işlem otomatik olarak NetOpenX tarafından yapılmaktadır
 
. Eğer transaction kullanılıyorsa mutlaka 3 tip kullanılmadır
 
. Transaction başlatılmalı
 
. Hata durumunda mutlaka geri alınmalı
 
. Tamamlanma durumunda ise bitirilmelidir
}
 
  Cari := Kernel.yeniCari(Sirket);
  CariTemel := Cari.TemelBilgi;
  CariEk := Cari.EkBilgi;
  //Yeni kayıt
  Cari.NetsisTransaction (ttBaslat);
  Try
    CariTemel.CARI_KOD := '0001';
    CariTemel.CARI_TIP := 'A';
    CariTemel.CARI_ADRES := 'Şehit Nevres Bulvarı Kızılay İş Merkezi';
    CariTemel.CARI_IL := 'İzmir';
    CariTemel.CARI_ILCE := 'Bornova';
    CariTemel.CARI_TEL := '05324850616';
    CariTemel.DOVIZLIMI := 'E';
    CariTemel.ACIK1 := 'AÇIKLAMA1 Sahası';
    CariEk.CARI_KOD := '0001';
    CariEk.Kull1S := 'yedek56';
    CariEk.Kull2S := 'yedek56';
    Cari.kayitYeni;
    Cari.NetsisTransaction (ttBitir);
  Except
    Cari.NetsisTransaction (ttGeriAl);
    Raise;
  End;
 
  //Kayıt Düzelt
  Cari.NetsisTransaction (ttBaslat);
  Try
    If Cari.kayitOku(otAc,'CASABIT.CARI_KOD=''00001''') AND Cari.kayitOku(otIlk) Then
    Begin
      CariTemel.CARI_KOD := '0001';
      CariTemel.CARI_TIP := 'A';
      CariTemel.CARI_ADRES := 'Ataturk Bulvarı Yesilay İş Merkezi';
      CariTemel.CARI_IL := 'İzmir';
      CariTemel.CARI_ILCE := 'Buca';
      Cari.kayitDuzelt;
      Cari.NetsisTransaction (ttBitir);
    End;
  Except 
    Cari.NetsisTransaction (ttGeriAl);
    Raise;
  End;
  //Kayıt Sil
  Cari.NetsisTransaction (ttBaslat);
  Try
    If Cari.kayitOku(otAc,'CASABIT.CARI_KOD=''0001''') AND Cari.kayitOku(otIlk) Then
    Begin
      CariTemel.CARI_KOD := '0001';
      Cari.kayitSil;
      Cari.NetsisTransaction (ttBitir);
    End;
  Except
    Cari.NetsisTransaction (ttGeriAl);
    Raise;
  End;
End;
```
