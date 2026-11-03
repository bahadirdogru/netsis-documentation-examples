---
title: TBLDUYURU
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblduyuru/
---

# TBLDUYURU

> DUYURU KODU TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `DUYURU_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUYURU_KOD` | varchar(8) | hayır |  | Duyuru kodunu tutan sahadır. |
| 3 | `DUYURU_ISIM` | varchar(30) | evet |  | Tanımlanan duyurunun acıklamasını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDUYURU_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLDUYURU_PKEY` | `DUYURU_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDUYURU_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLDUYURU_PKEY` | `DUYURU_KOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUYURU_KOD, DUYURU_ISIM
FROM dbo.TBLDUYURU WITH (NOLOCK);
```
