---
title: TBLEMUTABAKATSUBETANIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakatsubetanim/
---

# TBLEMUTABAKATSUBETANIM

> E-mutabakat şube tanımlarının tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 18

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 3 | `WS_KULLANICI_AD` | varchar(50) | evet |  | Kullanıcı adı bilgisi yer alır. |
| 4 | `WS_KULLANICI_SIFRE` | varchar(50) | evet |  | Şifre bilgisi yer alır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, INCKEYNO, WS_KULLANICI_AD, WS_KULLANICI_SIFRE, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLEMUTABAKATSUBETANIM WITH (NOLOCK);
```
