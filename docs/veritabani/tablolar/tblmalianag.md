---
title: TBLMALIANAG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmalianag/
---

# TBLMALIANAG

> MAMUL ANA GRUP KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 51
- **Birincil anahtar:** `ANAKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ANAKOD` | varchar(15) | hayır |  | Ana grup kodunu tutan sahadır. |
| 3 | `ANAISMI` | varchar(50) | evet |  | Ana grup ismini tutan sahadır. |
| 4 | `REFKOD` | TDBREFKOD | evet |  | Referans kodunu tutan sahadır. |
| 5 | `ISCI1KOD` | TDBMUHKOD | evet |  | İscilik maliyeti gider hesabı-1 sahasıdır. |
| 6 | `ISCI2KOD` | TDBMUHKOD | evet |  | İscilik maliyeti gider hesabı-2 sahasıdır. |
| 7 | `ENERJI1KOD` | TDBMUHKOD | evet |  | Enerji maliyeti gider hesabı-1 sahasıdır. |
| 8 | `ENERJI2KOD` | TDBMUHKOD | evet |  | Enerji maliyeti gider hesabı-2 sahasıdır. |
| 9 | `AMORTISMAN1KOD` | TDBMUHKOD | evet |  | Amortisman maliyeti gider hesabı-1 sahasıdır. |
| 10 | `AMORTISMAN2KOD` | TDBMUHKOD | evet |  | Amortisman maliyeti gider hesabı-2 sahasıdır. |
| 11 | `YARDSER1KOD` | TDBMUHKOD | evet |  | Yardımcı servis maliyeti gider hesabı-1 sahasıdır. |
| 12 | `YARDSER2KOD` | TDBMUHKOD | evet |  | Yardımcı servis maliyeti gider hesabı-2 sahasıdır. |
| 13 | `YEDPARCA1KOD` | TDBMUHKOD | evet |  | Yedek parça maliyeti gider hesabı-1 sahasıdır. |
| 14 | `YEDPARCA2KOD` | TDBMUHKOD | evet |  | Yedek parça maliyeti gider hesabı-2 sahasıdır. |
| 15 | `MALGIDER1_1KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-1 1.hesap kodunu tutar. |
| 16 | `MALGIDER1_2KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-1 2.hesap kodunu tutar. |
| 17 | `MALGIDER2_1KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-2 1.hesap kodunu tutar. |
| 18 | `MALGIDER2_2KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-2 2.hesap kodunu tutar. |
| 19 | `MALGIDER3_1KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-3 1.hesap kodunu tutar. |
| 20 | `MALGIDER3_2KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-3 2.hesap kodunu tutar. |
| 21 | `MALGIDER4_1KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-4 1.hesap kodunu tutar. |
| 22 | `MALGIDER4_2KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-4 2.hesap kodunu tutar. |
| 23 | `MALGIDER5_1KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-5 1.hesap kodunu tutar. |
| 24 | `MALGIDER5_2KOD` | TDBMUHKOD | evet |  | Maliyet giderleri-2 gider-5 2.hesap kodunu tutar. |
| 25 | `HAMMAD_SARF_ANAGR` | char(1) | evet |  | Hammadde sarfları ana grup bazında parametresi isaretli ise E degerini tutar. |
| 26 | `HAMMADDEDAGITANAH` | char(1) | evet |  | Hammadde dagıtım anahtarını tutar. |
| 27 | `AMB_SARF_ANAGR` | char(1) | evet |  | Kullanılmıyor |
| 28 | `AMBDAGITANAH` | char(1) | evet |  | Ambalaj dagıtım anahtarını tutar. |
| 29 | `ISCIDAGITANAH` | char(1) | evet |  | İscilik dagıtım anahtarını tutar. |
| 30 | `AMORTDAGITANAH` | char(1) | evet |  | Amortisman dagıtım anahtarını tutar. |
| 31 | `ENERDAGITANAH` | char(1) | evet |  | Enerji dagıtım anahtarını tutar. |
| 32 | `YARDSERDAGITANAH` | char(1) | evet |  | Yardımcı servis dagıtım anahtarını tutar. |
| 33 | `YEDPARDAGITANAH` | char(1) | evet |  | Yedek parça dagıtım anahtarını tutar. |
| 34 | `MALGIDER1_DAGITANAH` | char(1) | evet |  | Maliyet giderleri-2 gider-1 dagıtım anahtarını tutar. |
| 35 | `MALGIDER2_DAGITANAH` | char(1) | evet |  | Maliyet giderleri-2 gider-2 dagıtım anahtarını tutar. |
| 36 | `MALGIDER3_DAGITANAH` | char(1) | evet |  | Maliyet giderleri-2 gider-3 dagıtım anahtarını tutar. |
| 37 | `MALGIDER4_DAGITANAH` | char(1) | evet |  | Maliyet giderleri-2 gider-4 dagıtım anahtarını tutar. |
| 38 | `MALGIDER5_DAGITANAH` | char(1) | evet |  | Maliyet giderleri-2 gider-5 dagıtım anahtarını tutar. |
| 39 | `STANDART_MALIYET` | TDBFLOAT | evet | `0` | Standart maliyeti tutar. |
| 40 | `YEDEK1` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK2` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK3` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `YEDEK4` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `YEDEK7` | char(1) | evet |  | İade hesaplamalarında geri dönülecek ay sayısını tutar. |
| 47 | `YEDEK8` | char(1) | evet |  | Yan Ürünün Ortalama Satış Tutarı Mamul Maliyetinden Düşülecek parametresi isaretli ise E degerini tutar. |
| 48 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 50 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALIANAG_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMALIANAG_PKEY` | `ANAKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALIANAG_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLMALIANAG_PKEY` | `ANAKOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ANAKOD, ANAISMI, REFKOD, ISCI1KOD, ISCI2KOD
FROM dbo.TBLMALIANAG WITH (NOLOCK);
```
