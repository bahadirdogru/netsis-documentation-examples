---
title: TBLSFATUPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsfatuprm/
---

# TBLSFATUPRM

> SATIŞ FATURASI PARAMETRELE KAYITLARINI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 254

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MAL_BAZI_ISKONTOSU` | char(1) | evet |  | İskonto sekmesindeki mal bazı iskontosu var mı parametresini gösterir. |
| 3 | `MAL_FAZLASI_ISKONTO` | char(1) | evet |  | İskonto sekmesindeki mal fazlası iskontosu var mı parametresini gösterir. |
| 4 | `MAL_FAZLASI_KDVSI` | char(1) | evet |  | İskonto sekmesindeki mal fazlası iskontosundan KDV alınacak mı parametresini gösterir. Mal fazlası iskontosu var mı parametresi işaretlendiğinde aktif olur. |
| 5 | `MALFAZKDVSIBRUTNET` | char(1) | evet |  | İskonto sekmesindeki KDV brüt fiyat üzerinden alınsın mı parametresini gösterir. Mal fazlası iskontosu var mı parametresi işaretlendiğinde aktif olur. |
| 6 | `ISKONTO3` | char(1) | evet |  | İskonto sekmesindeki Genel iskonto[1] parametresini gösterir. |
| 7 | `ISKONTO3_TANIM` | varchar(20) | evet |  | Genel iskonto[1]' in belgedeki ismini gösterir. |
| 8 | `ISKONTO4` | char(1) | evet |  | İskonto sekmesindeki Genel iskonto[2] parametresini gösterir. |
| 9 | `ISKONTO4_TANIM` | varchar(20) | evet |  | Genel iskonto[2]' in belgedeki ismini gösterir. |
| 10 | `ISKONTO5` | char(1) | evet |  | İskonto sekmesindeki Genel iskonto[3] parametresini gösterir. |
| 11 | `ISKONTO5_TANIM` | varchar(20) | evet |  | Genel iskonto[3]' in belgedeki ismini gösterir. |
| 12 | `ISKONTO5_HESAPLANSI` | char(1) | evet |  | Genel iskonto[3]=birim ağırlık*ağırlıklı iskonto hesaplansın mı parametresini gösterir. |
| 13 | `FAT_ALTM1_VARMI` | char(1) | evet |  | Ek maliyet sekmesinde Ek Maliyet[1] parametresini gösterir. |
| 14 | `FAT_ALTM1_TANIM` | varchar(20) | evet |  | Ek maliyet sekmesinde Ek Maliyet[1] parametresinin belgedeki adını gösterir. |
| 15 | `FAT_ALTM1_HESAPLANSI` | char(1) | evet |  | Ek maliyet sekmesinde Ek Maliyet[1]=birim maliyet*nakliye katsayısı hesaplansın mı parametresini gösterir. |
| 16 | `FAT_ALTM2_VARMI` | char(1) | evet |  | Ek maliyet sekmesinde Ek Maliyet[2] parametresini gösterir. |
| 17 | `NAKLIYE_KDV_ORANI` | decimal(5,2) | evet |  | Ek maliyet sekmesinde Ek Maliyet[1] KDV oranını gösterir. |
| 18 | `FAT_ALTM2_TANIM` | varchar(20) | evet |  | Ek maliyet sekmesinde Ek Maliyet[2] parametresinin belgedeki adını gösterir. |
| 19 | `FAT_ALTM2_HESAPLANSI` | char(1) | evet |  | Ek maliyet sekmesinde nakliye risk/ sigorta fon olarak hesaplansın mı parametresini gösterir. |
| 20 | `SIGORTA_FON_ORANI` | TDBFLOAT | evet |  | Ek maliyet sekmesinde Ek Maliyet[2] KDV oranını gösterir. |
| 21 | `SIGORTA_FON_KDV_ORAN` | TDBKDVORAN | evet |  | Ek maliyet sekmesinde sigorta fon oranını gösterir. |
| 22 | `EKSI_BAKIYE_GOSTERIM` | char(1) | evet |  | Genel1 sekmesinde eksi bakiye göstersin mi parametresini gösterir. |
| 23 | `OZEL_KOD1` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 parametresini gösterir. |
| 24 | `OZEL_KOD1_SECIM11` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında kodu alanına girilen özel kod1 değerini gösterir. |
| 25 | `OZEL_KOD1_SECIM12` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında fiyat tipi alanına girilen satış fiyatı1/2/3/4 den seçileni gösterir. |
| 26 | `OZEL_KOD1_SECIM21` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında kodu alanına girilen özel kod1 değerini gösterir. |
| 27 | `OZEL_KOD1_SECIM22` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında fiyat tipi alanına girilen satış fiyatı1/2/3/4 den seçileni gösterir. |
| 28 | `OZEL_KOD1_SECIM31` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında kodu alanına girilen özel kod1 değerini gösterir. |
| 29 | `OZEL_KOD1_SECIM32` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında fiyat tipi alanına girilen satış fiyatı1/2/3/4 den seçileni gösterir. |
| 30 | `OZEL_KOD1_SECIM41` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında kodu alanına girilen özel kod1 değerini gösterir. |
| 31 | `OZEL_KOD1_SECIM42` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 tanımlama kısmında fiyat tipi alanına girilen satış fiyatı1/2/3/4 den seçileni gösterir. |
| 32 | `OZEL_KOD2` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod2 parametresini gösterir. |
| 33 | `ACIKLAMA` | char(1) | evet |  | Özel kod ve açıklama sekmesinde açıklama parametresini gösterir. |
| 34 | `FATURADA_SERI_VARMI` | char(1) | evet |  | Genel1 sekmesinde irsaliyede/faturada seri takibi var mı parametresini gösterir. |
| 35 | `TUTARDAN_BIRIM_FIATA` | char(1) | evet |  | Genel4 sekmesinde tutardan birim fiyata geçiş var mı parametresini gösterir. |
| 36 | `MUSTERI_RISK_UYARISI` | char(1) | evet |  | Genel1 sekmesinde müşteride risk takibi yapılsın mı parametresini gösterir. |
| 37 | `AMBNO_TAKIBI` | char(1) | evet |  | Fatura ek1 sekmesinde satış irsaliyelerinde ambar fişno takibi parametresini gösterir. |
| 38 | `CARIDE_BOLUNSUN` | char(1) | evet |  | Genel4 sekmesinde C/H Vadelere Bölünerek Geçmesin/Geçsin+Koşul C/H Vadelere Böl. Geç. Parametresi Dikkate Alınsın kayıtlarından seçileni gösterir. |
| 39 | `DEP_SIPNO` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Depolararası transferde sipariş numarası sorulsun mu parametresini gösterir. |
| 40 | `AMBARCIKISTAKODDEGIS` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Ambar Çıkış Fişinde Her Satırda Masraf Kodu Sorulsun Mu parametresini gösterir. |
| 41 | `FIAT_DEGISIM` | char(1) | evet |  | Genel4 sekmesinde satışta fiyat değişimi yapılabilsin parametresini gösterir. |
| 42 | `SIPHERTES` | char(1) | evet |  | Fatura sipariş sekmesinde sipariş kaydında her satırda teslim tarihi sorulsun mu parametresini gösterir. |
| 43 | `ALISTAEK` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 44 | `SATISTAEK` | char(1) | evet |  | Genel5 sekmesinde sipariş/irsaliye/faturada ek sorgular var mı parametresini gösterir. |
| 45 | `ALTIN` | char(1) | evet |  | Fatura ek1 sekmesinde kdv hesaplarında has altın sekmesi parametresini gösterir. |
| 46 | `BENZIN` | char(1) | evet |  | Genel4 sekmesinde tutatdan miktara geçiş yapılsın mı parametresini gösterir. |
| 47 | `MUSTMALBAZIFIAT` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod1 parametresinin işaretli olduğunda aktif olan+ özel kod1 değeri tablodan mı kontrol edilecek parametresini gösterir. |
| 48 | `KDVDEGIS` | char(1) | evet |  | Fatura kdv sekmesinde Her Satırda KDV Sorulsun Mu parametresini gösterir. |
| 49 | `SIPKN` | char(1) | evet |  | Fatura sipariş sekmesinde sipariş kaydında tekrar eden stok kontrolü parametresini gösterir. |
| 50 | `SABISKMALBAZ` | char(1) | evet |  | Genel4 sekmesinde cari hesapta tanımlanan iskonto mal bazında mı parametresini gösterir. |
| 51 | `KULLANICI_ADEDI` | TDBSMALLINT | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 52 | `URET_RECETE` | char(1) | evet |  | Genel1 sekmesinde üretim reçetesi getirilsin mi parametresini gösterir. |
| 53 | `FARKLI_BIRIMDEN_GIRI` | char(1) | evet |  | Genel1 sekmesinde farklı birimlerden mal çıkışı yapılsın mı parametresini gösterir. |
| 54 | `DEP_TRANS_CARIYE` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Depolararası transfer cariye işlensin mi parametresini gösterir. |
| 55 | `MALIYET_TIPI` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde maliyet tipinde seçilen kaydı gösterir. |
| 56 | `IRS_ODEME_GUN_TAKIBI` | char(1) | evet |  | Genel1 sekmesinde toplu faturalamada gün takibi var mı parametresini gösterir. |
| 57 | `ISK_MAL_KODU_OKUMAUZ` | TDBSMALLINT | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 58 | `FAT_SIPARIS_TAKIBI` | char(1) | evet |  | Fatura sipariş sekmesinde sipariş takibi yapılacak mı parametresini gösterir. |
| 59 | `FON_BRUT_NET` | char(1) | evet |  | Ek maliyet sekmesinde sigorta fonun brüt/ net olup olmadığını gösterir. |
| 60 | `SIRALAMA_TURU` | char(1) | evet |  | Genel1 sekmesinde Satış İrsaliye/Sipariş Sıralama Seçeneği parametresinde seçilen kaydı gösterir. |
| 61 | `KDV_SORULSUN` | char(1) | evet |  | Fatura kdv sekmesinde KDV Dahil/Hariç Sorusu Her Faturada Sorulsun Mu parametresini gösterir. |
| 62 | `KDV_DH` | char(1) | evet |  | Fatura kdv sekmesinde Genellikle KDV Hariç Mi parametresini gösterir. |
| 63 | `SON_KESILEN_FATURAMI` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 64 | `GETIRME_SIRASI` | char(1) | evet |  | Genel2 sekmesinde faturada/irsaliyede/siparişte tekrar eden stok kodu girişi engellensin mi parametresini gösterir. |
| 65 | `EK_ALAN` | char(1) | evet |  | Genel2 sekmesinde ek alan parametresini gösterir. |
| 66 | `STOK_AYIR` | char(1) | evet |  | Fatura sipariş sekmesinde siparişte stoktan ayırma yapılsın mı parametresini gösterir. |
| 67 | `EXTRE` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 68 | `EBAT_GIRILECEK` | char(1) | evet |  | Genel2 sekmesinde ebat bilgisi girilsin mi parametresini gösterir. |
| 69 | `ALIS_FIATI` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 70 | `ALISLAR_BASILSIN` | char(1) | evet |  | Fatura sipariş sekmesinde sipariş onayı açılsın mı parametresini gösterir. |
| 71 | `ISKONTO3_ORANLANSIN` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde şubeler arası transfer fişi karşı ambardan onaylansın mı parametresi işaretli olduğunda aktif olan lokal depolar arası trs. Fişi onaylansın mı parametresini gösterir. |
| 72 | `EBATLAR_KACA_BOLUNSU` | char(1) | evet |  | Genel2 sekmesinde ebatlar kaça bölünsün parametresini gösterir. |
| 73 | `IKINCI_MIKTAR_GIRILS` | char(1) | evet |  | Genel2 sekmesinde ikinci miktar sorulsun mu parametresini gösterir. |
| 74 | `EBAT_TUTULSUN` | char(1) | evet |  | Genel2 sekmesinde ebatlar saklansın mı parametresini gösterir. |
| 75 | `BFISK_ILK` | char(1) | evet |  | İskonto sekmesinde Genel İskonto-3 Hesaplamada İlk Düşülsün Mü parametresini gösterir. |
| 76 | `KAPLAMA` | char(1) | evet |  | Genel3 sekmesinde kaplama hesaplanacak parametresini gösterir. |
| 77 | `KOD2_ZORLANSIN` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod2 parametresi işaretlendiğinde aktif olan irs/fat/ özel kod[2] boş geçilmesin mi parametresini gösterir. |
| 78 | `ACIK_ZORLANSIN` | char(1) | evet |  | Özel kod ve açıklama sekmesinde açıklama parametresi işaretlendiğinde aktif olan açıklama boş geçilmesin mi parametresini gösterir. |
| 79 | `YUZDE_SORULSUN` | char(1) | evet |  | İskonto sekmesinde yüzde/ tutar sorulsun mu parametresini gösterir. |
| 80 | `DESTEKLEME_FONU` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 81 | `BRUT_GECSIN` | char(1) | evet |  | Genel2 sekmesinde irs/fat kayıtlarında fiyatlar brüt geçsin mi parametresini gösterir. |
| 82 | `ECZA_DEPOSU` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 83 | `GECICI_KDV_SIFIRLAMA` | char(1) | evet |  | Fatura kdv sekmesinde geçici ötv sıfırlama parametresini gösterir. |
| 84 | `KOD2_SKOD` | char(1) | evet |  | Fatura kdv sekmesinde Geçici KDV Sıfırlama İçin Kullanılacak Özel Kod-2 parametresini gösterir. |
| 85 | `IRS_CARI` | char(1) | evet |  | Genel2 sekmesinde irsaliye cari hesaba geçsin mi parametresini gösterir. |
| 86 | `FON_SADECE_ALISTA` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 87 | `ADET_ISKONTOSU` | char(1) | evet |  | İskonto sekmesinde ölçü birimi 2 ye göre tutar iskontosu yapılsın mı parametresini gösterir. |
| 88 | `BOLGF_HERSATIR` | char(1) | evet |  | İskonto sekmesinde Her Satırda Değeri Sorulsun Mu parametresini gösterir. |
| 89 | `KOLAY` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 90 | `BAZTSOR` | char(1) | evet |  | Genel3 sekmesinde faturada vade baz tarihi sorulsun mu parametresini gösterir. |
| 91 | `SATIR_BAZI_FIAT` | char(1) | evet |  | Genel3 sekmesinde irsaliye/fatura/siparişte satır bazı fiyat sorulsun mu parametresini gösterir. |
| 92 | `TRANSIT_IRS` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 93 | `IRS_TARIHI_KALSIN` | char(1) | evet |  | Genel3 sekmesinde irsaliyeden faturalamada stokta irsaliye tarihi kalsın mı parametresini gösterir. |
| 94 | `KDV_AYRILSIN` | char(1) | evet |  | Fatura kdv sekmesinde Faturalarda KDV Ayrılsın Mı(C/H Kaydında) parametresini gösterir. |
| 95 | `KDV_OZEL_KODU` | char(1) | evet |  | Fatura kdv sekmesinde KDV İle İlgili Özel Kodun Değeri (Kod1 veya Kod2) parametresini gösterir. |
| 96 | `FIAT_HANESI_MILYAR` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 97 | `KDVDAHILONCEKDVDUSUL` | char(1) | evet |  | Fatura kdv sekmesinde KDV Dahil Faturada İskontodan Önce KDV Düşülsün Mü parametresini gösterir. |
| 98 | `FARKLI_TESLIM_YERI` | char(1) | evet |  | Genel3 sekmesinde sipariş/irsaliye/faturada farklı teslim yeri var mı parametresini gösterir. |
| 99 | `FIAT_KONTROLU` | char(1) | evet |  | Genel3 sekmesinde irsaliye/faturada fiyat kontrolü var mı parametresini gösterir. |
| 100 | `FIAT_ORANI_YUKSEK` | TDBBYTE | evet |  | Genel3 sekmesinde son giriş net fiayatında üst limit parametresi için girilen değeri gösterir. |
| 101 | `FIAT_ORANI_DUSUK` | TDBBYTE | evet |  | Genel3 sekmesinde son giriş net fiayatında alt limit parametresi için girilen değeri gösterir. |
| 102 | `SIPARISFIFO` | char(1) | evet |  | Fatura sipariş sekmesinde Sipariş Sistemi FIFO İle Çalışsın Mı parametresini gösterir. |
| 103 | `DOVIZ_TAKIP` | char(1) | evet |  | Genel4 sekmesinde döviz takibi yapılacak mı parametresini gösterir. |
| 104 | `ASIPMAZ` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 105 | `SSIPMAZ` | char(1) | evet |  | Fatura sipariş sekmesinde İrsaliye/Faturalarda Sipariş No. Mal Bazında Mı parametresini gösterir. |
| 106 | `EKSIDE_CIKMA` | char(1) | evet |  | Genel1 sekmesinde mal çıkışlarında eksi bakiye gösterilsin mi parametresinin işaretlenmesiyle aktif olan+eksi bakiyede işlem durdurulsun mu parametresini gösterir. |
| 107 | `DOVIZ_TAKIP_HANGISI` | TDBBYTE | evet |  | Genel4 sekmesinde döviz takibi yapılacak mı parametresi işaretlendiğinde anlam kazanan+döviz takibi hangi değerden yapılacak parametresinde seçilen kaydı gösterir. |
| 108 | `KADEMELI` | char(1) | evet |  | İskonto sekmesinde kademeli kaç iskonto sorulsun parametresin gösterir. |
| 109 | `VADE_GUN` | char(1) | evet |  | Genel 4 sekmesinde kayıtlarda her satırda vade günü sorulsun parametresini gösterir. |
| 110 | `STANDART_BASIM` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 111 | `SIP_IRS_MUDAHALE_ETM` | char(1) | evet |  | Fatura sipariş sekmesinde Sipariş Bağlantılı İrsaliyede Fiyat ve Vade Değişmesin parametresini gösterir. |
| 112 | `SAT_FIATA_MUD_ETME` | char(1) | evet |  | Genel3 sekmesinde irsaliye/faturada fiyat değişmesin mi parametresini gösterir. |
| 113 | `KDV_VADE_TAR` | char(1) | evet |  | Fatura kdv sekmesinde KDV’nin Vade Tarihi Bir Sonraki Ayın 25’i Yapılsın Mı parametresini gösterir. |
| 114 | `SATIR_ONLINE` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 115 | `DEP_TRANS_ONAYLI` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde şubeler arası transfer fişi karşı ambardan onaylansın mı parametresini gösterir. |
| 116 | `SATISFIAT_DOVFIAT` | char(1) | evet |  | Fatura ek1 sekmesinde Satış Fiyatı Döviz Fiyatı Olarak Kullanılsın Mı parametresini gösterir. |
| 117 | `BARKODSYS` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 118 | `YEDEKP` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 119 | `TOPLU_DEPO` | char(1) | evet |  | Genel3 sekmesinde siparişten irsaliyelemede toplu depo kodu var mı parametresini gösterir. |
| 120 | `DEPODA_ISKONTO` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Depolar Arası Transferde İskonto Sorulsun Mu parametresini gösterir. |
| 121 | `SONRABAS` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 122 | `ACIK_TEKRAR` | char(1) | evet |  | Özel kod ve açıklama sekmesinde açıklama parametresi işaretlendiğinde aktif olan müşteri siparişlerinde açıklama tekrar etsin parametresini gösterir. |
| 123 | `BAGLANTI_TAKIBI` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 124 | `BARKODDOSYADANMI` | char(1) | evet |  | Genel1 sekmesinde barkod/üretici kodu dosyadan okunsun mu parametresini gösterir. |
| 125 | `FIYAT_LISTESI` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 126 | `ISK_VADE_MUDAHALE` | char(1) | evet |  | Genel3 sekmesinde irsaliye/faturada fiyat değişmesin mi parametresinin işaretlenmesiyle aktif olan+irsaliye/faturada iskonto ve vade tarihi değişmesin mi parametresini gösterir. |
| 127 | `SIPKURGUNCELLE` | char(1) | evet |  | Fatura sipariş sekmesinde Sipariş Kurları Faturada Güncellensin parametresini gösterir. |
| 128 | `LOKAL_MUH` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde lokal depo bazında muhasebe entegrasyonu var mı parametresini gösterir. |
| 129 | `VADE_TAR` | char(1) | evet |  | Genel 4 sekmesinde kayıtlarda her satırda vade günü sorulsun parametresinin işaretlenmesiyle aktif hale gelen+Kayıtlarda Her Satırda Vade Tarihi Sorulsun parametresini gösterir. |
| 130 | `STOK_LOKAL_DEPO` | char(1) | evet |  | Genel1 sekmesinde stoktaki lokal depo gelsin mi parametresini gösterir. |
| 131 | `MIKTAR_BIR_GELSIN` | char(1) | evet |  | Genel4 sekmesinde sipariş/irsaliye/faturada miktar bir gelsin parametresini gösterir. |
| 132 | `SATIS_DEPO_KODU` | char(1) | evet |  | Genel2 sekmesinde fatura/irsaliyelerde toplu depo kodu var mı parametresini gösterir. |
| 133 | `ITHMUHYAZMA` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 134 | `NUMUNE_TAKIBI_VARMI` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 135 | `YURT_DISI_GIDER` | varchar(35) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 136 | `YURT_ICI_GIDER` | varchar(35) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 137 | `SATIS_KODU` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 138 | `OZEL_NAKLIYE` | char(1) | evet |  | Fatura ek1 sekmesinde özel nakliye sistemi parametresini gösterir. |
| 139 | `SIPTE_STOK_KONT` | char(1) | evet |  | Fatura ek1 sekmesinde sipariş stok kontrolü parametresini gösterir. |
| 140 | `CARIYE_ISK_YAZILSIN` | char(1) | evet |  | Fatura ek1 sekmesinde C/H Açıklama İlk İskonto Yazılsın parametresini gösterir. |
| 141 | `SF_FIAT0` | char(1) | evet |  | Fatura ek1 sekmesinde faturada fiyat 0 geçilsin parametresini gösterir. |
| 142 | `ALIS_PRM_AYRI` | char(1) | evet |  | Genel4 sekmesinde irsaliye vade tarihi faturada değişsin mi parametresini gösterir. |
| 143 | `FACIK_KUL` | char(1) | evet |  | Fatura ek1 sekmesinde fatura açıklama kullanımı parametresini gösterir. |
| 144 | `KERESTE` | char(1) | evet |  | Fatura ek1 sekmesinde kereste uygulaması parametresini gösterir. |
| 145 | `MIKKONT` | char(1) | evet |  | Fatura ek1 sekmesinde miktar 0 geçilsin parametresini gösterir. |
| 146 | `KDVEKLENSIN` | char(1) | evet |  | Fatura ek1 sekmesinde kdv maliyete eklensin parametresini gösterir. |
| 147 | `CEVRIMDE_FIYAT_DEG` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 148 | `AF_FIAT0` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 149 | `ACIKLAR1` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 150 | `ACIKLAR2` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 151 | `ACIKLAR3` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 152 | `ACIKLAR4` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 153 | `ACIKLAR5` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 154 | `ACIKLAR6` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 155 | `ACIKLAR7` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 156 | `ACIKLAR8` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 157 | `ACIKLAR9` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 158 | `ACIKLAR10` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 159 | `ACIKLAR11` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 160 | `ACIKLAR12` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 161 | `ACIKLAR13` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 162 | `ACIKLAR14` | varchar(25) | evet |  | Genel5 sekmesinde ek sorgular kısmında açık isim alanlarına girilen değerleri gösterir. |
| 163 | `ACIKLAR15` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 164 | `ACIKLAR16` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 165 | `C_YEDEK1` | char(1) | evet |  | Genel1 sekmesinde hizmet uygulaması parametresini gösterir. |
| 166 | `C_YEDEK2` | char(1) | evet |  | Genel2 sekmesinde ek alan-2 kullanılacak mı parametresini gösterir. |
| 167 | `C_YEDEK3` | char(1) | evet |  | Genel6 sekmesinde satır bazında ek açıklama sorulsun mu parametresini gösterir. |
| 168 | `C_YEDEK4` | char(1) | evet |  | Genel1 sekmesinde üretim reçetesi getirilsin mi parametresi işaretlendikten sonra aktif olan+yarımamüller getirilsin mi parametresini gösterir. |
| 169 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 170 | `C_YEDEK6` | char(1) | evet |  | Fatura sipariş sekmesinde Sipariş Bağlantılı Fatura/İrsaliyede Fazla Teslimat Yapılabilsin Mi parametresini tutar. |
| 171 | `C_YEDEK7` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Depolar Arası Transferde Çıkış Ve Giriş Depo Kodları Satır Bazında Sorulsun Mun parametresini gösterir. |
| 172 | `C_YEDEK8` | char(1) | evet |  | Genel4 sekmesinde irsaliye fatura ile bağlansın mı parametresini gösterir. |
| 173 | `C_YEDEK9` | char(1) | evet |  | Genel1 sekmesinde farklı çevrimde fiyat değişsin parametresini gösterir. |
| 174 | `C_YEDEK10` | char(1) | evet |  | Fatura kdv sekmesinde KDV Hesabı Ay Bazında Farklı Hesaba Atılsın parametresini gösterir. |
| 175 | `C_YEDEK11` | char(1) | evet |  | Fatura ek1 sekmesinde sipariş/irsaliye/faturada referans kodu sorulsun mu? Parametresini gösterir. |
| 176 | `C_YEDEK12` | char(1) | evet |  | Ek maliyet sekmesinde yuvarlama alanında seçileni gösterir. |
| 177 | `C_YEDEK13` | char(1) | evet |  | Genel1 sekmesinde müşteride risk takibi yapılsın mı parametresi işaretlendiğinde aktif olan+risk takibi bakiye üzerinden mi yapılsın parametresini gösterir. |
| 178 | `C_YEDEK14` | char(1) | evet |  | Genel4 sekmesinde fatura düzeltme işleminde cariden silme parametresini gösterir. |
| 179 | `C_YEDEK15` | char(1) | evet |  | Özel kod ve açıklama sekmesinde özel kod2 parametresi işaretli olduğunda aktif olan+özel kod2 değeri tablodan mı kontrol edilecek parametresini gösterir. |
| 180 | `C_YEDEK16` | char(1) | evet |  | Koşul sekmesinde Sipariş/İrsaliye/Faturada Koşul Uygulaması Var Mı parametresini gösterir. |
| 181 | `C_YEDEK17` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Ambar Fişi Açıklaması Entegrasyona Atılsın parametresini gösterir. |
| 182 | `C_YEDEK18` | char(1) | evet |  | Fatura sipariş sekmesinde Müşteri Siparişlerinden Satıcı Siparişi Oluşturulsun Mu parametresini gösterir. |
| 183 | `C_YEDEK19` | char(1) | evet |  | Fatura ek1 sekmesinde tl fiyatları otomatik yuvarlansın mı parametresini gösterir. |
| 184 | `C_YEDEK20` | char(1) | evet |  | Fatura siparişte İrsaliye+Faturada Sipariş Vade Tarihi Değişsin Mi parametresini gösterir. |
| 185 | `HIZMETDEPO` | TDBSMALLINT | evet |  | Genel1 sekmesinde hizmet uygulaması parametresi işaretlendiğinde aktif olan+hizmet için kullanılacak depo kodunu gösterir. |
| 186 | `REFKOD` | varchar(15) | evet |  | Fatura ek1 sekmesinde sipariş/irsaliye/faturada referans kodu sorulsun mu parametresi işaretlendiğinde aktif olan referans kodunu gösterir. |
| 187 | `SIRALAMASORULSUN` | char(1) | evet |  | Genel1 sekmesinde sıralama seçeneği faturada sorulsun mu parametresini gösterir. |
| 188 | `BARKODLUISLEM` | char(1) | evet |  | Genel5 sekmesinde barkod ile satış işlemi yapılsın parametresini gösterir. |
| 189 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodunu gösterir. |
| 190 | `TECTERKDVKODU` | varchar(35) | evet |  | İhracat sekmesinde tec-ter kdv kodu sahasına girilen muhasebe kodunu gösterir. |
| 191 | `BORCLUKDVKODU` | varchar(35) | evet |  | İhracat sekmesinde ihr. Kay. Ft. kdv borçlu kodu sahasına girilen muhasebe kodunu gösterir. |
| 192 | `FAZTESORAN` | TDBFLOAT | evet |  | Fatura sipariş sekmesinde fazla teslimat oranını gösterir. |
| 193 | `ASGARIAZAMI` | char(1) | evet |  | Genel5 sekmesinde asgari azami stok kontrolü parametresini gösterir. |
| 194 | `IRSFATENGELLE` | char(1) | evet |  | Fatura sipariş sekmesinde Sipariş Bağlantısız İrsaliye/Fatura Girişi Engellensin Mi parametresini gösterir. |
| 195 | `KDVCKODMASKE` | varchar(15) | evet |  | Fatura kdv sekmesinde KDV Cari Kod Maskesi parametresini gösterir. |
| 196 | `IRSSAKLANSIN` | char(1) | evet |  | Genel2 sekmesinde faturalaştırılan irsaliyeler saklansın mı parametresini gösterir. |
| 197 | `OTV_SIFIRLAMA` | char(1) | evet |  | Fatura ek1 sekmesinde geçici ötv sıfırlama parametresini gösterir. |
| 198 | `OTV_SIFIR_KOD2` | char(1) | evet |  | Fatura ek1 sekmesinde Geçici ÖTV Sıfırlama/Geçici ÖTV Sıfırlama İçin Kullanılacak Özel Kod2 parametresini gösterir. |
| 199 | `TEVKIFATORANIPAY` | TDBSMALLINT | evet |  | Ek maliyet sekmesinde tevkifat oranının payını gösterir. |
| 200 | `TEVKIFATORANIPAYDA` | TDBSMALLINT | evet |  | Ek maliyet sekmesinde tevkifat oranının paydasını gösterir. |
| 201 | `MIKTARNETLESTIRILSIN` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 202 | `ISKFARKLIHESAP` | char(1) | evet |  | İskonto sekmesinde iskontolar brüt fiyattan hesaplansın mı parametresini gösterir. |
| 203 | `SATIRBAZIKOSUL` | char(1) | evet |  | Koşul sekmesinde Satır Bazı Koşul Kodu Sorulsun parametresini gösterir. |
| 204 | `KOSULKODUFATSERI` | char(1) | evet |  | Koşul sekmesinde Satır Bazı Koşul Kodu Sorulsun parametresi işaretlenmesiyle aktif olan Satır Bazı Koşul Kodu Kod2 İle Eşleşsin parametresini gösterir. |
| 205 | `SATIRBAZITESLIMCARI` | char(1) | evet |  | Genel3 sekmesinde satır bazı teslim cari kodu sorulsun parametresini gösterir. |
| 206 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 207 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 208 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 209 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 210 | `OLCUBIRIMITABLODAN` | char(1) | evet |  | Genel1 sekmesinde farklı birilerinden mal çıkışı yapılsın mı parametresinin işaretlenmesiyle aktif hale gelen+ölçü birimlerinin tablodan okunup okunmaması ile ilgili kaydedileni gösterir. |
| 211 | `OLCUBIRIMKODU` | char(1) | evet |  | Genel1 sekmesinde farklı birimlerinden mal çıkışı yapılsın mı parametresinin işaretlenmesiyle aktif hale gelen+ölçü birimleri hangi stok koduna göre getirilsin parametresinde seçilen kaydı gösterir. |
| 212 | `FIYATBIRIMISOR` | char(1) | evet |  | Genel1 sekmesinde farklı birimlerden mal çıkışı yapılsın mı parametresi işaretli olduğunda aktif olan+fiyat birimi sorulsun mu parametresini gösterir. |
| 213 | `BAKIYEKADARGETIR` | char(1) | evet |  | Genel1 sekmesinde üretim reçeteleri saklansın mı parametresi işaretli iken aktif olan+bakiye kadar getirilsin parametresini gösterir. |
| 214 | `TUTARONDALIK` | TDBBYTE | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 215 | `TECTEROTVKODU` | varchar(35) | evet |  | İhracat sekmesinde tec-ter ötv kodu sahasına girilen muhasebe kodunu gösterir. |
| 216 | `BORCLUOTVKODU` | varchar(35) | evet |  | İhracat sekmesinde ihr. Kay. Ft. ötv borçlu kodu sahasına girilen muhasebe kodunu gösterir. |
| 217 | `OZELHESAPKONTROL` | char(1) | evet |  | Genel3 sekmesinde özel hesap kapatması yapılmış fatura ile ilgili işlem yapılmasın parametresini göstrir. |
| 218 | `IRSALIYEPARCALAMA` | char(1) | evet |  | Genel2 sekmesinde faturalaştırılan irsaliyeler saklansın mı parametresi işaretlendiğinde aktif olan+irsaliye bilgilerinin parçalı faturalaştırılması parametresini gösterir. |
| 219 | `IRSKN` | char(1) | evet |  | Bu alan satış fatura parametrelerinde kullanılmamaktadır. |
| 220 | `KONSINYE` | char(1) | evet |  | Fatura ek1 sekmesinde konsinye fatura uygulaması parametresini gösterir. |
| 221 | `KDVBORCKODU` | varchar(35) | evet |  | İhracat sekmesinde ihr. Kur farkı borç kdv kodu için girilen muhasebe kodunu gösterir. |
| 222 | `KDVALACAKKODU` | varchar(35) | evet |  | İhracat sekmesinde ihr. Kur farkı alacak kdv kodu için girilen muhasebe kodunu gösterir. |
| 223 | `IHREXPORTMIK` | char(1) | evet |  | İhracat sekmesinde ihracat/ithalat miktarları stoklara geçsin parametresini gösterir. |
| 224 | `SIPMALIYET` | char(1) | evet |  | Fatura sipariş sekmesinde Siparişte Nakliye Katsayısı Girişi Yapılacak Mı parametresini gösterir. |
| 225 | `IRSMALIYET` | char(1) | evet |  | Fatura ek1 sekmesinde irsaliye/fatura nakliye katsayısı girişi yapılacak parametresini gösterir. |
| 226 | `DATMALIYET` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde D.A.T. Nakliye Katsayısı Girişi Yapılacak parametresini gösterir. |
| 227 | `KOSULDEGISMESIN` | char(1) | evet |  | Koşul sekmesinde Koşul Kodu Girilmişse Fat./İrs./Sip. Fiyat+Satır Bazı Vade Ve Satır İsk.ları Değiştirilmesin parametresini gösterir. |
| 228 | `OTV_AYRILSIN` | char(1) | evet |  | Fatura kdv sekmesinde faturalarda ötv ayrılsın mı parametresini gösterir. |
| 229 | `DAT_TESAYRI` | char(1) | evet |  | Dep.Arası Trans./Ambar G.Ç sekmesinde Sipariş Baplı D.A.T. de Teslimat Ayrı Takip Edilsin parametresini gösterir. |
| 230 | `KOSGRUPUYGULAMAYERI` | char(1) | evet |  | Koşul sekmesinde Grup Koşu Uygulama Yeri parametresini gösterir. |
| 231 | `GRPKOSMALFBAG` | char(1) | evet |  | Koşul sekmesinde Mal Fazlası Koşulu Sağlamalı parametresini gösterir. |
| 232 | `GRPKOSISKPOLITIKA` | char(1) | evet |  | Koşul sekmesinde Çakışan Grup Koşullarda Aralık İskonto Politikası parametresini gösterir. |
| 233 | `KAPALIFATURACARI` | char(1) | evet |  | Genel3 sekmesinde kapalı fatura cariye işlensin parametresini gösterir. |
| 234 | `HIZLITAHSILAT` | char(1) | evet |  | Genel3 sekmesinde kapalı faturada tahsilat ekranı çıksın parametresini gösterir. |
| 235 | `FAT_ALT_LIMIT` | TDBFLOAT | evet |  | Ek maliyet sekmesindeki Fatura Alt Limiti değeri yer alır. |
| 236 | `OKCBILGI` | char(1) | evet |  | Fatura ek 1 ÖKC uygulaması parametresi bilgisi yer alır. |
| 237 | `IHREXPORTREF` | char(1) | evet |  | Yurt dışı tipli satış irsaliyelerinde export referans numarası girilsin değeri yer alır. |
| 238 | `IHR_OTV_HESAPLA` | char(1) | evet |  | İhracat belgeleri için ÖTV Hesaplansın parametresi bilgisi tutulur. Fatura Ek1 sekmesi |
| 239 | `IHR_OTV_HESAP_KOD2` | char(1) | evet |  | İhracat belgelerinde hesaplama için kullanılacak özel kod 2 değeri yer alır. Fatura Ek 1 sekmesi |
| 240 | `FIYATOLCUBR` | char(1) | evet |  | Fiyat girilen ölçü birimi üzerinden değiştirilsin parametresi yer alır. |
| 241 | `ALISTANSATISBELGE` | char(1) | evet |  | Alış için eklenen kolon.Alış Parametreleri/Genel 3 sekmesine "Alış Faturasından Satış Belgesi Oluşturulsun" parametresi eklendi. İşaretlendiğinde, Alış faturası üst bilgiler sağ tık menüsünde aktif hale gelen "İşlemler" menüsü ile alış faturasından satış faturası ya da satış irsaliyesi oluşturulabilmesi sağlandı. İşaretli ise E değerini alır. |
| 242 | `TEV_KDV_KOD_DEGIS` | char(1) | evet |  | - |
| 243 | `IADETESMIK` | char(1) | evet |  | - |
| 244 | `SIPKAPA` | char(1) | evet |  | Sipariş bağlantılı irsaliye/faturada Sipariş Kapama Açılsın parametresi yer alır. |
| 245 | `KDVHARICBRUTNET` | char(1) | evet |  | Kdv hariç faturada iskontodan önce kdv hesaplansın parametresi yer alır. |
| 246 | `KKEGMASRAFORAN` | TDBFLOAT | evet |  | NULL |
| 247 | `KKEGKIRASINIR` | TDBFLOAT | evet |  | NULL |
| 248 | `KKEGKDVOTVSINIR` | TDBFLOAT | evet |  | NULL |
| 249 | `HALFATURASI` | char(1) | evet |  | Genel 3 -Hal faturası parametresi bilgisi yer alır. |
| 250 | `FAT_ALTM3_VARMI` | char(1) | evet |  | Fatura Ek Maliyet 3 parametresinin işaretli olup olmadığı bilgisi yer alır. |
| 251 | `FAT_ALTM3_TANIM` | varchar(20) | evet |  | Ek maliyet 3 tanımı yer alır. |
| 252 | `GEKAP` | char(1) | evet |  | Genel 3 sekmesindeki Geri Kazanım Katılım Payı Uygulaması Parametresi yer alır. |
| 253 | `HIZLIODEME` | char(1) | evet |  | Firma krdi kartı için eklenmiştir. |
| 254 | `STOPAJUYGULAMASI` | TDBSMALLINT | evet |  | Genel 1 sekmesinde yer alan stopaj uygulamasında seçili değere karşılık gelir. 0- stopaj kullanılmasın gibi. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSFATUPRM_PKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, MAL_BAZI_ISKONTOSU, MAL_FAZLASI_ISKONTO, MAL_FAZLASI_KDVSI, MALFAZKDVSIBRUTNET, ISKONTO3
FROM dbo.TBLSFATUPRM WITH (NOLOCK);
```
