---
title: TBLPOLICEGIDER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpolicegider/
---

# TBLPOLICEGIDER

> Poliçe gider hesaplarının tutulduğu tablodur

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 4

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisi yer alır |
| 2 | `POLICEMAS_ID` | TDBINTEGER | hayır |  | TBLPOLICEMAS tablıosundaki ID bilgisi yer alır. |
| 3 | `HESAPKODU` | TDBMUHKOD | hayır |  | Gider hesap kodu bilgisi tutulur. |
| 4 | `ORAN` | TDBFLOAT | hayır |  | Gider oranı yüzde olarak tutulur. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, POLICEMAS_ID, HESAPKODU, ORAN
FROM dbo.TBLPOLICEGIDER WITH (NOLOCK);
```
