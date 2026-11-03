---
title: TBLEMUSTAHSIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemustahsil/
---

# TBLEMUSTAHSIL

> E-Müstahsil belgelerine ait kayıtlar yer alır.

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 3 | `GIB_FATIRS_NO` | varchar(16) | hayır |  | Resmi fatura numarası bilgisi yer alır. |
| 4 | `FTIRSIP` | char(1) | hayır |  | 1 |
| 5 | `TIP` | TDBBYTE | hayır |  | 0-satış faturası,1-iptal faturası |
| 6 | `FATIRS_NO` | TDBBELGENO | evet |  | Fatura numarası bilgisi yer alır. |
| 7 | `CARI_KODU` | TDBCARIKOD | evet |  | Cari kodu bilgisi yer alır. |
| 8 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi yer alır. |
| 9 | `GUNCELLEMETARIHI` | TDBDATETIME | evet |  | Güncelleme tarihi bilgisi yer alır.NULL |
| 10 | `XMLBYTES` | varbinary(-1) | hayır |  | Xml bilgisi yer alır. |
| 11 | `DURUM` | TDBBYTE | hayır |  | 1-ilk gidince,2-karşı tarafa iletilince. |
| 12 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 13 | `KAYITTARIHI` | datetime | evet |  | Kayıt tarihi bilgisi yer alır. |
| 14 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 15 | `DUZELTMETARIHI` | datetime | evet |  | Düzeltme tarihi bilgisi yer alır |
| 16 | `UUID` | varchar(200) | evet |  | Faturaya ait UUID numarası yer alır. |
| 17 | `RESPONSECODE` | TDBINTEGER | evet |  | Durum kodu bilgisi yer alır. |
| 18 | `RESPONSEDESC` | varchar(1000) | evet |  | Durum açıklama bilgisi yer alır. |
| 19 | `EARSIVID` | TDBINTEGER | evet |  | EARSIVID bilgisi yer alır. |
| 20 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 22 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 23 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 24 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 25 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 26 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 27 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 28 | `YEDEK9` | varchar(250) | evet |  | Kullanılan dizayn bilgisi yer alır. |
| 29 | `YEDEK10` | varchar(250) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 30 | `YEDEK11` | varchar(250) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 31 | `YEDEK12` | varchar(250) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, GIB_FATIRS_NO, FTIRSIP, TIP, FATIRS_NO
FROM dbo.TBLEMUSTAHSIL WITH (NOLOCK);
```
