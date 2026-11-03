---
title: "RestClient Örnek Kodlar"
source: https://dys.logo.cloud/external?cid=11b0bf3f-897f-494e-ad11-0fe3f1843c5c&link=78fc5142-9e7e-4a5c-b5a9-1bab45d639d2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-rest-ornekler.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [RestClient Örnek Kodlar](https://dys.logo.cloud/external?cid=11b0bf3f-897f-494e-ad11-0fe3f1843c5c&link=78fc5142-9e7e-4a5c-b5a9-1bab45d639d2&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# RestClient Örnek Kodlar

### Token

**Token Alma**

```
private oAuth2 _oAuth2;
 _oAuth2 = new oAuth2("http://localhost:7070");
 _oAuth2.Login(new JLogin()
            {
                BranchCode = 0,
                NetsisUser = "netsis",
                NetsisPassword = "net1",
                DbType = JNVTTipi.vtMSSQL,
                DbName = "GENPORT",
                DbPassword = "sapass",
                DbUser = "sa"
            });
string token = _oAuth2.AccessToken;
```

### Ortak Token Kullanımı

**Token Alma**

```csharp
TokenRestSettings.Init("http://localhost:7070", 120, true);
 
            var safeOp = new TokenSafeOperation(new JLogin()
 
            {
                BranchCode=0,
                NetsisUser="NETSIS",
                NetsisPassword="NET1",
                DbType=JNVTTipi.vtMSSQL,
                DbName="REMDA2016",
                DbUser="sa",
                DbPassword="sapass",
                HashCode=""
 
            });
 
            var result1 = safeOp.Exec<TResult<List<JObject>>>((token) =>
            {
                var _QueryManager = token.CreateManager<QueryManager>();
                var _queryResult1 = _QueryManager.GetInternal("select top 2 * from CASABIT");
 
                return _queryResult1;
            });
             
               var result3 = safeOp.Exec<TResult<ItemSlips>>((token) =>
            {
                var _QueryManager = token.CreateManager<QueryManager>();
                var _queryResult1 = _QueryManager.GetInternal("select top 2 * from CASABIT");
 
 
                var _InvoiceManager = token.CreateManager<ItemSlipsManager>();
 
                var data = new ItemSlips()
                {
                    KayitliNumaraOtomatikGuncellensin = true,
                    FaturaTip = JTFaturaTip.ftSSip,
                    EPostaGonderilsin = false,
                    FatUst = new ItemSlipsHeader()
                    {
                        Tip = JTFaturaTip.ftSSip,
                        CariKod = "320-01-041",
                        Tarih = DateTime.Now,
                        FiiliTarih = DateTime.Now,
                        TIPI = JTFaturaTipi.ft_Acik,
                        //PLA_KODU = "1",
                        //Proje_Kodu = "1"
                    },
                    Kalems = new List<ItemSlipLines>()
                   {
                         new ItemSlipLines(){
                              StokKodu="B1",
                              Olcubr = 1,
                              STra_DOVTIP = 1,
                              STra_DOVFIAT = 100,
                              STra_BF = 200,
                            DEPO_KODU=1,
                            STra_GCMIK=1,
                            STra_KDV = 18
                         }
                   }
                };
 
                var invoiceInfo2 = _InvoiceManager.Calculate(data);
 
                return invoiceInfo2;
            });
```

  
**Rest Call**

**Rest Call**

```
RequestManager req = new RequestManager(_oAuth2)
            {
                Method = "GET",
                Path = txtUrl.Text
            };
 
            textBox1.Text = req.GetResult();
```

### Banka Havale/Eft

**Rest Banka Havale/Eft**

```
string token = _oAuth2.AccessToken;
 
BankRemittanceTransferManager BRTManager = new BankRemittanceTransferManager(_oAuth2);
 
BankRemittanceTransfer tmpBRT = new BankRemittanceTransfer()
tmpBRT.IslemTipi = (int)JTBankaHavaleEftTip.tbBankaHvl;
tmpBRT.GelGidBA = "A"; //Gönderilen
tmpBRT.NetHesKodu = "001015";
tmpBRT.KarsiHesKod = "AKB-01-VDSZ-1";
tmpBRT.Tutar = 1;
tmpBRT.Sube_Kodu = 0;
tmpBRT.PlasiyerKodu = "1";
 
var tmpResult = BRTManager.PostInternal(tmpBRT);
```

