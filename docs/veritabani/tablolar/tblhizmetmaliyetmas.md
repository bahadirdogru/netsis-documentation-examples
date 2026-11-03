---
title: TBLHIZMETMALIYETMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmetmaliyetmas/
---

# TBLHIZMETMALIYETMAS

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PRIMKODU` | varchar(50) | evet |  | Pirim kodunun tutulduğu alan |
| 3 | `CARIKODU` | TDBCARIKOD | evet |  | Cari kodunu tutar. |
| 4 | `BASTARIH` | TDBDATETIME | evet |  | Başlama tarihini gösterir |
| 5 | `BITTARIH` | TDBDATETIME | evet |  | Bitiş tarihini gösterir |
| 6 | `KAYNAKFATURA` | TDBBELGENO | hayır |  | Kaynak fatura belge numarasını tutar |
| 7 | `KAYNAKFATURATIPI` | char(1) | hayır |  | Kaynak fatura tipini tutan sahadır |
| 8 | `TUTAR` | TDBFLOAT | hayır |  | Bir malın hangi önem kodunda olduğunu gösteren tutar bilgisini gösterir. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETMALIYETMAS_FKEY1` | `PRIMKODU` |
| FOREIGN KEY | `TBLHIZMETMALIYETMAS_FKEY2` | `CARIKODU` |
| PRIMARY KEY | `TBLHIZMETMALIYETMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETMALIYETMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, PRIMKODU, CARIKODU, BASTARIH, BITTARIH, KAYNAKFATURA
FROM dbo.TBLHIZMETMALIYETMAS WITH (NOLOCK);
```
