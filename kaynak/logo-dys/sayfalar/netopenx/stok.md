---
title: "Stok"
source: https://dys.logo.cloud/external?cid=31a36ff7-199b-4b63-a0a1-0014b87ba357&link=b78d1d6a-6c08-439c-81df-e33bdf03b3d0&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Stok](https://dys.logo.cloud/external?cid=31a36ff7-199b-4b63-a0a1-0014b87ba357&link=b78d1d6a-6c08-439c-81df-e33bdf03b3d0&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Stok

**C#**

**Stok Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{ 
    public static class StokOrnek
    {
        public static void StokKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Stok StokKarti = default(Stok);
            StokTemelBilgi StokTmlBlg = default(StokTemelBilgi);
            StokEkBilgi StokEkBlg = default(StokEkBilgi);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                StokKarti = kernel.yeniStok(sirket);
                StokTmlBlg = StokKarti.TemelBilgi();
                StokEkBlg = StokKarti.EkBilgi();
                StokTmlBlg.Stok_Kodu = "STA1004";
                StokTmlBlg.Stok_Adi = "Stok Adi";
                StokTmlBlg.KDV_Orani = 18;
                StokTmlBlg.Alis_Kdv_Kodu = 18;
                StokTmlBlg.Satis_Fiat1 = 120;
                StokTmlBlg.Satis_Fiat2 = 125;
                StokTmlBlg.Alis_Fiat1 = 110;
                StokTmlBlg.Alis_Fiat2 = 115;
                StokTmlBlg.Giris_Seri = "E";
                StokTmlBlg.Cikis_Seri = "E";
                StokTmlBlg.Pay_1 = 1;
                StokTmlBlg.Payda_1 = 1;
                StokTmlBlg.Pay2 = 1;
                StokTmlBlg.Payda2 = 1;
                StokEkBlg.Stok_Kodu = StokTmlBlg.Stok_Kodu;
                StokEkBlg.Ingisim = "Stok Name";
                StokKarti.kayitYeni();
 
               MessageBox.Show("Kayıt basarılı");
            }
            finally
            {
                Marshal.ReleaseComObject(StokEkBlg);
                Marshal.ReleaseComObject(StokTmlBlg);
                Marshal.ReleaseComObject(StokKarti);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

**Stok Düzenle**

```
Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           Stok StokKarti = default(Stok);
           StokTemelBilgi StokTmlBlg = default(StokTemelBilgi);
           StokEkBilgi StokEkBlg = default(StokEkBilgi);
           try
           {
               sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
               StokKarti = kernel.yeniStok(sirket);
               StokTmlBlg = StokKarti.TemelBilgi();
               StokEkBlg = StokKarti.EkBilgi();
               StokKarti.kayitOku(TOkumaTipi.otAc, " stsabit.STOK_KODU = 'STA1004'");
               StokKarti.kayitOku(TOkumaTipi.otIlk);
               MessageBox.Show(StokTmlBlg.Stok_Kodu);
               StokTmlBlg.Satis_Fiat1 = 100;
               StokTmlBlg.Satis_Fiat2 = 105;
               StokTmlBlg.Alis_Fiat1 = 100;
               StokTmlBlg.Alis_Fiat2 = 115;
               StokKarti.kayitDuzelt();
              // StokKarti.kayitYeni();
           }
           catch (Exception ex)
           {
               throw ex;
           }
           finally
           {
               Marshal.ReleaseComObject(StokEkBlg);
               Marshal.ReleaseComObject(StokTmlBlg);
               Marshal.ReleaseComObject(StokKarti);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }
```

**Stok Sil**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Stok StokKarti = default(Stok);
StokTemelBilgi StokTmlBlg = default(StokTemelBilgi);
StokEkBilgi StokEkBlg = default(StokEkBilgi);
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "vt adi",
                                   "vt kull adi",
                                   "vt kull sifre",
                                   "netsis kull adi",
                                   "netsis sifre",
                                   0);
    StokKarti = kernel.yeniStok(sirket);
    StokTmlBlg = StokKarti.TemelBilgi();
    StokEkBlg = StokKarti.EkBilgi();
    StokKarti.kayitOku(TOkumaTipi.otAc, " stsabit.STOK_KODU = 'STA1004'");
    StokKarti.kayitOku(TOkumaTipi.otIlk);
    StokKarti.kayitSil();
    MessageBox.Show("Silme islemi basarılı");
}
catch (Exception ex)
{
    throw ex;
}
finally
{
    Marshal.ReleaseComObject(StokEkBlg);
    Marshal.ReleaseComObject(StokTmlBlg);
    Marshal.ReleaseComObject(StokKarti);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**VB**

**Stok Kaydı**

```
Sub StokKaydet()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Stok As NetOpenX.Stok
Dim StokTemel As NetOpenX.StokTemelBilgi
Dim StokEk As NetOpenX.StokEkBilgi
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Stok = Kernel.yeniStok(Sirket)
Set StokTemel = Stok.TemelBilgi
Set StokEk = Stok.EkBilgi
 
Call Stok.NetsisTransaction(ttBAslat) StokTemel.ISLETME_KODU = 0
StokTemel.Sube_Kodu = 32767
StokTemel.Stok_Kodu = "denizDemo3"
StokTemel.Stok_Adi = "denizDemo Adi"
StokTemel.Satis_Fiat1 = "9000"
StokTemel.Satis_Fiat2 = "9001" StokEk.Stok_Kodu = "denizDemo3"
StokEk.Dagitici_Kodu = "001"
StokEk.Ingisim = "test"
StokEk.I_Yedek1 = 999Call Stok.kayitYeni
 
Call Stok.NetsisTransaction(ttBitir)
 
Set Sirket = Nothing
Set Stok = Nothing
Set StokTemel = Nothing
Set StokEk = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**Stok Okuma**

```
Sub StokOku()
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Stok As NetOpenX.Stok
Dim StokTemel As NetOpenX.StokTemelBilgi
Dim StokEk As NetOpenX.StokEkBilgi
  
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Stok = Kernel.yeniStok(Sirket)
Set StokTemel = Stok.TemelBilgi
Set StokEk = Stok.EkBilgi
If Stok.kayitOku(otAc, " stsabit.STOK_KODU LIKE 'de%'") Then
'MsgBox "kayit açıldı"
Stok.kayitOku (otIlk)
'MsgBox Stok.TemelBilgi.Stok_Kodu & " --- " &Stok.TemelBilgi.Stok_Adi & "--" & Stok.TemelBilgi.Satis_Fiat1 & "--" & Stok.EkBilgi.Stok_Kodu & "--" & Stok.EkBilgi.Birim_Maliyet
Stok.kayitOku (otSonraki)
'MsgBox Stok.TemelBilgi.Stok_Kodu & " --- " & Stok.TemelBilgi.Stok_Adi & "--" & Stok.TemelBilgi.Satis_Fiat1
Stok.kayitOku (otSonraki)
'MsgBox Stok.TemelBilgi.Stok_Kodu & " --- " & Stok.TemelBilgi.Stok_Adi & "--" & Stok.TemelBilgi.Satis_Fiat1
Stok.kayitOku (otOnceki)
'MsgBox Stok.TemelBilgi.Stok_Kodu & " --- " & Stok.TemelBilgi.Stok_Adi & "--" & Stok.TemelBilgi.Satis_Fiat1
Stok.kayitOku (otSon)
'MsgBox Stok.TemelBilgi.Stok_Kodu & " --- " & Stok.TemelBilgi.Stok_Adi & "--" & Stok.TemelBilgi.Satis_Fiat1
End If
 
Set Sirket = Nothing
Set Stok = Nothing
Set StokTemel = Nothing
Set StokEk = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**Delphi**

**Stok Kaydı**

```
Procedure TfrmDelphiTopluOrnek.BtnStokYazClick(Sender: TObject);
Var
  Stok : IStok;
  StokTemel : IStokTemelBilgi;
  StokEk : IStokEkBilgi;
Begin
{
. Stok nesnesi de Cari nesnesine benzer şekilde kullanılmalıdır
 
 
. Burada yapılan işlemler istisna olarak Transaction destekli olmalıdır
 
}
  Stok := Kernel.yeniStok(Sirket);
  StokTemel := Stok.TemelBilgi;
  StokEk := Stok.EkBilgi;
  Stok.NetsisTransaction(ttBaslat);
  Try
    StokTemel.Stok_Kodu := 'Dixi001';
    StokTemel.Stok_Adi := 'Dixi Temizlik';
    StokTemel.Satis_Fiat1 := 10.5; //YTL
    StokTemel.Satis_Fiat2 := 12.5; //YTL
    StokEk.Stok_Kodu := 'Dixi001';
    StokEk.Ingisim := 'Dixi Cleaning Etc.';
    Stok.kayitYeni;
    Stok.NetsisTransaction(ttBitir);
  Except
    Stok.NetsisTransaction(ttGeriAl);
    Raise;
  End;
  If Stok.kayitOku(otAc, ' stsabit.STOK_KODU LIKE ''00%''') Then
  Begin
    Stok.kayitOku(otIlk,'');
    Stok.kayitOku(otSonraki,'');
    Stok.kayitOku(otSonraki,'');
    Stok.kayitOku(otOnceki,'');
    Stok.kayitOku(otSon,'');
End;
End;
```

**Stok Okuma**

```
procedure TfrmDelphiTopluOrnek.BtnStokOkuClick(Sender: TObject);
Var
  Stok : IStok;
  StokTemel : IStokTemelBilgi;
  StokEk : IStokEkBilgi;
Begin
  Stok := Kernel.yeniStok(Sirket);
  StokTemel := Stok.TemelBilgi;
  StokEk := Stok.EkBilgi;
  If Stok.kayitOku(otAc, ' stsabit.STOK_KODU LIKE ''001%''') Then
  Begin
    Stok.kayitOku(otIlk,'');
    Stok.kayitOku(otSonraki,'');
    Stok.kayitOku(otSonraki,'');
    Stok.kayitOku(otOnceki,'');
    Stok.kayitOku(otSon,'');
  End;
End;
```
