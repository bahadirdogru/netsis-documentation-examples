---
title: İstemci kütüphanesi
url: https://netsis.bahadirdogru.com/rest/istemci-kutuphanesi/
---

# İstemci kütüphanesi (NetOpenX.Rest.Client)

Logo'nun .NET istemcisi `NetOpenX.Rest.Client.dll`, her kaynak için bir **yönetici** (`...Manager`) sınıfı sunar. Yöneticiler `oAuth2` nesnesiyle oluşturulur ve `TResult<T>` döndürür. Her yöntemin bir `Async` karşılığı da vardır.

```csharp
var m = new ItemSlipsManager(oAuth2);          // ya da token.CreateManager<ItemSlipsManager>()
TResult<ItemSlips> r = m.GetInternalById("ftSFat;ABC2024000000123;120-01-001");
if (r.IsSuccessful) Kullan(r.Data); else Log(r.ErrorDesc + " " + r.ErrorCode);
```

## TResult&lt;T&gt;

| Alan | Anlam |
|------|-------|
| `IsSuccessful` | İşlem başarılı mı |
| `Data` | Dönen veri |
| `ErrorDesc` | Hata açıklaması |
| `ErrorCode` | Hata kodu |
| `Serialize()` | JSON'a çevir |

Kütüphane: .NET Framework 4.x, bağımlılıklar `Newtonsoft.Json`, `System.Net.Http.Formatting`. XML belgesindeki açıklamalar çoğunlukla boştur; aşağıdaki liste imzalardan ve Logo'nun örnek projelerinden derlenmiştir.

## Ortak CRUD yöntemleri

| Yöntem | HTTP |
|--------|------|
| `GetInternal(SelectFilter)` | `GET api/v2/<Kaynak>?...` |
| `GetInternalById(id)` | `GET api/v2/<Kaynak>/{id}` |
| `GetInternalByParam(param)` | `POST api/v2/<Kaynak>/Details` |
| `PostInternal(model)` | `POST api/v2/<Kaynak>` |
| `PutInternal(id, model)` | `PUT api/v2/<Kaynak>/{id}` |
| `DeleteInternalById(id)` | `DELETE api/v2/<Kaynak>/{id}` |
| `DeleteInternalByParam(param)` | `POST api/v2/<Kaynak>/Delete` |

## Yöneticiler

### Kartlar ve hareketler

| Yönetici | Yöntemler | Amaç |
|----------|-----------|------|
| `ARPsManager` | CRUD, `CustomerRisk(ARPsRiskParam)`, `CustomCustomerMainInfo(SelectFilter)` | Cari kartı |
| `ARPTransactionsManager` | CRUD (`id` int) | Cari hareket |
| `ARPsAgingManager` | `SettlementByAging(ARPsAging { CariKod })` | Yaşlandırmalı hesap kapatma |
| `ItemsManager` | `PostInternal`, `PutInternal`, `CustomStockMainInfo(SelectFilter)` | Stok kartı (`PutInternal` ile fiyat güncelleme) |
| `ItemTransactionsManager` | `PostInternal` | Stok hareketi |
| `GLAccountsManager` | CRUD | Hesap planı |
| `ForExsManager` | CRUD (`id` int), `RefreshExRatesInternal(string date)` | Döviz |
| `ExRatesManager` | `PostInternal` | Kur |
| `ProjectManager`, `CompaniesManager` | `GetInternal`, `GetInternalById` | Proje, şirket |

### Belgeler

