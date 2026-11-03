---
title: TBLMAL12DUMY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmal12dumy/
---

# TBLMAL12DUMY

> MALI12 DOSYASI ILE ILISKILI GENEL TOPLAMLAR TABLOSUDUR.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `ISLETME_KODU, DUMY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DUMY` | char(1) | hayır |  | TBLMAL12 tablosundaki dumy kolonunu gösterir. Default 1 değeri atılır. |
| 3 | `TOPGIRMIK` | TDBFLOAT | evet | `0` | Toplam giris miktardır. |
| 4 | `TOPGIRNET` | TDBFLOAT | evet | `0` | Toplam net giris tutarıdır. |
| 5 | `TOPCIKMIK` | TDBFLOAT | evet | `0` | Toplam çıkış miktardır. |
| 6 | `TOPCIKNET` | TDBFLOAT | evet | `0` | Toplam net çıkış tutarıdır. |
| 7 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAL12DUMY_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMAL12DUMY_PKEY` | `ISLETME_KODU, DUMY` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAL12DUMY_PKEY` | `ISLETME_KODU, DUMY` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DUMY, TOPGIRMIK, TOPGIRNET, TOPCIKMIK, TOPCIKNET
FROM dbo.TBLMAL12DUMY WITH (NOLOCK);
```
