---
title: TBLBNKONLINEPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkonlineprm/
---

# TBLBNKONLINEPRM

> Açıklama yok.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `ISLETME_KODU, ANAHTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır | `1` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ANAHTAR` | varchar(50) | hayır |  | Fatura no'su ve cari kodu anahtar olarak tutulur |
| 3 | `DEGER` | TDBMEMO | evet |  | Değeri göstermektedir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLBNKONLINEPRM_PK` | `ISLETME_KODU, ANAHTAR` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKONLINEPRM_PK` | `ISLETME_KODU, ANAHTAR` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ANAHTAR, DEGER
FROM dbo.TBLBNKONLINEPRM WITH (NOLOCK);
```
