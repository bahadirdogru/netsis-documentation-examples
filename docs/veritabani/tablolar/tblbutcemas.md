---
title: TBLBUTCEMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutcemas/
---

# TBLBUTCEMAS

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `BUTCE_KODU` | varchar(35) | hayır |  | Bütce kodunu tutar |
| 5 | `BUTCE_ISMI` | varchar(100) | hayır |  | Bütçe ismini tutan sahadır |
| 6 | `ACIKLAMA` | text | evet |  | Açıklama alanı |
| 7 | `DURUMU` | TDBBYTE | hayır | `1` |  |
| 8 | `DONEMTIPI` | TDBBYTE | evet | `0` |  |
| 9 | `AJM_JOB_ID` | TDBINTEGER | evet | `0` |  |
| 10 | `RAPOR_DURUMU` | TDBBYTE | evet |  |  |
| 11 | `SON_RAPOR_TARIHI` | datetime | evet |  | En son raporlama tarihini gösterir |
| 12 | `REFERANS_BUTCE_ID` | TDBINTEGER | evet |  |  |
| 13 | `REVIZE_TARIHI` | datetime | evet |  | Revize tarihini gösterir |
| 14 | `DEVIR_BUTCE_ID` | TDBINTEGER | evet |  |  |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEMAS_FKEY_1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBUTCEMAS_FKEY_2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBUTCEMAS_FKEY_3` | `REFERANS_BUTCE_ID` |
| FOREIGN KEY | `TBLBUTCEMAS_FKEY_4` | `DEVIR_BUTCE_ID` |
| PRIMARY KEY | `TBLBUTCEMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEMAS_IND_1` | `ISLETME_KODU, SUBE_KODU, BUTCE_KODU, DURUMU` | nonclustered, unique |
| `TBLBUTCEMAS_IND_2` | `ISLETME_KODU, SUBE_KODU, REFERANS_BUTCE_ID` | nonclustered |
| `TBLBUTCEMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, INCKEYNO, BUTCE_KODU, BUTCE_ISMI, ACIKLAMA
FROM dbo.TBLBUTCEMAS WITH (NOLOCK);
```
