---
title: TBLMAKSARF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaksarf/
---

# TBLMAKSARF

> MAKINE SARF KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `TARIH, SUBE_KODU, MAKINCKEYNO, STOKKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARIH` | TDBDATETIME | hayır |  | Tarih alanını tutan sahadır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAKINCKEYNO` | TDBINTEGER | hayır |  | Makine inckey numarasını tutan sahadır. |
| 4 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 5 | `MIKTAR` | TDBFLOAT | hayır | `0` | Miktar alanını tutan sahadır. |
| 6 | `TUTAR` | TDBFLOAT | hayır | `0` | Tutar sahasıdır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAKSARF_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMAKSARF_FKEY2` | `MAKINCKEYNO` |
| FOREIGN KEY | `TBLMAKSARF_FKEY3` | `STOKKODU` |
| PRIMARY KEY | `TBLMAKSARF_PK` | `TARIH, SUBE_KODU, MAKINCKEYNO, STOKKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKSARF_IND_1` | `MAKINCKEYNO` | Nonclustered |
| `TBLMAKSARF_IND_2` | `STOKKODU` | Nonclustered |
| `TBLMAKSARF_IND_3` | `SUBE_KODU` | Nonclustered |
| `TBLMAKSARF_PK` | `TARIH, SUBE_KODU, MAKINCKEYNO, STOKKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 TARIH, SUBE_KODU, MAKINCKEYNO, STOKKODU, MIKTAR, TUTAR
FROM dbo.TBLMAKSARF WITH (NOLOCK);
```
