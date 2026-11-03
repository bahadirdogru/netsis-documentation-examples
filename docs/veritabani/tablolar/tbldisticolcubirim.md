---
title: TBLDISTICOLCUBIRIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldisticolcubirim/
---

# TBLDISTICOLCUBIRIM

> İHRAÇ KAYITLI FATURA LİSTESİ BİRİM EŞLEŞTİRME KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 17

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan Inckeyno bilgisidir. |
| 2 | `NETSISUNITCODE` | varchar(2) | hayır |  | Ölçü birimi bilgisi yer alır. |
| 3 | `UNITCODE` | varchar(3) | hayır |  | Uluslararası ölçü birim koduna karşılık gelen evrensel koddur |
| 4 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 5 | `KAYITTARIHI` | datetime | evet |  | Kayıt tarihi bilgisi yer alır. |
| 6 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 7 | `DUZELTMETARIHI` | datetime | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 8 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, NETSISUNITCODE, UNITCODE, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLDISTICOLCUBIRIM WITH (NOLOCK);
```
