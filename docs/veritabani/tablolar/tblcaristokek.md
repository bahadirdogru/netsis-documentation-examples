---
title: TBLCARISTOKEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcaristokek/
---

# TBLCARISTOKEK

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARISTOK_ID` | TDBINTEGER | hayır |  | Stok kodu bilgisi yer alır. |
| 2 | `KT_AYN_ST1` | char(1) | evet |  | Eklenen kolona ait değer yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 CARISTOK_ID, KT_AYN_ST1
FROM dbo.TBLCARISTOKEK WITH (NOLOCK);
```
