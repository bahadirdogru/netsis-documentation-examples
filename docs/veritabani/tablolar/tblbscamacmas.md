---
title: TBLBSCAMACMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbscamacmas/
---

# TBLBSCAMACMAS

> KURUMSAL KARNE/PERSPEKTIFE AIT AMAC TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `AMACKOD` | varchar(15) | hayır |  | Amac kodunu tutan sahadır. |
| 3 | `ACIKLAMA` | varchar(255) | evet |  | Amac acıklama alanını tutar. |
| 4 | `MISYONINCKEYNO` | TDBINTEGER | hayır |  | Amacın ilişkilendirildigi misyon kodunu tutan sahadır. |
| 5 | `STRATEJIINCKEYNO` | TDBINTEGER | hayır |  | Amacın ilişkilendirildigi strateji kodunu tutan sahadır. |
| 6 | `PERSPEKTIFMASINCKEYNO` | TDBINTEGER | hayır |  | Tanımlanan perspektifin inckey numarasini tutan sahadır. |
| 7 | `GRUPKODU` | varchar(15) | evet |  | Amac grup kodunu tutan sahadır. |
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
| FOREIGN KEY | `TBLBSCAMACMAS_FKEY` | `MISYONINCKEYNO` |
| FOREIGN KEY | `TBLBSCAMACMAS_FKEY2` | `STRATEJIINCKEYNO` |
| FOREIGN KEY | `TBLBSCAMACMAS_FKEY3` | `PERSPEKTIFMASINCKEYNO` |
| PRIMARY KEY | `TBLBSCAMACMAS_PKEY` | `INCKEYNO` |
| UNIQUE | `TBLBSCAMACMAS_UKEY` | `AMACKOD, PERSPEKTIFMASINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `BSCAMAC_IND1` | `AMACKOD, PERSPEKTIFMASINCKEYNO` | Nonclustered, unique |
| `BSCAMAC_IND2` | `AMACKOD, ACIKLAMA` | Nonclustered |
| `TBLBSCAMACMAS_PKEY` | `INCKEYNO` | Clustered, unique |
| `TBLBSCAMACMAS_UKEY` | `AMACKOD, PERSPEKTIFMASINCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, AMACKOD, ACIKLAMA, MISYONINCKEYNO, STRATEJIINCKEYNO, PERSPEKTIFMASINCKEYNO
FROM dbo.TBLBSCAMACMAS WITH (NOLOCK);
```
