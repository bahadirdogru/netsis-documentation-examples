---
title: TBLBCK_MPSTRADETAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mpstradetail/
---

# TBLBCK_MPSTRADETAIL

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 44

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBINTEGER | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBINTEGER | evet |  | Şube kodu bilgisi yer alır. |
| 3 | `SESSIONNO` | varchar(19) | evet |  | Session numarası bilgisi yer alır. |
| 4 | `INCKEYNO` | TDBINTEGER | evet |  | İnckey numarası yer alır. |
| 5 | `MPSMASID` | TDBINTEGER | evet |  | TBLBCK_MPSMAS-INCKEYNO bilgisi yer alır. |
| 6 | `MPSTRAID` | TDBINTEGER | evet |  | TBLBCK_MPSSTRA-INCKEYNO |
| 7 | `STOKKODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 8 | `YAPKOD` | TDBSTOKKOD | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 9 | `YILKODU` | TDBSMALLINT | evet |  | Yıl kodu bilgisi yer alır. |
| 10 | `PERIYOTNO` | TDBINTEGER | evet |  | Periyot bilgisi yer alır. |
| 11 | `PERIYOTTIP` | char(1) | evet |  |  |
| 12 | `KUMULETIP` | TDBSMALLINT | evet |  |  |
| 13 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yera lır. |
| 14 | `MIKTAR2` | TDBFLOAT | evet |  | Miktar2 bilgisi yer alır. |
| 15 | `OLCUBR2` | TDBSMALLINT | evet |  | Miktar 2 ölçü birimi yer alır. |
| 16 | `KAYIT_TIPI` | char(1) | evet |  | F-orecast |
| 17 | `FORECAST_BASTAR` | TDBDATETIME | evet |  | Başlama tarihi yer alır. |
| 18 | `FORECAST_BITTAR` | TDBDATETIME | evet |  | Bitiş tarihi yer alır. |
| 19 | `BELGE_NO` | TDBBELGENO | evet |  | Bitiş tarihi yer alır. |
| 20 | `SIPKONT` | TDBINTEGER | evet |  |  |
| 21 | `STHAR_TESTAR` | TDBDATETIME | evet |  |  |
| 22 | `IRSALIYE_TARIH` | TDBDATETIME | evet |  |  |
| 23 | `CLC_IRSALIYE_TARIH` | TDBDATETIME | evet |  |  |
| 24 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 25 | `CARIKOD` | TDBCARIKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `STHAR_TARIH` | TDBDATETIME | evet |  |  |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 28 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 30 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 31 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, SESSIONNO, INCKEYNO, MPSMASID, MPSTRAID
FROM dbo.TBLBCK_MPSTRADETAIL WITH (NOLOCK);
```
