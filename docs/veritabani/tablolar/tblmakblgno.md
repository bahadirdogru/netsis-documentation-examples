---
title: TBLMAKBLGNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmakblgno/
---

# TBLMAKBLGNO

> NUMARA DUZENLEME EKRANINDAN GIRILEN BELGELERIN BASLAYACAGI NUMARALARI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 16

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  |  |
| 3 | `TIP` | char(1) | hayır |  | Belge tipini tutan sahadır. |
| 4 | `NUMARA` | TDBBELGENO | evet | `0` | Belgenin baslayacagı numarayı tutan sahadır. |
| 5 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `CYEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `CYEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAKBLGNO_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKBLGNO_IND_1` | `SUBE_KODU, SERI, TIP` | Nonclustered, unique |
| `TBLMAKBLGNO_IND_2` | `TIP` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI, TIP, NUMARA, CYEDEK1, CYEDEK2
FROM dbo.TBLMAKBLGNO WITH (NOLOCK);
```
