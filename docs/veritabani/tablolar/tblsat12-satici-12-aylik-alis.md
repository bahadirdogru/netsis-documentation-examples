---
title: TBLSAT12 (Satıcı 12 Aylık Alış)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsat12-satici-12-aylik-alis/
---

# TBLSAT12 (Satıcı 12 Aylık Alış)

> EK ANALİZ HAZIRLIĞI SATICI 12 AYLIK ALIŞ ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 40
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Belgelerde girilen cari kodu gösterir. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Belgelerde girilen stok kodu göterir. |
| 5 | `SATMIK_1` | TDBFLOAT | evet | `0` | 1. aya ait satış miktarını gösterir. |
| 6 | `SATMIK_2` | TDBFLOAT | evet | `0` | 2. aya ait satış miktarını gösterir. |
| 7 | `SATMIK_3` | TDBFLOAT | evet | `0` | 3. aya ait satış miktarını gösterir. |
| 8 | `SATMIK_4` | TDBFLOAT | evet | `0` | 4. aya ait satış miktarını gösterir. |
| 9 | `SATMIK_5` | TDBFLOAT | evet | `0` | 5. aya ait satış miktarını gösterir. |
| 10 | `SATMIK_6` | TDBFLOAT | evet | `0` | 6. aya ait satış miktarını gösterir. |
| 11 | `SATMIK_7` | TDBFLOAT | evet | `0` | 7. aya ait satış miktarını gösterir. |
| 12 | `SATMIK_8` | TDBFLOAT | evet | `0` | 8. aya ait satış miktarını gösterir. |
| 13 | `SATMIK_9` | TDBFLOAT | evet | `0` | 9. aya ait satış miktarını gösterir. |
| 14 | `SATMIK_10` | TDBFLOAT | evet | `0` | 10. aya ait satış miktarını gösterir. |
| 15 | `SATMIK_11` | TDBFLOAT | evet | `0` | 11. aya ait satış miktarını gösterir. |
| 16 | `SATMIK_12` | TDBFLOAT | evet | `0` | 12. aya ait satış miktarını gösterir. |
| 17 | `NETSATT_1` | TDBFLOAT | evet | `0` | 1. aya ait net satış tutarını gösterir. |
| 18 | `NETSATT_2` | TDBFLOAT | evet | `0` | 2. aya ait net satış tutarını gösterir. |
| 19 | `NETSATT_3` | TDBFLOAT | evet | `0` | 3. aya ait net satış tutarını gösterir. |
| 20 | `NETSATT_4` | TDBFLOAT | evet | `0` | 4. aya ait net satış tutarını gösterir. |
| 21 | `NETSATT_5` | TDBFLOAT | evet | `0` | 5. aya ait net satış tutarını gösterir. |
| 22 | `NETSATT_6` | TDBFLOAT | evet | `0` | 6. aya ait net satış tutarını gösterir. |
| 23 | `NETSATT_7` | TDBFLOAT | evet | `0` | 7. aya ait net satış tutarını gösterir. |
| 24 | `NETSATT_8` | TDBFLOAT | evet | `0` | 8. aya ait net satış tutarını gösterir. |
| 25 | `NETSATT_9` | TDBFLOAT | evet | `0` | 9. aya ait net satış tutarını gösterir. |
| 26 | `NETSATT_10` | TDBFLOAT | evet | `0` | 10. aya ait net satış tutarını gösterir. |
| 27 | `NETSATT_11` | TDBFLOAT | evet | `0` | 11. aya ait net satış tutarını gösterir. |
| 28 | `NETSATT_12` | TDBFLOAT | evet | `0` | 12. aya ait net satış tutarını gösterir. |
| 29 | `T_MIKTAR` | TDBFLOAT | evet | `0` | İlgili carinin ilgili stoktan aldığı sattığı yıllık toplam stok miktarı gösterir. |
| 30 | `T_NET` | TDBFLOAT | evet | `0` | İlgili carinin ilgili stoktan aldığı sattığı yıllık toplam tutarı gösterir. |
| 31 | `DUMY` | char(1) | evet |  | Default 1 değeri atılır. |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YAPKOD` | varchar(15) | evet | `(NULL)` | Stokların varsa esnek yapılandırma kodlarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSAT12_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSAT12_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSAT12_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique,Non-clustered |
| `TBLSAT12_IND_2` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+YAPKOD+CARI_KOD` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, CARI_KOD, STOK_KODU, SATMIK_1, SATMIK_2
FROM dbo.TBLSAT12 (Satıcı 12 Aylık Alış) WITH (NOLOCK);
```
