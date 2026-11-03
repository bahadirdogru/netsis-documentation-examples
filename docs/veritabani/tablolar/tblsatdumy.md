---
title: TBLSATDUMY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsatdumy/
---

# TBLSATDUMY

> SATCIRO İLE TOPLAMLARIN TUTULDUĞU TABLODUR. Dumy kolonuyla SATCIRO tablosuna join olur.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 11
- **Birincil anahtar:** `ISLETME_KODU+DUMY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUMY` | char(1) | hayır |  | SATCIRO tablosundaki dumy kolonunu gösterir. Default 1 değeri atılır. |
| 3 | `TOPLAM_BRUT` | TDBFLOAT | evet | `0` | Tüm satıcılardan yıllık toplam brüt alış tutarını gösterir. |
| 4 | `TOPLAM_NET` | TDBFLOAT | evet | `0` | Tümsatıcılardan yıllık toplam net alış tutarını gösterir. |
| 5 | `TOPLAM_IADE` | TDBFLOAT | evet | `0` | Tüm satıcılardan yıllık toplam iade alış tutarını gösterir. |
| 6 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSATDUMYPKEY` | `ISLETME_KODU+DUMY` |
| FOREIGN KEY | `TBLSATDUMY_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSATDUMY_IND_2` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLSATDUMYPKEY` | `ISLETME_KODU+DUMY` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUMY, TOPLAM_BRUT, TOPLAM_NET, TOPLAM_IADE, F_YEDEK1
FROM dbo.TBLSATDUMY WITH (NOLOCK);
```
