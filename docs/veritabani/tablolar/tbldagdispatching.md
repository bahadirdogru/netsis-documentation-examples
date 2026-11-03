---
title: TBLDAGDISPATCHING
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagdispatching/
---

# TBLDAGDISPATCHING

> DISPATCHING-DAGITIM SISTEMI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `TARIH, VASITAKOD, IRSNO, CARIKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutar. |
| 3 | `VASITAKOD` | varchar(15) | hayır |  | Kamyon plaka numarasını tutar. |
| 4 | `IRSNO` | TDBBELGENO | hayır |  | Irsaliye numarasını tutar. |
| 5 | `CARIKOD` | varchar(15) | hayır |  | Cari kodu tutar. |
| 6 | `TOPLAMHACIM` | TDBFLOAT | evet |  | Kamyon toplam hacim bilgisini tutar. |
| 7 | `TOPLAMAGIRLIK` | TDBFLOAT | evet |  | Kamyon toplam agırlık bilgisini tutar. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisini tutar. |
| 9 | `BOLGEKOD` | varchar(15) | evet |  | Bolge kodunu tutar. |
| 10 | `PLSKOD` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YUKLEMEKODU` | varchar(15) | hayır | `0` | Yukleme kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGDISPATCH` | `TARIH, VASITAKOD, IRSNO, CARIKOD` |
| FOREIGN KEY | `TBLDAGDISPATCH_SUBEKODU_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGDISPATCH` | `TARIH, VASITAKOD, IRSNO, CARIKOD` | clustered, unique |
| `TBLDAGDISPATCH_IND_1` | `SUBE_KODU, YUKLEMEKODU, TARIH, VASITAKOD, IRSNO, CARIKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TARIH, VASITAKOD, IRSNO, CARIKOD, TOPLAMHACIM
FROM dbo.TBLDAGDISPATCHING WITH (NOLOCK);
```
