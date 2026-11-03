---
title: TBLURETOPGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretopgrup/
---

# TBLURETOPGRUP

> MRP-İLERİ ÜRETİM ÇİZELGELEME-GRUP KAYITLARI-OPERASYON GRUBU TANIMLAMA BİLGİLERİ YER ALIR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 7

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `GRUP_KOD` | TDBURETGRUPKOD | hayır |  | Grup kodu bilgisi yer alır. |
| 3 | `GRUP_ISIM` | varchar(30) | evet |  | Grup isim bilgisi yer alır. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, GRUP_KOD, GRUP_ISIM, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLURETOPGRUP WITH (NOLOCK);
```
