---
title: TBLDAGPENETRASYON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagpenetrasyon/
---

# TBLDAGPENETRASYON

> Açıklama yok.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `TARIH, STOKKOD, CARIKOD, PLASIYERKOD, VARMI, MIKTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOKKOD` | TDBSTOKKOD | hayır |  | Stok kodunu tutR. |
| 2 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 3 | `PLASIYERKOD` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 4 | `TARIH` | datetime | hayır |  | Tarih bilgisini tutar. |
| 5 | `VARMI` | char(1) | hayır |  |  |
| 6 | `MIKTAR` | int | hayır |  | Miktar bilgisini tutar. |
| 7 | `FIYAT` | TDBFLOAT | evet |  | Fiyat bilgisini tutar. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGPENETRASYON` | `TARIH, STOKKOD, CARIKOD, PLASIYERKOD, VARMI, MIKTAR` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGPENETRASYON` | `TARIH, STOKKOD, CARIKOD, PLASIYERKOD, VARMI, MIKTAR` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 STOKKOD, CARIKOD, PLASIYERKOD, TARIH, VARMI, MIKTAR
FROM dbo.TBLDAGPENETRASYON WITH (NOLOCK);
```
