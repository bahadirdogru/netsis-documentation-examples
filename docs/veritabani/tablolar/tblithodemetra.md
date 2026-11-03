---
title: TBLITHODEMETRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithodemetra/
---

# TBLITHODEMETRA

> İTHALAT ÖDEME BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 44

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 3 | `ODEMETIP` | varchar(20) | evet |  | Ödeme şekli bilgisi yer alır. |
| 4 | `ODEME_ACIKLAMA` | varchar(255) | evet |  | Ödeme Açıklama bilgisi yer alır. |
| 5 | `ODEME_TARIH` | TDBDATETIME | evet |  | Ödeme Tarihi bilgisi yer alır. |
| 6 | `TRASFER_TARIH` | TDBDATETIME | evet |  | NULL |
| 7 | `DOVTIP` | TDBSMALLINT | evet |  | Döviz tipi bilgisi yer alır. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Tutar bligisi yer alır. |
| 9 | `MUH_BANKA` | varchar(50) | evet |  | Muh. Banka bilgisi yer alır. |
| 10 | `BANKA_KODU` | varchar(15) | evet |  | Banka Kodu bilgisi yer alır. |
| 11 | `HESAP_KODU` | varchar(50) | evet |  | NULL |
| 12 | `REFERANS_NO` | varchar(50) | evet |  | Referans no bilgisiyer alır. |
| 13 | `AKREDETIF_NO` | varchar(50) | evet |  | Akreditif no bilgisi yer alır. |
| 14 | `ACILIS_TUTAR` | TDBFLOAT | evet |  | Akreditif açılış tutar bilgisi yer alır. |
| 15 | `AMIR_BANKA` | varchar(50) | evet |  | Amir banka bilgisi yer alır. |
| 16 | `TEYIT_BANKA` | varchar(50) | evet |  | Teyit banka bilgisi yer alır. |
| 17 | `ISKONTO_BANKA` | varchar(50) | evet |  | İskonto banka bilgisi yer alır. |
| 18 | `BAS_TARIH` | TDBDATETIME | evet |  | Açılış tarihi bilgisi yer alır. |
| 19 | `BIT_TARIH` | TDBDATETIME | evet |  | Bitiş tarihi bilgisi yer alır. |
| 20 | `SONYUKLEMETARIH` | TDBDATETIME | evet |  | Son yükleme tarihi bilgisi yer alır. |
| 21 | `TEYITLI` | char(1) | evet |  | Teyitli işaretli ise E değerini alır. |
| 22 | `KIRDIRMALI` | char(1) | evet |  | Kırdırmalı işaretli ise E değerini alır. |
| 23 | `ACIKLAMA1` | varchar(255) | evet |  | Açıklama 1 bilgisi yer alır. |
| 24 | `ACIKLAMA2` | varchar(255) | evet |  | Açıklama 2 bilgisi yer alır. |
| 25 | `ACIKLAMA3` | varchar(255) | evet |  | Açıklama 3 bilgisi yer alır. |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK3` | TDBDATETIME | evet |  | Uzatılan Yükleme Vadesi başlangıç tarihi bilgisi yer alır. |
| 31 | `D_YEDEK4` | TDBDATETIME | evet |  | Uzatılan Yükleme Vadesi bitiş tarihi bilgisi yer alır. |
| 32 | `D_YEDEK5` | TDBDATETIME | evet |  | Uzatılan Akreditif Vadesi başlangıç tarihi bilgisi yer alır. |
| 33 | `D_YEDEK6` | TDBDATETIME | evet |  | Uzatılan Akreditif Vadesi bitiş tarihi bilgisi yer alır. |
| 34 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 41 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 42 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 43 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 44 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, DOSYANO, ODEMETIP, ODEME_ACIKLAMA, ODEME_TARIH, TRASFER_TARIH
FROM dbo.TBLITHODEMETRA WITH (NOLOCK);
```
