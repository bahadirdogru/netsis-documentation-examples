---
title: "NetOpenX Rest - Kütüphane"
source: https://dys.logo.cloud/external?cid=803cd896-76fe-4472-9cc8-88f3ad12e44b&link=61756e25-5103-4633-9636-a876f9b901ad&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: index.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NetOpenX Rest - Kütüphane](https://dys.logo.cloud/external?cid=803cd896-76fe-4472-9cc8-88f3ad12e44b&link=61756e25-5103-4633-9636-a876f9b901ad&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NetOpenX Rest - Kütüphane

**NetOpenX Rest Yardım Sayfası**

Rest Yardım Bilgilendirme

API linklerine erişebilmek için [NetOpenX REST](index.md) servisinin öndeğer bilgiler ile kurulu olması gerekmektedir.

**Introduction**

Döküman ve örnekler için , NetOpenX Rest sayfasını ziyaret ediniz.

# NetOpenX Rest Help Page

## Company (Sirket)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/Company](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Company) | 
 |
| [GET api/v2/services/Company](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Company) | 

 |
| [POST api/v2/Company/ExecuteReport](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ExecuteReport) | 

Executes report design by given ExecuteReportParam information,returns the file format of the report result as byte array.

 |
| [POST api/v2/Company/ExecuteOpenRecipeAnalysis](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ExecuteOpenRecipeAnalysis) | 

Executes Open BOM Analysis by given ExecuteOpenRecipeAnalysisParam infomation, returns the execute is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/BringBalance](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-BringBalance) | 

Returns the balance information about by given ITemBalance infomation, returns an integer value.

 |
| [POST api/v2/Company/ArpsMovementControl](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ArpsMovementControl) | 

Executes Arps Movement Control by given ArpsMovementControlParam infomation, returns the execute is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/ChangeArpsCode](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ChangeArpsCode) | 

Changes an ARPS Code to new ARPS Code by given ChangeArpsCodeParam infomation. returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/SendEmail](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-SendEmail) | 

Sends An Email by given SendEmailParam infomation. returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/ChangeItemSlipNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ChangeItemSlipNumber) | 

Changes an Items's Slip number to new number by given ChangeItemSlipNumberParam infomation. returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/ExecuteVisualReportDraft](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ExecuteVisualReportDraft) | 

Executes Visual Report Draft by given ExecuteVisualReportDraftParam information, returns the string value.

 |
| [POST api/v2/Company/RecipeStockLinkCreate](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-RecipeStockLinkCreate) | 

Maintain BOM/Item Relations. This Process takes no parameter information, returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/StockMotionCheck](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-StockMotionCheck) | 

Executes Stock Motion Control by given StockMotionCheckParam infomation, returns the execute is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/StockCodeChange](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-StockCodeChange) | 

Changes an Stock's number to new number by given StockCodeChangeParam infomation. returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/JournalCheck](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-JournalCheck) | 

Check the Voucher Process by given JournalCheckParam. returns the process is succesful or unsuccesful as true or false.

 |
| [POST api/v2/Company/ArpsBalanceExchangeDiff](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-ArpsBalanceExchangeDiff) | 

Executes Exchange differences between Arps Balances. Returns the process is succesful or not as true or false.

 |
| [POST api/v2/Company/MontlyVoucherTransfer](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-MontlyVoucherTransfer) | 

Executes Voucher transfer from month to other month. Returns the process is succesful or not as true or false.

 |
| [POST api/v2/Company/AccountTransfer](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-AccountTransfer) | 

Transfer between accounts. Returns the process is succesful or not as true or false.

 |
| [POST api/v2/Company/SetModuleProcessType](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Company-SetModuleProcessType) | 

No documentation available.

 |

## CheckAndPNoteStatements (DekCekSen)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/CheckAndPNoteStatements](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-CheckAndPNoteStatements) | 
Read the model scheme of CheckAndPNoteStatements as string in JSON format.

 |
| [GET api/v2/services/CheckAndPNoteStatements](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-CheckAndPNoteStatements) | 

Read the API scheme of CheckAndPNoteStatements controller without the definitions of models as string in JSON format.

 |
| [POST api/v2/CheckAndPNoteStatements/CheckPNotesStatementPayment](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-CheckAndPNoteStatements-CheckPNotesStatementPayment) | 

Execute Check/P.Note/Statement payment operation by given restParam.

 |
| [POST api/v2/CheckAndPNoteStatements/DebitCheckPNotesStatementPayment](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-CheckAndPNoteStatements-DebitCheckPNotesStatementPayment) | 

Execute Debit Check/P.Note/Statement payment operation by given restParam.

 |

## FinishedGoodsReceiptWChanges (SerbestUSK)

| API | Description |
| --- | --- |
| [GET api/v2/FinishedGoodsReceiptWChanges](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-FinishedGoodsReceiptWChanges) | 
Read all ItemTransactions records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= UretSon\_FisNo ASC, sorts the result set by UretSon\_FisNo in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=UretSon\_FisNo, UretSon\_Tarih retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=UretSon\_FisNo='A00000000000001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/FinishedGoodsReceiptWChanges/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-FinishedGoodsReceiptWChanges-id) | 

Read a single FinishedGoodsReceiptWChanges record by given document number. (FisYukle)

 |
| [DELETE api/v2/FinishedGoodsReceiptWChanges/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-FinishedGoodsReceiptWChanges-id) | 

Delete an existent FinishedGoodsReceiptWChanges by UretSon\_FisNo.

 |
| [GET api/v2/definitions/FinishedGoodsReceiptWChanges](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-FinishedGoodsReceiptWChanges) | 

Read the model scheme of FinishedGoodsReceiptWChanges as string in JSON format.

 |
| [GET api/v2/services/FinishedGoodsReceiptWChanges](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-FinishedGoodsReceiptWChanges) | 

Read the API scheme of FinishedGoodsReceiptWChanges controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/FinishedGoodsReceiptWChanges/ReceiptProduce](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FinishedGoodsReceiptWChanges-ReceiptProduce) | 

Produce receipt for given restParam. (FisUret-Kaydet)

 |
| [POST api/v2/FinishedGoodsReceiptWChanges/Save](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FinishedGoodsReceiptWChanges-Save) | 

The last of the produced receipt is saved. (Kaydet)

 |
| [GET api/v2/FinishedGoodsReceiptWChanges/GetFromProductionOrder/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-FinishedGoodsReceiptWChanges-GetFromProductionOrder-id) | 

Getting data from work order number. (IsEmrindenGetir)

 |

## SafeDeposits (Kasa)

| API | Description |
| --- | --- |
| [GET api/v2/SafeDeposits](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-SafeDeposits) | 
Read all SafeDeposits records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=TUTAR ASC, sorts the result set by ISIM in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ACIKLAMA, FISNO retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=TUTAR='5' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/SafeDeposits/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-SafeDeposits-id) | 

Reads a single record by given ID.

 |
| [POST api/v2/SafeDeposits](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-SafeDeposits) | 

Create a new record by given SafeDeposits information.

 |
| [DELETE api/v2/SafeDeposits/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-SafeDeposits-id) | 

Delete an existent record by given ID.

 |
| [GET api/v2/definitions/SafeDeposits](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-SafeDeposits) | 

Read the model scheme of SafeDeposits as string in JSON format.

 |
| [GET api/v2/services/SafeDeposits](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-SafeDeposits) | 

Read the API scheme of SafeDeposits controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/SafeDeposits/LastBalance?id={id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-SafeDeposits-LastBalance_id) | 

Read the SafeDepositBalances infomation of the SafeDeposits by given ID. (KasaSonBakiye)

 |

## DynamicWarehsSlips (DinamikDepo)

| API | Description |
| --- | --- |
| [POST api/v2/DynamicWarehsSlips](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DynamicWarehsSlips) | 
Create a new DynamicWarehsSlips record by given DynamicWarehsSlips information.

 |
| [GET api/v2/definitions/DynamicWarehsSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-DynamicWarehsSlips) | 

Read the model scheme of DynamicWarehsSlips as string in JSON format.

 |
| [GET api/v2/services/DynamicWarehsSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-DynamicWarehsSlips) | 

Read the API scheme of DynamicWarehsSlips controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## QualityControls (KaliteKontrol)

| API | Description |
| --- | --- |
| [GET api/v2/QualityControls](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-QualityControls) | 
Read all Quality Control records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= KKNO ASC, sorts the result set by KKNO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=KKNO, KKDEPKOD retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=KKNO='A0000001' retrieves the result by applying SQL Where clause. ?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/QualityControls/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-QualityControls-id) | 

