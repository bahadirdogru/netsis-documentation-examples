---
title: "UAK"
source: https://dys.logo.cloud/external?cid=964019c4-afea-493d-bc59-9dc4a5ad40ed&link=e29880db-d352-4854-b319-a3108c81c465&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [UAK](https://dys.logo.cloud/external?cid=964019c4-afea-493d-bc59-9dc4a5ad40ed&link=e29880db-d352-4854-b319-a3108c81c465&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# UAK

C#

**Üretim Akış Kontrol - Yeni Kayıt**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class UAKOrnek
    {
        public static void UakKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            UAK Uak = default(UAK);
            try
           {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
               Uak = kernel.yeniUAK(sirket);
               Uak.UAKYeniKayit("000000000000001"); // İş emri no
               Uak.OpKodu = "MONTAJ";
               Uak.AKTIVITEKODU = "A1";
               Uak.BASLANGICTARIH = Convert.ToDateTime("2015-01-01 08:00");
               Uak.BITISTARIHSAAT = Convert.ToDateTime("2015-01-01 10:00");
               Uak.URETILENMIKTAR = 10;
               Uak.FIREMIKTAR = 1;
               Uak.IstasyonKodu = "MONTA";
               Uak.USKDEPOKODU = 100;
               Uak.MRPMAKINENO = 1;                // Makine inckeyno (TBLMRPMAKINE)
               Uak.MRPISCINO = 1;                  // Personel inckeyno (TBLMRPISCI)
               Uak.UAKKaydet();
           }
           catch (Exception ex)
           {
               MessageBox.Show(ex.Message);
           }
           finally
           {
               Marshal.ReleaseComObject(Uak);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }
        }
    }
}
```

**Üretim Akış Kontrol - Kayıt Silme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class UAKOrnek
    {
        public static void UakSil()
       {
            Kernel kernel = new 
Kernel();
            Sirket sirket = default(Sirket);
            UAK Uak = default(UAK);
            try
           {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                Uak = kernel.yeniUAK(sirket);
                Uak.UAKOku("000000000000001", "00000001");  // UAK kaydini getirmek icin isemri numarasi ve sira numarasi veriliyor.
                Uak.UAKSil();
           }
            catch (Exception ex)
           {
               MessageBox.Show(ex.Message);
           }
            finally
           {
                Marshal.ReleaseComObject(Uak);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
           }
        }
    }
}
```

