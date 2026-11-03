---
title: TBLSTMGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstmgrup/
---

# TBLSTMGRUP

> STOK KARTI KAYITLARINDAKİ EK BİLGİLER MALİYET BİLGİLERİ MAMUL GRUP BİLGİLERİ YER ALIR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi yer alır. |
| 2 | `MGRUP` | varchar(35) | hayır |  | Mamul grup bilgisi yer alır. |
| 3 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 4 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 5 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 6 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 STOKKODU, MGRUP, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLSTMGRUP WITH (NOLOCK);
```
