---
title: TBLTEVKIFATKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltevkifatkod/
---

# TBLTEVKIFATKOD

> ÇOKLU TEVKİFAT ORAN TANIMLAMA BİLGİLERİ YER ALIR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 22

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `OZELKOD` | char(1) | hayır |  | Kod bilgisi yer alır. |
| 2 | `ACIKLAMA` | varchar(30) | evet |  | Açıklama bilgisi yer alır. |
| 3 | `SATIS_HESAP_KODU` | TDBMUHKOD | evet |  | Satış hesap kodu bilgisi yer alır. |
| 4 | `ALIS_HESAP_KODU` | TDBMUHKOD | evet |  | Alış hesap kodu bilgisi yer alır |
| 5 | `PAY` | TDBSMALLINT | evet |  | Pay bilgisi yer alır. |
| 6 | `PAYDA` | TDBSMALLINT | evet |  | Payda bilgisi yer alır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullancıı bilgisi yer alır. |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `S_YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `S_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 22 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 OZELKOD, ACIKLAMA, SATIS_HESAP_KODU, ALIS_HESAP_KODU, PAY, PAYDA
FROM dbo.TBLTEVKIFATKOD WITH (NOLOCK);
```
