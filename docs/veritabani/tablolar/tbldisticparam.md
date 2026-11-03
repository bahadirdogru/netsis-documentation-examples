---
title: TBLDISTICPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldisticparam/
---

# TBLDISTICPARAM

> DIŞ TİCARET PARAMETRE KAYITLARINI TUTAN SAHADIR.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 34

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIS_TIC_TIPI` | TDBINTEGER | hayır |  | 0-İhracat,1-ithalat |
| 2 | `MASRAF_DEKONT_SERI` | varchar(2) | evet |  | Masraf dekont seri bilgisi yer alır. |
| 3 | `FAK_DEKONT_SERI` | varchar(2) | evet |  | Faktoring dekont seri bilgisi yer alır |
| 4 | `DOSYANO_PREFIX` | varchar(10) | evet |  | Dosya no prefix değeri yer alır. |
| 5 | `EK_MALIYET` | varchar(1) | evet |  | NULL |
| 6 | `FOBTOCIF_ALGORITHM` | TDBINTEGER | evet |  | 0 |
| 7 | `FOBTOCIF_TIPI` | TDBINTEGER | evet |  | 0 |
| 8 | `CIFTOFOB_ALGORITHM` | TDBINTEGER | evet |  | 0 |
| 9 | `CIFTOFOB_TIPI` | TDBINTEGER | evet |  | 0 |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 11 | `FAKTORINGVARMI` | varchar(1) | evet |  | Faktoring kullanılsın işaretli ise E değerini alır. |
| 12 | `NAVMUH` | TDBMUHKOD | evet |  | Navlun muhasebe kodu bilgisi yer alır. |
| 13 | `SIGMUH` | TDBMUHKOD | evet |  | Sigorta muhasebe kodu bilgisi yer alır. |
| 14 | `IHRBASLANGICMODUL` | char(1) | evet |  | Siparişten başlasın-6, Tekliften başlasın-H, İrsalyeden başlasın-3 |
| 15 | `PRINTFOLDER` | varchar(50) | evet |  | NULL |
| 16 | `CEKITOIRS` | char(1) | evet |  | Çeki listesinden irsaliye oluşturulsun işareli ise E değerini alır. |
| 17 | `IPTALOG` | char(1) | evet |  | İptal edilen ihrcat belgeleri için log tutulsun işaretli ise E değerini alır |
| 18 | `SEVKNOKONTROL` | char(1) | evet |  | İrsaliyeler sevk kontrol numarasına göre oluşturulsun işaretli ise E değerini alır. |
| 19 | `HACIMKALEMTIP` | TDBSMALLINT | evet |  | Hacim Kontrolü için kullanılacak alan bilgisi yer alır. |
| 20 | `CEKILISTHACIMKONTROL` | char(1) | evet |  | Çeki listesinde hacim kontrolü yapılsın işaretli ise E değerini alır. |
| 21 | `SIPCEKILIST` | char(1) | evet |  | Siparişten ön çeki listesi oluşturulsun işaretli ise E değerini alır. |
| 22 | `DOVIZ_TAKIP_HANGISI` | TDBSMALLINT | evet |  | Döviz takibi hangi değerden yapılsın bilgisi yer alır. |
| 23 | `C_YEDEK1` | char(1) | evet |  | İthalat parametlerindeki ithalat miktarları stoklara geçsin |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `DIIBBAKIYEKONT` | char(1) | evet |  | DİİB bakiye kontrolü yapılsın işaretli ise E değerini alır. |
| 30 | `CEKILIST2IRSIPMAKEKUMULE` | char(1) | evet |  | Çeki listesinden irsaliye oluşumunda kümüle edilsin işaretl ise E değerini alır. |
| 31 | `MASRAFKUMULE` | char(1) | evet |  | Masraf dekont kayıtları kümüle edilsin işaretli ise E değerini alır. |
| 32 | `COKLUDIIB` | char(1) | evet |  | Çoklu DİİB uygulaması parametresi yer alır. |
| 33 | `IHRKAPALI` | char(1) | evet |  | İhracat kapatması yapılan dosyaların durumu kapalı olsun parametresi yer alır. |
| 34 | `TEKLIFCEKILIST` | char(1) | evet |  | Tekliften ön çeki listesi oluşturulsun parametresi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 DIS_TIC_TIPI, MASRAF_DEKONT_SERI, FAK_DEKONT_SERI, DOSYANO_PREFIX, EK_MALIYET, FOBTOCIF_ALGORITHM
FROM dbo.TBLDISTICPARAM WITH (NOLOCK);
```
