---
title: TBLNPMLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnpmlog/
---

# TBLNPMLOG

> SÜREÇ YÖNETİMİ LOG KAYITLARI TABLOSUDUR

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `NPMRELMASINCKEYNO` | TDBINTEGER | hayır |  | Tblnpmrelmas inckeynosu |
| 5 | `NPMRELDETINCKEYNO` | TDBINTEGER | hayır |  | Tblnpmreldet inckeynosu |
| 6 | `NPMMAINEXECKEYNO` | TDBINTEGER | hayır |  |  |
| 7 | `EXECGROUPID` | TDBINTEGER | hayır |  |  |
| 8 | `MSG` | varchar(100) | evet |  | İşlem hakkında informatif mesaj kaydıdır |
| 9 | `TITLE` | varchar(100) | evet |  | Gerçekleşen işlemin bölüm başlığıdır |
| 10 | `MSGDT` | TDBDATETIME | evet |  |  |
| 11 | `MSGENDDT` | TDBDATETIME | evet |  |  |
| 12 | `MSGTYPE` | TDBBYTE | evet |  |  |
| 13 | `MODNO` | TDBSMALLINT | evet |  | Modül numarasını ifade eder |
| 14 | `PROGNO` | TDBSMALLINT | evet |  | Modül içinde ki program no'suna tekabül eder |
| 15 | `ACTION` | TDBBYTE | evet |  |  |
| 16 | `RTM` | char(1) | hayır | `1` |  |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `CYEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `CYEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNPMLOG_PK` | `INCKEYNO` |
| FOREIGN KEY | `TBLNPMLOG_FK1` | `SUBE_KODU, KULLANICI_NO` |
| FOREIGN KEY | `TBLNPMLOG_FK2` | `NPMRELMASINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNPMLOG_IND_1` | `SUBE_KODU, KULLANICI_NO, NPMRELMASINCKEYNO, EXECGROUPID` | Duplicate |
| `TBLNPMLOG_IND_2` | `SUBE_KODU, KULLANICI_NO, MSGDT, INCKEYNO` | Duplicate |
| `TBLNPMLOG_IND_3` | `MSGDT, NPMRELMASINCKEYNO, EXECGROUPID` | Duplicate |
| `TBLNPMLOG_IND_4` | `MSGDT, SUBE_KODU, KULLANICI_NO` | Duplicate |
| `TBLNPMLOG_IND_5` | `MODNO, PROGNO, SUBE_KODU, KULLANICI_NO` | Duplicate |
| `TBLNPMLOG_PK` | `INCKEYNO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, KULLANICI_NO, NPMRELMASINCKEYNO, NPMRELDETINCKEYNO, NPMMAINEXECKEYNO
FROM dbo.TBLNPMLOG WITH (NOLOCK);
```
