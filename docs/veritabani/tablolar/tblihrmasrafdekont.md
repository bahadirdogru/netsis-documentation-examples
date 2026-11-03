---
title: TBLIHRMASRAFDEKONT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrmasrafdekont/
---

# TBLIHRMASRAFDEKONT

> MASRAF DEKONTLARINA AİT BİLGİLER TUTULUR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 35

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 2 | `SERI_NO` | varchar(2) | hayır |  | Seri numarası bilgisi yer alır. |
| 3 | `DEKONT_NO` | TDBINTEGER | hayır |  | Dekont_No bilgisi yer alır. |
| 4 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari Kodu bilgisi yer alır. |
| 5 | `MASRAFKOD` | varchar(50) | hayır |  | Masraf Kodu bilgisi yer alır. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 7 | `VADE_TARIHI` | TDBDATETIME | evet |  | Vade tarihi bilgisi yer alır. |
| 8 | `DOV_TIP` | TDBINTEGER | evet |  | Döviz_Tipi bilgisi yer alır. |
| 9 | `DOV_TUT` | TDBFLOAT | evet |  | Döviz_Tutarı bilgisi yer alır. |
| 10 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisi yer alır. |
| 11 | `KDV` | TDBINTEGER | evet |  | Kdv bilgisi yer alır. |
| 12 | `FATIRSNO` | varchar(16) | evet |  | Fatura numarası bilgisi yer alır. |
| 13 | `MAKBUZNO` | varchar(16) | evet |  | Masraf Fatura numarası bilgisi yer alır. |
| 14 | `ACIKLAMA2` | varchar(50) | evet |  | Açıklama 1 bilgisi yer alır. |
| 15 | `BFORMCARI_KODU` | TDBCARIKOD | evet |  | B form cari kodu bilgisi yer alır. |
| 16 | `ACIKLAMA` | varchar(250) | evet |  | Açıklama bilgisi yer alır. |
| 17 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje Kodu bilgisi yer alır. |
| 18 | `REFERANS` | varchar(20) | evet |  | Referans Kodu bilgisi yer alır. |
| 19 | `EXPORTREFNO` | varchar(20) | evet |  | Export Ref. No bilgisi yer alır. |
| 20 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Sube Kodu bilgisi yer alır. |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 25 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK2` | TDBFLOAT | evet |  | Miktar bilgisi tutulur. |
| 31 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `S_YEDEK1` | varchar(50) | evet |  | Açıklama 2 bilgisi yer alır. |
| 34 | `S_YEDEK2` | varchar(50) | evet |  | Açıklama 3 bilgisi yer alır. |
| 35 | `BELGE_TIPI` | varchar(15) | evet |  | Belge türü bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SERI_NO, DEKONT_NO, CARI_KODU, MASRAFKOD, TARIH
FROM dbo.TBLIHRMASRAFDEKONT WITH (NOLOCK);
```
