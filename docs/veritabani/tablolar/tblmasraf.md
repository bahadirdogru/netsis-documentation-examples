---
title: TBLMASRAF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmasraf/
---

# TBLMASRAF

> MASRAF MERKEZI TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 11
- **Birincil anahtar:** `MKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MKOD` | varchar(8) | hayır |  | Masraf merkezi kodunu tutan sahadır. |
| 2 | `MUHKOD` | TDBMUHKOD | evet |  | Masraf kodunun muhasabe hesap kodunu tutan sahadır. |
| 3 | `ACIKLAMA` | varchar(30) | evet |  | masraf kodu acıklaması sahasıdır. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `SATMUHKOD` | TDBMUHKOD | evet |  | Satıs hesap kodunu tutan sahadır. |
| 6 | `S_YEDEK1` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `S_YEDEK2` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `S_YEDEK3` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `S_YEDEK4` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `S_YEDEK5` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMASRAF_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMASRAF_FKEY2` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMASRAF_PKEY` | `MKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMASRAF_IND1` | `ISLETME_KODU, SUBE_KODU, MKOD` | Nonclustered, unique |
| `TBLMASRAF_PKEY` | `MKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 MKOD, MUHKOD, ACIKLAMA, SUBE_KODU, SATMUHKOD, S_YEDEK1
FROM dbo.TBLMASRAF WITH (NOLOCK);
```
