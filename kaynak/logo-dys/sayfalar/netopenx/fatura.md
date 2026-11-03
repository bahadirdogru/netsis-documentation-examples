---
title: "Fatura"
source: https://dys.logo.cloud/external?cid=805af85e-f2a2-4a22-a935-e6702226417c&link=9fb5a4bf-4dd5-4241-92ed-05f761cfe29b&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Fatura](https://dys.logo.cloud/external?cid=805af85e-f2a2-4a22-a935-e6702226417c&link=9fb5a4bf-4dd5-4241-92ed-05f761cfe29b&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Fatura

C#

**Satış Faturası Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void SatisFaturasiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.Tarih = DateTime.Now;
                fatUst.ENTEGRE_TRH = DateTime.Now;
                fatUst.FiiliTarih = DateTime.Now;
                fatUst.SIPARIS_TEST = DateTime.Now;
                fatUst.TIPI = TFaturaTipi.ft_Acik;
                fatUst.Proje_Kodu = "1";
                fatUst.KDV_DAHILMI = true;
 
                fatKalem = fatura.kalemYeni("001");
                fatKalem.DEPO_KODU = 2;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                  
                fatura.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Satış İrsaliyesi Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
       public static void SatisIrsaliyesiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.Tarih = DateTime.Now;
                fatUst.ENTEGRE_TRH = DateTime.Now;
                fatUst.FiiliTarih = DateTime.Now;
                fatUst.SIPARIS_TEST = DateTime.Now;
                fatUst.TIPI = TFaturaTipi.ft_YurtIci;
                fatUst.PLA_KODU = "02";
                fatUst.Proje_Kodu = "033";
                fatUst.KDV_DAHILMI = true;
                fatKalem = fatura.kalemYeni("00003");
                fatKalem.DEPO_KODU = 2;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                fatura.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }         
        }       
    }
}
```

**Müşteri Siparişi Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void MusteriSiparisiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSSip);
                 
                fatura.StokKartinaGoreHesapla = true;
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.Tarih = DateTime.Now;
                fatUst.ENTEGRE_TRH = DateTime.Now;
                fatUst.FiiliTarih = DateTime.Now;
                fatUst.SIPARIS_TEST = DateTime.Now;
                fatUst.TIPI = TFaturaTipi.ft_YurtIci;
                fatUst.PLA_KODU = "02";
                fatUst.Proje_Kodu = "033";
                fatUst.KDV_DAHILMI = true;
                fatKalem = fatura.kalemYeni("00003");
                fatKalem.DEPO_KODU = 2;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                fatKalem.SatirBaziAcik[1] = "satır açıklama deneme";
 
                fatura.kayitYeni();
                MessageBox.Show(fatUst.FATIRS_NO);
           }
            catch (Exception ex)
               {
                 MessageBox.Show(ex.Message);
               }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }               
        }       
    }
}
```

**Şirketler arası Fatura kopyalama**

```
  Kernel kernel = new Kernel();
        //Kaynak
        Sirket kaynakSirket = default(Sirket);
        Fatura kaynakFatura = default(Fatura);
        FatUst kaynakFatUst = default(FatUst);
        FatKalem kaynakFatKalem = default(FatKalem);
        KalemSeri kaynakSeri = default(KalemSeri);
 
 
        //Hedef
        Sirket hedefSirket = default(Sirket);
        Fatura hedefFatura = default(Fatura);
        FatUst hedefFatUst = default(FatUst);
        FatKalem hedefFatKalem = default(FatKalem);
 
        try
        {
            
 
            kaynakSirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                           "CIGDEM804",
                                           "sa",
                                           "sapass",
                                           "NETSIS",
                                           "net1",
                                           0);
                            
 
            kaynakFatura = kernel.yeniFatura(kaynakSirket, TFaturaTip.ftSFat);
 
 
            kaynakFatura.OkuUst("T00000000000005", "1");
            kaynakFatUst = kaynakFatura.Ust();
 
            hedefSirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                       "ENTERPRISE8",
                                       "sa",
                                       "sapass",
                                       "NETSIS",
                                       "net1",
                                       0);
 
            hedefFatura = kernel.yeniFatura(hedefSirket, TFaturaTip.ftSFat);
 
            hedefFatUst = hedefFatura.Ust();
            hedefFatUst.CariKod = "1";
            hedefFatUst.FATIRS_NO = kaynakFatUst.FATIRS_NO;
            hedefFatUst.Tarih = kaynakFatUst.Tarih;
            hedefFatUst.BRUTTUTAR = kaynakFatUst.BRUTTUTAR;
            hedefFatUst.GENELTOPLAM = kaynakFatUst.GENELTOPLAM;
            hedefFatUst.Proje_Kodu = kaynakFatUst.Proje_Kodu;
 
            kaynakFatura.OkuKalem();
 
            for (int i = 0; i < kaynakFatura.KalemAdedi; i++)
            {
                
 
                kaynakFatKalem = kaynakFatura.get_Kalem(i);
 
                hedefFatKalem = hedefFatura.kalemYeni(kaynakFatKalem.StokKodu);
                hedefFatKalem.STra_GCMIK = kaynakFatKalem.STra_GCMIK;
                hedefFatKalem.STra_GCMIK2 = kaynakFatKalem.STra_GCMIK2;
                hedefFatKalem.CEVRIM = kaynakFatKalem.CEVRIM;
                hedefFatKalem.STra_TAR = kaynakFatKalem.STra_TAR;
                hedefFatKalem.STra_NF = kaynakFatKalem.STra_NF;
                hedefFatKalem.STra_BF = kaynakFatKalem.STra_BF;
                hedefFatKalem.STra_IAF = kaynakFatKalem.STra_IAF;
                hedefFatKalem.STra_KDV = kaynakFatKalem.STra_KDV;
                hedefFatKalem.DEPO_KODU = kaynakFatKalem.DEPO_KODU;
            }
 
            hedefFatura.kayitYeni();
        }
        catch (Exception ex)
        {
 
            throw ex;
        }
 
        finally
        {
            Marshal.ReleaseComObject(kaynakFatKalem);
            Marshal.ReleaseComObject(hedefFatKalem);
 
            Marshal.ReleaseComObject(kaynakFatUst);
            Marshal.ReleaseComObject(hedefFatUst);
 
            Marshal.ReleaseComObject(kaynakFatura);
            Marshal.ReleaseComObject(hedefFatura);
 
            kaynakSirket.LogOff();
            hedefSirket.LogOff();
 
            Marshal.ReleaseComObject(kaynakSirket);
            Marshal.ReleaseComObject(hedefSirket);
 
            kernel.FreeNetsisLibrary();
            Marshal.ReleaseComObject(kernel);
 
        }
}
```

**Lokal Depolar Arası Transfer Kaydı**

```
public void LokalDepolarArasiTransferBelgesi()
{
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    Fatura fatura = default(Fatura);
    FatUst fatUst = default(FatUst);
    FatKalem fatKalem = default(FatKalem);
    try
    {
        sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                      sube kodu);
        fatura = kernel.yeniFatura(sirket, TFaturaTip.ftLokalDepo);
        
        fatUst = fatura.Ust();
        fatUst.FATIRS_NO = fatura.YeniNumara("A");
        fatUst.TIPI = TFaturaTipi.ft_Bos;
        fatUst.AMBHARTUR = TAmbarHarTur.htDepolar;
        fatUst.Tarih = DateTime.Now;
        fatUst.FiiliTarih = DateTime.Now;
        fatUst.PLA_KODU = "S001";
        fatUst.Proje_Kodu = "P001";
        fatUst.KDV_DAHILMI = true;
        
        fatKalem = fatura.kalemYeni("S0001");
        ///Giriş Depo Kodu
        fatKalem.Gir_Depo_Kodu = 3;
        fatKalem.DEPO_KODU = 1;
        fatKalem.STra_GCMIK = 20;
        fatKalem.STra_BF = 10;
        fatura.kayitYeni();
    }
    finally
    {
        Marshal.ReleaseComObject(fatKalem);
        Marshal.ReleaseComObject(fatUst);
        Marshal.ReleaseComObject(fatura);
        Marshal.ReleaseComObject(sirket);
        kernel.FreeNetsisLibrary();
        Marshal.ReleaseComObject(kernel);
    }
}
```

**Şubeler Arası Depo Transfer Kaydı**

```
public void SubelerArasiDepoTransferBelgesi()
{
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    Fatura fatura = default(Fatura);
    FatUst fatUst = default(FatUst);
    FatKalem fatKalem = default(FatKalem);
    try
    {
        sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                      sube kodu);
        fatura = kernel.yeniFatura(sirket, TFaturaTip.ftDepo);
        fatUst = fatura.Ust();       
        fatUst.FATIRS_NO = fatura.YeniNumara("A");
        fatUst.TIPI = TFaturaTipi.ft_Bos;
        fatUst.AMBHARTUR = TAmbarHarTur.htDepolar;
        ///Çıkış Şube
        fatUst.GCKOD_CIKIS = 0;
        ///Giriş Şube
        fatUst.GCKOD_GIRIS = 1;
        ///Ambar
        fatUst.CariKod = "C0001";
        ///Cari Kod
        fatUst.CARI_KOD2 = "C0002";
        fatUst.Tarih = DateTime.Now;
        fatUst.FiiliTarih = DateTime.Now;
        fatUst.PLA_KODU = "S001";
        fatUst.Proje_Kodu = "P001";
        fatUst.KDV_DAHILMI = true;
         
        fatKalem = fatura.kalemYeni("S0001");       
        ///Giriş Depo Kodu
        fatKalem.Gir_Depo_Kodu = 2;         
        fatKalem.DEPO_KODU = 1;
        fatKalem.STra_GCMIK = 20;
        fatKalem.STra_BF = 10;
         
        fatura.kayitYeni();
    }
    finally
    {
        Marshal.ReleaseComObject(fatKalem);
        Marshal.ReleaseComObject(fatUst);
        Marshal.ReleaseComObject(fatura);
        Marshal.ReleaseComObject(sirket);
        kernel.FreeNetsisLibrary();
        Marshal.ReleaseComObject(kernel);
    }
}
```

