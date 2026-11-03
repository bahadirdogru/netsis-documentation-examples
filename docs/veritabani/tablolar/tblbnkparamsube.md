---
title: TBLBNKPARAMSUBE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkparamsube/
---

# TBLBNKPARAMSUBE

> BANKA MODULU SUBE PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BSMVMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan BSMV Muhasebe kodunu tutar. |
| 3 | `KKDFMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan KKDF Muhasebe kodunu tutar. |
| 4 | `SSDFMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan SSDF Muhasebe kodunu tutar. |
| 5 | `DAMGAMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan Damga Vergisi Muhasebe kodunu tutar. |
| 6 | `ISMASMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan İslem Masrafları Muhasebe kodunu tutar. |
| 7 | `TEMMEKKOMMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan Tem.Mek.Kom. Muhasebe kodunu tutar. |
| 8 | `FAIZGIDERMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan Faiz Giderleri Muhasebe kodunu tutar. |
| 9 | `FAIZGELIRMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan Faiz Gelirleri Muhasebe kodunu tutar. |
| 10 | `MSIGVMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan BSMV Muhasebe kodunu tutar. |
| 11 | `KRFAIZKOMMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan kredi Faiz Kom. Muhasebe kodunu tutar. |
| 12 | `OZISLEMVERMUHKODU` | TDBMUHKOD | evet |  | Sube bazında tanımlanmıs olan Ozel Islem Vergisi Muhasebe kodunu tutar. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK11` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK12` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK13` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK14` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK15` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `KRTMSRFENT` | char(1) | evet |  | Kart Masrafları Satıs Anında Entegrasyona Atılsın isaretli ise E;degil ise NULL degerini tutar. |
| 33 | `KRTMSRFTOPLUENT` | char(1) | evet |  | Kart Masrafları Entegrasyona Toplu Atılsın isaretli ise E;degil ise H degerini tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKPARAMSUBEFK1` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBNKPARAMSUBEPK` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKPARAMSUBEPK` | `SUBE_KODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BSMVMUHKODU, KKDFMUHKODU, SSDFMUHKODU, DAMGAMUHKODU, ISMASMUHKODU
FROM dbo.TBLBNKPARAMSUBE WITH (NOLOCK);
```
