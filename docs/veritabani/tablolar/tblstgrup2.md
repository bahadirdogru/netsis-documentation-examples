---
title: TBLSTGRUP2
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstgrup2/
---

# TBLSTGRUP2

> BİRDEN FAZLA GRUP KODUNA SAHİP STOKLAR İÇİN GİRİLEN GRUP KODLARINI TUTAR. STOK-GRUP KODU TANIMLAMALARI EKRANINA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `STOK_KODU+GRUP_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 2 | `GRUP_KODU` | TDBGRUPKOD | hayır |  | Stok kartı kayıtlarında stok kartı2 sekmesinde raporlama amaçlı girilen grup kodunu gösterir. |
| 3 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTGRUP2_PKEY` | `STOK_KODU+GRUP_KODU` |
| FOREIGN KEY | `TBLSTGRUP2_FKEY` | `STOK_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTGRUP2_PKEY` | `STOK_KODU+GRUP_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, GRUP_KODU, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLSTGRUP2 WITH (NOLOCK);
```
