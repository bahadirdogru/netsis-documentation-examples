---
title: TBLKOSTIPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkostipmas/
---

# TBLKOSTIPMAS

> KOŞUL TİP KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `KOSTIPKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOSTIPKODU` | varchar(8) | hayır |  | Koşul Tipini gösterir. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 5 | `ONCELIK` | TDBSMALLINT | evet | `0` | Önceliği gösterir. |
| 6 | `SORULSUN` | char(1) | evet | `H` | Birden Fazla Koşul Olduğunda Sorulsun parametresi işaretli ise E, değil ise H değerini alır. |
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
| FOREIGN KEY | `TBLKOSTIPMAS_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKOSTIPMAS_FKEY2` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLKOSTIPMAS_PKEY` | `KOSTIPKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSTIPMAS_IND_1` | `ISLETME_KODU, SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLKOSTIPMAS_PKEY` | `KOSTIPKODU` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 KOSTIPKODU, ISLETME_KODU, SUBE_KODU, ACIKLAMA, ONCELIK, SORULSUN
FROM dbo.TBLKOSTIPMAS WITH (NOLOCK);
```
