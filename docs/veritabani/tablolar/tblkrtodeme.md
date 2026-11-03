---
title: TBLKRTODEME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtodeme/
---

# TBLKRTODEME

> Firma kredi kartı ödeme bilgileri yer alır.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 35

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `HESAPOZETTARIHI` | TDBDATETIME | hayır |  | Hesap özeti tarihi bilgisi yer alır. |
| 3 | `SONODEMETARIHI` | TDBDATETIME | hayır |  | Son ödeme tarihi bilgisi yer alır. |
| 4 | `KARTKODU` | TDBBELGENO | evet |  | Kart kodu bilgisi yer alır. |
| 5 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 6 | `ALACAKNETHESKODU` | varchar(15) | hayır |  | Alacak banka hesap kodu bilgisi yer alır. |
| 7 | `BORCNETHESKODU` | varchar(15) | evet |  | Borç banka hesap kodu bilgisi yer alır |
| 8 | `HARTURU` | TDBBYTE | hayır |  | 4 |
| 9 | `TUTAR` | TDBFLOAT | evet |  | Hesap özeti tutarında yer alan tutar bilgisi yer alır. |
| 10 | `DUZELTILMISTUTAR` | TDBFLOAT | evet |  | Gerçek tutar bilgisi yer alır. |
| 11 | `DOVIZTIPI` | TDBBYTE | evet |  | Döviz tipi bilgisi yer alır. |
| 12 | `DOVIZTUTARI` | TDBFLOAT | evet |  | Döviz tutarı bilgisi yer alır. |
| 13 | `DUZELTILMISDOVIZTUTAR` | TDBFLOAT | evet |  | Gerçek döviz tutarı bilgisi yer alır. |
| 14 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodu bilgisi yer alır. |
| 15 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodu bilgisi yer alır. |
| 16 | `HESAPOZETONAY` | char(1) | evet |  | Hesap özeti onay işaretlenmesi durumundaki değeri tutulur. |
| 17 | `ODEMEKAYDIONAY` | char(1) | evet |  | Ödeme kaydı işaretlenmesi durumunda aldığı değer yer alır. |
| 18 | `KRTODEMETRAINCKEY` | TDBINTEGER | evet |  |  |
| 19 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 30 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 31 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 32 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 33 | `ODENECEKTUTAR` | TDBFLOAT | evet |  | Ödenecek tutar bilgisi yer alır. |
| 34 | `ODEBNKKODU` | varchar(15) | evet |  | Ödenecek vadesiz hesap kodu bilgisi yer alır. |
| 35 | `ODEMETARIHI` | TDBDATETIME | evet |  | Ödeme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, HESAPOZETTARIHI, SONODEMETARIHI, KARTKODU, SUBE_KODU, ALACAKNETHESKODU
FROM dbo.TBLKRTODEME WITH (NOLOCK);
```
