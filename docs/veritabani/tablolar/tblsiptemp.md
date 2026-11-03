---
title: TBLSIPTEMP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsiptemp/
---

# TBLSIPTEMP

> ANLIK ÜRETİM PLANLAMA KAYITLARINI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  |  |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok Kodunu gösterir. |
| 3 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktarı gösterir. |
| 4 | `RECETE_TARIHI` | TDBDATETIME | evet |  | Üretimin yapıldığı tarihi gösterir. |
| 5 | `SETNO` | varchar(25) | evet |  | Revizyon Numarasını gösterir. |
| 6 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma Kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSIPTEMP_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSIPTEMP_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSIPTEMPFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIPTEMP_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLSIPTEMP_IND_1` | `ISLETME_KODU+STOK_KODU+YAPKOD+SETNO` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, STOK_KODU, MIKTAR, RECETE_TARIHI, SETNO, YAPKOD
FROM dbo.TBLSIPTEMP WITH (NOLOCK);
```
