---
title: TBLCABNKSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcabnksabit/
---

# TBLCABNKSABIT

> CARI/BANKA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `CARIKODU, BANKAKODU, SUBEKODU, BANKAHESNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARIKODU` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 3 | `BANKAKODU` | varchar(10) | hayır |  | Banka ana kodunu tutar. |
| 4 | `SUBEKODU` | varchar(10) | hayır |  | Banka sube kodunu tutar. |
| 5 | `BANKAHESNO` | varchar(30) | hayır |  | Banka hesap kodunu tutar. |
| 6 | `DEFAULTMU` | char(1) | evet | `H` | Default mu? parametresi isaretli ise E, degil ise H degerini tutar. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
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

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCABNKSABITFK1` | `BANKAKODU, SUBEKODU` |
| FOREIGN KEY | `TBLCABNKSABITFK2` | `CARIKODU` |
| FOREIGN KEY | `TBLCABNKSABITFK3` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLCABNKSABITPK` | `CARIKODU, BANKAKODU, SUBEKODU, BANKAHESNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCABNKSABIT_IND_1` | `CARIKODU, DEFAULTMU` | Nonclustered |
| `TBLCABNKSABIT_IND_2` | `ISLETME_KODU, CARIKODU, DEFAULTMU` | Nonclustered |
| `TBLCABNKSABIT_IND_3` | `ISLETME_KODU, CARIKODU, BANKAKODU, SUBEKODU, BANKAHESNO` | Nonclustered |
| `TBLCABNKSABITPK` | `CARIKODU, BANKAKODU, SUBEKODU, BANKAHESNO` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARIKODU, BANKAKODU, SUBEKODU, BANKAHESNO, DEFAULTMU
FROM dbo.TBLCABNKSABIT WITH (NOLOCK);
```
