---
title: TBLBNKTEMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnktemtra/
---

# TBLBNKTEMTRA

> VERILEN TEMINAT MEKTUPLARI KOMISYON KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 42
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYITNO` | varchar(15) | hayır |  | Teminat mektubu kayıt numarasıdır. |
| 2 | `DEKONTNO` | varchar(15) | evet |  | Dekont numarasıdır. |
| 3 | `BASTARIH` | TDBDATETIME | evet |  | Verilen teminat mektubunun kayıt tarihidir. |
| 4 | `BITTARIH` | TDBDATETIME | evet |  | Verilen teminat mektubunun vade tarihidir. |
| 5 | `NETHESKODU` | varchar(15) | evet |  | Virman banka hesap kodunu tutan sahadır. |
| 6 | `KOMORAN` | TDBFLOAT | evet | `0` | Komisyon oranını tutan sahadır. |
| 7 | `KOMMUHKODU` | TDBMUHKOD | evet |  | Komisyon muhasebe hesap kodu sahasıdır. |
| 8 | `KOMTUTAR` | TDBFLOAT | evet | `0` | Komisyon tutarı sahasıdır. |
| 9 | `KOMDOVIZTUTAR` | TDBFLOAT | evet | `0` | Dovizli ise komisyon doviz tutarıdır. |
| 10 | `KOMPROJEKODU` | TDBPROJEKOD | evet |  | Proje kodu sahasıdır. |
| 11 | `KOMMUHREFKOD` | TDBREFKOD | evet |  | Muhasebe referans kodu sahasıdır. |
| 12 | `DAMGAMUHKODU` | TDBMUHKOD | evet |  | Damga vergisi muhasabe hesap kodunu tutan sahadır. |
| 13 | `DAMGATUTAR` | TDBFLOAT | evet | `0` | Damga vergisi tutarıdır. |
| 14 | `DAMGADOVIZTUTAR` | TDBFLOAT | evet | `0` | Dovizli ise damga vergisi doviz tutarıdır. |
| 15 | `DAMGAPROJEKODU` | TDBPROJEKOD | evet |  | Proje kodu sahasıdır. |
| 16 | `DAMGAMUHREFKOD` | TDBREFKOD | evet |  | Muhasebe referans kodu sahasıdır. |
| 17 | `BSMVMUHKODU` | TDBMUHKOD | evet |  | BSMV muhasabe hesap kodunu tutan sahadır. |
| 18 | `BSMVTUTAR` | TDBFLOAT | evet | `0` | BSMV tutarıdır. |
| 19 | `BSMVDOVIZTUTAR` | TDBFLOAT | evet | `0` | Dovizli ise BSMV doviz tutarıdır. |
| 20 | `BSMVPROJEKODU` | TDBPROJEKOD | evet |  | Proje kodu sahasıdır. |
| 21 | `BSMVMUHREFKOD` | TDBREFKOD | evet |  | Muhasebe referans kodu sahasıdır. |
| 22 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `TERSKAYIT` | char(1) | evet | `H` | Ters kayıt ise E degerini tutan sahadır. |
| 24 | `TERSINCKEYNO` | TDBINTEGER | evet |  | Ters kayıt inckey numarasıdır. |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKTEMTRA_FKEYPROJE1` | `KOMPROJEKODU` |
| FOREIGN KEY | `TBLBNKTEMTRA_FKEYPROJE2` | `DAMGAPROJEKODU` |
| FOREIGN KEY | `TBLBNKTEMTRA_FKEYPROJE3` | `BSMVPROJEKODU` |
| FOREIGN KEY | `TBLBNKTEMTRAFK1` | `KAYITNO` |
| FOREIGN KEY | `TBLBNKTEMTRAFK2` | `NETHESKODU` |
| PRIMARY KEY | `TBLBNKTEMTRAPK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKTEMTRA_IND_1` | `KAYITNO, BASTARIH, BITTARIH, INCKEYNO` | Nonclustered, Unique |
| `TBLBNKTEMTRAPK` | `INCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 KAYITNO, DEKONTNO, BASTARIH, BITTARIH, NETHESKODU, KOMORAN
FROM dbo.TBLBNKTEMTRA WITH (NOLOCK);
```
