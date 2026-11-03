---
title: TBLMALITEMP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmalitemp/
---

# TBLMALITEMP

> Açıklama yok.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 8

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MAMKOD` | TDBSTOKKOD | hayır |  | Maliyet grup kodu sahasıdır. |
| 3 | `MUHKOD` | TDBMUHKOD | evet |  | Muhasebe kodunu gösterir |
| 4 | `REFKOD` | TDBREFKOD | evet |  | Referans kodunu tutan sahadır. |
| 5 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisinin içerildiği saha |
| 6 | `MIKTAR` | TDBFLOAT | evet |  | Miktar alanını tutar. |
| 7 | `BA` | char(1) | hayır |  | Borç, alacak bilgisini gösteirir |
| 8 | `CURTUTAR` | TDBFLOAT | evet |  | Cur tutar bilgini gösterir |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALITEMP_IND_1` | `MAMKOD, MUHKOD, REFKOD, BA` | nonclustered, unique |
| `TBLMALITEMP_IND_2` | `ISLETME_KODU` | nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MAMKOD, MUHKOD, REFKOD, TUTAR, MIKTAR
FROM dbo.TBLMALITEMP WITH (NOLOCK);
```
