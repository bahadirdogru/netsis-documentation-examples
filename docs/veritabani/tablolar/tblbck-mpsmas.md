---
title: TBLBCK_MPSMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mpsmas/
---

# TBLBCK_MPSMAS

> Malzeme gereksinim planlama yedeklerinin kalem bilgileri yer almaktadır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBINTEGER | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBINTEGER | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `SESSIONNO` | varchar(19) | evet |  | Session bilgisi yer alır. |
| 4 | `INCKEYNO` | TDBINTEGER | evet |  | Inckey numarasıdır |
| 5 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 6 | `YAPKOD` | TDBSTOKKOD | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 7 | `MPS_PERIYOT_TIPI` | char(1) | evet |  |  |
| 8 | `MPS_IHTIYAC_BELIRLEME` | TDBSMALLINT | evet |  |  |
| 9 | `BASLAMA_TARIHI` | TDBDATETIME | evet |  | Başlama tarihi yer alır. |
| 10 | `BITIS_TARIHI` | TDBDATETIME | evet |  | Bitiş tarihi yer alır. |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `KUMULETIP` | TDBSMALLINT | evet |  |  |
| 30 | `OLCUBR` | TDBSMALLINT | evet |  | Ölçü birimi yer alır. |
| 31 | `FORECASTMASID` | TDBINTEGER | evet |  |  |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, SESSIONNO, INCKEYNO, STOK_KODU, YAPKOD
FROM dbo.TBLBCK_MPSMAS WITH (NOLOCK);
```
