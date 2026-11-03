---
title: TBLCARIALTKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarialtkod/
---

# TBLCARIALTKOD

> CARI ALT KOD TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `CARI_KOD, CALTKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. (Ana cari) |
| 2 | `TIP` | TDBBYTE | evet |  | Tip bilgisini tutar. |
| 3 | `CALTKOD` | TDBCARIKOD | hayır |  | Tanımlanan cari alt kodunu tutar. |
| 4 | `KULLANIMYERI` | char(1) | evet |  | Kullanım yeri Fat./İrs./Sip. İse F; Senet/Cek/Kasa/Dekont ise C degerini tutar. |
| 5 | `STATUS` | char(1) | evet |  | Durum bilgisini tutar. |
| 6 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `B_YEDEK8` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK9` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK10` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLCARIALTKOD_PKEY` | `CARI_KOD, CALTKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIALTKOD_IND_1` | `CARI_KOD, TIP, CALTKOD` | Nonclustered, unique |
| `TBLCARIALTKOD_IND_2` | `CALTKOD` | Nonclustered, unique |
| `TBLCARIALTKOD_PKEY` | `CARI_KOD, CALTKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, TIP, CALTKOD, KULLANIMYERI, STATUS, S_YEDEK1
FROM dbo.TBLCARIALTKOD WITH (NOLOCK);
```
