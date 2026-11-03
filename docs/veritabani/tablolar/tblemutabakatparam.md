---
title: TBLEMUTABAKATPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakatparam/
---

# TBLEMUTABAKATPARAM

> E-mutabakat parametrelerinin tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `CBAK_DETAY_TIPI` | TDBBYTE | evet |  | cari bakiye sekmesindeki detay hareket tipi bilgisi yer alır. |
| 3 | `KONTROLSURETIPI` | TDBBYTE | evet |  |  |
| 4 | `KONTROLSURE` | TDBFLOAT | evet |  |  |
| 5 | `DOSYADIZINI` | varchar(255) | evet |  | E-mutabakat dosya dizini bilgisi yer alır. |
| 6 | `BA_DZNKOD` | TDBINTEGER | evet |  | BA dizayn kodu bilgisi yer alır. |
| 7 | `BS_DZNKOD` | TDBINTEGER | evet |  | BS dizayn kodu bilgisi yer alır. |
| 8 | `CBAK_DZNKOD` | TDBINTEGER | evet |  | Cari bakiye dizayn kodu bilgisi yer alır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisini içerir. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 25 | `EMAIL_TIPI` | TDBBYTE | hayır |  | cari e-posta adreslerini cari irtibat bilgilerinden getir işaretli ise 1 değerini alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CBAK_DETAY_TIPI, KONTROLSURETIPI, KONTROLSURE, DOSYADIZINI, BA_DZNKOD
FROM dbo.TBLEMUTABAKATPARAM WITH (NOLOCK);
```
