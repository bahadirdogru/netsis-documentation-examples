---
title: TBLHIZMETTUTARKAPSAMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmettutarkapsamtra-2/
---

# TBLHIZMETTUTARKAPSAMTRA

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `INCKEYNO`
- **Not:** Bu tablo şema dokümanında ikinci kez, [CARİ modülünde](/veritabani/tablolar/tblhizmettutarkapsamtra/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MASINCKEYNO` | TDBINTEGER | hayır |  | Tblsmsmas tablosundaki inckeyno fieldıyla aynı rakamı gösterir. |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ALTSINIR` | TDBFLOAT | hayır |  | Alt sınırın belirlendiği sahadır |
| 4 | `USTSINIR` | TDBFLOAT | hayır |  | Ust sınırın belirlendiği sahadır |
| 5 | `ISKONTO` | TDBFLOAT | hayır |  | İskontoyı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETTUTARKAPSAMTRA_FKEY1` | `MASINCKEYNO` |
| PRIMARY KEY | `TBLHIZMETTUTARKAPSAMTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## Örnek sorgu

```sql
SELECT TOP 100 MASINCKEYNO, INCKEYNO, ALTSINIR, USTSINIR, ISKONTO
FROM dbo.TBLHIZMETTUTARKAPSAMTRA WITH (NOLOCK);
```
