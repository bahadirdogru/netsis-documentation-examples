---
title: TBLURETVARDIYAPLANI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretvardiyaplani/
---

# TBLURETVARDIYAPLANI

> MRP-KAYIT-KAYNAK YÖNETİMİ-KAYNAK TANIMLAMA BİLGİLERİNDEKİ VARDİYA PLANI YER ALIR.Ayrıca Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme\Fabrika vardiya Planı Tanımlama bilgileri yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `ILGITIPI` | char(1) | hayır |  | İlgi tipi bilgisi yer alır. |
| 4 | `ILGIKODU` | TDBILGIKODU | hayır |  | İlgi kodu bilgisi yer alır. F-abrika gibi |
| 5 | `BASTARIHI` | TDBDATETIME | hayır |  | Başlangıç tarihi bilgisi yer alır. |
| 6 | `BITTARIHI` | TDBDATETIME | evet |  | Bitiş tarihi blgisi yer alır. |
| 7 | `HAFTANINGUNU` | char(1) | evet |  | Haftanın günleri bilgisi yer alır. |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 24 | `VARDIYAPLANITASLAK_ID` | TDBINTEGER | evet |  | TBLURETVARDIYAPLANITASLAK (INCKEYNO) |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, ILGITIPI, ILGIKODU, BASTARIHI, BITTARIHI
FROM dbo.TBLURETVARDIYAPLANI WITH (NOLOCK);
```