Read a single Quality Control record by given Quality Control Number.

 |
| [POST api/v2/QualityControls](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-QualityControls) | 

Create a new Quality Control record by given Quality Control information.

 |
| [PUT api/v2/QualityControls/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-QualityControls-id) | 

Update an existent record by given ID and Quality Control information.

 |
| [DELETE api/v2/QualityControls/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-QualityControls-id) | 

Delete an existent Quality Control by given ID.

 |
| [GET api/v2/definitions/QualityControls](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-QualityControls) | 

Read the model scheme of QualityControl as string in JSON format.

 |
| [GET api/v2/services/QualityControls](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-QualityControls) | 

Read the API scheme of QualityControl controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/QualityControls/DeleteQualityControlTransaction](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-QualityControls-DeleteQualityControlTransaction) | 

Delete an existent Quality Control Transaction of Quality Controlby given restParam.

 |
| [POST api/v2/QualityControls/DeleteQualityControlMeasurement](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-QualityControls-DeleteQualityControlMeasurement) | 

Delete an existent Quality Control Measuremen of Quality Control by given restParam.

 |

## ProductionOrder (IsEmri)

| API | Description |
| --- | --- |
| [GET api/v2/ProductionOrder](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProductionOrder) | 
No documentation available.

 |
| [GET api/v2/ProductionOrder/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProductionOrder-id) | 

No documentation available.

 |
| [POST api/v2/ProductionOrder](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductionOrder) | 

No documentation available.

 |
| [PUT api/v2/ProductionOrder/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ProductionOrder-id) | 

No documentation available.

 |
| [DELETE api/v2/ProductionOrder/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ProductionOrder-id) | 

No documentation available.

 |
| [GET api/v2/definitions/ProductionOrder](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProductionOrder) | 

No documentation available.

 |
| [GET api/v2/services/ProductionOrder](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProductionOrder) | 

No documentation available.

 |

## ProductionOrderFromBOM (RecetedenIsemri)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/ProductionOrderFromBOM](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProductionOrderFromBOM) | 
Read the model scheme of ProductionOrderFromBOM as string in JSON format.

 |
| [GET api/v2/services/ProductionOrderFromBOM](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProductionOrderFromBOM) | 

Read the API scheme of ProductionOrderFromBOM controller without the definitions of models as string in JSON format.

 |
| [POST api/v2/ProductionOrderFromBOM/PrepareProductionOrderItemList](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductionOrderFromBOM-PrepareProductionOrderItemList) | 

Prepares the list of production orders that can be created from the BOM of the product in the work order related to the given parameters.

 |
| [POST api/v2/ProductionOrderFromBOM/GenerateProductionOrderItems](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductionOrderFromBOM-GenerateProductionOrderItems) | 

Generates the production orders of the records whose selection value is true in the list of production orders that can be created in the given parameter.

 |

## Services

| API | Description |
| --- | --- |
| [GET api/v2/services](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services) | 
Read all the API scheme without the definitions of models.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/services/describe](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-describe) | 

Read all the API's controller scheme without the definitions of models.

 |

## BankAccountTransaction (BankaHesTraAna)

| API | Description |
| --- | --- |
| [GET api/v2/BankAccountTransaction](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BankAccountTransaction) | 
Read all Bank Account Transaction records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= NETHESKODU ASC, sorts the result set by NETHESKODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=NETHESKODU, OTOSIRANO retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=NETHESKODU='001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/BankAccountTransaction/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BankAccountTransaction-id) | 

Read a single Bank Account Transaction record by given OTOSIRANO.

 |
| [POST api/v2/BankAccountTransaction](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-BankAccountTransaction) | 

Create a new Bank Account Transaction record by given Bank Account Transaction information.

 |
| [PUT api/v2/BankAccountTransaction/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-BankAccountTransaction-id) | 

Update an existent record by given ID and Bank Account Transaction information.

 |
| [DELETE api/v2/BankAccountTransaction/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-BankAccountTransaction-id) | 

Delete an existent Bank Account Transaction by given ID.

 |
| [GET api/v2/definitions/BankAccountTransaction](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-BankAccountTransaction) | 

Read the model scheme of BankAccountTransaction as string in JSON format.

 |
| [GET api/v2/services/BankAccountTransaction](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-BankAccountTransaction) | 

Read the API scheme of BankAccountTransaction controller without the definitions of models as string in JSON format.

 |

## ProductionFlow (UAK)

| API | Description |
| --- | --- |
| [GET api/v2/ProductionFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProductionFlow) | 
Read all ProductionFlow records. Additional query parameters : limit, offset, sort, fields, first, last, q, expandLevel.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=ISEMRINO ASC, sorts the result set by ISEMRINO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=OPSIRANO, OPKODU retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?expandLevel=full also includes definitions of models.  
  
?q=ISEMRINO='000000000000001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ProductionFlow/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProductionFlow-id) | 

Read a single ProductionFlow record by given ID.

 |
| [POST api/v2/ProductionFlow](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductionFlow) | 

Create a new ProductionFlow record by given ProductionFlow information.

 |
| [DELETE api/v2/ProductionFlow/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ProductionFlow-id) | 

Delete an existent ProductionFlow record by given ID.

 |
| [GET api/v2/definitions/ProductionFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProductionFlow) | 

Read the model scheme of ProductionFlow as string in JSON format.

 |
| [GET api/v2/services/ProductionFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProductionFlow) | 

Read the API scheme of ProductionFlow controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/ProductionFlow/ProductionFlowToFinishedGoodsReceipt](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductionFlow-ProductionFlowToFinishedGoodsReceipt) | 

Creates FinishedGoodsReceipts from ProductionFlow by given FinishedGoodsReceiptParam information

 |

## FinishedGoodsReceipt (Uretim)

| API | Description |
| --- | --- |
| [GET api/v2/FinishedGoodsReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-FinishedGoodsReceipt) | 
Read all ItemTransactions records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= UretSon\_FisNo ASC, sorts the result set by UretSon\_FisNo in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=UretSon\_FisNo, UretSon\_Tarih retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=UretSon\_FisNo='A00000000000001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/FinishedGoodsReceipt/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-FinishedGoodsReceipt-id) | 

Read a single FinishedGoodsReceiptWChanges record by given document number. (FisYukle)

 |
| [POST api/v2/FinishedGoodsReceipt](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FinishedGoodsReceipt) | 

No documentation available.

 |
| [DELETE api/v2/FinishedGoodsReceipt/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-FinishedGoodsReceipt-id) | 

Delete an existent FinishedGoodsReceipt by INCKEYNO.

 |
| [GET api/v2/definitions/FinishedGoodsReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-FinishedGoodsReceipt) | 

Read the model scheme of FinishedGoodsReceipt as string in JSON format.

 |
| [GET api/v2/services/FinishedGoodsReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-FinishedGoodsReceipt) | 

Read the API scheme of FinishedGoodsReceipt controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## ContractsMain (BaglantiAna)

| API | Description |
| --- | --- |
| [GET api/v2/ContractsMain/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ContractsMain-id) | 
Read a single ContractsMain record by ID.

 |
| [GET api/v2/definitions/ContractsMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ContractsMain) | 

Read the model scheme of BatchInvoicing as string in JSON format.

 |
| [GET api/v2/services/ContractsMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ContractsMain) | 

Read the API scheme of ContractsMain controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## DocumentLocking (BelgeKilitleme)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/DocumentLocking](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-DocumentLocking) | 
 |
| [GET api/v2/services/DocumentLocking](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-DocumentLocking) | 

 |
| [POST api/v2/DocumentLocking/GetProductionOrderLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-GetProductionOrderLocking) | 

Get a lock or unlocked information as ProductionOrderLocking of a production order document.

 |
| [POST api/v2/DocumentLocking/SaveProductionOrderLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-SaveProductionOrderLocking) | 

Save a lock or unlocked information as ProductionOrderLocking of a production order document.

 |
| [POST api/v2/DocumentLocking/GetBOMLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-GetBOMLocking) | 

Get a lock or unlocked information as BOMLocking of a BOM document.

 |
| [POST api/v2/DocumentLocking/SaveBOMLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-SaveBOMLocking) | 

Save a lock or unlocked information as BOMLocking of a BOM document.

 |
