---
title: TBLITHKONSIMENTO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblithkonsimento/
---

# TBLITHKONSIMENTO

> İTHALAT KONŞİMENTO BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 35

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi tutulur. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 3 | `FTIRSIP` | char(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | cari kodu bilgisi yer alır. |
| 5 | `KONSIMENTONO` | varchar(50) | hayır |  | Konşimento numarası bilgisi yer alır. |
| 6 | `MAL_CINSI` | varchar(50) | evet |  | Mal cinsi bilgisi yer alır |
| 7 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 8 | `ACIKLAMA` | varchar(255) | evet |  | Açıklama bilgisi yer alır. |
| 9 | `ACIKLAMA2` | varchar(50) | evet |  | NULL |
| 10 | `SAYFA_ASIL` | TDBINTEGER | evet |  | NULL |
| 11 | `SAYFA_NUSA` | TDBINTEGER | evet |  | NULL |
| 12 | `KONSIMENTOTIP` | varchar(1) | evet |  | Konşimento tipi bilgisi yer alır. |
| 13 | `SUPALAN` | varchar(1) | evet |  | Supalan işaretli ise E değerini alır. |
| 14 | `GECICIKABUL` | varchar(1) | evet |  | Geçici Kabul işaretli ise E değerini alır. |
| 15 | `BAYRAK` | varchar(10) | evet |  | bayrak bilgisi yer alır. |
| 16 | `SEFERNO` | varchar(10) | evet |  | sefer numarası bilgisi yer alır. |
| 17 | `ARAC_ISMI` | varchar(25) | evet |  | Araç ismi bilgisi yer alır. |
| 18 | `LINEROUT` | char(1) | evet |  | Liner Out işaretli ise E değerini alır. |
| 19 | `FREEOUT` | char(1) | evet |  | Free Out işaretli ise E değerini alır. |
| 20 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 21 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Ek açıklama 1 bilgisi yer alır. |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Ek açıklama 2 bilgisi yer alır. |
| 30 | `I_YEDEK1` | TDBINTEGER | evet |  | Ek açıklama 3 bilgisi yer alır. |
| 31 | `I_YEDEK2` | TDBINTEGER | evet |  | Ek açıklama 4 bilgisi yer alır. |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, FTIRSIP, CARI_KOD, KONSIMENTONO, MAL_CINSI
FROM dbo.TBLITHKONSIMENTO WITH (NOLOCK);
```
