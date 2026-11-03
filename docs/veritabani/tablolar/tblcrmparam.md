---
title: TBLCRMPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmparam/
---

# TBLCRMPARAM

> CRM PARAMETRE KAYITLARINI TUTAR

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 88
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MALIYILBASTAR` | TDBDATETIME | evet |  | Genel parametrelerde girilen mali yıl başlangıç tarihini tutar |
| 3 | `MALIYILBITTAR` | TDBDATETIME | evet |  | Genel parametrelerde girilen mali yıl bitiş tarihini tutar |
| 4 | `MALIYILBASMI` | char(1) | evet | `E` | Mali yıl Adı Başlangıç Tarihinin Yılı Kabul Edilsin |
| 5 | `DOVIZTAKIBI` | char(1) | evet | `H` | CRM modulunde Doviz takibi yapılacak mı |
| 6 | `IADEKONTROL` | char(1) | evet | `H` | Iade tipli irsaliye ve fatura hareketlerinin dikkate alınıp alınmayacağı bilgisini tutar. |
| 7 | `HARSATORGTAK` | char(1) | evet | `H` | Harici Satış Organizasyonu takibi yapılacakmı bilgisini tutar. |
| 8 | `KOTASISTEMI` | char(1) | evet | `H` | Kota sistemi uygulanacak mı bilgisini tutar. |
| 9 | `FATUEKSAHA` | varchar(45) | evet |  | CRM bağlantılı fatura kayıtlarında bağlantının hangi sahadan yapılacagı bilgisini tutar. |
| 10 | `ADAYGRUPBILPAY` | char(1) | evet | `H` | Guvenlik parametreleri aday kayıtları için grup bilgi paylaşımı varmı gosterir. |
| 11 | `ADAYKULBAZGIZ` | char(1) | evet | `H` | Grup bilgi paylaşımı evet iken, kullanıcı bazlı gizlilik var mı gosterir. |
| 12 | `ADAYGIZONDEGER` | char(1) | evet | `H` | Gizlilik ondegeri herkese acık ise H,ozel ise E degerini alıyor. |
| 13 | `ADAYKAYDUZTIPONDEGER` | char(1) | evet | `W` | Kayıt duzeltme tipi ondegeri,oku-yaz için W,Salt oku için R degerini alıyor. |
| 14 | `FIRSATGRUPBILPAY` | char(1) | evet | `H` | Guvenlik parametreleri fırsat kayıtları için grup bilgi paylaşımı varmı gosterir. |
| 15 | `FIRSATKULBAZGIZ` | char(1) | evet | `H` | Grup bilgi paylaşımı evet iken, kullanıcı bazlı gizlilik var mı gosterir. |
| 16 | `FIRSATGIZONDEGER` | char(1) | evet | `H` | Gizlilik ondegeri herkese acık ise H,ozel ise E degerini alıyor. |
| 17 | `FIRSATKAYDUZTIPONDEGER` | char(1) | evet | `W` | Kayıt duzeltme tipi ondegeri,oku-yaz için W,Salt oku için R degerini alıyor. |
| 18 | `AKTGRUPBILPAY` | char(1) | evet | `H` | Guvenlik parametreleri not(satıs aktivitesi) kayıtları için grup bilgi paylaşımı varmı gosterir. |
| 19 | `AKTKULBAZGIZ` | char(1) | evet | `H` | Grup bilgi paylaşımı evet iken, kullanıcı bazlı gizlilik var mı gosterir. |
| 20 | `AKTGIZONDEGER` | char(1) | evet | `H` | Gizlilik ondegeri herkese acık ise H,ozel ise E degerini alıyor. |
| 21 | `AKTKAYDUZTIPONDEGER` | char(1) | evet | `W` | Kayıt duzeltme tipi ondegeri,oku-yaz için W,Salt oku için R degerini alıyor. |
| 22 | `OTOSIP` | char(1) | evet | `H` | Otomatik sipariş var mı gosterir. |
| 23 | `ADAYOTOFIYAT` | char(1) | evet | `H` | Aday kaydında girilen stok icin otomatik fiyat getiriliyor mu gosterir. |
| 24 | `FIRSATOTOFIYAT` | char(1) | evet | `H` | Fırsat kaydında girilen stok icin otomatik fiyat getiriliyor mu gosterir. |
| 25 | `SIPOTOFIYAT` | char(1) | evet | `H` | Siparis kaydında girilen stok icin otomatik fiyat getiriliyor mu gosterir. |
| 26 | `TEKSEVHEDEF` | char(1) | evet | `H` | Hedef girisi tek seviyeli mi yapılabiliyor gosterir. |
| 27 | `ADAYKAPATMAGUN` | TDBSMALLINT | evet | `0` | Aday kaydında gelecek olan kapanıs gununu gosterir. |
| 28 | `ADAYSATASAMAKOD` | TDBSMALLINT | evet |  | Aday kaydında gelecek olan satıs asaması ondegerini gosterir. |
| 29 | `ADAYOLASILIK` | TDBFLOAT | evet | `0` | Aday kaydında gelecek olan olasılık ondegerını gosterır. |
| 30 | `FIRSATKAPATMAGUN` | TDBSMALLINT | evet | `0` | Fırsat kaydında gelecek olan kapanıs gununu gosterir. |
| 31 | `FIRSATSATASAMAKOD` | TDBSMALLINT | evet |  | Fırsat kaydında gelecek olan satıs asaması ondegerini gosterir. |
| 32 | `FIRSATOLASILIK` | TDBFLOAT | evet | `0` | Fırsat kaydında gelecek olan olasılık ondegerını gosterır. |
| 33 | `AKTKAPATMAGUN` | TDBSMALLINT | evet | `0` | Pazarlama aktivite not kaydında ondeger olarak gelecek olan aktivite baslangıc ve bitis tarihleri arasındaki gun sayısı. |
| 34 | `OTOFIRSAT` | char(1) | evet | `H` | Otomatik fırsatlastırma var mı gosterir. |
| 35 | `ADAYFIRSATAYRIEKIP` | char(1) | evet | `H` | Aday otomatik fırsatlastırıldıgında,fırsat sahibi neye gore belirlenecek gosterir. |
| 36 | `HEDEFORAN1` | TDBFLOAT | evet | `0` | Ocak ayı için hedef oranı gosterır. |
| 37 | `HEDEFORAN2` | TDBFLOAT | evet | `0` | Subat ayı için hedef oranı gosterır. |
| 38 | `HEDEFORAN3` | TDBFLOAT | evet | `0` | Mart ayı için hedef oranı gosterır. |
| 39 | `HEDEFORAN4` | TDBFLOAT | evet | `0` | Nisan ayı için hedef oranı gosterır. |
| 40 | `HEDEFORAN5` | TDBFLOAT | evet | `0` | Mayıs ayı için hedef oranı gosterır. |
| 41 | `HEDEFORAN6` | TDBFLOAT | evet | `0` | Haziran ayı için hedef oranı gosterır. |
| 42 | `HEDEFORAN7` | TDBFLOAT | evet | `0` | Temmuz ayı için hedef oranı gosterır. |
| 43 | `HEDEFORAN8` | TDBFLOAT | evet | `0` | Agustos ayı için hedef oranı gosterır. |
| 44 | `HEDEFORAN9` | TDBFLOAT | evet | `0` | Eylul ayı için hedef oranı gosterır. |
| 45 | `HEDEFORAN10` | TDBFLOAT | evet | `0` | Ekim ayı için hedef oranı gosterır. |
| 46 | `HEDEFORAN11` | TDBFLOAT | evet | `0` | Kasım ayı için hedef oranı gosterır. |
| 47 | `HEDEFORAN12` | TDBFLOAT | evet | `0` | Aralık ayı için hedef oranı gosterır. |
| 48 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 50 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 59 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 60 | `D_YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 62 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 63 | `V_YEDEK12` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 64 | `STOKKISIT` | text | evet |  | Aday/Fırsat ürün girişlerinde stok rehberini kısıtlamak için kullanılan sahadır |
| 65 | `ADAYINC` | varchar(15) | evet |  | Aday seri başlangıç degerini gosterir. |
| 66 | `FIRSINC` | varchar(15) | evet |  | Fırsat seri baslangıc degerini gosterir. |
| 67 | `SATINC` | varchar(15) | evet |  | Satıs aktivitesi seri baslangıc degerini gosterir. |
| 68 | `PAZINC` | varchar(15) | evet |  | Pazarlama aktivitesi seri baslangıc degerini gosterir. |
| 69 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 70 | `DOVIZ_CEVRIM` | TDBBYTE | evet | `0` | Doviz cevrim degerini gosterir.Doviz alıs icin 1;doviz satıs icin 2;efektif alıs icin 3,efektif satıs için 4 degerini alır. |
| 71 | `CARINCSAHATAN` | char(1) | evet | `H` | Cari kodları ardısık gitsin isaretli mi gosterir. |
| 72 | `CARINC` | varchar(15) | evet |  | Cari kodları seri baslangıc degerini gosterir. |
| 73 | `SKYDURUMONDEGER` | TDBGRUPKOD | evet |  | Sikayet kaydında gelecek olan durum ondegerini gosterir. |
| 74 | `SKYCEVAPSUREGUN` | TDBSMALLINT | evet | `0` | Sikayet karsılama suresi. |
| 75 | `SKYKODSERIVAR` | char(1) | evet | `H` | Sikayet kodları ardısık mı gosterir. |
| 76 | `SKYSERI` | varchar(15) | evet |  | Sikayet kodları seri başlangıç degerini gosterir. |
| 77 | `SKYAKTSERIVAR` | char(1) | evet | `H` | Aktivite kodları ardısık mı gosterir. |
| 78 | `SKYAKTSERI` | varchar(15) | evet |  | Aktivite kodları seri başlangıç degerini gosterir. |
| 79 | `SKYAKTTIPIONDEGER` | TDBGRUPKOD | evet |  | Sikayet kaydında gelecek olan aktivite ondegeri. |
| 80 | `GUNUGECMISACIKSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 81 | `GUNUGECMEMISACIKSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 82 | `TOPACIKSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 83 | `GUNUGECMISKAPALISKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 84 | `GUNUGECMEMISKAPALISKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 85 | `TOPKAPALISKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 86 | `GUNUGECMISSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 87 | `GUNUGECMEMISSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |
| 88 | `TOPSKYCOLOR` | TDBINTEGER | evet | `0` | Şikayetlere renk atamak için kullanılan sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMPARAM_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCRMPARAM_FKEY2` | `SKYDURUMONDEGER` |
| FOREIGN KEY | `TBLCRMPARAM_FKEY3` | `SKYAKTTIPIONDEGER` |
| PRIMARY KEY | `TBLCRMPARAM_PKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMPARAM_PKEY` | `ISLETME_KODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MALIYILBASTAR, MALIYILBITTAR, MALIYILBASMI, DOVIZTAKIBI, IADEKONTROL
FROM dbo.TBLCRMPARAM WITH (NOLOCK);
```
