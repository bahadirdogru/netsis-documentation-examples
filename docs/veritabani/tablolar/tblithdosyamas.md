---
title: TBLITHDOSYAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithdosyamas/
---

# TBLITHDOSYAMAS

> İTHALAT DOSYA BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 28

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 3 | `CARI_KOD2` | TDBCARIKOD | evet |  | Cari kod 2 bilgisi yer alır. |
| 4 | `FATIRS_NO` | TDBBELGENO | evet |  | Fatura numarası bilgisi yer alır. |
| 5 | `FTIRSIP` | char(1) | evet |  | TBLFATUIRS-FTIRSIP alanları ile aynı değeri alır. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 7 | `TIP` | TDBSMALLINT | hayır |  | 0 |
| 8 | `TESLIMSEKLI` | TDBSMALLINT | evet |  | Teslim şekli bilgisi yer alır. |
| 9 | `ODENDI` | char(1) | evet |  | Ödendi işaretli ise E değerini alır. |
| 10 | `KAPALI` | char(1) | evet |  | Kapalı işaretli ise E değerini alır. |
| 11 | `REF_DOSYANO` | TDBBELGENO | evet |  | NULL |
| 12 | `BELGE_TIP` | varchar(1) | evet |  | NULL |
| 13 | `ACIKLAMA` | varchar(500) | evet |  | Açıklama bilgisi yer alır. |
| 14 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 19 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK2` | char(1) | evet |  | Parçalı ithalat işareli ise E değerini alır. |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, CARI_KOD, CARI_KOD2, FATIRS_NO, FTIRSIP, TARIH
FROM dbo.TBLITHDOSYAMAS WITH (NOLOCK);
```
