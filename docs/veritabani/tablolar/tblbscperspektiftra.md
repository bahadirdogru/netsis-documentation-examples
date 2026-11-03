---
title: TBLBSCPERSPEKTIFTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscperspektiftra/
---

# TBLBSCPERSPEKTIFTRA

> KURUMSAL KARNE/MODELE AIT PERSPEKTIF DETAY TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PERSPEKTIFINCKEYNO` | TDBINTEGER | hayır |  | Perspektif inckey nosunu tutan sahadır. |
| 3 | `HEDEFID` | varchar(12) | evet |  | Perspektife ait derece kodunu tutan sahadır. |
| 4 | `ACIKLAMA` | varchar(255) | evet |  | Derece koduna ait acıklamayı tutan sahadır. |
| 5 | `WINPATH` | varchar(200) | evet |  | Resimlerin alınacagi dizini tutan sahadır. |
| 6 | `WEBPATH` | varchar(200) | evet |  | Resimler web sitesimnden alınacak ise web sitesi linkini tutan sahadır. |
| 7 | `HEDEFRENK` | TDBMEMO | evet |  | Hedefe ait renk secimini tutan sahadır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSCPERSPEKTIFTRA_FKEY` | `PERSPEKTIFINCKEYNO` |
| PRIMARY KEY | `TBLBSCPERSPEKTIFTRA_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCPERSPEKTIFTRA_UKEY` | `HEDEFID, PERSPEKTIFINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCPERSPEKTIFTRA_IND1` | `HEDEFID, PERSPEKTIFINCKEYNO` | Nonclustered, unique |
| `BSCPERSPEKTIFTRA_IND2` | `HEDEFID, ACIKLAMA` | Nonclustered |
| `TBLBSCPERSPEKTIFTRA_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCPERSPEKTIFTRA_UKEY` | `HEDEFID, PERSPEKTIFINCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, PERSPEKTIFINCKEYNO, HEDEFID, ACIKLAMA, WINPATH, WEBPATH
FROM dbo.TBLBSCPERSPEKTIFTRA WITH (NOLOCK);
```