###   
Cari

**Cari Çağırma**

```csharp
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
var resultAllCM = _ARPsManager.GetInternal();
 
/// C0001 carisi kodunun bilgilerini dondurmektedir.
var resultCMById = _ARPsManager.GetInternalById("C0001");
 
 
 // kisit , kolon ismi ve siralama ile ilgili ornek.
            var resultFilterCM = _ARPsManager.GetInternal(new SelectFilter()
            {
                Limit = 10,
                Offset = 0,
                Filter = "CARI_KOD like '%CARI%'",
                Fields = new List<string >() { "CARI_KOD", "CARI_ISIM", "Plasiyer_Kodu" }
                ,
                Sort = new List<SortParam>()
                 {
                      new SortParam(){ Column = "CARI_KOD",  SortType= SortParamType.ASC}
                 }
            });
```

**Cari Ekle**

```
//_oAuth2 sinifi ile geçerli token alinmasi gereklidir.
            var _ARPsManager = new ARPsManager(_oAuth2);
            var _dummyArps2 = new ARPs()
            {
                CariTemelBilgi = new ARPsPrimInfo()
                {
                    CARI_KOD = "CARI001",
                    CARI_ISIM = "Rest Cari",
                    CARI_TIP = "S",
                    Sube_Kodu = 0,
                    ACIK1 = "acik1",
                    ACIK2 = "acik2",
                    ACIK3 = "acik3",
                    CARI_ADRES = "izmir",
                    CARI_IL = "izmir",
                    CARI_TEL = "2322225566",
                    CARI_ILCE = "ksk",                   
                    CM_RAP_TARIH = DateTime.Now
                },
 
                CariEkBilgi = new ARPsSuppInfo()
                {
                    CARI_KOD = "CARI001",
                    TcKimlikNo = "12345678911",
                    Kull1N = 1,
                    Kull1S = "1",
                    S_Yedek1 = "syedek1"
                },
                IsletmelerdeOrtak = true,
                SubelerdeOrtak = true
            };
 
            _ArpsManager.DeleteInternalById(_dummyArps2.CariTemelBilgi.CARI_KOD);
            var result = _CustomersManager.PostInternal(_dummyArps2);
            var subeOrtak = result.Data.SubelerdeOrtak.GetValueOrDefault();
```

**Cari Güncelle**

```
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
 
 var result = _ARPsManager.PutInternal(id, new ARPs
            {
                CariTemelBilgi = new ARPsPrimInfo
                {
                    CARI_ILCE = "NARLIDERE",
                    CARI_KOD = id
                }
            });
            _CustomersManager.PutInternal(id, new ARPs
            {
                CariTemelBilgi = new ARPsPrimInfo
                {
                    CARI_KOD = id,
                    CARI_ILCE = "KONAK"
                }
            });
 
 var cariIlce = result.Data.CariTemelBilgi.CARI_ILCE;
```

**Cari Kayıt**

```
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
var resultPostDataCM = _ARPsManager.PostInternal(new ARPs()
            {
                CariTemelBilgi = new ARPsPrimInfo()
                {
                    CARI_KOD = "J0001",
                    CARI_ISIM = "Rest Cari 1",
                    CARI_TIP = "S",
                    Sube_Kodu = 0,
                    ACIK1 = "acik1",
                    ACIK2 = "acik2",
                    ACIK3 = "acik3",
                    CARI_ADRES = "izmir",
                    CARI_IL = "izmir",
                    CARI_TEL = "2322225566",
                    CARI_ILCE = "ksk"                 
                },
                CariEkBilgi = new ARPsSuppInfo()
                {
                    CARI_KOD = "J0001",
                    TcKimlikNo = "12345678911",
                    Kull1N = 1,
                    Kull1S = "1",
                    S_Yedek1 = "syedek1"
                }
            });
            if (resultPostDataCM.IsSuccessful)
            {
                MessageBox.Show("KAYIT BAŞARILI" + " " + resultPostDataCM.Data.CariTemelBilgi.CARI_KOD);
            }
            else
            {
                MessageBox.Show(resultPostDataCM.ErrorDesc);
 
            }
```

