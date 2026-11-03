---
title: TBLCEKILIST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcekilist/
---

# TBLCEKILIST

> ÇEKİ LİSTESİ KAYITLARI YER ALIR

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 39

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DOSYANO` | TDBBELGENO | hayır |  | Dosya numarası bilgisi yer alır. |
| 2 | `CEKILISTNO` | TDBBELGENO | hayır |  | Çeki listesi numarası bilgisi yer alır. |
| 3 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 4 | `FTIRSIP` | char(1) | evet |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 5 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kodu bilgisi yer alır. |
| 6 | `IRSALIYENO` | TDBBELGENO | evet |  | İrsaliye numarası bilgisi yer alır. |
| 7 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi yer alır. |
| 8 | `SIRA` | TDBINTEGER | evet |  | Kalemin sıra bilgisi yer alır |
| 9 | `GTIP` | TDBSTOKKOD | evet |  | Gtip numarası bilgisi yer alır. |
| 10 | `ADET` | TDBFLOAT | evet |  | adet bilgisi yer alır. |
| 11 | `BRT_AGIRLIK` | TDBFLOAT | evet |  | Brüt ağırlık bilgisi yer alır. |
| 12 | `NET_AGIRLIK` | TDBFLOAT | evet |  | Net ağırlık bilgisi yer alır. |
| 13 | `PAKET_KODU` | varchar(35) | evet |  | Paket kodu bilgisi yer alır. |
| 14 | `PAKET_NO` | varchar(30) | evet |  | Paket numarası bilgisi yer alır. |
| 15 | `KONTEYNER_KODU` | varchar(30) | evet |  | Konteyner kodu bilgisi yer alır. |
| 16 | `KONTEYNER_NO` | varchar(30) | evet |  | Konteyner numarası bilgisi yer alır. |
| 17 | `PAKET_AGIRLIK` | TDBFLOAT | evet |  | Paket ağırlık bilgisi yer alır. |
| 18 | `MIKTAR2` | TDBFLOAT | evet |  | Miktar2 bilgisi yer alır. |
| 19 | `MUHURNO` | varchar(20) | evet |  | Mühür no bilgisi yer alır. |
| 20 | `SEVKNO` | varchar(15) | evet |  | Sevk numarası bilgisi yer alır. |
| 21 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan inckey numarası bilgisi yer alır. |
| 22 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 27 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK1` | TDBFLOAT | evet |  | Mal fazlası miktarı yer alır. |
| 32 | `F_YEDEK2` | TDBFLOAT | evet |  | Çeki listesinde girilen paket sayısı bu alanda yer alır. |
| 33 | `I_YEDEK1` | TDBINTEGER | evet |  | Proformadan oluşturuluyor ise profotra inckeyno,irsaliyeden oluşturuluyorsa sthar inckeyno |
| 34 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `BRT_AGIRLIK2` | TDBFLOAT | evet |  | Brüt ağırlık 2 bilgisi yer alır. |
| 38 | `NET_AGIRLIK2` | TDBFLOAT | evet |  | Net ağırlık 2 bilgisi yer alır. |
| 39 | `PAKET_HACIM` | TDBFLOAT | evet |  | Hacim bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 DOSYANO, CEKILISTNO, FATIRS_NO, FTIRSIP, CARI_KOD, IRSALIYENO
FROM dbo.TBLCEKILIST WITH (NOLOCK);
```
