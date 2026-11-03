---
title: TBLEIRSKALEM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirskalem/
---

# TBLEIRSKALEM

> E-irsaliye kalem bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 9

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EIRSMASINC` | TDBINTEGER | evet |  | TBLEIRSMAS-INCKEYNO alanına karşılık gelir. |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 3 | `STOK_ADI` | varchar(100) | evet |  | Stok adı bilgisi yer alır. |
| 4 | `STRA_GCMIK` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 5 | `OLCUBR` | varchar(3) | evet |  | Ölçü birimi uluslar arası kod karşılığı yer alır. |
| 6 | `SIPARISNO` | varchar(50) | evet |  | Sipariş numarası bilgisi yer alır. |
| 7 | `SIPKONT` | TDBINTEGER | evet |  | Stokların sipariş içerisinde girilen sırasını gösterir. |
| 8 | `SIPARIS_TARIH` | TDBDATETIME | evet |  | Sipariş tarihi yer alır. |
| 9 | `SIRA` | TDBINTEGER | evet |  | Sıra bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 EIRSMASINC, STOK_KODU, STOK_ADI, STRA_GCMIK, OLCUBR, SIPARISNO
FROM dbo.TBLEIRSKALEM WITH (NOLOCK);
```
