---
title: TBLKVKK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkvkk/
---

# TBLKVKK

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 33

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `KAYITTIPI` | TDBBYTE | evet |  | 1- cari hesap,2- kullanıcı |
| 5 | `HESAP_KODU` | TDBCARIKOD | evet |  | Cari kodu yada kullanıcı kodu bilgisi yer alır. |
| 6 | `PROG_ADI` | TDBSMALLINT | evet |  | Program modül numarası bilgisi yer alır. |
| 7 | `ALAN_ADI` | TDBSMALLINT | evet |  | Alan adı seçilen alanların kodlarına karşılık gelir. |
| 8 | `BAS_TARIH` | TDBDATETIME | evet |  | Başlangıç tarihi bilgisi yer alır. |
| 9 | `BIT_TARIH` | TDBDATETIME | evet |  | Bitiş tarihi bilgisi yer alır. |
| 10 | `IPTAL_TARIH` | TDBDATETIME | evet |  | İptal tarihi bilgisi yer alır. |
| 11 | `ANONIM_TARIH` | TDBDATETIME | evet |  | Anonimleştirme tarihi bilgisi yer alır. |
| 12 | `ISLEM_AMACI` | varchar(50) | evet |  | Veri işleme amacına yazılan bilgi yer alır. |
| 13 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bligisi yer alır. |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 15 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi yer alır. |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `ONLINE_ONAY_ID` | int | evet |  | Mail ile onay al bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, KAYITTIPI, HESAP_KODU, PROG_ADI
FROM dbo.TBLKVKK WITH (NOLOCK);
```