**Satış Teklifi Kaydı**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void SatisTeklifiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSatTeklif);
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.Tarih = DateTime.Now;
                fatUst.TIPI = TFaturaTipi.ft_YurtIci;
                fatUst.PLA_KODU = "02";
                fatUst.Proje_Kodu = "033";
                fatUst.KDV_DAHILMI = true;
                fatKalem = fatura.kalemYeni("00003");
                fatKalem.DEPO_KODU = 2;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                fatKalem.ProjeKodu = "033";
                fatura.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }          
        }       
    }
}
```

**Siparişten İrsaliye Oluşturma**

```
using System; 
using System.Runtime.InteropServices;
using NetOpenX50;
 
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void Siparis2IrsFat()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            Fatura irsaliye = default(Fatura);
            FatUst irsaliyeUst = default(FatUst);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSSip);
                fatura.OkuUst("M00000000000006", "00002");
                fatura.OkuKalem();
 
                irsaliye = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
                irsaliyeUst = irsaliye.Ust();               
                 
                irsaliyeUst.FATIRS_NO = irsaliye.YeniNumara("A");
                fatura.Siparis2IrsFat(irsaliye);
            }
            finally
            {
                Marshal.ReleaseComObject(irsaliyeUst);
                Marshal.ReleaseComObject(irsaliye);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**İrsaliyeden Fatura Oluşturma**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {     
        public static void Irsaliye2Fatura()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura irsaliye = default(Fatura);
            Fatura fatura = default(Fatura);
            FatUst faturaUst = default(FatUst);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adi",
                                              "vt kull adi",
                                              "vt kull sifre",
                                              "netsis kull adi",
                                              "netsis sifre",
                                              0);
                irsaliye = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
                irsaliye.OkuUst("I00000000000002", "00002");
                irsaliye.OkuKalem();
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
                faturaUst = fatura.Ust();
                faturaUst.FATIRS_NO = fatura.YeniNumara("A");
                irsaliye.Irsaliye2Fatura(fatura);
            }
            finally
            {
                Marshal.ReleaseComObject(faturaUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(irsaliye);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
        }       
    }
}
```

**Satın Alma Talep Siparişleştirme**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            TalepTeklifIslem siparis = default(TalepTeklifIslem);
            MessageBox.Show(kernel.Version);
            try
            {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      sube kodu);
 
                siparis = kernel.YeniTalepTeklifIslem(sirket, TFaturaTip.ftAlTalep);
                siparis.BelgeTipi = TFaturaTip.ftASip;
                siparis.BelgeNo = siparis.YeniNumara("R");
                //siparis.BelgelerKapatilsin = true;
                siparis.ProjeKirilimiYapilsin = true;
                siparis.kalemYeni("000000000000041", "320-01-041", 1);
                siparis.kalemYeni("000000000000041", "320-01-041", 2);
 
                siparis.Siparislestir();
 
                MessageBox.Show(siparis.BelgeNo);
            }
 
 
 
 
 
            finally
            {
 
                Marshal.ReleaseComObject(siparis);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Satın Alma Talep Teklifleştirme**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            TalepTeklifIslem siparis = default(TalepTeklifIslem);
            MessageBox.Show(kernel.Version);
            try
            {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      sube kodu);
 
                siparis = kernel.YeniTalepTeklifIslem(sirket, TFaturaTip.ftAlTalep);
                siparis.BelgeTipi = TFaturaTip.ftAlTeklif;
                siparis.BelgeNo = siparis.YeniNumara("R");
                //siparis.BelgelerKapatilsin = true;
                siparis.ProjeKirilimiYapilsin = true;
                siparis.kalemYeni("000000000000041", "320-01-041", 1);
                siparis.kalemYeni("000000000000041", "320-01-041", 2);
 
                siparis.Tekliflestir();
 
                MessageBox.Show(siparis.BelgeNo);
            }
 
 
 
 
 
            finally
            {
 
                Marshal.ReleaseComObject(siparis);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Satış Talep Siparişleştirme**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            TalepTeklifIslem siparis = default(TalepTeklifIslem);
            MessageBox.Show(kernel.Version);
            try
            {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      sube kodu);
 
                siparis = kernel.YeniTalepTeklifIslem(sirket, TFaturaTip.ftSatTalep);
                siparis.BelgeTipi = TFaturaTip.ftSSip;
                siparis.BelgeNo = siparis.YeniNumara("R");
                //siparis.BelgelerKapatilsin = true;
                siparis.ProjeKirilimiYapilsin = true;
                siparis.kalemYeni("000000000000041", "320-01-041", 1);
                siparis.kalemYeni("000000000000041", "320-01-041", 2);
 
                siparis.Siparislestir();
 
                MessageBox.Show(siparis.BelgeNo);
            }
 
 
 
 
 
            finally
            {
 
                Marshal.ReleaseComObject(siparis);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Satış Talep Teklifleştirme**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            TalepTeklifIslem siparis = default(TalepTeklifIslem);
            MessageBox.Show(kernel.Version);
            try
            {
                 sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      sube kodu);
 
                siparis = kernel.YeniTalepTeklifIslem(sirket, TFaturaTip.ftSatTalep);
                siparis.BelgeTipi = TFaturaTip.ftSatTeklif;
                siparis.BelgeNo = siparis.YeniNumara("R");
                //siparis.BelgelerKapatilsin = true;
                siparis.ProjeKirilimiYapilsin = true;
                siparis.kalemYeni("000000000000041", "320-01-041", 1);
                siparis.kalemYeni("000000000000041", "320-01-041", 2);
 
                siparis.Tekliflestir();
 
                MessageBox.Show(siparis.BelgeNo);
            }
 
 
 
 
 
            finally
            {
 
                Marshal.ReleaseComObject(siparis);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Fatura Okuma**

```
sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
"REMDA2016",
"TEMELSET",
"",
"netsis",
"net1",
0);
 
kaynakFatura = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
 
kaynakFatura.OkuUst("R00000000001298", "120-01-014");
kaynakFatUst = kaynakFatura.Ust();
 
kaynakFatura.OkuKalem();
MessageBox.Show(Convert.ToString(kaynakFatura.KalemAdedi));
 
for (int i = 0; i < kaynakFatura.KalemAdedi; i++)
{
kaynakFatKalem = kaynakFatura.get_Kalem(i);
MessageBox.Show(kaynakFatKalem.StokKodu);
}
}
finally
{
Marshal.ReleaseComObject(kaynakFatura);
Marshal.ReleaseComObject(kaynakFatUst);
Marshal.ReleaseComObject(sirket);
kernel.FreeNetsisLibrary();
Marshal.ReleaseComObject(kernel);
}
```

**Fatura Silme**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Fatura fatura = default(Fatura);
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                       "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                  sube kodu);
    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
    fatura.OkuUst("A00000000000011", "C0001");
    fatura.OkuKalem();
    fatura.kayitSil();
}
finally
{
    Marshal.ReleaseComObject(fatura);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Satır Bazı Açıklama Girişi**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
  
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void SatisFaturasiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                                  "şube kodu");
 
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
                
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.Tarih = DateTime.Now;
                fatUst.ENTEGRE_TRH = DateTime.Now;
                fatUst.FiiliTarih = DateTime.Now;
                fatUst.TIPI = TFaturaTipi.ft_Acik;
                fatUst.PLA_KODU = "02";
                fatUst.Proje_Kodu = "033";
                fatUst.KDV_DAHILMI = true;
                
                fatKalem = fatura.kalemYeni("00003");
                fatKalem.DEPO_KODU = 2;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                fatKalem.SatirBaziAcik[1] = "satır açıklama deneme 1";
                fatKalem.SatirBaziAcik[1] = "satır açıklama deneme 2";
  
                fatura.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
             }
        }       
    }
}
```

**Ambar Giriş Fişi**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
  
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void SatisFaturasiKaydet()
        {
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Fatura fatura = default(Fatura);
            FatUst fatUst = default(FatUst);
            FatKalem fatKalem = default(FatKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                       "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                                  "şube kodu");
 
                fatura = kernel.yeniFatura(sirket, TFaturaTip.ftAmbarG);
                
                fatUst = fatura.Ust();
                fatUst.FATIRS_NO = fatura.YeniNumara("A");
                fatUst.CariKod = "00002";
                fatUst.AMBHARTUR = TAmbarHarTur.htMuhtelif;
                fatUst.CikisYeri = TCikisYeri.cyStokKod;
                fatUst.Tarih = DateTime.Now;
                fatUst.ENTEGRE_TRH = DateTime.Now;
                fatUst.FiiliTarih = DateTime.Now;
                fatUst.Proje_Kodu = "033";
                
                fatKalem = fatura.kalemYeni("00003");
                fatKalem.Gir_Depo_Kodu = 1;
                fatKalem.STra_GCMIK = 5;
                fatKalem.STra_NF = 12;
                fatKalem.STra_BF = 12;
                 
  
                fatura.kayitYeni();
            }
            finally
            {
                Marshal.ReleaseComObject(fatKalem);
                Marshal.ReleaseComObject(fatUst);
                Marshal.ReleaseComObject(fatura);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
             }
        }       
    }
}
```

**Sipariş Revizyon**

```
using System;
using System.Runtime.InteropServices;
using NetOpenX50;
namespace NetOpenXTest
{
    public static class FaturaOrnek
    {
        public static void SatisFaturasiKaydet()
        {
            Kernel kernel = new Kernel();
           Sirket sirket = default(Sirket);
           Fatura fatura = default(Fatura);
           FatUst fatUst = default(FatUst);
           FatKalem fatKalem = default(FatKalem);
 
           try
           {
               sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                                 "şube kodu");
 
               fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSSip);
               fatUst = fatura.Ust();
               fatUst.FATIRS_NO = "AK0000000000072";
               fatUst.CariKod = "M0000000024";
               fatUst.Tarih = DateTime.Today;
               fatUst.TIPI = TFaturaTipi.ft_YurtIci;
               fatKalem = fatura.kalemYeni("stk038");
               fatKalem.Gir_Depo_Kodu = 2;
               fatKalem.DEPO_KODU = 1;
               fatKalem.STra_GCMIK = 1;
               fatKalem.STra_BF = 1;
               fatura.SiparisRevizyon("AK0000000000071", DateTime.Today);
               MessageBox.Show(fatUst.FATIRS_NO);
 
           }
 
 
 
