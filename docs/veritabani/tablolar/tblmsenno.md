---
title: TBLMSENNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmsenno/
---

# TBLMSENNO

> MÜŞTERİ SENETLERİ>İŞLEMLER>SENET NUMARASI DEĞİŞİKLİĞİ KAYITLARINI TUTAR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | TDBBELGENO | hayır |  | Seri numarasını gösterir. |
| 3 | `SIRA_NO` | TDBDATETIME | evet |  | Kaydı yapılacak olan serinin numarasını gösterir. |
| 4 | `ALB_NO` | TDBDATETIME | evet |  | Kaydı yapılacak olan serini alındı bordro numarasını gösterir. |
| 5 | `VERB_NO` | TDBDATETIME | evet |  | Kaydı yapılacak olan serinin verildi bordro numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMSENNO_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMSENNO_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMSENNO_IND_1` | `SERI` | Unique, Non-clustered |
| `TBLMSENNO_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, SIRA_NO, ALB_NO, VERB_NO
FROM dbo.TBLMSENNO WITH (NOLOCK);
```
