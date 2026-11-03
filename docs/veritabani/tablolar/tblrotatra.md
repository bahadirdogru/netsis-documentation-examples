---
title: TBLROTATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblrotatra/
---

# TBLROTATRA

> İLERİ ÜRETİM ÇİZELGELEME ROTA TANIMLAMA ROTA DETAY SIRALAMA BİLGİSİ YER ALIR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bigisi yer alır. |
| 4 | `ROTAMAS_ID` | TDBINTEGER | hayır |  | TBLROTAMAS-INCKEYNO alanına karşılık gelir. |
| 5 | `OPNO` | varchar(8) | hayır |  | Operasyon numarası bilgisi yer alır.Sıra no |
| 6 | `OPKODU` | varchar(35) | hayır |  | Operasyon kodu bilgisi yer alır. |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, ROTAMAS_ID, OPNO, OPKODU
FROM dbo.TBLROTATRA WITH (NOLOCK);
```
