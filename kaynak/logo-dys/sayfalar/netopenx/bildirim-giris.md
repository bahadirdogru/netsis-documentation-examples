---
title: "Bildirim Giriş"
source: https://dys.logo.cloud/external?cid=2bae2755-d121-4038-9d24-3c96f668ae16&link=1ca18817-5008-47c3-ae63-b6ba584a1c14&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Bildirim Giriş](https://dys.logo.cloud/external?cid=2bae2755-d121-4038-9d24-3c96f668ae16&link=1ca18817-5008-47c3-ae63-b6ba584a1c14&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Bildirim Giriş

**C# / Kullanıcı İşlemler > Bildirim Girişi**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
NetsisBildirim bildirim = default(NetsisBildirim);
try
{
        sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
            "vt adi",
            "vt kull adi",
            "vt kull sifre",
            "netsis kull adi",
            "netsis sifre",
            0);
 
         bildirim = kernel.yeniNetsisBildirim(sirket);
         bildirim.AliciEkle("netsis");
         bildirim.Baslik = "Test Bildirimi" + DateTime.Now.ToString();
         bildirim.Mesaj = "Bu bir test bildirimidir.";
         bildirim.GonderimTarih = DateTime.Now;
 
         //Ek olarak Dosya Göndermek
         bildirim.DosyaEkle(@"C:\temp\test.png");
 
 
         ////Stok kartı için Link Oluşturuldu
         NetsisLink StokLinkObj = new NetsisLink();
         StokLinkObj.ProgramNo = 16;
         StokLinkObj.ModulNo = 4;
         StokLinkObj.ParamEkle("ST01");
         bildirim.NetsisLinkEkle(StokLinkObj);
 
         ////Fatura için Link Oluşturuldu
         NetisLink FaturaLinkObj = new NetsisLink();
         FaturaLinkObj.ProgramNo = 1;
         FaturaLinkObj.ModulNo = 1;
         FaturaLinkObj.ParamEkle("A00000000000011"); //Belgeno
         FaturaLinkObj.ParamEkle("01");//Cari kod
         bildirim.NetsisLinkEkle(FaturaLinkObj);
 
         if (bildirim.Gonder())
          {
               Console.WriteLine("mesaj gönderildi");
          }
}
finally
{
         if (bildirim != null) Marshal.ReleaseComObject(bildirim);
}
```
