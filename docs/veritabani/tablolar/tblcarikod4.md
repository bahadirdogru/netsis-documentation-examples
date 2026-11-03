---
title: TBLCARIKOD4
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarikod4/
---

# TBLCARIKOD4

> CARI KOD 4 KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | Cari kodunu tutar. |
| 2 | `GRUP_KOD` | TDBGRUPKOD | hayır |  | Grup kodunu tutar. |
| 3 | `GRUP_ISIM` | varchar(30) | evet |  | Grup ismini tutar. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `SUBE_KODU` | TDBSMALLINT | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIKOD4_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCARIKOD4_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCARIKOD4_PKEY` | `GRUP_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIKOD4_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLCARIKOD4_IND_ADI` | `ISLETME_KODU, SUBE_KODU, GRUP_ISIM` | Nonclustered |
| `TBLCARIKOD4_PKEY` | `GRUP_KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, GRUP_KOD, GRUP_ISIM, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLCARIKOD4 WITH (NOLOCK);
```
