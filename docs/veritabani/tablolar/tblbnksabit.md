---
title: TBLBNKSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnksabit/
---

# TBLBNKSABIT

> BANKA ANA KOD KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `NETBANKAKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka ana kodunu tutar. |
| 2 | `TCMBBANKAKODU` | varchar(10) | evet |  | TCMB Banka ana kodunu tutar. |
| 3 | `BANKAADI` | varchar(50) | evet |  | Banka ismini tutar. |
| 4 | `WEBADRES` | varchar(255) | evet |  | Banka web adresini tutar. |
| 5 | `DURUM` | TDBBYTE | evet | `0` | Durum acık ise 0;kapalı ise 1 degerini alır. |
| 6 | `BANKAMUSTERINO` | varchar(30) | evet |  | Musteri numarasını tutar. |
| 7 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `DBSKURUMKODU` | varchar(30) | evet |  | Banka bilgi-3 ekranında kurum kodları içerisinde doğrudan borçlandırma sistemi bilgisi yer alır. |
| 22 | `CEKSENKURUMKODU` | varchar(30) | evet |  | Banka bilgi-3 ekranında kurum kodları içerisinde çek /senet tahsilat sistemi bilgisi yer alır. |
| 23 | `TOSKURUMKODU` | varchar(30) | evet |  | Banka bilgi-3 ekranında kurum kodları içerisinde toplu ödeme sistemi bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKSABITFK1` | `TCMBBANKAKODU` |
| PRIMARY KEY | `TBLBNKSABITPK` | `NETBANKAKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKSABIT_IND_1` | `DURUM` | Nonclustered |
| `TBLBNKSABIT_IND_2` | `BANKAADI` | Nonclustered |
| `TBLBNKSABITPK` | `NETBANKAKODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 NETBANKAKODU, TCMBBANKAKODU, BANKAADI, WEBADRES, DURUM, BANKAMUSTERINO
FROM dbo.TBLBNKSABIT WITH (NOLOCK);
```
