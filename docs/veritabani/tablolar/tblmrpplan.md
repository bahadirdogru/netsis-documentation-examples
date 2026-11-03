---
title: TBLMRPPLAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpplan/
---

# TBLMRPPLAN

> GEREKSINIM PLANLAMA OLUSTURMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 22

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 3 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamul kodunu tutan sahadır. |
| 4 | `MIKTAR` | TDBFLOAT | evet |  | Planlama miktarının tutuldugu sahadır. |
| 5 | `MUSSIPBAK` | TDBFLOAT | evet |  | Planlama yapılacak mamul yada yarımamulun musteri siparis bakiyesidir. |
| 6 | `MINSTOK` | TDBFLOAT | evet |  | Planlama yapılacak mamul yada yarımamulun minimum siparis bakiyesidir. |
| 7 | `SIPNO` | TDBBELGENO | evet |  | Siparis numarasidir. |
| 8 | `YEDEK` | varchar(11) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `MUSSIPMIK` | TDBFLOAT | evet |  | Planlama yapılacak mamul yada yarımamulun musteri siparis miktarıdır. |
| 10 | `SERBESTMIK` | TDBFLOAT | evet |  | Serbest miktardır. |
| 11 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodudur. |
| 12 | `MPSFLAG` | char(1) | evet |  |  |
| 13 | `SIPKONT` | TDBSMALLINT | evet |  | Siparis sıra numarasıdır. |
| 14 | `PLANLAMA_ONCELIK` | TDBINTEGER | evet |  |  |
| 15 | `BAKIYE_KONTROL` | char(1) | evet |  |  |
| 16 | `FABRIKA_KODU` | varchar(35) | evet |  |  |
| 17 | `SECIM` | char(1) | hayır |  |  |
| 18 | `SIRA` | int | evet |  |  |
| 19 | `ALTRECNO` | TDBINTEGER | hayır |  |  |
| 20 | `KESIN_PLAN` | char(1) | hayır |  |  |
| 21 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 22 | `YENI_SIPARIS` | char(1) | hayır |  | Yeni sipariş bilgisi numarası alanı eklenmiştir. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCK_MRPPLAN_IDX_YAPKOD1` | `YAPKOD, MAMUL_KODU` | Nonclustered |
| `TBLBCK_MRPPLAN_IND_1` | `BCKNO, TARIH, SIPNO, MAMUL_KODU, YAPKOD, SIPKONT` | Nonclustered, unique |
| `TBLBCK_MRPPLAN_IND_2` | `MAMUL_KODU, YAPKOD` | Nonclustered |
| `TBLBCK_MRPPLAN_IND_3` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, TARIH, MAMUL_KODU, MIKTAR, MUSSIPBAK, MINSTOK
FROM dbo.TBLMRPPLAN WITH (NOLOCK);
```
