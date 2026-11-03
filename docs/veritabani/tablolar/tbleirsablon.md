---
title: TBLEIRSABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsablon/
---

# TBLEIRSABLON

> e-irsaliye ek bilgiler şablon oluşturma ekranındaki veriler yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TEMPLATEID` | varchar(45) | hayır |  | Şablon adı bilgisi yer alır. |
| 2 | `LICENSEPLATEID` | varchar(20) | evet |  | Plaka bilgisi yer alır. |
| 3 | `CARRIERVKN` | varchar(15) | evet |  | Taşıyızı vergi klimlik numarası bilgisi yer alır. |
| 4 | `CARRIERNAME` | varchar(50) | evet |  | Taşıyıcı bilgileri ünvanı bilgisi yer alır. |
| 5 | `CARRIERSUBCITY` | varchar(50) | evet |  | Taşıyıcı bilgileri ilçe bilgisi yer alır. |
| 6 | `CARRIERCITY` | varchar(50) | evet |  | Taşıyıcı bilgileri il bilgisi yer alır. |
| 7 | `CARRIERCOUNTRY` | varchar(50) | evet |  | Taşıyıcı bilgileri ülke bilgisi yer alır. |
| 8 | `CARRIERPOSTAL` | varchar(8) | evet |  | Taşıyıcı bilgileri posta kutusu bilgisi yer alır. |
| 9 | `DPERSON1FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri 1 - Adı bilgisi yer alır. |
| 10 | `DPERSON1FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri 1 - Soyadı bilgisi yer alır. |
| 11 | `DPERSON1TITLE` | varchar(50) | evet |  | Şoför bilgileri 1 - açıklama bilgisi yer alır. |
| 12 | `DPERSON1NID` | varchar(20) | evet |  | Şoför bilgileri 1 - t.c. Kimlik numarası bilgisi yer alır. |
| 13 | `DPERSON2FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri 2 - Adı bilgisi yer alır. |
| 14 | `DPERSON2FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri 2 - Soyadı bilgisi yer alır. |
| 15 | `DPERSON2TITLE` | varchar(50) | evet |  | Şoför bilgileri 2 - açıklama bilgisi yer alır. |
| 16 | `DPERSON2NID` | varchar(20) | evet |  | Şoför bilgileri 2 - t.c. Kimlik numarası bilgisi yer alır. |
| 17 | `DPERSON3FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri 3 - Adı bilgisi yer alır. |
| 18 | `DPERSON3FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri 3 - Soyadı bilgisi yer alır. |
| 19 | `DPERSON3TITLE` | varchar(50) | evet |  | Şoför bilgileri 3 - açıklama bilgisi yer alır. |
| 20 | `DPERSON3NID` | varchar(20) | evet |  | Şoför bilgileri 3 - t.c. Kimlik numarası bilgisi yer alır. |
| 21 | `DORSEPLAKA1` | varchar(20) | evet |  | Dorse plakaları 1 bilgisi yer alır. |
| 22 | `DORSEPLAKA2` | varchar(20) | evet |  | Dorse plakaları 2 bilgisi yer alır. |
| 23 | `DORSEPLAKA3` | varchar(20) | evet |  | Dorse plakaları 3 bilgisi yer alır. |
| 24 | `ACIKLAMA` | varchar(150) | evet |  | Şablon açıklaması yer alır. |
| 25 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | KAyıt yapan kullanıcı bilgisi yer alır. |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | kayıt tarihi bilgisi yer alır. |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 30 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 31 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 32 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 33 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 34 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 35 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 36 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 37 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 38 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 39 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 40 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 TEMPLATEID, LICENSEPLATEID, CARRIERVKN, CARRIERNAME, CARRIERSUBCITY, CARRIERCITY
FROM dbo.TBLEIRSABLON WITH (NOLOCK);
```
