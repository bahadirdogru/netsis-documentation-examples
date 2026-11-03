---
title: TBLITHGUMRUKBEYANNAME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithgumrukbeyanname/
---

# TBLITHGUMRUKBEYANNAME

> İTHALAT GÜMRÜK BEYANNAME BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 41

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `GB_NUMARA` | varchar(50) | hayır |  | GGB No bilgisi yer alır. |
| 3 | `GUMRUK_KODU` | TDBCARIKOD | evet |  | Gümrük kodu bilgisi yer alır. |
| 4 | `GUMRUKCU_KODU` | varchar(15) | evet |  | Gümrükçü kodu bilgis yer alır. |
| 5 | `GB_TARIHI` | TDBDATETIME | evet |  | GGB Tarih bilgisi yer alır. |
| 6 | `GB_INTAC_TARIHI` | TDBDATETIME | evet |  | GGB Tescil tarihi bilgisi yer alır. |
| 7 | `GB_GELIS_TARIHI` | TDBDATETIME | evet |  | GGB Geliş tarihi bilgisi yer alır. |
| 8 | `GB_FIILI_TARIH` | TDBDATETIME | evet |  | GGB Fiili tarih bilgisi yer alır. |
| 9 | `GB_ODEMETIP` | varchar(25) | evet |  | Beyanname ödeme şekli bilgisi yer alır. |
| 10 | `GB_KUR` | TDBFLOAT | evet |  | Beyanname Kur bilgisi yer alır. |
| 11 | `ULKE_KODU` | varchar(4) | evet |  | Geldiği ülke bilgisi yer alır. |
| 12 | `TESLIMSEKLI` | TDBSMALLINT | evet |  | Beyanname teslim şekli bilgisi yer alır. |
| 13 | `RAPOR_KODU` | varchar(50) | evet |  | İthalat tipi bilgisi yer alır. |
| 14 | `ATR_NO` | varchar(50) | evet |  | ATR bilgisi yer alır. |
| 15 | `EUR1_NO` | varchar(50) | evet |  | EUR.1 bilgisi yer alır. |
| 16 | `FORM_A_NO` | varchar(50) | evet |  | Form A bilgisi yer alır. |
| 17 | `MENSE_SERT_NO` | varchar(50) | evet |  | Menşe sert bilgisi yer alır. |
| 18 | `IMALATCI` | varchar(50) | evet |  | NULL |
| 19 | `IHRACATCI` | varchar(50) | evet |  | NULL |
| 20 | `ANTREPO_BEYANNAME_TARIH` | TDBDATETIME | evet |  | Antrepo Beyanname tarih bilgisi yer alır. |
| 21 | `ANTREPO_BEYANNAMENO` | varchar(20) | evet |  | Antrepo beyanname numarası bilgisi yer alır. |
| 22 | `KATI_GB_NO` | varchar(50) | evet |  | Kati GGB tescil No bilgisi yer alır. |
| 23 | `KATI_GB_TARIH` | TDBDATETIME | evet |  | Kati GB Tarihi bilgisi yer alır. |
| 24 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 29 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Ek açıklama 1 bilgisi yer alır. |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Ek açıklama 2 bilgisi yer alır. |
| 33 | `S_YEDEK3` | varchar(50) | evet |  | Ek açıklama 3 bilgisi yer alır. |
| 34 | `S_YEDEK4` | varchar(50) | evet |  | Ek açıklama 4 bilgisi yer alır. |
| 35 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `PARCALI_DOSYANO` | varchar(50) | evet |  | Parçalı ithalat ise dosya numaraları bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, GB_NUMARA, GUMRUK_KODU, GUMRUKCU_KODU, GB_TARIHI, GB_INTAC_TARIHI
FROM dbo.TBLITHGUMRUKBEYANNAME WITH (NOLOCK);
```
