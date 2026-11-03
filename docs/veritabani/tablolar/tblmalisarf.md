---
title: TBLMALISARF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmalisarf/
---

# TBLMALISARF

> HAMMADDE SARF KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `MAMKOD, HAMKOD, TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `HAMKOD` | TDBSTOKKOD | hayır |  | Hammadde stok kodu sahasıdır. |
| 3 | `MAMKOD` | TDBSTOKKOD | hayır |  | Maliyet grup kodu sahasıdır. |
| 4 | `TARIH` | TDBDATETIME | hayır |  | Tarih sahasıdır. |
| 5 | `SARFMIK` | TDBFLOAT | evet | `0` | Sarf miktarını tutan sahadır. |
| 6 | `SARFTUT` | TDBFLOAT | evet | `0` | Sarf tutarı sahasıdır. |
| 7 | `HAMADI` | varchar(30) | evet |  | Hammadde adını tutan sahasıdır. |
| 8 | `CIKIS` | char(1) | evet |  |  |
| 9 | `YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK9` | char(1) | evet |  | Ana grup bazında yapılan sarflar mamullere yedirilsin” parametresi işaretli ise ve MALISARF tablosundaki ilgili kayıt, mamul ana grubu bazında yapılan bir sarf olduğunda bu sahaya ‘E’ değeri atılıyor |
| 18 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK11` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK12` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `CURSARFTUT` | TDBFLOAT | evet | `0` | Dovizli sarf tutarı sahasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALISARF_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMALISARFPKEY` | `MAMKOD, HAMKOD, TARIH` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALISARF_IND_1` | `MAMKOD, HAMKOD, TARIH` | Nonclustered, unique |
| `TBLMALISARF_IND_2` | `HAMKOD, MAMKOD, TARIH` | Nonclustered, unique |
| `TBLMALISARF_IND_3` | `TARIH, HAMKOD, MAMKOD` | Nonclustered, unique |
| `TBLMALISARF_IND_4` | `ISLETME_KODU` | Nonclustered |
| `TBLMALISARFPKEY` | `MAMKOD, HAMKOD, TARIH` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, HAMKOD, MAMKOD, TARIH, SARFMIK, SARFTUT
FROM dbo.TBLMALISARF WITH (NOLOCK);
```
