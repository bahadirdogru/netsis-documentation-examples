---
title: TBLPOSPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblposparam/
---

# TBLPOSPARAM

> POS MODÜLÜ>KAYIT>POS PARAMETRELERİNİ TUTAR

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 117
- **Birincil anahtar:** `SUBE_KODU+POS_TIPI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `POS_TIPI` | TDBBYTE | hayır |  | Pos parametreleri sekmesinde kullanılacak pos tipini gösterir. |
| 2 | `ST_FILE_NAME` | varchar(12) | evet |  | Pos parametreleri sekmesinde pos giden stok dosya adı sahasında girilen dosya adını gösterir. |
| 3 | `POS_PATH_GID` | varchar(60) | evet |  | Posa gönderilen dosyaların oluşacağı dizini gösterir. |
| 4 | `POS_PATH_GEL` | varchar(60) | evet |  | Poslardan gelen satış dosyalarının dizinini gösterir. |
| 5 | `UPDATE_KODU` | char(1) | evet |  | Diğer parametreler sekmesinde update kodu sıfırlansın parametresini gösterir. |
| 6 | `STKODUZ` | TDBBYTE | evet | `-13` | Pos parametreleri sekmesinde barkodsuz stok kod uzunluğu alanına girilen karakter uzunluğunu gösterir. |
| 7 | `SAT_FIY_TUR` | char(1) | evet | `1` | Pos parametreleri sekmesinde gönderilecek fiyat alanında seçilen fiyat tipini gösterir. |
| 8 | `DOV_FIY_GON` | char(1) | evet | `H` | Diğer parametreler sekmesinde döviz fiyat gönderilsin parametresini gösterir. |
| 9 | `STKOD_BARKOD` | char(1) | evet | `H` | Diğer parametreler sekmesinde stok kodu posa gönderilsin parametresini gösterir. |
| 10 | `DEPARTMAN` | char(1) | evet | `1` | Pos parametreleri sekmesinde departman kodu alanında seçilen kodu gösterir. |
| 11 | `KDV1` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 12 | `KDV2` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 13 | `KDV3` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 14 | `KDV4` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 15 | `KDV5` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 16 | `KDV6` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 17 | `KDV7` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 18 | `KDV8` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 19 | `KDV9` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 20 | `KDV10` | TDBKDVORAN | evet | `0` | Pos parametreleri sekmesinde girilen kdv oranlarını gösterir. |
| 21 | `ENTEGRASYON` | char(1) | evet | `H` | Diğer parametreler sekmesinde entegrasyon parametresini gösterir. |
| 22 | `KUMULASYON` | char(1) | evet | `H` | Diğer parametreler sekmesinde kümülasyon parametresini gösterir. |
| 23 | `CARI_AKTARIM` | char(1) | evet | `H` | Pos parametreleri sekmesinde posa cari aktarım yapılacak parametresini gösterir. |
| 24 | `CR_PATH_GIDEN` | varchar(25) | evet |  | Pos parametreleri sekmesinde posa giden cari dosya adı alanına girilen dosya adını gösterir. |
| 25 | `CR_PATH_GELEN` | varchar(25) | evet |  | Pos parametreleri sekmesinde posdan gelen cari dosya adı alanına girilen dosya adını gösterir. |
| 26 | `ODEME_TIP1` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 27 | `ODEME_CRKS1` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 28 | `ODEME_KOD1` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 29 | `ODEME_TIP2` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 30 | `ODEME_CRKS2` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 31 | `ODEME_KOD2` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 32 | `ODEME_TIP3` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 33 | `ODEME_CRKS3` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 34 | `ODEME_KOD3` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 35 | `ODEME_TIP4` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 36 | `ODEME_CRKS4` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 37 | `ODEME_KOD4` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 38 | `ODEME_TIP5` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 39 | `ODEME_CRKS5` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 40 | `ODEME_KOD5` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 41 | `ODEME_TIP6` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 42 | `ODEME_CRKS6` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 43 | `ODEME_KOD6` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 44 | `ODEME_TIP7` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 45 | `ODEME_CRKS7` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 46 | `ODEME_KOD7` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 47 | `ODEME_TIP8` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 48 | `ODEME_CRKS8` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 49 | `ODEME_KOD8` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 50 | `ODEME_TIP9` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 51 | `ODEME_CRKS9` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 52 | `ODEME_KOD9` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 53 | `ODEME_TIP10` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 54 | `ODEME_CRKS10` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 55 | `ODEME_KOD10` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 56 | `ODEME_TIP11` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 57 | `ODEME_CRKS11` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 58 | `ODEME_KOD11` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 59 | `ODEME_TIP12` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 60 | `ODEME_CRKS12` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 61 | `ODEME_KOD12` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 62 | `ODEME_TIP13` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 63 | `ODEME_CRKS13` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 64 | `ODEME_KOD13` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 65 | `ODEME_TIP14` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 66 | `ODEME_CRKS14` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 67 | `ODEME_KOD14` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 68 | `ODEME_TIP15` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 69 | `ODEME_CRKS15` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 70 | `ODEME_KOD15` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 71 | `ODEME_TIP16` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 72 | `ODEME_CRKS16` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 73 | `ODEME_KOD16` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 74 | `ODEME_TIP17` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 75 | `ODEME_CRKS17` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 76 | `ODEME_KOD17` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 77 | `ODEME_TIP18` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 78 | `ODEME_CRKS18` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 79 | `ODEME_KOD18` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 80 | `ODEME_TIP19` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 81 | `ODEME_CRKS19` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 82 | `ODEME_KOD19` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 83 | `ODEME_TIP20` | varchar(2) | evet |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 84 | `ODEME_CRKS20` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 85 | `ODEME_KOD20` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 86 | `KASA_KOD` | varchar(8) | evet |  | Pos parametreleri sekmesinde posa cari aktarım yapılacak parametresi işaretlendiğinde aktif hale gelen kasa kodu sahasına girilen kasa kodunu gösterir. |
| 87 | `YUVARLAMA` | char(1) | evet | `1` | Diğer parametreler sekmesinde döviz fiyat ve birim ağırlık için yuvarlama parametresinde seçileni gösterir. |
| 88 | `STATU` | char(1) | evet | `1` | Default 1 değeri atılır. |
| 89 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 90 | `IPTALLER` | char(1) | evet | `H` | Diğer parametreler sekmesinde iadeler dikkate alınmasın parametresini gösterir. |
| 91 | `ILKTARIH` | char(1) | evet | `H` | Diğer parametreler sekmesinde dosyadaki ilk tarih parametresini gösterir. |
| 92 | `YEDEK1` | char(1) | evet |  | Diğer parametreler sekmesinde fatura enteg. ayrı işlensin parametresini gösterir. |
| 93 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 94 | `YEDEK3` | char(1) | evet |  | Diğer parametreler sekmesinde stok açıklama aktarılan dosya adı olsun parametresini gösterir. |
| 95 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 96 | `YEDEK5` | char(1) | evet |  | Pos parametreleri sekmesinde posa gönderilecek stok adı alanında seçilen kodu gösterir. |
| 97 | `YEDEK6` | char(1) | evet |  | Pos parametreleri sekmesinde ytl kasa parametresini gösterir. |
| 98 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 99 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 100 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 101 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 102 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 103 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 104 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 105 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 106 | `ONLTIP` | varchar(1) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 107 | `ONLGONDMAKADI` | varchar(50) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 108 | `ONLALDMAKADI` | varchar(50) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 109 | `ONLALDQADI` | varchar(15) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 110 | `ONLVTTIP` | varchar(1) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 111 | `ONLVTISIM` | varchar(80) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 112 | `ONLVTKULISIM` | varchar(30) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 113 | `ONLVTSIFRE` | varchar(30) | evet |  | Bu alan pos parametrelerinde kullanılmamaktadır. |
| 114 | `VERESIYE` | varchar(8) | evet |  | Pos parametreeleri seklemsinde veresiye işlenecek kasa kodu sahasına girilen kasa kodunu gösterir. |
| 115 | `ONLINEAKTARIM` | char(1) | evet | `H` | Diğer parametreler sekmesinde online aktarım parametresini gösterir. |
| 116 | `PUANUYGULAMASI` | char(1) | evet | `H` | Diğer parametreler sekmesinde puan uygulaması parametresini gösterir. |
| 117 | `ZRAPORU` | char(1) | evet | `H` | Diğer parametreler sekmesinde Z raporu entegrasyona işlensin parametresini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPOSPARAM_PKEY` | `SUBE_KODU+POS_TIPI` |
| FOREIGN KEY | `TBLPOSPARAM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPOSPARAM_PKEY` | `SUBE_KODU+POS_TIPI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 POS_TIPI, ST_FILE_NAME, POS_PATH_GID, POS_PATH_GEL, UPDATE_KODU, STKODUZ
FROM dbo.TBLPOSPARAM WITH (NOLOCK);
```
