---
title: TBLBSCSTRATEJIMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscstratejimas/
---

# TBLBSCSTRATEJIMAS

> KURUMSAL KARNE/MODELE AIT STRATEJI TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MODELINCKEYNO` | TDBINTEGER | hayır |  | Tanımlanan modelin inckey numarasini tutan sahadır. |
| 3 | `STRATEJIKOD` | varchar(15) | hayır |  | Strateji kodunu tutan sahadır. |
| 4 | `ACIKLAMA` | varchar(255) | evet |  | Strateji acıklamasını tutan sahadır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSCSTRATEJIMAS_FKEY` | `MODELINCKEYNO` |
| PRIMARY KEY | `TBLBSCSTRATEJIMAS_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCSTRATEJIMAS_UKEY` | `STRATEJIKOD, MODELINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCSTRATEJI_IND1` | `STRATEJIKOD, MODELINCKEYNO` | Nonclustered, unique |
| `BSCSTRATEJI_IND2` | `STRATEJIKOD, ACIKLAMA` | Nonclustered |
| `TBLBSCSTRATEJIMAS_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCSTRATEJIMAS_UKEY` | `STRATEJIKOD, MODELINCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MODELINCKEYNO, STRATEJIKOD, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLBSCSTRATEJIMAS WITH (NOLOCK);
```
