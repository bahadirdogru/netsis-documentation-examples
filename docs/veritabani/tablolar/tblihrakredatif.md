---
title: TBLIHRAKREDATIF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrakredatif/
---

# TBLIHRAKREDATIF

> DETAY GÖSTERME EKRANINDAKİ ÖDEME BİLGİLERİ KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Belge numarası bilgisi yer alır. |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `FTIRSIP` | varchar(1) | hayır |  | P-Proforma diğerleri Tblfatuirs -FTIRSIP ile aynı değerlerdir. |
| 5 | `AKREDETIFNO` | TDBBELGENO | evet |  | Akreditif No bilgisi yer alır. |
| 6 | `MUHABIR_BANKA` | varchar(50) | evet |  | Muh. Banka bilgisi yer alır. |
| 7 | `REFERANS` | varchar(50) | evet |  | Referans numarası bilgisi yer alır. |
| 8 | `BAS_TARIH` | TDBDATETIME | evet |  | Açılış tarihi bilgisi yer alır. |
| 9 | `BIT_TARIH` | TDBDATETIME | evet |  | Bitiş tarihi bilgisi yer alır. |
| 10 | `SONYUKLEMETARIH` | TDBDATETIME | evet |  | Son yükleme tarihi bilgisi yer alır. |
| 11 | `ALICI` | TDBCARIKOD | evet |  | Alıcı (Consignee) bilgisi yer alır. |
| 12 | `ADINA` | TDBCARIKOD | evet |  | Adına (Notify) bilgisi yer alır. |
| 13 | `ODEME_SEKLI` | TDBINTEGER | evet |  | Ödeme şekli bilgisi yer alır. Ödeme tipi bilgisi yer alır. |
| 14 | `ODEMEACIK` | TDBSMALLINT | evet |  | Ödeme açıklaması bilgisi yer alır. |
| 15 | `ACIKLAMA2` | varchar(50) | evet |  | NULL |
| 16 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 21 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 22 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, FATIRS_NO, CARI_KOD, FTIRSIP, AKREDETIFNO, MUHABIR_BANKA
FROM dbo.TBLIHRAKREDATIF WITH (NOLOCK);
```
