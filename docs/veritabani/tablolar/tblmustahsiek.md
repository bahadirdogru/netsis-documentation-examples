---
title: TBLMUSTAHSIEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmustahsiek/
---

# TBLMUSTAHSIEK

> Açıklama yok.

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `FATIRS_NO` | TDBBELGENO | hayır |  | Müstahsil makbuzu girişi sekmesinde müstahsil makbuz numarasını gösterir. |
| 4 | `KES_INCKEYNO` | TDBINTEGER | hayır |  | Kesinti tutar inckey numarasını tutar |
| 5 | `KESINTI_TUTAR` | TDBFLOAT | evet |  | Kesinti tutar miktarını belirten sahadır. |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUSTAHSIEK_FKEY1` | `SUBE_KODU` |
| PRIMARY KEY | `TBLMUSTAHSIEK_FKEY2` | `KES_INCKEYNO` |
| FOREIGN KEY | `TBLMUSTAHSIEK_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUSTAHSIEK_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, FATIRS_NO, KES_INCKEYNO, KESINTI_TUTAR, C_YEDEK1
FROM dbo.TBLMUSTAHSIEK WITH (NOLOCK);
```
