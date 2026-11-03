---
title: TBLKODTANIMMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkodtanimmas/
---

# TBLKODTANIMMAS

> Açıklama yok.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(50) | hayır |  | Haric tutulan kodu tutan sahadır. |
| 2 | `ISIM` | varchar(100) | evet |  |  |
| 3 | `AYRAC` | char(1) | evet |  |  |
| 4 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKODTANIMMAS_PKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKODTANIMMAS_PKEY` | `KOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, ISIM, AYRAC, C_YEDEK1, C_YEDEK2, I_YEDEK1
FROM dbo.TBLKODTANIMMAS WITH (NOLOCK);
```