| [POST api/v2/DocumentLocking/GetMaintenanceOrderLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-GetMaintenanceOrderLocking) | 

Get a lock or unlocked information as MaintenanceOrderLocking of a Maintenance Order document.

 |
| [POST api/v2/DocumentLocking/SaveMaintenanceOrderLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-SaveMaintenanceOrderLocking) | 

Save a lock or unlocked information as MaintenanceOrderLocking of a Maintenance Order document.

 |
| [POST api/v2/DocumentLocking/GetGLSlipsLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-GetGLSlipsLocking) | 

Get a lock or unlocked information as GLSlipsLocking of a GLSlips document.

 |
| [POST api/v2/DocumentLocking/SaveGLSlipsLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-SaveGLSlipsLocking) | 

Save a lock or unlocked information as GLSlipsLocking of a GLSlips document.

 |
| [POST api/v2/DocumentLocking/GetItemSlipsLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-GetItemSlipsLocking) | 

Get a lock or unlocked information as ItemSlipsLocking of a Item Slips document.

 |
| [POST api/v2/DocumentLocking/SaveItemSlipsLocking](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DocumentLocking-SaveItemSlipsLocking) | 

Save a lock or unlocked information as ItemSlipsLocking of a Item Slips document.

 |

## Project (Proje)

| API | Description |
| --- | --- |
| [GET api/v2/Project](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Project) | 
Read all Project records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= PAY\_1 ASC, sorts the result set by CARI\_KOD in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=PROJE\_KODU, PROJE\_ACIKLAMA retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=PROJE\_KODU='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/Project/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Project-id) | 

Reads a single record by given ID.

 |
| [POST api/v2/Project](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Project) | 

Create a new record by given Project information.

 |
| [PUT api/v2/Project/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-Project-id) | 

Update an existent Project record by given ID and ForExs information.

 |
| [DELETE api/v2/Project/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-Project-id) | 

Delete an existent record by given ID.

 |
| [GET api/v2/definitions/Project](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Project) | 

Read the model scheme of Project as string in JSON format.

 |
| [GET api/v2/services/Project](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Project) | 

Read the API scheme of Project controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## CompaniesInfo (Sirketler30)

| API | Description |
| --- | --- |
| [GET api/v2/CompaniesInfo](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-CompaniesInfo) | 
Read all CompanyInfo records.

 |
| [GET api/v2/CompaniesInfo/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-CompaniesInfo-id) | 

Read a Company Info record by given ID.

 |
| [GET api/v2/definitions/CompaniesInfo](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-CompaniesInfo) | 

Read the model scheme of CompaniesInfo as string in JSON format.

 |
| [GET api/v2/services/CompaniesInfo](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-CompaniesInfo) | 

Read the API scheme of CompaniesInfo controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## Items (Stok)

| API | Description |
| --- | --- |
| [GET api/v2/Items](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Items) | 
Read all Item records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=ISLETME\_KODU ASC, sorts the result set by CARI\_KOD in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=STOK\_KODU, STOK\_ADI retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=STOK\_KODU='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/Items/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Items-id) | 

Read an Item record with given ID.

 |
| [POST api/v2/Items](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Items) | 

Create a new Item by given Item information.

 |
| [PUT api/v2/Items/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-Items-id) | 

Update an existent Item record by given ID and Item information.

 |
| [DELETE api/v2/Items/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-Items-id) | 

Delete an existent Item record by fiven ID.

 |
| [GET api/v2/definitions/Items](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Items) | 

Read the model scheme of Items as string in JSON format.

 |
| [GET api/v2/services/Items](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Items) | 

Read the API scheme of Items controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/Items/PrimInfo](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Items-PrimInfo) | 

Read all ItemPrimInfos.

 |

## ItemSlips (Fatura)

| API | Description |
| --- | --- |
| [GET api/v2/ItemSlips/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemSlips-id) | 
Read an ItemSlip by ID

 |
| [GET api/v2/ItemSlips?docType={docType}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemSlips_docType) | 

Read all ItemSlip records by given ItemSlip document type.

 |
| [POST api/v2/ItemSlips](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips) | 

Create a new ItemSlip record by given ItemSlip information.

 |
| [DELETE api/v2/ItemSlips/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ItemSlips-id) | 

Delete an existent ItemSlip record by given ID.

 |
| [GET api/v2/definitions/ItemSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ItemSlips) | 

Read the model scheme of ItemSlips as string in JSON format.

 |
| [GET api/v2/services/ItemSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ItemSlips) | 

Read the API scheme of ItemSlips controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/ItemSlips/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-Details) | 

Read an ItemSlip record by given ItemSlipsParam information.

 |
| [POST api/v2/ItemSlips/Calculate](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-Calculate) | 

Read the calculated ItemSlips information. (HesaplamalariYap)

 |
| [POST api/v2/ItemSlips/Html](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-Html) | 

Read an ItemSlips record in HTML format. (GetFaturaHTML)

 |
| [POST api/v2/ItemSlips/NewEItemSlipsNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-NewEItemSlipsNumber) | 

Read a new E-ItemSlipsNumber. (YeniEfaturaNumara)

 |
| [POST api/v2/ItemSlips/NewNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-NewNumber) | 

Read a new ItemSlipsNumber. (YeniNumara)

 |
| [POST api/v2/ItemSlips/IncrementNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-IncrementNumber) | 

Increments the given document number by one. (NoArtiBir)

 |
| [POST api/v2/ItemSlips/IrsToFat](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-IrsToFat) | 

Convert a ftsIrs ItemSlips into an ItemSlip of given ItemSlip type.

 |
| [POST api/v2/ItemSlips/SiparisToIrsFat](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-SiparisToIrsFat) | 

Convert a ftSSip ItemSlips into an ItemSlip of given ItemSlip type.

 |
| [POST api/v2/ItemSlips/ChangeNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-ChangeNumber) | 

Change the CustomerCode and DocumentNumber of an ItemSlips record with given ItemSlipsChangeNumberParam. (NumaraDegistir)

 |
| [POST api/v2/ItemSlips/SendEMailDesign](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-SendEMailDesign) | 

Sends the ItemSlips information in a printable format to the according person as an e-mail with given design. (DizaynEpostaGonder)

 |
| [POST api/v2/ItemSlips/ChangeCode](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-ChangeCode) | 

Change the CustomerCode of an ItemSlips record with given ItemSlipsChangeCodeParam. (KodDegistir)

 |
| [POST api/v2/ItemSlips/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-Delete) | 

Delete an existent ItemSlip record by given ItemSlipsParam information.

 |
| [GET api/v2/ItemSlips/ContractsOpenPrice?restRecord={restRecord}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemSlips-ContractsOpenPrice_restRecord) | 

Read open price of contract record by given contract number as restParam.

 |
| [POST api/v2/ItemSlips/DeleteItemSlipLinkedWaybill](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-DeleteItemSlipLinkedWaybill) | 

Delete an existent ItemSlip record linked waybill by given ItemSlipsParam information.

 |
| [POST api/v2/ItemSlips/NewEWaybillNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-NewEWaybillNumber) | 

Read a new E-WaybillNumber. (YeniEIrsaliyeNumara)

 |
| [POST api/v2/ItemSlips/OrderRevision](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-OrderRevision) | 

Creates revisioned version of given order number.

 |
| [POST api/v2/ItemSlips/CopyItemSlip](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-CopyItemSlip) | 

Copies the given item slip.

 |
| [GET api/v2/ItemSlips/NewEArchiveNumber/{serialNo}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemSlips-NewEArchiveNumber-serialNo) | 

Gets new and next e-archive number with given serial no.

 |
| [POST api/v2/ItemSlips/TopluSiparisToIrsFat](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemSlips-TopluSiparisToIrsFat) | 

Converts batch orders to invoices or despatches by given OrderBatchInvoicingPrm information.

 |

## ARPsAging (Yaslandirma)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/ARPsAging](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ARPsAging) | 
 |
| [GET api/v2/services/ARPsAging](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ARPsAging) | 

 |
| [POST api/v2/ARPsAging/SettlementByAging](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ARPsAging-SettlementByAging) | 

Executes ArpsAging

 |

## Operations

| API | Description |
| --- | --- |
| [GET api/v2/revoke](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-revoke) | 
Logout from current session.

 |
| [GET api/v2/ping](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ping) | 

 |
| [GET api/v2/OpenTransaction](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-OpenTransaction) | 

