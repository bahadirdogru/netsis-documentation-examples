---
title: TBLSATCIRO (Satıcı Ciro Analizi)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsatciro-satici-ciro-analizi/
---

# TBLSATCIRO (Satıcı Ciro Analizi)

> EK ANALİZ HAZIRLIĞI SATICI CİRO ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `ISLETME_KODU+SUBE_KODU+CARI_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Belgelerde girilen cari kodu gösterir. |
| 4 | `BRUT_SATIS` | TDBFLOAT | evet | `0` | Her bir satıcı bazındaki brüt alış tutarını gösterir. |
| 5 | `NET_SATIS` | TDBFLOAT | evet | `0` | Her bir satıcı bazındaki net alış tutarını gösterir. |
| 6 | `IADE` | TDBFLOAT | evet | `0` | Her bir satıcı bazındaki iade alış tutarını gösterir. |
| 7 | `DUMY` | char(1) | evet |  | Default 1 değeri atılır. |
| 8 | `AY_1` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 1. aylık alış tutarını gösterir. |
| 9 | `AY_2` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 2. aylık alış tutarını gösterir. |
| 10 | `AY_3` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 3. aylık alış tutarını gösterir. |
| 11 | `AY_4` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 4. aylık alış tutarını gösterir. |
| 12 | `AY_5` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 5. aylık alış tutarını gösterir. |
| 13 | `AY_6` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 6. aylık alış tutarını gösterir. |
| 14 | `AY_7` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 7. aylık alış tutarını gösterir. |
| 15 | `AY_8` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 8. aylık alış tutarını gösterir. |
| 16 | `AY_9` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 9. aylık alış tutarını gösterir. |
| 17 | `AY_10` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 10. aylık alış tutarını gösterir. |
| 18 | `AY_11` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 12. aylık alış tutarını gösterir. |
| 19 | `AY_12` | TDBFLOAT | evet | `0` | Her bir satıcı bazında 12. aylık alış tutarını gösterir. |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSATCIRO_PKEY` | `ISLETME_KODU+SUBE_KODU+CARI_KOD` |
| FOREIGN KEY | `TBLSATCIRO_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSATCIRO_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSATCIRO_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLSATCIRO_PKEY` | `ISLETME_KODU+SUBE_KODU+CARI_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, CARI_KOD, BRUT_SATIS, NET_SATIS, IADE
FROM dbo.TBLSATCIRO (Satıcı Ciro Analizi) WITH (NOLOCK);
```
