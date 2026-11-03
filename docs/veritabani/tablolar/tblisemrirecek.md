---
title: TBLISEMRIRECEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemrirecek/
---

# TBLISEMRIRECEK

> İŞ EMRİNDE EKLENEN EK ALANLARA AİT AÇIKLAMALAR YER ALIR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNOEK` | TDBINTEGER | hayır |  | TBLISEMRIREC (INCKEYNO) |
| 2 | `KT_R1` | char(1) | evet |  | Eklenen açıklama bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNOEK, KT_R1
FROM dbo.TBLISEMRIRECEK WITH (NOLOCK);
```
