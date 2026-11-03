---
title: TBLBUTCEODEPLANTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutceodeplantra/
---

# TBLBUTCEODEPLANTRA

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PLAN_KODU` | varchar(35) | hayır |  | Bütçe planlamasının kodunu tutar |
| 3 | `VADE_TIPI` | TDBBYTE | evet |  | Vade tipini gösteren alan |
| 4 | `VADE_UZUNLUK` | TDBINTEGER | evet |  | Vade aralığının tutulduğu saha |
| 5 | `ODEME_ORANI` | TDBFLOAT | evet |  | Odeme oranının tutulduğu sahadır |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEODEPLANTRA_FKEY_1` | `PLAN_KODU` |
| PRIMARY KEY | `TBLBUTCEODEPLANTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEODEPLANTRA_IND_1` | `PLAN_KODU` | nonclustered |
| `TBLBUTCEODEPLANTRA_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, PLAN_KODU, VADE_TIPI, VADE_UZUNLUK, ODEME_ORANI, C_YEDEK1
FROM dbo.TBLBUTCEODEPLANTRA WITH (NOLOCK);
```
