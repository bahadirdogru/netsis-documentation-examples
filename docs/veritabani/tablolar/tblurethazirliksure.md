---
title: TBLURETHAZIRLIKSURE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurethazirliksure/
---

# TBLURETHAZIRLIKSURE

> Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme\Hazırlık süresi tanımlama bilgileri yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 36

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `OP_DEGER_TIPI` | TDBSMALLINT | hayır |  | Operasyon tipi bilgisi yer alır. |
| 5 | `OP_DEGER` | varchar(35) | evet |  | Operayon değer bilgisi yer alır. |
| 6 | `MAK_DEGER_TIPI` | TDBSMALLINT | hayır |  | Makine bilgileri tipi bilgisi yer alır. |
| 7 | `MAK_DEGER` | varchar(35) | evet |  | Makine değer bilgisi yer alır. |
| 8 | `TANIMTIPI` | TDBSMALLINT | hayır |  | Hazırlık süresi tipi bilgisi yer alır. |
| 9 | `SOURCE_DEGER_TIPI` | TDBSMALLINT | evet |  | Mevcut kaynak seçimi değer tipi bilgisi yer alır |
| 10 | `SOURCE_DEGER` | varchar(100) | evet |  | Kaynak değer bilgisi yer alır. |
| 11 | `DEST_DEGER_TIPI` | TDBSMALLINT | evet |  | Sonraki kaynak seçimi bilgisi yer alır. |
| 12 | `DEST_DEGER` | varchar(100) | evet |  | Kaynak değer bilgisi yer alır. |
| 13 | `SCRIPT` | text | evet |  | Script seçili ise girilen kod bilgisi yer alır. |
| 14 | `HAZIRLIKSURE` | TDBFLOAT | evet |  | Hazırlık süresi bilgisi yer alır. |
| 15 | `HAZIRLIKSURETIPI` | char(1) | evet |  | Hazırlık süre tipi bilgisi yer alır. |
| 16 | `KENDISIDAHIL` | TDBINTEGER | evet |  | Kendisi dahil işaretli ise 1 değerini alır. |
| 17 | `DETACHED` | TDBSMALLINT | evet |  | Hazırlık süresi ise bağlı değil işaretli ise 1 değerini alır. |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 31 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 32 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 33 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 34 | `SOURCE_YAPKOD` | varchar(15) | evet |  | Mevcut ürün seçimindeki yapılandırma kodu bilgisi yer alır. |
| 35 | `DEST_YAPKOD` | varchar(15) | evet |  | Sonraki ürüen seçimindeki yapılandırma kodu bilgisi yer alır. |
| 36 | `SADECE_ILK_OPR_ICIN` | char(1) | evet |  | Sadece ilk operasyon hazırlık süresi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, OP_DEGER_TIPI, OP_DEGER, MAK_DEGER_TIPI
FROM dbo.TBLURETHAZIRLIKSURE WITH (NOLOCK);
```
