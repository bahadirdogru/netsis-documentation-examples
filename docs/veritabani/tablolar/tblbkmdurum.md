---
title: TBLBKMDURUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmdurum/
---

# TBLBKMDURUM

> BAKIM DURUMU KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DRMKODU` | TDBGRUPKOD | hayır |  | Durum kodunu tutar. |
| 5 | `ACIKLAMA` | varchar(30) | evet |  | Acıklama sahasını tutar. |
| 6 | `ISDEFAULT` | char(1) | hayır | `H` | Varsayılan durum parametresi isaretli ise E degerini tutar;isaretli degil ise H degerini tutar. |
| 7 | `AKTIF` | char(1) | hayır | `E` | Aktif ise E degerini tutar; degil ise H degerini tutar. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMDURUM_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBKMDURUM_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBKMDURUM_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMDURUM_IND_1` | `DRMKODU` | nonclustered, unique |
| `TBLBKMDURUM_IND_2` | `ISLETME_KODU, SUBE_KODU, DRMKODU` | nonclustered |
| `TBLBKMDURUM_IND_3` | `AKTIF` | nonclustered |
| `TBLBKMDURUM_PK` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, DRMKODU, ACIKLAMA, ISDEFAULT
FROM dbo.TBLBKMDURUM WITH (NOLOCK);
```
