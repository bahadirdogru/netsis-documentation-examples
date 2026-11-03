---
title: TBLKKCARISTOKMUAYENE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkcaristokmuayene/
---

# TBLKKCARISTOKMUAYENE

> CARİ-STOK-MUAYENE EŞLEŞTİRME KAYITLARI YER ALIR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 24

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | evet |  | İşletme kodu bilgisi yer alır. |
| 2 | `CARIKODU` | TDBCARIKOD | evet |  | Cari kodu bilgisi yer alır. |
| 3 | `STOKKODU` | TDBSTOKKOD | evet |  | stok kodu bilgisi yer alır. |
| 4 | `DEPKODU` | varchar(8) | hayır |  | Departman kodu bilgisi yer alır. |
| 5 | `MYNKODU` | varchar(35) | evet |  | Muayene kodu bilgisi yer alır. |
| 6 | `GECERLILIKTARIHI` | TDBDATETIME | evet |  | Geçerlilik tarihi bilgisi yer alır. |
| 7 | `AKTIF` | char(1) | hayır |  | Aktif işaretli ise E değerini alır. Değilse H |
| 8 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarhi bilgisi yer alır. |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 13 | `C_YEDEK1` | char(1) | evet |  | Default NULL. Kalite kontrol yapılmayacak işaretli ise E değilse H değerini alır. |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `PPMDEGER` | TDBFLOAT | evet |  | PPM değeri yer alır. |
| 24 | `OPKODU` | varchar(35) | evet |  | Operasyon kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, CARIKODU, STOKKODU, DEPKODU, MYNKODU, GECERLILIKTARIHI
FROM dbo.TBLKKCARISTOKMUAYENE WITH (NOLOCK);
```