| Yönetici | Yöntemler | Amaç |
|----------|-----------|------|
| `ItemSlipsManager` | `PostInternal`, `GetInternalById`, `GetInternal(JTFaturaTip)`, `DeleteInternalById`, `Calculate`, `GetHtmlItemSlips(ItemSlipsCodeParam)`, `NewNumber`, `NewEItemSlipsNumber`, `NewEArchiveNumber`, `NewEWaybillNumber`, `IncrementNumber`, `IrsToFat(ItemSlipsDetailParam)`, `SiparisToIrsFat(ItemSlipsDetailParam)`, `ChangeNumber(ItemSlipsChangeNumberParam)`, `ChangeCode(ItemSlipsChangeCodeParam)`, `SendEMailDesign`, `CopyItemSlip`, `OrderRevision`, `ContractsOpenPrice(int)` | Fatura, irsaliye, sipariş, teklif, ambar fişi |
| `BatchInvoicingManager` | `PostInternal(BatchInvoicing)` | Toplu faturalama |
| `DemandOfferManager` | `NewNumber`, `ConvertToOffer`, `ConvertToOrder` | Talep → teklif → sipariş |
| `EDocumentManager` | bkz. aşağı | E-fatura, e-arşiv, e-irsaliye |
| `CheckAndPNotesMainManager` | `GetInternal(JTCekSenType, SelectFilter)`, `PostInternal`, `GetInternalById(string)`, `GetInternalByParam`, `DeleteInternalById`, `DeleteInternalByParam` | Çek/senet bordrosu |
| `CheckAndPNoteStatementsManager` | `DebitCheckPNotesStatementPayment`, `CheckPNotesStatementPayment` | Çek/senet ödeme ve tahsilat |
| `BankRemittanceTransferManager` | `PostInternal`, `PutInternal`, `DeleteInternalById` | Banka havale/EFT/virman |
| `SafeDepositsManager` | `PostInternal`, `GetInternal`, `DeleteInternalById`, `LastBalance(string)` | Kasa |
| `MixedReceiptsMainManager` | `PostInternal`, `GetInternalById`, `GetInternalByParam`, `DeleteInternalById`, `DeleteInternalByParam` | Hızlı tahsilat |
| `StatementsHeaderManager` | `PostInternal`, `GetInternal`, `PutInternal`, `DeleteInternalById` | Dekont |
| `GLSlipsManager` | CRUD | Muhasebe fişi |
| `ProducerReceiptManager` | `ReadLastNumber(string)` | Müstahsil |
| `ContractsMainManager` | `GetInternalById(string)` | Bağlantı/sözleşme |
| `DynamicWarehsSlipsManager` | `PostInternal` | Dinamik depo |

### Üretim ve planlama

| Yönetici | Yöntemler | Amaç |
|----------|-----------|------|
| `ProductionOrderManager` | `PostInternal(JIsEmri)` | İş emri |
| `ProductionOrderFromBOMManager` | `PrepareProductionOrderItemList`, `GenerateProductionOrderItems` | Reçeteden iş emri |
| `BOMManager` | `PostInternal(BOM)` | Reçete |
| `FinishedGoodsReceiptWChangesManager` | `ReceiptProduce`, `Save`, `GetInternal`, `GetInternalById`, `DeleteInternalById` | Serbest üretim (SUSK) |
| `MrpManager` | `GenerateRequirementPlan`, `MaterialRequirementsPlanning`, `PrepareRequisitionBalancing`, `SaveRequisitionBalancing` | MRP, talep dengeleme |
| `PlanningRecordManager` | `PostInternal`, `PutInternal`, `GetItemPlanningRecord`, `GetCustomerSupplierItemPlanningRecord`, `GetCurAccPlanningRecord`, `Delete…PlanningRecord` | Stok planlama parametreleri |
| `ProcessControlManager` | `PostInternal`, `GetInternal`, `GetInternalById`, `PutInternal` | Proses kontrol |
| `ProductMaterialCostManager` | `GenerateProductMaterialCosts` | Ürün malzeme maliyeti |

### Şirket ve sistem

