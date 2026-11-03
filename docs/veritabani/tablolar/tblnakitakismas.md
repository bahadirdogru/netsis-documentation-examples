---
title: TBLNAKITAKISMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnakitakismas/
---

# TBLNAKITAKISMAS

> Nakit akış raporundaki veriler yer alır.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 39

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | Program tarafından atanan INCKEYNO bilgisi yer alır |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `RAPORNO` | TDBBELGENO | hayır |  | Rapor numarası bilgisi yer alır. |
| 4 | `ACIKLAMA` | varchar(150) | evet |  | Açıklama bilgisi yer alır. |
| 5 | `DONEMTIPI` | TDBINTEGER | hayır |  | Gün-1, Hafta-2, Ay-3, |
| 6 | `BASTAR` | TDBDATETIME | hayır |  | Başlangıç tarihi bilgisi yer alır. |
| 7 | `DONEM_UZUNLUK` | TDBINTEGER | hayır |  | Dönem uzunluğu bilgisi yer alır. |
| 8 | `DOVIZ_CEVRIM_TIPI` | TDBINTEGER | hayır |  | gDönem çevrim tipi değeri yer alır. |
| 9 | `SUBELER_DAHIL` | char(1) | hayır |  | Şubeler dahl edilsin parametresi bilgisi yer alır. |
| 10 | `BELGE_TIP1` | char(1) | hayır |  | Kasa |
| 11 | `BELGE_TIP2` | char(1) | hayır |  | Müşteri çeki |
| 12 | `BELGE_TIP3` | char(1) | hayır |  | Borç çeki |
| 13 | `BELGE_TIP4` | char(1) | hayır |  | Müşteri seneti |
| 14 | `BELGE_TIP5` | char(1) | hayır |  | Borç seneti |
| 15 | `BELGE_TIP6` | char(1) | hayır |  | Müşteri siparişi |
| 16 | `BELGE_TIP7` | char(1) | hayır |  | Satıcı siparişi |
| 17 | `BELGE_TIP8` | char(1) | hayır |  | Cari Borç |
| 18 | `BELGE_TIP9` | char(1) | hayır |  | Cari Alacak |
| 19 | `BELGE_TIP10` | char(1) | hayır |  | Banka Borçları |
| 20 | `BELGE_TIP11` | char(1) | hayır |  | Banka Alacak |
| 21 | `BELGE_TIP12` | char(1) | hayır |  | Tahmini Gelir/Gider Kayıtları |
| 22 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 37 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 38 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 39 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, RAPORNO, ACIKLAMA, DONEMTIPI, BASTAR
FROM dbo.TBLNAKITAKISMAS WITH (NOLOCK);
```
