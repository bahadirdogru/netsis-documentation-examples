---
title: TBLKAMYONSB
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkamyonsb/
---

# TBLKAMYONSB

> İŞLEMLER>NAKLİYE İŞLEMLERİ>ARAÇ TANIMLARI EKRANINDAKİ KAYITLARI TUTAR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `PLAKA`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `PLAKA` | varchar(15) | hayır |  | Plakayı gösterir. |
| 4 | `ISIM` | varchar(20) | evet |  | Şöför ismini gösterir. |
| 5 | `MODEL` | varchar(20) | evet |  | Kamyon modelini gösterir. |
| 6 | `DARASI` | TDBFLOAT | evet | `0` | Darasını gösterir. |
| 7 | `FIRMA_KODU` | varchar(15) | evet |  | Cari kodunu gösterir. |
| 8 | `FIRMA_ISMI` | varchar(50) | evet |  | Cari ismini gösterir. |
| 9 | `EHL_NO` | varchar(10) | evet |  | Ehliyet nosunu gösterir. |
| 10 | `EHL_TAR` | TDBDATETIME | evet |  | Ehliyet tarihini gösterir. |
| 11 | `EHL_IL` | varchar(15) | evet |  | Ehliyet ilini gösterir. |
| 12 | `RUH_NO` | varchar(10) | evet |  | Ruhsat numarasını gösterir. |
| 13 | `RUH_TAR` | TDBDATETIME | evet |  | Ruhsat tarihini gösterir. |
| 14 | `TES_EDEN` | varchar(20) | evet |  | Teslim edeni gösterir. |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `ARACKODU` | TDBGRUPKOD | evet |  | Araç kodunu gösterir. |
| 19 | `ARACTIPKOD` | TDBGRUPKOD | evet |  | Araç tipini gösterir. |
| 20 | `ACIKLAMA` | varchar(30) | evet |  | Açıklamayı gösterir. |
| 21 | `BIRIMMALIYET` | TDBFLOAT | evet | `0` | Birim maliyeti gösterir. |
| 22 | `ISTIHABADEDI` | TDBFLOAT | evet | `0` | İstihab haddini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKAMYONSB_PKEY` | `PLAKA` |
| FOREIGN KEY | `TBLKAMYONSB_FKEY` | `CARI_KOD` |
| FOREIGN KEY | `TBLKAMYONSB_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKAMYONSB_FKEY2` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKAMYONSB_IND_1` | `ARACKODU` | Non-unique,Non-clustered |
| `TBLKAMYONSB_IND_2` | `ISLETME_KODU+SUBE_KODU+PLAKA` | Unique,Non-clustered |
| `TBLKAMYONSB_IND_3` | `ISLETME_KODU+SUBE_KODU+ARACKODU` | Non-unique,Non-clustered |
| `TBLKAMYONSB_PKEY` | `PLAKA` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, PLAKA, ISIM, MODEL, DARASI
FROM dbo.TBLKAMYONSB WITH (NOLOCK);
```
