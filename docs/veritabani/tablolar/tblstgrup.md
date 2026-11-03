---
title: TBLSTGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstgrup/
---

# TBLSTGRUP

> STOKLAR İÇİN GİRİLEN GRUP KODLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır | `-1` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `GRUP_KOD` | TDBGRUPKOD | hayır |  | Stok kartı kayıtlarında stok kartı2 sekmesinde raporlama amaçlı girilen grup kodunu gösterir. |
| 4 | `GRUP_ISIM` | varchar(30) | evet |  | Girilen grup kodunun adını gösterir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTGRUP_PKEY` | `GRUP_KOD` |
| FOREIGN KEY | `TBLSTGRUP_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSTGRUP_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTGRUP_IND_ADI` | `ISLETME_KODU+SUBE_KODU+GRUP_ISIM` | Non-unique, Non-clustered |
| `TBLSTGRUP_IND1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLSTGRUP_PKEY` | `GRUP_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, GRUP_KOD, GRUP_ISIM, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLSTGRUP WITH (NOLOCK);
```
