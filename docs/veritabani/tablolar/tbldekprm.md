---
title: TBLDEKPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekprm/
---

# TBLDEKPRM

> GENEL DEKONT KAYDI İÇİNDE TANIMLANAN STOPAJ GİRİŞİ BİLGİLERİ

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi işletmeye ait olduğunu gösterir. |
| 2 | `ST_KOD` | TDBSTOKKOD | evet |  | Stopaj Kodunu gösterir. |
| 3 | `ST_OR` | TDBFLOAT | evet |  | Stopaj Oranını gösterir. |
| 4 | `SF_KOD` | varchar(35) | evet |  | SSDF Kodunu gösterir. |
| 5 | `SF_OR` | TDBFLOAT | evet |  | SSDF Oranının gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEKPRM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDEKPRM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKPRM_PKEY` | `ISLETME_KODU` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ST_KOD, ST_OR, SF_KOD, SF_OR, KAYITYAPANKUL
FROM dbo.TBLDEKPRM WITH (NOLOCK);
```
