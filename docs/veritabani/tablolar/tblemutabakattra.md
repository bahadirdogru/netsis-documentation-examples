---
title: TBLEMUTABAKATTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakattra/
---

# TBLEMUTABAKATTRA

> E-MUTABAKAT İÇERİSİNDE YER ALAN BELGELERE AİT KAYITLAR YER ALIR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 59

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından verilen otomatik Id değeridir. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `MASINCKEYNO` | TDBINTEGER | hayır |  | TBLEMUTABAKATMAS-INCKEYNO kolonuna karşılık gelir. |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 5 | `UNVAN` | varchar(100) | hayır |  | Ünvan bilgisi yer alır. |
| 6 | `EMAIL` | varchar(255) | evet |  | Email bilgisi yer alır. |
| 7 | `TEL` | varchar(255) | evet |  | Telefon bilgisi yer alır. |
| 8 | `FAKS` | varchar(100) | evet |  | Faks bilgisi yer alır. |
| 9 | `TCKN_VKN` | varchar(15) | evet |  | TCKN veya VKNO bilgisi yer alır. |
| 10 | `TUTAR` | TDBFLOAT | hayır |  | Tutar bilgisi yer alır. |
| 11 | `BORCALACAK` | char(1) | evet |  | B-orç,A-lacak |
| 12 | `DOVIZTIPI` | TDBBYTE | evet |  | Döviz tipi bilgisi yer alır. |
| 13 | `DOVIZTUTAR` | TDBFLOAT | evet |  | Döviz tutar bilgisi yer alır. |
| 14 | `BELGESAYISI` | TDBINTEGER | evet |  | Belge sayısı bilgisi yer alır. |
| 15 | `DURUMU` | TDBBYTE | hayır |  | 253- beklemede,254-gönderildi,2-cevap bekliyor,3-cevaplandı,4-cevap vermiyor. |
| 16 | `DURUM_ACIK` | varchar(200) | evet |  | durum açıklama bilgisi yer alır. |
| 17 | `YANIT_SAYISI` | TDBINTEGER | evet |  | verilen yanıt sayısı yer alır. |
| 18 | `YANIT_BORCALACAK` | char(1) | evet |  | Verilen yanıt B-orç,A-lacak bilgisi yer alır |
| 19 | `YANIT_TUTAR` | TDBFLOAT | evet |  | Yanıt verilen tutar bilgisi yer alır. |
| 20 | `YANIT_DOVIZTIPI` | varchar(10) | evet |  | Yanıt verilen döviz tipi bilgisi yer alır.(yanıt tutar) |
| 21 | `YANIT_KUR` | varchar(10) | evet |  | Yanıt kur tipi bilgisi yer alır. |
| 22 | `YANIT_DOVIZTUTAR` | TDBFLOAT | evet |  | Yanıt döviz tutar bilgisi yer alır. |
| 23 | `YANIT_URL` | varchar(200) | evet |  | Yanıtın geldiği URL bilgisi yer alır. |
| 24 | `YANIT_YUKLENEN_URL` | varchar(200) | evet |  | Yanıt yüklenen URL adresi yer alır. |
| 25 | `GONDERIM_TARIHI` | TDBDATETIME | evet |  | Gönderim tarihi bilgisi yer alır. |
| 26 | `ISLEM_NO` | TDBINTEGER | evet |  | 0 |
| 27 | `ILETILDI` | TDBBYTE | evet |  | 1-iletildi. |
| 28 | `OKUNDU` | TDBBYTE | evet |  | 1-okundu |
| 29 | `TIP` | TDBBYTE | evet |  | 0 |
| 30 | `OLUSTURULMA_TARIHI` | TDBDATETIME | evet |  | Oluşturulma tarihi yer alır. |
| 31 | `OLUSTURAN_KULLANICI` | varchar(100) | evet |  | Oluşturan kullanıcı bligisi yer alır. |
| 32 | `CEVAP_TIP` | TDBBYTE | evet |  | 1-mutabıkız,0- mutabık değiliz. |
| 33 | `CEVAP_TIP_ACIK` | varchar(100) | evet |  | Cevap tipine karşılık gelen açıklama bilgisi yer alır. |
| 34 | `CEVAP_TARIHI` | TDBDATETIME | evet |  | Cevap tarihi bilgisi yer alır. |
| 35 | `CEVAP_ACIKLAMA` | varchar(200) | evet |  | Cevap için girilen açıklama bligisi yer alır. |
| 36 | `CEVAP_KULLANICI` | varchar(100) | evet |  | Cevap veren kullanıcı bilgisi yer alır. |
| 37 | `CEVAP_UNVAN` | varchar(100) | evet |  | Cevap veren kişinin girdiği ünvam bilgisi yer alır. |
| 38 | `CEVAP_EMAIL` | varchar(50) | evet |  | Cevap veren kişinin mail adresi bilgisi yer alır. |
| 39 | `MUTABAKATGUID` | varchar(50) | evet |  | Mutabakat için oluşturulan GUID bilgisi yer alır. |
| 40 | `ATTACHMENT` | varbinary(-1) | evet |  | null |
| 41 | `ATTACHMENT_NAME` | varchar(100) | evet |  | null |
| 42 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisini içerir. |
| 43 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisini içerir. |
| 44 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisini içerir. |
| 45 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisini içerir. |
| 46 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 59 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, MASINCKEYNO, CARI_KOD, UNVAN, EMAIL
FROM dbo.TBLEMUTABAKATTRA WITH (NOLOCK);
```