**Cari Sil**

```csharp
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
//Cari kodu C001 olan cariyi siler
_ARPsManager.DeleteInternalById("C001");
```

**Belirli bir cariyi getirme**

```
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
//Cari kodu C001 olan cari bilgilerini getir
var result = _ARPsManager.GetInternalById("C001");
```

### Cari Hareket

**Cari Hareket Oluştur**

```
private oAuth2 _oAuth2;
private ARPTransactionsManager _manager;
private ARPTransactions _dummyArpTransaction;
_manager = new ARPTransactionsManager(_oAuth2);
_dummyArpTransaction = new ARPTransactions()
            {
                CARI_KOD = "00123",
                Tarih = DateTime.Now.Date,
                Hka = "A",
                Aciklama = "rest post",
                SonKayitNoAl = true
            };
var result = _manager.PostInternal(_dummyArpTransaction);
var data = result.Data;
```

**Cari Hareket Güncelle**

```
private oAuth2 _oAuth2;
private ARPTransactionsManager _manager;
private ARPTransactions _dummyArpTransaction;
_manager = new ARPTransactionsManager(_oAuth2);
int incKeyNo = 179;
var result = _manager.PutInternal(id, new ARPTransactions()
{
     Aciklama = "str"
});
var data = result.Data;
 
Belirli bir Cari Hareketi Getir
private oAuth2 _oAuth2;
private ARPTransactionsManager _manager;
private ARPTransactions _dummyArpTransaction;
_manager = new ARPTransactionsManager(_oAuth2);
//IncKeyNo 178 olani getir
var result = _manager.GetInternalById(178);
var data = result.Data;
```

**Tüm Cari Hareketleri Getir**

```
private oAuth2 _oAuth2;
private ARPTransactionsManager _manager;
private ARPTransactions _dummyArpTransaction;
_manager = new ARPTransactionsManager(_oAuth2);
var result = _manager.GetInternal();
var data = result.Data;
foreach (var arpTransaction in data)
            {
                Console.WriteLine(arpTransaction.CARI_KOD);
                Console.WriteLine(arpTransaction.Inc_Key_Number);
                Console.WriteLine(arpTransaction.Aciklama);
            }
```

**Cari Hareketi Sil**

```
private oAuth2 _oAuth2;
private ARPTransactionsManager _manager;
private ARPTransactions _dummyArpTransaction;
_manager = new ARPTransactionsManager(_oAuth2);
//id : Inckeyno
var result = _manager.DeleteInternalById(id);
```

### Basım

**Yevmiye Fişi Basımı**

```
private oAuth2 _oAuth2;
private PrintManager _manager;
_manager = new PrintManager(_oAuth2);
var result = _manager.GLSlipsPrinting(new GLSlipsPrintParam()
            {
                DesignNumber = 1047,
                GLSlipsId = "000000000000001",
                Month = 1
            });
var data = result.Data;
```

**Çek-Senet**

```
private oAuth2 _oAuth2;
private PrintManager _manager;
_manager = new PrintManager(_oAuth2);
 var result = _manager.CheckAndPNotesMainPrinting(new CheckAndPNotesMainPrintParam()
            {
                BordroNo = "a00000000000001",
                Tip = JTCekSenType.csBSEN,
                DesignNumber = 1049
            });
var data = result.Data;
```

**Dizayn No ile Fiş Basımı**

