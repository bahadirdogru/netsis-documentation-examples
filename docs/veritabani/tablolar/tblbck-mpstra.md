---
title: TBLBCK_MPSTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mpstra/
---

# TBLBCK_MPSTRA

> Malzeme gereksinim planlama yedeklerinin kalem bilgilerine ait detay bilgiler yer almaktadır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 38

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBINTEGER | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBINTEGER | evet |  | Şube kodu bilgisi yer alır. |
| 3 | `SESSIONNO` | varchar(19) | evet |  | Session numarası bilgisi yer alır. |
| 4 | `INCKEYNO` | TDBINTEGER | evet |  | İnckey numarası yer alır. |
| 5 | `MPSMASID` | TDBINTEGER | evet |  | TBLBCK_MPSMAS-INCKEYNO bilgisi yer alır. |
| 6 | `KOD` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 7 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 8 | `YAPKOD` | TDBSTOKKOD | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 9 | `YILKODU` | TDBSMALLINT | evet |  | Yıl kodu bilgisi yer alır. |
| 10 | `PERIYOT` | TDBSMALLINT | evet |  | Periyot bilgisi yer alır. |
| 11 | `YILPERIYOT` | TDBSMALLINT | evet |  | Yıl periyot bilgisi yer alır. |
| 12 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yera lır. |
| 13 | `USEREDIT` | char(1) | evet |  |  |
| 14 | `KAYIT_TIPI` | char(1) | evet |  |  |
| 15 | `MIKTAR2` | TDBFLOAT | evet |  | Miktar2 bilgisi yer alır. |
| 16 | `OLCUBR_MIKTAR2` | TDBSMALLINT | evet |  | Miktar 2 ölçü birimi yer alır. |
| 17 | `KUMULETIP` | TDBSMALLINT | evet |  |  |
| 18 | `BASLAMA_TARIHI` | TDBDATETIME | evet |  | Başlama tarihi yer alır. |
| 19 | `BITIS_TARIHI` | TDBDATETIME | evet |  | Bitiş tarihi yer alır. |
| 20 | `KULMIKTAR` | TDBFLOAT | evet |  |  |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, SESSIONNO, INCKEYNO, MPSMASID, KOD
FROM dbo.TBLBCK_MPSTRA WITH (NOLOCK);
```
