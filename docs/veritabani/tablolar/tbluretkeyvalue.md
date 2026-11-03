---
title: TBLURETKEYVALUE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretkeyvalue/
---

# TBLURETKEYVALUE

> Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme\Çizelgeleme Özel parametreleri bilgileri yer alır

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 20

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `GRUPKOD` | varchar(50) | evet |  | Grup kodu bilgisi yer alır. |
| 5 | `ANAHTAR` | varchar(50) | evet |  | Anahtar bilgisi yer alır. |
| 6 | `DEGER` | varchar(255) | evet |  | Değer bilgisi yer alır. |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 19 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, GRUPKOD, ANAHTAR, DEGER
FROM dbo.TBLURETKEYVALUE WITH (NOLOCK);
```
