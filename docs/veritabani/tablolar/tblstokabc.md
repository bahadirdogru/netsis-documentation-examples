---
title: TBLSTOKABC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokabc/
---

# TBLSTOKABC

> STOK>İŞLEMLER>NETSİS SİPAİRŞ ÖNERİSİ>ABC TANIMLAMA EKRANINA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `ABCKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ABCKODU` | varchar(8) | hayır |  | Maksimum 8 karakterlik girilen önem kodlarını gösterir. |
| 3 | `TUTAR` | TDBFLOAT | evet | `0` | Bir malın hangi önem kodunda olduğunu gösteren tutar bilgisini gösterir. |
| 4 | `KATSAYI` | TDBFLOAT | evet | `0` | Stokların elde ne kadar süreyle bulundurulması gerektiği ve buna göre satıcıya ne kadar sipariş verileceğini gösteren katsayıyı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKABC_PKEY` | `ABCKODU` |
| FOREIGN KEY | `TBLSTOKABC_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKABC_IND_1` | `ISLETME_KODU` | Non-unique, Non-Clustered |
| `TBLSTOKABC_PKEY` | `ABCKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ABCKODU, TUTAR, KATSAYI
FROM dbo.TBLSTOKABC WITH (NOLOCK);
```
