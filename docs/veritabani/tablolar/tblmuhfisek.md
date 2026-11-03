---
title: TBLMUHFISEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhfisek/
---

# TBLMUHFISEK

> MUHASEBE FİŞLERİNE AİT KAYNAK BİLGİLERİN TUTULDUĞU TABLODUR. EDEFTER HAZIRLIK İLE DE BU TABLODA KAYITLAR OLUŞTURULABİLİR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 35

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEY_NO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `MUHAY_KODU` | TDBBYTE | hayır |  | TBLMUHFIS-AY_KODU kolonuna karşılık gelir. |
| 4 | `MUHFISNO` | TDBBELGENO | hayır |  | TBLMUHFIS-FISNO kolonuna karşılık gelir. |
| 5 | `MUHSIRA` | TDBINTEGER | hayır |  | TBLMUHFIS-SIRA kolonuna karşılık gelir. |
| 6 | `FTSERI_NO` | char(3) | evet |  | NULL |
| 7 | `FTFIS_NO` | varchar(20) | evet |  | NULL |
| 8 | `CARIUNVAN` | varchar(100) | evet |  | NULL |
| 9 | `CARIKIMLIKVERGI_NO` | varchar(15) | evet |  | NULL |
| 10 | `MALCINS` | TDBMEMO | evet |  | NULL |
| 11 | `MALMIKTAR` | TDBMEMO | evet |  | NULL |
| 12 | `GGB_NO` | varchar(16) | evet |  | NULL |
| 13 | `ARACIKIMLIKVERGI_NO` | varchar(15) | evet |  | NULL |
| 14 | `KDVDONEMI` | varchar(6) | evet |  | NULL |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Ödeme türü bilgisi yer alır. |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 29 | `VERGI_DAIRESI` | varchar(50) | evet |  | NULL |
| 30 | `AYSIRA` | TDBINTEGER | evet |  | Resmi madde numarası bilgisi yer alır. |
| 31 | `BELGE_TIPI` | varchar(50) | evet |  | Belge tipi bilgisi yer alır. |
| 32 | `BELGE_NO` | varchar(25) | evet |  | Belge numarası bilgisi yer alır. |
| 33 | `TARIH` | TDBDATETIME | evet |  | Tarih bligisi yer alır. |
| 34 | `ISLEM_TIPI` | TDBBYTE | evet |  | 1 |
| 35 | `KAYNAKDOVKUR` | varchar(100) | evet |  | Kurun kaynağı bilgisi yer alır.amountOriginalExchangeRateSource |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEY_NO, SUBE_KODU, MUHAY_KODU, MUHFISNO, MUHSIRA, FTSERI_NO
FROM dbo.TBLMUHFISEK WITH (NOLOCK);
```
