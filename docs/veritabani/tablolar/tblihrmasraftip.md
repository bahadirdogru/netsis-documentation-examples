---
title: TBLIHRMASRAFTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrmasraftip/
---

# TBLIHRMASRAFTIP

> MASRAF TİP TANIMLAMALARI KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(50) | hayır |  | Masraf Kodu bilgisi yer alır. |
| 2 | `GRUP` | varchar(50) | evet |  | Masraf Grup Kodu bilgisi yer alır. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 4 | `MUH_KOD` | TDBMUHKOD | evet |  | Muhasebe kodu bilgisi yer alır. |
| 5 | `KDVORAN` | TDBINTEGER | evet |  | Kdv oran bilgisi yer alır. |
| 6 | `INDKDV` | char(1) | evet |  | İndirilecek KDV'de kullanılsın işaretli ise E değerini alır. |
| 7 | `MALBEDELHESABI` | char(1) | evet |  | Mal bedeli hesabı işaretli ise E değerini alır. |
| 8 | `ITHIHRTIP` | TDBSMALLINT | evet |  | sadece ihracat-0,sadece ithalat-1, ithalar ve ihracat ortak (-1) |
| 9 | `BEYANNAMEDEGOSTER` | char(1) | evet |  | Beyanname masraflarında gösterilsin işaretli ise E değerini alır. |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, GRUP, ACIKLAMA, MUH_KOD, KDVORAN, INDKDV
FROM dbo.TBLIHRMASRAFTIP WITH (NOLOCK);
```
