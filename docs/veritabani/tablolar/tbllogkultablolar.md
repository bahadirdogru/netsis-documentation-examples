---
title: TBLLOGKULTABLOLAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbllogkultablolar/
---

# TBLLOGKULTABLOLAR

> LOG TUTULACAK TABLO KAYITLARINI TUTAN TABLODUR.

- **Modül:** [LOG](/veritabani/moduller/log/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `SUBE_KODU, TABLENAME`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TABLENAME` | varchar(100) | hayır |  | Log tutlacak tablo adını tutan sahadır. |
| 3 | `HASINSERT` | char(1) | evet |  | Kayıt logu tutulacak ise 1 degerini tutan sahadır. |
| 4 | `HASDELETE` | char(1) | evet |  | Silme logu tutulacak ise 1 degerini tutan sahadır. |
| 5 | `HASUPDATE` | char(1) | evet |  | Düzeltme lodu tutulacak ise 1 degerini tutan sahadır. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLLOGKULTABLOLAR_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `PK_TBLLOGKULTABLOLAR` | `SUBE_KODU, TABLENAME` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLLOGKULTABLOLAR` | `SUBE_KODU, TABLENAME` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TABLENAME, HASINSERT, HASDELETE, HASUPDATE, KAYITYAPANKUL
FROM dbo.TBLLOGKULTABLOLAR WITH (NOLOCK);
```
