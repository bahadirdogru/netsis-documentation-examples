---
title: TBLISEMRINO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemrino/
---

# TBLISEMRINO

> İŞLEMLER> DOKÜNA NUMARALARI EKRANINDA İŞ EMRİ İÇİN TANIMLANAN SERİ BİLGİSİNİ TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | İş emri için seriyi gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISEMRINO_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLISEMRINO_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISEMRINO_IND_1` | `SERI` | Unique, Non-clustered |
| `TBLISEMRINO_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SERI
FROM dbo.TBLISEMRINO WITH (NOLOCK);
```
