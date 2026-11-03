---
title: TBLIHRDIIBMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrdiibmas/
---

# TBLIHRDIIBMAS

> TEŞVİK BİLGİLERİ-DIIB ve YATIRIM KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIIB_NO` | varchar(35) | hayır |  | DDIB No bilgisi tutulur. |
| 2 | `GTIP_NO` | varchar(35) | hayır |  | Gümrük Tarife Kodu bilgisi yer alır. |
| 3 | `BELGE_TARIH` | TDBDATETIME | evet |  | Belge alış tarihi bilgisi yer alır. |
| 4 | `BAS_TAR` | smalldatetime | evet |  | Başlangıç tarihi bilgisi yer alır. |
| 5 | `BIT_TAR` | smalldatetime | evet |  | Bitiş tarihi bilgisi yer alır. |
| 6 | `ADET` | TDBINTEGER | evet |  | Miktar bilgisi yer alır. |
| 7 | `ACIKLAMA` | varchar(250) | evet |  | Açıklama bilgisi yer alır. |
| 8 | `GRUP1` | varchar(10) | evet |  | Grup 1 bilgisi yer alır. |
| 9 | `GRUP2` | varchar(10) | evet |  | Grup 2 bilgisi yer alır. |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alırç |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 15 | `C_YEDEK1` | char(1) | evet |  | Dahilde İşleme İzin Belgesi-D, Yatırım-Y |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DIIB_NO, GTIP_NO, BELGE_TARIH, BAS_TAR, BIT_TAR, ADET
FROM dbo.TBLIHRDIIBMAS WITH (NOLOCK);
```
