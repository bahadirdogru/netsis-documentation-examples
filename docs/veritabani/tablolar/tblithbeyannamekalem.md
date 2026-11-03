---
title: TBLITHBEYANNAMEKALEM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithbeyannamekalem/
---

# TBLITHBEYANNAMEKALEM

> İTHALAT GÜMRÜK BEYANNAME KALEM BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır |
| 2 | `GB_NUMARA` | varchar(50) | hayır |  | GGB No bilgisi yer alır. |
| 3 | `MENSEI` | varchar(4) | evet |  | Menşei bilgisi yer alır. |
| 4 | `GTIP` | varchar(35) | evet |  | Gümrük tarife kodu bilgisi yer alır. |
| 5 | `REJIMKODU` | varchar(15) | evet |  | Rejim bilgisi yer alır. |
| 6 | `KIYMETBEDELI` | TDBFLOAT | evet |  | İst Kıy. Bedeli bilgisi yer alır. |
| 7 | `TUTAR` | TDBFLOAT | evet |  | Döviz tutar bilgisi yer alır. |
| 8 | `NETKG` | TDBFLOAT | evet |  | Net KG bilgisi yer alır. |
| 9 | `BRTKG` | TDBFLOAT | evet |  | Brüt Kg bilgisi yer alır. |
| 10 | `GVORAN` | TDBFLOAT | evet |  | Gümrük vergisi oranı yer alır. |
| 11 | `ACIK1` | varchar(255) | evet |  | Açıklama 1 bilgisi yer alır. |
| 12 | `ACIK2` | varchar(255) | evet |  | Açıklama 2 bilgisi yer alır. |
| 13 | `DIIBNO` | varchar(20) | evet |  | DIBB/Teşvik No bilgisi yer alır. |
| 14 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, GB_NUMARA, MENSEI, GTIP, REJIMKODU, KIYMETBEDELI
FROM dbo.TBLITHBEYANNAMEKALEM WITH (NOLOCK);
```
