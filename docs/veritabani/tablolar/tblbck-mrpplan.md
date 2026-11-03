---
title: TBLBCK_MRPPLAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mrpplan/
---

# TBLBCK_MRPPLAN

> SAKLANAN URETIM PLANLARI URETIM PLANLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BCKNO` | varchar(8) | hayır |  | Revisyon numarasini tutan sahadır. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 4 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamul kodunu tutan sahadır. |
| 5 | `MIKTAR` | TDBFLOAT | evet | `0` | Planlama miktarının tutuldugu sahadır. |
| 6 | `MUSSIPBAK` | TDBFLOAT | evet | `0` | Planlama yapılacak mamul yada yarımamulun musteri siparis bakiyesidir. |
| 7 | `MINSTOK` | TDBFLOAT | evet | `0` | Planlama yapılacak mamul yada yarımamulun minimum siparis bakiyesidir. |
| 8 | `SIPNO` | TDBBELGENO | evet | `0` | Siparis numarasidir. |
| 9 | `YEDEK` | varchar(11) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `MUSSIPMIK` | TDBFLOAT | evet | `0` | Planlama yapılacak mamul yada yarımamulun musteri siparis miktarıdır. |
| 11 | `SERBESTMIK` | TDBFLOAT | evet | `0` | Serbest miktardır. |
| 12 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodudur. |
| 13 | `MPSFLAG` | char(1) | evet |  |  |
| 14 | `SIPKONT` | TDBSMALLINT | evet | `0` | Siparis sıra numarasıdır. |
| 15 | `PLANLAMA_ONCELIK` | TDBINTEGER | evet |  |  |
| 16 | `BAKIYE_KONTROL` | char(1) | evet |  |  |
| 17 | `FABRIKA_KODU` | varchar(35) | evet |  |  |
| 18 | `KESIN_PLAN` | char(1) | hayır |  |  |
| 19 | `INCKEYNO` | TDBINTEGER | evet |  | Inckeyno bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCK_MRPPLAN_IDX_YAPKOD1` | `YAPKOD, MAMUL_KODU` | Nonclustered |
| `TBLBCK_MRPPLAN_IND_1` | `BCKNO, TARIH, SIPNO, MAMUL_KODU, YAPKOD, SIPKONT` | Nonclustered, unique |
| `TBLBCK_MRPPLAN_IND_2` | `MAMUL_KODU, YAPKOD` | Nonclustered |
| `TBLBCK_MRPPLAN_IND_3` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BCKNO, TARIH, MAMUL_KODU, MIKTAR, MUSSIPBAK
FROM dbo.TBLBCK_MRPPLAN WITH (NOLOCK);
```