           finally
           {
               Marshal.ReleaseComObject(fatKalem);
               Marshal.ReleaseComObject(fatUst);
               Marshal.ReleaseComObject(fatura);
               Marshal.ReleaseComObject(sirket);
               kernel.FreeNetsisLibrary();
               Marshal.ReleaseComObject(kernel);
           }
        }       
    }
}
```

**Tevkifatlı Fatura**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Fatura fatura = default(Fatura);
FatUst fatUst = default(FatUst);
FatKalem fatKalem = default(FatKalem);
try
{
    sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                   "REMDA2016",
                                   "TEMELSET",
                                   "",
                                   "Admin",
                                   "Admin",
                                   0);
    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
 
    fatUst = fatura.Ust();
    fatUst.FATIRS_NO = "F00000000000012";
    fatUst.CariKod = "00001";
    fatUst.Tarih = DateTime.Now;
    fatUst.ENTEGRE_TRH = DateTime.Now;
    fatUst.FiiliTarih = DateTime.Now;
    fatUst.TIPI = TFaturaTipi.ft_Acik;
    fatUst.KDV_DAHILMI = false;
    fatUst.Proje_Kodu = "1";
 
    fatKalem = fatura.kalemYeni("STK01");
    fatKalem.STra_GCMIK = 1;
    fatKalem.STra_NF = 100;
    fatKalem.STra_BF = 100;
    fatKalem.STra_KDV = 18;
    fatKalem.DEPO_KODU = 1;
 
    fatura.HesaplamalariYap();
 
    fatUst.FAT_ALTM2 = -1;
 
    fatura.kayitYeni();
    MessageBox.Show(fatUst.FATIRS_NO);
 
 
}
catch (Exception EX)
{
    MessageBox.Show(EX.Message);
}
finally
{
    Marshal.ReleaseComObject(fatKalem);
    Marshal.ReleaseComObject(fatUst);
    Marshal.ReleaseComObject(fatura);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Fatura fatura = default(Fatura);
FatUst fatUst = default(FatUst);
FatKalem fatKalem = default(FatKalem);
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      "şube kodu");
 
    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
 
    fatUst = fatura.Ust();
    fatUst.FATIRS_NO = fatura.YeniNumara("I");
    fatUst.CariKod = "00001";
    fatUst.Tarih = DateTime.Now;
    fatUst.TIPI = TFaturaTipi.ft_YurtIci;
    fatUst.Proje_Kodu = "1";
    fatUst.KDV_DAHILMI = true;
 
    fatKalem = fatura.kalemYeni("K1");
    fatKalem.DEPO_KODU = 1;
    fatKalem.STra_GCMIK2 = 1;
    fatKalem.STra_NF = 12;
    fatKalem.STra_BF = 12;
    fatKalem.KarmaKoliIsle();
 
    fatura.kayitYeni();
}
finally
{
    Marshal.ReleaseComObject(fatKalem);
    Marshal.ReleaseComObject(fatUst);
    Marshal.ReleaseComObject(fatura);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Parçalı Sipariş**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Fatura fatura = default(Fatura);
FatUst fatUst = default(FatUst);
FatKalem fatKalem = default(FatKalem);
 
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      "şube kodu");
 
    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
    fatUst = fatura.Ust();
    fatUst.FATIRS_NO = "R00000000002108";
    fatUst.TIPI = TFaturaTipi.ft_Acik;
    fatUst.CariKod = "120-01-014";
    fatUst.Tarih = DateTime.Now;
    fatUst.SIPARIS_TEST = DateTime.Now;
    fatUst.Proje_Kodu = "b";
 
    fatKalem = fatura.kalemYeni("SB1");
    fatKalem.STra_GCMIK = 1;
    fatKalem.DEPO_KODU = 1;
    fatKalem.STra_BF = 21;
 
    fatKalem.STra_SIPNUM = "R00000000000356";
    fatKalem.STra_SIPKONT = 1;
    fatKalem.STra_SIP_TURU = "S";
 
    fatura.kayitYeni();
 
    MessageBox.Show(fatUst.FATIRS_NO);
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    Marshal.ReleaseComObject(fatKalem);
    Marshal.ReleaseComObject(fatUst);
    Marshal.ReleaseComObject(fatura);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

**Tahsilatlı Fatura Kaydı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
Fatura fatura = default(Fatura);
FatUst fatUst = default(FatUst);
FatKalem fatKalem = default(FatKalem);
HizliTahsilatAna hizliTahsilatAna = default(HizliTahsilatAna);
HizliTahsilat tahsil = default(HizliTahsilat);
 
try
{
     sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                      "vt adı",
                                      "vt kull adı",
                                      "vt kull sifre",
                                      "netsis kull adı",
                                      "netsis kull sifre",
                                      "sube kodu");
 
    fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
    fatura.TahsilatKayitKullan = true;
    fatura.FiyatSistemineGoreHesapla = false;
    fatura.StokKartinaGoreHesapla = false;
 
    fatUst = fatura.Ust();
    fatUst.FATIRS_NO = fatura.YeniNumara("R");
    fatUst.CariKod = "00002";
    fatUst.Tarih = DateTime.Now;
    fatUst.SIPARIS_TEST = DateTime.Now;
    fatUst.TIPI = TFaturaTipi.ft_Kapali;
    fatUst.KDV_DAHILMI = true;
 
    fatKalem = fatura.kalemYeni("STK02");
    fatKalem.DEPO_KODU = 1;
    fatKalem.STra_GCMIK = 1;
    fatKalem.STra_NF = 120;
    fatKalem.STra_BF = 120;
    fatKalem.STra_KDV = 20;
    fatKalem.STra_testar = new DateTime(2024, 9, 27);
 
    fatura.HesaplamalariYap();
    tahsil = fatura.tahsilatYeni();
    tahsil.TahsilatTipi = TTahsilatTipi.ttNakit;
    tahsil.SozKodu = "NAKİT";
    tahsil.Tutar = 60;
    //tahsil.Referans_Kodu = "1";
    tahsil.Proje_Kodu = "1";
 
    tahsil = fatura.tahsilatYeni();
    tahsil.TahsilatTipi = TTahsilatTipi.ttKrediKarti;
    tahsil.SozKodu = "K1";
    tahsil.Tutar = 60;
    tahsil.PLA_KODU = "1";
    //tahsil.Referans_Kodu = "1";
    tahsil.TaksitSay = 1;
    tahsil.Proje_Kodu = "1";
 
    fatura.kayitYeni();
    MessageBox.Show("KAYIT OLUŞTURULDU " + fatUst.FATIRS_NO);
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    Marshal.ReleaseComObject(hizliTahsilatAna);
    Marshal.ReleaseComObject(tahsil);
    Marshal.ReleaseComObject(fatKalem);
    Marshal.ReleaseComObject(fatUst);
    Marshal.ReleaseComObject(fatura);
    Marshal.ReleaseComObject(sirket);
    kernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(kernel);
}
```

  
**VB**

**Satış Faturası Kaydı**

```
Sub FaturayaKaydet()
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Fatura As NetOpenX.Fatura
Dim FatUst As NetOpenX.FatUst
Dim FatKalem As NetOpenX.FatKalem
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 0)
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
'Fatura Ust Bilgilerini Olustur
Set FatUst = Fatura.Ust
FatUst.FATIRS_NO = "000000000088886"
FatUst.TIPI = ft_YurtDisi
FatUst.CariKod = "00002"
FatUst.TARIH = CDate("25/01/2016")
FatUst.SIPARIS_TEST = CDate("25/01/2016")
 
'1.Kalem
Set FatKalem = Fatura.kalemYeni("MAMUL")
FatKalem.STra_GCMIK = 55
FatKalem.STra_NF = 10000000
FatKalem.STra_BF = 21110000
FatKalem.STra_ACIK = "Sthar Acıklama"
FatKalem.Firmadovtip = 1
FatKalem.Firmadovtut = 100888
 
'2.Kalem
Set FatKalem = Fatura.kalemYeni("MAMUL")
FatKalem.STra_GCMIK = 99
FatKalem.STra_NF = 10000000
FatKalem.STra_BF = 20000000
FatKalem.STra_ACIK = "Sthar Acıklama"
FatKalem.Firmadovtip = 1
FatKalem.Firmadovtut = 100888
'Kalemleri Kaydet
 
Fatura.kayitYeni
 
'Netsis Dll'lerini hafızadan temizleme
'Yaratılan nesneleri hafızadan temizleme
Set Sirket = Nothing
Set Fatura = Nothing
Set FatUst = Nothing
Set FatKalem = Nothing
Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Ambar Çıkış Fişi Kaydı**

```
Sub AmbarCikisiFisiKaydet()
  Dim kernel As New NetOpenX50.kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FatUst As NetOpenX50.FatUst
  Dim FatKalem As NetOpenX50.FatKalem
   
  On Error GoTo Hata
    Set Sirket = kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adi", "vt kull adi", "vt kull sifre", "netsis kull adi", "netsis sifre", sube kodu)
    Set Fatura = kernel.yeniFatura(Sirket, ftAmbarC)
    Set FatUst = Fatura.Ust
     
    FatUst.FATIRS_NO = Fatura.YeniNumara("A")
    FatUst.AMBHARTUR = htUretim
    FatUst.CikisYeri = cyMasrafMer
    FatUst.CariKod = "99999999"    'Masraf Kodu
    FatUst.Tarih = Now()
    FatUst.FiiliTarih = Now()
    FatUst.ODEMETARIHI = Now()
     
    Set FatKalem = Fatura.kalemYeni("00003")
    FatKalem.MuhasebeKodu = "620-01-003"  'Muhasebe Kodu Bilgisi girilmelidir
    FatKalem.STra_GCMIK = 1
    FatKalem.DEPO_KODU = 1
    Fatura.kayitYeni
               
    Set FatKalem = Nothing
    Set FatUst = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call kernel.FreeNetsisLibrary
    Set kernel = Nothing
    Exit Sub 
Hata:
    MsgBox Err.Description
