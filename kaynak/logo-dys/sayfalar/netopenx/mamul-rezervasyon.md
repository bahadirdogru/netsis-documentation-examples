---
title: "Mamul Rezervasyon"
source: https://dys.logo.cloud/external?cid=ba28c214-a8a1-4920-8635-8d2b2a0a614d&link=44daed93-6635-4080-a75d-23a85892cff6&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Mamul Rezervasyon](https://dys.logo.cloud/external?cid=ba28c214-a8a1-4920-8635-8d2b2a0a614d&link=44daed93-6635-4080-a75d-23a85892cff6&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Mamul Rezervasyon

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);           
MamulRezervasyonu tmpMamRez = default(MamulRezervasyonu);
 
try
{
 
    fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL,
                                  "vt adi",
                                  "vt kull adi",
                                  "vt kull sifre",
                                  "netsis kull adi",
                                  "netsis sifre",
                                  0);
 
    tmpMamRez = fKernel.yeniMamulRezervasyonu(fSirket, TMamulRezervasyonuIslemTipi.mritMusteriSiparisineMamRez);
    tmpMamRez.DatTarih = DateTime.Today;
    tmpMamRez.DatFiiliTarih = DateTime.Today;
    tmpMamRez.KendiDeposunaRezerveEt = true;
    tmpMamRez.GirisDepoListesi.TumunuSecVeyaKaldir(true);
    tmpMamRez.CikisDepoListesi.TumunuSecVeyaKaldir(true);
 
 
    tmpMamRez.SipTeslimTarBaslangic = DateTime.Parse("01.01.2000");
    tmpMamRez.SipTeslimTarBitis = DateTime.Parse("31.12.2020");
    tmpMamRez.SiparisSecimListesiHazirla();
 
    //tmpMamRez.SiparisSecimList.TumunuSecVeyaKaldir(true);
 
    for (int i = 0; i < tmpMamRez.SiparisSecimList.Count; i++)
    {
        MamulRezervasyonuSiparisSecim tmpSiparis = tmpMamRez.SiparisSecimList.Get(i);
        if (tmpSiparis.SiparisNo == "C00000000000010")
        {
            tmpSiparis.Secim = true;
            tmpSiparis.RezerveEdilecekMiktar = 134;
        }
 
    }
    tmpMamRez.RezervasyonOlustur();
     
 
    for (int i = 0; i < tmpMamRez.OlusanBelgelerList.Count; i++)
    {
        MamulRezervasyonuOlusanBelge tmpOlusanBelge = tmpMamRez.OlusanBelgelerList.Get(i);
    }
}
catch (Exception ex)
{
    MessageBox.Show("Hata: " + ex.Message);
}
finally
{
    Marshal.ReleaseComObject(tmpMamRez);
    Marshal.ReleaseComObject(fSirket);
    fKernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(fKernel);
}
```

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
MamulRezervasyonu tmpMamRez = default(MamulRezervasyonu);
 
try
{
    fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL,
                                  "vt adi",
                                  "vt kull adi",
                                  "vt kull sifre",
                                  "netsis kull adi",
                                  "netsis sifre",
                                  0);
    tmpMamRez = fKernel.yeniMamulRezervasyonu(fSirket, TMamulRezervasyonuIslemTipi.mritMamulRezervasyonIptali);
    tmpMamRez.DatTarih = DateTime.Today;
    tmpMamRez.DatFiiliTarih = DateTime.Today;
    tmpMamRez.KendiDeposunaRezerveEt = true;
    tmpMamRez.GirisDepoListesi.TumunuSecVeyaKaldir(true);
    //tmpMamRez.CikisDepoListesi.TumunuSecVeyaKaldir(true);
    //for (int i = 0; i < tmpMamRez.CikisDepoListesi.Count; i++)
    //{
    // MamulRezervasyonuDeposu tmpDepo = tmpMamRez.CikisDepoListesi.Get(i);
    // if (i>0)
    // tmpDepo.Secim = false;
    //}
    tmpMamRez.SipTeslimTarBaslangic = DateTime.Parse("01.01.2000");
    tmpMamRez.SipTeslimTarBitis = DateTime.Parse("31.12.2020");
    tmpMamRez.SiparisSecimListesiHazirla();
    //tmpMamRez.SiparisSecimList.TumunuSecVeyaKaldir(true);
 
    for (int i = 0; i < tmpMamRez.SiparisSecimList.Count; i++)
    {
        MamulRezervasyonuSiparisSecim tmpSiparis = tmpMamRez.SiparisSecimList.Get(i);
        if (tmpSiparis.SiparisNo == "C00000000000010")
        {
            tmpSiparis.Secim = true;
        }
 
    }
    tmpMamRez.RezervasyonIptalEt();
    for (int i = 0; i < tmpMamRez.OlusanBelgelerList.Count; i++)
    {
        MamulRezervasyonuOlusanBelge tmpOlusanBelge = tmpMamRez.OlusanBelgelerList.Get(i);
    }
}
catch (Exception ex)
{
    MessageBox.Show("Hata: " + ex.Message);
}
finally
{
    Marshal.ReleaseComObject(tmpMamRez);
}
```
