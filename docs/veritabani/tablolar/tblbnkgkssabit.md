---
title: TBLBNKGKSSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkgkssabit/
---

# TBLBNKGKSSABIT

> GENEL KREDI SOZLESMESI(GKS) KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `GKSNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GKSNO` | varchar(35) | hayır |  | Genel Kredi sozlesme numarası. |
| 2 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka Genel Kodu. |
| 3 | `NETSUBEKODU` | varchar(10) | hayır |  | Banka Sube Kodu. |
| 4 | `ALIMTARIH` | TDBDATETIME | evet |  | GKS kaydına ait alım tarihi. |
| 5 | `BITISTARIH` | TDBDATETIME | evet |  | GKS kaydına ait bitiş tarihi. |
| 6 | `KAPTARIH` | TDBDATETIME | evet |  | Kapatma tarihi. |
| 7 | `TIPI` | TDBBYTE | evet | `0` | Vergili ise 0; vergisiz ise 0. |
| 8 | `DOVTIP` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `TUTAR` | TDBFLOAT | evet | `0` | GKS ye ait tutar. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKGKSSABITFK1` | `NETBANKAKODU, NETSUBEKODU` |
| PRIMARY KEY | `TBLBNKGKSSABITPK` | `GKSNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKGKSSABIT_IND_1` | `NETBANKAKODU, NETSUBEKODU, KAPTARIH` | Nonclustered |
| `TBLBNKGKSSABITPK` | `GKSNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 GKSNO, NETBANKAKODU, NETSUBEKODU, ALIMTARIH, BITISTARIH, KAPTARIH
FROM dbo.TBLBNKGKSSABIT WITH (NOLOCK);
```
