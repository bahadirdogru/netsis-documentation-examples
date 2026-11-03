---
title: TBLKDV1ISLEMTUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkdv1islemtur/
---

# TBLKDV1ISLEMTUR

> KDV BEYANNAMESİ KISMİ TEVKİFAT UYGULANAN İŞLEMLER İŞLEM TÜRÜ BİLGİLERİ TUTULUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 3

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLEM_TUR` | TDBSMALLINT | hayır |  | İşlem türü bilgisi yer alır. |
| 2 | `ISLEM_AD` | varchar(200) | hayır |  | İşlem kodu bilgisi yer alır. |
| 3 | `ORAN` | varchar(100) | hayır |  | Oran bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLEM_TUR, ISLEM_AD, ORAN
FROM dbo.TBLKDV1ISLEMTUR WITH (NOLOCK);
```
