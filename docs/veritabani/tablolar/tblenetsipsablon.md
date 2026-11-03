---
title: TBLENETSIPSABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblenetsipsablon/
---

# TBLENETSIPSABLON

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SIRA`
- **Identity:** `SIRA` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SIRA` | TDBINTEGER | hayır |  | Sıra numarasını gösterir |
| 3 | `ADI` | varchar(50) | evet |  | Adını gösterir |
| 4 | `SABLON` | image | evet |  | Oluşturulan şablonu gösterir |
| 5 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `IYEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `IYEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `FYEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `FYEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `DYEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `DYEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `SYEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `SYEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLENETSIPSABLON_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLENETSIPSABLON_PKEY` | `SIRA` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLENETSIPSABLON_PKEY` | `SIRA` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SIRA, ADI, SABLON, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLENETSIPSABLON WITH (NOLOCK);
```
