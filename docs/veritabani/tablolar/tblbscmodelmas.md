---
title: TBLBSCMODELMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscmodelmas/
---

# TBLBSCMODELMAS

> KURUMSAL KARNE MODEL TANIMLAMA KAYITLARINI TUTAN SAHADIR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `MODELKOD` | varchar(15) | hayır |  | Tanımlanan model kodunu tutan sahadır. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | Model acıklamasını tutan sahadır. |
| 6 | `ISPORTLET` | TDBSMALLINT | evet |  | Portlete eklensin parametresi işaretli ise -1 değerini tutan sahadır. |
| 7 | `ISGRAFIK` | TDBSMALLINT | evet |  | Grafik rapor ise 1, grid rapor ise 0 degerini tutan sahadır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSCMODELMAS_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBSCMODELMAS_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBSCMODELMAS_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCMODELMAS_UKEY` | `MODELKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCMODEL_IND1` | `MODELKOD` | Nonclustered, unique |
| `BSCMODEL_IND2` | `MODELKOD, ACIKLAMA` | Nonclustered |
| `TBLBSCMODELMAS_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCMODELMAS_UKEY` | `MODELKOD` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MODELKOD, ACIKLAMA, ISPORTLET
FROM dbo.TBLBSCMODELMAS WITH (NOLOCK);
```
