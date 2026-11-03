---
title: TBLDEPSAYIMSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldepsayimseri/
---

# TBLDEPSAYIMSERI

> Serili stoklar için dinamik depoda hücre sayım bilgisinde girilen seri bilgileri yer alır.

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYIT_TIPI` | char(1) | evet |  | A |
| 2 | `SERI_NO` | varchar(50) | evet |  | seri numrası bilgii yer alır. |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodu bilgisi yer alır. |
| 4 | `SIRA_NO` | TDBINTEGER | hayır |  | Sıra numarası bilgisi yer alır. |
| 5 | `STRA_INC` | TDBINTEGER | evet |  | TBLDEPSAYIM-İnckey numarası bilgisi yer alır. |
| 6 | `HUCREKODU` | varchar(15) | hayır |  | Hücre kodu bilgisi yer alır. |
| 7 | `TARIH` | TDBDATETIME | evet |  | Sayım tarihi bilgisi yer alır. |
| 8 | `ACIK1` | varchar(50) | evet |  | Açıklama 1 bilgisi yer alır. |
| 9 | `ACIK2` | varchar(50) | evet |  | Açıklama 2 bilgisi yer alır. |
| 10 | `GCKOD` | char(1) | evet |  | G-iriş |
| 11 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 12 | `MIKTAR2` | TDBFLOAT | evet |  | Miktar 2 bilgisi yer alır. |
| 13 | `BELGENO` | TDBBELGENO | evet |  |  |
| 14 | `BELGETIP` | char(1) | evet |  |  |
| 15 | `HARACIK` | varchar(35) | evet |  |  |
| 16 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 17 | `DEPOKOD` | TDBSMALLINT | evet |  | Depo kodu bilgisi yer alır. |
| 18 | `SIPNO` | TDBBELGENO | evet |  |  |
| 19 | `KARSISERI` | varchar(50) | evet |  |  |
| 20 | `YEDEK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK6` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 29 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |
| 30 | `ACIK3` | varchar(100) | evet |  | Açıklama 3 bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 KAYIT_TIPI, SERI_NO, STOK_KODU, SIRA_NO, STRA_INC, HUCREKODU
FROM dbo.TBLDEPSAYIMSERI WITH (NOLOCK);
```