**Üretim Akış Kontrol - Kayıt Düzeltme**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class UAKOrnek
    {
        public static void UakDuzelt()
       {
           Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           UAK Uak = default(UAK);
           try
           {
               sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                               "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                               0);
               Uak = kernel.yeniUAK(sirket);
               Uak.UAKOku("000000000000001", "00000001");     // UAK kaydini getirmek icin isemri numarasi ve sira numarasi veriliyor.
               // Bitiş tarih bilgisi düzeltiliyor
               Uak.BITISTARIHSAAT = Convert.ToDateTime("2015-01-02 12:00");
               Uak.UAKKaydet();
           }
           catch (Exception ex)
           {
               MessageBox.Show(ex.Message);
           }
           finally
           {
               Marshal.ReleaseComObject(Uak);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }
       }
    }
}
```

**Üretim Akış Kontrol - Üretim Sonu Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
using System.Windows.Forms;
 
 
namespace NetOpenXTest
{
    public static class UAKOrnek
    {
         public static void UAKToUSK()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            UakToUsk UAKtoUSK = default(UakToUsk);
            UretimSonuKayitPrm Param = default(UretimSonuKayitPrm);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                                0);
                UAKtoUSK = kernel.yeniUakToUsk(sirket);
 
                // İslem için parametreler ayarlanıyor.
                Param = new UretimSonuKayitPrm();
 
                Param.FisNoSerisi = "A";
                Param.TarihAralikAlt = DateTime.Parse("21.05.2016");
                Param.TarihAralikUst = DateTime.Parse("06.06.2018");
                Param.GirisDepo = 1;
                Param.CikisDepo = 1;
                Param.HataliKayitlarPolitikasi = THataliKayitPolitikasi.hkAtla;
                Param.KayitTarihi = DateTime.Parse("13.06.2017");
                Param.VardiyaAralikAlt = 1;
                Param.VardiyaAralikUst = 4;
                Param.FislerOtomatikUretilsin = true;
                Param.IsEmriNoAralikAlt = "";
                Param.IsEmriNoAralikUst = "";
                Param.DepoOnceligi = TUAKDepoOncelik.dponHicbiri;
                Param.Oncelik = 0;
                Param.FislerIsEmriBazindaTekTekOlusturulsun = false;
                Param.OtoYariMamullerdeGirdiCikti = true;
                Param.OtoYariMamullerdeStoktanKullan = false;
                Param.MamullerOlcuBirimi = TMamulOlcuBirimi.mobOlcuBirimi1;
                Param.Bakiye = TBakiye.bkVerilenDepo;
 
                Boolean result = UAKtoUSK.UretimSonuKayitlariOlustur(Param);
 
                // Uretilen veya hata sonucu üretilemeyen USK kayıtları dolaşılıyor..
                for (int i = 0; i < UAKtoUSK.UretimSonuKayitCount(); i++)
                {
                    UretimSonuKayitSonuc UskSonuc = new UretimSonuKayitSonuc();
                    UskSonuc = UAKtoUSK.UretimSonuKayitGetir(i);
                }
                MessageBox.Show("İşlem Tamamlandı.");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                if (Param != null)
                    Marshal.ReleaseComObject(Param);
                if (UAKtoUSK != null)
                    Marshal.ReleaseComObject(UAKtoUSK);
                if (sirket != null)
                    Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                if (kernel != null)
                    Marshal.ReleaseComObject(kernel);
            }
        }
    }
}
```

VB

**Üretim Akış Kontrol - Yeni Kayıt**

```
Sub UakKaydet()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Uak As NetOpenX50.Uak
    Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis sube)
 
    Set Uak = Kernel.yeniUAK(Sirket)
    Uak.UAKYeniKayit ("000000000000001")    'İş emri no
    Uak.OpKodu = "MONTAJ"
    Uak.AKTIVITEKODU = "A1"
    Uak.BASLANGICTARIH = "2015-01-01 08:00"
    Uak.BITISTARIHSAAT = "2015-01-01 10:00"
    Uak.URETILENMIKTAR = 10
    Uak.FIREMIKTAR = 1
    Uak.IstasyonKodu = "MONTA"
    Uak.USKDEPOKODU = 100
    Uak.MRPMAKINENO = 11               'Makine inckeyno (TBLMRPMAKINE)
    Uak.MRPISCINO = 1                  'Personel inckeyno (TBLMRPISCI)
    Uak.UakKaydet
 
    Set Uak = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```

**Üretim Akış Kontrol - Kayıt Silme**

```
Sub UakSil()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Uak As NetOpenX50.Uak
    Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis sube)
 
    Set Uak = Kernel.yeniUAK(Sirket)
    Call Uak.UAKOku("000000000000001", "00000001")  ''UAK kaydini getirmek icin isemri numarasi ve sira numarasi veriliyor.
    Call Uak.UakSil
    Set Uak = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
Sub
```

**Üretim Akış Kontrol - Kayıt Düzeltme**

```
Sub UakDuzelt()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Uak As NetOpenX50.Uak
    Set Sirket = kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis sube)
 
    Set Uak = Kernel.yeniUAK(Sirket)
    Call Uak.UAKOku("000000000000001", "00000001")  ''UAK kaydini getirmek icin isemri numarasi ve sira numarasi veriliyor.
    'Bitiş tarih bilgisi düzeltiliyor
    Uak.BITISTARIHSAAT = "2015-01-02 12:00"
    Uak.UakKaydet
    Set Uak = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```
