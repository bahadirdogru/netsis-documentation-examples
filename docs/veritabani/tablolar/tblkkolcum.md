---
title: TBLKKOLCUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkolcum/
---

# TBLKKOLCUM

> KAYIT>GRUP/ÖLÇÜM KAYITLARI>KALİTE ÖLÇÜM BİLGİLERİ KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(8) | hayır |  | Ölçü Kodunu gösterir. |
| 2 | `OLCUBR` | varchar(5) | evet |  | Ölçü Birimini gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 4 | `SAYISAL` | char(1) | evet | `H` | Sayısal parametresi işaretli ise 'E', değil ise 'H' değerini ifade etmektedir. |
| 5 | `ONDALIK` | TDBBYTE | evet | `0` | Ondalık değerini gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKOLCUMPKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKOLCUMIND_1` | `OLCUBR` | Non-unique, Non-clustered |
| `TBLKKOLCUMIND_2` | `SAYISAL` | Non-unique, Non-clustered |
| `TBLKKOLCUMIND_3` | `ACIKLAMA` | Non-unique, Non-clustered |
| `TBLKKOLCUMIND_4` | `ISLETME_KODU+KOD` | Unique, Non-clustered |
| `TBLKKOLCUMPKEY` | `KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, OLCUBR, ACIKLAMA, SAYISAL, ONDALIK, KAYITYAPANKUL
FROM dbo.TBLKKOLCUM WITH (NOLOCK);
```
