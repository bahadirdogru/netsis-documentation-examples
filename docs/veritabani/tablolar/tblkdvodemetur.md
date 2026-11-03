---
title: TBLKDVODEMETUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkdvodemetur/
---

# TBLKDVODEMETUR

> KDV BEYANNAMESİ ÖDEME TÜRÜ BİLGİLERİ TUTULUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TUR_KODU` | TDBSMALLINT | hayır |  | tür kodu bilgisi yer alır. |
| 2 | `TUR_AD` | varchar(200) | hayır |  | Tür isim bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 TUR_KODU, TUR_AD
FROM dbo.TBLKDVODEMETUR WITH (NOLOCK);
```
