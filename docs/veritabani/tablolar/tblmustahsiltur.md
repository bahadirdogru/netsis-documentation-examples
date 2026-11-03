---
title: TBLMUSTAHSILTUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmustahsiltur/
---

# TBLMUSTAHSILTUR

> MUHTASAR BASIM MÜSTAHSİL HARİÇ ÖDEME TÜR KODLARI TUTULUR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 3

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TUR_KODU` | TDBSMALLINT | hayır |  | Tür kodu bilgisi yer alır |
| 2 | `GRUP` | varchar(200) | hayır |  | grup bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(800) | evet |  | Açıklama bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 TUR_KODU, GRUP, ACIKLAMA
FROM dbo.TBLMUSTAHSILTUR WITH (NOLOCK);
```
