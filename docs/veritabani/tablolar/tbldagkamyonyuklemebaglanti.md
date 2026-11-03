---
title: TBLDAGKAMYONYUKLEMEBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagkamyonyuklemebaglanti/
---

# TBLDAGKAMYONYUKLEMEBAGLANTI

> VASITA/YUKLEME GRUBU BAGLANTISI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `VASITAKOD, STKYUKKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `VASITAKOD` | varchar(15) | hayır |  | Vasıta plaka numarasını tutar. |
| 2 | `STKYUKKOD` | varchar(15) | hayır |  | Yukleme grup kodunu tutar. |
| 3 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGKAMYONYUKLEMEBAGLANTI` | `VASITAKOD, STKYUKKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGKAMYONYUKLEMEBAGLANTI` | `VASITAKOD, STKYUKKOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 VASITAKOD, STKYUKKOD, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLDAGKAMYONYUKLEMEBAGLANTI WITH (NOLOCK);
```
