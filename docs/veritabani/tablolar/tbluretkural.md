---
title: TBLURETKURAL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretkural/
---

# TBLURETKURAL

> Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme\Kural tanımlama bilgileri yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 23

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `KURAL_TIPI` | TDBSMALLINT | evet |  | Kural tipi bilgisi yer alır. |
| 5 | `KURAL_ADI` | varchar(100) | evet |  | Kural adı bilgisi yer alır. |
| 6 | `OP_DEGER_TIPI_1` | TDBSMALLINT | hayır |  | Operasyon tipi 1 bilgisi yer alır. |
| 7 | `OP_DEGER_1` | varchar(35) | evet |  | Operasyon değer 1 bilgisi yer alır. |
| 8 | `MAK_DEGER_TIPI_1` | TDBSMALLINT | hayır |  | Makine değer tipi 1 bilgisi yer alır. |
| 9 | `MAK_DEGER_1` | varchar(35) | evet |  | Makine değer 1 bilgisi yer alır. |
| 10 | `URUN_DEGER_TIPI_1` | TDBSMALLINT | hayır |  | Ürün Değer tipi 1 bilgisi yer alır. |
| 11 | `URUN_DEGER_1` | varchar(100) | evet |  | Ürün değer 1 bilgisi yer alır. |
| 12 | `OP_DEGER_TIPI_2` | TDBSMALLINT | hayır |  | Operasyon tipi 2 bilgisi yer alır. |
| 13 | `OP_DEGER_2` | varchar(35) | evet |  | Operasyon değer 2 bilgisi yer alır. |
| 14 | `MAK_DEGER_TIPI_2` | TDBSMALLINT | hayır |  | Makine değer tipi 2 bilgisi yer alır. |
| 15 | `MAK_DEGER_2` | varchar(35) | evet |  | Makine değer 2 bilgisi yer alır. |
| 16 | `URUN_DEGER_TIPI_2` | TDBSMALLINT | hayır |  | Ürün Değer tipi 2 bilgisi yer alır. |
| 17 | `URUN_DEGER_2` | varchar(100) | evet |  | Ürün değer 2 bilgisi yer alır. |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 22 | `YAPKOD_1` | varchar(15) | evet |  | Ürün değer 1 yapılandırma kodu bilgisi yer alır. |
| 23 | `YAPKOD_2` | varchar(15) | evet |  | Ürün değer 2 yapılandırma kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, KURAL_TIPI, KURAL_ADI, OP_DEGER_TIPI_1
FROM dbo.TBLURETKURAL WITH (NOLOCK);
```
