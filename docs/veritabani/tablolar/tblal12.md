---
title: TBLAL12
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblal12/
---

# TBLAL12

> EK ANALIZ HAZIRLIGI 12 AYLIK ALIM TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kod sahasıdır. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu sahasıdır. |
| 5 | `SATMIK_1` | TDBFLOAT | evet | `0` | 1. ay alis miktardıdır. |
| 6 | `SATMIK_2` | TDBFLOAT | evet | `0` | 2. ay alis miktardıdır. |
| 7 | `SATMIK_3` | TDBFLOAT | evet | `0` | 3. ay alis miktardıdır. |
| 8 | `SATMIK_4` | TDBFLOAT | evet | `0` | 4. ay alis miktardıdır. |
| 9 | `SATMIK_5` | TDBFLOAT | evet | `0` | 5. ay alis miktardıdır. |
| 10 | `SATMIK_6` | TDBFLOAT | evet | `0` | 6. ay alis miktardıdır. |
| 11 | `SATMIK_7` | TDBFLOAT | evet | `0` | 7. ay alis miktardıdır. |
| 12 | `SATMIK_8` | TDBFLOAT | evet | `0` | 8. ay alis miktardıdır. |
| 13 | `SATMIK_9` | TDBFLOAT | evet | `0` | 9. ay alis miktardıdır. |
| 14 | `SATMIK_10` | TDBFLOAT | evet | `0` | 10. ay alis miktardıdır. |
| 15 | `SATMIK_11` | TDBFLOAT | evet | `0` | 11. ay alis miktardıdır. |
| 16 | `SATMIK_12` | TDBFLOAT | evet | `0` | 12. ay alis miktardıdır. |
| 17 | `NETSATT_1` | TDBFLOAT | evet | `0` | 1. aya ait net alış tutarıdır. |
| 18 | `NETSATT_2` | TDBFLOAT | evet | `0` | 2. aya ait net alış tutarıdır. |
| 19 | `NETSATT_3` | TDBFLOAT | evet | `0` | 3. aya ait net alış tutarıdır. |
| 20 | `NETSATT_4` | TDBFLOAT | evet | `0` | 4. aya ait net alış tutarıdır. |
| 21 | `NETSATT_5` | TDBFLOAT | evet | `0` | 5. aya ait net alış tutarıdır. |
| 22 | `NETSATT_6` | TDBFLOAT | evet | `0` | 6. aya ait net alış tutarıdır. |
| 23 | `NETSATT_7` | TDBFLOAT | evet | `0` | 7. aya ait net alış tutarıdır. |
| 24 | `NETSATT_8` | TDBFLOAT | evet | `0` | 8. aya ait net alış tutarıdır. |
| 25 | `NETSATT_9` | TDBFLOAT | evet | `0` | 9. aya ait net alış tutarıdır. |
| 26 | `NETSATT_10` | TDBFLOAT | evet | `0` | 10. aya ait net alış tutarıdır. |
| 27 | `NETSATT_11` | TDBFLOAT | evet | `0` | 11. aya ait net alış tutarıdır. |
| 28 | `NETSATT_12` | TDBFLOAT | evet | `0` | 12. aya ait net alış tutarıdır. |
| 29 | `T_MIKTAR` | TDBFLOAT | evet | `0` | Toplam miktar sahasıdır. |
| 30 | `T_NET` | TDBFLOAT | evet | `0` | Toplam net tutar sahasıdır. |
| 31 | `DUMY` | char(1) | evet |  | Default 1 değeri atılır. |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLAL12_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLAL12_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `AL12_IND` | `ISLETME_KODU, SUBE_KODU, CARI_KOD, STOK_KODU, YAPKOD` | Unique,Non-clustered |
| `TBLAL12_IND_2` | `ISLETME_KODU, SUBE_KODU, STOK_KODU, YAPKOD, CARI_KOD` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, CARI_KOD, STOK_KODU, SATMIK_1, SATMIK_2
FROM dbo.TBLAL12 WITH (NOLOCK);
```
