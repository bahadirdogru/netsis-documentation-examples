---
title: TBLTMPFIFOM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltmpfifom/
---

# TBLTMPFIFOM

> İŞLEMLER>DÖVİZ İŞLEMLERİ>DÖVİZ FİFO MALİYET OLUŞTURMA SIRASINDA KAYITLAR GEÇİCİ TABLOYA ATILIR. RAPOR OLUŞTUĞUNDA BU TABLODAKİ KAYITLAR SİLİNİR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `CARI_KOD+INCKEY+TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu gösterir. |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarihi gösterir. |
| 3 | `INCKEY` | TDBINTEGER | hayır |  | İnckey numarasını gösterir. |
| 4 | `DOVTUT` | TDBFLOAT | evet | `0` | Döviz tutarını gösterir. |
| 5 | `KUR` | TDBFLOAT | evet | `0` | Döviz kurunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTMPFIFOM_PKEY` | `CARI_KOD+INCKEY+TARIH` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTMPFIFOM_PKEY` | `CARI_KOD+INCKEY+TARIH` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, TARIH, INCKEY, DOVTUT, KUR
FROM dbo.TBLTMPFIFOM WITH (NOLOCK);
```
