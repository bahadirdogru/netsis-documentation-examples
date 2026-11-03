---
title: TBLURETKAYMAMES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretkaymames/
---

# TBLURETKAYMAMES

> Kaynak Tanımlama bilgileri yer alır. İleri üretim planlama olmayanlar

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `KAY_DEGER_TIPI` | TDBSMALLINT | hayır |  |  |
| 5 | `KAY_DEGER` | varchar(35) | evet |  |  |
| 6 | `URUN_DEGER_TIPI` | TDBSMALLINT | hayır |  |  |
| 7 | `URUN_DEGER` | varchar(100) | evet |  |  |
| 8 | `URETMIK` | TDBFLOAT | evet |  |  |
| 9 | `URETMIKTIPI` | char(1) | evet |  |  |
| 10 | `ESZAMCIKMAZORUNLU` | TDBSMALLINT | evet |  |  |
| 11 | `SETNO` | TDBSMALLINT | hayır |  |  |
| 12 | `SET_ONCELIK` | TDBSMALLINT | hayır |  |  |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 29 | `YAPKOD` | varchar(15) | evet |  |  |
| 30 | `AKTIF` | char(1) | hayır |  | Aktif seçeneğinin bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, KAY_DEGER_TIPI, KAY_DEGER, URUN_DEGER_TIPI
FROM dbo.TBLURETKAYMAMES WITH (NOLOCK);
```
