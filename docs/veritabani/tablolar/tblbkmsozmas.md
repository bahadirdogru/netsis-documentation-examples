---
title: TBLBKMSOZMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsozmas/
---

# TBLBKMSOZMAS

> BAKIM SOZLESME BILGILERI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SOZLESMENO` | TDBBELGENO | hayır |  | Sozlesme numaralarını tutan sahadır. |
| 4 | `SOZTIPINCKEYNO` | TDBINTEGER | evet |  | Sozlesme tipi inckeyno sunu tutan sahadır. |
| 5 | `BASTAR` | TDBDATETIME | hayır | `getdate()` | Baslangıc tarihini tutan sahadır. |
| 6 | `BITTAR` | TDBDATETIME | hayır | `getdate()` | Bitis tarihini tutan sahadır. |
| 7 | `ACIKLAMA` | TDBMEMO | evet |  | Acıklama alanını tutan sahadır. |
| 8 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 9 | `AKTIF` | char(1) | hayır | `E` | Aktif isaretli ise E degerini tutar. |
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
| FOREIGN KEY | `TBLBKMSOZMAS_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBKMSOZMAS_FKEY2` | `SOZTIPINCKEYNO` |
| FOREIGN KEY | `TBLBKMSOZMAS_FKEY3` | `CARIKOD` |
| PRIMARY KEY | `TBLBKMSOZMAS_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSOZMAS_IND_1` | `SOZLESMENO` | Nonclustered, unique |
| `TBLBKMSOZMAS_IND_2` | `SOZTIPINCKEYNO` | Nonclustered |
| `TBLBKMSOZMAS_IND_3` | `CARIKOD` | Nonclustered |
| `TBLBKMSOZMAS_IND_4` | `BASTAR, BITTAR` | Nonclustered |
| `TBLBKMSOZMAS_IND_5` | `AKTIF` | Nonclustered |
| `TBLBKMSOZMAS_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, SOZLESMENO, SOZTIPINCKEYNO, BASTAR, BITTAR
FROM dbo.TBLBKMSOZMAS WITH (NOLOCK);
```