Start a new transaction and read it's ID.

 |
| [GET api/v2/CommitTransaction?transId={transId}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-CommitTransaction_transId) | 

Commit the transaction with the given transId.

 |
| [GET api/v2/RollBackTransaction?transId={transId}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-RollBackTransaction_transId) | 

Rollback the transaction with the given transId.

 |

## ItemCounting (StokSayimGirisiAna)

| API | Description |
| --- | --- |
| [GET api/v2/ItemCounting/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCounting-id) | 
Read a single ItemCounting record by given ID.

 |
| [POST api/v2/ItemCounting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemCounting) | 

Create a new ItemCounting record by given ItemCounting information.

 |
| [DELETE api/v2/ItemCounting/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ItemCounting-id) | 

Delete a ItemCounting record by given ID.

 |
| [GET api/v2/definitions/ItemCounting](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ItemCounting) | 

 |
| [GET api/v2/services/ItemCounting](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ItemCounting) | 

 |
| [GET api/v2/ItemCounting/GetItemCountingRecords/{countingCode}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCounting-GetItemCountingRecords-countingCode) | 

Read ItemCountings record by given countingCode.

 |

## GLSlips (FisAna)

| API | Description |
| --- | --- |
| [GET api/v2/GLSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-GLSlips) | 
Read all GLSlips records. Additional query parameters : limit, offset, sort, fields, first, last, q, expandLevel.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=TUTAR ASC, sorts the result set by ISIM in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ACIKLAMA, FISNO retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=ACIKLAMA LIKE '%name%' retrieves the result by applying SQL Where clause.  
  
?expandLevel=full retrieves GLSlips information with its GLSlipLines list and GLSlipLines2 information.

 |
| [GET api/v2/GLSlips/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-GLSlips-id) | 

Reads a single record by given ID.

 |
| [POST api/v2/GLSlips](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-GLSlips) | 

Create a new record by given GLSlips information.

 |
| [DELETE api/v2/GLSlips/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-GLSlips-id) | 

Delete a single record by given ID.

 |
| [GET api/v2/definitions/GLSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-GLSlips) | 

Read the model scheme of GLSLips as string in JSON format.

 |
| [GET api/v2/services/GLSlips](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-GLSlips) | 

Read the API scheme of GLSLips controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/GLSlips/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-GLSlips-Details) | 

Read an existent GLSlips record by given GLSlipsParam information.

 |
| [POST api/v2/GLSlips/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-GLSlips-Delete) | 

Delete an existent GLSlips record by given GLSlipsParam information.

 |

## StatementsHeader (DekoMas)

| API | Description |
| --- | --- |
| [GET api/v2/StatementsHeader](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-StatementsHeader) | 
Read all StatementsHeaders with its Statements included.

 |
| [GET api/v2/StatementsHeader/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-StatementsHeader-id) | 

Read an existent StatementsHeader record and its Statements with given ID.

 |
| [POST api/v2/StatementsHeader](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-StatementsHeader) | 

Create a new StatementsHeader record by given StatementsHeader information.

 |
| [PUT api/v2/StatementsHeader/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-StatementsHeader-id) | 

Update an existent StatementsHeader record by given ID and StatementsHeader information.

 |
| [DELETE api/v2/StatementsHeader/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-StatementsHeader-id) | 

Delete an existent StatementsHeader and its Statements records by given ID.

 |
| [GET api/v2/definitions/StatementsHeader](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-StatementsHeader) | 

Read the model scheme of StatementsHeader as string in JSON format.

 |
| [GET api/v2/services/StatementsHeader](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-StatementsHeader) | 

Read the API scheme of StatementsHeader controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/StatementsHeader/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-StatementsHeader-Details) | 

Read an existent StatementsHeader and its Statements by given StatementsHeaderParam information.

 |
| [POST api/v2/StatementsHeader/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-StatementsHeader-Delete) | 

Delete an existent StatementsHeader and its Statements by given StatementsHeaderParam information.

 |
| [POST api/v2/StatementsHeader/NewNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-StatementsHeader-NewNumber) | 

Read a new StatementsHeaderNumber. (YeniNumaraAl)

 |

## ProductMaterialCost (UrunMalzemeMaliyet)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/ProductMaterialCost](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProductMaterialCost) | 
No documentation available.

 |
| [GET api/v2/services/ProductMaterialCost](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProductMaterialCost) | 

Read the API scheme of ProductMaterialCost controller without the definitions of models as string in JSON format.

 |
| [POST api/v2/ProductMaterialCost/GenerateProductMaterialCosts](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProductMaterialCost-GenerateProductMaterialCosts) | 

Generates Product Material Costs by given restParam as GenerateProductMaterialCostsParam.

 |

## BankRemittanceTransfer (BankaHavaleEftVirman)

| API | Description |
| --- | --- |
| [GET api/v2/BankRemittanceTransfer](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BankRemittanceTransfer) | 
Read all Bank Remittance Transfer records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= NETHESKODU ASC, sorts the result set by NETHESKODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=NETHESKODU, REFERANSNO retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=NETHESKODU='001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/BankRemittanceTransfer/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BankRemittanceTransfer-id) | 

Read a single Bank Remittance Transfer record by given operation type, coming going type, bank account number and referance number.

 |
| [POST api/v2/BankRemittanceTransfer](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-BankRemittanceTransfer) | 

Create a new Bank Remittance Transfer record by given Bank Remittance Transfer information.

 |
| [PUT api/v2/BankRemittanceTransfer/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-BankRemittanceTransfer-id) | 

Update an existent record by given operation type, coming going type, bank account number and referance number as parameter and Bank Account Transaction information.

 |
| [DELETE api/v2/BankRemittanceTransfer/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-BankRemittanceTransfer-id) | 

Delete an existent Bank Remittance Transfer by given operation type, coming going type, bank account number and referance number as parameter.

 |
| [GET api/v2/definitions/BankRemittanceTransfer](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-BankRemittanceTransfer) | 

Read the model scheme of BankRemittanceTransfer as string in JSON format.

 |
| [GET api/v2/services/BankRemittanceTransfer](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-BankRemittanceTransfer) | 

Read the API scheme of BankRemittanceTransfer controller without the definitions of models as string in JSON format.

 |

## DemandOffer (Talep-Teklif)

| API | Description |
| --- | --- |
| [POST api/v2/DemandOffer](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DemandOffer) | 
No documentation available.

 |
| [GET api/v2/definitions/DemandOffer](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-DemandOffer) | 

No documentation available.

 |
| [GET api/v2/services/DemandOffer](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-DemandOffer) | 

No documentation available.

 |
| [POST api/v2/DemandOffer/ConvertToOffer](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DemandOffer-ConvertToOffer) | 

Converts demand documents to offer.

 |
| [POST api/v2/DemandOffer/ConvertToOrder](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DemandOffer-ConvertToOrder) | 

Converts demand or offer documents to order.

 |
| [POST api/v2/DemandOffer/NewNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-DemandOffer-NewNumber) | 

Gets new document number.

 |

## FlexibleConfiguration (EsnekYapilandirma)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/FlexibleConfiguration](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-FlexibleConfiguration) | 
 |
| [GET api/v2/services/FlexibleConfiguration](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-FlexibleConfiguration) | 

 |
| [POST api/v2/FlexibleConfiguration/GetFlexibleConfigurations](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FlexibleConfiguration-GetFlexibleConfigurations) | 

It returns the flexible configuration codes and their features for items that comply with the constraints given in the parameters. 'AdvancedFilter' in the parameters can be used to restrict items. 'ItemCodeList' can be used to select only some of the restricted items. If 'ItemCodeList' is not filled, it is assumed that all restricted or unrestricted items are selected by default.

 |
| [DELETE api/v2/FlexibleConfiguration/DeleteFlexibleConfiguration?flexibleConfigurationCode={flexibleConfigurationCode}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-FlexibleConfiguration-DeleteFlexibleConfiguration_flexibleConfigurationCode) | 

Deletes the flexible configuration code record given as a parameter.

 |
| [POST api/v2/FlexibleConfiguration/DefineFlexibleConfigurationProperties](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FlexibleConfiguration-DefineFlexibleConfigurationProperties) | 

It performs properties matching for items that comply with the constraints given in the parameters. 'AdvancedFilter' in the parameters can be used to restrict items. 'ItemCodeList' can be used to select only some of the restricted items. If 'ItemCodeList' is not filled, it is assumed that all restricted or unrestricted items are selected by default.

 |
