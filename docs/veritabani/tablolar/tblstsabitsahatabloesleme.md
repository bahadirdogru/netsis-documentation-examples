---
title: TBLSTSABITSAHATABLOESLEME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstsabitsahatabloesleme/
---

# TBLSTSABITSAHATABLOESLEME

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi yer alır. |
| 2 | `KT_AYN_1` | char(1) | evet |  | Eklenen kolonun değeri yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, KT_AYN_1
FROM dbo.TBLSTSABITSAHATABLOESLEME WITH (NOLOCK);
```
