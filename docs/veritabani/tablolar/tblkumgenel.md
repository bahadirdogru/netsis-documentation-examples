---
title: TBLKUMGENEL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkumgenel/
---

# TBLKUMGENEL

> SEVK EMRI OLUSTURULAN SIPARIS KAYITLARINI TUTAN TABLODUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `FUNCTIONID, ANAHTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `FUNCTIONID` | TDBBYTE | hayır |  | Siparişin functıon numaras 1 ise sevk - 3 ise yüklemede olduğunu sösterir |
| 2 | `ANAHTAR` | varchar(50) | hayır |  | Belge numarası ve sıra numarasını birlikte gösterir |
| 3 | `TOPLAM1` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |
| 4 | `TOPLAM2` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |
| 5 | `TOPLAM3` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |
| 6 | `TOPLAM4` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |
| 7 | `TOPLAM5` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |
| 8 | `TOPLAM6` | TDBFLOAT | evet | `0` | Sevk edilen siparis miktarını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKUMGENEL_PKEY` | `FUNCTIONID, ANAHTAR` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKUMGENEL_PKEY` | `FUNCTIONID, ANAHTAR` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 FUNCTIONID, ANAHTAR, TOPLAM1, TOPLAM2, TOPLAM3, TOPLAM4
FROM dbo.TBLKUMGENEL WITH (NOLOCK);
```
