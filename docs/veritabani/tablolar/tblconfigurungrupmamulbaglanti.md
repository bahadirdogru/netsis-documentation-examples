---
title: TBLCONFIGURUNGRUPMAMULBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigurungrupmamulbaglanti/
---

# TBLCONFIGURUNGRUPMAMULBAGLANTI

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `URUNGRUBU_ID` | TDBINTEGER | hayır |  | Ürün grubu numarasının tutulduğu sahadır |
| 5 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunun tutulduğu sahadır |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGURUNGRUPMAMULBAGLANTI_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPMAMULBAGLANTI_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPMAMULBAGLANTI_FKEY3` | `URUNGRUBU_ID` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPMAMULBAGLANTI_FKEY4` | `STOKKODU` |
| PRIMARY KEY | `TBLCONFIGURUNGRUPMAMULBAGLANTI_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGURUNGRUPMAMULBAGLANTI_IND_1` | `STOKKODU, URUNGRUBU_ID` | nonclustered located on PRIMARY |
| `TBLCONFIGURUNGRUPMAMULBAGLANTI_IND_2` | `URUNGRUBU_ID, STOKKODU` | nonclustered located on PRIMARY |
| `TBLCONFIGURUNGRUPMAMULBAGLANTI_IND_3` | `ISLETME_KODU, SUBE_KODU, STOKKODU, URUNGRUBU_ID` | nonclustered located on PRIMARY |
| `TBLCONFIGURUNGRUPMAMULBAGLANTI_IND_4` | `ISLETME_KODU, SUBE_KODU, URUNGRUBU_ID, STOKKODU` | nonclustered located on PRIMARY |
| `TBLCONFIGURUNGRUPMAMULBAGLANTI_PKEY` | `INCKEYNO` | clustered, unique, primary key located on PRIMARY |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, URUNGRUBU_ID, STOKKODU, C_YEDEK1
FROM dbo.TBLCONFIGURUNGRUPMAMULBAGLANTI WITH (NOLOCK);
```
