---
title: TBLDAGZIYARETFREKANS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagziyaretfrekans/
---

# TBLDAGZIYARETFREKANS

> CARI ZIYARET TANIMLARI/ZIYARET FREKANSLARI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 43
- **Birincil anahtar:** `CARIKOD, PLASIYERKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 3 | `PLASIYERKOD` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 4 | `HAFTA1` | char(1) | evet |  | Ziyaret haftalarından 1.Hafta isaretli ise 1 degerini tutar. |
| 5 | `HAFTA2` | char(1) | evet |  | Ziyaret haftalarından 2.Hafta isaretli ise 1 degerini tutar. |
| 6 | `HAFTA3` | char(1) | evet |  | Ziyaret haftalarından 3.Hafta isaretli ise 1 degerini tutar. |
| 7 | `HAFTA4` | char(1) | evet |  | Ziyaret haftalarından 4.Hafta isaretli ise 1 degerini tutar. |
| 8 | `GUN1` | char(1) | evet |  | Ziyaret gunlerinden Pazartesi isaretli ise 1 degerini tutar. |
| 9 | `GUN2` | char(1) | evet |  | Ziyaret gunlerinden Salı isaretli ise 1 degerini tutar. |
| 10 | `GUN3` | char(1) | evet |  | Ziyaret gunlerinden Carsamba isaretli ise 1 degerini tutar. |
| 11 | `GUN4` | char(1) | evet |  | Ziyaret gunlerinden Persembe isaretli ise 1 degerini tutar. |
| 12 | `GUN5` | char(1) | evet |  | Ziyaret gunlerinden Cuma isaretli ise 1 degerini tutar. |
| 13 | `GUN6` | char(1) | evet |  | Ziyaret gunlerinden Cumartesi isaretli ise 1 degerini tutar. |
| 14 | `GUN7` | char(1) | evet |  | Ziyaret gunlerinden Pazar isaretli ise 1 degerini tutar. |
| 15 | `ZIYARETSIRA` | TDBINTEGER | evet |  | Ziyaret sırasını tutar |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `ZIYARETSIRA1` | TDBINTEGER | hayır | `0` | Ziyaret sıra 1 degerini tutar. |
| 31 | `ZIYARETSIRA2` | TDBINTEGER | hayır | `0` | Ziyaret sıra 2 degerini tutar. |
| 32 | `ZIYARETSIRA3` | TDBINTEGER | hayır | `0` | Ziyaret sıra 3 degerini tutar. |
| 33 | `ZIYARETSIRA4` | TDBINTEGER | hayır | `0` | Ziyaret sıra 4 degerini tutar. |
| 34 | `ZIYARETSIRA5` | TDBINTEGER | hayır | `0` | Ziyaret sıra 5 degerini tutar. |
| 35 | `ZIYARETSIRA6` | TDBINTEGER | hayır | `0` | Ziyaret sıra 6 degerini tutar. |
| 36 | `ZIYARETSIRA7` | TDBINTEGER | hayır | `0` | Ziyaret sıra 7 degerini tutar. |
| 37 | `DAGITIMSIRA1` | TDBINTEGER | hayır | `0` | Dagıtım sıra 1 degerini tutar. |
| 38 | `DAGITIMSIRA2` | TDBINTEGER | hayır | `0` | Dagıtım sıra 2 degerini tutar. |
| 39 | `DAGITIMSIRA3` | TDBINTEGER | hayır | `0` | Dagıtım sıra 3 degerini tutar. |
| 40 | `DAGITIMSIRA4` | TDBINTEGER | hayır | `0` | Dagıtım sıra 4 degerini tutar. |
| 41 | `DAGITIMSIRA5` | TDBINTEGER | hayır | `0` | Dagıtım sıra 5 degerini tutar. |
| 42 | `DAGITIMSIRA6` | TDBINTEGER | hayır | `0` | Dagıtım sıra 6 degerini tutar. |
| 43 | `DAGITIMSIRA7` | TDBINTEGER | hayır | `0` | Dagıtım sıra 7 degerini tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGZIYARETFREKANS` | `CARIKOD, PLASIYERKOD` |
| FOREIGN KEY | `TBLDGZIYFREKANS_ISKODU_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGZIYARETFREKANS` | `CARIKOD, PLASIYERKOD` | clustered, unique |
| `TBLDAGZIYARETFREKANS_IND_1` | `ISLETME_KODU, CARIKOD, PLASIYERKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARIKOD, PLASIYERKOD, HAFTA1, HAFTA2, HAFTA3
FROM dbo.TBLDAGZIYARETFREKANS WITH (NOLOCK);
```
