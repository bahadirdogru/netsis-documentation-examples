---
title: TBLIHRNAKLIYETRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrnakliyetra/
---

# TBLIHRNAKLIYETRA

> İHRACAT DETAY BİLGİLER EKRANINDAKİ KONŞİMENTO BİLGİLERİ TUTULUR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 59

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi tutulur. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `FTIRSIP` | char(1) | hayır |  | P-Proforma diğerleri Tblfatuirs -FTIRSIP ile aynı değerlerdir. |
| 5 | `ACENTA_KODU` | TDBCARIKOD | evet |  | Acenta kodu bilgisi yer alır. |
| 6 | `TASIYICI_KODU` | TDBCARIKOD | evet |  | Taşıyıcı kodu bilgisi yer alır. |
| 7 | `TEMSILCI_KODU` | TDBCARIKOD | evet |  | Temsilci kodu bilgisi yer alır. |
| 8 | `SIGORTACI_KODU` | TDBCARIKOD | evet |  | Sigortacı kodu bilgisi yer alir. |
| 9 | `GOZLEMCI_KODU` | TDBCARIKOD | evet |  | Gözlemci kodu bilgisi yer alir. |
| 10 | `SEVK_YERI` | varchar(50) | evet |  | Sevk yeri bilgisi yer alir. |
| 11 | `SEVK_TARIHI` | TDBDATETIME | evet |  | Sevk tarihi bilgisi yer alir. |
| 12 | `YUKLEME_YERI` | varchar(50) | evet |  | Yükleme yeri bilgisi yer alır. |
| 13 | `YUKLEME_TARIHI` | TDBDATETIME | evet |  | Yükleme tarihi bilgisi yer alır. |
| 14 | `TRANSFER_YERI` | varchar(50) | evet |  | Transfer yeri bilgisi yer alır. |
| 15 | `TRANSFER_TARIHI` | TDBDATETIME | evet |  | Transfer tarihi bilgisi yer alır. |
| 16 | `VARIS_TARIHI` | TDBDATETIME | evet |  | Varış tarihi bilgisi yer alır. |
| 17 | `BOSLATMA_TARIHI` | TDBDATETIME | evet |  | Boşaltma tarihi bilgisi yer alır. |
| 18 | `ARAC_ISMI` | varchar(50) | evet |  | Araç ismi bilgisi yer alır. |
| 19 | `BAYRAK` | varchar(50) | evet |  | Bayrak bilgisi yer alır. |
| 20 | `SEFERNO` | varchar(50) | evet |  | Seferno bilgisi yer alır. |
| 21 | `NAKLIYETIPI` | varchar(50) | evet |  | Nakliye tipi bilgisi yer alır. Kara-3,deniz-1,hava-4,2-demiryolu programdaki sırayla gitmektedir. |
| 22 | `VARIS_YERI` | varchar(50) | evet |  | Varış yeri bilgisi yer alır. |
| 23 | `VARIS_LIMAN` | varchar(50) | evet |  | Varış liman bilgisi yer alır. |
| 24 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 25 | `DOVIZ_TIPI` | TDBSMALLINT | evet |  | Döviz tipi bilgisi yer alır. |
| 26 | `DOV_TUT` | TDBFLOAT | evet |  | Döviz tutarı bilgisi yer alır. |
| 27 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisi yer alır. |
| 28 | `BEYAN_DOVIZ_TIPI` | TDBSMALLINT | evet |  | Beyan Döviz tipi bilgisi yer alır. |
| 29 | `BEYAN_DOV_TUT` | TDBFLOAT | evet |  | Beyan Döviz tutarı bilgisi yer alır. |
| 30 | `BEYAN_TUTAR` | TDBFLOAT | evet |  | Beyan tutar bilgisi yer alır. |
| 31 | `GOZLEMNO` | varchar(50) | evet |  | Gozlemno bilgisi yer alır. |
| 32 | `GUMRUK_KODU` | varchar(15) | evet |  | Gümrük kodu bilgisi yer alır. |
| 33 | `ACIKLAMA` | varchar(255) | evet |  | Açıklama bilgisi yer alır. |
| 34 | `KONTEYNERTIP1` | varchar(50) | evet |  | Konteynertip 1 bilgisi yer alır. |
| 35 | `KONTEYNERTIP2` | varchar(50) | evet |  | Konteynertip 2 bilgisi yer alır. |
| 36 | `KONTEYNERTIP3` | varchar(50) | evet |  | Konteynertip 3 bilgisi yer alır. |
| 37 | `KONTEYNERTIP4` | varchar(50) | evet |  | Konteynertip 4 bilgisi yer alır. |
| 38 | `KONTEYNERTIP5` | varchar(50) | evet |  | Konteynertip 5 bilgisi yer alır. |
| 39 | `KONTEYNERADET1` | TDBINTEGER | evet |  | Konteyneradet 1 bilgisi yer alır. |
| 40 | `KONTEYNERADET2` | TDBINTEGER | evet |  | Konteyneradet 2 bilgisi yer alır. |
| 41 | `KONTEYNERADET3` | TDBINTEGER | evet |  | Konteyneradet 3 bilgisi yer alır. |
| 42 | `KONTEYNERADET4` | TDBINTEGER | evet |  | Konteyneradet 4 bilgisi yer alır. |
| 43 | `KONTEYNERADET5` | TDBINTEGER | evet |  | Konteyneradet 5 bilgisi yer alır. |
| 44 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 45 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 46 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 47 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 48 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 49 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 50 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 59 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, CARI_KOD, FTIRSIP, ACENTA_KODU, TASIYICI_KODU
FROM dbo.TBLIHRNAKLIYETRA WITH (NOLOCK);
```
