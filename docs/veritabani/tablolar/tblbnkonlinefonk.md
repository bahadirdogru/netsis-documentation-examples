---
title: TBLBNKONLINEFONK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkonlinefonk/
---

# TBLBNKONLINEFONK

> Açıklama yok.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `ISLETME_KODU, BANKAKODU, FONKSIYONID`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BANKAKODU` | varchar(10) | hayır |  | Banka kodunu tutar. |
| 3 | `FONKSIYONID` | TDBBYTE | hayır |  | Müşteri/Satıcı Havale/Eft=0; Banka Hesapları Arası Havale/Eft=1; Banka Hesapları Arası Virman=2 degerini tutar. |
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
| FOREIGN KEY | `TBLBNKONLINEFONKFK1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBNKONLINEFONKFK2` | `BANKAKODU` |
| PRIMARY KEY | `TBLBNKONLINEFONKPK` | `ISLETME_KODU, BANKAKODU, FONKSIYONID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKONLINEFONKPK` | `ISLETME_KODU, BANKAKODU, FONKSIYONID` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BANKAKODU, FONKSIYONID, ONLINEDESTEK, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLBNKONLINEFONK WITH (NOLOCK);
```