| [POST api/v2/FlexibleConfiguration/AddFlexibleConfigurations](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-FlexibleConfiguration-AddFlexibleConfigurations) | 

It enables the creation of flexible configuration codes for items that comply with the constraints given in the parameters and returns all configuration codes, including the new flexible configuration codes. 'AdvancedFilter' in the parameters can be used to restrict items. 'ItemCodeList' can be used to select only some of the restricted items. If 'ItemCodeList' is not filled, it is assumed that all restricted or unrestricted items are selected by default.

 |

## Queries (NetRS)

| API | Description |
| --- | --- |
| [GET api/v2/Queries](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Queries) | 
Read the records for the given SQL query.  
Select, insert, update, delete supported. (Mssql only)

 |
| [POST api/v2/Queries](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Queries) | 

Read the records for the given SQL query.  
Select, insert, update, delete supported. (Mssql only)

 |
| [GET api/v2/Queries/NetRS](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-Queries-NetRS) | 

Read the records for the given SQL query by using NetRS.  
Select, insert, update, delete supported. Mssql, Oracle supported.

 |
| [POST api/v2/Queries/NetRS](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Queries-NetRS) | 

 |

## MaintenanceOrders (BakimEmri)

| API | Description |
| --- | --- |
| [GET api/v2/MaintenanceOrders](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-MaintenanceOrders) | 
Read all MaintenanceOrders records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= BELGENO ASC, sorts the result set by BELGENO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=BELGENO, TLPBASTAR retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=BELGENO='000000000000001' retrieves the result by applying SQL Where clause. ?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/MaintenanceOrders/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-MaintenanceOrders-id) | 

Read a single MaintenanceOrder record by given Maintenance Order Number.

 |
| [POST api/v2/MaintenanceOrders](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MaintenanceOrders) | 

Create a new MaintenanceOrder record by given MaintenanceOrder information.

 |
| [PUT api/v2/MaintenanceOrders/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-MaintenanceOrders-id) | 

Update an existent record by given ID and MaintenanceOrder information.

 |
| [DELETE api/v2/MaintenanceOrders/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-MaintenanceOrders-id) | 

Delete an existent MaintenanceOrder by given ID.

 |
| [GET api/v2/definitions/MaintenanceOrders](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-MaintenanceOrders) | 

Read the model scheme of MaintenanceOrder as string in JSON format.

 |
| [GET api/v2/services/MaintenanceOrders](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-MaintenanceOrders) | 

Read the API scheme of MaintenanceOrder controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/MaintenanceOrders/DeleteMaintenanceOrderProcedure](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MaintenanceOrders-DeleteMaintenanceOrderProcedure) | 

Delete an existent Maintenance Order Procedure of Maintenance Order by given restParam.

 |
| [POST api/v2/MaintenanceOrders/DeleteMaintenanceOrderProcedureItem](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MaintenanceOrders-DeleteMaintenanceOrderProcedureItem) | 

Delete an existent Maintenance Order Procedure Item of Maintenance Order Procedure by given restParam.

 |
| [POST api/v2/MaintenanceOrders/DeleteMaintenanceOrderProcedureEmployee](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MaintenanceOrders-DeleteMaintenanceOrderProcedureEmployee) | 

Delete an existent Maintenance Order Procedure Employee of Maintenance Order Procedure by given restParam.

 |

## ARPs (Cari)

| API | Description |
| --- | --- |
| [GET api/v2/ARPs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ARPs) | 
Read all ARPs records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=CARI\_KOD ASC, sorts the result set by CARI\_KOD in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=SCRISK, CM\_BORCT retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=CARI\_KOD='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ARPs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ARPs-id) | 

Read a single ARPs record by ID.

 |
| [POST api/v2/ARPs](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ARPs) | 

Create a new ARPs record by given ARPs information.

 |
| [PUT api/v2/ARPs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ARPs-id) | 

Update an existent ARPs record by ID.

 |
| [DELETE api/v2/ARPs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ARPs-id) | 

Delete existing ARPs record by ID.

 |
| [GET api/v2/definitions/ARPs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ARPs) | 

Read the model scheme of ARPs as string in JSON format.

 |
| [GET api/v2/services/ARPs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ARPs) | 

Read the API scheme of ARPs controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/ARPs/PrimInfo](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ARPs-PrimInfo) | 

Read all ARPsPrimInfo records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=CARI\_KOD ASC, sorts the result set by CARI\_KOD in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=SCRISK, CM\_BORCT retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=CARI\_KOD='1' retrieves the result by applying SQL Where clause.

 |
| [POST api/v2/ARPs/Risk](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ARPs-Risk) | 

Read ARPs Risk Info. (RiskBul)

 |

## ExRates (Kur)

| API | Description |
| --- | --- |
| [GET api/v2/ExRates](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ExRates) | 
Read all ForExs records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=DOV\_ALIS ASC, sorts the result set by DOV\_ALIS in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ISIM, BIRIM retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=ISIM='name' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ExRates/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ExRates-id) | 

Reads a single record by given ID.

 |
| [POST api/v2/ExRates](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ExRates) | 

Create a new record by given ExRate information.  
  
Note that SIRA property must be referenced from TBLKUR table.

 |
| [PUT api/v2/ExRates/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ExRates-id) | 

Update an existent record by given ID and ExRates information.

 |
| [DELETE api/v2/ExRates/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ExRates-id) | 

Delete an existent record by given ID.

 |
| [GET api/v2/definitions/ExRates](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ExRates) | 

Read the model scheme of ExRates as string in JSON format.

 |
| [GET api/v2/services/ExRates](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ExRates) | 

Read the API scheme of ExRates controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/ExRates/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ExRates-Details) | 

Read an existent ExRates record by given ExRatesParam information.

 |
| [POST api/v2/ExRates/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ExRates-Delete) | 

Delete an existent ExRates record by given ExRatesParam information.

 |

## ForeignTradeExpenseStatement (DisTicMasrafDekont)

| API | Description |
| --- | --- |
| [GET api/v2/ForeignTradeExpenseStatement/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ForeignTradeExpenseStatement-id) | 
Read an ForeignTradeExpenseStatement by ID

 |
| [GET api/v2/ForeignTradeExpenseStatement?disTicTip={disTicTip}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ForeignTradeExpenseStatement_disTicTip) | 

Read all ForeignTradeExpenseStatement records by given Foreign Trade type. Additional query parameters : limit, offset, sort, first, last, q  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=DEKONT\_NO ASC, sorts the result set by DEKONT\_NO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=DEKONT\_NO > 20 retrieves the result by applying SQL Where clause.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full gets Details of MasrafDagitim object of ForeignTradeExpenseStatementItem for all ForeignTradeExpenseStatements. For Exlample MasrafDagitimBelges of MasrafDagitim.

 |
| [POST api/v2/ForeignTradeExpenseStatement](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ForeignTradeExpenseStatement) | 

Create a new ForeignTradeExpenseStatement record by given ForeignTradeExpenseStatement information.

 |
| [PUT api/v2/ForeignTradeExpenseStatement/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ForeignTradeExpenseStatement-id) | 

Update an existent ForeignTradeExpenseStatement record by given ID and ForeignTradeExpenseStatement information.

 |
| [DELETE api/v2/ForeignTradeExpenseStatement/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ForeignTradeExpenseStatement-id) | 

Delete an existent ForeignTradeExpenseStatement record by given ID.

 |
| [GET api/v2/definitions/ForeignTradeExpenseStatement](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ForeignTradeExpenseStatement) | 

Read the model scheme of ForeignTradeExpenseStatement as string in JSON format.

 |
| [GET api/v2/services/ForeignTradeExpenseStatement](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ForeignTradeExpenseStatement) | 

Read the API scheme of ForeignTradeExpenseStatement controller without the definitions of models as string in JSON format.  
 

 |

## Public

| API | Description |
| --- | --- |
| [GET api/v2/public/Ping](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-Ping) | 
Ping the REST service. An OK message and current date will be returned if the service is up.

 |
| [GET api/v2/public/Version](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-Version) | 

Read the current version of NetOpenX Kernel.

 |
| [GET api/v2/public/AuthorizedBranches?company={company}&username={username}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-AuthorizedBranches_company_username) | 

Read the branches that a user is authorized by given company and username. (KulYetkiliSube)

 |
| [GET api/v2/public/GetLicInfo/{KeyInfo}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-GetLicInfo-KeyInfo) | 

