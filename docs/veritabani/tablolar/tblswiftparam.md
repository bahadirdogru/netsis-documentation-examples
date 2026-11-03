---
title: TBLSWIFTPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftparam/
---

# TBLSWIFTPARAM

> MT940 PARAMETRELERİ BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ACIKLAMA_BELGE_AKTARILSIN` | char(1) | evet |  | MT940 dosyasındaki hareket açıklaması belge açıklamasına aktarılsın işaretli ise E değerini alır. |
| 3 | `WS_KULLANICI_AD` | varchar(50) | evet |  | NULL |
| 4 | `WS_KULLANICI_SIFRE` | varchar(20) | evet |  | NULL |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 21 | `AKTARIMYONTEMI` | TDBBYTE | evet |  | 1-FTP,0-dizin erişimi |
| 22 | `DOSYA_DIZIN` | varchar(255) | evet |  | NULL |
| 23 | `FTP_DOSYA_DIZIN` | varchar(255) | evet |  | FTP Adresi bilgisi yer alır. |
| 24 | `FTP_KULLANICI_AD` | varchar(50) | evet |  | Kullanıcı adı bilgisi yer alır. |
| 25 | `FTP_KULLANICI_SIFRE` | varchar(20) | evet |  | Kullanıcı şifre bilgisi yer alır. |
| 26 | `KURAL_UYUM_ESLESTIRILSIN` | char(1) | evet |  | MT940 kural tespitinde sadece metin alanı eşleştirilsin parametresi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ACIKLAMA_BELGE_AKTARILSIN, WS_KULLANICI_AD, WS_KULLANICI_SIFRE, C_YEDEK1, C_YEDEK2
FROM dbo.TBLSWIFTPARAM WITH (NOLOCK);
```
