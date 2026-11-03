---
title: TBLBKMSBIS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsbis/
---

# TBLBKMSBIS

> BAKIMIN NE TUR BIR BAKIM OLDUGU ILE ILGILI GENEL PROSEDURLERIN KAYDEDILDIGI TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REFTIP` | TDBSMALLINT | hayır |  | Referans tipini tutar. |
| 3 | `REFINCKEYNO` | TDBINTEGER | hayır |  | Referans inckeyno sunu tutar. |
| 4 | `SIRANO` | varchar(8) | hayır |  | Sıra no alanını tutar. |
| 5 | `ACIKLAMA` | TDBMEMO | evet |  | Acıklama alanını tutar. |
| 6 | `BKMTIPINCKEYNO` | TDBINTEGER | hayır |  | Bakım tip inckeynosunu tutan sahadır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMSBIS_FKEY1` | `BKMTIPINCKEYNO` |
| PRIMARY KEY | `TBLBKMSBIS_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSBIS_IND_1` | `REFTIP, REFINCKEYNO, SIRANO` | Nonclustered, unique |
| `TBLBKMSBIS_IND_2` | `BKMTIPINCKEYNO` | Nonclustered |
| `TBLBKMSBIS_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, REFTIP, REFINCKEYNO, SIRANO, ACIKLAMA, BKMTIPINCKEYNO
FROM dbo.TBLBKMSBIS WITH (NOLOCK);
```
