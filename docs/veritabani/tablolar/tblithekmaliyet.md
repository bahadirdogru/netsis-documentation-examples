---
title: TBLITHEKMALIYET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithekmaliyet/
---

# TBLITHEKMALIYET

> İTHALAT EK MALİYET BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 2 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kod bilgisi yer alır. |
| 3 | `FTIRSIP` | varchar(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 4 | `DOSYANO` | varchar(20) | evet |  | Dosya numarası bilgisi yer alır. |
| 5 | `ACIKLAMA1` | varchar(50) | evet |  | Açıklama 1 bilgisi yer alır. |
| 6 | `ACIKLAMA2` | varchar(50) | evet |  | Açıklama 2 bilgisi yer alır. |
| 7 | `DOVTUT` | TDBFLOAT | evet |  | Döviz tutarı bilgisi yer alır. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | tutar bilgisi yer alır. |
| 9 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Parçalı ithalat işareli ise E değerini alır. |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 FATIRS_NO, CARI_KOD, FTIRSIP, DOSYANO, ACIKLAMA1, ACIKLAMA2
FROM dbo.TBLITHEKMALIYET WITH (NOLOCK);
```
