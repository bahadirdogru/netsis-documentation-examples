---
title: TBLEIRSYANITNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsyanitno/
---

# TBLEIRSYANITNO

> E-irsaliyeye ait yanıt bilgilerinin tutulduğu tablodur

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 4

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 2 | `SERI` | char(3) | evet |  | Seri bilgisi yer alır. |
| 3 | `TIP` | char(1) | hayır |  | Tipi yer alır. |
| 4 | `NUMARA` | varchar(16) | evet |  | Numara bilgisi tutulur. |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, TIP, NUMARA
FROM dbo.TBLEIRSYANITNO WITH (NOLOCK);
```
