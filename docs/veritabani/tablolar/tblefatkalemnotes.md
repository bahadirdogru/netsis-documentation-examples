---
title: TBLEFATKALEMNOTES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatkalemnotes/
---

# TBLEFATKALEMNOTES

> E-Fatura kalem bilgilerine ait satır açıklama bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 7

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `EFATMASINC` | TDBINTEGER | evet |  | Efatmas-inckeyno kolonuna karşılık gelir. |
| 3 | `INVOICELINEID` | TDBINTEGER | evet |  | Kalem ıd-sıra bilgisne karşılık gelir. |
| 4 | `TAG` | TDBINTEGER | evet |  | NULL |
| 5 | `CAPTION` | varchar(50) | evet |  | NULL |
| 6 | `DESCRIPTION` | varchar(50) | evet |  | NULL |
| 7 | `NOTE` | varchar(-1) | evet |  | satır bazı açıklama bilgisi yer alır-InvoiceLineNotes |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, EFATMASINC, INVOICELINEID, TAG, CAPTION, DESCRIPTION
FROM dbo.TBLEFATKALEMNOTES WITH (NOLOCK);
```