| Yönetici | Yöntemler | Amaç |
|----------|-----------|------|
| `CompanyManager` | `ArpsBalanceExchangeDiff`, `MontlyVoucherTransfer`, `AccountTransfer`, `ExecuteOpenRecipeAnalysis`, `BringBalance`, `ArpsMovementControl`, `ChangeArpsCode`, `SendEmail`, `ChangeItemSlipNumber`, `ExecuteVisualReportDraft`, `RecipeStockLinkCreate`, `StockMotionCheck`, `StockCodeChange`, `JournalCheck`, `ExecuteReport`, `SetModuleProcessType` | Muhasebe/cari toplu işlemler, kontroller, raporlar |
| `PrintManager` | `ItemSlipsPrinting`, `GLSlipsPrinting`, `CheckAndPNotesMainPrinting`, `StatementsHeaderPrinting`, `SafeDepositsPrinting`, `ItemSlipsItemsBatchBarcodePrinting`, `ItemSlipsItemBarcodePrinting` | PDF basım, barkod |
| `QueryManager` | `GetInternal(string sql)`, `PostInternal(QueryParam, bool)` | Ham SQL ([dikkat](/rest/guvenlik/)) |
| `OperationsManager` | `Ping` | Sağlık |
| `RequestManager` | `Method`, `Path`, `GetResult()` | Ham HTTP |
| `WorkFlowManager`, `PublicManager`, `LoginManager` | | İş akışı, anonim uçlar, giriş |

## Parametre modelleri

### CompanyManager

| Yöntem | Parametre | Alanlar |
|--------|-----------|---------|
| `ArpsBalanceExchangeDiff` | `ARPsExRatesInfo` | `CariKodu1`, `CariKodu2`, `HareketTipbas`, `HareketTipson`, `TarihAraligi`, `KurTarihi`, `DovTipBas`, `DovTipSon`, `ReferansKodu`, `BorcAlacak`, `DovizCevrimTipi`, `SifirBakiyeDahilMi`, `SubeKirilimli`, `SadeceDovizliCariler`, `DovizBakiyesiSifirOlanlarDahil`, `ProjeKoduKirilimli`, `BasTarih`, `BitTarih` |
| `MontlyVoucherTransfer` | `MontlyVoucherTransferParam` | `KaynakFisNo`, `KaynakAy`, `HedefAy`, `HedefFisNo`, `AktEskiFisSilinsin` (**kaynak fişi siler**), `AktYeniAcik`, `DegisecekAcik`, `EvrakTarHedefTarOlsun` |
| `AccountTransfer` | `AccountTransferParam` | `AktarimTuru` (`JTMuhAktTuru`), `AktBasTarih`, `AktBitTarih`, `AktIlkFisNo`, `AktSonFisNo`, `AktSubeDahil`, `EskiMuavin`, `YeniMuavin` |
| `ChangeArpsCode` | `ChangeArpsCodeParam` | `EskiKod`, `YeniKod`, `VirmanYapilsin`, `VirmanSonrasiEskiKodSilinsin` |
| `StockCodeChange` | `StockCodeChangeParam` | `EskiKod`, `YeniKod`, `VirmanYapilsin`, `YapKodGuncelle`, `VirmanSonrasiEskiKodSilinsin` |
| `ChangeItemSlipNumber` | `ChangeItemSlipNumberParam` | `AyKodu`, `FisNumara`, `YeniFisNumara` (yevmiye no) |
| `ExecuteReport` | `ExecuteReportParam` | `ModuleNo`, `ProgramNo`, `DesignNo`, `ReportResultFileType` (`rsctExcel`) |
| `ExecuteVisualReportDraft` | | `TaslakId`, `DosyaYolu` |
| `SendEmail` | `SendEmailParam` | `EMailTO`, `EMailBody`, `EMailKonu` (gerçek e-posta gönderir) |
| `SetModuleProcessType` | | Modül işlem tipi (9.0.40 ile geldi). Belgede `OtomatikIslemTipiGetir = false` ile birlikte kullanılır |

### EDocumentManager

