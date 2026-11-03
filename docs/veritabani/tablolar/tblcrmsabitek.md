---
title: TBLCRMSABITEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmsabitek/
---

# TBLCRMSABITEK

> ANKET KAYDINDA GIRILEN KULLANICI TANIMLI SAHALARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `ANKETKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ANKETKOD` | TDBANKETKODU | hayır |  | Hazırlanan anketin kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKSABITEK_FKEY1` | `ANKETKOD` |
| PRIMARY KEY | `TBLCRMANKSABITEK_PKEY` | `ANKETKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKSABITEK_PKEY` | `ANKETKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ANKETKOD
FROM dbo.TBLCRMSABITEK WITH (NOLOCK);
```
