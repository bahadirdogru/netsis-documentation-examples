---
title: TBLSIP12TOP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsip12top/
---

# TBLSIP12TOP

> Açıklama yok.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 15

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Mamul,yarımamul,hammadde stok kodu bilgisi tutulur |
| 3 | `MIKTAR_1` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 4 | `MIKTAR_2` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 5 | `MIKTAR_3` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 6 | `MIKTAR_4` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 7 | `MIKTAR_5` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 8 | `MIKTAR_6` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 9 | `MIKTAR_7` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 10 | `MIKTAR_8` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 11 | `MIKTAR_9` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 12 | `MIKTAR_10` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 13 | `MIKTAR_11` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 14 | `MIKTAR_12` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 15 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa esnek yapılandırma kodlarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSIP12TOP_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSIP12TOP_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIP12TOP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU` | nonclustered |
| `TBLSIP12TOPPKEYIDX` | `SUBE_KODU, STOK_KODU, YAPKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOK_KODU, MIKTAR_1, MIKTAR_2, MIKTAR_3, MIKTAR_4
FROM dbo.TBLSIP12TOP WITH (NOLOCK);
```
