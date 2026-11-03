---
title: TBLBNKTEMSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnktemsabit/
---

# TBLBNKTEMSABIT

> ALINAN VE VERILEN TEMINAT MEKTUBU KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 42
- **Birincil anahtar:** `KAYITNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYITNO` | varchar(15) | hayır |  | Teminat mektubu kayıt numarasını tutar. |
| 2 | `SERINO` | varchar(10) | evet |  | Teminat mektubunun seri numarasini tutar. |
| 3 | `TEMMEKNO` | varchar(15) | evet |  | Teminat mektup noyu tutar. |
| 4 | `TEMTURU` | TDBBYTE | evet | `0` | Acık=0 ;Kapalı=1 degerini alır. |
| 5 | `TEMTIPI` | TDBBYTE | evet | `0` | Secilen banka koduna tanımlanmıs olan teminat tipini tutar. |
| 6 | `SURETIPI` | TDBBYTE | evet | `0` | Vadeli=0 ;Vadesiz=1 degerini alır. |
| 7 | `HARTURU` | TDBBYTE | evet | `-1` | Hareket turu sahasıdır;Alınan icin 1;verilen icin 0 degerini tutar. |
| 8 | `DURUM` | TDBBYTE | evet | `0` | Acık=0 ;Kapalı=1 ;İade=2 ;Tahsil=3 degerini alır. |
| 9 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `TARIH` | TDBDATETIME | evet |  | Kayıt tarihidir. |
| 11 | `VADETARIH` | TDBDATETIME | evet |  | Vade tarihidir. |
| 12 | `KAPANISTARIH` | TDBDATETIME | evet |  | Kapanız tarihidir. |
| 13 | `TUTAR` | TDBFLOAT | evet | `0` | Tutar sahasıdır. |
| 14 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DOVIZTUTAR` | TDBFLOAT | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `NETHESKODU` | varchar(15) | evet |  | Banka hesap kodu sahasıdır. |
| 17 | `MUHKODU` | TDBMUHKOD | evet |  | Verilen icin Borc; Alınan icin alacak muhasebe hesap kodu sahasıdır. |
| 18 | `CARIKODU` | TDBCARIKOD | evet |  | Cari kod sahasıdır. |
| 19 | `KARSIMUHKODU` | TDBMUHKOD | evet |  | Alınan teminat mektupları icin borc hesap kodunu tutar. |
| 20 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama sahasıdır. |
| 21 | `BANKASI` | varchar(50) | evet |  | Teminat mektubunun alındıgı bankayı tutan sahadır. |
| 22 | `KOMISYONORAN` | TDBFLOAT | evet | `0` | Komisyon oranını tutar. |
| 23 | `KOMODEMEORAN` | TDBFLOAT | evet | `0` | Komisyon odeme oranını tutan sahadır. |
| 24 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodu sahasıdır. |
| 26 | `MUHREFKOD` | TDBREFKOD | evet |  | Muhasebe referans kodunu tutar. |
| 27 | `RISKEDAHIL` | char(1) | evet | `H` | Risk hesaplamaya dahil ise E degerini tutan sahadır. |
| 28 | `RISKDOVIZ` | char(1) | evet | `H` | Risk doviz sahasıdır. |
| 29 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKTEMSABIT_FKEYPROJE` | `PROJEKODU` |
| FOREIGN KEY | `TBLBNKTEMSABITFK1` | `CARIKODU` |
| FOREIGN KEY | `TBLBNKTEMSABITFK2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBNKTEMSABITFK3` | `NETHESKODU` |
| PRIMARY KEY | `TBLBNKTEMSABITPK` | `KAYITNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKTEMSABIT_IND_1` | `CARIKODU, DURUM, VADETARIH, TEMTURU` | Nonclustered |
| `TBLBNKTEMSABIT_IND_2` | `VADETARIH` | Nonclustered |
| `TBLBNKTEMSABIT_IND_3` | `TEMTURU` | Nonclustered |
| `TBLBNKTEMSABIT_IND_4` | `SUBE_KODU` | Nonclustered |
| `TBLBNKTEMSABITPK` | `KAYITNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 KAYITNO, SERINO, TEMMEKNO, TEMTURU, TEMTIPI, SURETIPI
FROM dbo.TBLBNKTEMSABIT WITH (NOLOCK);
```