Read the licence info that user by given Version name

 |
| [GET api/v2/public/NetsisMinorVersion](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-NetsisMinorVersion) | 

No documentation available.

 |
| [GET api/v2/public/NetsisMasterVersion](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-NetsisMasterVersion) | 

No documentation available.

 |
| [GET api/v2/public/CompanyList](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-public-CompanyList) | 

No documentation available.

 |

## Mrp (Mrp)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/Mrp](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Mrp) | 
 |
| [GET api/v2/services/Mrp](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Mrp) | 

 |
| [POST api/v2/Mrp/PrepareRequisitionBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-PrepareRequisitionBalancing) | 

Performs the requisition balancing process for the needs appropriate to the given parameters and returns the candidate result list that has not yet been saved for selection.

 |
| [POST api/v2/Mrp/SaveRequisitionBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-SaveRequisitionBalancing) | 

It saves the edited result list, which is the response of the PrepareRequisitionBalancing request and with the selection information of its elements selected.

 |
| [POST api/v2/Mrp/BalanceAllRequisitions](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-BalanceAllRequisitions) | 

Performs the requisition balancing process and saves result list of it for the needs appropriate to the given parameters and returns the exact result list.

 |
| [POST api/v2/Mrp/GenerateRequirementPlan](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-GenerateRequirementPlan) | 

Performs the Generate Requirement Plan process by given mrpParam parameters.

 |
| [POST api/v2/Mrp/MaterialRequirementsPlanning](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-MaterialRequirementsPlanning) | 

Executes Material Requirements Planning process by given mrp parameters.

 |
| [POST api/v2/Mrp/PrepareProductionOrderBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-PrepareProductionOrderBalancing) | 

Performs the production order balancing process for the needs appropriate to the given parameters and returns the candidate result list that has not yet been saved for selection.

 |
| [POST api/v2/Mrp/SaveProductionOrderBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-SaveProductionOrderBalancing) | 

It saves the edited result list, which is the response of the PrepareProductionOrderBalancing request and with the selection information of its elements selected.

 |
| [POST api/v2/Mrp/BalanceAllProductionOrders](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-BalanceAllProductionOrders) | 

Performs the production order balancing process and saves result list of it for the needs appropriate to the given parameters and returns the exact result list.

 |
| [POST api/v2/Mrp/PrepareOrderBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-PrepareOrderBalancing) | 

Performs the order balancing process for the needs appropriate to the given parameters and returns the candidate result list that has not yet been saved for selection.

 |
| [POST api/v2/Mrp/SaveOrderBalancing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-SaveOrderBalancing) | 

It saves the edited result list, which is the response of the PrepareOrderBalancing request and with the selection information of its elements selected.

 |
| [POST api/v2/Mrp/BalanceAllOrders](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Mrp-BalanceAllOrders) | 

Performs the order balancing process for the needs appropriate to the given parameters and returns the candidate result list that has not yet been saved for selection.

 |

## Notification (NetsisBildirim)

| API | Description |
| --- | --- |
| [POST api/v2/Notification](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Notification) | 
Send a new Notification record by given Notification information.

 |
| [GET api/v2/definitions/Notification](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Notification) | 

 |
| [GET api/v2/services/Notification](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Notification) | 

 |

## MixedReceiptsMain (HizliTahsilatAna)

| API | Description |
| --- | --- |
| [GET api/v2/MixedReceiptsMain/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-MixedReceiptsMain-id) | 
Read an existent MixedReceiptsMain record by ID.

 |
| [POST api/v2/MixedReceiptsMain](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MixedReceiptsMain) | 

Create a new MixedReceiptsMain record by given MixedReceiptsMain information.

 |
| [DELETE api/v2/MixedReceiptsMain/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-MixedReceiptsMain-id) | 

Delete an existent MixedReceiptsMain record by ID.

 |
| [GET api/v2/definitions/MixedReceiptsMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-MixedReceiptsMain) | 

Read the model scheme of MixedReceiptsMain as string in JSON format.

 |
| [GET api/v2/services/MixedReceiptsMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-MixedReceiptsMain) | 

Read the API scheme of MixedReceiptsMain controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/MixedReceiptsMain/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MixedReceiptsMain-Details) | 

Read an existent MixedReceiptsMain record by given MixedReceiptsMainParam information.

 |
| [POST api/v2/MixedReceiptsMain/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-MixedReceiptsMain-Delete) | 

Delete an existent MixedReceiptsMain record by given MixedReceiptsMainParam information.

 |

## PlanningRecord (PlanlamaKayitlari)

| API | Description |
| --- | --- |
| [GET api/v2/PlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-PlanningRecord) | 
Read all PlanningRecord records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= CARI\_KOD ASC, sorts the result set by CARI\_KOD in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=STOK\_KODU, LOT\_SIZE retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=CARI\_KOD='SATICI1' AND STOK\_KODU IS NULL retrieves the result by applying SQL Where clause.

 |
| [POST api/v2/PlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-PlanningRecord) | 

Create a new PlanningRecord record by given PlanningRecord information.

 |
| [PUT api/v2/PlanningRecord/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-PlanningRecord-id) | 

Update or Create a new PlanningRecord record by given PlanningRecord information.

 |
| [GET api/v2/definitions/PlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-PlanningRecord) | 

Read the model scheme of PlanningRecord as string in JSON format.

 |
| [GET api/v2/services/PlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-PlanningRecord) | 

Read the API scheme of PlanningRecord controller without the definitions of models as string in JSON format.  
 

 |
| [GET api/v2/PlanningRecord/GetItemPlanningRecord/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-PlanningRecord-GetItemPlanningRecord-id) | 

Read a single ItemPlanningRecord record by given id as param.

 |
| [GET api/v2/PlanningRecord/GetCurAccPlanningRecord/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-PlanningRecord-GetCurAccPlanningRecord-id) | 

Read a single CurAccPlanningRecord record by given id as param.

 |
| [GET api/v2/PlanningRecord/GetCustomerSupplierItemPlanningRecord/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-PlanningRecord-GetCustomerSupplierItemPlanningRecord-id) | 

Read a single CustomerSupplierItemPlanningRecord record by given id as param.

 |
| [POST api/v2/PlanningRecord/DeleteItemPlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-PlanningRecord-DeleteItemPlanningRecord) | 

Delete an existent ItemPlanningRecord Order by given restParam.

 |
| [POST api/v2/PlanningRecord/DeleteCurAccPlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-PlanningRecord-DeleteCurAccPlanningRecord) | 

Delete an existent CurAccPlanningRecord Order by given restParam.

 |
| [POST api/v2/PlanningRecord/DeleteCustomerSupplierItemPlanningRecord](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-PlanningRecord-DeleteCustomerSupplierItemPlanningRecord) | 

Delete an existent CustomerSupplierItemPlanningRecord Order by given restParam.

 |

## ItemTransactions (StokHareket)

| API | Description |
| --- | --- |
| [GET api/v2/ItemTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemTransactions) | 
Read all ItemTransactions records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= FISNO ASC, sorts the result set by FISNO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=STHAR\_GCMIK, STHAR\_GCMIK2 retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=FISNO='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ItemTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemTransactions-id) | 

Read a single ItemTransactions record by given ID.

 |
| [POST api/v2/ItemTransactions](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemTransactions) | 

Create a new ItemTransactions record by given ItemTransaction information.

 |
| [PUT api/v2/ItemTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ItemTransactions-id) | 

Update an existent ItemTransactions record by given ID and ItemTransactions information.

 |
| [DELETE api/v2/ItemTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ItemTransactions-id) | 

Delete an existent ItemTransaction by ID.

 |
| [GET api/v2/definitions/ItemTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ItemTransactions) | 

Read the model scheme of ItemTransaction as string in JSON format.

 |
| [GET api/v2/services/ItemTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ItemTransactions) | 

Read the API scheme of ItemTransactions controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## EDocument (EBelge)

| API | Description |
| --- | --- |
| [POST api/v2/EDocument](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument) | 
Create a new EDocument record by given EDocument information.

 |
| [GET api/v2/definitions/EDocument](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-EDocument) | 

Read the model scheme of EDocument as string in JSON format.

 |
| [GET api/v2/services/EDocument](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-EDocument) | 

Read the API scheme of EDocument controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/EDocument/ShowEDocument](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-ShowEDocument) | 

If htmlPath defined on EDocumentShowParam is Empty, returns html script otherwise Saves an html file to located htmlPath and returns full path of html file saved.

 |
