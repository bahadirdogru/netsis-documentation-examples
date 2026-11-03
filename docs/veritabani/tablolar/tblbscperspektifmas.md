---
title: TBLBSCPERSPEKTIFMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscperspektifmas/
---

# TBLBSCPERSPEKTIFMAS

> KURUMSAL KARNE/MODELE AIT PERSPEKTIF TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MODELINCKEYNO` | TDBINTEGER | hayır |  | Tanımlanan modelin inckey numarasini tutan sahadır. |
| 3 | `PERSPEKTIFKOD` | varchar(15) | hayır |  | Perspektif kodunu tutan sahadır. |
| 4 | `ARALIK` | TDBBYTE | evet |  | Degerlendirmenin yapılacagı aralık sayısını tutan sahadır. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | Perspektif acıklamasını tutan sahadır. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSCPERSPEKTIFMAS_FKEY` | `MODELINCKEYNO` |
| PRIMARY KEY | `TBLBSCPERSPEKTIFMAS_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCPERSPEKTIFMAS_UKEY` | `PERSPEKTIFKOD, MODELINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCPERSPEKTIF_IND1` | `PERSPEKTIFKOD, MODELINCKEYNO` | Nonclustered, unique |
| `BSCPERSPEKTIF_IND2` | `PERSPEKTIFKOD, ACIKLAMA` | Nonclustered |
| `TBLBSCPERSPEKTIFMAS_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCPERSPEKTIFMAS_UKEY` | `PERSPEKTIFKOD, MODELINCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MODELINCKEYNO, PERSPEKTIFKOD, ARALIK, ACIKLAMA, KAYITYAPANKUL
FROM dbo.TBLBSCPERSPEKTIFMAS WITH (NOLOCK);
```
