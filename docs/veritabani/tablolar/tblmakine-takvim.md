---
title: TBLMAKINE_TAKVIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmakine-takvim/
---

# TBLMAKINE_TAKVIM

> MAKINE BAKIM TAKVIMI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `DEMIR_KODU, BAKIMBASTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DEMIR_KODU` | varchar(30) | hayır |  | Demirbas kodu alanını tutan sahadır. |
| 2 | `BAKIMBASTAR` | TDBDATETIME | hayır |  | Bakım baslangıc tarihini tutan sahadır. |
| 3 | `BAKIMBITTAR` | TDBDATETIME | evet |  | Bakım bitis tarihini tutan sahadır. |
| 4 | `ACIKLAMA` | TDBMEMO | evet |  | Açıklamalar sahasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMAKINE_TAKVIM_PKEY` | `DEMIR_KODU, BAKIMBASTAR` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKINE_TAKVIM_PKEY` | `DEMIR_KODU, BAKIMBASTAR` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 DEMIR_KODU, BAKIMBASTAR, BAKIMBITTAR, ACIKLAMA
FROM dbo.TBLMAKINE_TAKVIM WITH (NOLOCK);
```
