---
title: TBLHIZMETMALIYETDAGITIMANAHTAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmetmaliyetdagitimanahtar/
---

# TBLHIZMETMALIYETDAGITIMANAHTAR

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `KOD`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KOD` | varchar(50) | hayır |  | Dağıtım anahtar kodunu tutar |
| 3 | `ACIKLAMA` | varchar(100) | evet |  | Tanımlanan fiyat kodunun açıklamasını gösterir. |
| 4 | `KAYNAKKISIT` | text | evet |  | Dağıtmın uygulanacağı ürünlerin belirlendiğı kısıt bilgisi |
| 5 | `HEDEFKISIT` | text | evet |  | Hedef ürünleri belirleyen kısıt bilgisi |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLHIZMETMALIYETDAGITIMANAHTAR_PKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETMALIYETDAGITIMANAHTAR_IND_1` | `INCKEYNO` | nonclustered, unique |
| `TBLHIZMETMALIYETDAGITIMANAHTAR_PKEY` | `KOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KOD, ACIKLAMA, KAYNAKKISIT, HEDEFKISIT, C_YEDEK1
FROM dbo.TBLHIZMETMALIYETDAGITIMANAHTAR WITH (NOLOCK);
```
