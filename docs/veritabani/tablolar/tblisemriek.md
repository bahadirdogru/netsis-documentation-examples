---
title: TBLISEMRIEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemriek/
---

# TBLISEMRIEK

> KAYIT>İŞ EMRİ GİRİŞİ EKRANINDA EK BİLGİLER SEKMESİNDE GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `ISEMRI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISEMRI` | TDBBELGENO | hayır |  | İş emri numarasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISEMRIEK_PKEY` | `ISEMRI` |
| FOREIGN KEY | `TBLISEMRIEK_FKEY1` | `ISEMRINO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISEMRIEK_PKEY` | `ISEMRI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISEMRI
FROM dbo.TBLISEMRIEK WITH (NOLOCK);
```
