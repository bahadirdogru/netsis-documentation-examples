---
title: TBLDAGKMTAKIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagkmtakip/
---

# TBLDAGKMTAKIP

> KILOMETRE TAKIP BILGILERINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `PLSKOD, ACILISZAMAN`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PLSKOD` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 2 | `ACILISZAMAN` | TDBDATETIME | hayır |  | Acılıs zamanini tutar. |
| 3 | `KAPANISZAMAN` | TDBDATETIME | evet |  | Kapanis zamanini tutar. |
| 4 | `ACILISKM` | TDBFLOAT | evet |  | Acılıs Km bilgisini tutar. |
| 5 | `KAPANISKM` | TDBFLOAT | evet |  | Kapanis Km bilgisini tutar. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGKMTAKIP` | `PLSKOD, ACILISZAMAN` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGKMTAKIP` | `PLSKOD, ACILISZAMAN` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PLSKOD, ACILISZAMAN, KAPANISZAMAN, ACILISKM, KAPANISKM, KAYITYAPANKUL
FROM dbo.TBLDAGKMTAKIP WITH (NOLOCK);
```
