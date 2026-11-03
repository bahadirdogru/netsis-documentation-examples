---
title: TBLCSISLEMTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcsislemtip/
---

# TBLCSISLEMTIP

> CEKSENLOG İŞLEM TİPLERİNİN TUTULDUĞU TABLO

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLEMTURU` | TDBBYTE | hayır |  | İşlem türü bilgisi yer alır. |
| 2 | `ISLEMACIK` | smallint | hayır |  | İşlem açıklaması kodu yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLEMTURU, ISLEMACIK
FROM dbo.TBLCSISLEMTIP WITH (NOLOCK);
```
