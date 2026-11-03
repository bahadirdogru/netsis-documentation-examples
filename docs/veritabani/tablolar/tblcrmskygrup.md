---
title: TBLCRMSKYGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskygrup/
---

# TBLCRMSKYGRUP

> SIKAYET GRUP TANIMLAMALARINI TUTAR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GRUP_KOD` | TDBSTOKKOD | hayır |  | Grup kodunu tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ACIKLAMA` | varchar(100) | evet |  | Acıklama alanını tutar. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYGRUP_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMSKYGRUP_FKEY2` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLCRMSKYGRUP_PKEY` | `GRUP_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYGRUP_IND_1` | `ISLETME_KODU, SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMSKYGRUP_PKEY` | `GRUP_KOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 GRUP_KOD, SUBE_KODU, ISLETME_KODU, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLCRMSKYGRUP WITH (NOLOCK);
```