End Sub
```

**Depolar Arası Transfer Kaydı**

```
Sub DepolarArasiTransfer()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Fatura As NetOpenX50.Fatura
    Dim FatUst As NetOpenX50.FatUst
    Dim FatKalem As NetOpenX50.FatKalem
    Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 0)
 
    'ftLokalDepo : Lokal Depolar arası transfer
    Set Fatura = Kernel.yeniFatura(Sirket, ftDepo)
    Set FatUst = Fatura.Ust
    FatUst.FATIRS_NO = "0000000000FATNO"
    FatUst.TIPI = ft_Bos
    ' Hareket Türü
    FatUst.AMBHARTUR = htDepolar
    FatUst.GCKOD_CIKIS = 100
    'Gideceği Depo
    FatUst.GCKOD_GIRIS = 200
    'Cari Kodu Fatura Tipi ftLokalDepo ise doldurulmamalıdır
    FatUst.CariKod = "XXX"
    'Ambar
    FatUst.CARI_KOD2 = "XXX"
    FatUst.Tarih = Now
    FatUst.KDV_DAHILMI = True
     
    Set FatKalem = Fatura.kalemYeni("XXX")
    'Giriş Depo Kodu
    FatKalem.Gir_Depo_Kodu = 0
    'Depo Kodu
    FatKalem.DEPO_KODU = 323
    FatKalem.STra_GCMIK = 20
    FatKalem.STra_BF = 100
    Fatura.kayitYeni
    Set FatKalem = Nothing
    Set FatUst = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
End Sub
```

**Satış Teklifi Kaydı**

```
Sub TekTalKaydet()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim TekTal As NetOpenX.Fatura
Dim TekTalUst As NetOpenX.FatUst
Dim TekTalKalem As NetOpenX.FatKalem
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set TekTal = Kernel.yeniFatura(Sirket, ftSatTeklif)
'Fatura Ust Bilgilerini Olustur
Set TekTalUst = TekTal.Ust
TekTalUst.FATIRS_NO = "000000000088886"
TekTalUst.TIPI = ft_YurtDisi
TekTalUst.CariKod = "00002"
TekTalUst.TARIH = CDate("25/03/2016")
TekTalUst.SIPARIS_TEST = CDate("25/03/2016")
'1.Kalem
Set TekTalKalem = TekTal.kalemYeni("MAMUL")
TekTalKalem.STra_GCMIK = 55
TekTalKalem.STra_NF = 10000000
TekTalKalem.STra_BF = 21110000
TekTalKalem.STra_ACIK = "Sthar Acıklama"
TekTalKalem.Firmadovtip = 1
TekTalKalem.Firmadovtut = 100888
'2.Kalem
Set TekTalKalem = TekTal.kalemYeni("MAMUL")
TekTalKalem.STra_GCMIK = 99
TekTalKalem.STra_NF = 10000000
TekTalKalem.STra_BF = 20000000
TekTalKalem.STra_ACIK = "Sthar Acıklama"
TekTalKalem.Firmadovtip = 1
TekTalKalem.Firmadovtut = 100888
 
'Kalemleri Kaydet
TekTal.kayitYeni
'Netsis Dll'lerini hafızadan temizle
'Yaratılan nesneleri hafızadan temizle
Set Sirket = Nothing
Set TekTal = Nothing
Set TekTalUst = Nothing
Set TekTalKalem = Nothing
Kernel.FreeNetsisLibrary
Set Kernel = Nothing
End Sub
```

**Siparişten Fatura Oluşturma**

```
Sub SiparisToIrsFat()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim NewFatura As NetOpenX.Fatura
Dim Siparis As NetOpenX.Fatura
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Siparis = Kernel.yeniFatura(Sirket, ftSSip)
Set NewFatura = Kernel.yeniFatura(Sirket, ftSFat)
 
Call Siparis.OkuUst("00000000000SIP1", "cari1")
Call Siparis.OkuKalem
'hedef nesne bilgileri set ediliyor
NewFatura.Ust.FATIRS_NO = "00000000000FAT1"
NewFatura.Ust.Tarih = CDate("01/01/2016")
 
On Error Resume Next
Call siparis.Siparis2IrsFat(NewFatura)
If Err.Number <> 0 Then
   MsgBox Err.Description
End If
'Netsis Dll'lerini hafızadan temizliyor
'Yaratılan nesneleri hafızadan temizliyor
Set Sirket = Nothing
Set Siparis = Nothing
Set NewFatura = Nothing
Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Sipariş Kalemlerini Kümüle Ederek Fatura Oluşturma**

```
Dim Krnl
Dim Sirket
Dim Fatura
Dim FatUst
Dim SipUst
Dim Siparis
Dim FaturaKalem
Dim SiparisKalem
dim KalemBulundu
dim Query
Set Krnl = CreateObject("NetOpenX50.Kernel")
Set Sirket = Krnl.yeniSirketAktifEXE( Kernel.Values("TS_CORE") )
Set Siparis = Krnl.yeniFatura (Sirket,7)
'Ekrandan girilen Siparis Okunuyor
Siparis.OkuUst neSipNo.Text,neCariKod.Text
Siparis.OkuKalem
Set Fatura = Krnl.yeniFatura(Sirket,0)
Set FatUst = Fatura.Ust
Set SipUst = Siparis.Ust
FatUst.FatIrs_No = Fatura.YeniNumara("A")' İstenen seri atanamalı
' Sipariş Ust bilgileri yeni faturaya aktarılıyor
FatUst.Carikod = SipUst.CariKod
FatUst.Tarih = SipUst.Tarih
FatUst.Proje_kodu = SipUst.Proje_kodu
FatUst.Pla_Kodu = SipUst.Pla_Kodu
FatUst.FiiliTarih = SipUst.FiiliTarih
' Buraya kopyalanması istenen diğer özellikler eklenebilir
for i=0 to Siparis.KalemAdedi-1
  KalemBulundu = false
  Set SiparisKalem = Siparis.Kalem(i)
  for j=0 to Fatura.KalemAdedi-1
    Set FaturaKalem = Fatura.Kalem(j)
    if SiparisKalem.StokKodu = FaturaKalem.StokKodu then
      KalemBulundu = true
      'Sipariş kalemi yeni faturada bulundu mevcut kalemin miktar bilgisi güncelleniyor
      FaturaKalem.STra_GCMIK = FaturaKalem.STra_GCMIK + SiparisKalem.STra_GCMIK
      Exit For
    end if
    Set FaturaKalem = Nothing
  next
  if KalemBulundu = false then
     ' kalem bulunamadı faturaya siparişin ilgili kalemi ekleniyor
     Set FaturaKalem = Fatura.kalemYeni( SiparisKalem.StokKodu )
     FaturaKalem.STra_GCMIK = SiparisKalem.STra_GCMIK
     FaturaKalem.STra_GCMIK2 = SiparisKalem.STra_GCMIK2
     FaturaKalem.STra_TAR = SiparisKalem.STra_TAR
     FaturaKalem.STra_NF = SiparisKalem.STra_NF
     FaturaKalem.STra_BF = SiparisKalem.STra_BF
     FaturaKalem.STra_KDV = SiparisKalem.STra_KDV
     FaturaKalem.STra_GC = SiparisKalem.STra_GC
     FaturaKalem.STra_DOVTIP = SiparisKalem.STra_DOVTIP
     FaturaKalem.STra_DOVFIAT = SiparisKalem.STra_DOVFIAT
     FaturaKalem.DEPO_KODU = SiparisKalem.DEPO_KODU
     ' Buraya kopyalanması istenen diğer özellikler eklenebilir
  end if
  Set FaturaKalem = Nothing
  Set SiparisKalem = Nothing
next
Msgbox "Oluşturulan Fatura Numarası : " & Fatura.Ust.FatIrs_No
Fatura.KayitYeni
Set Query = Krnl.yeniNetRS(Sirket)
'Sipariş kapatılmak ya da kilitlenmek istenirse aşağıdaki sorgunun SET kısmı doldurulmalı
'Call Query.Calistir("UPDATE SIPAMAS SET ...... WHERE FTIRSIP = '6' AND FATIRS_NO='"&SipUst.FatIrs_No&"' AND CARI_KODU = '"&SipUst.CariKod&"'")
Set Query = Nothing
Set FatUst = Nothing
Set SipUst = Nothing
Set SiparisKalem = Nothing
Set FaturaKalem = Nothing
Set Siparis = Nothing
Set Fatura = Nothing
Set Sirket = Nothing
Krnl.FreeNetsisLibrary
Set Krnl = Nothing
```

**Numara Değişikliği İşlemi**

```
Sub NumaraDegistir()
  
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim Fatura As NetOpenX50.Fatura
Set Sirket = Kernel.yeniSirket(vtMSSQL, "TEST", "sa", "sapass", "NETSIS", "1", 0)
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
Call Fatura.OkuUst("Y00000000000005", "M001")
Call Fatura.OkuKalem
Call Fatura.NumaraDegistir("ABC000000000021")
Set Fatura = Nothing
Set Sirket = Nothing
Kernel.FreeNetsisLibrary
Set Kernel = Nothing
  
End Sub
```

**Dövizli Fatura Kaydı**

