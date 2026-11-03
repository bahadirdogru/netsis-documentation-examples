---
title: TBLKAMBMSEN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkambmsen/
---

# TBLKAMBMSEN

> RAPORLAR>KAMBİYO DEFTERİ EKRANINDA RAPOR BUTONUNA BASILDIĞINDAKİ KAYITLARINI TUTAR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ILKTAR` | TDBDATETIME | evet |  | Başlangıç Tarihini gösterir. |
| 3 | `SONTAR` | TDBDATETIME | evet |  | Bitiş Tarihini gösterir. |
| 4 | `YEDEK` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKAMBMSEN_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKAMBMSEN_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKAMBMSEN_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ILKTAR, SONTAR, YEDEK
FROM dbo.TBLKAMBMSEN WITH (NOLOCK);
```
