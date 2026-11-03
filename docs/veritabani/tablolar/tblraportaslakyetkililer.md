---
title: TBLRAPORTASLAKYETKILILER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblraportaslakyetkililer/
---

# TBLRAPORTASLAKYETKILILER

> Açıklama yok.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `RAPORTASLAKBILGI_ID` | TDBINTEGER | hayır |  | TBLRAPORTASLAK-Inckey numarası alınana karşılık gelir. |
| 3 | `YETKILI` | varchar(50) | evet |  | Yetkili kullanıcılara ait grup kodu bilgisi yer alır. |
| 4 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 5 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 6 | `C_YEDEK3` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 7 | `C_YEDEK4` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 8 | `I_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 9 | `I_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, RAPORTASLAKBILGI_ID, YETKILI, C_YEDEK1, C_YEDEK2, C_YEDEK3
FROM dbo.TBLRAPORTASLAKYETKILILER WITH (NOLOCK);
```
