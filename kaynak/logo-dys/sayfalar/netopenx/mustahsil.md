---
title: "Mustahsil"
source: https://dys.logo.cloud/external?cid=ca6c20ff-63d9-4b67-8bdd-463e33948285&link=ebeb7864-28bd-4083-9b22-e4516180d876&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Mustahsil](https://dys.logo.cloud/external?cid=ca6c20ff-63d9-4b67-8bdd-463e33948285&link=ebeb7864-28bd-4083-9b22-e4516180d876&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Mustahsil

**C#**

**Müstahsil Faturası Kaydı**

```
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Mustahsil mustahsil = default(Mustahsil);
            MustahsilUst mustahsilUst = default(MustahsilUst);
            MustahsilKalem mustahsilKalem = default(MustahsilKalem);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                                   "TEST",
                                                   "TEMELSET",
                                                   "",
                                                   "netsis",
                                                   "net1",
                                                   0);
                mustahsil = kernel.yeniMustahsil(sirket, "120-01-014");
                mustahsilUst = mustahsil.Ust;
                
                mustahsilUst.FATIRS_NO = "000000000000153";
                mustahsilUst.Proje_Kodu = "b";
                mustahsilUst.Kasa_Kodu = "00";
                mustahsilUst.Bagkur = "10";
                mustahsilUst.I_Yedek8 = 2;
                mustahsilUst.TIPI = 3;
                mustahsilUst.Tarih = DateTime.Now;
                mustahsilUst.TCNO = "22334455667";
                //mustahsilUst.EMustahsil = true;
                mustahsilUst.Kesinti_Dahil = true;
                mustahsilUst.OdemeKod = "007";
                mustahsilKalem = mustahsil.KalemEkle("barkod");
                mustahsilKalem.ProjeKodu = "b";
                mustahsilKalem.Irsaliyeno = "R00000000002716";
                mustahsilKalem.Stra_IrsKont = 1;
                mustahsilKalem.DEPO_KODU = 1;
                mustahsilKalem.STra_GCMIK = 1;
                mustahsilKalem.STra_BF = 900;
                mustahsil.Sakla();              
            }
            finally
            {
                Marshal.ReleaseComObject(mustahsilKalem);
                Marshal.ReleaseComObject(mustahsilUst);
                Marshal.ReleaseComObject(mustahsil);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
Müstahsil Numara Değiştir
            Kernel kernel = new Kernel();
            Sirket sirket = default(Sirket);
            Mustahsil mustahsil = default(Mustahsil);
            try
            {
                sirket = kernel.yeniSirket(TVTTipi.vtMSSQL,
                                                "TEST",
                                                "TEMELSET",
                                                "",
                                                "netsis",
                                                "net1",
                                                0);
                mustahsil = kernel.yeniMustahsil(sirket, "120-01-014");
                mustahsil.MakbuzOku("MUS000000000030");
                mustahsil.NumaraDegistir("MUS000000000031");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                Marshal.ReleaseComObject(mustahsil);
                Marshal.ReleaseComObject(sirket);
                kernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(kernel);
            }
```
