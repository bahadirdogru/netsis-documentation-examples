---
title: "SerbestUSK"
source: https://dys.logo.cloud/external?cid=f091afb3-258f-4bbc-8a10-dde4b18fc816&link=fa99025b-f582-495f-8d95-e26ed287806c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [SerbestUSK](https://dys.logo.cloud/external?cid=f091afb3-258f-4bbc-8a10-dde4b18fc816&link=fa99025b-f582-495f-8d95-e26ed287806c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# SerbestUSK

**C#**

**Serbest Üretim Sonu Kaydı (Yeni Kayıt)**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
  
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void SUSK_Kaydet()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    SerbestUSK susk = default(SerbestUSK);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
  
      susk = kernel.yeniSerbestUSK(sirket);
      susk.UretSon_FisNo = susk.SonFisNumarasi("A");
      susk.UretSon_Mamul = "M1";
      susk.UretSon_Depo = 2; //giriş depo
      susk.I_Yedek1 = 1;   //çıkış depo
      susk.UretSon_Miktar = 20;
      susk.UretSon_Tarih = DateTime.Now;
      susk.BelgeTipi = TBelgeTipi.btIsEmri;
      susk.UretSon_SipNo = "IE0000000000001";
      ****
      //sipariş bağlantılı işlem yapılacak ise siparişin satır numarası I_Yedek2 alanına atama yaparak verilmelidir.
      //susk.BelgeTipi = TBelgeTipi.btSiparis;
      //susk.UretSon_SipNo = "B00000000001016";
      //susk.I_Yedek2 = 1;
      ***
      susk.DepoOnceligi = TDepoOnceligi.doStokDepo;
      susk.F_Yedek1 = 2; //miktar2
      susk.Aciklama = "mamul açıklama";
      susk.Proje_Kodu = "1";
      susk.S_Yedek1 = "ekalan1 örneği";
      susk.S_Yedek2 = "ekalan2 örneği";
      susk.OTO_YMAM_GIRDI_CIKTI = true;
      susk.OTO_YMAM_STOK_KULLAN = false;
      susk.BAKIYE_DEPO = 0;  //0:verilen_depo 1:tüm_depolar
      susk.SeriEkle("SERI1_1", "SERI1_2", "Açıklama1", "Açıklama2", 15);
      susk.SeriEkle("SERI2_1", "SERI2_2", "Açıklama1", "Açıklama2", 4);
  
      if (susk.FisUret() != true)
        MessageBox.Show(susk.HataKodu.ToString() + ' ' + susk.HataMesaji);
 
