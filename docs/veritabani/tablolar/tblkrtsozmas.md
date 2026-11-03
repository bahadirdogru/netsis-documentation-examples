---
title: TBLKRTSOZMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtsozmas/
---

# TBLKRTSOZMAS

> BANKA SOZLESME KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SOZKOD` | TDBBELGENO | hayır |  | Sozlesme kodunu tutan sahadır. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama alnını tutan sahadır. |
| 4 | `KRTMASINCKEYNO` | TDBINTEGER | hayır |  | Kresi kartının inckey numarasını tutan sahadır. |
| 5 | `BASTAR` | TDBDATETIME | hayır |  | Baslangıc tarihini tutan sahadır. |
| 6 | `BITTAR` | TDBDATETIME | hayır |  | Bitis tarihini tutan sahadır. |
| 7 | `KILIT` | char(1) | evet | `H` | Kilitli ise E degerini tutan sahadır. |
| 8 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `BANKANETHESKODU` | varchar(15) | hayır |  | Banka hesap kodunu tutan sahadır. |
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
| FOREIGN KEY | `TBLKRTSOZMAS_FKEY` | `KRTMASINCKEYNO` |
| FOREIGN KEY | `TBLKRTSOZMAS_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLKRTSOZMAS_FKEY3` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKRTSOZMAS_FKEY4` | `BANKANETHESKODU` |
| PRIMARY KEY | `TBLKRTSOZMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKRTSOZMAS_IND_1` | `SOZKOD` | Nonclustered, unique |
| `TBLKRTSOZMAS_IND_2` | `ACIKLAMA` | Nonclustered |
| `TBLKRTSOZMAS_IND_3` | `SOZKOD, BASTAR` | Nonclustered |
| `TBLKRTSOZMAS_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SOZKOD, ACIKLAMA, KRTMASINCKEYNO, BASTAR, BITTAR
FROM dbo.TBLKRTSOZMAS WITH (NOLOCK);
```
