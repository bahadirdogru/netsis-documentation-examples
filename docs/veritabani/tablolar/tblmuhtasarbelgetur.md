---
title: TBLMUHTASARBELGETUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhtasarbelgetur/
---

# TBLMUHTASARBELGETUR

> MUHTASAR BASIMI ÖDEME BELGE TÜRÜ BİLGİLER TUTULUR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TUR_KODU` | TDBSMALLINT | hayır |  | Tür kodu bilgisi yer alır. |
| 2 | `TUR_ACIKLAMA` | varchar(200) | hayır |  | Tür açıklama bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 TUR_KODU, TUR_ACIKLAMA
FROM dbo.TBLMUHTASARBELGETUR WITH (NOLOCK);
```
