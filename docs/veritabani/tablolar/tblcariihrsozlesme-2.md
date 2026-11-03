---
title: TBLCARIIHRSOZLESME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariihrsozlesme-2/
---

# TBLCARIIHRSOZLESME

> CARİ EK BİLGİLER-CARİ İHRACAT BİLGİLERİ SÖZLEŞME BİLGİLERİ KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 20
- **Not:** Bu tablo şema dokümanında ikinci kez, [CARİ modülünde](/veritabani/tablolar/tblcariihrsozlesme/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 2 | `SOZLESMENO` | varchar(50) | hayır |  | Sözleşme bilgisi yer alır. |
| 3 | `BASTAR` | TDBDATETIME | evet |  | Başlangıç tarihi bilgisi yer alır. |
| 4 | `BITTAR` | TDBDATETIME | evet |  | Bitiş tarihi bilgisi yer alır. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | Açıklama bilgisi yer alır. |
| 6 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU, SOZLESMENO, BASTAR, BITTAR, ACIKLAMA, SUBE_KODU
FROM dbo.TBLCARIIHRSOZLESME WITH (NOLOCK);
```
