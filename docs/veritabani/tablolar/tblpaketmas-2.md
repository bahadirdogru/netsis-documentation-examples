---
title: TBLPAKETMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpaketmas-2/
---

# TBLPAKETMAS

> PAKET TANIMLAMA KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 22
- **Not:** Bu tablo şema dokümanında ikinci kez, [YARDIMCI PROGRAMLAR modülünde](/veritabani/tablolar/tblpaketmas/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PAKET_KODU` | varchar(10) | hayır |  | Paket kodu bilgisi yer alır. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 3 | `BOS_AGIRLIK` | TDBFLOAT | evet |  | Boş ağırlık bilgisi yer alır. |
| 4 | `GRUP` | varchar(10) | evet |  | Grup kodu bilgisi yer alır. |
| 5 | `MAX_AD` | TDBFLOAT | evet |  | Maksimum adet bilgisi yer alır. |
| 6 | `MAX_KG` | TDBFLOAT | evet |  | Maksimum ağırlık bilgisi yer alır. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Paket markası bilgisi yer alır. |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Paket cinsi numarası yer alır. |
| 22 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 PAKET_KODU, ACIKLAMA, BOS_AGIRLIK, GRUP, MAX_AD, MAX_KG
FROM dbo.TBLPAKETMAS WITH (NOLOCK);
```
