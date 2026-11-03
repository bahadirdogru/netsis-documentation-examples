---
title: TBLBKMSBPER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsbper/
---

# TBLBKMSBPER

> BAKIM ISLEMINI YAPAN PERSONELLERIN KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REFTIP` | TDBSMALLINT | hayır |  | Referans tipini tutar. |
| 3 | `REFINCKEYNO` | TDBINTEGER | hayır |  | Referans inckeyno sunu tutar. |
| 4 | `SIRANO` | varchar(8) | hayır |  | Sıra no alanını tutar. |
| 5 | `PERINCKEYNO` | TDBINTEGER | evet |  | Personel kodunu tutan sahadır. |
| 6 | `ALTERNATIF` | TDBSMALLINT | hayır |  | Alternatif alanını tutan sahadır. |
| 7 | `SURETIPI` | char(1) | hayır |  | Sure tipini tutan sahadır. |
| 8 | `SURESI` | TDBFLOAT | hayır |  | Suresi alanını tutar. |
| 9 | `BIRIMUCRET` | TDBFLOAT | hayır |  | Birim ucret bilgisini tutan sahadır. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMSBSTOK_FKEY1` | `STOKKODU` |
| PRIMARY KEY | `TBLBKMSBSTOK_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSBPER_IND_1` | `REFTIP, REFINCKEYNO, SIRANO` | Nonclustered, unique |
| `TBLBKMSBPER_IND_2` | `PERINCKEYNO` | Nonclustered |
| `TBLBKMSBPER_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, REFTIP, REFINCKEYNO, SIRANO, PERINCKEYNO, ALTERNATIF
FROM dbo.TBLBKMSBPER WITH (NOLOCK);
```
