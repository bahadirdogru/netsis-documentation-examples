---
title: TBLPOLICEODEME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpoliceodeme/
---

# TBLPOLICEODEME

> Poliçe ödeme bilgisinin tutulduğu tablodur

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 7

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisi yer alır |
| 2 | `POLICEMAS_ID` | TDBINTEGER | hayır |  | TBLPOLICEMAS tablıosundaki ID bilgisi yer alır. |
| 3 | `SIRA` | TDBBYTE | hayır |  | Taksit sırasının bilgisi tutulur. |
| 4 | `TARIH` | datetime | hayır |  | Ödeme tarihi bilgisi yer alır. |
| 5 | `TUTAR` | TDBFLOAT | hayır |  | Taksit tutar bilgisi yer alır. |
| 6 | `DEKOSERI` | varchar(2) | evet |  | Ödemeye ait dekont seri bilgisi yer alır. |
| 7 | `DEKONO` | TDBINTEGER | evet |  | Ödemeye ait dekont numarası bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, POLICEMAS_ID, SIRA, TARIH, TUTAR, DEKOSERI
FROM dbo.TBLPOLICEODEME WITH (NOLOCK);
```
