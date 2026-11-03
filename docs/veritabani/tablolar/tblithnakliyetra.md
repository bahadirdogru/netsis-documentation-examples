---
title: TBLITHNAKLIYETRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithnakliyetra/
---

# TBLITHNAKLIYETRA

> İTHALAT NAKLİYE BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 61

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `FTIRSIP` | varchar(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 5 | `ACENTA_KODU` | TDBCARIKOD | evet |  | Acenta kodu bilgisi yer alır. |
| 6 | `TASIYICI_KODU` | TDBCARIKOD | evet |  | Taşıyıcı kodu bilgisi yer alır. |
| 7 | `TEMSILCI_KODU` | TDBCARIKOD | evet |  | Temsilci kodu bilgisi yer alır. |
| 8 | `SIGORTACI_KODU` | TDBCARIKOD | evet |  | Sigortacı kodu bilgisi yer alır. |
| 9 | `SEVK_YERI` | varchar(50) | evet |  | Sevk yeri bilgisi yer alır. |
| 10 | `SEVK_TARIHI` | TDBDATETIME | evet |  | Sevk tarihi bilgisi yer alır. |
| 11 | `YUKLEME_YERI` | varchar(50) | evet |  | Yükleme yeri bilgisi yer alır. |
| 12 | `YUKLEME_TARIHI` | TDBDATETIME | evet |  | Yükleme tarihi bilgisi yer alır. |
| 13 | `TRANSFER_YERI` | varchar(50) | evet |  | Transfer yeri bilgisi yer alır. |
| 14 | `TRANSFER_TARIHI` | TDBDATETIME | evet |  | Transfer tarihi bilgisi yer alır. |
| 15 | `VARIS_TARIHI` | TDBDATETIME | evet |  | Varış tarihi bilgisi yer alır. |
| 16 | `BOSLATMA_TARIHI` | TDBDATETIME | evet |  | Boşaltma tarihi bilgisi yer alır. |
| 17 | `ARAC_ISMI` | varchar(50) | evet |  | NULL |
| 18 | `BAYRAK` | varchar(50) | evet |  | NULL |
| 19 | `SEFERNO` | varchar(50) | evet |  | NULL |
| 20 | `NAKLIYETIPI` | varchar(50) | evet |  | NULL |
| 21 | `VARIS_YERI` | varchar(50) | evet |  | Varış Yeri bilgisi yer alır. |
| 22 | `VARIS_LIMAN` | varchar(50) | evet |  | Varış Liman bilgisi yer alır. |
| 23 | `TARIH` | smalldatetime | evet |  | Navlun tutar bilgilerindeki tarih bilgisi yer alır. |
| 24 | `DOVIZ_TIPI` | smallint | evet |  | Navlun tutar bilgilerindeki döviz tipi bilgisi yer alır. |
| 25 | `DOV_TUT` | TDBFLOAT | evet |  | Navlun tutar bilgilerindeki döviz tutarı bilgisi yer alır. |
| 26 | `TUTAR` | TDBFLOAT | evet |  | NULL |
| 27 | `BEYAN_DOVIZ_TIPI` | smallint | evet |  | NULL |
| 28 | `BEYAN_DOV_TUT` | TDBFLOAT | evet |  | Beyan edilen nakliye döviz tutarı bilgisi yer alır. |
| 29 | `BEYAN_TUTAR` | TDBFLOAT | evet |  | NULL |
| 30 | `GOZLEMCI_KODU` | TDBCARIKOD | evet |  | Gözetim şirketi bilgisi yer alır. |
| 31 | `GOZLEMNO` | varchar(50) | evet |  | Gözetim rapor No bilgisi yer alır. |
| 32 | `GUMRUK_KODU` | TDBCARIKOD | evet |  | NULL |
| 33 | `ACIKLAMA` | varchar(255) | evet |  | NULL |
| 34 | `GOZETIMMIK` | TDBFLOAT | evet |  | Gözetim Kg/Lb bilgisi yer alır. |
| 35 | `GUMRUKMIK` | TDBFLOAT | evet |  | Gümrük Kg bilgisi yer alır. |
| 36 | `GOZETIMFARK` | TDBFLOAT | evet |  | Gazetim fark bilgisi yer alır. |
| 37 | `LINEROUT` | char(1) | evet |  | NULL |
| 38 | `FREEOUT` | char(1) | evet |  | NULL |
| 39 | `GOZETIMACIK` | varchar(50) | evet |  | Gözetim bilgileri açıklama bilgisi yer alır. |
| 40 | `ICNAKLIYE_ACENTA` | TDBCARIKOD | evet |  | Dahili nakliye bilgilerindeki acenta kodu yer alır. |
| 41 | `ICNAKLIYE_TUTAR` | TDBFLOAT | evet |  | Dahili nakliye bilgilerindeki TL tutar yer alır. |
| 42 | `ICNAKLIYE_TIRADET` | TDBINTEGER | evet |  | Dahili nakliye bilgilerindeki tır adet bilgisi yer alır. |
| 43 | `ICNAKLIYE_KAMYONADET` | TDBINTEGER | evet |  | Dahili nakliye bilgilerindeki kamyon adet bilgisi yer alır. |
| 44 | `TAHMINI_VARISTARIH` | TDBDATETIME | evet |  | Gümrüğe varış tarihi bilgisi yer alır. |
| 45 | `GOZETIMBIRIM` | varchar(3) | evet |  | Gözetim bilgilerindeki birim bilgisi yer alır. |
| 46 | `SUBE_KODU` | smallint | hayır |  | Şube kodu bilgisi yer alır. |
| 47 | `INCKEYNO` | int | hayır |  | Inckey numarası bilgisi yer alır. |
| 48 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 49 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 50 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 51 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 52 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 59 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 60 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, CARI_KOD, FTIRSIP, ACENTA_KODU, TASIYICI_KODU
FROM dbo.TBLITHNAKLIYETRA WITH (NOLOCK);
```
