---
title: "Sirket"
source: https://dys.logo.cloud/external?cid=180c0c01-c882-4c07-85ff-49fef0ef91b9&link=333c64d5-f62f-4407-8b8d-e57470ee6abe&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Sirket](https://dys.logo.cloud/external?cid=180c0c01-c882-4c07-85ff-49fef0ef91b9&link=333c64d5-f62f-4407-8b8d-e57470ee6abe&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Sirket

C# 

**Cari Döviz Farkı Kapama**

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

**Muhasebe Aydan Aya Fiş Aktarımı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0); sirket.MuhAydanAyaFisAktarim(4, "000000000000089", 5, "000000000000090", DateTime.Today, false, "", "", false);
 
}
catch (Exception exp)
{
    MessageBox.Show("Hata: " + exp.Message);
}
finally
{
   Marshal.ReleaseComObject(sirket);
   kernel.FreeNetsisLibrary();
   Marshal.ReleaseComObject(kernel);
}
```

**Muhasebe Hesap Kodu Aktarımı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
  sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
 
 DateTime dt_Yil1 = new DateTime(DateTime.Now.Year, 1, 1); // Yılın ilk günü
 DateTime dt_Yil2 = dt_Yil1.AddYears(1).AddDays(-1); // Yılın son günü
 
 sirket.MuhHesapKoduAktarim(dt_Yil1, dt_Yil2, "121-01-001", "120-01-004", "", "", true, TMuhAktTuru.atHepsi);
 
}
catch (Exception exp)
{
       MessageBox.Show("Hata: " + exp.Message);
}
finally
{
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
}
```

**Açık Reçete Analizi Çalıştır**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
  sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
  sirket.AcikReceteAnaliziCalistir("MMLX2","MMLX2","",TAcikReceteBilesenSirasi.arbsGirisSirasi);
}
catch (Exception ex)
  {
     MessageBox.Show(ex.Message);
  }
finally
  {
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
  }
```

**Cari Hareket Kontrol**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
  sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
 
  sirket.CariHareketKontrol("120-01-013");
}
catch (Exception ex)
  {
      MessageBox.Show(ex.Message);
  }
finally
  {
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
   }
```

**Cari Kodu Değiştir**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.CariKoduDegistir("120-01-024", "120-01-025", true, false);
}
finally
{
   Marshal.ReleaseComObject(sirket);
   kernel.FreeNetsisLibrary();
   Marshal.ReleaseComObject(kernel);
}
```

**E-Posta Gönder**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.EPostaGonder("deneme@logo.com.tr", "", "deneme", "", "deneme");
}
finally
  {
     Marshal.ReleaseComObject(sirket);
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

**Fiş Numara Değişikliği**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.FisNumaraDegisikligi(11, "000000000000077", "000000000000078");
}
catch (Exception exp)
  {
     MessageBox.Show("Hata: " + exp.Message);
   }
finally
  {
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

**Görsel Rapor Çalıştır**

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
try
  {
    fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "REMDA2016", "TEMELSET", "", "Admin", "Admin", 0);
 
    string tmpPath = "";
    tmpPath = fSirket.GorselRaporTaslagiCalistir(9, @"C:\TEMP\Files\SS1.pdf");
    MessageBox.Show("Oldu: " + tmpPath);
   }
catch (Exception ex)
   {
       MessageBox.Show(ex.Message);
   }
finally
   {
      Marshal.ReleaseComObject(fSirket);
      fKernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(fKernel);
   }
```

**Reçete Stok Bağlantı Oluştur**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.ReceteStokBaglantiOlustur();
}
catch (Exception exp)
  {
     MessageBox.Show("Hata: " + exp.Message);
   }
finally
  {
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

**Stok Hareket Kontrol**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.StokHareketKontrol("MMLX4-1", "MMLX4-1");
}
catch (Exception exp)
  {
     MessageBox.Show("Hata: " + exp.Message);
   }
finally
  {
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

**Stok Kodu Değiştir**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
try
{
   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL, "ENTERPRISE9", "TEMELSET", "", "Admin", "Admin", 0);
   sirket.StokKoduDegistir("DEGISIM1", "DEGISIM2", true, false, false);
}
catch (Exception exp)
  {
     MessageBox.Show("Hata: " + exp.Message);
   }
finally
  {
     kernel.FreeNetsisLibrary();
     Marshal.ReleaseComObject(kernel);
  }
```

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
    sirket.DovizCevrim(2018,01,02,DateTime.Today,false);
 
   }
catch (Exception exp)
   {
      MessageBox.Show("Hata: " + exp.Message);
   }
finally
   {
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
```

**Kantardan Sayı Okuma**

```
unit UntNetOpenTestForm;
 
interface
 
uses
Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
NetOpenX_TLB, Dialogs, StdCtrls;
 
type
TfrmNetOpenXTest = class(TForm)
  btnTestEt: TButton;
  procedure btnTestEtClick(Sender: TObject);
private
end;
 
var
  frmNetOpenXTest: TfrmNetOpenXTest;
 
implementation
 
{$R *.dfm}
 
procedure TfrmNetOpenXTest.btnTestEtClick(Sender: TObject);
Var
  Kernel: IKernel;
  Sirket: ISirket;
begin
  Kernel:=CoKernel.Create;
  Sirket:=Kernel.yeniSirket(vtMSSQL, 'FUSION30', 'TEMELSET', '', 'NETSIS', '', 0);
{
function KantardanSayiOku
(
GUIDestek: WordBool;
* WEB Servisi gibi GUI olmayan ortamlarda False olmali
* Normal Win32 GUI uygulamalarinda ise True olabilir
const KantarKodu: WideString;
* COM Port üzerinden veri okunurken tanımlı kantar kodu gerekiyor
TestAmacli: WordBool;
* Kantardan sayının alınıp alınmadığını test etmek için kullanılır
* TestAmacli sadece GUIDestek = True durumunda kullanılmalıdır
BeklemeSuresi: Integer
* COM Port üzerinden sayı okuması yapılacağı için ne kadar bir
süre beklenmesi gerekiyor
* 0 veya -1 değerlerinde hiç beklemeden sayı alabilir
* Bu sürenin cinsi ms olarak belirtilmelidir,
* Örnek : 1 saniye beklemek için BeklemeSuresi = 1000 olmalidir
): WideString;
 
* Kantar tarafında okunanan sayı function sonuç olarak gelmektedir
}
  ShowMessage(Sirket.KantardanSayiOku(false, '1', True, 500));
  Kernel.FreeNetsisLibrary;
end;
end.
```
