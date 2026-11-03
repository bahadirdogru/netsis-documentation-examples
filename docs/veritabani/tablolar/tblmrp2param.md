---
title: TBLMRP2PARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrp2param/
---

# TBLMRP2PARAM

> MRP PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 95

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `VARDIYA1BAS` | TDBDATETIME | evet |  | 1. vardiya başlangıcını tutan sahadır. |
| 3 | `VARDIYA2BAS` | TDBDATETIME | evet |  | 2. vardiya başlangıcını tutan sahadır. |
| 4 | `VARDIYA3BAS` | TDBDATETIME | evet |  | 3. vardiya başlangıcını tutan sahadır. |
| 5 | `VARDIYA4BAS` | TDBDATETIME | evet |  | 4. vardiya başlangıcını tutan sahadır. |
| 6 | `VARDIYA1SURE` | TDBFLOAT | evet |  | 1. vardiya toplam suresidir. |
| 7 | `VARDIYA2SURE` | TDBFLOAT | evet |  | 2. vardiya toplam suresidir. |
| 8 | `VARDIYA3SURE` | TDBFLOAT | evet |  | 3. vardiya toplam suresidir. |
| 9 | `VARDIYA4SURE` | TDBFLOAT | evet |  | 4. vardiya toplam suresidir. |
| 10 | `VARDIYA1KISISAY` | TDBFLOAT | evet |  | 1.vardiyada calısan kişi sayısıdır. |
| 11 | `VARDIYA2KISISAY` | TDBFLOAT | evet |  | 2.vardiyada calısan kişi sayısıdır. |
| 12 | `VARDIYA3KISISAY` | TDBFLOAT | evet |  | 3.vardiyada calısan kişi sayısıdır. |
| 13 | `VARDIYA4KISISAY` | TDBFLOAT | evet |  | 4.vardiyada calısan kişi sayısıdır. |
| 14 | `SURETIPI` | TDBBYTE | evet |  | Dakika ise 0; saat ise 1 degerini tutar. |
| 15 | `ISEMMAMULBAZINDA` | char(1) | evet |  | Siparis/mamul bazında isemri ve planlama parametresi isaretli ise E degerini tutan sahadır. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `RECETESIZSTKMGPAL` | char(1) | evet |  | Recetesi olmayan stokları MGP ye dahil et parametresi isaretli ise E degerini tutan sahadır. |
| 21 | `MRPYAZILIM` | TDBSMALLINT | hayır |  | İleri uretim planlama parametresi isaretli ise 1 degerini tutar. |
| 22 | `HESAPLAMASURESI` | TDBFLOAT | hayır |  | İleri uretim planlama maksimum calısma suresidir. |
| 23 | `TAMAMLAMATIPI` | TDBSMALLINT | hayır |  | Tamamlanma tipi zamanında dur ise 0;devam et ise 1 degerini tutar. |
| 24 | `DETAYLICIZELGELEMESURESI` | TDBINTEGER | hayır |  | Detaylı cizelge suresini tutar. |
| 25 | `AMACFONSIYONU` | TDBSMALLINT | hayır |  | Amac fonksiyonunu tutar. |
| 26 | `MUSTERIBAZINDAPLANLAMA` | char(1) | hayır |  | Müşteri Bazında Planlama parametresi isaretli ise E degerini tutan sahadır. |
| 27 | `PLANLISSIPARISLERIKULLAN` | char(1) | hayır |  | Kullanılmıyor. |
| 28 | `GUNCELDURUMBILGISIKULLAN` | char(1) | hayır |  | Güncel Durum Bilgisi Kullan parametresi isaretli ise E degerini tutan sahadır |
| 29 | `MSMQADRESS` | varchar(255) | evet |  | Mesaj kuyruk adresini tutan sahadır. |
| 30 | `PAKETDOSYAYOLU` | varchar(255) | evet |  | Giden/gelen dosya yolu sahasıdır. |
| 31 | `IUPC_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `IUPC_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `IUPC_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `IUPC_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `IUPL_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `IUPL_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `IUPD_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `IUPD_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `IUPS_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `IUPS_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `FORECAST_PERIYOT_TIPI` | char(1) | evet |  | Tahmin degeri periyod tipi sahasıdır. |
| 42 | `FORECAST_PERIYOT_SURE` | TDBBYTE | evet |  |  |
| 43 | `MPS_PERIYOT_TIPI` | char(1) | evet |  | AUP degerini peritod tipini tutar. |
| 44 | `MPS_PERIYOT_SURE` | TDBBYTE | evet |  |  |
| 45 | `AZAMI_STOK_BAK` | char(1) | evet |  | AUP miktarları hesaplanırken azami stok bakiyeleri dikkate alınsın. |
| 46 | `KAPASITE_BAK` | char(1) | evet |  | AUP miktarları hesaplanırken fabrika kapasitesi dikkate alınsın. |
| 47 | `SATSIPKONTROL` | TDBSMALLINT | evet |  | Satıcı siparislerini kontrol et parametresi isaretli ise 1 degerini tutar. |
| 48 | `ISEMIRKONTROL` | TDBSMALLINT | evet |  | İs emirlerini kontrol et parametresi isaretli ise 1 degerini tutar. |
| 49 | `SIPSATIRBAZINDAPLANLAMA` | char(1) | evet |  | Siparis satısı bazında is emri ve planlama parametresi isaretli ise E degerini tutar. |
| 50 | `MGPDENISEMRINIDUZELT` | char(1) | evet |  | MGP den is emri olusturmada duzeltme yapılsın. |
| 51 | `FORECAST_KUMULE_BILGISI` | TDBSMALLINT | evet |  | Tahminleme kumulasyon bilgisini tutar. |
| 52 | `FORECAST_CARPAN` | TDBSMALLINT | evet |  | Tahmin carpan sahasıdır. |
| 53 | `SATICISECMEYONTEMI` | char(1) | evet |  | MGP olusturmada satıcı belirlem yontemini tutar. |
| 54 | `ISEMRITAKVIMKONTROL` | char(1) | evet |  | MGP Oluşturmada İş Emirleri İçin Fabrika Takvimi Kontrol Edilsin parametresi isaretli ise E degerini tutan sahadır |
| 55 | `SIPARISTAKVIMKONTROL` | char(1) | evet |  | MGP Oluşturmada Satıcı Siparişleri için Firma Takvimi Kontrol Edilsin parametresi isaretli ise E degerini tutan sahadır |
| 56 | `SATICIMUSSIPBAZPLAN` | char(1) | evet |  | Sipariş bazında satıcı siparişi ve planlama parametresi yer alır. |
| 57 | `SATICIMUSSIPSATIRBAZPLAN` | char(1) | evet |  | Sipariş satırı bazında satıcı siparişi ve planlama parametresi yer alır. |
| 58 | `SATICIMUSSIPBILGISAHA` | TDBBYTE | evet |  | satıcı siparişinde müşteri sipariş bilgilerinin tutulacağı saha bilgisi yer alır. |
| 59 | `SAT_SIP_DENGELE` | char(1) | evet |  | Satıcı siparişi dengeleme uygulaması kullanılsın parametresi yer alır. |
| 60 | `ISEMRI_DENGELE` | char(1) | evet |  | İş emri dengeleme ekranı kullanılsın parametresi bilgisi yer alır. |
| 61 | `MAMUL_ISEMRIBAZ_TAKIP` | char(1) | evet |  | Sipairş mamul bazında iş emri ve planlama parametresi bilgisi yer alır. |
| 62 | `TEZGAH_CIZELGE` | char(1) | evet |  |  |
| 63 | `MRP_REZERVASYON_SISTEMI` | char(1) | evet |  |  |
| 64 | `SIRALAMA_KRITERI` | TDBBYTE | evet |  |  |
| 65 | `PLAN_SIRALAMA_KRITERI` | char(1) | evet |  |  |
| 66 | `FORECAST_MISSING` | char(1) | hayır |  | Tahmin çarpan sayısı bilgisi yer alır. |
| 67 | `FORECAST_HAR_UZUNLUK` | TDBINTEGER | hayır |  | Hareketli ortalama periyot uzunluğu bilgisi yer alır. |
| 68 | `FORECAST_SEZON_DONEM` | TDBINTEGER | hayır |  | Sezon periyot uzunluğu bilgisi yer alır. |
| 69 | `FORECAST_OUTLIER` | char(1) | hayır |  | Aykırı değer ayıklansın parametre bilgisi yer alır. |
| 70 | `MPS_IHTIYAC_BELIRLEME` | TDBINTEGER | hayır |  | İhtiyaç belirleme yöntemi bilgisi yer alır. |
| 71 | `MPS_DUZLEME` | TDBINTEGER | hayır |  |  |
| 72 | `MPS_DONDURULACAK_PERIYOT` | TDBINTEGER | hayır |  | Dondurulacak periyot sayısı bilgisi yer alır. |
| 73 | `MPS_SIPARIS_PARCALAMA` | TDBINTEGER | hayır |  | Sipariş parçalama bilgisi yer alır. |
| 74 | `MPS_BACKWARD_SIPARIS_DUZLEME` | TDBINTEGER | hayır |  | Sipariş düzleme yöntemi bilgisi yer alır. |
| 75 | `MPS_DUZLEME_PERIYOT` | TDBINTEGER | hayır |  | Düzlenecek periyot sayısı bilgisi yer alır. |
| 76 | `MPS_KUMULE_TIPI` | TDBSMALLINT | evet |  |  |
| 77 | `KAPASITE_PLAN_VERISI` | char(1) | hayır |  | Planlama verisi parametresi yer alır. |
| 78 | `KAPASITE_IHTIYAC_BOL` | char(1) | hayır |  | İhtiyaçlar bölünebilsin parametresi bilgisi yer alır. |
| 79 | `KAPASITE_DENGE_POL` | char(1) | hayır |  | Kapasite denegeleme politiksaında seçili bilgi yer alır. |
| 80 | `CIZELGE_REZERVASYON_KONTROL` | char(1) | hayır |  | Rezervasyınlar kontrol edilsin parametresi yer alır. |
| 81 | `VARSAYILAN_SATSIP_YONTEM` | char(1) | hayır |  | Varsayılan satıcı siparişi planlama yöntemi bilgisi yer alır. |
| 82 | `VARSAYILAN_ISEMRI_YONTEM` | char(1) | hayır |  | Varsayılan iş emri planlama yönteminde seçili parametre bilgisi yer alır. |
| 83 | `IRSALIYELER_DAHIL` | char(1) | hayır |  | Faturalaştırılmamaış irsaliyeler dahil edilsin parametresi tutulur. |
| 84 | `IADELER_DAHIL` | char(1) | hayır |  | iadeler dahil edilsin parametresi bilgisi tutulur |
| 85 | `IADE_YONTEMI` | TDBSMALLINT | hayır |  | İadeleri paylaştırma yöntemi bilgisi yer alır. |
| 86 | `DENGE_URETDEPO` | char(1) | hayır |  | Dengeleme ekranlarında giriş depo kodu kontrolü yapılsın. |
| 87 | `RECETESI_OLMAYANLAR_DAHIL` | char(1) | hayır |  | Reçetesi olmayanlar içinde çalışması için eklenen saha |
| 88 | `MGP_REWORKLER_DAHIL` | char(1) | hayır |  |  |
| 89 | `SADECE_ARDISIK_PERIYOTLAR` | char(1) | hayır |  |  |
| 90 | `IUP_GANTT_MAKGORUNUM_TIPI` | TDBSMALLINT | hayır |  | Gannt sonuç raporuna "Departman\Makine Kodu" bazında gösterim desteği eklendi.MRP parametrelerine "Gantt Sonuç Raporu - Makine Görünümü" seçeneği eklendi. Bu parametre departman bazında seçilirse, "Gannt Sonuç Raporu" ve "İstasyon Kodu" geçen çizelgeleme raporlarına "Departman Kodu" kolunu da eklenir. |
| 91 | `MGP_YANURUN` | char(1) | hayır |  | MGP oluşturmada yan ürün kullanımları dikkate alınsın parametresi yer alır. |
| 92 | `MGP_TAMAMLANMAMIS_SA_BEL_DAHIL` | char(1) | hayır |  | Tamamlanmamış satınalma belgeleri MGP'ye dahil edilsin parametresi yer almaktadır. |
| 93 | `DDMRP_AYUK` | TDBFLOAT | hayır |  | Ani Yükseliş Ufku Katsayısı bilgisi yer alır. |
| 94 | `DDMRP_AYUS` | TDBFLOAT | hayır |  | Ani Yükseliş Ufku Sabit Değeri bilgisi yer alır. |
| 95 | `DDMRP_AYEK` | TDBFLOAT | hayır |  | Ani yükseliş eşiği katsayısı bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, VARDIYA1BAS, VARDIYA2BAS, VARDIYA3BAS, VARDIYA4BAS, VARDIYA1SURE
FROM dbo.TBLMRP2PARAM WITH (NOLOCK);
```
