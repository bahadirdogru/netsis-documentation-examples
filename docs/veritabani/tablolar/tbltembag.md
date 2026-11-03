---
title: TBLTEMBAG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltembag/
---

# TBLTEMBAG

> KAYIT>MÜSTAHSİL MAKBUZ GİRİŞİNDE GİRİLEN CARİ KOD İLE BİLGİLER İÇİN GEÇİCİ TABLODUR

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ADSOY` | varchar(50) | evet |  | Müstahsil makbuzunda girilen cari kodu gösterir. |
| 3 | `VERGID` | varchar(50) | evet |  | Müstahsil makbuzunda girilen cari kodunun vergi dairesini gösterir. |
| 4 | `VERGIS` | varchar(50) | evet |  |  |
| 5 | `ADRES` | varchar(50) | evet |  | Müstahsil makbuzunda girilen cari kodunadresini gösterir. |
| 6 | `DONEM` | varchar(50) | evet |  | Dönem bilgisini gösterir. |
| 7 | `YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTEMPBAG_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLTEMPBAG_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTEMPBAG_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ADSOY, VERGID, VERGIS, ADRES, DONEM
FROM dbo.TBLTEMBAG WITH (NOLOCK);
```
