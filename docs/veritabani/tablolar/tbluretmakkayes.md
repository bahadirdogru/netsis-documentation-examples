---
title: TBLURETMAKKAYES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretmakkayes/
---

# TBLURETMAKKAYES

> MRP-KAYIT-KAYNAK YÖNETİMİ-MAKİNE KAYNAK EŞLEŞTİRME BİLGİLERİ YER ALIR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `MAK_DEGER_TIPI` | TDBSMALLINT | hayır |  | Makine seçimindeki tip bilgisi yer alır. |
| 5 | `MAK_DEGER` | varchar(35) | evet |  | Makine değer bilgisi yer alır. |
| 6 | `KAY_DEGER_TIPI` | TDBSMALLINT | hayır |  | Set bilgilerindeki tip bilgisi yer alır. |
| 7 | `KAY_DEGER` | varchar(35) | evet |  | Kaynak değer bilgisi yer alır. |
| 8 | `URUN_DEGER_TIPI` | TDBSMALLINT | hayır |  | Ürün seçimindeki tip bilgisi yer alır. |
| 9 | `URUN_DEGER` | varchar(100) | evet |  | Ürün değer bilgisi yer alır. |
| 10 | `KAYNAKSAYISI` | TDBFLOAT | evet |  | Kaynak sayısı bilgisi yer alır. |
| 11 | `SETNO` | TDBSMALLINT | hayır |  | Program tarafından otomatik verilir. |
| 12 | `SET_ONCELIK` | TDBSMALLINT | hayır |  | Set öncelik sırası bilgisi yer alır. |
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
| 29 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 30 | `OMUR_TUKETIMI` | TDBFLOAT | evet |  | Ömür tüketimi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MAK_DEGER_TIPI, MAK_DEGER, KAY_DEGER_TIPI
FROM dbo.TBLURETMAKKAYES WITH (NOLOCK);
```
