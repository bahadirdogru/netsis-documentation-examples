---
title: TBLEARSIVPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblearsivprm/
---

# TBLEARSIVPRM

> E-Arşiv parametreleri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 9

## İlgili sayfalar

- [E-belge (NetOpenX COM)](/netopenx/e-belge/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `SERTIFIKASERINO` | varchar(50) | evet |  | NULL |
| 4 | `EARSIVENTEG` | varchar(1) | evet |  | E-Arşiv uygulaması kullanılsın işaretli ise E değerini alır. |
| 5 | `PATH` | varchar(200) | evet |  | EARSIVFATURA senaryosu kullanılsın işaretli ise bu değeri alır. |
| 6 | `BIRIMKOD` | varchar(3) | evet |  | Belge birim kod bilgisi yer alır. |
| 7 | `BIRIMETIKET` | varchar(200) | evet |  | Gönderici birim etiketi bilgisi yer alır. |
| 8 | `COKLUBIRIM` | char(1) | evet |  | Çoklu belge birim kod kullanılsın işaretli ise E değerini alır. |
| 9 | `EFATTEVKOD` | TDBINTEGER | evet |  | E-Arşiv tevkifat kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, SERTIFIKASERINO, EARSIVENTEG, PATH, BIRIMKOD
FROM dbo.TBLEARSIVPRM WITH (NOLOCK);
```
