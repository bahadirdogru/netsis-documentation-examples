---
title: TBLURETOPMAKES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretopmakes/
---

# TBLURETOPMAKES

> Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme\Rota Tanımlama -Makine eşleştirme bilgileri yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 43

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `OP_DEGER_TIPI` | TDBSMALLINT | hayır |  | Operasyon değer tipi bilgisi yer alır. |
| 5 | `OP_DEGER` | varchar(35) | evet |  | Operasyon değer bilgisi yer alır. |
| 6 | `MAK_DEGER_TIPI` | TDBSMALLINT | hayır |  | Makine değer tipi bilgisi yer alır. |
| 7 | `MAK_DEGER` | varchar(35) | evet |  | Makine değer bilgisi yer alır. |
| 8 | `URUN_DEGER_TIPI` | TDBSMALLINT | hayır |  | Ürün değer tipi bilgisi yer alır. |
| 9 | `URUN_DEGER` | varchar(100) | evet |  | Ürün değer biglisi yer alır. |
| 10 | `URETSURE` | TDBFLOAT | hayır |  | Üretim süresi bilgisi yer alır. |
| 11 | `URETSURETIPI` | char(1) | evet |  | Üretim süre tipip bilgisi yer alır. |
| 12 | `URETMIK` | TDBFLOAT | hayır |  | Üretim mikartı bilgisi yer alır. |
| 13 | `URETMIKTIPI` | char(1) | evet |  | Üretim miktar tipi bilgisi yer alır. |
| 14 | `PARTIMIK` | TDBFLOAT | evet |  | Parti miktarı bilgisi yer alır. |
| 15 | `PARTIMIKTIPI` | char(1) | evet |  | Prati miktar tipip bilgisi yer alır. |
| 16 | `GECISMIK` | TDBFLOAT | evet |  | Geçiş miktarı bilgisi yer alır. |
| 17 | `GECISMIKTIPI` | char(1) | evet |  | Geçiş miktar tipi bilgisi yer alır. |
| 18 | `CEVRIMSURE` | TDBFLOAT | evet |  | Çevrim süresi bilgisi yer alır. |
| 19 | `CEVRIMSURETIPI` | char(1) | evet |  | Çevrim süre tipi bilgisi yer alır. |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 33 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 34 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 35 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 36 | `YAPKOD` | varchar(15) | evet |  | Ürün seçilmesi durumunda yapılandırma kodu bilgisi yer alır. |
| 37 | `MIN_CALIS_KAY` | TDBINTEGER | evet |  | 0 |
| 38 | `MAX_CALIS_KAY` | TDBINTEGER | evet |  | 0 |
| 39 | `GECISSURE` | TDBFLOAT | evet |  | Operasyon-makine eşleştirme ekranında makine önceliğinin ve geçiş süresinin verilebilmesi için eklenen saha |
| 40 | `GECISSURETIPI` | char(1) | evet |  | Operasyon-makine eşleştirme ekranında makine önceliğinin ve geçiş süresinin verilebilmesi için eklenen saha |
| 41 | `ONCELIK` | TDBINTEGER | evet |  | Operasyon-makine eşleştirme ekranında makine önceliğinin ve geçiş süresinin verilebilmesi için eklenen saha |
| 42 | `OPNO` | varchar(8) | evet |  | Operasyon sıra numarası bilgisi yer alır. |
| 43 | `GECISMIK_TANIMTIPI` | char(1) | evet |  | Geçiş tanım tipi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, OP_DEGER_TIPI, OP_DEGER, MAK_DEGER_TIPI
FROM dbo.TBLURETOPMAKES WITH (NOLOCK);
```
