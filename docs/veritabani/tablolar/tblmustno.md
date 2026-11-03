---
title: TBLMUSTNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmustno/
---

# TBLMUSTNO

> İŞLEMLER>NUMARA DÜZENLEME EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 3

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | Varsa seri kodunu gösterir. |
| 3 | `NUMARA` | TDBBELGENO | evet | `0` | Müstahsil fiş numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMUSTNO_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUSTNO_IND_1` | `SUBE_KODU+SERI` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, NUMARA
FROM dbo.TBLMUSTNO WITH (NOLOCK);
```
