---
title: TBLIHRDOSYAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrdosyamas/
---

# TBLIHRDOSYAMAS

> İHRACAT DOSYA BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi tutulur. |
| 2 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 3 | `CARI_KOD2` | TDBCARIKOD | evet |  | Teslim cari bilgisi yer alır. |
| 4 | `FATIRS_NO` | TDBBELGENO | evet |  | Fatura numarası bilgisi yer alır. |
| 5 | `FTIRSIP` | char(1) | evet |  | TBLFATUIRS-FTIRSIP alanları ile aynı değeri alır. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 7 | `TIP` | TDBSMALLINT | hayır |  | 0 |
| 8 | `ODENDI` | char(1) | evet |  | Ödendi işaretli ise E değerini alır. |
| 9 | `KAPALI` | char(1) | evet |  | Kapalı işaretli ise E değerini alır. |
| 10 | `REF_DOSYANO` | TDBBELGENO | evet |  | NULL |
| 11 | `BELGE_TIP` | varchar(1) | evet |  | NULL |
| 12 | `ACIKLAMA` | varchar(500) | evet |  | Açıklama bilgisi yer alır. |
| 13 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, CARI_KOD, CARI_KOD2, FATIRS_NO, FTIRSIP, TARIH
FROM dbo.TBLIHRDOSYAMAS WITH (NOLOCK);
```
