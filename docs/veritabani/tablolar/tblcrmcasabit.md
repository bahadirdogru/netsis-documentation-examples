---
title: TBLCRMCASABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmcasabit/
---

# TBLCRMCASABIT

> SATIS KAYITTA GIRILEN KULLANICI TANIMLI SAHALARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `CARI_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Satıs ve musteri sikayetleri kaydında girilen musteri kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMKULALANVERI_FKEY1` | `CARI_KODU` |
| PRIMARY KEY | `TBLCRMKULALANVERI_PKEY` | `CARI_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMKULALANVERI_PKEY` | `CARI_KODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU
FROM dbo.TBLCRMCASABIT WITH (NOLOCK);
```
