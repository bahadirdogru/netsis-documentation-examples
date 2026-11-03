---
title: TBLBCEKNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbcekno/
---

# TBLBCEKNO

> CEK NUMARASI DEGISIKLIGINDEN GIRILEN KAYITLARI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Borc ceklerinin kaydında kulalnılacak seri bilgisini tutar. |
| 3 | `SIRA_NO` | varchar(15) | evet |  | Belirlenen seride kalınan son cek numarasını tutar. |
| 4 | `ALB_NO` | varchar(15) | evet |  | Alındı bordo numarasını tutar. |
| 5 | `VERB_NO` | varchar(15) | evet |  | Verildi bordro numarasını tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBCEKNO_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBCEKNO_PKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCEKNO_IND_1` | `SERI` | Nonclustered, unique |
| `TBLBCEKNO_PKEY` | `SUBE_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, SIRA_NO, ALB_NO, VERB_NO
FROM dbo.TBLBCEKNO WITH (NOLOCK);
```
