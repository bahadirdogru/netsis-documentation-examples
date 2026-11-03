---
title: TBLEIRSNOTES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsnotes/
---

# TBLEIRSNOTES

> E-irsaliyeye ait not bilgilerinin tutulduğu tablodur

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EIRSMASINC` | TDBINTEGER | evet |  | TBLEIRSMAS-INCKEYNO bilgisi yer alır. |
| 2 | `TAG` | TDBINTEGER | evet |  | NULL |
| 3 | `CAPTION` | varchar(50) | evet |  | NULL |
| 4 | `DESCRIPTION` | varchar(50) | evet |  | NULL |
| 5 | `NOTE` | varchar(-1) | evet |  | Note olarak eklenen bilgiler yer alır. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır |

## Örnek sorgu

```sql
SELECT TOP 100 EIRSMASINC, TAG, CAPTION, DESCRIPTION, NOTE, INCKEYNO
FROM dbo.TBLEIRSNOTES WITH (NOLOCK);
```
