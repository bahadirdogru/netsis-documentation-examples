---
title: TBLCAODEMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcaodemas/
---

# TBLCAODEMAS

> ODEME PLANI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ODEKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ODEKOD` | TDBGRUPKOD | hayır |  | Odeme kodunu tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama alanını tutar. |
| 5 | `KILIT` | char(1) | evet |  | Kilit parametresi isaretli ise E degil ise H degerini tutar. |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `V_YEDEK7` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK8` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLCAODEMASPKEY` | `ODEKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCAODEMAS_IND_1` | `ISLETME_KODU, SUBE_KODU, ODEKOD` | Nonclustered, Unique |
| `TBLCAODEMAS_IND_2` | `KILIT` | Nonclustered |
| `TBLCAODEMASPKEY` | `ODEKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ODEKOD, SUBE_KODU, ISLETME_KODU, ACIKLAMA, KILIT, C_YEDEK1
FROM dbo.TBLCAODEMAS WITH (NOLOCK);
```
