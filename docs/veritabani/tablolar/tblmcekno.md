---
title: TBLMCEKNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmcekno/
---

# TBLMCEKNO

> CEK NUMARASI DEGISIKLIGINDEN GIRILEN KAYITLARI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Musteri ceklerinin kaydında kullanılacak seri bilgisini tutar. |
| 3 | `SIRA_NO` | TDBBELGENO | evet |  | Belirlenen seride kalınan son cek numarasını tutar. |
| 4 | `ALB_NO` | TDBBELGENO | evet |  | Alındı bordo numarasını tutar. |
| 5 | `VERB_NO` | TDBBELGENO | evet |  | Verildi bordro numarasını tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMCEKNO_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLMCEKNO_PKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMCEKNO_IND_1` | `SERI` | Nonclustered, unique |
| `TBLMCEKNO_PKEY` | `SUBE_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, SIRA_NO, ALB_NO, VERB_NO
FROM dbo.TBLMCEKNO WITH (NOLOCK);
```
