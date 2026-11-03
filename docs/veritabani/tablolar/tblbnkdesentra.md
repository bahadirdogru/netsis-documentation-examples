---
title: TBLBNKDESENTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkdesentra/
---

# TBLBNKDESENTRA

> BANKA-İŞLEMLER-DOSYA DESEN OLUŞTURMA BÖLÜMÜNDEKİ DESEN DETAYLARI YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `MASINCKEYNO` | TDBINTEGER | hayır |  | TBLBNKDESENMAS-INCKEYNO kolonuna karşılık gelir. |
| 3 | `KONUM` | TDBBYTE | hayır |  | Konum değeri yer alır. |
| 4 | `SIRA` | TDBSMALLINT | hayır |  | Sıra no bilgisi yer alır. |
| 5 | `DEGER_TIPI` | TDBBYTE | hayır |  | 0-Boşluk,1-Diğer |
| 6 | `SATIR` | TDBBYTE | hayır |  | Satır bilgisi yer alır. |
| 7 | `SUTUN` | TDBBYTE | hayır |  | Sütun bilgisi yer alır. |
| 8 | `UZUNLUK` | TDBINTEGER | evet |  | Uzunluk bilgisi yer alır. |
| 9 | `ONDALIKSAY` | TDBBYTE | evet |  | Ondalık sayısı biligisi yer alır. |
| 10 | `ONDALIKAYRAC` | char(1) | evet |  | Ondalık ayracı bilgisi yer alır. |
| 11 | `BINLIKAYRAC` | char(1) | evet |  | Binlik ayracı bilgisi yer alır. |
| 12 | `BAGLANTI_TIPI` | TDBBYTE | hayır |  | 0-sabit,1-veritabanı,2-fonksiyon |
| 13 | `VARSAYILANDEGER` | varchar(30) | evet |  | NULL |
| 14 | `DEGER` | varchar(30) | evet |  | sabit değer bilgisi yer alır. |
| 15 | `TABLO_ADI` | varchar(30) | evet |  | Veri tabanı tablo adı yer alır. |
| 16 | `SAHA_ADI` | varchar(50) | evet |  | Veri tabanı saha adı yer alır. |
| 17 | `SAHA_TIPI` | TDBBYTE | evet |  | 0 |
| 18 | `FONKSIYON` | TDBBYTE | evet |  | Fonsiyon adı bilgisi yer alır. |
| 19 | `SCRIPT` | varchar(4000) | evet |  | Sonuç yer alır |
| 20 | `DURUMGOSTERGE` | char(1) | evet |  | H |
| 21 | `DURUMDATA` | varchar(500) | evet |  | NULL |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `SCRIPTKULLANIM` | char(1) | evet |  | Script kullanımı bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MASINCKEYNO, KONUM, SIRA, DEGER_TIPI, SATIR
FROM dbo.TBLBNKDESENTRA WITH (NOLOCK);
```
