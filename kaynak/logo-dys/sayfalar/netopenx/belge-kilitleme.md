---
title: "Belge Kilitleme"
source: https://dys.logo.cloud/external?cid=da39ecd1-295e-457b-8fa8-97de17614c3b&link=04f59600-d3f1-4014-98da-0ca356d3d68c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Belge Kilitleme](https://dys.logo.cloud/external?cid=da39ecd1-295e-457b-8fa8-97de17614c3b&link=04f59600-d3f1-4014-98da-0ca356d3d68c&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Belge Kilitleme

**Fatura Kilitleme**

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
 
fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "TEST", "TEMELSET", "", "netsis", "net1", 0);
 
FaturaBelgesiKilitleme tmpFaturaBelgesiKilitleme = (FaturaBelgesiKilitleme)fKernel.yeniBelgeKilitleme(fSirket, TBelgeKilitlemeBelgeTipi.bkbtSatisFaturasi);
try
   {
         tmpFaturaBelgesiKilitleme.FisNumarasi = "R00000000002435";
         tmpFaturaBelgesiKilitleme.CariKodu = "120-01-014";
 
         tmpFaturaBelgesiKilitleme.KilitDurumu = TBelgeKilitDurumTipi.bkdKilitliDegil;
         tmpFaturaBelgesiKilitleme.KilitlenecekIslem = TKilitlenecekIslemTipi.kitSilme;
         //tmpBakimEmriKilitleme.SeciliKullaniciEkle("test1");
         tmpFaturaBelgesiKilitleme.Kaydet();
 
         MessageBox.Show("Kilitlenme işlemi tamamlandı");
   }
catch (Exception ex)
  {
         MessageBox.Show(ex.Message);
  }
finally
 {
         Marshal.ReleaseComObject(tmpFaturaBelgesiKilitleme);
         Marshal.ReleaseComObject(fSirket);
         fKernel.FreeNetsisLibrary();
         Marshal.ReleaseComObject(fKernel);
 }
```

**Yevmiye Kilitleme**

```
 Kernel fKernel = new Kernel();
      Sirket fSirket = default(Sirket);
 
      fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "TEST", "TEMELSET", "", "netsis", "net1", 0);
 
      YevmiyeFisiKilitleme tmpYevmiyeFisiKilitleme = (YevmiyeFisiKilitleme)fKernel.yeniBelgeKilitleme(fSirket, TBelgeKilitlemeBelgeTipi.bkbtYevmiyeFisi);
      tmpYevmiyeFisiKilitleme.AyKodu = 3;
      tmpYevmiyeFisiKilitleme.YilKodu = 2023;
      tmpYevmiyeFisiKilitleme.FisNumarasi = "000000000000021";
 
      tmpYevmiyeFisiKilitleme.KilitDurumu = TBelgeKilitDurumTipi.bkdTumKullanicilardaKilitli;
      tmpYevmiyeFisiKilitleme.KilitlenecekIslem = TKilitlenecekIslemTipi.kitTumu;
      //tmpYevmiyeFisiKilitleme.SeciliKullaniciEkle("test2");
 
      tmpYevmiyeFisiKilitleme.Kaydet();
```

**İş Emri Kilitleme**

```
Kernel fKernel = new Kernel();
      Sirket fSirket = default(Sirket);
 
      fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "TEST", "TEMELSET", "", "netsis", "net1", 0);
 
      try
      {
          IsEmriKilitleme tmpIsEmriKilitleme = (IsEmriKilitleme)fKernel.yeniBelgeKilitleme(fSirket, TBelgeKilitlemeBelgeTipi.bkbtIsEmri);
          tmpIsEmriKilitleme.IsEmriNo = "000000000000012";
 
          tmpIsEmriKilitleme.KilitDurumu = TBelgeKilitDurumTipi.bkdSeciliKullanicilaraAcik;
          tmpIsEmriKilitleme.KilitlenecekIslem = TKilitlenecekIslemTipi.kitSilme;
          tmpIsEmriKilitleme.SeciliKullaniciEkle("test1");
          tmpIsEmriKilitleme.Kaydet();
      }
      catch (Exception ex)
      {
          MessageBox.Show(ex.Message);
      }
```

**Reçete Kaydı Kilitleme**

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
 
fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "REMDA2016", "TEST", "TEMELSET", "", "netsis", "net1", 0);
 
ReceteKaydiKilitleme tmpReceteKaydiKilitleme = (ReceteKaydiKilitleme)fKernel.yeniBelgeKilitleme(fSirket, TBelgeKilitlemeBelgeTipi.bkbtReceteKaydi);
tmpReceteKaydiKilitleme.MamulKodu = "MMLX5";
//tmpReceteKaydiKilitleme.MamulYapKod = "122345812";
 
tmpReceteKaydiKilitleme.KilitDurumu = TBelgeKilitDurumTipi.bkdTumKullanicilardaKilitli;
tmpReceteKaydiKilitleme.KilitlenecekIslem = TKilitlenecekIslemTipi.kitTumu;
 
tmpReceteKaydiKilitleme.Kaydet();
```

**Bekım Emri Kilitleme**

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
 
fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL, "TEST", "TEMELSET", "", "netsis", "net1", 0);
 
BakimEmriKilitleme tmpBakimEmriKilitleme = (BakimEmriKilitleme)fKernel.yeniBelgeKilitleme(fSirket, TBelgeKilitlemeBelgeTipi.bkbtBakimEmri);
tmpBakimEmriKilitleme.BakimEmriNo = "000000000000004";
 
tmpBakimEmriKilitleme.KilitDurumu = TBelgeKilitDurumTipi.bkdSeciliKullanicilaraAcik;
tmpBakimEmriKilitleme.KilitlenecekIslem = TKilitlenecekIslemTipi.kitSilme;
tmpBakimEmriKilitleme.SeciliKullaniciEkle("test2");
 
tmpBakimEmriKilitleme.Kaydet();
```
