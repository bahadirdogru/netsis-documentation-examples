---
title: TBLBNKYETSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkyetsabit/
---

# TBLBNKYETSABIT

> BANKA YETKILI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 34
- **Birincil anahtar:** `YETKILIKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `YETKILIKODU` | varchar(15) | hayır |  | Banka yetkili kodu. |
| 2 | `YETKILIISMI` | varchar(100) | evet |  | Banka yetkili ismi. |
| 3 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka ana kodu. |
| 4 | `NETSUBEKODU` | varchar(10) | hayır |  | Banka sube kodu. |
| 5 | `DEPARTMAN` | varchar(100) | evet |  | Yetkilinin calıstıgı bolum. |
| 6 | `UNVAN` | varchar(100) | evet |  | Yetkilinin unvanı. |
| 7 | `TEL1` | TDBTELFAX | evet |  | Telefon numarası-1. |
| 8 | `TEL2` | TDBTELFAX | evet |  | Telefon numarası-2. |
| 9 | `TEL3` | TDBTELFAX | evet |  | Telefon numarası-3. |
| 10 | `DAHILI1` | varchar(5) | evet |  | Telefon numarası-1'e ait dahili. |
| 11 | `DAHILI2` | varchar(5) | evet |  | Telefon numarası-2'e ait dahili. |
| 12 | `DAHILI3` | varchar(5) | evet |  | Telefon numarası-3'e ait dahili. |
| 13 | `FAX` | TDBTELFAX | evet |  | Fax numarası. |
| 14 | `ADRES` | varchar(100) | evet |  | Adres bilgisini tutar. |
| 15 | `ILCE` | varchar(20) | evet |  | İlce bilgisini tutar. |
| 16 | `SEHIRKODU` | varchar(5) | evet |  | Sehir kodunu tutar. |
| 17 | `POSTAKODU` | varchar(8) | evet |  | Posta kodunu tutar. |
| 18 | `ULKEKODU` | varchar(4) | evet |  | Ulke kodunu tutar. |
| 19 | `EMAIL` | varchar(100) | evet |  | Email adresini tutar. |
| 20 | `DUYURU_KOD` | varchar(8) | evet |  | Duyuru kodunun tutulduğu sahadır |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKYETSABITFK1` | `NETBANKAKODU, NETSUBEKODU` |
| PRIMARY KEY | `TBLBNKYETSABITPK` | `YETKILIKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKYETSABIT_IND_1` | `NETBANKAKODU, NETSUBEKODU` | Nonclustered |
| `TBLBNKYETSABITPK` | `YETKILIKODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 YETKILIKODU, YETKILIISMI, NETBANKAKODU, NETSUBEKODU, DEPARTMAN, UNVAN
FROM dbo.TBLBNKYETSABIT WITH (NOLOCK);
```