```
Sub FaturaCevrim()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FaturaUst As NetOpenX50.FatUst
  Dim FaturaKalem As NetOpenX50.FatKalem
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", sube)
     
    Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
    Set FaturaUst = Fatura.Ust
    FaturaUst.FATIRS_NO = Fatura.YeniNumara("S")
    FaturaUst.TIPI = ft_YurtIci
    FaturaUst.CariKod = "C0001"
    FaturaUst.Tarih = Now
    FaturaUst.KDV_DAHILMI = False
     
    Set FaturaKalem = Fatura.kalemYeni("doviz")
    FaturaKalem.STra_GCMIK = 1
    FaturaKalem.STra_DOVTIP = 1
    FaturaKalem.STra_DOVFIAT = 150
    'Döviz fiyatı ile kur çarpılıp birim fiyat sahasına değer atanıyor
    FaturaKalem.STra_BF = FaturaKalem.STra_DOVFIAT * 2
     
    Fatura.kayitYeni
     
    Set FatUst = Nothing
    Set FatKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Satır Bazında Koşul Kodu Kullanımı**

```
Sub Kosul()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FaturaUst As NetOpenX50.FatUst
  Dim FaturaKalem As NetOpenX50.FatKalem
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis sifre", sube)
     
    Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
    Fatura.KosulluHesapla = True
    Fatura.StokKartinaGoreHesapla = False
    Fatura.FiyatSistemineGoreHesapla = False
     
    Set FaturaUst = Fatura.Ust
    FaturaUst.FATIRS_NO = Fatura.YeniNumara("S")
    FaturaUst.TIPI = ft_Acik
    FaturaUst.CariKod = "C0001"
    FaturaUst.KOSULKODU = "GENISK1"
    FaturaUst.Tarih = Now
    FaturaUst.KOSULTARIHI = Now
    FaturaUst.KDV_DAHILMI = False
     
    Set FaturaKalem = Fatura.kalemYeni("s1")
    FaturaKalem.STra_GCMIK = 1
    FaturaKalem.STra_BF = 100
    FaturaKalem.Stra_KosulK = "KOS1"
     
    Set FaturaKalem = Fatura.kalemYeni("s2")
    FaturaKalem.STra_GCMIK = 1
    FaturaKalem.STra_BF = 200
    FaturaKalem.Stra_KosulK = "KOS2"
     
    Fatura.kayitYeni
     
    Set FatUst = Nothing
    Set FatKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Genel İskonto Kullanımı**

```
Sub FaturaGenelIskonto()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FaturaUst As NetOpenX50.FatUst
  Dim FaturaKalem As NetOpenX50.FatKalem
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", vt kull şifre", "netsis kull adı", "netsis kull şifre", şube kodu)
     
    'ftSSip: kaydedilecek belgenin Müşteri Sipariş olduğunu gösterir
    Set Fatura = Kernel.yeniFatura(Sirket, NetOpenX50.TFaturaTip.ftSSip)
     
    Set FaturaUst = Fatura.Ust
    FaturaUst.FATIRS_NO = Fatura.YeniNumara("A")
     
    'kaydedilen fatura belgelerinde, Fatura belgesi ile
    'TIPI alanı uyumlu olmalıdır.
    'Örneğin: Müşteri siparişi keserken, TIPI alanına
    'ft_Acik girilmemelidir. Konu ile ilgili olarak
    'Temelset paketi Fatura modülü referans alınabilir
    FaturaUst.TIPI = ft_YurtIci
     
    FaturaUst.CariKod = "00001"
    FaturaUst.Proje_Kodu = "033"
     
    'GEN_ISK1O alanının kullanılması ile ilgili olarak,
    'Fatura parametrelerinin doğru şekilde yapıldığından
    'emin olunmalıdır. Parametre ayarlarının doğru şekilde
    'yapıldığından emin olunması için, Temelset Paketi
    'Fatura modülünden test fatura belgesi kesilmelidir.
    FaturaUst.GEN_ISK1O = 50
    Set FaturaKalem = Fatura.kalemYeni("11")
    FaturaKalem.DEPO_KODU = 1
    FaturaKalem.STra_GCMIK = 10
    FaturaKalem.STra_BF = 150
    FaturaKalem.ProjeKodu = "033"
    Fatura.kayitYeni
     
    Set FaturaUst = Nothing
    Set FaturaKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Hızlı Tahsilat Kaydı**

```
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim TahsilAna As NetOpenX50.HizliTahsilatAna
Dim tahsil As NetOpenX50.HizliTahsilat
Dim Fatura As NetOpenX50.Fatura
Dim fatUst As NetOpenX50.fatUst
Dim fatKalem As NetOpenX50.fatKalem
 
Set Sirket = Kernel.yeniSirket(vtMSSQL, "BRC12", "sa", "sapass", "NETSIS", "1", 0)
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
Set fatUst = Fatura.Ust
Fatura.TahsilatKayitKullan = True
Set fatUst = Fatura.Ust
fatUst.CariKod = "001"
fatUst.TIPI = ft_Kapali
fatUst.Tarih = Date
fatUst.FATIRS_NO = Fatura.YeniNumara("A")
fatUst.PLA_KODU = "0"
fatUst.KS_KODU = "01"
 
Set fatKalem = Fatura.kalemYeni("001")
fatKalem.STra_GCMIK = 1
fatKalem.STra_DOVTIP = 1
fatKalem.STra_DOVFIAT = 1.5
fatKalem.STra_BF = 1.77
fatKalem.DEPO_KODU = 1
Call Fatura.HesaplamalariYap
Set tahsil = Fatura.tahsilatYeni
tahsil.SozKodu = "NAKİT"
tahsil.Tutar = fatUst.GENELTOPLAM
tahsil.PLA_KODU = "0"
tahsil.Referans_Kodu = "1"
tahsil.DovTutar = 1.5
tahsil.Proje_Kodu = "0"
tahsil.DovTutar = 1.5
tahsil.Kur = tahsil.Tutar / tahsil.DovTutar
Fatura.kayitYeni
  
Set fatKalem = Nothing
Set fatUst = Nothing
Set Fatura = Nothing
Set TahsilAna = Nothing
Set tahsil = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```

**Fatura Kalemlerine Karma Koli Stoğu Ekleme**

```
Sub DepolarArasiTranfer()
    Dim Kernel As New NetOpenX50.Kernel
    Dim Sirket As NetOpenX50.Sirket
    Dim Fatura As NetOpenX50.Fatura
    Dim FatUst As NetOpenX50.FatUst
    Dim FatKalem As NetOpenX50.FatKalem
    On Error GoTo Hata
     
    Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", netsis sube)
    Set Fatura = Kernel.yeniFatura(Sirket, ftLokalDepo)
     
    Set FatUst = Fatura.Ust
    FatUst.FATIRS_NO = "D00000000000006"
    FatUst.AMBHARTUR = htKonsinye ' Hareket Türü
    FatUst.Proje_Kodu = "P1"
    FatUst.GCKOD_CIKIS = 0
    FatUst.GCKOD_GIRIS = 100 'Transfer yapılacak Sube Nosu
    FatUst.Tarih = Now
    FatUst.KDV_DAHILMI = True
    FatUst.YEDEK = "D"
         
    Set FatKalem = Fatura.kalemYeni("kk1")
    FatKalem.Gir_Depo_Kodu = 3 'Giris yapılacak depo kodu
    FatKalem.DEPO_KODU = 1 'Cıkış yapılacak depo kodu
    FatKalem.STra_GCMIK2 = 20
    FatKalem.STra_GCMIK = 0
    FatKalem.STra_BF = 100
    FatKalem.KarmaKoliIsle
     
    Fatura.kayitYeni
     
    Set FatKalem = Nothing
    Set FatUst = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Karma Koli Bileşenlerine Seri Ekleme**

```
Sub KarmaKoliKayit()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FatUst As NetOpenX50.FatUst
  Dim FatKalem As NetOpenX50.FatKalem
  On Error GoTo hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull sifre", "netsis kull adı", "netsis kull sifre", "sube kodu")
     
    Set Fatura = Kernel.yeniFatura(Sirket, NetOpenX50.TFaturaTip.ftSFat)
     
    Set FatUst = Fatura.Ust
    FatUst.FATIRS_NO = Fatura.YeniNumara("A")
    FatUst.TIPI = ft_Acik
    FatUst.KDV_DAHILMI = True
    FatUst.CariKod = "00034"
    FatUst.Tarih = Now
    FatUst.ENTEGRE_TRH = Now
    FatUst.Proje_Kodu = "033"
    FatUst.PLA_KODU = "01"
     
    Set FatKalem = Fatura.kalemYeni("koli1")
    FatKalem.DEPO_KODU = 1
    FatKalem.STra_BF = 10
    FatKalem.STra_GCMIK2 = 1
    FatKalem.KarmaKoliIsle
     
    'Koli1 kaleminin 2 tane bileşeni var ise
    Dim KarmaKoliSiraNo As Integer
    KarmaKoliSiraNo = FatKalem.Sira - 1
    'Birinci bileşene seri bilgisi ekleniyor
    Call Fatura.Kalem(KarmaKoliSiraNo + 1).SeriEkle("A", "", "", "", Fatura.Kalem(KarmaKoliSiraNo + 1).STra_GCMIK)
    'İkinci bileşene seri bilgisi ekleniyor
    Call Fatura.Kalem(KarmaKoliSiraNo + 2).SeriEkle("B", "", "", "", Fatura.Kalem(KarmaKoliSiraNo + 2).STra_GCMIK)
     
    Fatura.kayitYeni
     
    Set FatUst = Nothing
    Set FatKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
hata:
    MsgBox Err.Description
End Sub
```

**Ölçü Birimlerinin Kullanılması**

