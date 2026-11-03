---
title: TBLBKMTALEP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmtalep/
---

# TBLBKMTALEP

> BAKIM EMIRLERI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 38
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `BELGENO` | TDBBELGENO | hayır |  | Emir no alanını tutar. |
| 4 | `REFTIP` | TDBSMALLINT | hayır |  | Referans tipini tutar. |
| 5 | `REFINCKEYNO` | TDBINTEGER | evet |  | Referans inckeyno sunu tutar. |
| 6 | `PERINCKEYNO` | TDBINTEGER | evet |  | Personel inckeyno'sunu tutan sahadır. |
| 7 | `MAKINCKEYNO` | TDBINTEGER | hayır |  | Makine inckey numarasını tutan sahadır. |
| 8 | `TLPBASTAR` | TDBDATETIME | hayır | `getdate()` | Emir tarihini tutan sahadır. |
| 9 | `BKMBASTAR` | TDBDATETIME | evet |  | Bakım baslangıc tarihini tutan sahadır. |
| 10 | `BITTAR` | TDBDATETIME | evet |  | Kapanıs tarihini tutar. |
| 11 | `DURUMU` | TDBSMALLINT | hayır | `-1` | Durum kodunu tutan sahadır. |
| 12 | `DRMINCKEYNO` | TDBINTEGER | hayır |  | Durum kodunun inckey numarasını tutan sahadır. |
| 13 | `ARIZAKODU` | varchar(8) | evet |  | Arıza kodunu tutar. |
| 14 | `TLPACIKLAMA` | TDBMEMO | evet |  | Emir acıklama alnını tutan sahadır. |
| 15 | `BKMACIKLAMA` | TDBMEMO | evet |  | Bakım acıklama alanını tutan sahadır. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `KATEGORI` | TDBBYTE | hayır |  |  |
| 35 | `DURUSLU` | char(1) | hayır |  |  |
| 36 | `MAKTIP` | TDBINTEGER | hayır |  |  |
| 37 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 38 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMTALEP_IND_1` | `BELGENO` | Nonclustered, unique |
| `TBLBKMTALEP_IND_2` | `MAKINCKEYNO` | Nonclustered |
| `TBLBKMTALEP_IND_3` | `PERINCKEYNO` | Nonclustered |
| `TBLBKMTALEP_IND_4` | `DRMINCKEYNO` | Nonclustered |
| `TBLBKMTALEP_IND_5` | `ARIZAKODU` | Nonclustered |
| `TBLBKMTALEP_IND_6` | `SUBE_KODU, BELGENO` | Nonclustered |
| `TBLBKMTALEP_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, BELGENO, REFTIP, REFINCKEYNO, PERINCKEYNO
FROM dbo.TBLBKMTALEP WITH (NOLOCK);
```
