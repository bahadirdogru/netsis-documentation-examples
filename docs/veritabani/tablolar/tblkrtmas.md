---
title: TBLKRTMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtmas/
---

# TBLKRTMAS

> KREDI KARTI TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KRTKODU` | TDBBELGENO | hayır |  | Kart Kodunu gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 4 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka Kodunu gösterir. |
| 5 | `KRTTIPINCKEYNO` | TDBINTEGER | hayır |  | Tip Kodunu gösterir.Master yani M 1, VİSA yani V 2 değerini ifade etmektedir. |
| 6 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKRTMAS_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLKRTMAS_FKEY2` | `NETBANKAKODU` |
| FOREIGN KEY | `TBLKRTMAS_FKEY3` | `KRTTIPINCKEYNO` |
| PRIMARY KEY | `TBLKRTMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKRTMAS_IND_1` | `KRTKODU` | Nonclustered, unique |
| `TBLKRTMAS_IND_2` | `ACIKLAMA` | Nonclustered |
| `TBLKRTMAS_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KRTKODU, ACIKLAMA, NETBANKAKODU, KRTTIPINCKEYNO, ISLETME_KODU
FROM dbo.TBLKRTMAS WITH (NOLOCK);
```
