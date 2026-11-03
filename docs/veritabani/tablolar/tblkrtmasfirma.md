---
title: TBLKRTMASFIRMA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtmasfirma/
---

# TBLKRTMASFIRMA

> Firma kredi kartı bilgileri yer alır.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `KRTKODU` | TDBBELGENO | hayır |  | Kart kodu bilgisi yer alır. |
| 3 | `KRTNUMARA` | varchar(16) | evet |  | Kart numarası bilgisi yer alır. |
| 4 | `EKKART` | char(1) | evet |  | Ek kartın işaretli olup olmadığı bilgisi yer alır. |
| 5 | `BAGLIKARTNO` | TDBBELGENO | evet |  | Bağlı olduğu kart bilgisi yer alır. |
| 6 | `KARTLIMITI` | TDBFLOAT | evet |  | Kart limit tutarı yer alır. |
| 7 | `LIMITKONTROL` | char(1) | evet |  | Limit kontrolü yapılsın parametresi yer alır. |
| 8 | `SONKULLANMAAY` | TDBINTEGER | evet |  | Son kullanma tarihi ay bilgisi yer alır. |
| 9 | `SONKULLANMAYIL` | TDBINTEGER | evet |  | Son kullanma tarihi yıl bilgisi yer alır. |
| 10 | `HESKESIMGUNU` | TDBINTEGER | evet |  | Hesap kesim günü bilgisi yer alır. |
| 11 | `ODEMEGUNU` | TDBINTEGER | evet |  | Ödeme günü bilgisi yer alır. |
| 12 | `HESOZETMUHKODU` | TDBMUHKOD | evet |  | Hesap özeti muh kodu bilgisi yer alır. |
| 13 | `VERILENPERSONEL` | varchar(15) | evet |  | Verilen personel bilgisi yer alır. |
| 14 | `FAIZMUHKODU` | TDBMUHKOD | evet |  | Faiz muhasebe kodu bilgisi yer alır. |
| 15 | `KREDIKARTBANKAHES` | varchar(15) | evet |  | Kredi kartı banka hesap kodu bilgisi yer alır. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KRTKODU, KRTNUMARA, EKKART, BAGLIKARTNO, KARTLIMITI
FROM dbo.TBLKRTMASFIRMA WITH (NOLOCK);
```
