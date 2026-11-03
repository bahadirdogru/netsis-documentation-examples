---
title: TBLEFATKALEMDELIVERY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatkalemdelivery/
---

# TBLEFATKALEMDELIVERY

> İhracatı gerçekleşecek olan mal bilgilerinin detayları yer alır

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 5

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EFATMASINC` | TDBINTEGER | hayır |  | Efatmas-inckeyno alanına karşılık gelir. |
| 2 | `INVOICELINEID` | TDBINTEGER | hayır |  | Kalem sıra numarası alanına karşılık gelir. |
| 3 | `DLVSHPTRAHNDACTID` | varchar(20) | hayır |  | Delivery/Shipment/TransportHandlingUnit/ActualPackage/ID: Eşyanın bulunduğu kabın numarası. |
| 4 | `DLVSHPTRAHNDACTQUANTITY` | TDBFLOAT | hayır |  | Delivery/Shipment/TransportHandlingUnit/ActualPackage/Quantity: Eşyanın bulunduğu kabın adedi. |
| 5 | `DLVSHPTRAHNDACTPCKTYPCODE` | varchar(10) | hayır |  | Delivery/Shipment/TransporHandlingUnit/ActualPackage/PackagingTypeCode:Eşyanın bulunduğu kabın cinsi/nevi. |

## Örnek sorgu

```sql
SELECT TOP 100 EFATMASINC, INVOICELINEID, DLVSHPTRAHNDACTID, DLVSHPTRAHNDACTQUANTITY, DLVSHPTRAHNDACTPCKTYPCODE
FROM dbo.TBLEFATKALEMDELIVERY WITH (NOLOCK);
```
