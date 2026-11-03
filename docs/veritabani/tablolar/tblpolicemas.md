---
title: TBLPOLICEMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpolicemas/
---

# TBLPOLICEMAS

> Poliçe tanımlamaları ekranında girilen bilgilerin tutulduğu tablodur.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 41

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan INCKEYNO bilgisi yer alır |
| 2 | `POLICENO` | varchar(20) | hayır |  | Poliçe numarası bilgisi yer alı. |
| 3 | `YENILEMENO` | TDBBYTE | hayır |  | Poliçe yenileme numarası bilgisi yer alır |
| 4 | `CARIKODU` | TDBCARIKOD | hayır |  | Cari kod bilgisini tutulur. |
| 5 | `FIRMAKODU` | TDBCARIKOD | evet |  | Firma koduna ait cari bilgisi tutulur. |
| 6 | `POLICETIP_ID` | TDBINTEGER | hayır |  | Poliçe tip tanımlarındaki poliçe tip bilgisi tutulur. |
| 7 | `TANZIMTARIHI` | TDBDATETIME | hayır |  | Tanzim tarihi bilgisi yer alır. |
| 8 | `TANZIMYERI` | varchar(50) | evet |  | Tanzim yeri bilgisi yer alır. |
| 9 | `BASTAR` | TDBDATETIME | hayır |  | Poliçe başlanıç tarihi tutulur. |
| 10 | `BITTAR` | TDBDATETIME | hayır |  | Poliçe bitiş tarihi tutulur. |
| 11 | `DOVTIP` | TDBSMALLINT | evet |  | Döviz tipi bilgisi yer alır. |
| 12 | `DOVTUT` | TDBFLOAT | evet |  | Döviz tutar bilgisi yer alır. |
| 13 | `DOVKURU` | TDBFLOAT | evet |  | Döviz kuru bilgisi yer alır. |
| 14 | `TUTAR` | TDBFLOAT | evet |  | Poliçe tutar bilgisi yer alır. |
| 15 | `AYGIDERHES` | TDBMUHKOD | evet |  | Gelecek aylar gider muhasebe hesap bilgisi yer alır. |
| 16 | `YILGIDERHES` | TDBMUHKOD | evet |  | Gelecek yıllar gider muhasebe hesap bilgisi yer alır. |
| 17 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 18 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodunu tutar. |
| 19 | `REFERANS_NO` | varchar(50) | evet |  | Referans kodunu tutar. |
| 20 | `ACK1` | varchar(250) | evet |  | Açıklama bilgisi yer alır. |
| 21 | `ACK2` | varchar(250) | evet |  | Açıklama bilgisi yer alır. |
| 22 | `ACK3` | varchar(250) | evet |  | Açıklama bilgisi yer alır. |
| 23 | `DEKOSERI` | varchar(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `DEKONO` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `REMINDER_ID` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 30 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 31 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 32 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `I_YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `I_YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `F_YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `D_YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `D_YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `V_YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, POLICENO, YENILEMENO, CARIKODU, FIRMAKODU, POLICETIP_ID
FROM dbo.TBLPOLICEMAS WITH (NOLOCK);
```
