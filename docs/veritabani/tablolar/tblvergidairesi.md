---
title: TBLVERGIDAIRESI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblvergidairesi/
---

# TBLVERGIDAIRESI

> SİSTEMDE TANIMLI OLAN VERGİ DAİRESİ İSİMLERİ YER ALMAKTADIR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 2

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `VD_KODU` | varchar(6) | hayır |  | Vergi dairesi kodu bilgisi yer alır. |
| 2 | `VD_ADI` | varchar(500) | evet |  | Vergi dairesi adı bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 VD_KODU, VD_ADI
FROM dbo.TBLVERGIDAIRESI WITH (NOLOCK);
```
