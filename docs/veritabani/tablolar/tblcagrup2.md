---
title: TBLCAGRUP2
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcagrup2/
---

# TBLCAGRUP2

> CARI-GRUP KOD TANIMLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `CARI_KOD, GRUP_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 3 | `GRUP_KODU` | TDBGRUPKOD | hayır |  | Grup kodunu tutar. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCAGRUP2_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCAGRUP2_FKEY1` | `CARI_KOD` |
| PRIMARY KEY | `TBLCAGRUP2_PKEY` | `CARI_KOD, GRUP_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCAGRUP2_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLCAGRUP2_PKEY` | `CARI_KOD, GRUP_KODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARI_KOD, GRUP_KODU, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLCAGRUP2 WITH (NOLOCK);
```
