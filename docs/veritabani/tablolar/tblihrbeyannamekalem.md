---
title: TBLIHRBEYANNAMEKALEM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrbeyannamekalem/
---

# TBLIHRBEYANNAMEKALEM

> İHRACAT GÜMRÜK BEYANNAME KALEM BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `GB_NUMARA` | varchar(50) | hayır |  | GÇB No bilgisi yer alır. |
| 3 | `MENSEI` | varchar(4) | evet |  | Menşei bilgisi yer alır. |
| 4 | `GTIP` | varchar(35) | evet |  | Gümrük Tarife Kodu bilgisi yer alır. |
| 5 | `REJIMKODU` | varchar(15) | evet |  | Rejim bilgisi yer alır. |
| 6 | `KIYMETBEDELI` | TDBFLOAT | evet |  | İst Kıy. Bedeli bilgisi yer alır. |
| 7 | `NETKG` | TDBFLOAT | evet |  | Net Kg bilgisi yer alır. |
| 8 | `BRTKG` | TDBFLOAT | evet |  | Brüt Kg bilgisi yer alır. |
| 9 | `ACIK1` | varchar(255) | evet |  | Açıklama 1 bilgisi yer alır. |
| 10 | `ACIK2` | varchar(255) | evet |  | açıklama 2 bilgisi yer alır. |
| 11 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube Kodu bilgisi yer alır. |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, GB_NUMARA, MENSEI, GTIP, REJIMKODU, KIYMETBEDELI
FROM dbo.TBLIHRBEYANNAMEKALEM WITH (NOLOCK);
```
