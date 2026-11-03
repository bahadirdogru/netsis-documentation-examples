---
title: TBLBNKSUBELIMIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnksubelimit/
---

# TBLBNKSUBELIMIT

> KREDI LIMITI TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `NETBANKAKODU, NETSUBEKODU, KREDITURU, TEMTIPI, DOVIZTIPI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka Ana Kodunu tutar. |
| 2 | `NETSUBEKODU` | varchar(10) | hayır |  | Banka Sube Kodunu tutar. |
| 3 | `KREDITURU` | TDBBYTE | hayır |  | Kredi limiti verilecek kredi turunu tutar. |
| 4 | `TEMTIPI` | TDBBYTE | hayır |  | teminat tipini tutar. |
| 5 | `DOVIZTIPI` | TDBBYTE | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KREDILIMIT` | TDBFLOAT | evet | `0` | Verilen kredi limitini tutar. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKSUBELIMITFK1` | `NETBANKAKODU, NETSUBEKODU` |
| FOREIGN KEY | `TBLBNKSUBELIMITFK2` | `TEMTIPI` |
| PRIMARY KEY | `TBLBNKSUBELIMITPK` | `NETBANKAKODU, NETSUBEKODU, KREDITURU, TEMTIPI, DOVIZTIPI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKSUBELIMITPK` | `NETBANKAKODU, NETSUBEKODU, KREDITURU, TEMTIPI, DOVIZTIPI` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 NETBANKAKODU, NETSUBEKODU, KREDITURU, TEMTIPI, DOVIZTIPI, KREDILIMIT
FROM dbo.TBLBNKSUBELIMIT WITH (NOLOCK);
```
