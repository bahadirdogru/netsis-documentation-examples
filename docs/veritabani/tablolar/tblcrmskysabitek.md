---
title: TBLCRMSKYSABITEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskysabitek/
---

# TBLCRMSKYSABITEK

> SIKAYET KAYDINDA GIRILEN KULLANICI TANIMLI SAHALARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `SIKAYETKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SIKAYETKOD` | TDBSIKAYETKOD | hayır |  | Sikayet kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYSABITEK_FKEY1` | `SIKAYETKOD` |
| PRIMARY KEY | `TBLCRMSKYSABITEK_PKEY` | `SIKAYETKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYSABITEK_PKEY` | `SIKAYETKOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SIKAYETKOD
FROM dbo.TBLCRMSKYSABITEK WITH (NOLOCK);
```