```
private oAuth2 _oAuth2;
private PrintManager _manager;
_manager = new PrintManager(_oAuth2);
 
var result = _manager.ItemSlipsPrinting(new ItemSlipsPrintParam()
            {
                CustomerCode = "00081",
                DesignNumber = 1005,
                DocumentNumber = "000000000364249",
                DocumentType = JTFaturaTip.ftSFat
            });
WriteByteArrayToFile(result.Data, @"c:\temp\itemslips.pdf");
 
private void WriteByteArrayToFile(byte[] data, string fileName)
        {
            using (FileStream stream = File.Create(fileName))
            {
                stream.Write(data, 0, data.Length);
            }
        }
```

**Kasa Basımı**

```
private oAuth2 _oAuth2;
private PrintManager _manager;
_manager = new PrintManager(_oAuth2);
var result = _manager.SafeDepositsPrinting(new SafeDepositPrintParam()
            {
                DesignNumber = 1046,
                PrintingType = JTKasaBasimTipi.kbMSen,
                Sira = 9592
            });
var data = result.Data;
```

### Çek Senet

**Çek senet oluştur**

```
private oAuth2 _oAuth2;
private CheckAndPNotesMainManager _manager;
private CheckAndPNotesMain _dummyCheckAndPNotesMain;
_manager = new CheckAndPNotesMainManager(_oAuth2);
_dummyCheckAndPNotesMain = new CheckAndPNotesMain()
            {
                Tip = JTCekSenType.csMCEK,
                CekSenEvrakKaydetmeTip = JTCekSenetEvrakKaydetmeTipi.ektCekSenAlma,
                OtoNumaraGetir = true,
                Evraklar = new List<CheckAndPNotes>()
                {
                    new CheckAndPNotes()
                    {
                        CEKSERI = "H",
                        SC_GIRTRH = DateTime.Now.Date,
                        SC_VERENK = "00002",
                        AS_C = "A",
                        SC_YERI = "P",
                        VADETRH = DateTime.Now.AddMonths(1),
                        SC_ODETRH = DateTime.Now.AddMonths(1),
                        Proje_Kodu = "1",
                        Plasiyer_Kodu = "02",
                        Tutar = 500
                    },
 
                    new CheckAndPNotes()
                    {
                        CEKSERI = "H",
                        SC_GIRTRH = DateTime.Now.Date,
                        SC_VERENK = "00002",
                        AS_C = "A",
                        SC_YERI = "P",
                        VADETRH = DateTime.Now.AddMonths(1),
                        SC_ODETRH = DateTime.Now.AddMonths(1),
                        Proje_Kodu = "1",
                        Plasiyer_Kodu = "02",
                        Tutar = 100
                    }
                }
            };
var result = _manager.PostInternal(_dummyCheckAndPNotesMain);
var data = result.Data;
var bordroNo= data.BordroNo;
```

**Çek senet çağır**

```
private oAuth2 _oAuth2;
private CheckAndPNotesMainManager _manager;
private CheckAndPNotesMain _dummyCheckAndPNotesMain;
_manager = new CheckAndPNotesMainManager(_oAuth2);
     
//CekSenType enum degerlerinden biri ve TBLMCEK, TBLMSEN, TBLBCEK or TBLBSENtablolarindan gelecek SC_ALB_NOdegerini alir
var result = _manager.GetInternalById("csMCEK;A00000000000001");
var data = result.Data;
```

**Çek senet parametrelere göre çağır**

```
private oAuth2 _oAuth2;
private CheckAndPNotesMainManager _manager;
private CheckAndPNotesMain _dummyCheckAndPNotesMain;
_manager = new CheckAndPNotesMainManager(_oAuth2);
     
 
var result = _manager.GetInternalByParam(new CheckAndPNotesMainParam()
            {
                Tip = JTCekSenType.csMCEK,
                BordroNo = "A00000000000001"
            });
var data = result.Data;
```

**Çek senet parametrelere göre sil**

