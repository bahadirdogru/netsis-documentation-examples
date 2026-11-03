---
title: TBLCARIKUR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarikur/
---

# TBLCARIKUR

> Cari bazında döviz kurları girişi bilgileri yer alır.

- **Modül:** [DÖVİZ](/veritabani/moduller/doviz/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kodu bilgisi yer alır. |
| 5 | `DOVIZ_TIPI` | TDBBYTE | evet |  | Dövzi tipi bilgsi yer alır. |
| 6 | `BASTARIH` | datetime | evet |  | Başlangıç tarihi bilgisi yer alır. |
| 7 | `BITTARIH` | datetime | evet |  | Bitiş tarihi bilgisi yer alır. |
| 8 | `DOV_ALIS` | float | evet |  | Döviz alış kuru bilgsi yer alır. |
| 9 | `DOV_SATIS` | float | evet |  | döviz satış kuru bilgisi yer alır. |
| 10 | `EFF_ALIS` | float | evet |  | Effektif alış kuru bilgisi yer alır. |
| 11 | `EFF_SATIS` | float | evet |  | Effektif satış kuru bilgisi yer alır. |
| 12 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme yapılan tarih bilgisini içerir. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CARI_KOD, DOVIZ_TIPI, BASTARIH
FROM dbo.TBLCARIKUR WITH (NOLOCK);
```
