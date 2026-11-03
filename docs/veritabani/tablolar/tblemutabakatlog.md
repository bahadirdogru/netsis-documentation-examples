---
title: TBLEMUTABAKATLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakatlog/
---

# TBLEMUTABAKATLOG

> E-mutabakat loglarının tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `MASINCKEYNO` | TDBINTEGER | evet |  | TBLEMUTABAKATMAS (INCKEYNO) |
| 5 | `CARI_KOD` | TDBCARIKOD | evet |  | cari kod bilgisi yer alır. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 7 | `LOGCONTENT` | varchar(4000) | hayır |  | Log bilgisi yer alır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MASINCKEYNO, CARI_KOD, TARIH
FROM dbo.TBLEMUTABAKATLOG WITH (NOLOCK);
```
