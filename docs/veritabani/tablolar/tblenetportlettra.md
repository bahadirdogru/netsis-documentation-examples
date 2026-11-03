---
title: TBLENETPORTLETTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblenetportlettra/
---

# TBLENETPORTLETTRA

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PORTLETKODU` | varchar(8) | evet |  | Tanımlanacak portlete verilecek kod numarasını gösterir. |
| 2 | `PORTLETGUID` | varchar(100) | evet |  |  |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KULLANIMDAMI` | char(1) | evet |  |  |
| 5 | `P_WIDTH` | varchar(10) | evet |  |  |
| 6 | `P_HEIGHT` | varchar(10) | evet |  |  |
| 7 | `P_LEFT` | varchar(10) | evet |  |  |
| 8 | `P_TOP` | varchar(10) | evet |  |  |
| 9 | `HAK_SQL` | varchar(500) | evet |  |  |
| 10 | `HAK_TIPI` | tinyint | evet |  |  |
| 11 | `REFRESH_TIME` | TDBINTEGER | evet |  |  |
| 12 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `PORTLETCAPTION` | varchar(100) | evet |  |  |
| 27 | `PORTLETGRAFIK` | text | evet |  |  |
| 28 | `DATA_TIPI` | tinyint | evet |  | Data tipinin saklandığı saha |
| 29 | `DATA_SQL_VBS` | text | evet |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLENETPORTLETTRA_FKEY1` | `PORTLETKODU` |
| PRIMARY KEY | `TBLENETPORTLETTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLENETPORTLETTRA_IND_1` | `PORTLETGUID` | nonclustered, unique |
| `TBLENETPORTLETTRA_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PORTLETKODU, PORTLETGUID, INCKEYNO, KULLANIMDAMI, P_WIDTH, P_HEIGHT
FROM dbo.TBLENETPORTLETTRA WITH (NOLOCK);
```
