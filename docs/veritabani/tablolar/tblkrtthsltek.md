---
title: TBLKRTTHSLTEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtthsltek/
---

# TBLKRTTHSLTEK

> Açıklama yok.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KRTTHSLTINCKEYNO` | TDBINTEGER | hayır |  | Kart tahsilat inckey numarası |
| 4 | `BNKHESTRAINCKEYNO` | TDBINTEGER | hayır |  | Banka haraket inckey numarası |
| 5 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKRTTHSLTEK_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKRTTHSLTEK_FKEY2` | `KRTTHSLTINCKEYNO` |
| PRIMARY KEY | `TBLKRTTHSLTEK_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKRTTHSLTEK_IND_1` | `KRTTHSLTINCKEYNO, BNKHESTRAINCKEYNO` | nonclustered, unique |
| `TBLKRTTHSLTEK_PKEY` | `INCKEYNO` | clustered, uniqu |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, KRTTHSLTINCKEYNO, BNKHESTRAINCKEYNO, YEDEK1, YEDEK2
FROM dbo.TBLKRTTHSLTEK WITH (NOLOCK);
```
