---
title: TBLMICROSSTHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmicrossthar/
---

# TBLMICROSSTHAR

> YAZARKASALAR-MICROS-SATIS BILGILERI IZLEME DUZELTME EKRANINDAKI KAYITLARI TUTAN TABLODUR.NETSIS'E AKTARIMDAN ONCE IZLEME/DUZELTME YAPILABILSIN PARAMETRESI ISARETLENDIGINDE AKTIF OLAN EKRANDIR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 10
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARIH` | TDBDATETIME | evet |  | Tarih sahasıdır. |
| 2 | `UNITE` | varchar(4) | evet |  | Unite sahasıdır. |
| 3 | `KASAKODU` | varchar(2) | evet |  | Kosakodunu tutan sahadır. |
| 4 | `STOKKODU` | TDBSTOKKOD | evet |  | Stok kodu sahasıdır. |
| 5 | `MIKTAR` | TDBFLOAT | evet |  | Miktar sahasıdır. |
| 6 | `FIYAT` | TDBFLOAT | evet |  | Fiyat sahasıdır. |
| 7 | `FLAG` | char(1) | evet |  | Default H degerini tutan sahadır. |
| 8 | `SUBE` | TDBSMALLINT | evet |  | Sube kodu sahasıdır. |
| 9 | `KDV` | decimal(5,2) | evet |  | KDV oranını tutan sahadır. |
| 10 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMICROSSTHAR_PKEY` | `INCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMICROSSTHAR_KEY1` | `TARIH, UNITE, KASAKODU, STOKKODU` | Nonclustered, unique |
| `TBLMICROSSTHAR_KEY2` | `STOKKODU` | Nonclustered |
| `TBLMICROSSTHAR_KEY3` | `FLAG` | Nonclustered |
| `TBLMICROSSTHAR_KEY4` | `SUBE` | Nonclustered |
| `TBLMICROSSTHAR_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 TARIH, UNITE, KASAKODU, STOKKODU, MIKTAR, FIYAT
FROM dbo.TBLMICROSSTHAR WITH (NOLOCK);
```
