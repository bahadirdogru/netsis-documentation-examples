---
title: TBLFATKALEMILISKI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatkalemiliski/
---

# TBLFATKALEMILISKI

> GRUP KOŞUL TANIMLAMASI KULLANILDIĞINDA BAĞLANTILAR BU TABLODA TUTULUR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KALEMYERI` | char(1) | evet |  | Fatura ise 3,irsaliye ise 2,sipariş ise1 değeri alır |
| 3 | `SATIRINCKEYNO` | TDBINTEGER | hayır |  | Kalemin sthar'da ki inckeynosudur. |
| 4 | `KOSULINCKEYNO` | TDBINTEGER | evet |  | Koşdetay inckeynosudur. |
| 5 | `RELINCKEYNO` | TDBINTEGER | evet |  | Mal fazlası olmayan fatura kalemi için -1 mal fazlası olan kalem için ise mal fazlası olmayan kalemin inckenosu tutulur. |
| 6 | `TIP` | char(1) | evet |  | M mal fazlası, K kalem |
| 7 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `ANAHTAR` | varchar(100) | evet |  | Fatura no'su ve cari kodu anahtar olarak tutulur |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFATKALEMILISKI_PKEY` | `INCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATKALEMILISKI_PKEY` | `INCKEYNO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KALEMYERI, SATIRINCKEYNO, KOSULINCKEYNO, RELINCKEYNO, TIP
FROM dbo.TBLFATKALEMILISKI WITH (NOLOCK);
```
