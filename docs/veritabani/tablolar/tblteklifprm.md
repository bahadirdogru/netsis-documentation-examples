---
title: TBLTEKLIFPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblteklifprm/
---

# TBLTEKLIFPRM

> TALEP-TEKLİF PARAMETRE KAYITLARINI TUTAR

- **Modül:** [TALEP-TEKLİF](/veritabani/moduller/talep-teklif/)
- **Kolon sayısı:** 231

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TIP` | TDBBYTE | hayır |  | Talep/teklif parametre parametrelerinde satın alma talep/teklif, satış talep/teklif parametreleri sekmelerini gösterir. |
| 3 | `MAL_BAZI_ISKONTOSU` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde mal bazı iskontosu var mı parametresini gösterir. |
| 4 | `MAL_FAZLASI_ISKONTO` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde mal fazlası iskontosu var mı parametresini gösterir. |
| 5 | `MAL_FAZLASI_KDVSI` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde mal fazlası iskontosundan kdv alınacak mı parametresini gösterir. |
| 6 | `MALFAZKDVSIBRUTNET` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde kdv brüt fiyat üzerinden alınsın mı parametresini gösterir. |
| 7 | `ISKONTO3` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[1] parametresini gösterir. |
| 8 | `ISKONTO3_TANIM` | varchar(20) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[1] parametresinin işaretlenmesiyle aktif olan iskonto tanımını gösterir. |
| 9 | `ISKONTO4` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[2] parametresini gösterir. |
| 10 | `ISKONTO4_TANIM` | varchar(20) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[2] parametresinin işaretlenmesiyle aktif olan iskonto tanımını gösterir. |
| 11 | `ISKONTO5` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[3] parametresini gösterir. |
| 12 | `ISKONTO5_TANIM` | varchar(20) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde genel iskonto[3] parametresinin işaretlenmesiyle aktif olan iskonto tanımını gösterir. |
| 13 | `ISKONTO5_HESAPLANSI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 14 | `FAT_ALTM1_VARMI` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde ek maliyet[1] parametresinin işaretlenmesiyle aktif olan iskonto tanımını gösterir. |
| 15 | `FAT_ALTM1_TANIM` | varchar(20) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde ek maliyet[1] parametresinin işaretlenmesiyle aktif olan ek maliyet tanımını gösterir. |
| 16 | `FAT_ALTM1_HESAPLANSI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 17 | `FAT_ALTM2_VARMI` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde ek maliyet[2] parametresinin işaretlenmesiyle aktif olan iskonto tanımını gösterir. |
| 18 | `NAKLIYE_KDV_ORANI` | decimal(5,2) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 19 | `FAT_ALTM2_TANIM` | varchar(20) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde ek maliyet[2] parametresinin işaretlenmesiyle aktif olan ek maliyet tanımını gösterir. |
| 20 | `FAT_ALTM2_HESAPLANSI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 21 | `SIGORTA_FON_ORANI` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 22 | `SIGORTA_FON_KDV_ORAN` | TDBKDVORAN | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 23 | `EKSI_BAKIYE_GOSTERIM` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 24 | `OZEL_KOD1` | char(1) | evet |  | Satış talep/teklif parametreleri özel kod/ek maliyet sekmesinde özel kod1 parametresini gösterir. |
| 25 | `OZEL_KOD1_SECIM11` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kod için hangi satış fiyatı seçildiyse o satış fiyatını gösterir. |
| 26 | `OZEL_KOD1_SECIM12` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kodu gösterir. |
| 27 | `OZEL_KOD1_SECIM21` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kod için hangi satış fiyatı seçildiyse o satış fiyatını gösterir. |
| 28 | `OZEL_KOD1_SECIM22` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kodu gösterir. |
| 29 | `OZEL_KOD1_SECIM31` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kod için hangi satış fiyatı seçildiyse o satış fiyatını gösterir. |
| 30 | `OZEL_KOD1_SECIM32` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kodu gösterir. |
| 31 | `OZEL_KOD1_SECIM41` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kod için hangi satış fiyatı seçildiyse o satış fiyatını gösterir. |
| 32 | `OZEL_KOD1_SECIM42` | char(1) | evet |  | Satış talep/teklif parametrelerinde özel kod/açıklama sekmesinde özel kod1 tanımlama alanında girilen kodu gösterir. |
| 33 | `OZEL_KOD2` | char(1) | evet |  | Özel kod/açıklama sekmesinde özel kod2 parametresini gösterir. |
| 34 | `ACIKLAMA` | char(1) | evet |  | Özel kod/açıklama sekmesinde açıklama parametresini gösterir. |
| 35 | `FATURADA_SERI_VARMI` | char(1) | evet |  | Genel1 sekmesinde seri numarası takibi parametresini gösterir. |
| 36 | `TUTARDAN_BIRIM_FIATA` | char(1) | evet |  | Satın alma/satış teklif parametreleri genel3 sekmesinde tutardan birim fiyata geçiş yapılsın parametresini gösterir. |
| 37 | `MUSTERI_RISK_UYARISI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 38 | `AMBNO_TAKIBI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 39 | `CARIDE_BOLUNSUN` | char(1) | evet |  | Genel2 sekmesinde c/h vadelere bölünerek geçsin parametresini gösterir. |
| 40 | `DEP_SIPNO` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 41 | `AMBARCIKISTAKODDEGIS` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 42 | `FIAT_DEGISIM` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 43 | `SIPHERTES` | char(1) | evet |  | Genel2 sekmesinde satır bazında teslim tarihi sorulsun parametresini gösterir. |
| 44 | `ALISTAEK` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 45 | `SATISTAEK` | char(1) | evet |  | Ek sorgular sekmesinde ek sorgular var mı parametresini gösterir. |
| 46 | `ALTIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 47 | `BENZIN` | char(1) | evet |  | Satın Alma/satış teklif parametrelerinde genel3 sekmesinde tutardan miktara geçiş yapılsın parametresini gösterir. |
| 48 | `MUSTMALBAZIFIAT` | char(1) | evet |  | Satış talep/teklif parametreleri özel kod/ek maliyet sekmesinde özel kod1 değeri tablodan mı kontrol edilecek parametresini gösterir. |
| 49 | `KDVDEGIS` | char(1) | evet |  | Kdv sekmesine her satırda kdv sorulsun mu parametresini gösterir. |
| 50 | `SIPKN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 51 | `SABISKMALBAZ` | char(1) | evet |  | Satın alma/satıl teklif parametreleri genel3 sekmesinde cari hesapta tanımlanan iskonto mal bazında mı parametresini gösterir. |
| 52 | `KULLANICI_ADEDI` | TDBSMALLINT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 53 | `URET_RECETE` | char(1) | evet |  | Genel1 sekmesinde üretim reçeteleri getirilsin mi parametresini gösterir. |
| 54 | `FARKLI_BIRIMDEN_GIRI` | char(1) | evet |  | Genel1 sekmesinde farklı birimlerden mal giriş/çıkışı yapılacak parametresini gösterir. |
| 55 | `DEP_TRANS_CARIYE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 56 | `MALIYET_TIPI` | char(1) | evet |  | Genel2 sekmesinde maliyet tipi alanında seçilen maliyet tipini gösterir. |
| 57 | `IRS_ODEME_GUN_TAKIBI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 58 | `ISK_MAL_KODU_OKUMAUZ` | TDBSMALLINT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 59 | `FAT_SIPARIS_TAKIBI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 60 | `FON_BRUT_NET` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 61 | `SIRALAMA_TURU` | char(1) | evet |  | Genel1 sekmesinde talep/teklif sıralama alanında seçileni gösterir. |
| 62 | `KDV_SORULSUN` | char(1) | evet |  | Kdv sekmesinde genellikle kdv hariç mi parametresini gösterir. |
| 63 | `KDV_DH` | char(1) | evet |  | Kdv sekmesinde kdv dahil/hariç sorusu her teklifte sorulsun parametresini gösterir. |
| 64 | `SON_KESILEN_FATURAMI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 65 | `GETIRME_SIRASI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 66 | `EK_ALAN` | char(1) | evet |  | Satır açıklama sekmesinde ek alan kullanılacak mı parametresini gösterir. |
| 67 | `STOK_AYIR` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 68 | `EXTRE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 69 | `EBAT_GIRILECEK` | char(1) | evet |  | Satır açıklama sekmesinde ebat bilgisi girilsin mi parametresini gösterir. |
| 70 | `ALIS_FIATI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 71 | `ALISLAR_BASILSIN` | char(1) | evet |  | Genel2 sekmesinde talepte onay sistemi kullanılsın parametresini gösterir. |
| 72 | `ISKONTO3_ORANLANSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 73 | `EBATLAR_KACA_BOLUNSU` | char(1) | evet |  | Satır açıklama sekmesinde ebatlar kaça bölünsün alanında seçileni gösterir. |
| 74 | `IKINCI_MIKTAR_GIRILS` | char(1) | evet |  | Genel2 sekmesinde ikinci miktar sorulsun mu parametresini gösterir. |
| 75 | `EBAT_TUTULSUN` | char(1) | evet |  | Satır açıklama sekmesinde ebatlar saklansın mı parametresini gösterir. |
| 76 | `BFISK_ILK` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 77 | `KAPLAMA` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 78 | `KOD2_ZORLANSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 79 | `ACIK_ZORLANSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 80 | `YUZDE_SORULSUN` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde yüzde/tutar sorulsun mu parametresini gösterir. |
| 81 | `DESTEKLEME_FONU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 82 | `BRUT_GECSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 83 | `ECZA_DEPOSU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 84 | `GECICI_KDV_SIFIRLAMA` | char(1) | evet |  | Kdv sekmesinde geçici kdv sıfırlama parametresini gösterir. |
| 85 | `KOD2_SKOD` | char(1) | evet |  | Satış talep/teklif parametreleri kdv sekmesinde geçici kdv sıfırlama için kullanılacak özel kod2 alanına girilen kodu gösterir. |
| 86 | `IRS_CARI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 87 | `FON_SADECE_ALISTA` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 88 | `ADET_ISKONTOSU` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde ölçü birimi2 ye tutar iskontosu yapılsın mı parametresini gösterir. |
| 89 | `BOLGF_HERSATIR` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 90 | `KOLAY` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 91 | `BAZTSOR` | char(1) | evet |  | Satın alma/satış teklif parametreleri genel3 sekmesinde vade baz tarihi sorulsun parametresini gösterir. |
| 92 | `SATIR_BAZI_FIAT` | char(1) | evet |  | Satın alma/satış teklif parametreleri genel3 sekmesinde satır bazında fiyat sorulsun mu parametresini gösterir. |
| 93 | `TRANSIT_IRS` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 94 | `IRS_TARIHI_KALSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 95 | `KDV_AYRILSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 96 | `KDV_OZEL_KODU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 97 | `FIAT_HANESI_MILYAR` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 98 | `KDVDAHILONCEKDVDUSUL` | char(1) | evet |  | Satış talep/teklif parametreleri kdv sekmesinde kdv dahil teklifte iskontodan önce kdv düşülsün mü parametresini gösterir. |
| 99 | `FARKLI_TESLIM_YERI` | char(1) | evet |  | Genel2 sekmesinde farklı teslim yeri var mı parametresini gösterir. |
| 100 | `FIAT_KONTROLU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 101 | `FIAT_ORANI_YUKSEK` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 102 | `FIAT_ORANI_DUSUK` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 103 | `SIPARISFIFO` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 104 | `DOVIZ_TAKIP` | char(1) | evet |  | Genel1 sekmesinde döviz takip parametresini gösterir. |
| 105 | `ASIPMAZ` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 106 | `SSIPMAZ` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 107 | `EKSIDE_CIKMA` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 108 | `DOVIZ_TAKIP_HANGISI` | TDBBYTE | evet | `0` | Genel1 sekmesinde döviz takibi hangi değerden yapılacak alanında seçileni gösterir. |
| 109 | `KADEMELI` | char(1) | evet |  | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde mal bazı iskontosu var mı parametresi işaretli olunca aktif olan kademeli kaç iskonto sorulsun alanına girilen rakamı gösterir. |
| 110 | `VADE_GUN` | char(1) | evet |  | Genel3 sekmesinde satır bazında vade günü sorulsun parametresini gösterir. |
| 111 | `STANDART_BASIM` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 112 | `SIP_IRS_MUDAHALE_ETM` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 113 | `SAT_FIATA_MUD_ETME` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 114 | `KDV_VADE_TAR` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 115 | `SATIR_ONLINE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 116 | `DEP_TRANS_ONAYLI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 117 | `SATISFIAT_DOVFIAT` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 118 | `BARKODSYS` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 119 | `YEDEKP` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 120 | `TOPLU_DEPO` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 121 | `DEPODA_ISKONTO` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 122 | `SONRABAS` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 123 | `ACIK_TEKRAR` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 124 | `BAGLANTI_TAKIBI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 125 | `BARKODDOSYADANMI` | char(1) | evet |  | Genel1 sekmesinde barkod/üretici kodu dosyadan okunsun parametresini gösterir. |
| 126 | `FIYAT_LISTESI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 127 | `ISK_VADE_MUDAHALE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 128 | `SIPKURGUNCELLE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 129 | `LOKAL_MUH` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 130 | `VADE_TAR` | char(1) | evet |  | Genel3 sekmesinde satır bazında vade tarihi sorulsun parametresini gösterir. |
| 131 | `STOK_LOKAL_DEPO` | char(1) | evet |  | Genel2 sekmesinde stoktaki lokal depo gelsin mi parametresini gösterir. |
| 132 | `MIKTAR_BIR_GELSIN` | char(1) | evet |  | Genel3 sekmesinde miktar 1 gelsin parametresini gösterir. |
| 133 | `SATIS_DEPO_KODU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 134 | `ITHMUHYAZMA` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 135 | `NUMUNE_TAKIBI_VARMI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 136 | `YURT_DISI_GIDER` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 137 | `YURT_ICI_GIDER` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 138 | `SATIS_KODU` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 139 | `OZEL_NAKLIYE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 140 | `SIPTE_STOK_KONT` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 141 | `CARIYE_ISK_YAZILSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 142 | `SF_FIAT0` | char(1) | evet |  | Genel2 sekmesinde fiyat 0 geçilsin parametresini gösterir. |
| 143 | `ALIS_PRM_AYRI` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 144 | `FACIK_KUL` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 145 | `KERESTE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 146 | `MIKKONT` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 147 | `KDVEKLENSIN` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 148 | `CEVRIMDE_FIYAT_DEG` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 149 | `AF_FIAT0` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 150 | `ACIKLAR1` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 151 | `ACIKLAR2` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 152 | `ACIKLAR3` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 153 | `ACIKLAR4` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 154 | `ACIKLAR5` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 155 | `ACIKLAR6` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 156 | `ACIKLAR7` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 157 | `ACIKLAR8` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 158 | `ACIKLAR9` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 159 | `ACIKLAR10` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 160 | `ACIKLAR11` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 161 | `ACIKLAR12` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 162 | `ACIKLAR13` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 163 | `ACIKLAR14` | varchar(25) | evet |  | Ek sorgular sekmesindeki ek sorguları gösterir. |
| 164 | `ACIKLAR15` | varchar(25) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 165 | `ACIKLAR16` | varchar(25) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 166 | `C_YEDEK1` | char(1) | evet |  | Genel1 sekmesinde hizmet uygulaması parametresini gösterir. |
| 167 | `C_YEDEK2` | char(1) | evet |  | Satır açıklama sekmesinde ek alan-2 kullanılacak mı parametresini gösterir. |
| 168 | `C_YEDEK3` | char(1) | evet |  | Satır açıklama sekmesinde satır bazında ek açıklama bulunsun mu parametresini gösterir. |
| 169 | `C_YEDEK4` | char(1) | evet |  | Genel1 sekmesinde üretim reçeteleri getirilsin mi parametresi işaretli iken aktif olan yarımamuller getirilsin mi parametresini gösterir. |
| 170 | `C_YEDEK5` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 171 | `C_YEDEK6` | char(1) | evet |  | Satış talep ve satış teklif genel2 sekmesinde sipariş bağlantısında fazla teslimat yapılabilsin işaretli ise E değerini alır. |
| 172 | `C_YEDEK7` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 173 | `C_YEDEK8` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 174 | `C_YEDEK9` | char(1) | evet |  | Genel1 sekmesinde farklı çevrimde fiyat değişsin parametresini gösterir. |
| 175 | `C_YEDEK10` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 176 | `C_YEDEK11` | char(1) | evet |  | Genel2 sekmesinde referans kodu sorulsun parametresini gösterir. |
| 177 | `C_YEDEK12` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 178 | `C_YEDEK13` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 179 | `C_YEDEK14` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 180 | `C_YEDEK15` | char(1) | evet |  | Özel kod/açıklama sekmesinde özel kod2 değeri tablodan mı kontrol edilecek parametresini gösterir. |
| 181 | `C_YEDEK16` | char(1) | evet |  | Satın alma/satış teklif parametrelerinde genel3 sekmesinde koşul uygulaması parametresini gösterir. |
| 182 | `C_YEDEK17` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 183 | `C_YEDEK18` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 184 | `C_YEDEK19` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 185 | `C_YEDEK20` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 186 | `HIZMETDEPO` | TDBSMALLINT | evet | `0` | Genel1 sekmesinde hizmet için kullanılacak depo kodunu gösterir. |
| 187 | `REFKOD` | varchar(15) | evet |  | Genel2 sekmesinde referans kodu alanına girilen kodu gösterir. |
| 188 | `SIRALAMASORULSUN` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 189 | `BARKODLUISLEM` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 190 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 191 | `TECTERKDVKODU` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 192 | `BORCLUKDVKODU` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 193 | `FAZTESORAN` | TDBFLOAT | evet | `0` | Fazla teslimat oranı bilgisi yer alır. |
| 194 | `ASGARIAZAMI` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 195 | `IRSFATENGELLE` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 196 | `KDVCKODMASKE` | varchar(15) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 197 | `IRSSAKLANSIN` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 198 | `OTV_SIFIRLAMA` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 199 | `OTV_SIFIR_KOD2` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 200 | `TEVKIFATORANIPAY` | TDBSMALLINT | evet | `0` | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde tevkifat oranının payını gösterir. |
| 201 | `TEVKIFATORANIPAYDA` | TDBSMALLINT | evet | `0` | Satın alma/satış teklif parametreleri iskonto/ek maliyet sekmesinde tevkifat oranının paydasını gösterir. |
| 202 | `MIKTARNETLESTIRILSIN` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 203 | `ISKFARKLIHESAP` | char(1) | evet | `H` | Satın alma/satış teklif parametrelerinde iskonto/ek maliyet sekmesinde iskontolar brüt fiyattan hesaplansın mı parametresini gösterir. |
| 204 | `SATIRBAZIKOSUL` | char(1) | evet | `H` | Satın alma/satış teklif parametrelerinde genel3 sekmesinde satır bazında koşul sorulsun parametresini gösterir. |
| 205 | `KOSULKODUFATSERI` | char(1) | evet | `H` | Bu field bu tabloda kullanılmamaktadır. |
| 206 | `SATIRBAZITESLIMCARI` | char(1) | evet | `H` | Genel2 sekmesinde satır bazında teslim cari kodu sorulsun parametresini gösterir. |
| 207 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 208 | `KAYITTARIHI` | TDBDATETIME | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 209 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 210 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 211 | `OLCUBIRIMITABLODAN` | char(1) | evet | `H` | Genel1 sekmesinde ölçü birimleri tablodan okunsun parametresini gösterir. |
| 212 | `OLCUBIRIMKODU` | char(1) | evet | `H` | Genel1 sekmesinde ölçü birimleri hangi grup koduna göre getirilsin alanında seçilen kodu gösterir. |
| 213 | `FIYATBIRIMISOR` | char(1) | evet | `H` | Genel1 sekmesinde fiyat birimi sorulsun parametresini gösterir. |
| 214 | `BAKIYEKADARGETIR` | char(1) | evet | `H` | Genel1 sekmesinde üretim reçeteleri getirilsin mi parametresi işaretli iken aktif olan bakiye kadar getirilsin mi parametresini gösterir. |
| 215 | `TUTARONDALIK` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 216 | `TECTEROTVKODU` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 217 | `BORCLUOTVKODU` | varchar(35) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 218 | `ALISTANSATISBELGE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 219 | `TEV_KDV_KOD_DEGIS` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 220 | `IADETESMIK` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 221 | `SIPKAPA` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 222 | `KDVHARICBRUTNET` | char(1) | evet |  | Kdv hariç faturada iskontodan önce kdv hesaplansın parametresi yer alır. |
| 223 | `KKEGMASRAFORAN` | TDBFLOAT | evet |  | NULL |
| 224 | `KKEGKIRASINIR` | TDBFLOAT | evet |  | NULL |
| 225 | `KKEGKDVOTVSINIR` | TDBFLOAT | evet |  | NULL |
| 226 | `HALFATURASI` | char(1) | evet |  | NULL |
| 227 | `FAT_ALTM3_VARMI` | char(1) | evet |  | NULL |
| 228 | `FAT_ALTM3_TANIM` | varchar(20) | evet |  | NULL |
| 229 | `GEKAP` | char(1) | evet |  | NULL |
| 230 | `HIZLIODEME` | char(1) | evet |  | NULL (firma kredi kartı için eklenen saha) |
| 231 | `STOPAJUYGULAMASI` | TDBSMALLINT | evet |  | NULL, |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTEKLIFPRM_PKEY` | `SUBE_KODU+TIP` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TIP, MAL_BAZI_ISKONTOSU, MAL_FAZLASI_ISKONTO, MAL_FAZLASI_KDVSI, MALFAZKDVSIBRUTNET
FROM dbo.TBLTEKLIFPRM WITH (NOLOCK);
```
