---
title: TBLTMPEMIR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltmpemir/
---

# TBLTMPEMIR

> İŞLEMLER>ÖDEME EMİRLERİ>ÖDEME EMİRLERİ ONLİNE BANKACILIK İŞLEMLEMİNDE YAPILAN KAYITLARI GÖSTERİR. DAHA SONRA BU TABLODAKİ KAYITLAR SİLİNİR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `HARINCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ODEINCKEYNO` | TDBINTEGER | evet |  | Ödeme inckey numarasını gösterir. |
| 2 | `HARINCKEYNO` | TDBINTEGER | hayır |  | Online bankaclık için oluşan hareket inckey numarasını gösterir. |
| 3 | `VTARIH` | TDBDATETIME | evet |  | Vade tarihini gösterir. |
| 4 | `TUTAR` | TDBFLOAT | evet | `0` | Bankaya ödenecek tutarı gösterir. |
| 5 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTMPEMIRPKEY` | `HARINCKEYNO` |
| FOREIGN KEY | `TBLTMPEMIR_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTMPEMIR_IND1` | `SUBE_KODU+HARINCKEYNO` | Unique,Non-clustered |
| `TBLTMPEMIR_IND2` | `SUBE_KODU+ODEINCKEYNO+HARINCKEYNO` | Unique,Non-clustered |
| `TBLTMPEMIR_IND3` | `VTARIH` | Non-unique,Non-clustered |
| `TBLTMPEMIRPKEY` | `HARINCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ODEINCKEYNO, HARINCKEYNO, VTARIH, TUTAR, SUBE_KODU
FROM dbo.TBLTMPEMIR WITH (NOLOCK);
```
