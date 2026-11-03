---
title: TBLKULLANP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkullanp/
---

# TBLKULLANP

> KULLANICI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 51

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı kodunu tutan sahadır. |
| 3 | `KULLANICI_ISIM` | TDBNETSISKUL | hayır |  | Kullanıcı ismini tutan sahadır. |
| 4 | `ISIM_SOYAD` | varchar(30) | evet |  | Kullanıcı kayıtları İsim/Soyad hanesine girilen bilgidir. |
| 5 | `SICIL_NO` | varchar(45) | evet |  | Kullanıcı sicil numarasini tutan sahadır. |
| 6 | `SIFRE` | varchar(20) | evet |  | Sifredir. |
| 7 | `SIFRE1` | varchar(20) | evet |  | 1. sifredir. |
| 8 | `SIFRE2` | varchar(20) | evet |  | 2. sifredir. |
| 9 | `SIFRE3` | varchar(20) | evet |  | 3. sifredir. |
| 10 | `SIFRE4` | varchar(20) | evet |  | 4. sifredir. |
| 11 | `SIFRE5` | varchar(20) | evet |  | 5. sifredir. |
| 12 | `SIFRE6` | varchar(20) | evet |  | 6. sifredir. |
| 13 | `SIFRE7` | varchar(20) | evet |  | 7. sifredir. |
| 14 | `SIFRE8` | varchar(20) | evet |  | 8. sifredir. |
| 15 | `ENSON_SIFRETAR` | TDBDATETIME | evet |  | Sifrenin en son degistirildigi tarihi tutar. |
| 16 | `ENSON_SIFRESAAT` | TDBDATETIME | evet |  | Sifrenin en son degistirildigi saati tutar. |
| 17 | `ENSON_LOGINTAR` | TDBDATETIME | evet |  | Kullanıcının en son login oldugu tarihi tutar. |
| 18 | `ENSON_LOGINSAAT` | TDBDATETIME | evet |  | Kullanıcının en son login oldugu saati tutar. |
| 19 | `EXPPERIOD` | TDBBYTE | evet | `0` | Minimum sifre degistirme suresini tutan sahadır. |
| 20 | `MAX_SIFRE_TAR` | TDBDATETIME | evet |  | Max sifre tarihini tutan sahadır. |
| 21 | `CONNECTION` | TDBBYTE | evet | `0` | "Kullanılmıyor" |
| 22 | `GSIZ_LOGIN_SAYISI` | TDBBYTE | evet | `0` | Gecersiz login saysını tutar. |
| 23 | `GSIZ_LOGIN_TARIHI` | TDBDATETIME | evet |  | Kullanıcının gecersiz login oldugu tarihi tutar. |
| 24 | `GSIZ_LOGIN_SAATI` | TDBDATETIME | evet |  | Kullanıcının gecersiz login oldugu saati tutar. |
| 25 | `KILIT_TARIHI` | TDBDATETIME | evet |  | Kilitlendigi gun bilgisini tutan sahadır. |
| 26 | `KILIT_ZAMANI` | TDBDATETIME | evet |  | Kilitlendigi saat bilgisini tutan sahadır. |
| 27 | `TRH_KILIT_BAS` | TDBDATETIME | evet |  | Acık tarih aralıgı baslangicini tutan sahadır. |
| 28 | `TRH_KILIT_BIT` | TDBDATETIME | evet |  | Acık tarih aralıgı bitisini tutan sahadir. |
| 29 | `SIFRE_DEGIS` | char(1) | evet |  | Kullanıcı ilk tanımlandıgında X degerini alır;ilk giriste sifresini degistiridkten sonra X degeri silinir. |
| 30 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK2` | char(1) | evet |  | Limitsiz internet kullanıcısı ise E degerini tutan sahadır. |
| 32 | `YEDEK3` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `EMAIL` | varchar(50) | evet |  | Kullanıcı email adresini tutan sahadır. |
| 37 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `GRUPKODU` | TDBSMALLINT | evet | `-1` | Kullanıcı grup kodunu tutan sahadır. |
| 42 | `ADMINMI` | char(1) | evet | `H` | Admin ise E degerini tutan sahadır. |
| 43 | `KAYITRENGI` | TDBINTEGER | evet |  | Kullanıcının yaptıgı kayıtlarda kullanılacak rengi tutar. |
| 44 | `XISYERI` | TDBISYERI | evet |  | "Kullanılmıyor" |
| 45 | `FORCECARD` | TDBBYTE | evet |  | Girislerde kart zorunlu ise E degerini tutan sahadır. |
| 46 | `CARDID` | varchar(30) | evet |  | NES kart seri numarasını tutan sahadır. |
| 47 | `CEPTEL` | varchar(20) | evet |  | Ceptel numarasını tutan sahadır. |
| 48 | `YENIYONTEM` | char(1) | evet |  |  |
| 49 | `SSOUSERID` | TDBINTEGER | evet |  | SSOUSER Tablosundaki ID kolonuna karşılık gelir. |
| 50 | `TRH_KILIT_GUNGECMIS` | TDBINTEGER | hayır |  | Dinamik tarih kilidi için geçmiş gün bilgisi yer alır. |
| 51 | `TRH_KILIT_GUNGELECEK` | TDBINTEGER | hayır |  | Dinamik tarih kilidi için gelecek gün bilgisi girilir. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `IND_CARDID` | `SUBE_KODU, CARDID` | Nonclustered |
| `TBLKULLANP_1` | `SUBE_KODU, KULLANICI_ISIM` | Nonclustered, unique |
| `TBLKULLANP_PKEY` | `SUBE_KODU, KULLANICI_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICI_NO, KULLANICI_ISIM, ISIM_SOYAD, SICIL_NO, SIFRE
FROM dbo.TBLKULLANP WITH (NOLOCK);
```
