---
title: TBLKONSIMENTODETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkonsimentodetay/
---

# TBLKONSIMENTODETAY

> İTHALAT KONŞİMENTO DETAY BİLGİLERİ TUTULUR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 28

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `KONSIMENTONO` | varchar(50) | hayır |  | Konşimento No bilgisi yer alır. |
| 3 | `ADET` | TDBINTEGER | evet |  | Adet bilgisi yer alır. |
| 4 | `TIP` | varchar(50) | evet |  | Konteyner/Kamyon Tip bilgisi yer alır. |
| 5 | `PLAKA1` | varchar(15) | evet |  | Plaka-1 bilgisi yer alır. |
| 6 | `PLAKA2` | varchar(15) | evet |  | Plaka-2 bilgisi yer alır. |
| 7 | `KONTROLNO` | varchar(15) | evet |  | Konteyner No bilgisi yer alır. |
| 8 | `ACIK1` | varchar(255) | evet |  | Açıklama-1 bilgisi yer alır. |
| 9 | `ACIK2` | varchar(255) | evet |  | Açıklama-2 bilgisi yer alır. |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 25 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 26 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 27 | `FTIRSIP` | char(1) | hayır |  | Faturanın tipi bilgisi yer alır. TBLITHKONSIMENTO -FTIRSIP |
| 28 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KONSIMENTONO, ADET, TIP, PLAKA1, PLAKA2
FROM dbo.TBLKONSIMENTODETAY WITH (NOLOCK);
```
