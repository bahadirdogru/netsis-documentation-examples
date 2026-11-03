---
title: TBLMUHASEBEKODLAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhasebekodlar/
---

# TBLMUHASEBEKODLAR

> POS MODÜLÜ>KAYIT>MUHASEBE KODLARININ TANIMLANMASI EKRANIDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `ORAN+KDV`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ORAN` | TDBSMALLINT | hayır |  | IBM Genius için desteklenen Z Raporu’nun alınabilmesi amacıyla girilen kdv oranını gösterir. |
| 2 | `MUHKOD` | TDBMUHKOD | evet |  | Girilen kdv oranı için tanımlanan muhasebe kodlarını gösterir. |
| 3 | `KDV` | char(1) | hayır |  | Kdv parametresini gösterir. |
| 4 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `YEDEK2` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `YEDEK3` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHASEBEKODLARPKEY` | `ORAN+KDV` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHASEBEKODLARPKEY` | `ORAN+KDV` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ORAN, MUHKOD, KDV, YEDEK1, YEDEK2, YEDEK3
FROM dbo.TBLMUHASEBEKODLAR WITH (NOLOCK);
```
