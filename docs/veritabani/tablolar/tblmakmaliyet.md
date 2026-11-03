---
title: TBLMAKMALIYET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmakmaliyet/
---

# TBLMAKMALIYET

> TANIMLI MAKINE ICIN MALIYET OLUSTURMADAN GELEN MALIYET KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `TARIH, SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARIH` | TDBDATETIME | hayır |  | Tarih alanını tutan sahadır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAKINCKEYNO` | TDBINTEGER | hayır |  | Makine inckey numarasını tutan sahadır. |
| 4 | `MSRINCKEYNO` | TDBINTEGER | hayır |  | Masraf kodu inckey numarasını tutan sahadır. |
| 5 | `TUTAR` | TDBFLOAT | hayır | `0` | Tutar sahasıdır. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAKMALIYET_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMAKMALIYET_FKEY2` | `MAKINCKEYNO` |
| FOREIGN KEY | `TBLMAKMALIYET_FKEY3` | `MSRINCKEYNO` |
| PRIMARY KEY | `TBLMAKMALIYET_PK` | `TARIH, SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKMALIYET_IND_1` | `MAKINCKEYNO` | Nonclustered |
| `TBLMAKMALIYET_IND_2` | `MSRINCKEYNO` | Nonclustered |
| `TBLMAKMALIYET_PK` | `TARIH, SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 TARIH, SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO, TUTAR, KAYITYAPANKUL
FROM dbo.TBLMAKMALIYET WITH (NOLOCK);
```
