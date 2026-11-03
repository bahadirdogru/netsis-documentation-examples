---
title: TBLMUHAPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhaprm/
---

# TBLMUHAPRM

> MUHASEBE PARAMETRELERİNİ TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 71
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FARKFIS` | char(1) | evet |  | Fark veren fişlerden çıkılmasın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 3 | `DIGER` | char(1) | evet |  | Yabancı hesap ismi parametresi işaretli ise 'E' değerini gösterir. |
| 4 | `GRUPACIK` | char(1) | evet |  |  |
| 5 | `BASAY` | TDBBYTE | evet |  | Mali başlangıç yılını gösterir. |
| 6 | `KOLAY` | char(1) | evet |  |  |
| 7 | `REF` | char(1) | evet |  | Fişlerde referans kodu sorulsun mu parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 8 | `CREF1` | char(1) | evet |  | Aktif hesap ref sorulsun parametresi işaretli ise 'A', değilse 'H' değerini gösterir. |
| 9 | `CREF2` | char(1) | evet |  | Pasif hesap ref sorulsun parametresi işaretli ise 'P', değilse 'H' değerini gösterir. |
| 10 | `CREF3` | char(1) | evet |  | Gelir hesap ref sorulsun parametresi işaretli ise 'G', değilse 'H' değerini gösterir. |
| 11 | `CREF4` | char(1) | evet |  | Gider hesap ref sorulsun parametresi işaretli ise 'I', değilse 'H' değerini gösterir. |
| 12 | `CREF5` | char(1) | evet |  | Nazım hesap ref sorulsun parametresi işaretli ise 'N', değilse 'H' değerini gösterir. |
| 13 | `MIZAN` | char(1) | evet |  |  |
| 14 | `REFUZ` | TDBBYTE | evet |  | Referans kodu uzunluğunu gösterir. |
| 15 | `BASLIK1` | varchar(25) | evet |  | Sayısal1 saha başlığını gösterir. |
| 16 | `BASLIK2` | varchar(25) | evet |  | Sayısal2 saha başlığını gösterir. |
| 17 | `BASLIK3` | varchar(25) | evet |  | Sayısal3 saha başlığını gösterir. |
| 18 | `BASLIK4` | varchar(25) | evet |  | Sayısal4 saha başlığını gösterir. |
| 19 | `BASLIK5` | varchar(25) | evet |  | Sayısal5 saha başlığını gösterir. |
| 20 | `BASLIK6` | varchar(25) | evet |  | Sayısal6 saha başlığını gösterir. |
| 21 | `BASLIK7` | varchar(25) | evet |  | Sayısal7 saha başlığını gösterir. |
| 22 | `BASLIK8` | varchar(25) | evet |  | Sayısal8 saha başlığını gösterir. |
| 23 | `BASLIK9` | varchar(25) | evet |  | Alfasayısal saha1 başlığını gösterir. |
| 24 | `BASLIK10` | varchar(25) | evet |  | Alfasayısal saha2 başlığını gösterir. |
| 25 | `BASLIK11` | varchar(25) | evet |  | Alfasayısal saha3 başlığını gösterir. |
| 26 | `BASLIK12` | varchar(25) | evet |  | Alfasayısal saha4 başlığını gösterir. |
| 27 | `BASLIK13` | varchar(25) | evet |  | Alfasayısal saha5 başlığını gösterir. |
| 28 | `BASLIK14` | varchar(25) | evet |  | Alfasayısal saha6 başlığını gösterir. |
| 29 | `BASLIK15` | varchar(25) | evet |  | Alfasayısal saha7 başlığını gösterir. |
| 30 | `BASLIK16` | varchar(25) | evet |  | Alfasayısal saha8 başlığını gösterir. |
| 31 | `KASA_TAHSIL` | TDBMUHKOD | evet |  | Kasa tahsil hesap kodunu gösterir. |
| 32 | `KASA_TEDIYE` | TDBMUHKOD | evet |  | Kasa tediye hesap kodunu gösterir. |
| 33 | `FIELD_SEC` | char(1) | evet |  | "Kullanılmıyor" |
| 34 | `MIKTAR_ATLA` | char(1) | evet |  | Birimsiz hesaplarda miktar sahası atlansın parametresi işaretli ise 'E' değerini gösterir. |
| 35 | `DOVIZLI_MUHASEBE` | char(1) | evet |  | Seçilen muhasebe türüne göre farklı kayıt atar. TL muhasebe seçildiğinde 'T', FAS52 seçildiğinde 'F' değerini gösterir. Toplulaştırılmış yöntem uyg göre farklı değerler atar. Muh tipi Enf muh,toplulaştırılmış yöntem uyg Enf uyg ise 'E', muh tipi IAS29, toplulaştırılmış yöntem uyg IAS29 ise 'I', muh tipi IAS29, toplulaştırılmış yöntem uyg IAS29 veya Ent muh veya IAS29+Enf muh ise 'B' ve muh tipi Enf muh+Fas52, toplulaştırılmış yöntem uyg Enf muh ise 'B' tipli kayıt atar. |
| 36 | `CEVRIM_GIDER` | TDBMUHKOD | evet |  | Parasal zarar hesabına girilen hesabı gösterir. |
| 37 | `CEVRIM_GELIR` | TDBMUHKOD | evet |  | Parasal kar hesabına girilen hesabı gösterir. |
| 38 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 50 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `ENF_DUZ_HESKOD_BORC` | TDBMUHKOD | evet |  | Enf düz. Hesap borç alanına girilen hesap kodunu gösterir. |
| 53 | `ENF_DUZ_HESKOD_ALACAK` | TDBMUHKOD | evet |  | Enf düz. Hesap alacak alanına girilen hesap kodunu gösterir. |
| 54 | `AYLIKYILLIK` | char(1) | evet |  | TL ve Enf muh dışında seçilen muhasebe tiplerinde aktif gelen aylık oran seçiliyken 'A', yıllık oran seçiliyken 'Y' değerini gösterir. |
| 55 | `YILGUNSAY` | TDBSMALLINT | evet |  | Yıllık oran seçiliyken aktif hale gelen yıl gün sayısı alanına girilen değeri gösterir. |
| 56 | `ENFMUHDOVTIP` | TDBSMALLINT | evet |  | Enf muh+FAS52 tipli muhasebe seçildiğinde aktif hale gelen enflasyon muhasebe döviz tipinde girilen döviz tipini gösterir. |
| 57 | `ORANDOVTIP` | TDBSMALLINT | evet |  | TL ve Enf muh dışında seçilen muhasebe tiplerinde aktif gelen oran döviz tipinde girilen döviz tipini gösterir. |
| 58 | `YUVYONTEM` | TDBBYTE | evet | `1` | Fiş bazında yuvarlama farkı işlemi yuvarlama farkı hesabına yaz ise '0', hesap kodlarını ve maskelerini kullanarak bulduğun ilk hesaba yaz seçilmiş ise '1' değerini gösterir. |
| 59 | `YUVHESAPKODU` | TDBMUHKOD | evet |  | Borç tutarı için yuvarlama farkını yazılacağı hesap kodu sahasına girilen değeri gösterir. |
| 60 | `AYUVHESAPKODU` | TDBMUHKOD | evet |  | Alacak tutarı için yuvarlama farkını yazılacağı hesap kodu sahasına girilen değeri gösterir. |
| 61 | `YUVHESMASKE1` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu1 sahası |
| 62 | `YUVHESMASKE2` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu2 sahası |
| 63 | `YUVHESMASKE3` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu3 sahası |
| 64 | `YUVHESMASKE4` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu4 sahası |
| 65 | `YUVHESMASKE5` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu5 sahası |
| 66 | `YUVHESMASKE6` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu6 sahası |
| 67 | `YUVHESMASKE7` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu7 sahası |
| 68 | `YUVHESMASKE8` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu8 sahası |
| 69 | `YUVHESMASKE9` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu9 sahası |
| 70 | `YUVHESMASKE10` | TDBMUHKOD | evet |  | Yuvarlama farkının yazılacağı hesap kodları ve maskelerinin yazılacağı hesapkodu10 sahası |
| 71 | `MAXYUVTUT` | TDBFLOAT | evet | `1` | Maksimum yuvarlama farkı tutarı sahasına girilen değeri gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHAPRM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLMUHAPRM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHAPRM_PKEY` | `ISLETME_KODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, FARKFIS, DIGER, GRUPACIK, BASAY, KOLAY
FROM dbo.TBLMUHAPRM WITH (NOLOCK);
```
