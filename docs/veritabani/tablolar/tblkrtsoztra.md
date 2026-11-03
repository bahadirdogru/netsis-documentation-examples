---
title: TBLKRTSOZTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtsoztra/
---

# TBLKRTSOZTRA

> SOZLESME DETAY KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KRTSOZMASINCKEYNO` | TDBINTEGER | hayır |  | Sozlesme inckey numarasını tutan sahadır. |
| 3 | `TAKSITBAS` | TDBSMALLINT | hayır | `0` | Baslangıc taksit bilgisini tutan sahadır. |
| 4 | `TAKSITBIT` | TDBSMALLINT | hayır | `0` | Bitis taksit bilgisini tutan sahadır. |
| 5 | `TAHSILATSEKLI` | TDBBYTE | hayır | `0` | Tahsilat sekli vadeli ise 0;tek seferde ise 1 degerini tutan sahadır. |
| 6 | `VADEATLAMA` | TDBSMALLINT | hayır | `0` | Vade atlama sahasını tutar. |
| 7 | `BLOKAJGUNILAVEGUN` | TDBBYTE | hayır | `0` | Blokaj sekli ilave gun ise 1;sabit gun ise 0 degerini tutan sahadır. |
| 8 | `BLOKAJGUN` | TDBSMALLINT | hayır | `0` | Blokaj gun sayısını tutan sahadır. |
| 9 | `VADEGUNILAVEGUN` | TDBBYTE | hayır | `0` | Vade sekli ilave gun ise 1;sabit gun ise 0 degerini tutan sahadır. |
| 10 | `VADEGUN` | TDBSMALLINT | hayır | `0` | Vade gun sayısını tutan sahadır. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKRTSOZTRA_FKEY` | `KRTSOZMASINCKEYNO` |
| PRIMARY KEY | `TBLKRTSOZTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKRTSOZTRA_IND_1` | `KRTSOZMASINCKEYNO, TAKSITBAS` | Nonclustered, unique |
| `TBLKRTSOZTRA_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KRTSOZMASINCKEYNO, TAKSITBAS, TAKSITBIT, TAHSILATSEKLI, VADEATLAMA
FROM dbo.TBLKRTSOZTRA WITH (NOLOCK);
```
