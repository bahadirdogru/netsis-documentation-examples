---
title: TBLBNKDESENMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkdesenmas/
---

# TBLBNKDESENMAS

> BANKA-İŞLEMLER-DOSYA DESEN OLUŞTURMA BÖLÜMÜNDEKİ DESEN BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `DESEN_KODU` | varchar(35) | evet |  | Desen kodu bilgisi yer alır. |
| 5 | `DESEN_ADI` | varchar(100) | evet |  | Desen adı bilgisi yer alır. |
| 6 | `TURU` | TDBBYTE | hayır |  | 0 |
| 7 | `DESENTIPI` | TDBBYTE | hayır |  | 0-aktarım,1-akıbet |
| 8 | `DOSYATIPI` | TDBBYTE | hayır |  | 0 |
| 9 | `DOSYA_ADI` | varchar(255) | evet |  | Dosya yolu bilgisi yer alır. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 14 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `DOSYA_ADI_OLUSTURULSUN` | TDBBYTE | evet |  | Banka desen dosya adı oluşturulma bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, DESEN_KODU, DESEN_ADI, TURU
FROM dbo.TBLBNKDESENMAS WITH (NOLOCK);
```
