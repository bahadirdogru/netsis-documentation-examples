---
title: TBLFORECAST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblforecast/
---

# TBLFORECAST

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu tutar. |
| 3 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodunu tutar. |
| 4 | `PERIYOT_NO` | TDBINTEGER | evet |  | Periyod numarasıdır. |
| 5 | `MIKTAR` | TDBFLOAT | evet |  | Miktar alanını tutar. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `YILKODU` | TDBINTEGER | evet |  | Yıl kodu sahasıdır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLFORECAST_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLFORECAST_FKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLFORECAST_FKEY3` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLFORECAST_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFORECAST_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, YILKODU` | nonclustered |
| `TBLFORECAST_IND_1` | `ISLETME_KODU, STOK_KODU, YAPKOD, YILKODU, PERIYOT_NO` | nonclustered |
| `TBLFORECAST_IND_2` | `STOK_KODU, YAPKOD, PERIYOT_NO` | nonclustered |
| `TBLFORECAST_IND_3` | `YILKODU` | nonclustered |
| `TBLFORECAST_IND_4` | `YILKODU, STOK_KODU, YAPKOD, PERIYOT_NO` | nonclustered |
| `TBLFORECAST_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, STOK_KODU, YAPKOD, PERIYOT_NO, MIKTAR, INCKEYNO
FROM dbo.TBLFORECAST WITH (NOLOCK);
```
