---
title: TBLCRMSKYAKTEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskyaktek/
---

# TBLCRMSKYAKTEK

> SIKAYET AKTIVITE KAYITLARINDA GIRILEN KULLANICI TANIMLI SAHALARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `AKTIVITEKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AKTIVITEKOD` | TDBSKYAKTIVITEKOD | hayır |  | Sikayet aktivite kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYAKTEK_FKEY1` | `AKTIVITEKOD` |
| PRIMARY KEY | `TBLCRMSKYAKTEK_PKEY` | `AKTIVITEKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYAKTEK_PKEY` | `AKTIVITEKOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 AKTIVITEKOD
FROM dbo.TBLCRMSKYAKTEK WITH (NOLOCK);
```
