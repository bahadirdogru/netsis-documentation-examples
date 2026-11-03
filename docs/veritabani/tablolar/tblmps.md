---
title: TBLMPS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmps/
---

# TBLMPS

> AUP TAHMIN MIKTARLARI KAYITLARINI PERIYODLAR BAZINDA TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu sahasıdır. |
| 3 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodu sahasıdır. |
| 4 | `MPS_PERIYOT_NO` | TDBINTEGER | evet |  | AUP periyod numarasıdır. |
| 5 | `FORECAST_MIKTAR` | TDBFLOAT | evet |  | Tahmin miktarıdır. |
| 6 | `FORECAST_DZLT_MIKTAR` | TDBFLOAT | evet |  | Tahmin duzeltme miktarıdır. |
| 7 | `SIPARIS_MIKTAR` | TDBFLOAT | evet |  | Toplam siparis miktarıdır. |
| 8 | `MIN_STOK` | TDBFLOAT | evet |  | Minimum stok miktarıdır. |
| 9 | `MAX_STOK` | TDBFLOAT | evet |  | Maksimum stok miktarıdır. |
| 10 | `LOT_SIZE` | TDBFLOAT | evet |  | Parti buyuklugudur. |
| 11 | `MPS_MIKTAR` | TDBFLOAT | evet |  | AUP miktarıdır. |
| 12 | `PERSONSTOKBAKIYE` | TDBFLOAT | evet |  | Periyot sonu stok bakiyesidir. |
| 13 | `ATP` | TDBFLOAT | evet |  | Düzeltilmiş Tahmin miktarı ile önceki dönem stok bakiye miktarı toplamından ilgili dönemin sipariş toplamı çıkarıldıktan sonra bulunan satılabilir stok miktarıdır. |
| 14 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `YILKODU` | TDBINTEGER | evet |  | Yıl kodudur. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMPS_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLMPS_FKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLMPS_FKEY3` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMPS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMPS_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, YILKODU` | Nonclustered |
| `TBLMPS_IND_1` | `ISLETME_KODU, STOK_KODU, YAPKOD, YILKODU, MPS_PERIYOT_NO` | Nonclustered, unique |
| `TBLMPS_IND_2` | `STOK_KODU, YAPKOD, MPS_PERIYOT_NO` | Nonclustered |
| `TBLMPS_IND_3` | `YILKODU` | Nonclustered |
| `TBLMPS_IND_4` | `YILKODU, STOK_KODU, YAPKOD, MPS_PERIYOT_NO` | Nonclustered |
| `TBLMPS_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, STOK_KODU, YAPKOD, MPS_PERIYOT_NO, FORECAST_MIKTAR, FORECAST_DZLT_MIKTAR
FROM dbo.TBLMPS WITH (NOLOCK);
```