```
Sub FaturaCevrim()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FatUst As NetOpenX50.FatUst
  Dim FatKalem As NetOpenX50.FatKalem
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(vttipi, "vt adı", "vt kull adı", vt kull şifre", "netsis kull adı", "netsis kull şifre", şube kodu)
     
    Set Fatura = Kernel.yeniFatura(Sirket, NetOpenX50.TFaturaTip.ftSFat)
    Set FaturaUst = Fatura.Ust
    FaturaUst.FATIRS_NO = Fatura.YeniNumara("A")
    FaturaUst.TIPI = ft_Acik
    FaturaUst.CariKod = "00034"
    FaturaUst.Proje_Kodu = "033"
    FaturaUst.PLA_KODU = "01"  
    'Çevrim işlemi için 2 farklı ölçü birimi
    'ile çalıştığımızı düşünelim
    'Ölçü Birim 1: Adet
    'Ölçü Birim 2: Koli
    'Ölçü birimi çevrimlerinde 1 Koli 4 Adet'tir
    'şeklinde bir tanımlamamız olsun
    
    'Ölçü birim çevrim işlemini manuel olarak
    'yapıyor isek aşağıdaki şekilde bir kod
    'bloğu tasarlayabiliriz
    Fatura.OtomatikCevrimYapilsin = False
     
    Set FatKalem = Fatura.kalemYeni("serisiz")
    FatKalem.Olcubr = 2
    'Stra_GCMIK alanına 1. Ölçü Birimi üzerinden
    'miktar atmalıyız
    FatKalem.STra_GCMIK = 20 '( 5 Koli * 4 )
    FatKalem.STra_BF = 1
    
    'Ölçü birim çevrim işlemini NetOpenX40
    'kütüphanesine yaptırmak istiyor isek, aşağıdaki
    'şekilde bir kod bloğu tasarlayabiliriz
    Fatura.OtomatikCevrimYapilsin = True
     
    Set FatKalem = Fatura.kalemYeni("serisiz")
    FatKalem.Olcubr = 2
    'Stra_GCMIK alanına 2. Ölçü Birimi üzerinden
    'miktar atmalıyız
    FatKalem.STra_GCMIK = 5  ' ( 5 Koli )
    FatKalem.STra_BF = 1
     
    Fatura.kayitYeni
     
    Set FatUst = Nothing
    Set FatKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Değişken Ölçü Birimlerinin Kullanılması**

```
Sub FaturaCevrimDegiskenOlcu()
  Dim Kernel As New NetOpenX50.Kernel
  Dim Sirket As NetOpenX50.Sirket
  Dim Fatura As NetOpenX50.Fatura
  Dim FaturaUst As NetOpenX50.FatUst
  Dim FaturaKalem As NetOpenX50.FatKalem
  On Error GoTo Hata
    Set Sirket = Kernel.yeniSirket(NetOpenX50.vtMSSQL, "vt adı", "vt kull adı", "vt kull şifre", "netsis kull adı", "netsis kull şifre", şube kodu)
     
    Set Fatura = Kernel.yeniFatura(Sirket, NetOpenX50.TFaturaTip.ftSFat)
    Set FaturaUst = Fatura.Ust
    FaturaUst.FATIRS_NO = Fatura.YeniNumara("A")
    FaturaUst.TIPI = ft_Acik
    FaturaUst.CariKod = "00031"
    FaturaUst.Proje_Kodu = "033"
    FaturaUst.PLA_KODU = "01"
     
    'Not: Değişken ölçü birimleri parametresi aktif olmalıdır.
     
    'Çevrim işlemi için 2 farklı ölçü birimi
    'ile çalıştığımızı düşünelim
    'Ölçü Birim 1: Adet
    'Ölçü Birim 2: Koli
    '1 Koli 5 adettir şeklinde dinamik olarak karar verdiğimiz
    'çevrim tanımlamasına göre fatura belgesi kaydetmeye
    'çalışıyoruz.
     
    'Değişken ölçü birim çevrim işlemini manuel olarak
    'yapıyor isek aşağıdaki şekilde bir kod
    'bloğu tasarlayabiliriz
    Fatura.OtomatikCevrimYapilsin = False
     
    Set FaturaKalem = Fatura.kalemYeni("serisiz")
    FaturaKalem.Olcubr = 2
    'Stra_GCMIK alanına 1. Ölçü Birimi üzerinden
    'miktar atmalıyız
    FaturaKalem.STra_GCMIK = 25 '( 5 Koli * 5 )
    FaturaKalem.STra_GCMIK2 = 0
    FaturaKalem.CEVRIM = 0.2
    FaturaKalem.STra_BF = 1
     
    'Değişken ölçü birim çevrim işlemini NetOpenX40
    'kütüphanesine yaptırmak istiyor isek, aşağıdaki
    'şekilde bir kod bloğu tasarlayabiliriz
    Fatura.OtomatikCevrimYapilsin = True
     
    Set FaturaKalem = Fatura.kalemYeni("serisiz")
    FaturaKalem.Olcubr = 2
    'Stra_GCMIK alanına 2. Ölçü Birimi üzerinden
    'miktar atmalıyız
    'Çevrim değerinin ne olacağı NetOpenX40 kütüphanesi
    'tarafından otomatik olarak hesaplanacaktır
    FaturaKalem.STra_GCMIK = 5   ' ( 5 Koli )
    FaturaKalem.STra_GCMIK2 = 25 ' ( 5 Koli * 5 )
    FaturaKalem.STra_BF = 1
     
    Fatura.kayitYeni
     
    Set FatUst = Nothing
    Set FatKalem = Nothing
    Set Fatura = Nothing
    Set Sirket = Nothing
    Call Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Fatura Okuma**

```
Sub FaturaOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Fatura As NetOpenX.Fatura
Dim FatUst As NetOpenX.FatUst
Dim FatKalem As NetOpenX.FatKalem
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
'Faturanın üst bilgileri okunuyor
Call Fatura.OkuUst("000000000088883", "00002")
Set FatUst = Fatura.Ust
'MsgBox FatUst.CariKod & "--" & FatUst.FATIRS_NO
'Faturanın kalemleri okunuyor
Call Fatura.OkuKalem
For i = 0 To Fatura.KalemAdedi - 1
   Set FatKalem = Fatura.kalem(i)
   'MsgBox FatKalem.StokKodu  & FatKalem.STra_BFNext
 
Set Sirket = Nothing
Set Fatura = Nothing
Set FatUst = Nothing
Set FatKalem = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Talep / Teklif Okuma**

```
Sub TekTalOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim TekTal As NetOpenX.Fatura
Dim TekTalUst As NetOpenX.FatUst
Dim TekTalKalem As NetOpenX.FatKalem
 
