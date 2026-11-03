---
title: TBLALTREC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblaltrec/
---

# TBLALTREC

> Alternatif reçete tanımlamaları yer alır.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 65

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `ALTERNATIF_KODU` | TDBINTEGER | hayır |  | 1 |
| 4 | `ALTERNATIF_ONCELIK` | TDBSMALLINT | hayır |  | 1 |
| 5 | `ALTERNATIF_ACIKLAMA` | varchar(50) | evet |  | Mamul kodu ile aynıdır.Sağ click açıklama düzenle ile açıklama girilirse bu bilgi yer alır. |
| 6 | `REF_ALTRECNO` | int | hayır |  | 0 |
| 7 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamul kodu bilgisi yer alır. |
| 8 | `HAM_KODU` | TDBSTOKKOD | hayır |  | Hammadde kodu bilgisi yer alır. |
| 9 | `MIKTAR` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. |
| 10 | `STOK_MALIYET` | char(1) | evet |  | Bileşen bilgileri S-tok,M-aliyet |
| 11 | `MIKTARSABITLE` | char(1) | evet |  | Miktar sabitle işaretli ise E değerini alır. |
| 12 | `KAYIT_TARIHI` | TDBDATETIME | evet |  | NULL |
| 13 | `GECERLILIK_TARIHI` | TDBDATETIME | evet |  | NULL |
| 14 | `GEC_SON_BILESEN` | TDBSTOKKOD | evet |  | NULL |
| 15 | `GEC_SON_MIKTAR` | TDBFLOAT | evet |  | NULL |
| 16 | `GEC_FLAG` | TDBBYTE | hayır |  | 0 |
| 17 | `BASLANGIC_TARIHI` | TDBDATETIME | evet |  | TBLSTOKURM-BASLANGIC_TARIHI ile aynı bilgi yer alır. |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `SETNO` | varchar(25) | evet |  | 0 |
| 33 | `GEC_SON_SETNO` | varchar(25) | evet |  | 0 |
| 34 | `GEC_SON_DURUM` | char(1) | evet |  | E |
| 35 | `OPR_BIL` | char(1) | evet |  | O-perasyon,B-ileşen |
| 36 | `OPNO` | varchar(8) | hayır |  | Sıra numarası bilgisi yer alır. |
| 37 | `ACIKLAMA` | varchar(-1) | evet |  | NULL |
| 38 | `OPMIK` | TDBFLOAT | evet |  | Miktar bilgisi yer alır. Operasyon seçili ise Sim. Tez. Miktarı bilgisi yer alır. |
| 39 | `ISTKODU` | varchar(5) | evet |  | İstasyon kodu bilgisi yer alır. |
| 40 | `SETUPSURE` | TDBFLOAT | evet |  | Hazırlık süresi bilgisi yer alır. |
| 41 | `URETSURE` | TDBFLOAT | evet |  | Üretim süresi bilgisi yer alır. |
| 42 | `GECISSURE` | TDBFLOAT | evet |  | Transfer süresi bilgisi yer alır |
| 43 | `OVERLAPMIK` | TDBFLOAT | evet |  | Geçiş miktarı bilgisi yer alır. |
| 44 | `ISCILIKMAL` | TDBFLOAT | evet |  | İşçilik maliyeti bilgisi yer alır. |
| 45 | `DIGERMAL` | TDBFLOAT | evet |  | Diğer maliyetler bilgisi yer alır., |
| 46 | `GENELMAL` | TDBFLOAT | evet |  |  |
| 47 | `OPERASYON_UAK` | char(1) | evet |  | Ü.A. Dahil edilsin bilgisi yer alır. |
| 48 | `SON_OPERASYON` | char(1) | evet |  | Son operasyon bilgisi yer alır. |
| 49 | `ONCELIK` | TDBINTEGER | evet |  | 0 |
| 50 | `PLANLAMA_ORANI` | TDBFLOAT | evet |  | 0 |
| 51 | `ALTERNATIF_POLITIKASI_DAT` | char(1) | evet |  | H |
| 52 | `ALTERNATIF_POLITIKASI_ACF` | char(1) | evet |  | H |
| 53 | `ALTERNATIF_POLITIKASI_USK` | char(1) | evet |  | H |
| 54 | `ALTERNATIF_POLITIKASI_MRP` | char(1) | evet |  | H |
| 55 | `SARFEDILEN_MAMUL` | TDBSTOKKOD | evet |  | NULL |
| 56 | `OPKODU` | TDBSTOKKOD | evet |  | NULL |
| 57 | `MAMYAPKOD` | varchar(15) | evet |  | YAPILANDIRMA KODU BİLGİSİ YER ALIR |
| 58 | `HAMYAPKOD` | varchar(15) | evet |  | Hammadde yapılandırma kodu bilgisi yer alır. |
| 59 | `GECSONBILYAPKOD` | varchar(15) | evet |  | NULL |
| 60 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 61 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bligisi yer alır. |
| 62 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 63 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 64 | `ISTASYON_KAPASITE` | TDBFLOAT | evet |  | İstasyon kapasite miktarı bilgisi yer alır.Sim.tez miktarı en alttaki. |
| 65 | `BILESEN_ALTERNATIF_KODU` | TDBINTEGER | hayır |  | Bileşen ait alternatif kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, ALTERNATIF_KODU, ALTERNATIF_ONCELIK, ALTERNATIF_ACIKLAMA, REF_ALTRECNO
FROM dbo.TBLALTREC WITH (NOLOCK);
```
