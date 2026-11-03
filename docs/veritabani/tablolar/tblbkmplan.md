---
title: TBLBKMPLAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmplan/
---

# TBLBKMPLAN

> BAKIM PLANLAMADAN, PLANLA SECENEGI ILE OLUSTURULAN KAYITLARI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAKBKMINCKEYNO` | TDBINTEGER | hayır |  | Makine bakım inckey numarasını tutan sahadır. |
| 4 | `BASTAR` | TDBDATETIME | hayır | `getdate()` | Planın yapılacagı baslangıc tarihini tutan sahadır. |
| 5 | `BITTAR` | TDBDATETIME | hayır | `getdate()` | Planın yapılacagı bitis tarihini tutan sahadır. |
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
| FOREIGN KEY | `TBLBKMPLAN_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBKMPLAN_FKEY2` | `MAKBKMINCKEYNO` |
| PRIMARY KEY | `TBLBKMPLAN_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMPLAN_IND_1` | `SUBE_KODU` | Nonclustered |
| `TBLBKMPLAN_IND_2` | `MAKBKMINCKEYNO, BASTAR, BITTAR` | Nonclustered |
| `TBLBKMPLAN_IND_3` | `MAKBKMINCKEYNO, BITTAR` | Nonclustered |
| `TBLBKMPLAN_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, MAKBKMINCKEYNO, BASTAR, BITTAR, KAYITYAPANKUL
FROM dbo.TBLBKMPLAN WITH (NOLOCK);
```
