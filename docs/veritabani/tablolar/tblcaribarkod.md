---
title: TBLCARIBARKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcaribarkod/
---

# TBLCARIBARKOD

> CARI BARKOD KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 13
- **Birincil anahtar:** `CARI_KOD, BARKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 2 | `BARKOD` | TDBCARIKOD | hayır |  | Cari koda ait barkodu tutar. |
| 3 | `BARTIP` | char(1) | evet |  | Barkod tipini tutar. |
| 4 | `BARTARIH` | TDBDATETIME | evet |  | Barkod kayıt tarihini tutar. |
| 5 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIBARKOD_FKEY` | `CARI_KOD` |
| PRIMARY KEY | `TBLCARIBARKOD_PKEY` | `CARI_KOD, BARKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIBARKOD_IND_2` | `BARKOD` | Nonclustered, unique |
| `TBLCARIBARKOD_PKEY` | `CARI_KOD, BARKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, BARKOD, BARTIP, BARTARIH, S_YEDEK1, S_YEDEK2
FROM dbo.TBLCARIBARKOD WITH (NOLOCK);
```
