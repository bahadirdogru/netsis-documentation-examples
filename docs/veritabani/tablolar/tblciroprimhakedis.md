---
title: TBLCIROPRIMHAKEDIS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblciroprimhakedis/
---

# TBLCIROPRIMHAKEDIS

> CIRO PRIM HAKEDIS TABLOSU KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `CARIRAPORKODU, CIRO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARIRAPORKODU` | TDBCARIKOD | hayır |  | Cari rapor kodu sahasını tutar. |
| 3 | `CM` | char(1) | evet | `C` | Ciro ise C; Miktar ise M degerini tutan sahadır. |
| 4 | `CIRO` | TDBFLOAT | hayır | `0` | Ciro primini tutan sahadır. |
| 5 | `ISKONTO` | TDBFLOAT | evet | `0` | İskonto oranını tutan sahadır. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
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
| FOREIGN KEY | `TBLCIROPRIMHAKEDISFK` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLCIROPRIMHAKEDISPK` | `CARIRAPORKODU, CIRO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCIROPRIMHAKEDIS_IND_1` | `INCKEYNO` | Nonclustered, unique |
| `TBLCIROPRIMHAKEDIS_IND_2` | `ISLETME_KODU` | Nonclustered |
| `TBLCIROPRIMHAKEDISPK` | `CARIRAPORKODU, CIRO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARIRAPORKODU, CM, CIRO, ISKONTO, INCKEYNO
FROM dbo.TBLCIROPRIMHAKEDIS WITH (NOLOCK);
```