| [POST api/v2/EDocument/SendEDocument](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-SendEDocument) | 

Sends EDocuments to Revenue Administration or Integration Sevices

 |
| [POST api/v2/EDocument/CheckEDocument](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-CheckEDocument) | 

It allows the inbox, outbox, or all boxes to be updated according to the given parameters.

 |
| [POST api/v2/EDocument/EDocCurrentUpdate](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-EDocCurrentUpdate) | 

Triggers "EFatCariGuncelleme" process.

 |
| [POST api/v2/EDocument/EDocumentResponse](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-EDocumentResponse) | 

Gives response to E-Documents.

 |
| [POST api/v2/EDocument/EDocumentItemResponse](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-EDocumentItemResponse) | 

Gives response to E-Documents per items.

 |
| [POST api/v2/EDocument/EArchiveCancellationInvoice](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-EDocument-EArchiveCancellationInvoice) | 

Creates cancellation e-archive invoice.

 |

## BatchInvoicing (TopluFatura)

| API | Description |
| --- | --- |
| [POST api/v2/BatchInvoicing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-BatchInvoicing) | 
Converts ItemSlips of type ftSIrs and ftAIrs to ftSFat and ftAFat by given BatchInvoicing information.

 |
| [GET api/v2/definitions/BatchInvoicing](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-BatchInvoicing) | 

Read the model scheme of BatchInvoicing as string in JSON format.

 |
| [GET api/v2/services/BatchInvoicing](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-BatchInvoicing) | 

Read the API scheme of BatchInvoicing controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## HealthCheck

| API | Description |
| --- | --- |
| [GET api/v2/HealthCheck](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-HealthCheck) | 
No documentation available.

 |

## ProcessControl (ProsesKontrol)

| API | Description |
| --- | --- |
| [GET api/v2/ProcessControl](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProcessControl) | 
Read all Process Control records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= BELGENO ASC, sorts the result set by BELGENO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=BELGENO, TIP retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=BELGENO='000000000000001' retrieves the result by applying SQL Where clause. ?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/ProcessControl/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProcessControl-id) | 

Read a single Process Control record by given Process Control Number.

 |
| [POST api/v2/ProcessControl](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProcessControl) | 

Create a new Process Control record by given Process Control information.

 |
| [PUT api/v2/ProcessControl/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ProcessControl-id) | 

Update an existent record by given ID and Process Control information.

 |
| [DELETE api/v2/ProcessControl/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ProcessControl-id) | 

Delete an existent Process Control by given ID.

 |
| [GET api/v2/definitions/ProcessControl](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProcessControl) | 

Read the model scheme of ProcessControl as string in JSON format.

 |
| [GET api/v2/services/ProcessControl](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProcessControl) | 

Read the API scheme of ProcessControl controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## CheckAndPNotesMain (CekSenetAna)

| API | Description |
| --- | --- |
| [GET api/v2/CheckAndPNotesMain/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-CheckAndPNotesMain-id) | 
Read a single CheckAndPNotesMain record by given ID.

 |
| [GET api/v2/CheckAndPNotesMain?docType={docType}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-CheckAndPNotesMain_docType) | 

Read all CheckAndPNotesMain records by given document type. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=SC\_NO ASC, sorts the result set by SC\_NO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=SC\_GIRTRH, VADETRH retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=SC\_NO='1' retrieves the result by applying SQL Where clause.

 |
| [POST api/v2/CheckAndPNotesMain](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-CheckAndPNotesMain) | 

Create a new CheckAndPNotesMain record by given CheckAndPNotesMain information.

 |
| [DELETE api/v2/CheckAndPNotesMain/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-CheckAndPNotesMain-id) | 

Delete an existent CheckAndPNotesMain record by given ID.

 |
| [GET api/v2/definitions/CheckAndPNotesMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-CheckAndPNotesMain) | 

Read the model scheme of CheckAndPNotesMain as string in JSON format.

 |
| [GET api/v2/services/CheckAndPNotesMain](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-CheckAndPNotesMain) | 

Read the API scheme of CheckAndPNotesMain controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/CheckAndPNotesMain/Details](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-CheckAndPNotesMain-Details) | 

Read a single CheckAndPNotesMain record by given CheckAndPNotesMainParam information.

 |
| [POST api/v2/CheckAndPNotesMain/Delete](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-CheckAndPNotesMain-Delete) | 

Delete an existent CheckAndPNotesMain record by given CheckAndPNotesMainParam.

 |

## ManualSettlement (OzelHesKapat)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/ManualSettlement](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ManualSettlement) | 
 |
| [GET api/v2/services/ManualSettlement](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ManualSettlement) | 

 |
| [POST api/v2/ManualSettlement/PrepareManualSettlement](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ManualSettlement-PrepareManualSettlement) | 

It prepares and returns Debt List, Credit List, and Closed Accounts Lists according to the parameters given before the process of Manual Settlement Save or Manual Settlement Cancellation

 |
| [POST api/v2/ManualSettlement/SaveManualSettlement](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ManualSettlement-SaveManualSettlement) | 

It performs and saves the Manual Settlement process for debts and credits with Secim value true in the given parameters from debt and credit lists.

 |
| [POST api/v2/ManualSettlement/CancelManualSettlement](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ManualSettlement-CancelManualSettlement) | 

It cancels the Manual Settlement process for closed records with Secim value true in the provided parameters for the closed list.

 |

## ItemCountingProcessing (StokSayimIsleme)

| API | Description |
| --- | --- |
| [GET api/v2/ItemCountingProcessing](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCountingProcessing) | 
Read all Item Counting Processing records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= ISLEYEN\_KULLANICI ASC, sorts the result set by BELGENO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ISLEYEN\_KULLANICI, ISLEME\_TARIHI retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=SAYIM\_KODU = '000000000000001' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ItemCountingProcessing/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCountingProcessing-id) | 

Read a single ItemCountingProcessing record by given ID.

 |
| [POST api/v2/ItemCountingProcessing](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ItemCountingProcessing) | 

Create a new ItemCountingProcessing record by given ItemCountingProcessing information.

 |
| [DELETE api/v2/ItemCountingProcessing/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ItemCountingProcessing-id) | 

Delete a ItemCountingProcessing record by given ID.

 |
| [GET api/v2/definitions/ItemCountingProcessing](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ItemCountingProcessing) | 

 |
| [GET api/v2/services/ItemCountingProcessing](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ItemCountingProcessing) | 

 |
| [GET api/v2/ItemCountingProcessing/ProcessToItemTransactions/{processNo}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCountingProcessing-ProcessToItemTransactions-processNo) | 

Process item countings records to item transactions by given processNo.

 |
| [GET api/v2/ItemCountingProcessing/ProcessToItemTransactionsCancelation/{processNo}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ItemCountingProcessing-ProcessToItemTransactionsCancelation-processNo) | 

Cancels processing item countings record to item transactions by given processNo.

 |

## ProducerReceipt (Mustahsil)

| API | Description |
| --- | --- |
| [GET api/v2/ProducerReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProducerReceipt) | 
Read all ProducerReceipt records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=FATIRS\_NO ASC, sorts the result set by FATIRS\_NO in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=TIPI, CARI\_ISIM retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=FATIRS\_NO='1' retrieves the result by applying SQL Where clause.

 |
| [POST api/v2/ProducerReceipt](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProducerReceipt) | 

Create a new ProducerReceipt record by given ProducerReceipt information.

 |
| [DELETE api/v2/ProducerReceipt/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ProducerReceipt-id) | 

Delete an existent ProducerReceipt record by given ID.

 |
| [GET api/v2/definitions/ProducerReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ProducerReceipt) | 

Read the model scheme of ProducerReceipt as string in JSON format.

 |
| [GET api/v2/services/ProducerReceipt](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ProducerReceipt) | 

Read the API scheme of ProducerReceipt controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/ProducerReceipt/ReadLastNumber?customerCode={customerCode}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ProducerReceipt-ReadLastNumber_customerCode) | 

Read the next available FATIRS\_NO for a given CARI\_KODU. (SonNumaraOku)

 |
| [POST api/v2/ProducerReceipt/ChangeProducerNumber](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ProducerReceipt-ChangeProducerNumber) | 

Changes an Producer's number to new number by given ChangeProducerNumberParam infomation. returns the process is succesful or unsuccesful as true or false.

 |

## GLAccounts (MuPlan)

