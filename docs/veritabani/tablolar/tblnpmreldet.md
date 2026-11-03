---
title: TBLNPMRELDET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnpmreldet/
---

# TBLNPMRELDET

> SÜREÇ YÖNETİMİ KAYITLARI DETAY KAYITLARI TABLOSUDUR

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 36
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `RELMASINCKEYNO` | int | hayır |  | Tblnpmrelmas inckeyno'sudur |
| 2 | `CONNECTORKEYNO` | int | evet |  |  |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `EXECLIST` | TDBINTEGER | hayır | `0` | Süreç içinde tanımlı komut dizilerinin sıra no'sudur |
| 5 | `ORDERNO` | TDBINTEGER | hayır | `0` | Süreç içinde aynı düzlemde tanımlı nesnelerin sıra no'sudur |
| 6 | `OBJ_TYPE` | TDBSMALLINT | hayır |  | Nesne tiplerinin sayısal karşılıkları tutulur |
| 7 | `CAPTION` | varchar(100) | evet |  | Nesnenin başlık bilgisini tutar |
| 8 | `REPEATED` | char(1) | hayır |  | Nesne tekrarlansın secildiğinde 'E' aksi halde 'H' olarak kayıt tutar |
| 9 | `COLOR` | TDBINTEGER | evet |  | Default olarak 0 değeri atılmaktadır. |
| 10 | `MODNO` | TDBINTEGER | evet |  | Modül numarasını ifade eder |
| 11 | `PROGNO` | TDBINTEGER | evet |  | Modül içinde ki program no'suna tekabül eder |
| 12 | `CONDITION` | TDBMEMO | evet |  |  |
| 13 | `INFO` | TDBMEMO | evet |  | Nesne açıklamalarının tutulduğu saha |
| 14 | `READAFTEXEC` | char(1) | hayır | `H` | Çalışma sonrası sonrası tekrar okuma yapılma parametresine göre 'E' veya 'H' değeri alır |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `SYEDEK3` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `SYEDEK4` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNPMRELDET_PK` | `INCKEYNO` |
| FOREIGN KEY | `TBLNPMRELDET_FK1` | `RELMASINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNPMRELDET_IND_1` | `RELMASINCKEYNO, EXECLIST, ORDERNO` | Unique |
| `TBLNPMRELDET_IND_2` | `CONNECTORKEYNO` | Duplicate |
| `TBLNPMRELDET_IND_3` | `INCKEYNO, EXECLIST` | Duplicate |
| `TBLNPMRELDET_PK` | `INCKEYNO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 RELMASINCKEYNO, CONNECTORKEYNO, INCKEYNO, EXECLIST, ORDERNO, OBJ_TYPE
FROM dbo.TBLNPMRELDET WITH (NOLOCK);
```
