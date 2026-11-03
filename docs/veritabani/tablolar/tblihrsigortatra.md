---
title: TBLIHRSIGORTATRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrsigortatra/
---

# TBLIHRSIGORTATRA

> İHRACAT DETAY BİLGİLER EKRANINDAKİ SİGORTA BİLGİLERİ TUTULUR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `FTIRSIP` | varchar(1) | hayır |  | P-Proforma diğerleri Tblfatuirs -FTIRSIP ile aynı değerlerdir. |
| 5 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 6 | `DOVIZ_TIPI` | TDBSMALLINT | evet |  | Döviz tipi bilgisi yer alır. |
| 7 | `DOV_TUT` | TDBFLOAT | evet |  | Döviz tutarı bilgisi yer alır. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisi yer alır. |
| 9 | `BEYAN_DOV_TUT` | TDBFLOAT | evet |  | Beyan edilen döviz tutarı bilgisi yer alır. |
| 10 | `BEYAN_TUTAR` | TDBFLOAT | evet |  | Beyan edilen tutar bilgisi yer alır. |
| 11 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi nor alır. |
| 12 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Sube edilen kodu bilgisi nor alır. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Poliçe numarası bilgisi yer alır. |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, CARI_KOD, FTIRSIP, TARIH, DOVIZ_TIPI
FROM dbo.TBLIHRSIGORTATRA WITH (NOLOCK);
```
