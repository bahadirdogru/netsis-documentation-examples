---
title: TBLIHRKONSIMENTO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrkonsimento/
---

# TBLIHRKONSIMENTO

> İHRACAT DETAY BİLGİLER EKRANINDAKİ KONŞİMENTO BİLGİLERİ TUTULUR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `FTIRSIP` | char(1) | hayır |  | TBLFATUIRS-FTIRSIP alanları ile aynı değeri alır. |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kod bilgisi yer alır. |
| 5 | `KONSIMENTONO` | varchar(50) | evet |  | Konşimento no bilgisi yer alır. |
| 6 | `MAL_CINSI` | varchar(50) | evet |  | Mal cinsi bilgisi yer alır. |
| 7 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 8 | `ACIKLAMA` | varchar(255) | evet |  | Açıklama bilgisi yer alır. |
| 9 | `ACIKLAMA2` | varchar(50) | evet |  | Ödeme Açıklama bilgisi yer alır. |
| 10 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 11 | `SAYFA_ASIL` | TDBINTEGER | evet |  | Asıl bilgisi yer alır. |
| 12 | `SAYFA_NUSA` | TDBINTEGER | evet |  | Nüsha bilgisi yer alır. |
| 13 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, FTIRSIP, CARI_KOD, KONSIMENTONO, MAL_CINSI
FROM dbo.TBLIHRKONSIMENTO WITH (NOLOCK);
```
