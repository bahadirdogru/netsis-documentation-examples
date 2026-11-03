---
title: TBLMAGAZALAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmagazalar/
---

# TBLMAGAZALAR

> MAGAZA TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `SUBEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBEKODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISIM` | varchar(50) | evet |  | Magaza ismini tutan sahadır. |
| 3 | `CARIKOD` | TDBCARIKOD | evet |  | Cari kod alanını tutan sahadır. |
| 4 | `CARIKOD2` | TDBCARIKOD | evet |  | Cari kod 2 alanını tutan sahadır. |
| 5 | `DEPOKODU` | TDBSMALLINT | evet |  | Depo kodu alanını tutan sahadır. |
| 6 | `MUHKOD` | TDBMUHKOD | evet |  | Muhasabe kodu alanını tutan sahadır. |
| 7 | `MUHKOD2` | TDBMUHKOD | evet |  | Muhasebe kodu-2 alanını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAGAZALAR_FKEY` | `SUBEKODU` |
| FOREIGN KEY | `TBLMAGAZALAR_FKEY2` | `MUHKOD` |
| FOREIGN KEY | `TBLMAGAZALAR_FKEY3` | `MUHKOD` |
| FOREIGN KEY | `TBLMAGAZALAR_FKEY4` | `CARIKOD` |
| FOREIGN KEY | `TBLMAGAZALAR_FKEY5` | `CARIKOD2` |
| PRIMARY KEY | `TBLMAGAZALAR_PKEY` | `SUBEKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAGAZALAR_PKEY` | `SUBEKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBEKODU, ISIM, CARIKOD, CARIKOD2, DEPOKODU, MUHKOD
FROM dbo.TBLMAGAZALAR WITH (NOLOCK);
```