```
private oAuth2 _oAuth2;
private CheckAndPNotesMainManager _manager;
private CheckAndPNotesMain _dummyCheckAndPNotesMain;
_manager = new CheckAndPNotesMainManager(_oAuth2);
 
var result = _manager.DeleteInternalByParam(new CheckAndPNotesMainParam()
            {
                BordroNo = 5,
                Tip = csMCEK
            });
private oAuth2 _oAuth2;
private CheckAndPNotesMainManager _manager;
private CheckAndPNotesMain _dummyCheckAndPNotesMain;
_manager = new CheckAndPNotesMainManager(_oAuth2);
var result = _manager.DeleteInternalById("csMCEK;B20000000000006");
var data = result.Data;
var bordroNo= data.BordroNo;
```

### Dinamik Depo

**Dinamik Depo oluşturma**

```
private oAuth2 _oAuth2;
private DynamicWarehsSlipsManager _manager;
private DynamicWarehsSlips _dummyDynamicWarehsSlips;
 
_manager = new DynamicWarehsSlipsManager(_oAuth2);
 
_dummyDynamicWarehsSlips = new DynamicWarehsSlips()
            {
                HareketTipi = JTDepoIslemTipi.ditYerlestirme,
                BelgeTipi = JTDepoBelgeTipi.dbtAlisFaturasi,
                BelgeNumarasi = "A00000000000001",
                CariKodu = "1",
                 
                Harekets = new List<DynWarehsSlipLines>()
                {
                    new DynWarehsSlipLines()
                    {
                        HucreHareketKalems = new List<DynWarehsSlipCellLines>()
                        {
                            new DynWarehsSlipCellLines()
                            {
                                HucreKodu = "H1",
                                NetMiktar = 5,
                                HareketTipi = JTDepoHareketTipi.dhtNormal,
                                StokKodu = "001"
                            }
                        }
                    }
                }
            };
 
var result = _manager.PostInternal(_dummyDynamicWarehsSlips);
var data = result.Data;
```

### Döviz

**Döviz Kaydı Oku**

```csharp
private oAuth2 _oAuth2;
private ForExsManager _manager;
private ForExs _dummyForExs;
_manager = new ForExsManager(_oAuth2);
 
            #region WithoutAnyFilter
            var resultWithoutFilter = _manager.GetInternal();
            var data = resultWithoutFilter.Data;
      
            #endregion
            #region FilterTest
            var resultFilter = _manager.GetInternal(new SelectFilter
            {
                Filter = @"NETSISSIRA >= 9"
            });
 
            var resultFilter2 = _manager.GetInternal(new SelectFilter
            {
                Filter = @"ISIM LIKE '%e%'"
            });
            #endregion
 
 
            #region Sort
            var resultSortAsc = _manager.GetInternal(new SelectFilter()
            {
                Sort = new List<SortParam>()
                {
                    new SortParam() { Column = "NETSISSIRA", SortType = SortParamType.ASC }
                }
            });
            var sortedAscList = resultSortAsc.Data.OrderBy(e => e.NETSISSIRA);
            var resultSortDesc = _manager.GetInternal(new SelectFilter()
            {
                Sort = new List<SortParam>()
                {
                    new SortParam() { Column = "Sira", SortType = SortParamType.DESC }
                }
            });
            var sortedDescList = resultSortDesc.Data.OrderByDescending(e => e.Sira);
            #endregion
 
            #region OffsetTest
            var resultOffset = _manager.GetInternal(new SelectFilter()
            {
                Offset = 3,
                Limit = 7
            });
            #endregion
 
            #region LimitTest
            var resultLimit = _manager.GetInternal(new SelectFilter()
            {
                Limit = 5
            });
            #endregion
  
            #region Id'ye göre döviz kaydı
            var result = _manager.GetInternalById(1); //1 = Id
            var isim = result.Data.ISIM.Contains("USD");
            #endregion
```

**Döviz Kaydı Oluştur**

```
private oAuth2 _oAuth2;
private ForExsManager _manager;
private ForExs _dummyForExs;
 
_dummyForExs = new ForExs()
            {
                BIRIM = 8,
                ISIM = "Kron",
                NETSISSIRA = 15
            };
 
 _manager = new ForExsManager(_oAuth2);
 
var result = _manager.PostInternal(_dummyForExs);
```

**Döviz Kaydı Sil**

