---
title: TBLSTSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstsabit/
---

# TBLSTSABIT

> STOK>KAYIT>STOK KARTI KAYITLARINI TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 131
- **Birincil anahtar:** `STOK_KODU`

## İlgili sayfalar

- [Stok kartı (NetOpenX COM)](/netopenx/cari-ve-stok/)
- [Stok uçları (REST Items)](/rest/uclar/#stok-items-ve-stok-hareketi-itemtransactions)
- [Temel tablolar](/veritabani/temel-tablolar/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | 35 karakter uzunluğunda stok kodunun tanımlandığı alandır. |
| 4 | `URETICI_KODU` | varchar(35) | evet |  | Stok koduna ait stok kartı2 sekmesinde üretici koduna girilen değeri gösterir. |
| 5 | `STOK_ADI` | varchar(100) | evet |  | 100 karakter uzunluğunda stok isminin tutulduğu alandır. |
| 6 | `GRUP_KODU` | TDBGRUPKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KOD_1` | TDBGRUPKOD | evet |  | Raporlama amaçlı stokaları gruplamayı amaçlayan 8 karakter uzunluğunda stok kartında kod1 sahasına yazılan değeri gösterir. |
| 8 | `KOD_2` | TDBGRUPKOD | evet |  | Raporlama amaçlı stokaları gruplamayı amaçlayan 8 karakter uzunluğunda stok kartında kod2 sahasına yazılan değeri gösterir. |
| 9 | `KOD_3` | TDBGRUPKOD | evet |  | Raporlama amaçlı stokaları gruplamayı amaçlayan 8 karakter uzunluğunda stok kartında kod3 sahasına yazılan değeri gösterir. |
| 10 | `KOD_4` | TDBGRUPKOD | evet |  | Raporlama amaçlı stokaları gruplamayı amaçlayan 8 karakter uzunluğunda stok kartında kod4 sahasına yazılan değeri gösterir. |
| 11 | `KOD_5` | TDBGRUPKOD | evet |  | Raporlama amaçlı stokaları gruplamayı amaçlayan 8 karakter uzunluğunda stok kartında kod5 sahasına yazılan değeri gösterir. |
| 12 | `SATICI_KODU` | TDBCARIKOD | evet |  | Stoğun hangi satıcı cariden alındığı bilgisinin girildiği stok kartında stok kartı2 sekmesinde cari\S kodu alanına girilen değeri gösterir. |
| 13 | `OLCU_BR1` | varchar(2) | evet |  | Stok için kullanılan stok kartındaki ölçü birimi1 sahasına girilen temel ölçü birimini gösterir. |
| 14 | `OLCU_BR2` | varchar(2) | evet |  | Stok için kullanılan stok kartındaki ölçü birimi2 sahasına girilen 2. ölçü birimini gösterir. |
| 15 | `PAY_1` | TDBFLOAT | evet | `1` | 2. ölçü biriminin 1. ölçü birimine oranıdır. Oranın pay bölümünün girildiği alandır. |
| 16 | `PAYDA_1` | TDBFLOAT | evet | `1` | 2. ölçü biriminin 1. ölçü birimine oranıdır. Oranın payda bölümünün girildiği alandır. |
| 17 | `OLCU_BR3` | varchar(2) | evet |  | Stok için kullanılan stok kartındaki ölçü birimi3 sahasına girilen 3. ölçü birimini gösterir. |
| 18 | `PAY2` | TDBFLOAT | evet | `1` | 3. ölçü biriminin 1. ölçü birimine oranıdır. Oranın pay bölümünün girildiği alandır. |
| 19 | `PAYDA2` | TDBFLOAT | evet | `1` | 3. ölçü biriminin 1. ölçü birimine oranıdır. Oranın payda bölümünün girildiği alandır. |
| 20 | `FIAT_BIRIMI` | char(1) | evet | `1` | Stoğun alış ve satış faturalarının fiyatlandırılmasında işlem gören ölçü birimini gösterir. |
| 21 | `AZAMI_STOK` | TDBFLOAT | evet | `0` | Stok miktarının elde en fazla hangi limitte bulunması gerekiyorsa o değer girilmelidir. |
| 22 | `ASGARI_STOK` | TDBFLOAT | evet | `0` | Stok miktarının elde en az hangi limitte bulunması gerekiyorsa o değer girilmelidir. |
| 23 | `TEMIN_SURESI` | TDBFLOAT | evet | `0` | Verilen siparişin teslimine kadar geçen süreyi gösterir. |
| 24 | `KUL_MIK` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 25 | `RISK_SURESI` | TDBSMALLINT | evet | `0` | Stok kartı-1 sekmesinde stoğun son kullanma süresinin girileceği alandır. Stoğun ambarda en fazla ne kadar kalabileceği bilgisi girilerek rapor alınabilir. |
| 26 | `ZAMAN_BIRIMI` | varchar(3) | evet |  | Stok kartı-1 sekmesinde risk süresi sahasında girilen süre bilgisine ait birimin belirlendiği alandır. Örneğin risk süresi gün girilmişse GN, ay girilmişse AY, hafta girilmişse HF gibi iki karakterlik bilgiler girilir. |
| 27 | `SATIS_FIAT1` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 1. satış fiyatını gösterir. |
| 28 | `SATIS_FIAT2` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 2. satış fiyatını gösterir. |
| 29 | `SATIS_FIAT3` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 3. satış fiyatını gösterir. |
| 30 | `SATIS_FIAT4` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 4. satış fiyatını gösterir. |
| 31 | `SAT_DOV_TIP` | TDBBYTE | evet | `0` | Stok ait kartta fiyatlar sekmesinde satış döviz tipi alanında girilen değeri gösterir. |
| 32 | `DOV_ALIS_FIAT` | TDBFLOAT | evet | `0` | Stoğun belirlenen döviz tipinden alış fiyatını gösterir. |
| 33 | `DOV_MAL_FIAT` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun dövizli alışlarında, döviz birim maliyetini gösterir. |
| 34 | `DOV_SATIS_FIAT` | TDBFLOAT | evet | `0` | Stoğun belirlenen döviz tipinden satış fiyatını gösterir. |
| 35 | `MUH_DETAYKODU` | TDBSMALLINT | evet | `0` | Stoğun muhasebe ile entegre kullanımında, programın entegrasyonu oluşturabilmesi için kaydın tutulduğu muhasebe hesap kodlarından oluşan detay kodunun girileceği alandır. |
| 36 | `BIRIM_AGIRLIK` | TDBFLOAT | evet | `0` | Bilgi amaçli stoğun birim ağırlığının yazıldığı alandır. |
| 37 | `NAKLIYET_TUT` | TDBFLOAT | evet | `0` | Stok alışlarında nakliye tutarının birim değerini gösterir. |
| 38 | `KDV_ORANI` | TDBKDVORAN | evet | `0` | Stoklara ait alış ve satış KDV oranlarını gösterir. Fatura belgelerinde KDV hesaplaması yapılırken ilk olarak bu saha kontrol edilir. |
| 39 | `ALIS_DOV_TIP` | TDBBYTE | evet | `0` | Stok ait kartta fiyatlar sekmesinde alış döviz tipi alanında girilen değeri gösterir. |
| 40 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Stoğun bulunduğu deponun kodunu gösterir. |
| 41 | `DOV_TUR` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 42 | `URET_OLCU_BR` | TDBBYTE | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 43 | `BILESENMI` | char(1) | evet |  | Stok kartının diğer bilgiler sekmesinde, ilgili stoğun üretim reçetelerinde bileşen ise 'E', değilse 'H' değerini gösterir. |
| 44 | `MAMULMU` | char(1) | evet |  | Stok kartının diğer bilgiler sekmesinde, ilgili stoğun üretim reçetelerinde mamül ise 'E', değilse 'H' değerini gösterir. |
| 45 | `FORMUL_TOPLAMI` | TDBFLOAT | evet | `1` | Stoğun bulunduğu reçetenin toplamını gösterir. |
| 46 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `MAX_ISKONTO` | TDBFLOAT | evet | `0` | Ecza deposu uygulamasında stoğa uygulanan maksimum iskontoyu gösterir. |
| 48 | `ECZACI_KARI` | TDBFLOAT | evet | `0` | Ecza deposu uygulamasında uygulanan bir tür iskontodur bu değeri tutar. |
| 49 | `MIKTAR` | TDBFLOAT | evet | `0` | Ecza deposu uygulamasında stoğa uygulanan mal fazlası iskontosunu gösterir. |
| 50 | `MAL_FAZLASI` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 51 | `KDV_TENZIL_ORAN` | TDBFLOAT | evet | `0` | Ecza deposu uygulamasında kdv tenzil oranını gösterir. |
| 52 | `KILIT` | char(1) | evet |  | Stok planlama kayıtları\planlama-2\genel kiliti gösterir |
| 53 | `ONCEKI_KOD` | TDBSTOKKOD | evet |  | Stoklarda kod değişikliği yapılması halinde, stoğun eski kodunu gösterir. |
| 54 | `SONRAKI_KOD` | TDBSTOKKOD | evet |  | Kodu değiştirilmiş stok kartlarında, değiştirilen yeni kod değerini gösterir. Buraya değer gelmesi için virmandan sonra stok kodunun silinmemesi gerekmektedir. |
| 55 | `BARKOD1` | varchar(35) | evet |  | Stoğa ait kartta stok kodu2 sekmesinde 1. barkod alanına girilen kodu gösterir. |
| 56 | `BARKOD2` | varchar(35) | evet |  | Stoğa ait kartta stok kodu2 sekmesinde 2. barkod alanına girilen kodu gösterir. |
| 57 | `BARKOD3` | varchar(35) | evet |  | Stoğa ait kartta stok kodu2 sekmesinde 3. barkod alanına girilen kodu gösterir. |
| 58 | `ALIS_KDV_KODU` | TDBKDVORAN | evet | `0` | Stoklara ait alış ve satış KDV oranını gösterir |
| 59 | `ALIS_FIAT1` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 1. alış fiyatını gösterir. |
| 60 | `ALIS_FIAT2` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 2. alış fiyatını gösterir. |
| 61 | `ALIS_FIAT3` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 3. alış fiyatını gösterir. |
| 62 | `ALIS_FIAT4` | TDBFLOAT | evet | `0` | Kaydı oluşturulan stoğun 4. alış fiyatını gösterir. |
| 63 | `LOT_SIZE` | TDBFLOAT | evet | `0` | Mrpde sipariş miktarını gösterir. |
| 64 | `MIN_SIP_MIKTAR` | TDBFLOAT | evet | `0` | Mrpde minimum sipariş miktarını gösterir. |
| 65 | `SABIT_SIP_ARALIK` | TDBSMALLINT | evet | `0` | Mrpde sabit sipariş aralığını gösterir. |
| 66 | `SIP_POLITIKASI` | char(1) | evet |  | Mrpde sipariş politikasını gösterir. |
| 67 | `OZELLIK_KODU1` | TDBBYTE | evet | `0` | Mrpde mamül özellik kodu1 değerini gösterir. |
| 68 | `OZELLIK_KODU2` | TDBBYTE | evet | `0` | Mrpde mamül özellik kodu2 değerini gösterir. |
| 69 | `OZELLIK_KODU3` | TDBBYTE | evet | `0` | Mrpde mamül özellik kodu3 değerini gösterir. |
| 70 | `OZELLIK_KODU4` | TDBBYTE | evet | `0` | Mrpde mamül özellik kodu4 değerini gösterir. |
| 71 | `OZELLIK_KODU5` | TDBBYTE | evet | `0` | Mrpde mamül özellik kodu5 değerini gösterir. |
| 72 | `OPSIYON_KODU1` | TDBBYTE | evet | `0` | Mrpde opsiyon kodu1 değerini gösterir. |
| 73 | `OPSIYON_KODU2` | TDBBYTE | evet | `0` | Mrpde opsiyon kodu2 değerini gösterir. |
| 74 | `OPSIYON_KODU3` | TDBBYTE | evet | `0` | Mrpde opsiyon kodu3 değerini gösterir. |
| 75 | `OPSIYON_KODU4` | TDBBYTE | evet | `0` | Mrpde opsiyon kodu4 değerini gösterir. |
| 76 | `OPSIYON_KODU5` | TDBBYTE | evet | `0` | Mrpde opsiyon kodu5 değerini gösterir. |
| 77 | `BILESEN_OP_KODU` | TDBBYTE | evet | `0` | Stok planlama kayıtları\planlama-2\bileşen opt kodunu gösterir. |
| 78 | `SIP_VER_MAL` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 79 | `ELDE_BUL_MAL` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 80 | `YIL_TAH_KUL_MIK` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 81 | `EKON_SIP_MIKTAR` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 82 | `ESKI_RECETE` | char(1) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 83 | `OTOMATIK_URETIM` | char(1) | evet |  | Yarımamulllerde otomatik reçete işaretlendiğinde 'E', işaretlemediğinde 'H' değerini atar diğer durumlarda null değerini atar. |
| 84 | `ALFKOD` | char(1) | evet |  | Ecza deposunda alış faturalarında net fiyatı gösterir. |
| 85 | `SAFKOD` | char(1) | evet |  | Ecza deposunda satış faturalarında net fiyatı gösterir. |
| 86 | `KODTURU` | char(1) | evet |  | Ecza deposunda ana/muavin hesapların tutulduğu sahadır. |
| 87 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 88 | `S_YEDEK2` | TDBGRUPKOD | evet |  | Ek bilgiler sekmesinde hacim kodu alanına girilen bilgiyi gösterir. |
| 89 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 90 | `F_YEDEK4` | TDBFLOAT | evet |  | Puan değerini gösterir. |
| 91 | `C_YEDEK5` | char(1) | evet |  | farklı serilerden işlem yapılsın işaretli ise 'E', değilse 'H' değerini atar. |
| 92 | `C_YEDEK6` | char(1) | evet |  | Tartı ürününü gösterir. |
| 93 | `B_YEDEK7` | TDBBYTE | evet |  | karmakolide kolistok kodu ise, '1' atar. |
| 94 | `I_YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 95 | `L_YEDEK9` | TDBINTEGER | evet |  | Birim puan değerini tutar. |
| 96 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 97 | `GIRIS_SERI` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde girişlerde seri no takibi yapılacak mı parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 98 | `CIKIS_SERI` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde çıkışlarda seri no takibi yapılacak mı parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 99 | `SERI_BAK` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde bakiye kontrolü yapılacak mı parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 100 | `SERI_MIK` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde miktar kadar seri sorulsun parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 101 | `SERI_GIR_OT` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde seri kodu girişler için otomatik hesaplansın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 102 | `SERI_CIK_OT` | char(1) | evet |  | Stok kartı kartlarında seri takibi sekmesinde seri kodu çıkışlar için otomatik hesaplansın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 103 | `SERI_BASLANGIC` | varchar(35) | evet |  | Stok giriş ve/veya çıkışlarda seri numarası otomatik hesaplanıyor ise kullanılabilecek parametredir. Seri numaralasının başında, baz alınması istenen değeri gösterir. |
| 104 | `FIYATKODU` | TDBGRUPKOD | evet |  | Stoğun, Stok Fiyat İşlemleri/Fiyat Kodu Tanımlamaları bölümünden tanımlanan, bağlı olduğu fiyat kodunu gösterir. |
| 105 | `FIYATSIRASI` | TDBINTEGER | evet |  | Stok Fiyat İşlemleri bölümünden toplu ürün fiyat değişikliği yapılırken girilen fiyat koduna ait stokların listede kaçıncı sırada listeleneceğini gösterir. |
| 106 | `PLANLANACAK` | char(1) | evet | `E` | Tanımlamaları yapılan stoklar için Malzeme Gereksinim Planlama işlemi sırasında planlama yapılıp yapılmayacağının belirlenmesi amacıyla kullanılır. Stok planlama kayıtlarında planlanacak parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 107 | `LOT_SIZECUSTOMER` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 108 | `MIN_SIP_MIKTARCUSTOMER` | TDBFLOAT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 109 | `GUMRUKTARIFEKODU` | varchar(35) | evet |  | Özellikle serbest bölgede faaliyet veren firmaların raporlama amaçlı kullanılan alandır. |
| 110 | `ABCKODU` | varchar(8) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 111 | `PERFORMANSKODU` | varchar(4) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 112 | `SATICISIPKILIT` | char(1) | evet | `H` | Stok planlama kayıtlarında planlama2 sekmesinde satıcı sip kilitle parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 113 | `MUSTERISIPKILIT` | char(1) | evet | `H` | Stok planlama kayıtlarında planlama2 sekmesinde müşteri sip kilitle parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 114 | `SATINALMAKILIT` | char(1) | evet | `H` | Stok planlama kayıtlarında planlama2 sekmesinde satın alma kilit parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 115 | `SATISKILIT` | char(1) | evet |  | Stok planlama kayıtlarında planlama2 sekmesinde satış kilit parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 116 | `EN` | TDBFLOAT | evet | `0` | Stoğa ait en bilgilerini gösterir. |
| 117 | `BOY` | TDBFLOAT | evet | `0` | Stoğa ait boy bilgilerini gösterir. |
| 118 | `GENISLIK` | TDBFLOAT | evet | `0` | Stoğa ait genişlik bilgilerini gösterir. |
| 119 | `SIPLIMITVAR` | char(1) | evet | `H` | Stok planlama kayıtları\planlama-2\sip. Limitleme var |
| 120 | `SONSTOKKODU` | TDBSTOKKOD | evet |  | Kodu birden fazla kez değiştirilmiş stok kartlarında, bu sahaya stok için verilen yeni kodlardan sonuncusunu göstermektedir. |
| 121 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 122 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 123 | `FIKTIF_MAM` | char(1) | evet | `H` | Stok kartı kayıtlarında ek bilgiler sekmesinde fiktif mamül parametresi işareli ise 'E', değilse 'H' değerini gösterir. |
| 124 | `YAPILANDIR` | char(1) | evet |  | Esnek yapılandırma uyg varsa, stok kartında ek bilgiler sekmesinde esnek yapılandır işaretli ise 'E', değilse 'H' değerini gösterir. |
| 125 | `SBOMVARMI` | char(1) | evet | `H` | Esnek yapılandırma uyg varsa, stok kartında ek bilgiler sekmesinde süper reçete kullanılsın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 126 | `BAGLISTOKKOD` | TDBSTOKKOD | evet |  | Esnek yapılandırma uygulaması ile ilgili olarak daha sonraki versiyonlarda kullanılacak sahadır. |
| 127 | `YAPKOD` | varchar(15) | evet |  | Esnek yapılandırma uygulaması ile ilgili olarak daha sonraki versiyonlarda kullanılacak sahadır. |
| 128 | `ALISTALTEKKILIT` | char(1) | evet |  | Stok planlama kayıtlarındaki satın alma talep teklif kilit parametresi yer alır. |
| 129 | `SATISTALTEKKILIT` | char(1) | evet |  | Stok planlama kayıtlarındaki Satış talep teklif kilit parametresi yer alır. |
| 130 | `S_YEDEK3` | varchar(50) | evet |  | TBLSTBIRIM ve TBLSTSABITEK tablolarının kayıt, düzeltme ve silme işlemleri için belge bazında log desteği sağlandı. |
| 131 | `STOKMEVZUAT` | TDBSMALLINT | evet |  | Ek bilgileri sekmesindeki stok mevzuat tipi bilgisi yer alır. 0- Hiçbiri,1- Binek Oto Alım (gider),2-Binek Oto Alım (Maliyet),3-Binek Oto Kira, 4- Binek Oto Masraf |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTSABIT_PKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTSABIT_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSTSABIT_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSTSABIT_FKEY2` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTSABIT_FKEY3` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTSABIT_IND_BARKD1` | `ISLETME_KODU+SUBE_KODU+BARKOD1` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_BARKD2` | `ISLETME_KODU+SUBE_KODU+BARKOD2` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_BARKD3` | `ISLETME_KODU+SUBE_KODU+BARKOD3` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_GRPKOD` | `ISLETME_KODU+SUBE_KODU+GRUP_KODU+STOK_KODU` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD` | `ISLETME_KODU+SUBE_KODU+STOK_KODU` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD1` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+KOD_1` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD2` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+KOD_2` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD3` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+KOD_3` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD4` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+KOD_4` | Unique, Non-clustered |
| `TBLSTSABIT_IND_KOD5` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+KOD_5` | Unique, Non-clustered |
| `TBLSTSABIT_IND_ONCKOD` | `ISLETME_KODU+SUBE_KODU+ONCEKI_KOD` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_SATKOD` | `ISLETME_KODU+SUBE_KODU+SATICI_KODU` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_SNRKOD` | `ISLETME_KODU+SUBE_KODU+SONRAKI_KOD` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_STKADI` | `ISLETME_KODU+SUBE_KODU+STOK_ADI` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_UPDKOD` | `ISLETME_KODU+SUBE_KODU+STOK_KODU+UPDATE_KODU` | Unique, Non-clustered |
| `TBLSTSABIT_IND_WKRTIP` | `ISLETME_KODU+SUBE_KODU+ONAYTIPI` | Non-unique, Non-clustered |
| `TBLSTSABIT_IND_WRKON` | `ISLETME_KODU+SUBE_KODU+ONAYNUM` | Non-unique, Non-clustered |
| `TBLSTSABIT_PKEY` | `STOK_KODU` | Clustered |
| `TBLSTSAIBT_IND_HACIM` | `ISLETME_KODU+SUBE_KODU+S_YEDEK2` | Non-unique, Non-clustered |
| `TBLSTSAIBT_IND_URTKOD` | `ISLETME_KODU+SUBE_KODU+URETICI_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, STOK_KODU, URETICI_KODU, STOK_ADI, GRUP_KODU
FROM dbo.TBLSTSABIT WITH (NOLOCK);
```
