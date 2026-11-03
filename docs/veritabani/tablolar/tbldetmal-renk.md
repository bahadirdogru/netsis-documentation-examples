---
title: TBLDETMAL_RENK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldetmal-renk/
---

# TBLDETMAL_RENK

> Detaylı maliyet analizi renklendirme kodları yer alır.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 5

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `TIP` | char(1) | hayır |  | Tip bilgisi yer alır. |
| 4 | `KOD` | varchar(20) | hayır |  | Kodu yer alır. |
| 5 | `RENK` | varchar(20) | evet |  | Renk içerik kodu yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, TIP, KOD, RENK
FROM dbo.TBLDETMAL_RENK WITH (NOLOCK);
```
