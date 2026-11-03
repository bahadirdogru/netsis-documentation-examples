---
title: TBLBNKTMPEMIR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnktmpemir/
---

# TBLBNKTMPEMIR

> ONLİNE BANKACILIKTA ÖDEME EMRİLERİNİ ONLİNE GETİR BUTONUNA BASILDIĞINDA GEÇİCİ OLARAK KAYITLARI TUTAR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `HARINCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ODEINCKEYNO` | TDBINTEGER | evet |  | Ödeme inckey numarasını gösterir. |
| 2 | `HARINCKEYNO` | TDBINTEGER | hayır |  | Hareket inckey numarasını gösterir. |
| 3 | `VTARIH` | TDBDATETIME | evet |  | Vade tarihini gösterir. |
| 4 | `TUTAR` | TDBFLOAT | evet | `0` | Tutarı gösterir. |
| 5 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLBNKTMPEMIRPKEY` | `HARINCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKTMPEMIR_IND_1` | `SUBE_KODU, HARINCKEYNO` | Nonclustered, Unique |
| `TBLBNKTMPEMIR_IND_2` | `SUBE_KODU, ODEINCKEYNO, HARINCKEYNO` | Nonclustered, Unique |
| `TBLBNKTMPEMIR_IND3` | `VTARIH` | Nonclustered |
| `TBLBNKTMPEMIRPKEY` | `HARINCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ODEINCKEYNO, HARINCKEYNO, VTARIH, TUTAR, SUBE_KODU
FROM dbo.TBLBNKTMPEMIR WITH (NOLOCK);
```
