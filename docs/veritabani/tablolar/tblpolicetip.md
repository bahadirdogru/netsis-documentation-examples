---
title: TBLPOLICETIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpolicetip/
---

# TBLPOLICETIP

> Poliçe takibi modülündeki poliçe tip tanımlamalarına ait bilgilerin tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 5

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisi yer alır |
| 2 | `TIPKODU` | varchar(8) | evet |  | Tip kodu bilgisi yer alır. |
| 3 | `ACK` | varchar(255) | evet |  | Tip açıklama bilgisi yer alır. |
| 4 | `BAGLANTITIPI` | TDBBYTE | evet |  | Bağlantı tipi bilgisi yer alır. (0-Demirbaş,1-Personel) |
| 5 | `BAGGIRISIZORUNLU` | char(1) | hayır |  | Bağlantı girişi zorunlu ise E, değil ise H değerini alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, TIPKODU, ACK, BAGLANTITIPI, BAGGIRISIZORUNLU
FROM dbo.TBLPOLICETIP WITH (NOLOCK);
```
