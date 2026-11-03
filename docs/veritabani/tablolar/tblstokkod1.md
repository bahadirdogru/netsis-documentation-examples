---
title: TBLSTOKKOD1
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokkod1/
---

# TBLSTOKKOD1

> STOK KARTI KAYITLARINDA STOK KARTI2 SEKMESİNDEKİ STOK KOD1 BİLGİLERİNİ TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır | `-1` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `GRUP_KOD` | TDBGRUPKOD | hayır |  | Stok kartındaki stok kartı2 sekmesinde, rapor amaçlı stok işlemleri için kod1 sahasına girilen değeri gösterir.(stok kod tanımları > kod1 tanımlama ekranından tanımlanır) |
| 4 | `GRUP_ISIM` | varchar(30) | evet |  | Tanımlanan kod1' in açıklamasını gösterir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKKOD1_PKEY` | `GRUP_KOD` |
| FOREIGN KEY | `TBLSTOKKOD1_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSTOKKOD1_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKKOD1_IND_1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLSTOKKOD1_IND_ADI` | `ISLETME_KODU+SUBE_KODU+GRUP_ISMI` | Non-unique, Non-clustered |
| `TBLSTOKKOD1_PKEY` | `GRUP_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, GRUP_KOD, GRUP_ISIM, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLSTOKKOD1 WITH (NOLOCK);
```
