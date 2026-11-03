---
title: TBLDEKOMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekomas/
---

# TBLDEKOMAS

> Açıklama yok.

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SERI_NO` | varchar(2) | hayır |  | Seri numaralarını göstrir. |
| 4 | `DEKONT_NO` | TDBINTEGER | hayır |  | Dekont numarasını tutan sahadır. |
| 5 | `MUH` | TDBBYTE | evet | `0` | Muhasebelşmiş belge olup olmamagını gösterir |
| 6 | `DEGISTI` | TDBBYTE | evet | `0` | Değişiklik yapılıp yapılmadığını gösterir |
| 7 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDEKOMAS_FK` | `SUBE_KODU` |
| PRIMARY KEY | `TBLDEKOMAS_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKOMAS_IND_1` | `SUBE_KODU, SERI_NO, DEKONT_NO` | nonclustered, unique |
| `TBLDEKOMAS_PK` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, SERI_NO, DEKONT_NO, MUH, DEGISTI
FROM dbo.TBLDEKOMAS WITH (NOLOCK);
```
