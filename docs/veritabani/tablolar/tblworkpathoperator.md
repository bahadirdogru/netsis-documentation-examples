---
title: TBLWORKPATHOPERATOR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblworkpathoperator/
---

# TBLWORKPATHOPERATOR

> Açıklama yok.

- **Modül:** [İŞ AKIŞ YÖNETİMİ](/veritabani/moduller/is-akis-yonetimi/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `SUBE_KODU, MASPATHCODE, MASUSERCODE, STATUS`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MASPATHCODE` | varchar(8) | hayır |  | İş kodunun tutulduğu saha |
| 3 | `MASUSERCODE` | TDBSMALLINT | hayır | `-1` | Kullanıcı kodunun tutulduğu saha |
| 4 | `STATUS` | char(1) | hayır |  | Durumu acık ise A; kapalı ise K ve kilitli ise I degerini tutar. |
| 5 | `DELEGATIONTYPE` | TDBSMALLINT | evet | `0` |  |
| 6 | `DELEGATEDUSER` | TDBSMALLINT | evet | `-1` |  |
| 7 | `EMAIL` | char(1) | evet | `H` | Email adresi olup olmaduğını gösterir |
| 8 | `EMAILTYPE` | TDBSMALLINT | evet | `0` | Email tipinin tutulduğu sahadır |
| 9 | `EMAILRECEIVER` | TDBSMALLINT | evet | `-1` | Alıcı email adresıni tutar |
| 10 | `EMAILDESIGN` | char(1) | evet | `H` |  |
| 11 | `EMAILDESIGNID` | TDBINTEGER | evet |  |  |
| 12 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLWORKPATHOPERATORPKEY` | `SUBE_KODU, MASPATHCODE, MASUSERCODE, STATUS` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLWORKPATHOPERATORPKEY` | `SUBE_KODU, MASPATHCODE, MASUSERCODE, STATUS` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, MASPATHCODE, MASUSERCODE, STATUS, DELEGATIONTYPE, DELEGATEDUSER
FROM dbo.TBLWORKPATHOPERATOR WITH (NOLOCK);
```
