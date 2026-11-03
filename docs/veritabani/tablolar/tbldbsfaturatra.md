---
title: TBLDBSFATURATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldbsfaturatra/
---

# TBLDBSFATURATRA

> BANKA-İŞLEMLER-DBS İŞLEMLERİ- FATURA AKIBETLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `TIP` | char(1) | hayır |  | 1 |
| 4 | `BELGENO` | TDBBELGENO | hayır |  | Belge numarası bilgisi yer alır. |
| 5 | `VADE_TARIHI` | TDBDATETIME | evet |  | vade tarihi bilgisi yer alır. |
| 6 | `BRUTTUTAR` | TDBFLOAT | evet |  | Brüt tutar bilgisi yer alır. |
| 7 | `DEKONT_NO` | TDBINTEGER | evet |  | Entegrasyon yapıldı ise oluşturulan dekont numarası bilgisi yer alır. |
| 8 | `GONDERILDI` | char(1) | evet |  | Gönderildi ise E değerini alır., değil ise H değerini alır tekrar dosya oluşturup göndermeye izin verir. |
| 9 | `DURUMU` | varchar(35) | evet |  | Bankanın gönderdiği durum kodu bilgisi yer alır. |
| 10 | `MASINCKEYNO` | TDBINTEGER | hayır |  | TBLDBSFATURAMAS-INCKEYNO alanına karşılık gelir. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 29 | `DESEN_KODU` | varchar(35) | evet |  | Dosya oluşturulan desen kodu bilgisi yer alır. |
| 30 | `AKIBETDESEN_KODU` | varchar(35) | evet |  | bankadan gelen dosya için seçilen akıbet deseninin kodu yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, TIP, BELGENO, VADE_TARIHI, BRUTTUTAR
FROM dbo.TBLDBSFATURATRA WITH (NOLOCK);
```
