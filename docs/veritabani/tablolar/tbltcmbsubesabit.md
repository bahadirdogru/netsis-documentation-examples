---
title: TBLTCMBSUBESABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltcmbsubesabit/
---

# TBLTCMBSUBESABIT

> TCMB BANKA ŞUBE REHBERİNDEKİ KAYITLARI TUTAR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `BANKAKODU+SUBEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BANKAKODU` | varchar(10) | hayır |  | Merkez Bankası tarafından tanımlanan banka kodlarını gösterir. |
| 2 | `SUBEKODU` | varchar(10) | hayır |  | Merkez Bankası tarafından tanımlanan bankalara ait şube kodlarını gösterir. |
| 3 | `SUBEADI` | varchar(50) | evet |  | Tanımlanan şube kodlarının adlarını gösterir. |
| 4 | `ULKEKODU` | varchar(4) | evet | `TR` | Merkez Bankası tarafından tanımlanan şubelerin bulunduğu ülkenin kodunu gösterir. |
| 5 | `SEHIRKODU` | varchar(5) | evet |  | Merkez Bankası tarafından tanımlanan şubelerin bulunduğu ilin kodunu gösterir. |
| 6 | `SWIFTCODE` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `DURUM` | TDBBYTE | hayır | `0` | Default olarak 0 değeri atılır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTCMBSUBESABITPK` | `BANKAKODU+SUBEKODU` |
| FOREIGN KEY | `TBLTCMBSUBESABITFK1` | `BANKAKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTCMBSUBESABIT_IND_1` | `DURUM` | Non-unique, Non-clustered |
| `TBLTCMBSUBESABIT_IND_2` | `SUBEADI` | Non-unique, Non-clustered |
| `TBLTCMBSUBESABITPK` | `BANKAKODU+SUBEKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 BANKAKODU, SUBEKODU, SUBEADI, ULKEKODU, SEHIRKODU, SWIFTCODE
FROM dbo.TBLTCMBSUBESABIT WITH (NOLOCK);
```
