---
title: TBLGECERSIZBELGE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblgecersizbelge/
---

# TBLGECERSIZBELGE

> Geçersiz veya eksik belgelerin tutulduğu tablodur.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 5

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `FTIRSIP` | char(1) | hayır |  | FATUIRS-FTIRSIP kolonuna karşılık gelir. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 5 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 FTIRSIP, FATIRS_NO, CARI_KODU, DUZELTMEYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLGECERSIZBELGE WITH (NOLOCK);
```
