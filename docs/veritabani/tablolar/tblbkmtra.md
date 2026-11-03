---
title: TBLBKMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmtra/
---

# TBLBKMTRA

> BAKIM EMIRLERI-BAKIM KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `BELGENO` | TDBBELGENO | hayır |  | Belge numarasını tutan tablodur. |
| 4 | `TLPINCKEYNO` | TDBINTEGER | hayır |  | Bakım emirleri inckey number alanını tutar. |
| 5 | `BKMSBINCKEYNO` | TDBINTEGER | hayır |  | Bakım sablonu inckey number alanını tutar. |
| 6 | `BASTAR` | TDBDATETIME | hayır | `getdate()` | Baslangıc tarihini tutan sahadır. |
| 7 | `BITTAR` | TDBDATETIME | hayır | `getdate()` | Bitis tarihini tutan sahadır. |
| 8 | `ACIKLAMA` | TDBMEMO | evet |  | Acıklama alanını tutan sahadır. |
| 9 | `UPDATE_KODU` | char(1) | hayır | `H` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMTRA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBKMTRA_FKEY2` | `TLPINCKEYNO` |
| FOREIGN KEY | `TBLBKMTRA_FKEY3` | `BKMSBINCKEYNO` |
| PRIMARY KEY | `TBLBKMTRA_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMTRA_IND_1` | `BELGENO` | Nonclustered, unique |
| `TBLBKMTRA_IND_2` | `SUBE_KODU, BELGENO` | Nonclustered |
| `TBLBKMTRA_IND_3` | `BKMSBINCKEYNO` | Nonclustered |
| `TBLBKMTRA_IND_4` | `UPDATE_KODU, BELGENO, BITTAR` | Nonclustered |
| `TBLBKMTRA_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, BELGENO, TLPINCKEYNO, BKMSBINCKEYNO, BASTAR
FROM dbo.TBLBKMTRA WITH (NOLOCK);
```
