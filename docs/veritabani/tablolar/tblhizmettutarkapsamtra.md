---
title: TBLHIZMETTUTARKAPSAMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmettutarkapsamtra/
---

# TBLHIZMETTUTARKAPSAMTRA

> Cari-Hizmet Prim tanımlama ekranındaki kota girişi bilgileri yer alır.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 6
- **Not:** Bu tablo şema dokümanında ikinci kez, [STOK modülünde](/veritabani/tablolar/tblhizmettutarkapsamtra-2/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MASINCKEYNO` | TDBINTEGER | hayır |  | TBLHIZMETTUTARKAPSAMMAS (INCKEYNO) kolonuna karşılık gelir |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 3 | `ALTSINIR` | TDBFLOAT | hayır |  | Alt sınır bilgisi yer alır. |
| 4 | `USTSINIR` | TDBFLOAT | hayır |  | Üst sınır bilgisi yer alır. |
| 5 | `ISKONTO` | TDBFLOAT | hayır |  | değer bilgisi yer alır. |
| 6 | `GRUPHESAPSIFIRLANSIN` | char(1) | evet |  | Grup hesaplanması sıfırlansın işaretli ise E değerini alır. |

## Örnek sorgu

```sql
SELECT TOP 100 MASINCKEYNO, INCKEYNO, ALTSINIR, USTSINIR, ISKONTO, GRUPHESAPSIFIRLANSIN
FROM dbo.TBLHIZMETTUTARKAPSAMTRA WITH (NOLOCK);
```
