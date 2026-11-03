---
title: TBLCARIIHRINFO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariihrinfo-2/
---

# TBLCARIIHRINFO

> CARİ EK BİLGİLER-CARİ İHRACAT BİLGİLERİ KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 32
- **Not:** Bu tablo şema dokümanında ikinci kez, [CARİ modülünde](/veritabani/tablolar/tblcariihrinfo/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 2 | `GOZLEMCI_KODU` | TDBCARIKOD | evet |  | Gözlemci kodu bilgisi yer alır. |
| 3 | `GUMRUK_KODU` | varchar(15) | evet |  | Gümrük kodu bilgisi yer alır. |
| 4 | `ACENTA_KODU` | TDBCARIKOD | evet |  | Acenta kodu bilgisi yer alır. |
| 5 | `TASIYICI_KODU` | TDBCARIKOD | evet |  | Taşıyıcı kodu bilgisi yer alır. |
| 6 | `TEMSILCI_KODU` | TDBCARIKOD | evet |  | Temsilci kodu bilgisi yer alır. |
| 7 | `SIGORTACI_KODU` | TDBCARIKOD | evet |  | Sigortacı kodu bilgisi yer alır. |
| 8 | `MENSEI` | varchar(50) | evet |  | Menşei bilgisi yer alır. |
| 9 | `SEVK_YERI` | varchar(50) | evet |  | Sevk yeri bilgisi yer alır. |
| 10 | `YUKLEME_YERI` | varchar(50) | evet |  | Yükleme yeri bilgisi yer alır. |
| 11 | `TRANSFER_YERI` | varchar(50) | evet |  | Transfer yeri bilgisi yer alır. |
| 12 | `VARIS_YERI` | varchar(50) | evet |  | Varış yeri bilgisi yer alır. |
| 13 | `NAKLIYE_TIPI` | varchar(1) | evet |  | Nakliye tipi bilgisi yer alır.1-kara gibi |
| 14 | `ODEME_SEKLI` | TDBINTEGER | evet |  | Ödeme şekli bilgisi yer alır.1-Peşin Ödeme gibi |
| 15 | `ODEMEACIK` | TDBINTEGER | evet |  | Ödeme açıklama bilgisi yer alır.TBLIHRODEMEACIK-INCKEYNO alanına karşılık gelir. |
| 16 | `GOZLEMNO` | varchar(20) | evet |  | Gözlemci kodu bilgisi yer alır. |
| 17 | `BNKHESKOD` | varchar(20) | evet |  | Hesap kodu bilgisi yer alır. |
| 18 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 19 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 21 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU, GOZLEMCI_KODU, GUMRUK_KODU, ACENTA_KODU, TASIYICI_KODU, TEMSILCI_KODU
FROM dbo.TBLCARIIHRINFO WITH (NOLOCK);
```
