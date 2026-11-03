---
title: TBLURETSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretseri/
---

# TBLURETSERI

> SERİLİ ÜRETÜM YAPILDIĞINDA TBLSERITRA TABLOSUNA ATILDIKTAN SONRA, RAPOR>EK ANALİZLER>SERİ BAZINDA ÜRETİM LİSTESİ İÇİN EK ANALİZ ÇALIŞTIRILSIN PARAMERTESİ İŞARETLENİP RAPOR ALINDIĞINDA BU TABLOYA KAYITLAR GİDER.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAMUL_INCKEY` | TDBINTEGER | evet |  | Tblseritra tablosundaki mamül sıra numarasını gösterir. |
| 4 | `HAM_INCKEY` | TDBINTEGER | evet |  | Tblseritra tablosundaki hammadde sıra numarasını gösterir. |
| 5 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckeynumarasını gösterir. Unique olmalıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLURETSERI_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLURETSERI_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLURETSERI_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURETSERI_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLURETSERI_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, MAMUL_INCKEY, HAM_INCKEY, INCKEYNO
FROM dbo.TBLURETSERI WITH (NOLOCK);
```
