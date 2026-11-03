---
title: TBLFONSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfonsabit/
---

# TBLFONSABIT

> Banka\Kayıt\Fon İşlemleri\Fon Tanımlama Ekranında Girilen Ait Bilgilerin Tutulduğu Tablodur.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 11

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(50) | hayır |  | Fon kodu bilgisi yer alır. |
| 2 | `NETBANKAKODU` | varchar(10) | hayır |  | Fona ait tanımlanan banka kodu bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(200) | evet |  | Fon açıklama bilgisinin girildiği alandır. |
| 4 | `ONAYTIPI` | char(1) | hayır |  | Onay tipi bilgisi yer alır. |
| 5 | `ONAYNUM` | TDBINTEGER | hayır |  | Onay numarası bilgii yer alır. |
| 6 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 9 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt tarihi bilgisi yer alır. |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 11 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, NETBANKAKODU, ACIKLAMA, ONAYTIPI, ONAYNUM, ISLETME_KODU
FROM dbo.TBLFONSABIT WITH (NOLOCK);
```
