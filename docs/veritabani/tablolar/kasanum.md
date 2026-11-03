---
title: KASANUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/kasanum/
---

# KASANUM

> KASA KAYITLARI FİŞ NUMARASI KAYITLARINI TUTAR.

- **Modül:** [KASA](/veritabani/moduller/kasa/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `KSMAS_KOD+IO+TIP`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KSMAS_KOD` | varchar(8) | hayır |  | Kasa Kodunu gösterir. |
| 2 | `IO` | char(1) | hayır |  | Gelir/Gider i gösterir.Gelir ise 'G', Gider ise 'C' değerini gösterir. |
| 3 | `TIP` | char(1) | hayır |  | Tipi gösterir. Banka ise 'B', Cari ise 'C', Çek ise 'E', Fatura ise 'F', Muhtelif ise 'M', Senet ise 'S', Transfer ise 'T' değerini gösterir. |
| 4 | `FISNO` | TDBBELGENO | evet |  | Girlin en son Fiş Numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKASANUM_PKEY` | `KSMAS_KOD+IO+TIP` |
| FOREIGN KEY | `TBLKASANUM_FKEY` | `KSMAS_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKASANUM_PKEY` | `KSMAS_KOD+IO+TIP` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KSMAS_KOD, IO, TIP, FISNO
FROM dbo.KASANUM WITH (NOLOCK);
```
