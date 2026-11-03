---
title: "Rapor Çalıştır ve Kaydet"
source: https://dys.logo.cloud/external?cid=5ef105d5-42c5-4a44-97e3-c7192270192e&link=96e04539-c2fe-4d86-8c58-9f7ffcaf9707&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [Rapor Çalıştır ve Kaydet](https://dys.logo.cloud/external?cid=5ef105d5-42c5-4a44-97e3-c7192270192e&link=96e04539-c2fe-4d86-8c58-9f7ffcaf9707&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# Rapor Çalıştır ve Kaydet

**Rapor Çalıştır Ve Kaydet**

```
using NetOpenX50;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
 
namespace NetopenxTest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Rapor_Test_Click(object sender, EventArgs e)
        {
 
            Kernel fKernel = new Kernel();
            Sirket fSirket = default(Sirket);
            try
            {
                fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL,
                   "vt adi",
                   "vt kull adi",
                   "vt kull sifre",
                   "netsis kull adi",
                   "netsis sifre",
                   0);
 
                string tmpPath = "";
                tmpPath = fSirket.RaporTaslagiCalistir(5, 15, 21, TRaporSonucuCiktiTipi.rsctPdf, @"C:\TEMP\Files\CARHAR1.Pdf");
                tmpPath = fSirket.RaporTaslagiCalistir(5, 15, 21, TRaporSonucuCiktiTipi.rsctExcel, @"C:\TEMP\Files\CARHAR1.xlsx");
 
            }
            finally
            {
                Marshal.ReleaseComObject(fSirket);
                fKernel.FreeNetsisLibrary();
                Marshal.ReleaseComObject(fKernel);
            }
        }
    }
}
```

```
Kernel fKernel = new Kernel();
Sirket fSirket = default(Sirket);
try
{
 
    fSirket = fKernel.yeniSirket(TVTTipi.vtMSSQL,
       "vt adi",
       "vt kull adi",
       "vt kull sifre",
       "netsis kull adi",
       "netsis sifre",
       0);
 
    string tmpPath = "";
    tmpPath = fSirket.GorselRaporTaslagiCalistir(4, @"C:\TEMP\Files\rapor.pdf");
    MessageBox.Show("Oldu: " + tmpPath);
}
catch (Exception ex)
{
    MessageBox.Show(ex.Message);
}
finally
{
    Marshal.ReleaseComObject(fSirket);
    fKernel.FreeNetsisLibrary();
    Marshal.ReleaseComObject(fKernel);
}
```
