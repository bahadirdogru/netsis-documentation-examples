---
title: TBLMAKBKM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmakbkm/
---

# TBLMAKBKM

> BAKIM PROSEDURLERININ GECERLI OLACAGI MAKINE KAYITLARINI TUTAN SAHADIR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 34
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAKINCKEYNO` | TDBINTEGER | hayır |  | Makinenin inckey nosunu tutan sahadır. |
| 4 | `BKMSBINCKEYNO` | TDBINTEGER | hayır |  | Bakım sablonu inckey number alanını tutar. |
| 5 | `SOZINCKEYNO` | TDBINTEGER | evet |  | Bakım sozlesmesi inckey nosunu tutan sahadır. |
| 6 | `BKMSURETIPI` | char(1) | hayır | `S` | Bakım sure tipini tutar;Gun=G ;Ay=A. |
| 7 | `BKMSURESI` | TDBFLOAT | hayır | `0` | Bakım suresini tutan sahadır. |
| 8 | `SIKLIKSURETIPI` | char(1) | hayır | `G` | Bakımın hangi sıklıkta yapılacagının sure tipini tutan sahadır. |
| 9 | `SIKLIKSURESI` | TDBFLOAT | hayır | `0` | Bakımın hangi sıklıkta yapılacagının suresini tutan sahadır. |
| 10 | `BKMBASTAR` | TDBDATETIME | hayır | `getdate` | Bakım baslangıc tarihini tutan sahadır. |
| 11 | `AKTIF` | char(1) | hayır | `E` | Aktif parametresi isaretlendiginde E degerini tutar. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `SIKLIKTIPI` | char(1) | hayır |  | P |
| 27 | `DURUMTIPI1` | char(1) | hayır |  | 0 |
| 28 | `DURUMTIPI2` | char(1) | hayır |  | 0 |
| 29 | `DURUMDEGER1` | TDBFLOAT | evet |  |  |
| 30 | `DURUMDEGER2` | TDBFLOAT | evet |  |  |
| 31 | `DURUMSURETIPI1` | char(1) | evet |  |  |
| 32 | `DURUMSURETIPI2` | char(1) | evet |  |  |
| 33 | `DURUMOPERATOR` | char(1) | evet |  |  |
| 34 | `MAKTIP` | TDBINTEGER | hayır |  |  |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKBKM_IND_1` | `BKMSBINCKEYNO, MAKINCKEYNO, SOZINCKEYNO` | Nonclustered, unique |
| `TBLMAKBKM_IND_2` | `MAKINCKEYNO` | Nonclustered |
| `TBLMAKBKM_IND_3` | `SOZINCKEYNO` | Nonclustered |
| `TBLMAKBKM_IND_4` | `SUBE_KODU` | Nonclustered |
| `TBLMAKBKM_IND_5` | `BKMSBINCKEYNO, MAKINCKEYNO, AKTIF` | Nonclustered |
| `TBLMAKBKM_IND_6` | `MAKINCKEYNO, AKTIF, BKMBASTAR` | Nonclustered |
| `TBLMAKBKM_IND_7` | `AKTIF` | Nonclustered |
| `TBLMAKBKM_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, MAKINCKEYNO, BKMSBINCKEYNO, SOZINCKEYNO, BKMSURETIPI
FROM dbo.TBLMAKBKM WITH (NOLOCK);
```
