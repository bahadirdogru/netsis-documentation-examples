---
title: TBLEATIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleatik/
---

# TBLEATIK

> e-Atık bilgilerinin tutulduğu tablodur

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `KAYITTIPI` | char(1) | evet |  | Kayıt tipi bilgisini tutar.(S-Stok,E-Serbest) |
| 4 | `ATIK_KODU` | varchar(35) | evet |  | Atık kodunu belirten stok kodu bilgisi yer alır |
| 5 | `ATIIK_ADI` | varchar(100) | evet |  | Stoğun adına ait bilgi yer alır. |
| 6 | `ATIK_TARIH` | TDBDATETIME | evet |  | Atık tarihi bilgisidir. |
| 7 | `ATIK_MIKTAR` | TDBFLOAT | evet |  | Atık miktarı adet cinsinden tutulur. |
| 8 | `ATIK_AGIRLIK` | TDBFLOAT | evet |  | Atık ağırlığı gram cinsinden tutulur. |
| 9 | `GERI_DONUSTURULDU` | char(1) | evet |  | Geri dönüştürüldü işaretli ise E, değil ise H olarak tutulur. |
| 10 | `ATIK_ACIKLAMA` | varchar(50) | evet |  | Açıklama sahasına ait girilen bilgi yer alır. |
| 11 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | kayıt tarihi bilgisi yer alır. |
| 13 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 19 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 20 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 23 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 24 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 27 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 28 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 29 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 30 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, KAYITTIPI, ATIK_KODU, ATIIK_ADI, ATIK_TARIH
FROM dbo.TBLEATIK WITH (NOLOCK);
```
