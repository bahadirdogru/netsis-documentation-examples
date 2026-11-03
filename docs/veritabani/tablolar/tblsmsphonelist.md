---
title: TBLSMSPHONELIST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsmsphonelist/
---

# TBLSMSPHONELIST

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `TITLE` | varchar(50) | hayır |  | Gerçekleşen işlemin bölüm başlığıdır |
| 4 | `EXPLANATION` | varchar(250) | evet |  | Açıklamayı gösterir. |
| 5 | `DATA` | xml | hayır |  |  |
| 6 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `FK_TBLSMSPHONELIST_TBLSUBELER` | `SUBE_KODU` |
| PRIMARY KEY | `PK_TBLSMSPHONELIST` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `INX_TITLE` | `TITLE` | nonclustered, unique |
| `PK_TBLSMSPHONELIST` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, TITLE, EXPLANATION, DATA, KAYITYAPANKUL
FROM dbo.TBLSMSPHONELIST WITH (NOLOCK);
```
