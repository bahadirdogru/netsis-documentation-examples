---
title: TBLEFATKALEM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatkalem/
---

# TBLEFATKALEM

> E-Fatura kalem bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 42

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EFATMASINC` | TDBINTEGER | evet |  | TBLEFATMAS-INCKEYNO alanına karşılık gelir. |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır.(-<cac:SellersItemIdentification>) |
| 3 | `STOK_ADI` | varchar(100) | evet |  | Stok adı bilgisi yer alır.(<cac:Item><cbc:Name>) |
| 4 | `STRA_BF` | TDBFLOAT | evet |  | Brüt fiyat bilgisi yer alır (-<cac:Price><cbc:PriceAmount CurrencyID) |
| 5 | `STRA_DOVTIP` | TDBBYTE | evet |  | Döviz tipi bilgisi yer alır. |
| 6 | `STRA_GCMIK` | TDBFLOAT | evet |  | Miktar bilgisi yer alır.(-<cac:InvoiceLine><cbc:ID></cbc:ID><cbc:InvoicedQuantity unitCode) |
| 7 | `STRA_DOVFIAT` | TDBFLOAT | evet |  | Döviz fiyatı bilgisi yer alır. |
| 8 | `OLCUBR` | varchar(2) | evet |  | Ölçü birimi. cbc:InvoicedQuantity unitCode="NIU" ilk iki karakter |
| 9 | `KDV` | TDBFLOAT | evet |  | KDV değeri yer alır.-<cac:TaxTotal>-<cac:TaxSubtotal><cbc:Percent> |
| 10 | `IRSALIYENO` | varchar(50) | evet |  | İrsaliye numarası bilgisi yer alır.-<cac:InvoiceLine>-<cac:DespatchLineReference>-<cac:DocumentReference><cbc:ID> |
| 11 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  | İrsaliye tarihi bilgisi yer alır.-<cac:InvoiceLine>-<cac:DespatchLineReference>-<cac:DocumentReference><cbc:IssueDate> |
| 12 | `ISKTUT` | TDBFLOAT | evet |  | İskonto tutarı bilgisi yer alır.<cbc:Amount currencyID |
| 13 | `ISKACIK` | varchar(100) | evet |  | İskonto açıklaması bilgisi yer alır. |
| 14 | `ACIKLAMA` | varchar(4000) | evet |  | Kalem açıklama bilgisi tutulur. InvoiceLineNotes |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Ara toplam bilgisi tutulur.InvoiceLine <cbc:LineExtensionAmount |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `I_YEDEK1` | TDBINTEGER | evet |  | Kalem sıra numarası bilgisi yer alır. InvoiceLine ID |
| 22 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Ölçü birimi. cbc:InvoicedQuantity unitCode="NIU" |
| 25 | `URETICI_KODU` | varchar(100) | evet |  | Üretici kodu bilgisi yer alır. -<cac:ManufacturersItemIdentification> |
| 26 | `ALICI_STOK_KODU` | TDBSTOKKOD | evet |  | Alıcı stok kodu bilgisi yer alır. |
| 27 | `OIVORAN` | TDBFLOAT | evet |  | OIV oran bilgisi yer alır. |
| 28 | `OIVTUTAR` | TDBFLOAT | evet |  | OIV tutar bilgisi yer alır. |
| 29 | `TAXEXEMPTIONREASON` | varchar(500) | evet |  | İstisna muafiyet sebebi bilgisi yer alır. |
| 30 | `TAXEXEMPTIONREASONCODE` | int | evet |  | İstisna muafiyet kodu bilgisi yer alır. |
| 31 | `IRSKONT` | TDBINTEGER | evet |  | sıra numarası blgisi yer alır. |
| 32 | `SIPARISNO` | varchar(50) | evet |  | Sipariş numarası bilgisi yer alır.<cac:OrderReference><cbc:ID> |
| 33 | `SIPKONT` | TDBINTEGER | evet |  | sıra numarası bilgisi yer alır. |
| 34 | `SIPARIS_TARIH` | TDBDATETIME | evet |  | Sipariş tarihi bilgisi yer alır.<cac:OrderReference><cbc:IssueDate> |
| 35 | `DLVADDSTREET` | varchar(50) | evet |  | Teslim adresi sokak adı bilgisi yer alır. |
| 36 | `DLVADDBUILDNAME` | varchar(50) | evet |  | Teslim adresi bina adı bilgisi yer alır. |
| 37 | `DLVADDBUILDNUMBER` | varchar(10) | evet |  | Teslim adresi bina numarası bilgisi yer alır. |
| 38 | `DLVADDCITYNAME` | varchar(30) | evet |  | Teslim adresi il bilgisidir. |
| 39 | `DLVADDCOUNTRY` | varchar(50) | evet |  | Teslim adresi ülke bilgisidir. |
| 40 | `DLVSHPGOODCUSTOMID` | varchar(35) | evet |  | Gtip numarası bilgisi yer alır. |
| 41 | `DLVSHPTRAMODECODE` | varchar(10) | evet |  |  |
| 42 | `DLVADDPOSTALZONE` | varchar(10) | evet |  | Teslim adresi posta kodu bilgisidir |

## Örnek sorgu

```sql
SELECT TOP 100 EFATMASINC, STOK_KODU, STOK_ADI, STRA_BF, STRA_DOVTIP, STRA_GCMIK
FROM dbo.TBLEFATKALEM WITH (NOLOCK);
```
