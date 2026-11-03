---
title: TBLTCMBANASABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltcmbanasabit/
---

# TBLTCMBANASABIT

> TCMB BANKA ANA KOD REHBERİNDEKİ KAYITLARI TUTAR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `BANKAKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BANKAKODU` | varchar(10) | hayır |  | Merkez Bankası tarafından tanımlanan banka kodunu gösterir. |
| 2 | `BANKAADI` | varchar(50) | evet |  | Girilen banka kodunun adını gösterir. |
| 3 | `YURTDISI` | char(1) | evet | `H` | Girilen banka kodlarının yurtdışı banka olup olmadığını gösterir. |
| 4 | `ONLINEDESTEK` | char(1) | evet | `H` | Girilen banka kodunun online destek verip vermediğini gösterir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTCMBANASABITPK` | `BANKAKODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTCMBANASABIT_IND_1` | `BANKAADI` | Non-unique, Non-clustered |
| `TBLTCMBANASABITPK` | `BANKAKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 BANKAKODU, BANKAADI, YURTDISI, ONLINEDESTEK, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLTCMBANASABIT WITH (NOLOCK);
```
