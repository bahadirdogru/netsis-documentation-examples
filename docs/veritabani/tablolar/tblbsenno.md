---
title: TBLBSENNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbsenno/
---

# TBLBSENNO

> SENET NUMARASI DEGISIKLIGINDEN GIRILEN KAYITLARI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Borc senetlerinin kaydında kullanılacak seri bilgisini tutar. |
| 3 | `SIRA_NO` | varchar(15) | evet |  | Belirlenen seride kalınan son senet numarasını tutar. |
| 4 | `ALB_NO` | varchar(15) | evet |  | Alındı bordo numarasını tutar. |
| 5 | `VERB_NO` | varchar(15) | evet |  | Verildi bordro numarasını tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSENNO_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBSEKNO_PKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBSEKNO_PKEY` | `SUBE_KODU` | Clustered, unique |
| `TBLBSENNO_IND_1` | `SERI` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, SIRA_NO, ALB_NO, VERB_NO
FROM dbo.TBLBSENNO WITH (NOLOCK);
```
