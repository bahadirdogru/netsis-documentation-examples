---
title: TBLKODTANIMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkodtanimtra/
---

# TBLKODTANIMTRA

> Açıklama yok.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PKOD` | varchar(50) | evet |  |  |
| 3 | `SIRANO` | TDBINTEGER | evet |  | Sıra no bilgisini tutar. |
| 4 | `BASLIK` | varchar(35) | evet |  | Başlık bilgisinin tutulduğu saha |
| 5 | `ACIKLAMA` | varchar(35) | evet |  | Girilen açıklamayı gösterir. |
| 6 | `TUR` | varchar(2) | evet |  |  |
| 7 | `KISIT` | TDBMEMO | evet |  |  |
| 8 | `SOR` | TDBBYTE | evet | `0` |  |
| 9 | `DINAMIK` | TDBBYTE | evet | `0` |  |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKODTANIMTRA_FKEY` | `PKOD` |
| PRIMARY KEY | `TBLKODTANIMTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKODTANIMTRA_PKEY` | `INCKEYNO` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, PKOD, SIRANO, BASLIK, ACIKLAMA, TUR
FROM dbo.TBLKODTANIMTRA WITH (NOLOCK);
```
