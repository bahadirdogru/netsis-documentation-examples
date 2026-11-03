---
title: TBLIMZALOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblimzalog/
---

# TBLIMZALOG

> NETSİS DOSYALARI ÜZERİNDE SAĞ CLİCK NETSİS DOSYA İMZALAMA BİLGİLERİNİN LOGLARINI TUTAR.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı numarasını gösterir. |
| 4 | `ZAMAN` | TDBDATETIME | evet | `getdate()` | Zamqnı gösterir. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | Açıklamayı gösterir. |
| 6 | `MODULNO` | TDBINTEGER | evet |  | Modül numarasını gösterir. |
| 7 | `PROGNO` | TDBINTEGER | evet |  | Program numarasını gösterir. |
| 8 | `IMZAVERSION` | TDBBYTE | hayır |  | İmza versiyonunu gösterir. |
| 9 | `IMZA` | image | hayır |  | İmzayı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLIMZALOG` | `INCKEYNO` |
| FOREIGN KEY | `FK_TBLIMZALOG_TBLKULLANP` | `KULLANICI_NO` |
| FOREIGN KEY | `FK_TBLIMZALOG_TBLSUBELER` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLIMZALOG` | `INCKEYNO` | Clustered |
| `TBLIMZALOG_IND1` | `SUBE_KODU+KULLANICI_NO` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, KULLANICI_NO, ZAMAN, ACIKLAMA, MODULNO
FROM dbo.TBLIMZALOG WITH (NOLOCK);
```
