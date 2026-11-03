---
title: TBLBSCOLCUMMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscolcummas/
---

# TBLBSCOLCUMMAS

> KURUMSAL KARNE/OLCUM KAYITLARINI TUTAN TABLODUR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OLCUMKOD` | varchar(15) | hayır |  | Olcum kodunu tutan sahadır. |
| 3 | `AMACINCKEYNO` | TDBINTEGER | evet |  | Amac inckey no alanını tutan sahadır. |
| 4 | `ACIKLAMA` | varchar(255) | evet |  | Olcum acıklama alanını tutan sahadır. |
| 5 | `ONCEKIDEGERTARIH` | TDBDATETIME | evet |  | Bir önceki olcumun tarihini tutan sahadır. |
| 6 | `ONCEKIDEGER` | TDBFLOAT | evet |  | Bir onceki olcum degerini tutan sahadır. |
| 7 | `SONCALISMATARIHI` | TDBDATETIME | evet |  | Son calısma tarihini tutan sahadır. |
| 8 | `SIMDIKIDEGER` | TDBFLOAT | evet |  | Simdiki olcum degerini tutar. |
| 9 | `BIRIM` | varchar(2) | evet |  | Birim sahasıdır. |
| 10 | `PERIYODTIPI` | TDBBYTE | evet |  | Periyod tipini tutan sahadır. |
| 11 | `BAZTARIHI` | TDBDATETIME | evet |  | Baz tarihini tutan sahadır. |
| 12 | `SIMDIKIDEGERSCRIPT` | TDBMEMO | evet |  | Olcum degerlerini tutar. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSCOLCUMMAS_FKEY` | `AMACINCKEYNO` |
| PRIMARY KEY | `TBLBSCOLCUMMAS_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCOLCUMMAS_U` | `OLCUMKOD, AMACINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCOLCUMMAS_IND1` | `OLCUMKOD, AMACINCKEYNO` | Nonclustered, unique |
| `BSCOLCUMMAS_IND2` | `OLCUMKOD, ACIKLAMA` | Nonclustered |
| `TBLBSCOLCUMMAS_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCOLCUMMAS_U` | `OLCUMKOD, AMACINCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, OLCUMKOD, AMACINCKEYNO, ACIKLAMA, ONCEKIDEGERTARIH, ONCEKIDEGER
FROM dbo.TBLBSCOLCUMMAS WITH (NOLOCK);
```