Set Sirket = Kernel.yeniSirket(vtOracle, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
Set TekTal = Kernel.yeniFatura(Sirket, ftSatTeklif)
 
'Faturanın üst bilgileri okunuyor
Call TekTal.OkuUst("000000000088886", "BANKA")
Set TekTalUst = TekTal.Ust
'MsgBox TekTalUst.CariKod & "--" & TekTalUst.FATIRS_NO
'Faturanın kalemleri okunuyor
Call TekTal.OkuKalem
For i = 0 To TekTal.KalemAdedi - 1     
    Set TekTalKalem = TekTal.kalem(i)
    'MsgBox TekTalKalem.StokKodu & TekTalKalem.STra_BF
Next
 
Set Sirket = Nothing
Set TekTal = Nothing
Set TekTalUst = Nothing
Set TekTalKalem = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
 
End Sub
```

**Fatura Silme**

```
Sub FaturaSil()
Dim Kernel As New Kernel
Dim Sirket As Sirket
Dim Fatura As Fatura
On Error GoTo Hata:
    Set Sirket = Kernel.yeniSirket(vtMSSQL, "vt adı", "vt kull adı", "vt kull şifre", "netsis kull adı", "netsis kull şifre", "şube kodu")
     
    Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
     
    'Fatura Ust ve Kalem bilgileri okunuyor
    Call Fatura.OkuUst("A00000000002628", "00034")
    Fatura.OkuKalem
     
    'Fatura belgesi siliniyor
    Fatura.kayitSil
     
    Set Fatura = Nothing
    Set Sirket = Nothing
    Kernel.FreeNetsisLibrary
    Set Kernel = Nothing
    Exit Sub
Hata:
    MsgBox Err.Description
End Sub
```

**Aktif Ondalık Bilgisi Getirme**

```
Sub NDSOku()
 
Dim Kernel As New NetOpenX.Kernel
Dim Sirket As NetOpenX.Sirket
Dim Fatura As NetOpenX.Fatura
Dim FatUst As NetOpenX.FatUst
Dim FatKalem As NetOpenX.FatKalem
 
Set Sirket = Kernel.yeniSirket(vtMSSQL, "ENTERPRISE8", "TEMELSET", "", "NETSIS", "", 32767)
'MsgBox "ndsMiktar:" & Sirket.getirNDS(1, 1, 1, ndsMiktar)
'MsgBox "ndsDovtutar:" & Sirket.getirNDS(1, 1, 1, ndsDovtutar)
'MsgBox "ndsFirmaDovTut:" & Sirket.getirNDS(1, 1, 1, ndsFirmaDovTut)
'MsgBox "ndsOran:" & Sirket.getirNDS(1, 1, 1, ndsOran)
 
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
MsgBox "ndsMiktar:" & Fatura.getirAktifNDS(ndsMiktar)
MsgBox "ndsTutar:" & Fatura.getirAktifNDS(ndsTutar)
'MsgBox "ndsDovtutar:" & Fatura.getirAktifNDS(ndsDovtutar)
'MsgBox "ndsFirmaDovTut:" & Fatura.getirAktifNDS(ndsFirmaDovTut)
'MsgBox "ndsOran:" & Fatura.getirAktifNDS(ndsOran)
MsgBox Kernel.sayiYuvarla(900000.638, Fatura.getirAktifNDS(ndsTutar))
  
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
Set Sirket = Nothing
Set Fatura = Nothing
Set FatUst = Nothing
Set FatKalem = Nothing
 
End Sub
```

**Fatura Hızlı Tahsilat Kaydı**

```
Dim Kernel As New NetOpenX50.Kernel
Dim Sirket As NetOpenX50.Sirket
Dim TahsilAna As NetOpenX50.HizliTahsilatAna
Dim tahsil As NetOpenX50.HizliTahsilat
Dim Fatura As NetOpenX50.Fatura
Dim fatUst As NetOpenX50.fatUst
Dim fatKalem As NetOpenX50.fatKalem
 
Set Sirket = Kernel.yeniSirket(vtMSSQL, "BRC12", "sa", "sapass", "NETSIS", "1", 0)
Set Fatura = Kernel.yeniFatura(Sirket, ftSFat)
Set fatUst = Fatura.Ust
Fatura.TahsilatKayitKullan = True
Set fatUst = Fatura.Ust
fatUst.CariKod = "001"
fatUst.TIPI = ft_Kapali
fatUst.Tarih = Date
fatUst.FATIRS_NO = Fatura.YeniNumara("A")
fatUst.PLA_KODU = "0"
fatUst.KS_KODU = "01"
 
Set fatKalem = Fatura.kalemYeni("001")
fatKalem.STra_GCMIK = 1
fatKalem.STra_DOVTIP = 1
fatKalem.STra_DOVFIAT = 1.5
fatKalem.STra_BF = 1.77
fatKalem.DEPO_KODU = 1
Call Fatura.HesaplamalariYap
Set tahsil = Fatura.tahsilatYeni
tahsil.SozKodu = "NAKİT"
tahsil.Tutar = fatUst.GENELTOPLAM
tahsil.PLA_KODU = "0"
tahsil.Referans_Kodu = "1"
tahsil.DovTutar = 1.5
tahsil.Proje_Kodu = "0"
tahsil.DovTutar = 1.5
tahsil.Kur = tahsil.Tutar / tahsil.DovTutar
Fatura.kayitYeni
  
Set fatKalem = Nothing
Set fatUst = Nothing
Set Fatura = Nothing
Set TahsilAna = Nothing
Set tahsil = Nothing
Set Sirket = Nothing
Call Kernel.FreeNetsisLibrary
Set Kernel = Nothing
```

**Delphi**

**Satış Faturası Kaydı**

```
procedure TfrmDelphiTopluOrnek.BtnFatKayitClick(Sender: TObject);
Var
  Fatura : IFatura;
  FatUst : IFatUst;
  FatKalem : IFatKalem;
Begin
  Fatura := Kernel.yeniFatura(Sirket, ftSFat);
  //Fatura Ust Bilgilerini Olustur
  FatUst := Fatura.Ust;
  FatUst.FATIRS_NO := '000000000088886';
  FatUst.TIPI := ft_Acik;
  FatUst.CariKod := '00001';
  FatUst.TARIH := SysUtils.Date;
  FatUst.SIPARIS_TEST := SysUtils.Date;
  
  //1.Kalem
  FatKalem := Fatura.kalemYeni('001');
  FatKalem.STra_GCMIK := 55;
  FatKalem.STra_BF := 21110000;
  //Kayıtları saklama
  Fatura.kayitYeni;
 
{
. Stok hareket bilgileri saklanıyor
. Fatura ve Ek bilgileri saklanıyor
. Cari hareket bilgileri
. Kapalı fatura ise kasa bilgileri
}
 
end;
```

**Koşul Kodu ile Satış Faturası Kaydı**

```
unit KosulFat;
 
interface
 
uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, NetopenX_TLB;
 
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fatura kaydında otomatik koşul uygulaması için, koşul parametresinin açık olması, koşulkodunun girilmiş olması  //
// (programdan verilebilir ya da cari' de tanımlı ise otomatik gelir) ve Fatura.KosulluHesapla ozellik degerinin  //
// True olması gerekmektedir.(Koşul uygulaması açıksa, Fatura.KosulluHesapla ozelliginin öndeğeri True olur.)     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
type
  TForm1 = class(TForm)
    BtnOtoKosulFat: TButton;
    BtnManualKosFat: TButton;
    procedure BtnOtoKosulFatClick(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure BtnManualKosFatClick(Sender: TObject);
    procedure FormDestroy(Sender: TObject);
  private
    Kernel: IKernel;
    Sirket: ISirket;
  public
    { Public declarations }
  end;
 
var
  Form1: TForm1;
 
implementation
 
 
{$R *.dfm}
 
/////////////////////////////////////////////////////////////////////////////////////////////
//Fatura koşul hesaplamalarının otomatik olarak yapıldığı bir uygulama örneğidir.          //
//Koşul uygulaması açılmış, koşul kodu girilmiş ve Fatura.KosulluHesapla özellik değerinin //
//True olduğu durumda fatura kayıdını gösten bir örnektir                                  //
/////////////////////////////////////////////////////////////////////////////////////////////
 
Procedure TForm1.BtnOtoKosulFatClick(Sender: TObject);
Var
  Fatura : IFatura;
  FatUst : IFatUst;
  FatKalem : IFatKalem;
Begin
  Fatura := Kernel.yeniFatura(Sirket, ftSFat);
 
  {Fatura Ust Bilgilerini Olustur}
  FatUst := Fatura.Ust;
  FatUst.FATIRS_NO := '000000000099999';
  FatUst.CariKod := '0001';
  FatUst.TARIH := SysUtils.Date;
  FatUst.SIPARIS_TEST := SysUtils.Date;
 { 0001 kodlu cari için koşul bilgisi girilmediği için üst bilgilerde koşul kodu verilmiştir.
   cari için tanımlanmış koşul kodu varsa ve değiştirilmek istenmiyorsa koşul kodu girilmesine gerek yoktur. }
  FatUst.KOSULKODU := 'Kosul1';
  FatKalem := Fatura.kalemYeni('001');
  FatKalem.STra_GCMIK := 55;
  FatKalem.STra_BF := 150;
 
  //Kayıtları saklama
  Fatura.kayitYeni;
  {
    . Stok hareket bilgileri saklanıyor
    . Fatura ve Ek bilgileri saklanıyor
    . Cari hareket bilgileri
    . Kapalı fatura ise kasa bilgileri
  }
 
End;
 
Procedure TForm1.FormCreate(Sender: TObject);
Begin
 {form bazında yapılacak tüm NetOpenX fonksiyonlarına erişim nesnesi}
  Kernel:=CoKernel.Create;
  {
   . Yeni nesnelerin hepsi bu nesneden türetilebilir
   ! Bu nesne her bir Application için bir kere yaratılmalıdır
   ! Bu nesnenin FreeNetsisLibrary yordamı uygulama çıkışında çaprılmalıdır
  }
 
  {NetOpenX uygulamalarında kullanılacak örnek şirket bağlantısı}
  Sirket := Kernel.yeniSirket(vtMSSQL, 'ENTERPRISE8', 'TEMELSET', '', 'NETSIS', '', 0);
  {
   . Veri tabanında Netsis için önemli Context oluşturuldu
   . Netsis Authentication yapıldı
   . Şirket değerleri Cache içine alındı
  }
End;
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fatura koşul hesaplamalarının otomatik olarak değil uygulama içinden yapıldığı bir örnektir          //
//Koşul hesaplamaları yapan metodlar uygulama içinden sırasıyla çağırılmıştır fakat koşul değerlerinin //
//üst ve kalem bilgilerine yansıtılması sistem fonksiyonları ile yapılmış, koşul değerlerinin          //
//tek tek faturaya yansıtılması uygulama içinden yapılmamıştır.                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 
Procedure TForm1.BtnManualKosFatClick(Sender: TObject);
Var
  Fatura : IFatura;
  FatUst : IFatUst;
  FatKalem : IFatKalem;
  TmpFatKalem : IFatKalem;
  TmpFatUst : IFatUst;
Begin
  Fatura := Kernel.yeniFatura(Sirket, ftSFat);
  Fatura.KosulluHesapla := False;  {Fatura kaydedilirken koşul hesaplamaları NetOpenX tarafından otomatik yapılmayacaktır.}
 
  FatUst := Fatura.Ust;
  FatUst.FATIRS_NO := '000000000999999';
  FatUst.CariKod := 'KosulCari';
  FatUst.TARIH := SysUtils.Date;
  FatUst.SIPARIS_TEST := SysUtils.Date;
  { Fatura üst bilgileri ataması tamamlandıktan sonra, belirtilen koşul koduna göre koşul bilgilerinin okunması için
         Fatura.KosullariHazirla
      metodunun çağırılması zorunlu olan fonksiyondur.}
  Fatura.KosullariHazirla;
 
  { Eğer koşul uygulamasından gelen değerlerin otomatik olarak üst bilgilere yansıtılmasını istiyorsanız
        Fatura.KosulUstHesapla;
      metodunu çağırmalısınız. Bu metod FatUst objesindeki gerekli alanlara koşuldan
      gelen değerlerin atanmasını sağlar
 
   Eğer koşul uygulamasından gelen değerlerin otomatik olarak üst bilgilere yansıtılmasını istemiyor, bu değerlerin
   üst bilgilere yansıtılması işlemini siz yapmak istiyorsanız.
       Fatura.KosulUstGetir;
      metodunu çağırmalısınız. Metod geriye bir IFatUst objesi dönecektir. Bu objedeki koşuldan gelen değerleri
      kullanarak, kendi FatUst objenizdeki gerekli alanlara istediğiniz atamaları yapabilirsiniz.}
  Fatura.KosulUstHesapla;
  {TmpFatUst := Fatura.KosulUstGetir;}
 
  FatKalem := Fatura.kalemYeni('001');
  FatKalem.STra_GCMIK := 55;
  FatKalem.STra_BF := 150;
 
  { Eğer koşul uygulamasından gelen değerlerin otomatik olarak kalem bilgilerine yansıtılmasını istiyorsanız
          Fatura.KosulKalemHesapla(KalemIndex);
      metodunu her bir kalem için çağırmalısınız. Bu metod FatKalem objesindeki gerekli alanlara koşuldan
      gelen değerlerin atanmasını sağlar.
 
    Eğer koşul uygulamasından gelen değerlerin otomatik olarak kalem bilgilerine yansıtılmasını istemiyor, bu değerlerin
    kalemlere yansıtılması işlemini siz yapmak istiyorsanız.
         Fatura.KosulKalemGetir();
      metodunu her kalem için çağırmalısınız. Metod geriye bir IFatKAlem objesi dönecektir. Bu objedeki koşuldan gelen
      değerleri  kullanarak, parametre olarak girdiginiz sıradaki kendi FatKalem objenizdeki gerekli alanlara istediğiniz
      atamaları yapabilirsiniz.}
  Fatura.KosulKalemHesapla(0);
  {TmpFatKalem := Fatura.KosulKalemGetir(0);}
 
  {Kayıtları saklama}
  Fatura.kayitYeni;
  {
    . Stok hareket bilgileri saklanıyor
    . Fatura ve Ek bilgileri saklanıyor
    . Cari hareket bilgileri
    . Kapalı fatura ise kasa bilgileri
  }
 
End;
 
Procedure TForm1.FormDestroy(Sender: TObject);
Begin
  //Artık NetOpenX uygulamasında hiçbir fonksiyon kullanılmayacak
  Kernel.FreeNetsisLibrary;
 
  //. Bu satırın yazılması gereksiz ancak yazılan kodların okunabilirliğini attırmak için yazılmıştır
  //. IUnknow Interface'den türetilmiş bir nesne olduğu için RefCounting ile otomatik olarak
  //bu satır yazılmasada program memory'de gerekli temizleme işlemlerini yapacaktır
  Kernel := Nil;
  Inherited;
End;
 
end.
```

**Parçalı Sipariş Teslimatı**

```
procedure TfrmTestNesnesi.BtnSipParcala(Sender: TObject);
Var
    Fatura : IFatura;
    FatUst : IFatUst;
    FatKalem : IFatKalem;
Begin
    Fatura := Kernel.yeniFatura(Sirket, ftSFat);
    //Fatura Ust Bilgilerini Olustur
    FatUst := Fatura.Ust;
    FatUst.FATIRS_NO := '000000000088886';
    FatUst.TIPI := ft_YurtDisi;
    FatUst.CariKod := '00001';
    FatUst.TARIH := SysUtils.Date;
    FatUst.SIPARIS_TEST := SysUtils.Date;
 
    //1.Kalem
    FatKalem := Fatura.kalemYeni('001');
    FatKalem.STra_GCMIK := 55;
    FatKalem.STra_BF := 21110000;
 
    //Fatura belgesinin tek bir sipariş kalemi ile bağlanması
 
    //Fatura kalemi - 1 numaralı siparişe bağlanıyor
 
    FatKalem.Stra_SipNum := '000000000000001';
 
    //Fatura kalemi - 5 kontrol numaraları kaleme bağlanıyor
    //Çünkü aynı stok kodu bir siparişte birden fazla olabilir
    //(farklı vadeler, odeme opsiyonları vb.)
     
    FatKalem.Stra_SipKont := 5;
 
    //Fatura kalem miktarı 55, Sipariş kaleminden bu kadarteslim edilecek
    //anlamına gelmektedir. Fazla ya da eksik olabilir.
    //Fazla olması durumunda NetOpenX fazla teslimat gibi davranacaktır
 
    FatKalem.STra_GCMIK := 55;
    FatKalem.STra_BF := 21110000;
 
    //Diğer dikkat edilmesi gereken kurallar & öneriler
    //Bu işlem parçalı sipariş teslimatına benzer mantıklar için uygulanmalıdır.
    //Fiyat, vade tarihi, koşul kodu gibi birçok bilginin fatura & irsaliye kalemine taşınması için Sipariş
    //belgesi de bir nesne ile okunup kalem bilgileri kullanılabilir.
    //(Örnek: FatKalm.Stra_BF := Siparis.Kalem[0].Stra_BF )
    //Sipariş bağlantısı için fatura & irsaliye kalemlerinde mutlaka stra_sipnum ve stra_sipkont sahalarına değer
    //atılmalıdır. Sipariş numarası + kontrol numarasına göre bağlantı yapılacak kalemin stok kodu ile fatura ve 
    //irsaliye belgesindeki kalemin stok kodu aynı olmalıdır.
    //Fatura & İrsaliye belgesine sipariş bağlantısı yapıldıktan sonra otomatik olarak veri tabanında sipariş 
    //teslim miktarı düzeltilecektir. Kod ile ek bir iş yapılmamalıdır.
 
    //Kayıtları saklama
    Fatura.kayitYeni;
end;
```

**İrsaliyeden Fatura Oluşturma**

```
unit UntNetOpenTestForm;
 
interface
 
uses Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,NetOpenX_TLB, Dialogs, StdCtrls;
 
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
 Irsaliye, Fatura: IFatura;
begin
 Kernel:=CoKernel.Create;
 Sirket:=Kernel.yeniSirket(vtMSSQL, 'ENTERPRISE8', 'TEMELSET', '', 'NETSIS', '', 0);
 {İrsaliyeden faturaya dönüşüm için 2 adet yeni IFatura nesnesine ihtiyacımız var.
 Birisi mevcut irsaliye bilgilerine erişim için diğeri ise, irsaliyenin nasıl bir
 faturaya dönüşeceğini tanımlamak için kullanılacaktır.}
 Irsaliye:=Kernel.yeniFatura(Sirket, ftSIrs);
 Fatura:=Kernel.yeniFatura(Sirket, ftSFat);
 {Mevcut irsaliye bilgileri için üst ve kalem bilgileri okunmak zorunda!!!}
 Irsaliye.OkuUst('G00000000000015', '00001');
 Irsaliye.OkuKalem;
 {Nasıl bir fatura dönüşümü yapılacaksa ilgili sahalar aktarılmalı}
 Fatura.Ust.FATIRS_NO:='F00000000000015';
 Fatura.Ust.Tarih:=SysUtils.Date;
 Fatura.Ust.ENTEGRE_TRH:=( SysUtils.Date - 1);
 //1 gÜn oncesi için
 {Aktarım zamanı. Parametre olarak fatura nesnesi gönderilmeli ki işlem sırasında
 irsaliyenin nasıl bir fatura belgesi olacağı netleştirilsin...}
 Irsaliye.Irsaliye2Fatura(Fatura);
 //NetOpenX uygulamasi ile işimiz tamamlandı bu nedenle tüm kaynakları kapatmalıyız
 Kernel.FreeNetsisLibrary;
end;
end.
```

**Fatura Okuma**

```
unit DemoForm;
 
interface
 
uses
 
    Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,NetOpenX_TLB, Dialogs, StdCtrls;
 
type
 
    TfrmNetOpenXDemo = class(TForm)
    btnFaturaOku: TButton;
    procedure btnFaturaOkuClick(Sender: TObject);
    private
    end;
 
var
 frmNetOpenXDemo: TfrmNetOpenXDemo;
 
implementation
{$R *.dfm}
procedure TfrmNetOpenXDemo.btnFaturaOkuClick(Sender: TObject);
Var
  Sirket: ISirket;
  Fatura: IFatura;
  FatUst: IFatUst;
  FatKalem: IFatKalem;
  Kernel: IKernel;
  I: Integer;
Begin
Kernel:=CoKernel.Create;
Try
  Sirket:=Kernel.yeniSirket(vtMSSQL, 'ENTERPRISE8', 'TEMELSET', '', 'NETSIS', '', 0);
  Fatura:=Kernel.yeniFatura(Sirket, ftSFat);
//Faturanın üst bilgileri okunuyor
  Fatura.OkuUst('000000000000131', '00001');
  FatUst:=Fatura.Ust;
  MessageDlg(FatUst.CariKod + '--' + FatUst.FATIRS_NO, mtInformation, [mbOK], 0);
//Faturanın kalemleri okunuyor
  Fatura.OkuKalem;
  For I:=0 To Pred(Fatura.KalemAdedi) Do
  Begin
   FatKalem:=Fatura.kalem[ I ];
   MessageDlg(FatKalem.StokKodu + ' ' + FloatToStr(FatKalem.STra_BF), mtInformation, [mbOK], 0);
  End;
Finally
  Sirket:=Nil;
  Fatura:=Nil;
  FatUst:=Nil;
  FatKalem:=Nil;
  Kernel.FreeNetsisLibrary;
  Kernel:=Nil;
End;
end;
end.
```

**Satır Bazı Açıklama Girişi**

```
unit UntNetOpenTestForm;
 
interface
 
    uses Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,NetOpenX_TLB, Dialogs, StdCtrls;
 
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
  Fatura: IFatura;
  FatKalem: IFatKalem;
begin
    //NetOpenX nesnesi hazırlanıyor
    Kernel:=CoKernel.Create;
    Sirket:=Kernel.yeniSirket(vtMSSQL, 'ENTERPRISE8', 'TEMELSET', '', 'NETSIS', '', 0);
    Fatura:=Kernel.yeniFatura(Sirket, ftSFat);
    //fatura ust bilgileri hazırlanıyor
    Fatura.Ust.FATIRS_NO:='G00000000000099';
    Fatura.Ust.CariKod:= 'YYYY';
    Fatura.Ust.TARIH:= SysUtils.Date; //Günün tarihi atılıyor
    Fatura.Ust.SIPARIS_TEST:= SysUtils.Date; //Günün tarihi atılıyor
    //yeni belge icin satir bazi aciklama listesi hazırlanıyor
    Fatura.SatirBaziAcikTemizle;
    //XXX stok kodu için fatura nesnesine tek bir kalem eklenecek
    FatKalem:=fatura.kalemYeni('XXX');
    //bu kaleme ait satir bazi aciklamalari yazılıyor (1..10 arasında olmalı)
    FatKalem.SATIRBAZIACIK[1]:='Aciklama 1';
    FatKalem.SATIRBAZIACIK[10]:='Aciklama 10';
    //Eğer mevcut satır bazı açıklamalar var olan bir belgeden alınmak isteniyor
    //bu şekilde erişmek yeterli olacaktır.
    //Saklanmış belgenin satır bazı açıklamalarına erişmek için mutlaka
    //belgeye ait nesneden OkuUst ve OkuKalem yöntemleri çalıştırılmalıdır.
    ShowMessage(FatKalem.SATIRBAZIACIK[1]);
    //diğer önemli bilgiler
    FatKalem.STra_GCMIK:=1;
    FatKalem.STra_BF:=1; //YTL
    //Fatura Saklaniyor
    fatura.kayitYeni;
    //NetOpenX uygulamasi ile artık işimiz tamamlandı
    Kernel.FreeNetsisLibrary;
end;
end.
```

**PHP**

**Satış Faturası Kaydı**

```
<?php$kernel = new COM("NETOPENX50.Kernel") or die("Unable to instantiate Netopenx50.Kernel");
    $Sirket = $kernel->yenisirket(0, "vt adı", "vt kull adı", "vt kull şifre", "netsis kull adı", "netsis kull şifre", "netsis şube kodu");
  
    $Fatura = $kernel->yeniFatura($Sirket, 0);
    $Fatura->Ust->FATIRS_NO = $Fatura->YeniNumara("A");
    $Fatura->Ust->CariKod = "S00001";
    $Fatura->Ust->Tarih = date("d-m-Y");
    $Fatura->Ust->FiiliTarih = date("d-m-Y");
    $Fatura->Ust->ENTEGRE_TRH = date("d-m-Y");
    $Fatura->Ust->KOD1 = "S";
    $Fatura->Ust->PLA_KODU = "01";
    $Fatura->Ust->FIYATTARIHI = date("d-m-Y");
    $Fatura->Ust->SIPARIS_TEST = date("d-m-Y");
  
    $FatKalem = $Fatura->kalemYeni ("M1");
    $FatKalem->DEPO_KODU = "1";
    $FatKalem->STra_GCMIK = "10";
    $FatKalem->STra_BF = "1";
    $Fatura->kayitYeni();
  
    $kernel->FreeNetsisLibrary();
    echo "Başarılı";
?>
```