| Yöntem | Parametre | Alanlar |
|--------|-----------|---------|
| `PostInternal` | `EDocument` | `Tip`, `BelgeNo`, `DizaynKontrol`, `DovizliOlustur` (taslak) |
| `SendEDocument` | `EDocumentSendParam` | `EDocumentType`, `DocumentNumber`, `CustomerCode`, `DocumentType` |
| `ShowEDocument` | `EDocumentShowParam` | `EDocumentType`, `GIBDocumentNumber`, `DocumentBoxType`, `HtmlPath`, `EnvelopeId` |
| `EDocumentResponse` | `EDocumentResponseParam` | `GIBDocumentNumber`, `EDocumentType`, `ResponseType` (`ytKabul`…) |
| `EDocumentItemResponse` | `EDocumentItemResponseParam` | `GIBDocumentNumber`, `EDocumentType`, `ItemResponses` (`YanitKalemSiraNo`, `YanitRetMiktar`, `YanitRetOlcuBr`, `YanitTeslimMiktar`, `YanitTeslimOlcuBr`, `YanitKalemAciklama`) |
| `EArchiveCancellationInvoice` | `EArchiveCancelInvoiceParam` | `DocumentNumber` |
| `EDocCurrentUpdate` | — | E-belge cari bilgilerini güncelle |

### ItemSlips ek modelleri

- **E-irsaliye taşıma bilgisi** `ItemSlips.EIrsEkBilgi` (`EWaybillInfo`): `PLAKA`, `TASIYICIVKN`, `TASIYICIADI`, `TASIYICIILCE`, `TASIYICIIL`, `TASIYICIULKE`, `TASIYICIPOSTAKODU`, `SOFOR1ADI`, `SOFOR1SOYADI`, `SOFOR1ACIKLAMA`, `SOFOR1TCKN`, `SEVKTAR`, `DORSEPLAKA1`, `DORSEPLAKA2`. Numara: `NewEWaybillNumber(ItemSlipsCodeParam { DocumentType = ftSIrs, Code = "EIR" })`.
- **Hal faturası:** `ItemSlipsHeader.HalFaturasi = JTHalFatTipi.hftHalKomisyon`; masraflar `ItemSlips.HalFaturaMasraflari` (`FruitVegMarketBillInfo`): komisyon, navlun, hammaliye, bağ-tevkifat, rüsum. Kalemde `KunyeNo` gerekir.
- **Sipariş revizyonu:** `OrderRevisionParam { ItemSlip, RevisionOrderNumber, DeliverStartingDate }`.
- **Kopyalama:** `CopyItemSlipParam { DocumentType, OldDocNumber, NewDocNumber, NewGIBDocNumber, DomesticTransaction }`.
- **Barkod basımı:** `ItemSlipsItemsBatchBarcodePrintParam { DocumentNumber, DocumentType, DesignCode, PrintCount }`; tek kalem için `ItemSlipsItemBarcodePrintParam { …, ItemNumber }`. Görsel dizaynsa PDF, değilse metin döner.
- **Kalem çeşitlendirme:** `ItemSlipLinesAssortment`.

### Talep → teklif → sipariş

```csharp
var d = new DemandOfferManager(oAuth2);
var no = d.NewNumber(new ItemSlipsCodeParam { DocumentType = JTFaturaTip.ftSatTeklif, Code = "T" });
d.ConvertToOffer(new ConvertToOfferParam {
    KaynakBelgeTipi = JTFaturaTip.ftSatTalep,
    Parametreler = new DemandOffer { BelgeTipi = JTFaturaTip.ftSatTeklif, BelgeNo = no.Data },
    Belgeler = new List<DemandOfferConversionDocument> {
        new DemandOfferConversionDocument { DocumentNumber = "000000000000025", CurrentCode = "120-01-001", ItemOrderNo = 1 } }
});
```

### Üretim

