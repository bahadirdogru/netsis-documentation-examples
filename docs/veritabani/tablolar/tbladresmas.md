---
title: TBLADRESMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbladresmas/
---

# TBLADRESMAS

> GEOCODE'LARIN TUTULDUGU TABLO

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `KODTIPI, KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KODTIPI` | TDBSMALLINT | hayır |  | Kod tipinin bilgisini tutar |
| 2 | `KOD` | varchar(50) | hayır |  |  |
| 3 | `YOLID` | bigint | evet |  |  |
| 4 | `KAPIID` | bigint | evet |  |  |
| 5 | `DEXTMINLAT` | float | evet |  | En kucuk enlem |
| 6 | `DEXTMINLONG` | float | evet |  | En kucuk boylam |
| 7 | `DEXTMAXLAT` | float | evet |  | En buyuk enlem |
| 8 | `DEXTMAXLONG` | float | evet |  | En buyuk boylam |
| 9 | `HARITABMP` | image | evet |  | Haritadan goster-sakla dendiginde kayıt atar. |
| 10 | `UYDUBMP` | image | evet |  | Uydudan resim goster-kaydet dendiginde kayıt atar. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLADRESMAS_PKEY` | `KODTIPI, KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLADRESMAS_PKEY` | `KODTIPI, KOD` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KODTIPI, KOD, YOLID, KAPIID, DEXTMINLAT, DEXTMINLONG
FROM dbo.TBLADRESMAS WITH (NOLOCK);
```
