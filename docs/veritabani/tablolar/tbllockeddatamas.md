---
title: TBLLOCKEDDATAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbllockeddatamas/
---

# TBLLOCKEDDATAMAS

> KİLİTLENEN BELGELERE AİT VERİLER YER ALIR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 18

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey no bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `MODUL_NO` | TDBINTEGER | evet |  | Modül numarası bilgisi yer alır. |
| 5 | `PROGRAM_NO` | TDBINTEGER | evet |  | Program numarası bilgisi yer alır. |
| 6 | `KEYDATA` | varchar(255) | evet |  | Kilitlenen belgeye ait key bilgisi yer alır. |
| 7 | `USERID` | TDBINTEGER | hayır |  | Kullanıcı numarası bilgisi yer alır. |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `KILIT_DURUMU` | TDBSMALLINT | evet |  | Kilit durumunu gösterir. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MODUL_NO, PROGRAM_NO, KEYDATA
FROM dbo.TBLLOCKEDDATAMAS WITH (NOLOCK);
```
