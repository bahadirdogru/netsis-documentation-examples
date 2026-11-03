---
title: TBLURETKAYNAKHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretkaynakhar/
---

# TBLURETKAYNAKHAR

> MRP-KAYIT-KAYNAK YÖNETİMİ- KAYNAK HAREKETLERİ BİLGİLERİ YER ALIR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 33

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `KAYNAK_ID` | TDBINTEGER | hayır |  | TBLMRPISCI (INCKEYNO) |
| 4 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi yer alır. |
| 5 | `GCKOD` | char(1) | hayır |  | Giriş Çıkış bilgisi yer alır. |
| 6 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 7 | `OMUR` | TDBFLOAT | evet |  | Ömür bilgisi yer alır. |
| 8 | `HAREKET_TIPI` | char(1) | hayır |  | Hareket tipi bilgisi yer alır. |
| 9 | `BELGE_NO` | TDBBELGENO | evet |  | belge numarası bilgisi yer alır. |
| 10 | `BELGE_KONT` | TDBSMALLINT | evet |  | belge kontrol bilgisi yer alır. |
| 11 | `UAK_ID` | TDBINTEGER | evet |  |  |
| 12 | `USK_ID` | TDBINTEGER | evet |  |  |
| 13 | `STHAR_INCKEYNO` | TDBINTEGER | evet |  |  |
| 14 | `GOZ_SAYISI` | TDBINTEGER | evet |  |  |
| 15 | `TAMIR_SEBEBI` | char(1) | evet |  | Tamir sebebi bilgisi yer alır. |
| 16 | `ARIZA_KODU` | varchar(8) | evet |  | Arıza kodu bilgisi yer alır. |
| 17 | `ACIKLAMA` | varchar(255) | evet |  | Açıklama bilgisi yer alır. |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 31 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 32 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 33 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, KAYNAK_ID, TARIH, GCKOD, MIKTAR
FROM dbo.TBLURETKAYNAKHAR WITH (NOLOCK);
```