- **Reçete** `BOM`: `PrmMamulKodu`, `ReceteToplami`, `BOMItemList` (`OpNo`, `Opr_Bil` = `B` bileşen / `O` operasyon, `Ham_Kodu`, `Miktar`, `SonOperasyon`).
- **İş emri** `JIsEmri`: `IsEmriNo`, `Tarih`, `StokKodu`, `Miktar`, `SipKont`, `DepoKodu`, `CikisDepoKodu`, `TeslimTarihi`, `Kapali`.
- **Reçeteden iş emri:** `ProductionOrderFromBOMParam { ProductionOrderNumber }` → `PrepareProductionOrderItemList` → satırlarda `Secim = true` → `GenerateProductionOrderItems`.
- **MRP** `JMrp`: `BASTAR`, `BITTAR`, `Detayli`, `BakKont`, `GnlYapKodDestek`, `YapKodKontrol`, `IsEmrHaricNoBas/Bit`, `IsEmriKont`, `MamKont`, `MinStokBak`, `SipKont`.
- **Gereksinim planı** `JMrpGereksinimPlanOlusturPrm`: `BaslangicTarihi`, `BitisTarihi`, `BazTarihi`, `PlanlamaTipi`, `UrunTipi`, `SadeceOnayliSiparisler`, `SiparisBazindaAyrim`, `FabrikaKodu`…
- **Talep dengeleme** `RequisitionBalancingPrm` → `PrepareRequisitionBalancing` → sonuçlarda `Secim` → `SaveRequisitionBalancing` (sipariş üretir).
- **Proses kontrol** `ProcessControl`: `TanimTipi` (`pkIstasyon`), `TanimKodu`, `GrupKodu`, `RevizyonNo`, `Tarih`, `PersonelId`, `ProcessControlMeasurementList` (`OlcumKodu`, `OlcumDegeri`, `OlcumSiraNo`).
- **Stok planlama** `PlanningRecord`: `Stok_Kodu`, `SIPARISKARSILAMA`, `SIPARISTAKIP`, `PlanlamaTipi`, `TEDARIKCITERCIH`, `REZERV_BAK_TAKIP`, `ONEMSIZ_STOK`, `SIPARIS_ONAYLI`, `REC_ISEM_OLUS` (tek harfli kodlar).
- **Malzeme maliyeti** `GenerateProductMaterialCostsParam`: `StartDate`, `EndDate`, `PhaseCount`, `ItemCode`, `Code1..5`, `GroupCode`, `IncludingBranches`, `SQLWhereClause`.

### Banka ve çek/senet ödemesi

- **Havale/EFT** `BankRemittanceTransfer`: `IslemTipi` (`tbBankaHvl`, `tbVirman`), `GelGidBA` (`A` gönderilen), `NetHesKodu`, `KarsiHesKod`, `Tutar`, `Sube_Kodu`, `PlasiyerKodu`, `Aciklama`.
- **Borç çeki ödeme** `DebitCheckPNotesStatementPaymentParam`: `CheckPNoteType` (`csBCEK`), `CheckAndPNoteStatementData` (`SC_NO`, `Seri`, `C_M` = `B` borç, `Aciklama`, `Banka_Kodu`, `Dekont_Tarihi`, `Islem_Tarihi`, `DovizTipi`). Tahsilat için `CheckPNotesStatementPaymentParam` ve `VirmanHesapKodu`.

## Yıkıcı yöntemler

Aşağıdakiler veriyi siler, kodu değiştirir, toplu kayıt üretir ya da dış sisteme gönderir. Yalnızca test şirketinde deneyin:

- Silme: tüm `DeleteInternal…` yöntemleri.
- Muhasebe: `MontlyVoucherTransfer` (`AktEskiFisSilinsin`), `AccountTransfer`, `ChangeArpsCode`, `StockCodeChange`.
- Toplu: `SettlementByAging`, `MaterialRequirementsPlanning`, `GenerateRequirementPlan`, `SaveRequisitionBalancing`, `BatchInvoicing`.
- Dış etki: `SendEmail`, `SendEDocument`, `EDocumentResponse`, `EArchiveCancellationInvoice`.
- Ham SQL: `QueryManager.PostInternal`.
