---
title: TBLPAKETMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpaketmas/
---

# TBLPAKETMAS

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `PAKET_KODU`
- **Not:** Bu tablo şema dokümanında ikinci kez, [DIŞ TİCARET modülünde](/veritabani/tablolar/tblpaketmas-2/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PAKET_KODU` | varchar(10) | hayır |  |  |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 3 | `BOS_AGIRLIK` | TDBFLOAT | evet |  |  |
| 4 | `GRUP` | varchar(10) | evet |  | Grubu gösterir |
| 5 | `MAX_AD` | TDBFLOAT | evet |  |  |
| 6 | `MAX_KG` | TDBFLOAT | evet |  |  |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPAKETMAS_PKEY` | `PAKET_KODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPAKETMAS_PKEY` | `PAKET_KODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PAKET_KODU, ACIKLAMA, BOS_AGIRLIK, GRUP, MAX_AD, MAX_KG
FROM dbo.TBLPAKETMAS WITH (NOLOCK);
```
