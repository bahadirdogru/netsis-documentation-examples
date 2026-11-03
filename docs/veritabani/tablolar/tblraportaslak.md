---
title: TBLRAPORTASLAK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblraportaslak/
---

# TBLRAPORTASLAK

> Raporların taslak hallerinin (sakla oku ) ilgili veritabanında tutulma desteği sağlanmıştır.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 28

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `KULNO` | TDBINTEGER | hayır |  | Kullanıcı numarası bilgisi yer alır. |
| 5 | `RAPFORDATA_SIRANO` | TDBINTEGER | hayır |  | Rapfordata tablosunda sıra numarası bilgisi yer alır. |
| 6 | `YETKI_TIPI` | TDBSMALLINT | evet |  | Yetki tipi bilgisi yer alır. |
| 7 | `MODUL_NO` | TDBSMALLINT | evet |  | Modül numarası bilgisi yer alır. |
| 8 | `PROGRAM_NO` | TDBSMALLINT | evet |  | Program numarası bilgisi yer alır. |
| 9 | `TASLAK_TIPI` | TDBSMALLINT | evet |  | Taslak tipi yer alır. 0 |
| 10 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `C_YEDEK3` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `C_YEDEK4` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 26 | `MODUL_RAPORUNA_EKLE` | char(1) | evet |  | Serbest Rapor ve Görsel Raporlara Modül Raporları Altından Erişilebilmesi için eklenen sahadır. |
| 27 | `RAPORUNA_EKLENEN_MODULNO` | TDBSMALLINT | evet |  | Serbest Rapor ve Görsel Raporlara Modül Raporları Altından Erişilebilmesi için eklenen sahadır. |
| 28 | `RAPORUNA_EKLENEN_PROGNO` | TDBSMALLINT | evet |  | Serbest Rapor ve Görsel Raporlara Modül Raporları Altından Erişilebilmesi için eklenen sahadır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, KULNO, RAPFORDATA_SIRANO, YETKI_TIPI
FROM dbo.TBLRAPORTASLAK WITH (NOLOCK);
```
