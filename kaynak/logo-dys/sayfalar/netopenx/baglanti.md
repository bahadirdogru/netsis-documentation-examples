---
title: "Baglanti"
source: https://dys.logo.cloud/external?cid=078d50e2-d278-4de4-9419-a4f1e40f40a6&link=945d2c7e-0bf1-4562-a5e3-972c3f552cd4&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Baglanti](https://dys.logo.cloud/external?cid=078d50e2-d278-4de4-9419-a4f1e40f40a6&link=945d2c7e-0bf1-4562-a5e3-972c3f552cd4&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Baglanti

**C# / Bağlantı Bilgisi Okuma**

```
using System;
using System.Windows.Forms;
using NetOpenX50;
using System.Runtime.InteropServices;
 
namespace NetOpenXTest
{
  public partial class NetTest: Form
  {
    public void Baglanti()
    {
    Kernel kernel = new Kernel();
    Sirket sirket = default(Sirket);
    BaglantiAna bagana = default(BaglantiAna);
    Baglanti bag = default(Baglanti);
    try
    {
      sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
 
      bagana = kernel.yeniBaglantiAna(sirket);
      bagana.Oku("100");//cari kodu
 
      for (int i = 0; i < bagana.BaglantiAdedi ; i++)
      {
         MessageBox.Show(bagana.Baglanti[i].CariKod);
         MessageBox.Show(bagana.Baglanti[i].TIPI + "-" + bagana.Baglanti[i].BaglantiNo);
         MessageBox.Show(bagana.Baglanti[i].Aciklama+ "-" + bagana.Baglanti[i].AlisHesKod);
         MessageBox.Show(bagana.Baglanti[i].BagTutar + "-" + bagana.Baglanti[i].BorcHesKod);
         MessageBox.Show(Convert.ToString(bagana.Baglanti[i].VadeTarihi));
      }
 
    finally
    {
      Marshal.ReleaseComObject(bag);
      Marshal.ReleaseComObject(bagana);
      Marshal.ReleaseComObject(sirket);
      kernel.FreeNetsisLibrary();
      Marshal.ReleaseComObject(kernel);
    }
  }
}
```
