---
title: TBLBNKSUBESABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnksubesabit/
---

# TBLBNKSUBESABIT

> BANKA SUBE KAYITLARINI TUTAN TABLO.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 35
- **Birincil anahtar:** `NETBANKAKODU, NETSUBEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka ana kodunu tutar. |
| 2 | `NETSUBEKODU` | varchar(10) | hayır |  | Banka sube kodunu tutar. |
| 3 | `TCMBSUBEKODU` | varchar(10) | evet |  | TCMB Banka sube kodunu tutar. |
| 4 | `SUBEADI` | varchar(50) | evet |  | Banka sube ismini tutar. |
| 5 | `ULKEKODU` | varchar(4) | evet |  | Ulke kodunu tutar. |
| 6 | `ADRES` | varchar(100) | evet |  | Adresi tutar. |
| 7 | `SEHIRKODU` | varchar(5) | evet |  | Sehir kodunu tutar. |
| 8 | `ILCE` | varchar(20) | evet |  | Ilce bilgisini tutar. |
| 9 | `POSTAKODU` | varchar(8) | evet |  | Posta kodunu tutar. |
| 10 | `TEL` | TDBTELFAX | evet |  | Banka sube telefon numarasını tutar. |
| 11 | `FAX` | TDBTELFAX | evet |  | Banka sube fax numarasını tutar. |
| 12 | `ACIKLAMA1` | varchar(50) | evet |  | Acıklama 1 alanını tutar. |
| 13 | `ACIKLAMA2` | varchar(50) | evet |  | Acıklama 2 alanını tutar. |
| 14 | `ACIKLAMA3` | varchar(50) | evet |  | Acıklama 3 alanını tutar. |
| 15 | `CEKSENKREDIORAN` | TDBFLOAT | evet | `0` | Cek/senet kredi marjı oranını tutar. |
| 16 | `DURUM` | TDBBYTE | evet | `0` | Durum acık ise 0;kapalı ise 1 degerini alıyor. |
| 17 | `ILGILI` | varchar(50) | evet |  | İlgili bilgisini tutar. |
| 18 | `GENKRDDOVIZTIPI` | TDBBYTE | evet | `0` | Kredi limiti doviz tipini tutar. |
| 19 | `GENELKREDILIMIT` | TDBFLOAT | evet | `0` | Genel kredi limitini tutar. |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `BILGI` | TDBMEMO | evet |  | Banka Sube Bilgi 3 sayfasında girilen acıklama bilgisini tutar. |
| 25 | `TAKVIMKODU` | TDBINTEGER | evet | `0` | Firma takvim kodunu tutar. |
| 26 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKSUBESABITFK1` | `NETBANKAKODU` |
| PRIMARY KEY | `TBLBNKSUBESABITPK` | `NETBANKAKODU, NETSUBEKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKSUBESABIT_IND_1` | `DURUM` | Nonclustered |
| `TBLBNKSUBESABIT_IND_2` | `SUBEADI` | Nonclustered |
| `TBLBNKSUBESABITPK` | `NETBANKAKODU, NETSUBEKODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 NETBANKAKODU, NETSUBEKODU, TCMBSUBEKODU, SUBEADI, ULKEKODU, ADRES
FROM dbo.TBLBNKSUBESABIT WITH (NOLOCK);
```