// Kalemler arasında dolaşarak değişiklik yapmak, fire eklemek ya da seri eklemek için kullanılan kısım
//                for (int i = 0; i < susk.KalemCount(); i++)
//                {
//                    SerbestUSKKalem kalem_guncel = susk.KalemGetir(i);
//
//                    //if (susk.KalemGetir(i).SeriVarMi == true)
//                    if (kalem_guncel.GC == TGirisCikis.gcCikis)
//                    {
//                        MessageBox.Show(kalem_guncel.StokKodu + "" + i);
//                       kalem_guncel.Miktar2 = 1;
//                       susk.KalemSeriEkle(i, "X1", kalem_guncel.StokKodu, "Açıklama 1", "Açıklama 2", 11);
//                        susk.KalemFireDetayEkle(i, "FIRE_003", 1);
//                    }
//                }
  
      if (susk.Kaydet() != true)
        MessageBox.Show(susk.HataKodu.ToString() + ' ' + susk.HataMesaji);
  
    }
    catch (Exception ex)
    {
      MessageBox.Show(ex.Message);
    }
    finally
    {
      Marshal.ReleaseComObject(susk);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

**Serbest Üretim Sonu Kaydı (Kayıt Silme)**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
  
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void SUSK_Kaydet()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    SerbestUSK susk = default(SerbestUSK);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
  
      susk = kernel.yeniSerbestUSK(sirket);
      susk.FisYukle("000000000000001");
      susk.kayitSil();
    }
    catch (Exception ex)
    {
      MessageBox.Show(ex.Message);
    }
    finally
    {
      Marshal.ReleaseComObject(susk);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

**Serbest Üretim Sonu Kaydı (Mamul Seri Oku)**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using  System.Runtime.InteropServices;
  
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void SUSK_Mamul_Seri()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    SerbestUSK susk = default(SerbestUSK);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
  
      susk = kernel.yeniSerbestUSK(sirket);
      susk.FisYukle("000000000000001");
  
      for (int i = 0; i < susk.SeriSayisi; i++)
      {
         KalemSeri seri = susk.SeriOku(i);
         MessageBox.Show("Seri 1: " + seri.Seri1 +
            " Seri 2: " + seri.Seri2 +
            " Miktar: " + seri.Miktar.ToString() +
            " Açıklama 1: " + seri.Aciklama1 +
            " Açıklama 2: " + seri.Aciklama2);
      }
  
      if (susk.Kaydet() != true)
        MessageBox.Show(susk.HataKodu.ToString() + ' ' + susk.HataMesaji);
  
    }
    catch (Exception ex)
    {
      MessageBox.Show(ex.Message);
    }
    finally
    {
      Marshal.ReleaseComObject(susk);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```

**Serbest Üretim Sonu Kaydı (Kalem Ekle/Oku/Sil/Seri)**

```csharp
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
  
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void SUSK_Mamul_Seri()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    SerbestUSK susk = default(SerbestUSK);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
           "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
  
      susk = kernel.yeniSerbestUSK(sirket);
      susk.FisYukle("000000000000001");
  
      //Kalem Ekleme
      SerbestUSKKalem kalem_yeni = susk.YeniKalem("H1");
      kalem_yeni.GC = TGirisCikis.gcCikis;
      kalem_yeni.DepoKodu = 1;
      kalem_yeni.OlcuBirimi = TOlcuBr.Olcu_Br1;
      kalem_yeni.Miktar = 10;
      kalem_yeni.Miktar2 = 2;
      kalem_yeni.Ekalan = "Ek Alan 1";
      kalem_yeni.EkAlan2 = "Ek Alan 2";
      kalem_yeni.Aciklama = "Açıklama";
  
      //Kalem Güncelleme
      for (int i = 0; i < susk.KalemCount(); i++)
      {
         SerbestUSKKalem kalem_guncel = susk.KalemGetir(i);
         kalem_guncel.Miktar = kalem_guncel.Miktar + 1;
         kalem_guncel.Aciklama = "Miktar Güncellendi";
  
         //Bileşen için seri ekleniyor.
         susk.KalemSeriEkle(i, "S0001", kalem_guncel.StokKodu, "Açıklama 1", "Açıklama 2", kalem_guncel.Miktar);
  
      }
  
      //Belirli Bir Kalemi Silme
      susk.kalemSil(1);
  
      //Veya Tüm Kalemleri Silme
      for (int i = 0; i < susk.KalemCount(); i++)
      {
        susk.kalemSil(0);
      }
  
      //Veya Duruma Göre Kalemleri Silme
      int z = susk.KalemCount();
      for (int i = 0; i < z; i++)
      {
        SerbestUSKKalem K1 = susk.KalemGetir(i);
        if (K1.GC == TGirisCikis.gcCikis)
        {
           if (susk.kalemSil(i) == true)
           {
              i = i - 1;
              z = z - 1;
           }
        }
      }
  
      if (susk.Kaydet() != true)
        MessageBox.Show(susk.HataKodu.ToString() + ' ' + susk.HataMesaji);
  
    }
    catch (Exception ex)
    {
      MessageBox.Show(ex.Message);
    }
    finally
    {
      Marshal.ReleaseComObject(susk);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```
