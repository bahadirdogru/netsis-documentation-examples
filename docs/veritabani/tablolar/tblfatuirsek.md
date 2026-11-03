---
title: TBLFATUIRSEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuirsek/
---

# TBLFATUIRSEK

> İNDİRİLECEK KDV EKRANINDAKİ BİLGİLER YER ALIR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEY_NO` | TDBINTEGER | hayır |  | Program tarafından atanan ID değeridir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 4 | `FTIRSIP` | char(1) | hayır |  | 2-alış faturası |
| 5 | `FATIRS_NO` | varchar(15) | hayır |  | Fatura numarası bilgisi yer alır. |
| 6 | `CARI_KODU` | TDBCARIKOD | hayır |  | cari kodu bilgisi yer alır. |
| 7 | `FTSERI_NO` | char(3) | evet |  | Seri no bilgisi yer alır. |
| 8 | `FTFIS_NO` | varchar(20) | evet |  | Seri no bilgisinden sonraki fatura numarası bilgisi yer alır. |
| 9 | `CARIUNVAN` | varchar(100) | evet |  | cari ünvan bilgisi yer alır. |
| 10 | `CARIKIMLIKVERGI_NO` | varchar(15) | evet |  | cari vergi kimlik numarası bilgisi yer alır. |
| 11 | `MALCINS` | TDBMEMO | evet |  | Mal cinsi bligisi yer alır. |
| 12 | `MALMIKTAR` | TDBMEMO | evet |  | Miktar bilgileri yer alır. |
| 13 | `GGB_NO` | varchar(16) | evet |  | Gümrük Giriş Beyannamesi Tescil Numarası yer alır. |
| 14 | `ARACIKIMLIKVERGI_NO` | varchar(15) | evet |  | İhracatına aracılık edilen firmanın vergi kimlik numarası bilgisi yer alır. |
| 15 | `KDVDONEMI` | varchar(6) | evet |  | İndirim hakkının kullanıldığı KDV dönemi bilgisi yer alır. |
| 16 | `C_YEDEK1` | char(1) | evet |  | Yedek sahadır. |
| 17 | `C_YEDEK2` | char(1) | evet |  | Yedek sahadır. |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Yedek sahadır. |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Yedek sahadır. |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Yedek sahadır. |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Yedek sahadır. |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Yedek sahadır. |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Yedek sahadır. |
| 24 | `S_YEDEK1` | varchar(50) | evet |  | Yedek sahadır. |
| 25 | `S_YEDEK2` | varchar(50) | evet |  | Yedek sahadır. |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır |
| 30 | `VERGI_DAIRESI` | varchar(50) | evet |  | Vergi dairesi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEY_NO, SUBE_KODU, ISLETME_KODU, FTIRSIP, FATIRS_NO, CARI_KODU
FROM dbo.TBLFATUIRSEK WITH (NOLOCK);
```
