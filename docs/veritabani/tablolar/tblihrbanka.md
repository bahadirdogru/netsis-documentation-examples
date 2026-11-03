---
title: TBLIHRBANKA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrbanka/
---

# TBLIHRBANKA

> DETAY GÖSTERME EKRANINDAKİ BANKA BİLGİLERİ KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Belge numarası bilgisi yer alır. |
| 3 | `FTIRSIP` | char(1) | hayır |  | P-Proforma diğerleri Tblfatuirs -FTIRSIP ile aynı değerlerdir. |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 5 | `BANKAKODU` | varchar(50) | evet |  | NULL |
| 6 | `HESAP_KODU` | varchar(50) | hayır |  | Banka hesap kodu bilgisi yer alır. |
| 7 | `SWIFT` | varchar(50) | evet |  | NULL |
| 8 | `KREDINOTU` | varchar(255) | evet |  | Kredi Notu bilgisi yer alır. |
| 9 | `GONDERIMNOTU` | varchar(255) | evet |  | Gönderim notu bilgisi yer alır. |
| 10 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckeyno bilgisi yer alır. |
| 11 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 16 | `C_YEDEK1` | char(1) | evet |  | İnckey numarası bilgisi yer alır. |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, FTIRSIP, CARI_KOD, BANKAKODU, HESAP_KODU
FROM dbo.TBLIHRBANKA WITH (NOLOCK);
```
