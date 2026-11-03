---
title: TBLBNKYETEMAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkyetemail/
---

# TBLBNKYETEMAIL

> BANKA YETKILI EPOSTA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `YETKILIKODU, FONKSIYONID`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `YETKILIKODU` | varchar(15) | hayır |  | Banka yetkili kodunu tutar. |
| 2 | `FONKSIYONID` | TDBBYTE | hayır |  | Müşteri/Satıcı Havale/Eft=0; Banka Hesapları Arası Havale/Eft=1; Banka Hesapları Arası Virman=2 degerini tutar. |
| 3 | `EMAIL` | varchar(255) | hayır |  | Islem sonucu otomatik email gonderilecek adres. |
| 4 | `CCMAIL` | varchar(255) | evet |  | Islem sonucu otomatik email gonderilecek adres. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK13` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `YEDEK14` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `YEDEK15` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `YEDEK16` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKYETEMAILFK1` | `YETKILIKODU` |
| PRIMARY KEY | `TBLBNKYETEMAILPK` | `YETKILIKODU, FONKSIYONID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKYETEMAILPK` | `YETKILIKODU, FONKSIYONID` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 YETKILIKODU, FONKSIYONID, EMAIL, CCMAIL, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLBNKYETEMAIL WITH (NOLOCK);
```
