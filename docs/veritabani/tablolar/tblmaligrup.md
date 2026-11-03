---
title: TBLMALIGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaligrup/
---

# TBLMALIGRUP

> MAMUL GRUP KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 57
- **Birincil anahtar:** `GRUPKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GRUPKOD` | TDBSTOKKOD | hayır |  | Grup kodunu tutan sahadır. |
| 2 | `ISIM` | varchar(50) | evet |  | Grup kodu ismini tutan sahadır. |
| 3 | `ANAKOD` | varchar(15) | evet |  | Grup kodunun ait oldugu maliyet ana grup kodu sahasıdır. |
| 4 | `TUR` | char(1) | evet |  | Tur sahasıdır. |
| 5 | `HANGIOLCUBIRIMI` | TDBBYTE | evet | `0` | Olcu biriminin tutuldugu sahadır. |
| 6 | `HAMORTSATFI` | char(1) | evet |  | Yan urunun ortalama satıs tutarı hammadde maliyetinden dusulecek parametresi isaretli ise E degerini tutar. |
| 7 | `BRHAMMADDE` | TDBFLOAT | evet | `0` | Hammadde birim katsayısıdır. |
| 8 | `BRAMBALAJ` | TDBFLOAT | evet | `0` | Ambalaj birim katsayısıdır. |
| 9 | `BRISCSUR` | TDBFLOAT | evet | `0` | İscilik birim katsayısıdır. |
| 10 | `BRENERJI` | TDBFLOAT | evet | `0` | Enerji birim katsayısıdır. |
| 11 | `BRAMORT` | TDBFLOAT | evet | `0` | Amortisman birim katsayısıdır. |
| 12 | `BRYARD` | TDBFLOAT | evet | `0` | Yardımcı servis birim katsayısıdır. |
| 13 | `BRYEDEK` | TDBFLOAT | evet | `0` | Yedek parça birim katsayısıdır. |
| 14 | `BRMALGIDER_1` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-1 birim katsayısıdır. |
| 15 | `BRMALGIDER_2` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-2 birim katsayısıdır. |
| 16 | `BRMALGIDER_3` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-3 birim katsayısıdır. |
| 17 | `BRMALGIDER_4` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-4 birim katsayısıdır. |
| 18 | `BRMALGIDER_5` | TDBFLOAT | evet | `0` | Maliyet Gider Hesapları-2 Gider-5 birim katsayısıdır. |
| 19 | `YARIMAMULHESKOD` | TDBMUHKOD | evet |  | Yarımamul hesap kodudur. |
| 20 | `MAMULHESKOD` | TDBMUHKOD | evet |  | Mamul hesap kodudur. |
| 21 | `HAMMADSARFHES` | TDBMUHKOD | evet |  | Hammadde sarf hesap kodudur. |
| 22 | `AMBALAJHES` | TDBMUHKOD | evet |  | Ambalaj hesap kodudur. |
| 23 | `SATMALMALIYET` | TDBMUHKOD | evet |  | Satılan malın maliyeti hesap kodudur. |
| 24 | `ILKMADMALZYANS` | TDBMUHKOD | evet |  | İlk madde malzeme yansıtma hesap kodudur. |
| 25 | `AMBALAJYANS` | TDBMUHKOD | evet |  | Ambalaj yansıtma hesap kodudur. |
| 26 | `ISCIYANS1` | TDBMUHKOD | evet |  | İscilik-1 yansıtma hesap kodudur. |
| 27 | `ISCIYANS2` | TDBMUHKOD | evet |  | İscilik-2 yansıtma hesap kodudur. |
| 28 | `ENERJIYANS` | TDBMUHKOD | evet |  | Enerji yansıtma hesap kodudur. |
| 29 | `AMORTYANS` | TDBMUHKOD | evet |  | Amortisman yansıtma hesap kodudur. |
| 30 | `YARDSERYANS` | TDBMUHKOD | evet |  | Yardımcı servis yansıtma hesap kodudur. |
| 31 | `YEDPARCAYANS` | TDBMUHKOD | evet |  | Yedek parça yansıtma hesap kodudur. |
| 32 | `MALGIDER1_YANS` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-1 yansıtma hesap kodudur. |
| 33 | `MALGIDER2_YANS` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-2 yansıtma hesap kodudur. |
| 34 | `MALGIDER3_YANS` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-3 yansıtma hesap kodudur. |
| 35 | `MALGIDER4_YANS` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-4 yansıtma hesap kodudur. |
| 36 | `MALGIDER5_YANS` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-5 yansıtma hesap kodudur. |
| 37 | `AYBASISTOK` | TDBFLOAT | evet | `0` | STHAR_GCMIK * BİRİMAĞIRLIK |
| 38 | `AYSONUSTOK` | TDBFLOAT | evet | `0` | Sthar_Gcmık2 * birim ağırlık |
| 39 | `YEDEK1` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YEDEK2` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK3` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK4` | TDBMUHKOD | evet |  | Yarımamul transfer hesabıdır. |
| 43 | `YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `YEDEK11` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `YEDEK12` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `MAMULTRANSHESAP` | TDBMUHKOD | evet |  | Mamul transfer hesabı sahasıdır. |
| 53 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 54 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 55 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 56 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 57 | `EXPSATMALMALIYET` | TDBMUHKOD | evet |  | Yurtdısı satılan malın maliyeti hesap kodudur. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALIGRUP_FKEY` | `ANAKOD` |
| FOREIGN KEY | `TBLMALIGRUP_FKEYPROJE` | `PROJE_KODU` |
| PRIMARY KEY | `TBLMALIGRUP_PKEY` | `GRUPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALIGRUP_IND_1` | `ANAKOD, GRUPKOD` | Nonclustered, unique |
| `TBLMALIGRUP_PKEY` | `GRUPKOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 GRUPKOD, ISIM, ANAKOD, TUR, HANGIOLCUBIRIMI, HAMORTSATFI
FROM dbo.TBLMALIGRUP WITH (NOLOCK);
```
