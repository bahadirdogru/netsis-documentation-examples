---
title: TBLDAGROTAZIYARETFREKANS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagrotaziyaretfrekans/
---

# TBLDAGROTAZIYARETFREKANS

> Açıklama yok.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 43
- **Birincil anahtar:** `ROTAKODU, CARIKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 3 | `ROTAKODU` | varchar(15) | hayır |  | Rota kodunun tutulduğu sahadır |
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
| 15 | `ZIYARETSIRA` | TDBINTEGER | evet |  | Ziyaret sıra değerini tutar |
| 16 | `ZIYARETSIRA1` | TDBINTEGER | hayır | `0` | Ziyaret sıra 1 degerini tutar. |
| 17 | `ZIYARETSIRA2` | TDBINTEGER | hayır | `0` | Ziyaret sıra 2 degerini tutar. |
| 18 | `ZIYARETSIRA3` | TDBINTEGER | hayır | `0` | Ziyaret sıra 3 degerini tutar. |
| 19 | `ZIYARETSIRA4` | TDBINTEGER | hayır | `0` | Ziyaret sıra 4 degerini tutar. |
| 20 | `ZIYARETSIRA5` | TDBINTEGER | hayır | `0` | Ziyaret sıra 5 degerini tutar. |
| 21 | `ZIYARETSIRA6` | TDBINTEGER | hayır | `0` | Ziyaret sıra 6 degerini tutar. |
| 22 | `ZIYARETSIRA7` | TDBINTEGER | hayır | `0` | Ziyaret sıra 7 degerini tutar. |
| 23 | `DAGITIMSIRA1` | TDBINTEGER | hayır | `0` | Dagıtım sıra 1 degerini tutar. |
| 24 | `DAGITIMSIRA2` | TDBINTEGER | hayır | `0` | Dagıtım sıra 2 degerini tutar. |
| 25 | `DAGITIMSIRA3` | TDBINTEGER | hayır | `0` | Dagıtım sıra 3 degerini tutar. |
| 26 | `DAGITIMSIRA4` | TDBINTEGER | hayır | `0` | Dagıtım sıra 4 degerini tutar. |
| 27 | `DAGITIMSIRA5` | TDBINTEGER | hayır | `0` | Dagıtım sıra 5 degerini tutar. |
| 28 | `DAGITIMSIRA6` | TDBINTEGER | hayır | `0` | Dagıtım sıra 6 degerini tutar. |
| 29 | `DAGITIMSIRA7` | TDBINTEGER | hayır | `0` | Dagıtım sıra 7 degerini tutar. |
| 30 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGROTAZIYARETFREKANS_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDAGROTAZIYARETFREKANS_FKEY2` | `ROTAKODU` |
| PRIMARY KEY | `TBLDAGROTAZIYARETFREKANS_PKEY` | `ROTAKODU, CARIKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGROTAZIYARETFREKANS_IND` | `ROTAKODU, CARIKOD` | nonclustered |
| `TBLDAGROTAZIYARETFREKANS_PKEY` | `ROTAKODU, CARIKOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARIKOD, ROTAKODU, HAFTA1, HAFTA2, HAFTA3
FROM dbo.TBLDAGROTAZIYARETFREKANS WITH (NOLOCK);
```
