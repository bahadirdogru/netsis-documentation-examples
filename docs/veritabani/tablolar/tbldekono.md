---
title: TBLDEKONO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekono/
---

# TBLDEKONO

> DEKONT SERI NUMARASI DUZENLEME EKRANINDAN GIRILEN KAYITLARI TUTAN TABLODUR.

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 3
- **Birincil anahtar:** `SUBE_KODU, SERI_NO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI_NO` | varchar(2) | hayır |  | Dekont seri kodunu tutar. |
| 3 | `DEKONT_NO` | TDBINTEGER | hayır |  | Son kalınan dekont numarasını tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDEKONO_FK` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDEKONO_FK1` | `SERI_NO` |
| PRIMARY KEY | `TBLDEKONO_PK` | `SUBE_KODU, SERI_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKONO_PK` | `SUBE_KODU, SERI_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI_NO, DEKONT_NO
FROM dbo.TBLDEKONO WITH (NOLOCK);
```
