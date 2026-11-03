---
title: TBLSWIFTDOCTRAEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftdoctraek/
---

# TBLSWIFTDOCTRAEK

> MT940 KAYITLARI-MT940 ENTEGRASYONU- YÜKLENEN DOSYAYA AİT HAREKET BİLGİLERİNDEKİ EK AÇIKLAMALAR YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 22

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 2 | `EKACIKLAMA1` | varchar(50) | evet |  | Ek açıklama 1 e girilen bilgi yer alır. |
| 3 | `EKACIKLAMA2` | varchar(50) | evet |  | Ek açıklama 2 ye girilen bilgi yer alır. |
| 4 | `EKACIKLAMA3` | varchar(50) | evet |  | Ek açıklama 3 e girilen bilgi yer alır. |
| 5 | `EKACIKLAMA4` | varchar(50) | evet |  | Ek açıklama 4 e girilen bilgi yer alır. |
| 6 | `REF_ID` | TDBINTEGER | hayır |  | TBLSWIFTDOCTRA(INCKEYNO) alanına karşılık gelir. |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
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
| 21 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 22 | `REFERANS` | varchar(15) | evet |  | Referasn bilgisi yera lır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, EKACIKLAMA1, EKACIKLAMA2, EKACIKLAMA3, EKACIKLAMA4, REF_ID
FROM dbo.TBLSWIFTDOCTRAEK WITH (NOLOCK);
```