```
private oAuth2 _oAuth2;
private ForExsManager _manager;
private ForExs _dummyForExs;
 
_dummyForExs = new ForExs()
            {
                BIRIM = 8,
                ISIM = "Kron",
                NETSISSIRA = 15
            };
 
 _manager = new ForExsManager(_oAuth2);
string sira = 5;
var result = _manager.DeleteInternalById(sira);
```

### Hızlı Tahsilat

**Hızlı Tahsilat oluştur**

```csharp
private oAuth2 _oAuth2;
private MixedReceiptsMainManager _manager;
private MixedReceiptsMain _dummyMixedReceiptsMain;
_manager = new MixedReceiptsMainManager(_oAuth2);
_dummyMixedReceiptsMain = new MixedReceiptsMain()
            {
                IslemTarihi = new DateTime(2015, 10, 27),
                KasaKod = "01",
                BelgeNo = "56565656",
                CariKod = "00001",
                DOVTIP = 0,
                Tahsilats = new List<MixedReceipts>()
                {
                    new MixedReceipts()
                    {
                        Aciklama = "a",
                        SozKodu = "NAKIT",
                        Tutar = 15,
                        PLA_KODU = "1",
                        Referans_Kodu = "1",
                        TaksitSay = 0,
                        DovTutar = 3,
                        Kur = 4,
                        Proje_Kodu = "1"
                    },
                    new MixedReceipts()
                    {
                        Aciklama = "b",
                        SozKodu = "NAKIT",
                        Tutar = 20,
                        PLA_KODU = "1",
                        Referans_Kodu = "1",
                        TaksitSay = 0,
                        DovTutar = 6,
                        Kur = 8,
                        Proje_Kodu = "1"
                    }
                }
            };
 
var postResult = _manager.PostInternal(_dummyMixedReceiptsMain);
```

**Hızlı Tahsilat Sil**

```csharp
private oAuth2 _oAuth2;
private MixedReceiptsMainManager _manager;
private MixedReceiptsMain _dummyMixedReceiptsMain;
_manager = new MixedReceiptsMainManager(_oAuth2);
_dummyMixedReceiptsMain = new MixedReceiptsMain()
            {
                IslemTarihi = new DateTime(2015, 10, 27),
                KasaKod = "1",
                BelgeNo = "56565656",
                CariKod = "00001",
                DOVTIP = 0,
                Tahsilats = new List<MixedReceipts>()
                {
                    new MixedReceipts()
                    {
                        Aciklama = "a",
                        SozKodu = "NAKIT",
                        Tutar = 15,
                        PLA_KODU = "1",
                        Referans_Kodu = "1",
                        TaksitSay = 0,
                        DovTutar = 3,
                        Kur = 4,
                        Proje_Kodu = "1"
                    },
                    new MixedReceipts()
                    {
                        Aciklama = "b",
                        SozKodu = "NAKIT",
                        Tutar = 20,
                        PLA_KODU = "1",
                        Referans_Kodu = "1",
                        TaksitSay = 0,
                        DovTutar = 6,
                        Kur = 8,
                        Proje_Kodu = "1"
                    }
                }
            };
 var deleteResult = _manager.DeleteInternalByParam(new MixedReceiptsMainParam()
            {
                KasaKod = _dummyMixedReceiptsMain.KasaKod,
                BelgeNo = _dummyMixedReceiptsMain.BelgeNo,
                CariKod = _dummyMixedReceiptsMain.CariKod,
                IslemTarihi = _dummyMixedReceiptsMain.IslemTarihi.Value
            });
#region Id ile silme
 
  var deleteResult = _manager.DeleteInternalById(string.Format("{0};{1};{2};{3}", _dummyMixedReceiptsMain.KasaKod, _dummyMixedReceiptsMain.BelgeNo,
                _dummyMixedReceiptsMain.CariKod, _dummyMixedReceiptsMain.IslemTarihi.Value.ToString("yyyy-MM-dd")));
#endregion
```

**Hızlı Tahsilat Getir**

