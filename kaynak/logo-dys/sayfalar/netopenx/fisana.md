---
title: "FisAna"
source: https://dys.logo.cloud/external?cid=d8d1f95c-971b-477b-b7ae-ecad06de4aff&link=eab94637-a614-4cdb-a9c0-cb468978cc88&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [FisAna](https://dys.logo.cloud/external?cid=d8d1f95c-971b-477b-b7ae-ecad06de4aff&link=eab94637-a614-4cdb-a9c0-cb468978cc88&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# FisAna

**C#**

**Yevmiye Fişi Kaydı**

```
Kernel kernel = new Kernel();
Sirket sirket = default(Sirket);
FisAna fis = default(FisAna);
FisAnaDetay detay = default(FisAnaDetay);
FisAnaDetayEk ek = default(FisAnaDetayEk);
try
{
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                              "vt adı",
                                              "vt kull adı",
                                              "vt kull sifre",
                                              "netsis kull adı",
                                              "netsis kull sifre",
                                              0);
  
                //fis olusturma
                fis = kernel.yeniFis(sirket);
                fis.TransactSupport = false;
                fis.AyKodu = 12;
                fis.YilKodu = DateTime.Now.Year;
                fis.FisTip = TFisType.ftMahsup;
                fis.ACIK1 = "aciklama 1";
                fis.ACIK2 = "aciklama 2";
                //fis.GunKodu = 9;
                fis.Tarih = DateTime.Now;
  
                #region [ Fis Detay 1 - borc kaydi]
                //fis detay olusturma
                detay = fis.detayYeni();
                detay.BorcAlacak = TFisAnaDetayType.fdtBorc;
                detay.HesapKodu = "101-00-01-00000";
                detay.Aciklama = "acik1";
                detay.Tutar = 100;
  
                // doviz uygulamasi icin
                //detay.Dovizli = true;
                //detay.DovizTipi = 1;
                //detay.DovizTut = 111;
  
                //KDV destegi icin
                //detay.KDV= 18;
  
                detay.RefKodu = "000000000000000";
                detay.ProjeKodu = "0";
                detay.EvrakTarihi = DateTime.Now.Date;
                // fisdetay ek olusturma
               ek = detay.detayEkYeni();
                ek.SeriNo = "B";
                ek.Fisno = "1111";
                ek.VergiDairesi = "izmir";
                #endregion
  
                #region [ Fis Detay 2 - alacak kaydi]
                detay = fis.detayYeni();
                detay.BorcAlacak = TFisAnaDetayType.fdtAlacak;
                detay.HesapKodu = "102-01-001";
                detay.Aciklama = "acik 1";
                detay.Tutar = 100;
  
                // doviz uygulamasi icin
                //detay.Dovizli = true;
                //detay.DovizTipi = 1;
                //detay.DovizTut = 111;
  
                //KDV destegi icin
                //detay.KDV= 18;
  
                detay.RefKodu = "000000000000000";
                detay.ProjeKodu = "0";
                detay.EvrakTarihi = DateTime.Now.Date;
                ek = detay.detayEkYeni();
                ek.SeriNo = "A";
                ek.Fisno = "2222";
                ek.VergiDairesi = "ankara";
                #endregion
  
                fis.kayitYeni();
  
            }
            finally
            {
               Marshal.ReleaseComObject(ek);
               Marshal.ReleaseComObject(detay);
                Marshal.ReleaseComObject(fis);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
}
```
