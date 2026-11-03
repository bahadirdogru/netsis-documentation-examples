---
title: TBLSTOKSORUMGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstoksorumgrup/
---

# TBLSTOKSORUMGRUP

> STOK SORUMLU GRUP TANIMLAMARI EKRANINDAN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 3

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SORUMLUGRUP` | TDBGRUPKOD | evet |  | Sorumlu grupların kodlarını gösterir. |
| 2 | `ACIKLAMA` | varchar(30) | evet |  | Sorumlu gruba ait girilen kodun açıklamasını gösterir. |
| 3 | `KULLID` | TDBSMALLINT | hayır |  | Sorumlu gruptaki kişilerin kullanabileceği id numaralarını gösterir. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKSORUMGRUP_IND_1` | `SORUMLUGRUP+KULLID` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SORUMLUGRUP, ACIKLAMA, KULLID
FROM dbo.TBLSTOKSORUMGRUP WITH (NOLOCK);
```
