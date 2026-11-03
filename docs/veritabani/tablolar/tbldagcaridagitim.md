---
title: TBLDAGCARIDAGITIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagcaridagitim/
---

# TBLDAGCARIDAGITIM

> CARI DAGITIM BILGILERI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `CARIKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 2 | `DAGITIMAD` | varchar(20) | evet |  | Dagıtım adını tutar. |
| 3 | `MERKEZCARIKOD` | TDBCARIKOD | evet |  | Merkez cari kodunu tutar. |
| 4 | `DAGITIMGRUPKOD` | TDBGRUPKOD | evet |  | Dagıtım grup kodunu tutar. |
| 5 | `BOLGEKOD` | varchar(8) | evet |  | Dagıtım bolge kodunu tutar. |
| 6 | `DAGITIMSIRA` | TDBINTEGER | evet |  | Dagıtım sıra noyu tutar. |
| 7 | `CARINOT` | varchar(100) | evet |  | Acıklama alanını tutar. |
| 8 | `ODEMETIP` | TDBINTEGER | evet |  | Odeme tipini tutar. |
| 9 | `VASITAKOD` | varchar(15) | evet |  | Vasıta kodunu tutar. |
| 10 | `ZIYARETSIRA` | TDBINTEGER | evet |  | Plasiyerin musteriyi kacıncı sırada ziyaret edecegi bilgisini tutar. |
| 11 | `KREDIKARTINO` | varchar(25) | evet |  | Kredi kartı numarasını tutar. |
| 12 | `BANKAADI` | varchar(80) | evet |  | Banka adını tutar. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `C_YEDEK1` | char(1) | evet |  | El terminaline aktarılsın parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGCARIDAGITIM` | `CARIKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `IDX_TBLDAG_BKOD_SIRA` | `BOLGEKOD, DAGITIMSIRA` | nonclustered |
| `IDX_TBLDAGCARIDAGITIM_DGGRPKOD` | `DAGITIMGRUPKOD` | nonclustered |
| `IDX_TBLDAGCARIDAGITIM_MCKOD` | `MERKEZCARIKOD` | nonclustered |
| `IDX_TBLDAGCARIDAGITIM_ODEMETIP` | `ODEMETIP` | nonclustered |
| `PK_TBLDAGCARIDAGITIM` | `CARIKOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARIKOD, DAGITIMAD, MERKEZCARIKOD, DAGITIMGRUPKOD, BOLGEKOD, DAGITIMSIRA
FROM dbo.TBLDAGCARIDAGITIM WITH (NOLOCK);
```
