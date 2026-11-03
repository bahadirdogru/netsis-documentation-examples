---
title: TBLEFATNOTES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatnotes/
---

# TBLEFATNOTES

> EFATURA AİT NOT BİLGİLERİNİN TUTULDUĞU TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EFATMASINC` | TDBINTEGER | evet |  | TBLEFATMAS(INCKEYNO) sahasına karşılık gelir |
| 2 | `TAG` | TDBINTEGER | evet |  | NULL |
| 3 | `CAPTION` | varchar(50) | evet |  | NULL |
| 4 | `DESCRIPTION` | varchar(50) | evet |  | NULL |
| 5 | `NOTE` | varchar(-1) | evet |  | Faturaya eklenen not bilgileri yer alır. InvoiceNotes |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 EFATMASINC, TAG, CAPTION, DESCRIPTION, NOTE, INCKEYNO
FROM dbo.TBLEFATNOTES WITH (NOLOCK);
```