```
private oAuth2 _oAuth2;
private MixedReceiptsMainManager _manager;
private MixedReceiptsMain _dummyMixedReceiptsMain;
_manager = new MixedReceiptsMainManager(_oAuth2);
 
// KasaKod;BelgeNo;CariKod;IslemTarihi
var result = _manager.GetInternalById("01;45454545;00001;2015-10-27"); 
var data = result.Data;
#region Parametre ile getirme
 var result = _manager.GetInternalByParam(new MixedReceiptsMainParam()
            {
                BelgeNo = "45454545",
                CariKod = "00001",
                IslemTarihi = new DateTime(2015, 10, 27),
                KasaKod = "01"
            });
#endregion
```

### Kasa

**Kasa Fatura Kaydı**

```
SafeDepositsManager _maneger2 = new SafeDepositsManager(_oAuth2);
 
SafeDeposits kasa = new SafeDeposits();
 
kasa.KsMas_Kod = "00";      //Kasa Kodu
kasa.IO = "G";
kasa.Tip = "F";
kasa.Kod = "100-01-002";    //Muhasebe Karsilik Kodu
kasa.Fisno = "Q00000000000006";
kasa.Tutar = 500;
kasa.Kdv_Dahil = "E";
kasa.Kdv_Oran = 18;
kasa.ReferansKodu = "01";
kasa.Proje_Kodu = "1";
kasa.DovizTipi = 1;
kasa.DovizTut = 10;
kasa.Tarih = DateTime.Today;
 
var result = _maneger2.PostInternal(kasa);
```

### Fatura

**Fatura Kaydı**

```csharp
_manager = new MixedReceiptsMainManager(_oAuth2);  //_oAuth2 token bilgisi
 
ItemSlipsManager _manager = new ItemSlipsManager(_oAuth2);
ItemSlips slips = new ItemSlips();
slips.FaturaTip = JTFaturaTip.ftAFat;
slips.SeriliHesapla = false;
 
slips.FatUst = new ItemSlipsHeader
{
    CariKod = "1",
    Tarih = DateTime.Now,               
    TIPI = JTFaturaTipi.ft_Acik,
    KDV_DAHILMI = false,
    Tip = JTFaturaTip.ftAFat
};
 
slips.Kalems = new List<ItemSlipLines>();
 
slips.Kalems.Add(new ItemSlipLines
{
    StokKodu = "1",
    STra_NF = 5,
    STra_BF = 5,
    DEPO_KODU = 2,
    STra_GCMIK = 5,
});
 
var RESULT = _manager.PostInternal(slips);
```

### SUSK 

**SUSK Kaydı**

```
 FinishedGoodsReceiptWChangesManager _manager = new FinishedGoodsReceiptWChangesManager(_oAuth2);
 
            FinishedGoodsReceiptWChanges susk = new FinishedGoodsReceiptWChanges();
 
  
            //Seri bilgi girişi için yorum satırlarındaki kod parçası kullanılabilir.
            //susk.Seri = new List<ItemSlipLineSeries>();
                         
 
            ////    susk.Seri.Add(new ItemSlipLineSeries
            ////    {
            ////        Seri1 = "SERI1_1",
            ////        Seri2 = "SERI1_2",
            ////        Aciklama1 = "aciklama1",
            ////        Aciklama2 = "aciklama2",
            ////        Miktar = 20
            ////    });
 
                susk.UretSon_FisNo = "Z00000000000037";
                susk.UretSon_Mamul = "ZBUZDOLABILACI1000";
                susk.UretSon_Depo = 2; //giriş depo
                susk.I_Yedek1 = 1;   //çıkış depo
                susk.UretSon_Miktar = 20;
                susk.UretSon_Tarih = DateTime.Now;
                 
                susk.Aciklama = "mamul açıklama";
                susk.Proje_Kodu = "1";
                susk.BAKIYE_DEPO = 0;  //0:verilen_depo 1:tüm_depolar
 
 
                 
                var result = _manager.ReceiptProduce(susk); //Post işlemi
                string a=result.Serialize();
                textBox1.Text = result.ErrorDesc;
```
