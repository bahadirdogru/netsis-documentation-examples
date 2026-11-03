---
title: TBLPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblparam/
---

# TBLPARAM

> NETSİS GENEL PARAMETRE KAYITLARINI TUTAR

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 235

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `LOCAL_DEPO` | char(1) | evet |  | Stok parametre kayıtlarında lokal depo uygulaması parametresini gösterir. |
| 3 | `PROMOSYON` | char(1) | evet |  | Promosyon kodunu gösterir. Default NULL değeri atılır. |
| 4 | `FIAT_SISTEMI` | char(1) | evet |  | Stok parametre kayıtlarında özel fiyat sistemi parametresini gösterir. |
| 5 | `HES_SEV_SAB` | char(1) | evet |  | Muhasebe parametre kayıtları seviye takibi sekmesinde seviye takibi yapılacak parametresini gösterir. |
| 6 | `HS_SEV` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye takibi sekmesinde kaç seviye tanımlanacak alanında girilen seviye sayısını gösterir. |
| 7 | `SEVIYELER1` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı1 alanında girilen seviye sayısını gösterir. |
| 8 | `SEVIYELER2` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı2 alanında girilen seviye sayısını gösterir. |
| 9 | `SEVIYELER3` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı3 alanında girilen seviye sayısını gösterir. |
| 10 | `SEVIYELER4` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı4 alanında girilen seviye sayısını gösterir. |
| 11 | `SEVIYELER5` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı5 alanında girilen seviye sayısını gösterir. |
| 12 | `SEVIYELER6` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı6 alanında girilen seviye sayısını gösterir. |
| 13 | `SEVIYELER7` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı7 alanında girilen seviye sayısını gösterir. |
| 14 | `SEVIYELER8` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı8 alanında girilen seviye sayısını gösterir. |
| 15 | `SEVIYELER9` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı9 alanında girilen seviye sayısını gösterir. |
| 16 | `SEVIYELER10` | TDBBYTE | evet |  | Muhasebe parametre kayıtları seviye sayısı10 alanında girilen seviye sayısını gösterir. |
| 17 | `BIRDEN_FAZLA_KASA` | char(1) | evet |  | Kasa>işlemler>ek işlemler çok kasaya geçme işlemi yapıldığında 'E' değerini, tek kasaya dönme işlemi yapılırsa 'H' değerini gösterir. |
| 18 | `FIRMA_DOV_TIPI` | TDBBYTE | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında düzeltme tipi alanına girilen firma döviz tipini gösterir. |
| 19 | `PLASIYER_VAR` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında plasiyer uygulaması var parametresini gösterir. |
| 20 | `DOVIZ_TAKIBI` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında döviz uygulaması var parametresini gösterir. |
| 21 | `DOVIZ_CEVRIM` | TDBBYTE | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında döviz çevrim tipi alanında seçilen döviz çevrimini gösterir. |
| 22 | `LOG_TUTULACAK` | char(1) | evet |  | Log tutulacak parametresini gösterir. |
| 23 | `CRAPKOD` | char(1) | evet |  | Cari parametre kayıtlarında hareketlerde rapor kodu girilecek parametresini gösterir. |
| 24 | `ENT_KAYIT_TAR` | TDBDATETIME | evet |  | Entegrasyon kayıt tarihini gösterir. |
| 25 | `MH_HES_ENT` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında muhasebe entegre parametresini gösterir. |
| 26 | `MSEN_ENT` | char(1) | evet |  | Entegrasyon kodları çek/senet sekmesinde müşteri senetleri entegre parametresini gösterir. |
| 27 | `MSEN_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları çek/senet sekmesinde müşteri senetleri hesabı için girilen muhasebe kodunu gösterir. |
| 28 | `MCEK_ENT` | char(1) | evet |  | Entegrasyon kodları çek/senet sekmesinde müşteri çekleri entegre parametresini gösterir. |
| 29 | `MCEK_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları çek/senet sekmesinde müşteri çekleri hesabı için girilen muhasebe kodunu gösterir. |
| 30 | `BSEN_ENT` | char(1) | evet |  | Entegrasyon kodları çek/senet sekmesinde borç senetleri entegre parametresini gösterir. |
| 31 | `BSEN_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları çek/senet sekmesinde borç senetleri hesabı için girilen muhasebe kodunu gösterir. |
| 32 | `BCEK_ENT` | char(1) | evet |  | Entegrasyon kodları çek/senet sekmesinde borç çekleri entegre parametresini gösterir. |
| 33 | `BCEK_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları çek/senet sekmesinde borç çekleri hesabı için girilen muhasebe kodunu gösterir. |
| 34 | `MUH_MUSTD` | char(1) | evet |  | Entegrasyon kodları stok/cari sekmesinde müşteri hesabı detaylı parametresini gösterir. |
| 35 | `MUH_SATD` | char(1) | evet |  | Entegrasyon kodları stok/cari sekmesinde satıcı hesabı detaylı parametresini gösterir. |
| 36 | `MUST_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde müşteri hesabı alanına girilen muhasebe kodunu gösterir. |
| 37 | `SAT_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde satıcı hesabı alanına girilen muhasebe kodunu gösterir. |
| 38 | `ALIS_HES_DET` | char(1) | evet |  | Entegrasyon kodları stok/cari sekmesinde mal alış hesabı detaylı parametresini gösterir. |
| 39 | `ALIS_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde mal alış hesabı alanına girilen muhasebe kodunu gösterir. |
| 40 | `IADEAL_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde alıştan iade hesabı alanına girilen muhasebe kodunu gösterir. |
| 41 | `SATIS_HES_DET` | char(1) | evet |  | Entegrasyon kodları stok/cari sekmesinde mal satış hesabı detaylı parametresini gösterir. |
| 42 | `SATIS_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde mal satış hesabı alanına girilen muhasebe kodunu gösterir. |
| 43 | `IADESAT_HES_KOD` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde satıştan iade hesabı alanına girilen muhasebe kodunu gösterir. |
| 44 | `SAT_HES_KOD1` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde diğer satış hesabı-1 alanına girilen muhasebe kodunu gösterir. |
| 45 | `SAT_HES_KOD2` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde diğer satış hesabı-2 alanına girilen muhasebe kodunu gösterir. |
| 46 | `SAT_HES_KOD3` | TDBMUHKOD | evet |  | Entegrasyon kodları stok/cari sekmesinde diğer satış hesabı-3 alanına girilen muhasebe kodunu gösterir. |
| 47 | `SATIS_FATURA_ENT` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış faturaları entegre parametresini gösterir. |
| 48 | `ALIS_FATURA_ENT` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde alış faturaları entegre parametresini gösterir. |
| 49 | `DEPO_TRANS_ENT` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde depolar arası transfer faturaları entegre parametresini gösterir. |
| 50 | `OKOD1_SATMUHKODD` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod ile satış hesapları değişecek parametresini gösterir. |
| 51 | `SATIS_KOD_ADEDI` | TDBBYTE | evet |  | Satiş kodu adedinin bilgisini tutar |
| 52 | `KODUN_DEGERI_1` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-1 alanına girilen özel kodu gösterir. |
| 53 | `KODUN_DEGERI_2` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-2 alanına girilen özel kodu gösterir. |
| 54 | `KODUN_DEGERI_3` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-3 alanına girilen özel kodu gösterir. |
| 55 | `KODUN_DEGERI_4` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-4 alanına girilen özel kodu gösterir. |
| 56 | `SATIS_KODU_1` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-1 alanında seçilen satış hesaplarını gösterir. |
| 57 | `SATIS_KODU_2` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-2 alanında seçilen satış hesaplarını gösterir. |
| 58 | `SATIS_KODU_3` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-3 alanında seçilen satış hesaplarını gösterir. |
| 59 | `SATIS_KODU_4` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-4 alanında seçilen satış hesaplarını gösterir. |
| 60 | `SAT_ISK_ENT` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış fat. İskontoları entegre parametresini gösterir. |
| 61 | `ALIS_ISK_ENT` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde alış fat. İskontoları entegre parametresini gösterir. |
| 62 | `OZELKOD2DEGISIM` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod2 ile değişim parametresini gösterir. |
| 63 | `OZELKOD2DEGERI` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-1 sekmesinde özel kod2 değerini gösterir. |
| 64 | `ALIS_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış için satır iskontosu hesabını gösterir. |
| 65 | `ALIS_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış için mal fazlası iskontosu hesabını gösterir. |
| 66 | `ALIS_HES_KOD_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış için genel iskonto-1 hesabını gösterir. |
| 67 | `ALIS_HES_KOD_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış için genel iskonto-2 hesabını gösterir. |
| 68 | `ALIS_HES_KOD_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış için genel iskonto-3 hesabını gösterir. |
| 69 | `VERISK_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış için satır iskontosu hesabını gösterir. |
| 70 | `VERISK_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış için mal fazlası iskontosu hesabını gösterir. |
| 71 | `VERISK_HES_KOD_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış için genel iskonto-1 hesabını gösterir. |
| 72 | `VERISK_HES_KOD_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış için genel iskonto-2 hesabını gösterir. |
| 73 | `VERISK_HES_KOD_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış için genel iskonto-3 hesabını gösterir. |
| 74 | `ALISM_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde alışta ek maliyet-1 hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 75 | `ALISM_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde alışta ek maliyet-2 hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 76 | `SATISM_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta ek maliyet-1 hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 77 | `SATISM_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta ek maliyet-2 hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 78 | `MIK_MUHA_GECSIN` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde faturadan miktarlar faturaya geçecek parametresini gösterir. |
| 79 | `SAT_ISK_AL_DEGIS` | char(1) | evet |  |  |
| 80 | `BIRDEN_FAZLA_KDV` | char(1) | evet |  | Entegrasyon kodları fatura kdv sekmesinde değişik kdv oranları parametresini gösterir. |
| 81 | `KAC_KDV` | TDBBYTE | evet |  | Entegrasyon kodları fatura kdv sekmesinde kdv oran sayısını gösterir. |
| 82 | `KDV_ORAN_1` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 83 | `KDV_ORAN_2` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 84 | `KDV_ORAN_3` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 85 | `KDV_ORAN_4` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 86 | `KDV_ORAN_5` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 87 | `IND_KDV_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 88 | `IND_KDV_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 89 | `IND_KDV_HES_KOD_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 90 | `IND_KDV_HES_KOD_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 91 | `IND_KDV_HES_KOD_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 92 | `TAHED_KDV_HES_KOD_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 93 | `TAHED_KDV_HES_KOD_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 94 | `TAHED_KDV_HES_KOD_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 95 | `TAHED_KDV_HES_KOD_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 96 | `TAHED_KDV_HES_KOD_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 97 | `IADEKDVIND_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 98 | `IADEKDVIND_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 99 | `IADEKDVIND_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 100 | `IADEKDVIND_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 101 | `IADEKDVIND_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 102 | `IADEKDVODE_1` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 103 | `IADEKDVODE_2` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 104 | `IADEKDVODE_3` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 105 | `IADEKDVODE_4` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 106 | `IADEKDVODE_5` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 107 | `MALBAZINDA_ISKONTO` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde mal bzında iskonto var mı parametresini gösterir. |
| 108 | `HANGI_ISKONTO` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde mal bazında iskonto tipini gösterir. |
| 109 | `ALISK_MBAZ` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alışta iskonto mal bazında parametresini gösterir. |
| 110 | `SATISK_MBAZ` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satışta iskonto mal bazında parametresini gösterir. |
| 111 | `ALISK_HANGI_SATKOD` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alışta hangi satış kodu alanında seçilen satış hesaplarını gösterir. |
| 112 | `SATISK_HANGI_SATKOD` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satışta hangi satış kodu alanında seçilen satış hesaplarını gösterir. |
| 113 | `HANGI_MIKTAR` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde faturadan miktarlar faturaya geçecek parametresinin işaretlenmesiyle aktif olan ölçü birimi alanında seçilen ölçü birimini gösterir. |
| 114 | `MALBAZKDV` | char(1) | evet |  | Entegrayon kodları fatura kdv sekmesinde mal bazında kdv parametresini gösterir. |
| 115 | `KF_ENT_BORCKOD` | varchar(35) | evet |  | Entegrasyon kodları senet/çek sekmesinde kur farkı borç hesabını gösterir. |
| 116 | `KF_ENT_ALACKOD` | varchar(35) | evet |  | Entegrasyon kodları senet/çek sekmesinde kur farkı alacak hesabını gösterir. |
| 117 | `YUVARLAMA_KODU` | varchar(35) | evet |  | Entegrasyon kodları genel sekmesinde yuvarlama nedeni ile fark veren fişlerde kapatma borç hesap kodununa girilen muhasebe kodunu gösterir. |
| 118 | `ORTAKISLEMTIP` | varchar(8) | evet |  | Ortak işlem tipinin tutlduğu sahadır |
| 119 | `USER_SOR` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında entegre kullanıcı no sorulsun parametresini gösterir. |
| 120 | `PAKET_KULLANICI_SAY` | TDBBYTE | evet |  | Kullanıcı sayısını gösterir. |
| 121 | `CONCURRENT_USER_CNT` | TDBBYTE | evet |  | Aynı isimle çalışma adedini gösterir. |
| 122 | `OTOMATIK_ISLEM_TIPI` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında otomatik işlem tipi parametresini gösterir. |
| 123 | `TARIH_KILIT_SIFRE` | varchar(20) | evet |  | Kullanıcı işlemlerindeki tarih kilitleme şifresini gösterir. |
| 124 | `YEDEK1` | varchar(35) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde alışta iade ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 125 | `YEDEK2` | varchar(35) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 126 | `YEDEK3` | varchar(35) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde alışta ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 127 | `YEDEK4` | varchar(35) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta iade ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 128 | `YEDEK5` | varchar(35) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde alışta ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 129 | `YEDEK6` | varchar(8) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında para birimi alanına girilen kayıtları gösterir. |
| 130 | `YEDEK7` | varchar(8) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında para birimi alanına girilen kayıtları gösterir. |
| 131 | `YEDEK8` | varchar(8) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta iade ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 132 | `YEDEK9` | varchar(8) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta iade ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 133 | `YEDEK10` | varchar(8) | evet |  | Entegrasyon kodlarında fatura ek maliyet sekmesinde satışta iade ötv hesabında tanımlanan muhasebe hesap kodunu gösterir. |
| 134 | `YEDEK11` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında proje uygulaması var parametresini gösterir. |
| 135 | `YEDEK12` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında seri takibi var parametresini gösterir. |
| 136 | `YEDEK13` | char(1) | evet |  | Entegrasyon kodları senet/çek sekmesinde dövizli senet/çek için özel hesap kodu uygulaması var mı parametresini gösterir. |
| 137 | `YEDEK14` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında enter tuş desteği parametresini gösterir. |
| 138 | `YEDEK15` | char(1) | evet |  | Entegrasyon kodları senet/çek sekmesinde dekont/senet/çek modülünde kur farkı kayıtları yapılsın mı parametresini gösterir. |
| 139 | `YEDEK16` | char(1) | evet |  | Stok parametre kayıtlarında karma koli uygulaması parametresini gösterir. |
| 140 | `YEDEK17` | char(1) | evet |  | Cari parametre kayıtlarında özel hesapta proje kodu kontrol edilecek parametresini gösterir. |
| 141 | `YEDEK18` | char(1) | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde alış iade iskonto mal bazında parametresini gösterir. |
| 142 | `YEDEK19` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında özel hesap penceresi gösterilmesin parametresini gösterir. |
| 143 | `YEDEK20` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında özel hesap penceresi gösterilmesin parametresini gösterir. |
| 144 | `YEDEK21` | TDBBYTE | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde mal bazında iskonto tipi alanında seçilen hesap tipini gösterir. |
| 145 | `YEDEK22` | TDBBYTE | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade hangi satış kodu sahasında seçilen satış hesaplarını gösterir. |
| 146 | `YEDEK23` | TDBBYTE | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade hangi satış kodu sahasında seçilen satış hesaplarını gösterir. |
| 147 | `YEDEK24` | TDBBYTE | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade hangi satış kodu sahasında seçilen satış hesaplarını gösterir. |
| 148 | `YEDEK25` | TDBBYTE | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 149 | `YEDEK26` | TDBSMALLINT | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 150 | `YEDEK27` | TDBSMALLINT | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 151 | `YEDEK28` | TDBSMALLINT | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 152 | `YEDEK29` | TDBSMALLINT | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 153 | `YEDEK30` | TDBSMALLINT | evet |  | Entegrasyon kodları fatura iskonto-2 sekmesinde satış iade iskonto mal bazında parametresini gösterir. |
| 154 | `YEDEK31` | TDBINTEGER | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında aktif alan rengi alanında seçilen renki gösterir. |
| 155 | `YEDEK32` | TDBINTEGER | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında pencere rengi alanında seçilen renki gösterir. |
| 156 | `YEDEK33` | TDBINTEGER | evet |  | Entegrasyon kodları genel sekmesinde aktarım yuvarlama bazı alanında girileni gösterir. |
| 157 | `YEDEK34` | TDBINTEGER | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında NDI uygulaması var parametresini gösterir. |
| 158 | `YEDEK35` | TDBINTEGER | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında NDI uygulaması var parametresini gösterir. |
| 159 | `YEDEK36` | TDBDATETIME | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında NDI uygulaması var parametresini gösterir. |
| 160 | `YEDEK37` | TDBDATETIME | evet |  | Yardımcı programlar şirket/şube/parametre kayıtlarında NDI uygulaması var parametresini gösterir. |
| 161 | `EPOSTAVAR` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında e-posta uygulaması var mı parametresini gösterir. |
| 162 | `SMTPSNAME` | varchar(100) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında smtp server adı alanına girilen mail adresini gösterir. |
| 163 | `SMTPUNAME` | varchar(100) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında smptp kullanıcı adı alanına girilen kullanıcı adını gösterir. |
| 164 | `SMTPUPWD` | varchar(50) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında smptp şifre alanına girilen şifreyi gösterir. |
| 165 | `ILERIGUVENLIKSISTEMI` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında güvenlik uygulaması alanında tanımlanan kaydı gösterir. Kolonbazı güvenlik sistemi seçili ise '2', değilse 'H' değerini gösterir. |
| 166 | `WORKPLACEVARMI` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında workplace uygulaması var parametresini gösterir. |
| 167 | `FORMBAZIGUVENLIK` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında formbazı güvenlik uygulaması var mı parametresini gösterir. |
| 168 | `HIZLIREHBERKULLAN` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında rehber kullanım şekli alanında seçilen rehber tipini gösterir. |
| 169 | `OKOD1_ALMUHKODD` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod ile alış hesapları değişecek parametresini gösterir. |
| 170 | `ALIS_KODU_1` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde alış kodu-1 alanında seçilen satış hesaplarını gösterir. |
| 171 | `ALIS_KODU_2` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde alış kodu-2 alanında seçilen satış hesaplarını gösterir. |
| 172 | `ALIS_KODU_3` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-3 alanında seçilen alış hesaplarını gösterir. |
| 173 | `ALIS_KODU_4` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde satış kodu-4 alanında seçilen alış hesaplarını gösterir. |
| 174 | `ALIS_KODUN_DEGERI_1` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-1 alanına girilen özel kodu gösterir. |
| 175 | `ALIS_KODUN_DEGERI_2` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-2 alanına girilen özel kodu gösterir. |
| 176 | `ALIS_KODUN_DEGERI_3` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-3 alanına girilen özel kodu gösterir. |
| 177 | `ALIS_KODUN_DEGERI_4` | char(1) | evet |  | Entegrasyon kodları fatura genel sekmesinde özel kod-4 alanına girilen özel kodu gösterir. |
| 178 | `ISLTIPBAZHESKODDEGISIM` | char(1) | evet |  | Entegrasyon kodları genel sekmesinde işlme tipi bazında hesap kod değişimi parametresini gösterir. |
| 179 | `SCRIPTSYSTEM` | char(1) | evet |  | Yardımcı programlar şirket/şube/parametre tanımlamalarında dinamik kodlama sistemi parametresini gösterir. |
| 180 | `YEDEK60` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 181 | `YEDEK61` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 182 | `YEDEK62` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 183 | `YEDEK63` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 184 | `YEDEK64` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 185 | `YEDEK65` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 186 | `YEDEK66` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 187 | `YEDEK67` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 188 | `YEDEK68` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 189 | `YEDEK69` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 190 | `KDV_ORAN_6` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 191 | `KDV_ORAN_7` | TDBKDVORAN | evet |  | Entegrasyon kodları fatura kdv sekmesinde tanımlanan kdv oranlarını gösterir. |
| 192 | `IND_KDV_HES_KOD_6` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 193 | `IND_KDV_HES_KOD_7` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 194 | `TAHED_KDV_HES_KOD_6` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 195 | `TAHED_KDV_HES_KOD_7` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura kdv sekmesinde hesaplanan kdv hesaplarını gösterir. |
| 196 | `IADEKDVIND_6` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 197 | `IADEKDVIND_7` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde indirilecek kdv hesaplarını gösterir. |
| 198 | `IADEKDVODE_6` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 199 | `IADEKDVODE_7` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura iade kdv sekmesinde ödenecek kdv hesaplarını gösterir. |
| 200 | `MUHENTEG` | TDBBYTE | evet |  | Entegrasyon havuz sistemi kapatılsın işaretli ise 1 değerini alır değil ise 0 değerini alır. |
| 201 | `MUHCEVRIMICI` | TDBBYTE | evet |  | Muhasebeye doğrudan aktarım yapılsın işaretli ise 1 değerini alır değil ise 0 değerini alır. |
| 202 | `MUHTERSKAYIT` | TDBBYTE | evet |  | Muhasebe fişlerini düzeltme ve silmesinde ters kayıt yapılsın işaretli ise 1 dğerini alır değil ise 0 değerini alır. |
| 203 | `MALDAGSATISENTEG` | char(1) | evet |  | Satış faturalarına yapılan dağıtım entegre edilsn işaretli ise 1 değerini alır. |
| 204 | `MALDAGALISENTEG` | char(1) | evet |  | Alış faturalarına yapılan dağıtım entegre edilsn işaretli ise 1 değerini alır. |
| 205 | `MALDAGSATISKONTOKOD` | char(1) | evet |  | Mal dağıtım satış iskonto hesabı kodu bilgisi |
| 206 | `MALDAGSATGELIRKOD` | char(1) | evet |  | Mal dağıtım satış gelir hesabı bilgisi yer alır. |
| 207 | `FISBAS` | char(1) | evet |  | Fiş basımı yapılsın işaretli ise E değerini alır değil ise H değerini alır. |
| 208 | `DOKUMAN` | TDBBYTE | evet |  | KetsDocPlace entegrasyonu için eklenmiştir. |
| 209 | `DETAYLI_FIAT_LISTESI` | char(1) | evet |  | Detaylı fiyat listesi parametresi açık ise E değerini alır. |
| 210 | `YUVARLAMA_KODU_ALACAK` | varchar(35) | evet |  | Yuvarlama nedeni ile fark veren fişlerde kapatma alacak hesap kodu bilgisi yer alır. |
| 211 | `KKEGGIDER` | TDBMUHKOD | evet |  | Fatura Genel sekmesindeki Kanunen Kabul Edilmeyen Giderler(KKEG) Gider hesabı muhasebe kodu yer alır. |
| 212 | `KKEGKDV` | TDBMUHKOD | evet |  | Fatura Genel sekmesindeki Kanunen Kabul Edilmeyen Giderler(KKEG) KKEG hesabı muhasebe kodu yer alır. |
| 213 | `ALISM_HES_KOD_3` | TDBMUHKOD | evet |  | Fatura ek maliyet sekmesindeki alışta ek maliyet 3 muhasebe hesap kodu bilgisi yer alır. |
| 214 | `SATISM_HES_KOD_3` | TDBMUHKOD | evet |  | Fatura ek maliyet sekmesindeki satışta ek maliyet 3 muhasebe hesap kodu bilgisi yer alır. |
| 215 | `GEKAPALISHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Alış İçin tanımlanan Gekap hesabı yer alır. |
| 216 | `GEKAPALISIADEHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Alış İçin tanımlanan Gekap İade hesabı yer alır. |
| 217 | `GEKAPALISAMBALAJHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Alış İçin tanımlanan Gekap Ambalaj hesabı yer alır. |
| 218 | `GEKAPALISIADEAMBALAJHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Alış İçin tanımlanan Gekap iade ambalaj hesabı yer alır. |
| 219 | `GEKAPSATISHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Satış İçin tanımlanan Gekap hesabı yer alır. |
| 220 | `GEKAPSATISIADEHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Satış İçin tanımlanan Gekap İade hesabı yer alır. |
| 221 | `GEKAPSATISAMBALAJHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Satış İçin tanımlanan Gekap Ambalaj hesabı yer alır. |
| 222 | `GEKAPSATISIADEAMBALAJHES` | TDBMUHKOD | evet |  | Fatura Genel 2 sekmesindeki Satış İçin tanımlanan Gekap iade ambalaj hesabı yer alır. |
| 223 | `ONLINE_ONAY_SISTEMI` | char(1) | evet |  | Online onay sistemi parametresi açık olması durumunda 1 değerini alır |
| 224 | `ALIS_OTV_TEVKIFAT` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura ek maliyet sekmesi alış ÖTV tevkifat hesabı bilgisi yer alır. |
| 225 | `ALIS_IADEOTV_TEVKIFAT` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura ek maliyet sekmesi alış iade ÖTV tevkifat hesabı bilgisi yer alır. |
| 226 | `SATIS_OTV_TEVKIFAT` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura ek maliyet sekmesi satış ÖTV tevkifat hesabı bilgisi yer alır. |
| 227 | `SATIS_IADEOTV_TEVKIFAT` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura ek maliyet sekmesi satış iade ÖTV tevkifat hesabı bilgisi yer alır. |
| 228 | `ISAKIS_ONLINE_ONAY_SISTEMI` | char(1) | evet |  | İş akış online onay sistemi açık ise 1 değerini alır |
| 229 | `TWO_FACTOR` | TDBBYTE | hayır |  | İki adımlı doğrulama yeri değeri yer alır. |
| 230 | `KKEGDETAYKDV` | TDBMUHKOD | evet |  | Entegrasyon kodları fatura genel 2 sekmesindeki KKEG KDV detay hesabı bilgisi yer alır. |
| 231 | `RAPORSONUCLARI` | char(1) | hayır |  | Rapor sonuçları saklansın parametresi yer alır. |
| 232 | `RAPORSAYISI` | TDBBYTE | hayır |  | Son alanında yazan değer yer alır. |
| 233 | `RAPORKAYITYOLU` | varchar(255) | evet |  | Rapor kayıt yolu bilgisi yer alır. |
| 234 | `TWO_FACTOR_TYPE` | TDBBYTE | hayır |  | İki adımlı doğrulama yeri bilgisi yer alır. |
| 235 | `KULHAKDEVIR` | char(1) | evet |  | Kullanıcı hak devri kullanılsın parametresi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPARAM_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, LOCAL_DEPO, PROMOSYON, FIAT_SISTEMI, HES_SEV_SAB, HS_SEV
FROM dbo.TBLPARAM WITH (NOLOCK);
```
