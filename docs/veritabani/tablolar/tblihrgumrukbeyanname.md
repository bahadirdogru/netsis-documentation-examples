---
title: TBLIHRGUMRUKBEYANNAME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrgumrukbeyanname/
---

# TBLIHRGUMRUKBEYANNAME

> İHRACAT GÜMRÜK BEYANNAME BİLGİLERİ TUTULUR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi tutulur |
| 2 | `GB_NUMARA` | varchar(50) | hayır |  | GÇB no bilgisi yer alır. |
| 3 | `GUMRUK_KODU` | TDBCARIKOD | evet |  | Gümrük Kodu bilgisi yer alır. |
| 4 | `GUMRUKCU_KODU` | varchar(15) | evet |  | Gümrükçü kodu bilgisi yer alır. |
| 5 | `GB_TARIHI` | TDBDATETIME | evet |  | GÇB tarihi bilgisi yer alır. |
| 6 | `GB_INTAC_TARIHI` | TDBDATETIME | evet |  | GÇB İntaç Tarihi bilgisi yer alır. |
| 7 | `GB_GELIS_TARIHI` | TDBDATETIME | evet |  | GÇB Geliş Tarihi bilgisi yer alır. |
| 8 | `ATR_NO` | varchar(50) | evet |  | ATR bilgisi yer alır. |
| 9 | `EUR1_NO` | varchar(50) | evet |  | EUR.1 bilgisi yer alır. |
| 10 | `FORM_A_NO` | varchar(50) | evet |  | FORM A bilgisi yer alır. |
| 11 | `MENSE_SERT_NO` | varchar(50) | evet |  | Menşe Sert bligisi yer alır. |
| 12 | `IMALATCI` | varchar(50) | evet |  | İmalatçı bilgisi yer alır. |
| 13 | `IHRACATCI` | varchar(50) | evet |  | İhracatçı bilgisi yer alır. |
| 14 | `ETIKETTIP` | varchar(50) | evet |  | Etiket alanı içerisindeki tip bilgisi yer alır. |
| 15 | `ETIKETVAR` | char(1) | evet |  | Etiket Evet işareli ise E değerini alır. |
| 16 | `TEV_TARIHI` | TDBDATETIME | evet |  | Tev için girilen tarih bilgisi yer alır. |
| 17 | `TEVODENDI` | char(1) | evet |  | Tev ödendi işaretli ise E değerini alır. |
| 18 | `TESLIMSEKLI` | TDBSMALLINT | evet |  | Beyanname teslim şekline göre değer alır. |
| 19 | `GB_KUR` | TDBFLOAT | evet |  | Beyanname kur bilgisi yer alır. |
| 20 | `GB_ODEMETIP` | varchar(25) | evet |  | Beyanname ödeme şekli bilgisi yer alır. |
| 21 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Ek Açıklama-1 bilgisi yer alır. |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Ek Açıklama-2 bilgisi yer alır. |
| 30 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `S_YEDEK3` | varchar(255) | evet |  |  |
| 37 | `S_YEDEK4` | varchar(255) | evet |  |  |
| 38 | `KATI_GB_NO` | varchar(50) | evet |  |  |
| 39 | `KATI_GB_TARIH` | TDBDATETIME | evet |  |  |
| 40 | `PARCALI_DOSYANO` | varchar(50) | evet |  |  |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, GB_NUMARA, GUMRUK_KODU, GUMRUKCU_KODU, GB_TARIHI, GB_INTAC_TARIHI
FROM dbo.TBLIHRGUMRUKBEYANNAME WITH (NOLOCK);
```
