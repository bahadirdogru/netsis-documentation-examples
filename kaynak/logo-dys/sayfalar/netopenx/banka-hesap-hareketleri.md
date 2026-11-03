---
title: "Banka Hesap Hareketleri"
source: https://dys.logo.cloud/external?cid=628d5b78-54ab-4a97-8463-163fe058bd86&link=3e7c07ba-1ce0-4f5c-a488-371b2d80f493&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Banka Hesap Hareketleri](https://dys.logo.cloud/external?cid=628d5b78-54ab-4a97-8463-163fe058bd86&link=3e7c07ba-1ce0-4f5c-a488-371b2d80f493&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Banka Hesap Hareketleri

**C#**

**Banka Hesap Hareket Kayıt**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            BankaHesTraAna bankaHesTraAna = default(BankaHesTraAna);
            BankaHesTra bankaHesTra = default(BankaHesTra);
            try
            {
                   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
               "vt adi",
               "vt kull adi",
               "vt kull sifre",
               "netsis kull adi",
               "netsis sifre",
               0);
            bankaHesTraAna = kernel.yeniBankaHesTraAna(sirket);
            bankaHesTra = bankaHesTraAna.HareketYeni();
            bankaHesTra.NetHesKodu = "YKB-01-VDSZ-2";
            bankaHesTra.Tarih = DateTime.Today;
            bankaHesTra.Tutar = 1000;
            bankaHesTra.HarTuru = 0;
            bankaHesTra.HarTipi = 0;
            bankaHesTra.Aciklama = "Test";
            bankaHesTra.BA = "B";
            bankaHesTra.PlasiyerKodu = "1";
            bankaHesTraAna.HareketKaydet();
            }
            finally
            {
                Marshal.ReleaseComObject(bankaHesTraAna);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Banka Hesap Hareket Oku**

```
Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            BankaHesTraAna bankaHesTraAna = default(BankaHesTraAna);
            BankaHesTra bankaHesTra = default(BankaHesTra);
             
            try
            {
                   sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
               "vt adi",
               "vt kull adi",
               "vt kull sifre",
               "netsis kull adi",
               "netsis sifre",
               0);
 
            bankaHesTraAna = kernel.yeniBankaHesTraAna(sirket);
            bankaHesTra = bankaHesTraAna.OkunanHesTra;
            bankaHesTraAna.kayitOku(TOkumaTipi.otAc, "NETHESKODU='YKB-01-VDSZ-2'");
              {
                 bankaHesTraAna.kayitOku(TOkumaTipi.otIlk);
                 MessageBox.Show(bankaHesTra.IncKeyNo.ToString());
              }
 
            }
 
            finally
            {
                Marshal.ReleaseComObject(bankaHesTraAna);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```

**Banka Hareket Kontrol**

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
                sirket.BankaHareketKontrol("102-01-XXX");
                MessageBox.Show("İşlem Tamamlandı");
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
