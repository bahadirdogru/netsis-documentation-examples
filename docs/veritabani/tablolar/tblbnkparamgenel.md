---
title: TBLBNKPARAMGENEL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkparamgenel/
---

# TBLBNKPARAMGENEL

> BANKA MODULU GENEL PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BSMVORAN` | TDBFLOAT | evet | `0` | Tanımlanan Banka Sigorta Muamele Vergisi oranının tutar. |
| 2 | `KKDFORAN` | TDBFLOAT | evet | `0` | Tanımlanan Kaynak Kullanım Destekleme Fonu oranını tutar. |
| 3 | `SSDFORAN` | TDBFLOAT | evet | `0` | Tanımlanan Savunma Sanayi Destekleme Fonu oranını tutar. |
| 4 | `DAMGAORAN` | TDBFLOAT | evet | `0` | Tanımlanan damga vergisi oranını tutar. |
| 5 | `MSIGVORAN` | TDBFLOAT | evet | `0` | Tanımlanan Menkul Sermaye İradı Gelir Vergisi oranını tutar. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK4` | char(1) | evet |  | Havale/Eft Talimat Basım Logu Tutulsun parametresi isaretli ise E;degil ise H degerini tutar. |
| 14 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK12` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `No index defined.` | `` |  |

## Örnek sorgu

```sql
SELECT TOP 100 BSMVORAN, KKDFORAN, SSDFORAN, DAMGAORAN, MSIGVORAN, KAYITYAPANKUL
FROM dbo.TBLBNKPARAMGENEL WITH (NOLOCK);
```
