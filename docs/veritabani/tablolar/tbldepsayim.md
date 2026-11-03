---
title: TBLDEPSAYIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldepsayim/
---

# TBLDEPSAYIM

> DİNAMİK DEPO SAYIM KAYITLARINI TUTAR

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEY` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi şubeye ait olduğunu gösterir. |
| 2 | `HUCREKODU` | varchar(15) | hayır |  | Sayım yapılacak hücre kodu |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Sayım yapılacak stok kodu |
| 4 | `TARIH` | TDBDATETIME | evet |  | Sayım tarihi |
| 5 | `NETMIKTAR` | TDBFLOAT | evet | `0` | Sayımda girilecek net miktar |
| 6 | `BRUTMIKTAR` | TDBFLOAT | evet | `0` | Sayımda girilecek brut miktar |
| 7 | `SERI_NO` | varchar(50) | evet |  | Stok kodu seri ile ise sayım seri bilgileri bu sahada tutulur |
| 8 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPSAYIM_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLDEPSAYIM_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLDEPSAYIM_FKEY1` | `HUCREKODU` |
| FOREIGN KEY | `TBLDEPSAYIM_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPSAYIM_PKEY` | `INCKEYNO` | Unique ,Primary Key |
| `TBLDEPSAYIMIND1` | `TARIH, STOK_KODU` | Duplicate |
| `TBLDEPSAYIMIND2` | `STOK_KODU` | Duplicate |
| `TBLDEPSAYIMIND3` | `HUCREKODU` | Duplicate |
| `TBLDEPSAYIMIND4` | `SERI_NO` | Duplicate |
| `TBLDEPSAYIMIND5` | `SUBE_KODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, HUCREKODU, STOK_KODU, TARIH, NETMIKTAR, BRUTMIKTAR
FROM dbo.TBLDEPSAYIM WITH (NOLOCK);
```
