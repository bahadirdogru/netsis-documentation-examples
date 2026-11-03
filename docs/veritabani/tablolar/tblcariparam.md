---
title: TBLCARIPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariparam/
---

# TBLCARIPARAM

> CARI MODUL PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 44

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `GRUP_ISIMG` | char(1) | evet |  | Grup acıklama parametresi isaretli ise E, degil ise H degerini tutar. |
| 3 | `FAIZ` | TDBFLOAT | evet |  | Aylık faiz oranını tutar. |
| 4 | `MIKTAR` | char(1) | evet |  | Hareketlerde miktar girilecek parametresi isaretli ise E, degil ise H degerini tutar. |
| 5 | `BASLIK1` | varchar(25) | evet |  | Sayısal saha baslıgı 1 alanını tutar. |
| 6 | `BASLIK2` | varchar(25) | evet |  | Sayısal saha baslıgı 2 alanını tutar. |
| 7 | `BASLIK3` | varchar(25) | evet |  | Sayısal saha baslıgı 3 alanını tutar. |
| 8 | `BASLIK4` | varchar(25) | evet |  | Sayısal saha baslıgı 4 alanını tutar. |
| 9 | `BASLIK5` | varchar(25) | evet |  | Alfasayısal saha baslıgı 1 alanını tutar. |
| 10 | `BASLIK6` | varchar(25) | evet |  | Alfasayısal saha baslıgı 2 alanını tutar. |
| 11 | `BASLIK7` | varchar(25) | evet |  | Alfasayısal saha baslıgı 3 alanını tutar. |
| 12 | `BASLIK8` | varchar(25) | evet |  | Alfasayısal saha baslıgı 4 alanını tutar. |
| 13 | `BASLIK9` | varchar(25) | evet |  | Sayısal saha baslıgı 5 alanını tutar. |
| 14 | `BASLIK10` | varchar(25) | evet |  | Sayısal saha baslıgı 6 alanını tutar. |
| 15 | `BASLIK11` | varchar(25) | evet |  | Sayısal saha baslıgı 7 alanını tutar. |
| 16 | `BASLIK12` | varchar(25) | evet |  | Sayısal saha baslıgı 8 alanını tutar. |
| 17 | `BASLIK13` | varchar(25) | evet |  | Alfasayısal saha baslıgı 5 alanını tutar. |
| 18 | `BASLIK14` | varchar(25) | evet |  | Alfasayısal saha baslıgı 6 alanını tutar. |
| 19 | `BASLIK15` | varchar(25) | evet |  | Alfasayısal saha baslıgı 7 alanını tutar. |
| 20 | `BASLIK16` | varchar(25) | evet |  | Alfasayısal saha baslıgı 8 alanını tutar. |
| 21 | `FIELD_SEC` | char(1) | evet |  | "Kullanılmıyor" |
| 22 | `POS_UYGULAMA` | char(1) | evet |  | "Kullanılmıyor" |
| 23 | `C_YEDEK1` | char(1) | evet |  | Cari kullanım tipini tutar.Tum cari hareketleri=0; İsletme/sirket/sube=1 ve Subeli cari=2 degerleri ile tutulur. |
| 24 | `C_YEDEK2` | char(1) | evet |  | Ciro primleri icin kullanılacak cari rapor kodu sahasını tutar. |
| 25 | `C_YEDEK3` | char(1) | evet |  | Kosul politika tanımlaması yapılacak parametresi isaretli ise E, degil ise H degerini tutar. |
| 26 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `C_YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `C_YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `C_YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `C_YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `CARISORGU_KAYNAGI` | TDBBYTE | evet |  | Ünvan güncellemesi için eklenmiştir. |
| 38 | `NPS_KULLANICI_AD` | varchar(50) | evet |  | Noterler birliği kimlik bilgisi alanıdır. |
| 39 | `NPS_KULLANICI_SIFRE` | varchar(20) | evet |  | Noterler birliği şifre bilgisi yer alır. |
| 40 | `CARIKUR_DEGIS` | char(1) | evet |  | Cari bazında tanımlanan döviz kurları belgede değiştirilemesin parametresi yer alır. |
| 41 | `OZHES_SABITGUN` | TDBINTEGER | evet |  | Özel hesap kapatma opsiyon gününde girili olan sabit gün değeri yer alır. |
| 42 | `OZHES_DOVTIP` | char(1) | evet |  | Özel hesap kapatma işleminde döviz tipi kontrol edilsin parametresi yer alır. |
| 43 | `OZHES_OPSIYON` | varchar(15) | evet |  | Özel hesap kapatma opsiyon gününde seçili saha bilgisi yer alır. |
| 44 | `OZHES_CIKILMASIN` | char(1) | evet |  | Özel hesap kapatma işlemi yapılmadan ekrandan çıkılamasın parametresi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIPARAM_PKEY` | `ISLETME_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, GRUP_ISIMG, FAIZ, MIKTAR, BASLIK1, BASLIK2
FROM dbo.TBLCARIPARAM WITH (NOLOCK);
```