| API | Description |
| --- | --- |
| [GET api/v2/GLAccounts](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-GLAccounts) | 
Read all GLAccounts records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=HESAP\_KODU ASC, sorts the result set by HESAP\_KODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=SUBE\_KODU, ISLETME\_KODU retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=SUBE\_KODU='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/GLAccounts/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-GLAccounts-id) | 

Read a single GLAccounts record by given ID.

 |
| [POST api/v2/GLAccounts](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-GLAccounts) | 

Create a new GLAccounts record by given GLAccounts information.

 |
| [PUT api/v2/GLAccounts/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-GLAccounts-id) | 

Update an existent GLAccounts record by given ID and GLAccounts information.

 |
| [DELETE api/v2/GLAccounts/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-GLAccounts-id) | 

Delete an existent GLAccounts record by ID.

 |
| [GET api/v2/definitions/GLAccounts](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-GLAccounts) | 

Read the model scheme of GLAccounts as string in JSON format.

 |
| [GET api/v2/services/GLAccounts](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-GLAccounts) | 

Read the API scheme of GLAccounts controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## Print (Basim)

| API | Description |
| --- | --- |
| [GET api/v2/definitions/Print](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-Print) | 
Read the model scheme of Print as string in JSON format.

 |
| [GET api/v2/services/Print](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-Print) | 

Read the API scheme of Print controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/Print/ItemSlipsPrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-ItemSlipsPrinting) | 

Read the pdf format of an ItemSlips record as byte array, by given ItemSlipsPrintParam information. (FaturaBasimDizaynNo)

 |
| [POST api/v2/Print/GLSlipsPrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-GLSlipsPrinting) | 

Read the pdf format of a GLSlips record as byte array, by given GLSlipsPrintParam information. (YevmiyeFisBasimDizaynNo)

 |
| [POST api/v2/Print/CheckAndPNotesMainPrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-CheckAndPNotesMainPrinting) | 

Read the pdf format of a CheckAndPNotesMain record as byte array, by given CheckAndPNotesMainPrintParam information. (CekSenetBasimDizaynNo)

 |
| [POST api/v2/Print/SafeDepositsPrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-SafeDepositsPrinting) | 

Read the pdf format of a SafeDeposits record as byte array, by given SafeDepositPrintParam information. (KasaBasim)

 |
| [POST api/v2/Print/StatementsHeaderPrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-StatementsHeaderPrinting) | 

Read the pdf format of a StatementsHeader record as byte array, by given StatementsHeaderPrintParam information. (DekontBasimDizaynNo)

 |
| [POST api/v2/Print/ItemSlipsItemsBatchBarcodePrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-ItemSlipsItemsBatchBarcodePrinting) | 

Prints barcode file for item slip's all items. If design is visual design it returns PDF file as byte array, if design is normal design it returns text file as byte array.

 |
| [POST api/v2/Print/ItemSlipsItemBarcodePrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-ItemSlipsItemBarcodePrinting) | 

Prints barcode file for given item number. If design is visual design it returns PDF file as byte array, if design is normal design it returns text file as byte array.

 |
| [POST api/v2/Print/ItemBarcodePrinting](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-Print-ItemBarcodePrinting) | 

No documentation available.

 |

## WorkFlow (WFTObject)

| API | Description |
| --- | --- |
| [GET api/v2/WorkFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-WorkFlow) | 
Read all WorkFlow records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=PATHKODU ASC, sorts the result set by PATHKODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ONAYNUMARASI, MODULNO retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=PATHKODU='1' retrieves the result by applying SQL Where clause.

 |
| [POST api/v2/WorkFlow](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-WorkFlow) | 

Change the status of WorkFlow by changing its DURUMU property by given WorkFlow information.

 |
| [GET api/v2/definitions/WorkFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-WorkFlow) | 

Read the model scheme of WorkFlow as string in JSON format.

 |
| [GET api/v2/services/WorkFlow](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-WorkFlow) | 

Read the API scheme of WorkFlow controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |

## BOM (IReceteAna)

| API | Description |
| --- | --- |
| [GET api/v2/BOM](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BOM) | 
Read all BOMs records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= STOKKODU ASC, sorts the result set by STOKKODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=STOKKODU, XFORMUL\_TOPLAMI retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=STOKKODU='M1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/BOM/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-BOM-id) | 

Read a single BOM record by given Item Code.

 |
| [POST api/v2/BOM](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-BOM) | 

Create a new BOM record by given BOM information.

 |
| [PUT api/v2/BOM/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-BOM-id) | 

Update an existent record by given ID and BOM information.

 |
| [DELETE api/v2/BOM/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-BOM-id) | 

Delete an existent BOM by given ID.

 |
| [GET api/v2/definitions/BOM](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-BOM) | 

Read the model scheme of BOM as string in JSON format.

 |
| [GET api/v2/services/BOM](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-BOM) | 

Read the API scheme of BOM controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [POST api/v2/BOM/DeleteBOMItem](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-BOM-DeleteBOMItem) | 

Delete an existent BOMItem of BOM by given restParam.

 |

## ForExs (Doviz)

| API | Description |
| --- | --- |
| [GET api/v2/ForExs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ForExs) | 
Read all ForExs records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort=ISIM ASC, sorts the result set by ISIM in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=ISIM, BIRIM retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=ISIM='name' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ForExs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ForExs-id) | 

Read a single ForExs record by ID.

 |
| [POST api/v2/ForExs](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ForExs) | 

Create a new ForExs by given ForExs information.

 |
| [PUT api/v2/ForExs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ForExs-id) | 

Update an existent ForExs record by given ID and ForExs information.

 |
| [DELETE api/v2/ForExs/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ForExs-id) | 

Delete an existent ForExs record by given ID.  
  
Note that you can't delete a ForExs record if there exist a ExRates record referencing its ID.

 |
| [GET api/v2/definitions/ForExs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ForExs) | 

Read the model scheme of ForExs as string in JSON format.

 |
| [GET api/v2/services/ForExs](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ForExs) | 

Read the API scheme of ForExs controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
| [GET api/v2/ForExs/RefreshExRates?date={date}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ForExs-RefreshExRates_date) | 

Refreshes all the records of ExRates which references a ForExs to the given date. (DovizKurGuncelle)

 |

## ARPTransactions (CariHareket)

| API | Description |
| --- | --- |
| [GET api/v2/ARPTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ARPTransactions) | 
Read all ARPTransactions records. Additional query parameters : limit, offset, sort, fields, first, last, q.  
  
Note that these parameters must be URL encoded.  
  
Examples;  
  
?limit=10 determines the number of records of each page. Default limit value is 20.  
  
?offset=30 determines from which index the pagination begins. If its 10, it starts from 10th record and paginates by limit. Default value is 0.  
  
?sort= SUBE\_KODU ASC, sorts the result set by SUBE\_KODU in ASC(ascending) order. Use DESC for descending. Default value is not sorted.  
  
?fields=CARI\_KOD, TARIH retrieved data only includes information about given column names. Default is all columns of a table.  
  
?first=true retrieves the first page.  
  
?last=true retrieves the last page.  
  
?q=CARI\_KOD='1' retrieves the result by applying SQL Where clause.

 |
| [GET api/v2/ARPTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-ARPTransactions-id) | 

Read a single ARPTransactions record by given ID.

 |
| [POST api/v2/ARPTransactions](http://localhost:7070/api/v2/helpinfo?apiId=POST-api-v2-ARPTransactions) | 

Create a new ARPTransactions record by given ARPTransaction information.

 |
| [PUT api/v2/ARPTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=PUT-api-v2-ARPTransactions-id) | 

Update an existent ARPTransactions record by given ID and ARPTransactions information.

 |
| [DELETE api/v2/ARPTransactions/{id}](http://localhost:7070/api/v2/helpinfo?apiId=DELETE-api-v2-ARPTransactions-id) | 

Delete an existent ARPTransactions record by ID.

 |
| [GET api/v2/definitions/ARPTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-definitions-ARPTransactions) | 

Read the model scheme of ARPTransactions as string in JSON format.

 |
| [GET api/v2/services/ARPTransactions](http://localhost:7070/api/v2/helpinfo?apiId=GET-api-v2-services-ARPTransactions) | 

Read the API scheme of ARPTransaction controller without the definitions of models as string in JSON format.  
  
Additional query parameter : expandLevel.  
  
Examples;  
?expandLevel=full also includes definitions of models.

 |
