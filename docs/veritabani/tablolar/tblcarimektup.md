---
title: TBLCARIMEKTUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarimektup/
---

# TBLCARIMEKTUP

> CARI SABIT KARTINDA CARI BILGISI ALANINA GIRILEN KAYITLARI TUTAR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `CARI_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 2 | `MEKTUP` | TDBMEMO | evet |  | Cari bilgisi alanına girilen acıklamayı tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIMEKTUP_FKEY` | `CARI_KOD` |
| PRIMARY KEY | `TBLCARIMEKTUP_PKEY` | `CARI_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIMEKTUP_PKEY` | `CARI_KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, MEKTUP
FROM dbo.TBLCARIMEKTUP WITH (NOLOCK);
```
