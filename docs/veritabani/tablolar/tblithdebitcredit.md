---
title: TBLITHDEBITCREDIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithdebitcredit/
---

# TBLITHDEBITCREDIT

> İTHALAT DEBIT/CREDIT NOTE BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 3 | `TIP` | char(1) | evet |  | Debit-B,credit-A |
| 4 | `DUZENLEYEN` | varchar(15) | evet |  | Düzenleyen bilgisi yer alır. |
| 5 | `DEBITNOTE` | varchar(15) | evet |  | DN/CN No bilgisi yer alır |
| 6 | `DOVTIP` | TDBSMALLINT | evet |  | Döviz tipi bilgisi yer alır. |
| 7 | `TUTAR` | TDBFLOAT | evet |  | NULL |
| 8 | `DOVTUT` | TDBFLOAT | evet |  | Döviz tutar bilgisi yer alır. |
| 9 | `ODEMETARIH` | TDBDATETIME | evet |  | Ödeme tarihi bilgisi yer alır. |
| 10 | `TARIH` | TDBDATETIME | evet |  | DN/CN Tarih bilgisi yer alır. |
| 11 | `ACIKLAMA1` | varchar(255) | evet |  | DN/CN Açıklama bilgisi yer alır. |
| 12 | `ACIKLAMA2` | varchar(255) | evet |  | Ödeme açıklama bilgisi yer alır. |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 24 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 25 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 26 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, DOSYANO, TIP, DUZENLEYEN, DEBITNOTE, DOVTIP
FROM dbo.TBLITHDEBITCREDIT WITH (NOLOCK);
```
