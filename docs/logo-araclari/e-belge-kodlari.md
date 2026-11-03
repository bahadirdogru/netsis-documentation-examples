---
title: E-belge kod listeleri
url: https://netsis.bahadirdogru.com/logo-araclari/e-belge-kodlari/
---

# E-belge kod listeleri

E-fatura ve e-arşiv faturada kullanılan GİB kodları. Listeler Logo'nun indirme sunucusundaki [e-devlet araçları](/logo-araclari/) klasöründe duran XML dosyalarından alındı. Bu dosyalar Logo ürünlerine kod tablosu aktarmak için hazırlanmıştır (`DBOP="INS"` biçimi), ama içerdikleri kodlar GİB'in kodlarıdır ve Netsis'te de aynıdır.

> **Tarihe dikkat.** XML'lerin en yenisi 2021-12-02 tarihlidir. GİB kod listelerini zaman zaman günceller (yeni tevkifat ve istisna kodları eklenir, adlar değişir). Faturada kullanmadan önce GİB'in güncel [e-Fatura kod listelerini](https://ebelge.gib.gov.tr/) kontrol edin.

Netsis'te bu kodlar e-fatura başlık ve kalem alanlarında kullanılır. NetOpenX'te KDV istisna kodu `FatUst.EFatOzelKod` alanına yazılır: [Fatura ve irsaliye](/netopenx/fatura-ve-irsaliye/#fatust-alanlari). Tevkifatlı fatura örneği: [bahadirdogru.com](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/).

## KDV tevkifat kodları

Kaynak: [`VatDeducts.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_KdvMuafiyet_Xml/VatDeducts.xml) (2021-12-02). Oran, KDV'nin alıcı tarafından tevkif edilen kısmıdır (ör. `9/10`: KDV'nin onda dokuzu).

| Kod | Tevkifat oranı | Açıklama |
|---|---|---|
| `601` | 4/10 | YAPIM İŞLERİ İLE BU İŞLERLE BİRLİKTE İFA EDİLEN MÜHENDİSLİK-MİMARLIK VE ETÜT-PROJE HİZMETLERİ |
| `602` | 9/10 | ETÜT,PLAN-PROJE,DANIŞMANLIK,DENETİM VE BENZERİ HİZMETLER |
| `603` | 7/10 | MAKİNE,TEÇHİZAT,DEMİRBAŞ VE TAŞITLARA AİT TADİL,BAKIM VE ONARIM HİZMETLERİ |
| `604` | 5/10 | YEMEK SERVİS HİZMETİ |
| `605` | 5/10 | ORGANİZASYON HİZMETİ |
| `606` | 9/10 | İŞGÜCÜ TEMİN HİZMETLERİ |
| `607` | 9/10 | ÖZEL GÜVENLİK HİZMETİ |
| `608` | 9/10 | YAPI DENETİM HİZMETLERİ |
| `609` | 7/10 | FASON OLARAK YAPTIRILAN TEKSTİL VE KONFEKSİYON İŞLERİ,ÇANTA VE AYAKKABI DİKİM İŞLERİ VE BU İŞLERE ARACILIK HİZMETLERİ |
| `610` | 9/10 | TURİSTİK MAĞAZALARA VERİLEN MÜŞTERİ BULMA / GÖTÜRME HİZMETLERİ |
| `611` | 9/10 | SPOR KULÜPLERİNİN YAYIN, REKLÂM VE İSİM HAKKI GELİRLERİNE KONU İŞLEMLERİ |
| `612` | 9/10 | TEMİZLİK HİZMETİ |
| `613` | 9/10 | ÇEVRE VE BAHÇE BAKIM HİZMETLERİ |
| `614` | 5/10 | SERVİS TAŞIMACILIĞI HİZMETİ |
| `615` | 7/10 | HER TÜRLÜ BASKI VE BASIM HİZMETLERİ |
| `616` | 5/10 | DİĞER HİZMETLER [KDVGUT-(I/C-2.1.3.2.13)] |
| `617` | 7/10 | HURDA METALDEN ELDE EDİLEN KÜLÇE TESLİMLERİ |
| `618` | 7/10 | HURDA METALDEN ELDE EDİLENLER DIŞINDAKİ BAKIR, ÇİNKO VE ALÜMİNYUM KÜLÇE TESLİMLERİ |
| `619` | 7/10 | BAKIR, ÇİNKO VE ALÜMİNYUM ÜRÜNLERİNİN TESLİMİ |
| `620` | 7/10 | İSTİSNADAN VAZGEÇENLERİN HURDA VE ATIK TESLİMİ |
| `621` | 9/10 | METAL, PLASTİK, LASTİK, KAUÇUK, KÂĞIT VE CAM HURDA VE ATIKLARDAN ELDE EDİLEN HAMMADDE TESLİMİ |
| `622` | 9/10 | PAMUK, TİFTİK, YÜN VE YAPAĞI İLE HAM POST VE DERİ TESLİMLERİ |
| `623` | 5/10 | AĞAÇ VE ORMAN ÜRÜNLERİ TESLİMİ |
| `624` | 2/10 | YÜK TAŞIMACILIĞI HİZMETİ [KDVGUT-(I/C-2.1.3.2.11)] |
| `625` | 3/10 | TİCARİ REKLAM HİZMETLERİ [KDVGUT-(I/C-2.1.3.2.15)] |
| `626` | 2/10 | DİĞER TESLİMLER [KDVGUT-(I/C-2.1.3.3.7.)] |

Aynı klasördeki daha eski liste ([`VatDeducts.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_XML/VatDeducts.xml) (2021-03-01)) şu satırlarda farklıdır:

| Kod | Oran | Eski listedeki açıklama |
|---|---|---|
| `616` | 5/10 | 5018 SAYILI KANUNA EKLİ CETVELLERDEKİ İDARE, KURUM VE KURUŞLARA YAPILAN DİĞER HİZMETLER |
| `650` | 2/10,3/10,5/10,7/10,9/10 | DİĞERLERİ |

[`VatDeducts2.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_KdvMuafiyet_Xml/VatDeducts2.xml) (2021-12-02) aynı 26 kalemi `6xx` yerine `2xx` numaralarıyla (`201`–`226`) içerir. Dosyada `2xx` numaralarının ne zaman kullanıldığı yazmıyor; GİB'in e-fatura tevkifat kodları `6xx` aralığındadır.

## KDV istisna kodları

Kaynak: [`VatExcepts.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/Tevkifat_KdvMuafiyet_Xml/VatExcepts.xml) (2021-12-02). 76 kod. Açıklamanın başındaki madde numarası (ör. `17/1`) 3065 sayılı KDV Kanunu'nun maddesidir; birkaç kodda madde numarası yoktur.

| Kod | Tür | Açıklama |
|---|---|---|
| `201` | Kısmi | 17/1 Kültür ve Eğitim Amacı Taşıyan İşlemler |
| `202` | Kısmi | 17/2-a Sağlık, Çevre Ve Sosyal Yardım Amaçlı İşlemler |
| `204` | Kısmi | 17/2-c Yabancı Diplomatik Organ Ve Hayır Kurumlarının Yapacakları Bağışlarla İlgili Mal Ve Hizmet Alışları |
| `205` | Kısmi | 17/2-d Taşınmaz Kültür Varlıklarına İlişkin Teslimler ve Mimarlık Hizmetleri |
| `206` | Kısmi | 17/2-e Mesleki Kuruluşların İşlemleri |
| `207` | Kısmi | 17/3 Askeri Fabrika, Tersane ve Atölyelerin İşlemleri |
| `208` | Kısmi | 17/4-c Birleşme, Devir, Dönüşüm ve Bölünme İşlemleri |
| `209` | Kısmi | 17/4-e Banka ve Sigorta Muameleleri Vergisi Kapsamına Giren İşlemler |
| `211` | Kısmi | 17/4-h Zirai Amaçlı Su Teslimleri İle Köy Tüzel Kişiliklerince Yapılan İçme Suyu teslimleri |
| `212` | Kısmi | 17/4-ı Serbest Bölgelerde Verilen Hizmetler |
| `213` | Kısmi | 17/4-j Boru Hattı İle Yapılan Petrol Ve Gaz Taşımacılığı |
| `214` | Kısmi | 17/4-k Organize Sanayi Bölgelerindeki Arsa ve İşyeri Teslimleri İle Konut Yapı Kooperatiflerinin Üyelerine Konut Teslimleri |
| `215` | Kısmi | 17/4-l Varlık Yönetim Şirketlerinin İşlemleri |
| `216` | Kısmi | 17/4-m Tasarruf Mevduatı Sigorta Fonunun İşlemleri |
| `217` | Kısmi | 17/4-n Basın-Yayın ve Enformasyon Genel Müdürlüğüne Verilen Haber Hizmetleri |
| `218` | Kısmi | KDV 17/4-o md. Gümrük Antrepoları, Geçici Depolama Yerleri ile Gümrüklü Sahalarda Vergisiz Satış Yapılan İşyeri, Depo ve Ardiye Gibi Bağımsız Birimlerin Kiralanması |
| `219` | Kısmi | 17/4-p Hazine ve Arsa Ofisi Genel Müdürlüğünün işlemleri |
| `220` | Kısmi | 17/4-r İki Tam Yıl Süreyle Sahip Olunan Taşınmaz ve İştirak Hisseleri Satışları |
| `221` | Kısmi | Geçici 15 Konut Yapı Kooperatifleri, Belediyeler ve Sosyal Güvenlik Kuruluşlarına Verilen İnşaat Taahhüt Hizmeti |
| `223` | Kısmi | Geçici 20/1 Teknoloji Geliştirme Bölgelerinde Yapılan İşlemler |
| `225` | Kısmi | Geçici 23 Milli Eğitim Bakanlığına Yapılan Bilgisayar Bağışları İle İlgili Teslimler |
| `226` | Kısmi | 17/2-b Özel Okulları, Üniversite ve Yüksekokullar Tarafından Verilen Bedelsiz Eğitim Ve Öğretim Hizmetleri |
| `227` | Kısmi | 17/2-b Kanunların Gösterdiği Gerek Üzerine Bedelsiz Olarak Yapılan Teslim ve Hizmetler |
| `228` | Kısmi | 17/2-b Kanunun (17/1) Maddesinde Sayılan Kurum ve Kuruluşlara Bedelsiz Olarak Yapılan Teslimler |
| `229` | Kısmi | 17/2-b Gıda Bankacılığı Faaliyetinde Bulunan Dernek ve Vakıflara Bağışlanan Gıda, Temizlik, Giyecek ve Yakacak Maddeleri |
| `230` | Kısmi | 17/4-g Külçe Altın, Külçe Gümüş Ve Kiymetli Taşlarin Teslimi |
| `231` | Kısmi | 17/4-g Metal Plastik, Lastik, Kauçuk, Kağit, Cam Hurda Ve Atıkların Teslimi |
| `232` | Kısmi | 17/4-g Döviz, Para, Damga Pulu, Değerli Kağıtlar, Hisse Senedi ve Tahvil Teslimleri |
| `234` | Kısmi | 17/4-ş Konut Finansmanı Amacıyla Teminat Gösterilen ve İpotek Konulan Konutların Teslimi |
| `235` | Kısmi | 16/1-c Transit ve Gümrük Antrepo Rejimleri İle Geçici Depolama ve Serbest Bölge Hükümlerinin Uygulandığiı Malların Teslimi |
| `236` | Kısmi | 19/2 Usulüne Göre Yürürlüğe Girmiş Uluslararası Anlaşmalar Kapsamındaki İstisnalar (İade Hakkı Tanınmayan) |
| `237` | Kısmi | 17/4-t 5300 Sayılı Kanuna Göre Düzenlenen Ürün Senetlerinin İhtisas/Ticaret Borsaları Aracılığıyla İlk Teslimlerinden Sonraki Teslim |
| `238` | Kısmi | 17/4-u Varlıkların Varlık Kiralama Şirketlerine Devri İle Bu Varlıkların Varlık Kiralama Şirketlerince Kiralanması ve Devralınan Kuruma Devri |
| `239` | Kısmi | 17/4-y Taşınmazların Finansal Kiralama Şirketlerine Devri, Finansal Kiralama Şirketi Tarafından Devredene Kiralanması ve Devri |
| `240` | Kısmi | 17/4-z Patentli Veya Faydalı Model Belgeli Buluşa İlişkin Gayri Maddi Hakların Kiralanması, Devri ve Satışı |
| `241` | Kısmi | TürkAkım Gaz Boru Hattı Projesine İlişkin Anlaşmanın (9/b) Maddesinde Yer Alan Hizmetler |
| `242` | Kısmi | KDV 17/4-ö md. Gümrük Antrepoları, Geçici Depolama Yerleri ile Gümrüklü Sahalarda, İthalat ve İhracat İşlemlerine konu mallar ile transit rejim kapsamında işlem gören mallar için verilen ardiye, depolama ve terminal hizmetleri |
| `250` | Kısmi | Diğerleri |
| `301` | Tam | 11/1-a Mal İhracatı |
| `302` | Tam | 11/1-a Hizmet İhracatı |
| `303` | Tam | 11/1-a Roaming Hizmetleri |
| `304` | Tam | 13/a Deniz Hava ve Demiryolu Taşıma Araçlarının Teslimi İle İnşa, Tadil, Bakım ve Onarımları |
| `305` | Tam | 13/b Deniz ve Hava Taşıma Araçları İçin Liman Ve Hava Meydanlarında Yapılan Hizmetler |
| `306` | Tam | 13/c Petrol Aramaları ve Petrol Boru Hatlarının İnşa ve Modernizasyonuna İlişkin Yapılan Teslim ve Hizmetler |
| `307` | Tam | 13/c Maden Arama, Altın, Gümüş, ve Platin Madenleri İçin İşletme, Zenginleştirme Ve Rafinaj Faaliyetlerine İlişkin Teslim Ve Hizmetler[KDVGUT-(II/8-4)] |
| `308` | Tam | 13/d Teşvikli Yatırım Mallarının Teslimi |
| `309` | Tam | 13/e Liman Ve Hava Meydanlarının İnşası, Yenilenmesi Ve Genişletilmesi |
| `310` | Tam | 13/f Ulusal Güvenlik Amaçlı Teslim ve Hizmetler |
| `311` | Tam | 14/1 Uluslararası Taşımacılık |
| `312` | Tam | 15/a Diplomatik Organ Ve Misyonlara Yapılan Teslim ve Hizmetler |
| `313` | Tam | 15/b Uluslararası Kuruluşlara Yapılan Teslim ve Hizmetler |
| `314` | Tam | 19/2 Usulüne Göre Yürürlüğe Girmiş Uluslar Arası Anlaşmalar Kapsamındaki İstisnalar |
| `315` | Tam | 14/3 İhraç Konusu Eşyayı Taşıyan Kamyon, Çekici ve Yarı Romorklara Yapılan Motorin Teslimleri |
| `316` | Tam | 11/1-a Serbest Bölgelerdeki Müşteriler İçin Yapılan Fason Hizmetler |
| `317` | Tam | 17/4-s Engellilerin Eğitimleri, Meslekleri ve Günlük Yaşamlarına İlişkin Araç-Gereç ve Bilgisayar Programları |
| `318` | Tam | Geçici 29 3996 Sayılı Kanuna Göre Yap-İşlet-Devret Modeli Çerçevesinde Gerçekleştirilecek Projeler, 3359 Sayılı Kanuna Göre Kiralama Karşılığı Yaptırılan Sağlık Tesislerine İlişkin Projeler ve 652 Sayılı Kanun Hükmünde Kararnameye Göre Kiralama Karşılığı Yaptırılan Eğitim Öğretim Tesislerine İlişkin Projelere İlişkin Teslim ve Hizmetler |
| `319` | Tam | 13/g Başbakanlık Merkez Teşkilatına Yapılan Araç Teslimleri |
| `320` | Tam | Geçici 16 (6111 sayılı K.) İSMEP Kapsamında İstanbul İl Özel İdaresi'ne Bağlı Olarak Faaliyet Gösteren "İstanbul Proje Koordinasyon Birimi"ne Yapılacak Teslim ve Hizmetler |
| `321` | Tam | Geçici 26 Birleşmiş Milletler (BM) ile Kuzey Atlantik Antlaşması Teşkilatı (NATO) Temsilcilikleri ve Bu Teşkilatlara Bağlı Program, Fon ve Özel İhtisas Kuruluşları ile İktisadi İşbirliği ve Kalkınma Teşkilatına (OECD) Resmi Kullanımları İçin Yapılacak Mal Teslimi ve Hizmet İfaları, Bunların Sosyal ve Ekonomik Yardım Amacıyla Bedelsiz Olarak Yapacakları Mal Teslimi ve Hizmet İfaları İle İlgili Bunlara Yapılan Mal Teslimi ve Hizmet İfaları |
| `322` | Tam | 11/1-a Türkiye'de İkamet Etmeyenlere Özel Fatura ile Yapılan Teslimler (Bavul Ticareti) |
| `323` | Tam | 13/ğ 5300 Sayılı Kanuna Göre Düzenlenen Ürün Senetlerinin İhtisas/Ticaret Borsaları Aracılığıyla İlk Teslimi |
| `324` | Tam | 13/h Türkiye Kızılay Derneğine Yapılan Teslim ve Hizmetler ile Türkiye Kızılay Derneğinin Teslim ve Hizmetleri |
| `325` | Tam | 13/ı Yem Teslimleri |
| `326` | Tam | 13/ı Gıda, Tarım ve Hayvancılık Bakanlığı Tarafından Tescil Edilmiş Gübrelerin Teslimi |
| `327` | Tam | 13/ı Gıda, Tarım ve Hayvancılık Bakanlığı Tarafından Tescil Edilmiş Gübrelerin İçeriğinde Bulunan Hammaddelerin Gübre Üreticilerine Teslimi |
| `328` | Tam | 13/i Konut veya İşyeri Teslimleri |
| `329` | Tam | Geçici 38 FATİH Projesi Kapsamında Milli Eğitim Bankanlığına Yapılacak Mal Teslimi ve Hizmet İfaları |
| `330` | Tam | KDV 13/j md. Organize Sanayi Bölgeleri ile Küçük Sanayi Sitelerinin İnşasına İlişkin Teslim ve Hizmetler |
| `331` | Tam | KDV 13/m md. Ar-Ge, Yenilik ve Tasarım Faaliyetlerinde Kullanılmak Üzere Yapılan Yeni Makina ve Teçhizat Teslimlerinde İstisna |
| `332` | Tam | KDV Geçici 39. Md. İmalat Sanayiinde Kullanılmak Üzere Yapılan Yeni Makina ve Teçhizat Teslimlerinde İstisna |
| `333` | Tam | KDV 13/k md. Kapsamında Genel ve Özel Bütçeli Kamu İdarelerine, İl Özel İdarelerine, Belediyelere ve Köylere bağışlanan Tesislerin İnşasına İlişkin İstisna |
| `334` | Tam | KDV 13/l md. Kapsamında Yabancılara Verilen Sağlık Hizmetlerinde İstisna |
| `335` | Tam | Basılı Kitap ve Süreli Yayınların Teslimleri |
| `336` | Tam | UEFA Müsabakaları Kapsamında Yapılacak Teslim ve Hizmetler |
| `337` | Tam | Türk Akım Gaz Boru Hattı Projesine İlişkin Anlaşmanın (9/h) Maddesi Kapsamındaki Gaz Taşıma Hizmetleri |
| `350` | Tam | Diğerleri |

## Ödeme şekli kodları

Kaynak: [`PayMeansCodes.xml`](https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/E-Fatura/PayMeansCodes.xml) (2015-03-01). UBL-TR `cac:PaymentMeans/cbc:PaymentMeansCode` alanının değerleri (UN/EDIFACT 4461 listesi). 71 kod.

| Kod | Ad | Açıklama |
|---|---|---|
| `1` | Tanımsız |  |
| `2` | EFT Alacak | EFT Merkezi üzerinden yapılan alacak hareketi. |
| `3` | EFT Borç | EFT Merkezi üzerinden yapılan borç hareketi. |
| `4` | Vadesiz Hesaba EFT Borç İadesi | EFT borç hareketinin vadesiz mevduat hesabına iadesi talebi. |
| `5` | Vadesiz Hesaba EFT Alacak İadesi | EFT alacak hareketinin vadesiz mevduat hesabına iadesi talebi. |
| `6` | Vadesiz Hesaba EFT Alacak | EFT Merkezi üzerinden vadesiz mevduat hesabında yapılan alacak hareketi. |
| `7` | Vadesiz Hesaba EFT Borç | EFT Merkezi üzerinden vadesiz mevduat hesabında yapılan borç hareketi. |
| `8` | Blokaj | Hak sahibinin tahsilatı için veya diğer talimatlar gereği bankanın ödemeyi durdurması. |
| `9` | Ulusal veya Bölgesel Takas | Ödemenin ulusal veya bölgesel takas yoluyla yapılması. |
| `10` | Nakit |  |
| `11` | Yatırım Hesabına EFT Alacak İadesi | EFT alacak hareketinin yatırım hesabına iadesi talebi. |
| `12` | Yatırım Hesabına EFT Borç İadesi | EFT borç hareketinin yatırım hesabına iadesi talebi. |
| `13` | Yatırım Hesabına EFT Alacak | EFT Merkezi üzerinden yatırım hesabında yapılan alacak hareketi. |
| `14` | Yatırım Hesabına EFT Borç | EFT Merkezi üzerinden yatırım hesabında yapılan borç hareketi. |
| `15` | Virman Alacak | Aynı finans kurumunda, alıcı hesabından satıcı hesabına doğru alacak hareketi. |
| `16` | Virman Borç | Aynı finans kurumunda, satıcı hesabından alıcı hesabına doğru borç hareketi. |
| `17` | EFT ile CCD (Nakit Süpürme) Alacak Hareketi | EFT Merkezi üzerinden, nakit süpürme yöntemiyle vadesiz mevduat hesabında yapılan alacak hareketi. |
| `18` | EFT ile CCD (Nakit Süpürme) Borç Hareketi | EFT Merkezi üzerinden, nakit süpürme yöntemiyle vadesiz mevduat hesabında yapılan borç hareketi. |
| `19` | EFT ile CTP Alacak Hareketi | EFT Merkezi üzerinden, CTP ödeme formatı kullanılarak vadesiz mevduat hesabında yapılan alacak hareketi. |
| `20` | Çek |  |
| `21` | Banka Çeki | Fon ödemelerindeki banka çeki/ödeme emri sorunu... |
| `22` | Sertifikalı Banka Çeki |  |
| `23` | Banka Çeki (Banka ya da benzeri bir kurum tarafından yayınlanan) |  |
| `25` | Sertifikalı Çek |  |
| `26` | Yerel Çek | İfade bozukluğu mu var sanki? |
| `27` | EFT ile CTP Borç Hareketi (Vadesiz) | EFT Merkezi üzerinden, CTP ödeme formatı kullanılarak vadesiz mevduat hesabında yapılan borç hareketi. |
| `28` | EFT ile CTX Alacak Hareketi (Vadesiz) | EFT Merkezi üzerinden, CTX ödeme formatı kullanılarak vadesiz mevduat hesabında yapılan alacak hareketi. |
| `29` | EFT ile CTX Borç Hareketi (Vadesiz) | EFT Merkezi üzerinden, CTX ödeme formatı kullanılarak vadesiz mevduat hesabında yapılan borç hareketi. |
| `30` | Alacak Hareketi |  |
| `31` | Borç Hareketi |  |
| `32` | EFT ile CCD+ (Nakit Süpürme) Alacak Hareketi | EFT Merkezi üzerinden, CCD+ ödeme formatı kullanılarak vadesiz mevduat hesabına yapılan alacak hareketi. |
| `33` | EFT ile CCD+ (Nakit Süpürme) Borç Hareketi | EFT Merkezi üzerinden, CCD+ ödeme formatı kullanılarak vadesiz mevduat hesabına yapılan borç hareketi. |
| `34` | EFT ile PPD (Talimatlı Ödeme) | EFT Merkezi üzerinden vadesiz mevduat veya yatırım hesabına yapılan tüketici kredisi hareketi. |
| `35` | EFT ile CCD (Nakit Süpürme) Alacak Hareketi | EFT Merkezi üzerinden vadesiz mevduat veya yatırım hesabına yapılan alacak hareketi. |
| `36` | EFT ile CCD (Nakit Süpürme) Borç Hareketi | EFT Merkezi üzerinden, CCD ödeme formatı kullanılarak yatırım hesabına yapılan borç hareketi. |
| `37` | EFT ile CTP Alacak Hareketi (Yatırım) | EFT Merkezi üzerinden, CTP ödeme formatı kullanılarak yatırım hesabına yapılan alacak hareketi. |
| `38` | EFT ile CTP Borç Hareketi (Yatırım) | EFT Merkezi üzerinden, CTP ödeme formatı kullanılarak yatırım hesabına yapılan borç hareketi. |
| `39` | EFT ile CTX Alacak Hareketi (Yatırım) | EFT Merkezi üzerinden, CTX ödeme formatı kullanılarak yatırım hesabına yapılan alacak hareketi. |
| `40` | EFT ile CTX Borç Hareketi (Yatırım) | EFT Merkezi üzerinden, CTX ödeme formatı kullanılarak yatırım hesabına yapılan borç hareketi. |
| `41` | EFT ile CCD+ (Nakit Süpürme) Alacak Hareketi (Yatırım) | EFT Merkezi üzerinden, CCD+ ödeme formatı kullanılarak yatırım hesabına yapılan alacak hareketi. |
| `42` | Banka Hesabına Ödeme |  |
| `43` | EFT ile CCD+ (Nakit Süpürme) Borç Hareketi (Yatırım) | EFT Merkezi üzerinden, CCD+ ödeme formatı kullanılarak yatırım hesabına yapılan borç hareketi. |
| `44` | Fatura Ödemesi | Alacaklı tarafından borçluya kesilen ve borçlu tarafından onaylanan fatura. |
| `45` | Referanslı İnternet Bankacılığı Alacak Hareketi | İnternet bankacılığı üzerinden başlatılan ilgili alacak hareketi. |
| `46` | Bankalar Arası Borç Hareketi | Bankalar arası vasıtalar yoluyla borç transferi. |
| `47` | İnternet Bankacılığı Borç Hareketi | İnternet bankacılığı üzerinden başlatılan borç hareketi. |
| `48` | Banka Kartı | Banka veya bir başka finansal kuruluşa ait kartla ödeme. |
| `49` | Doğrudan Borçlandırma | Müşterinin banka hesabı doğrudan bu tutar kadar borçlandırılır. |
| `50` | Posta Çeki |  |
| `60` | Senet |  |
| `61` | Borçlu Tarafından İmzalanmış Senet |  |
| `62` | Borçlu Tarafından İmzalanmış Bankanın Kefaletindeki Senet |  |
| `63` | Borçlu Tarafından İmzalanmış Bir 3. Partinin Kefaletindeki Senet |  |
| `64` | Banka Tarafından İmzalanmış Senet |  |
| `65` | Banka Tarafından İmzalanmış Bir Başka Bankanın Kefaletindeki Senet |  |
| `66` | Bir 3. Parti Tarafından İmzalanmış Senet |  |
| `67` | Bir 3. Parti Tarafından İmzalanmış Bankanın Kefaletindeki Senet |  |
| `70` | Alacaklı Tarafından Borçludan Keşide Edilen Senet |  |
| `74` | Alacaklı Tarafından Bankadan Keşide Edilen Senet |  |
| `75` | Alacaklı Tarafından Keşide Edilen Bir Başka Bankanın Kefaletindeki Senet |  |
| `76` | Alacaklı Tarafından Keşide Edilen Bir 3. Partinin Kefaletindeki Senet |  |
| `77` | Alacaklı Tarafından Bir 3. Partiden Keşide Edilen Senet |  |
| `78` | Alacaklı Tarafından Bir 3. Partiden Keşide Edilen Bankanın Kefaletindeki Senet |  |
| `91` | Ciro Edilemeyen Banka Çeki | Banka çekinin/ödeme emrinin ciro edilemez olduğunu belirtiyor. |
| `92` | Ciro Edilemeyen Yerel Çek | Çekin fon ödemelerinde ciro edilemez olduğunu belirtiyor. |
| `93` | Referans Ciro | Bu emirle, müşteri bankaya 'Referans Ciro' ödeme sisteminin kullanılacağını söylemiş olur. Finlandiya ulusal bankacılık sisteminde kullanılır. |
| `94` | Acil Ciro | Bu emirle, müşteri bankaya ödeme transferi yapılırken 'Acil Ciro' bankacılık hizmetinin kullanılacağını söylemiş olur. Finlandiya ulusal bankacılık sisteminde kullanılır. |
| `95` | Serbest Formatlı Ciro | Bu emirle, müşteri bankaya ödeme transferi yapılırken 'Serbest Formatlı Ciro' bankacılık hizmetinin kullanılacağını söylemiş olur. Finlandiya ulusal bankacılık sisteminde kullanılır. |
| `96` | İstenen ödeme yöntemi kullanıl(a)mıyor | İstenen ödeme yöntemi kullanıl(a)mıyorsa bu kod kullanılır. |
| `97` | Virman | İki iş ortağının birbirine olan borcunun, gereksiz ödeme hareketlerinin önüne geçmek amacıyla denkleştirilmesi. |
| `ZZZ` | Karşılıklı Tanımlanmış |  |
