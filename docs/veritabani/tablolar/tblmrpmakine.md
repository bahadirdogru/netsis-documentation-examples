---
title: TBLMRPMAKINE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpmakine/
---

# TBLMRPMAKINE

> MAKINE TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 52

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SIRKETKODU` | varchar(20) | hayır |  | Sirket kodu sahasıdır. |
| 2 | `DEMIR_KODU` | varchar(30) | hayır |  | Demirbaş kodu sahasıdır. |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DEMIR_ISMI` | varchar(50) | evet |  | Demirbaş ismi sahasıdır. |
| 5 | `OPKODU` | varchar(35) | evet |  | Operasyon kodu |
| 6 | `BIRIMMALIYET` | TDBFLOAT | evet |  | Birim maliyeti tutan sahadır. |
| 7 | `SETUPSURE` | TDBFLOAT | evet |  | Hazırlık suresidir. |
| 8 | `URETSURE` | TDBFLOAT | evet |  | Uretim suresidir. |
| 9 | `DURUM` | char(1) | evet |  | Durum aktif ise A; pasif ise P degerini tutan sahadır. |
| 10 | `ONCELIK` | char(1) | evet |  | Oncelik degerini tutan sahadır. |
| 11 | `ACIKLAMA` | TDBMEMO | evet |  | Acıklama sahasıdır. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `ISTKODU` | varchar(5) | evet |  | İstaston kodunu tutar. |
| 27 | `GRUP` | varchar(15) | evet |  | Makine grup kodunu tutar. |
| 28 | `ONEMDERECESI` | TDBSMALLINT | hayır |  | Onem derecesini tutar. |
| 29 | `MAKSERINO` | varchar(50) | evet |  | Makine seri numarasını tutan sahadır. |
| 30 | `MASRAFKODU` | varchar(8) | evet |  | Masraf kodunu tutan sahadır. |
| 31 | `DEMIRBASBAGLANTILI` | char(1) | hayır |  | Demirbaş bağlantılı parametresi yer alır. |
| 32 | `ALISTARIHI` | TDBDATETIME | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için alış tarihidir. |
| 33 | `MAKINETIPI` | char(1) | hayır |  | 1 |
| 34 | `ISLEMCISAYISI` | TDBINTEGER | evet |  | İşlemci sayısı bilgisi yer alır. |
| 35 | `URETSURETIPI` | char(1) | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için üretim süresi bilgisi yer alır. |
| 36 | `URETMIKTARI` | TDBFLOAT | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için kapasite miktarı yer alır. |
| 37 | `URETMIKTARITIPI` | char(1) | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için kapasite ölçü birimi değeri yer alır. |
| 38 | `SETUPSURETIPI` | char(1) | evet |  |  |
| 39 | `PARTIMIKTARI` | TDBFLOAT | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için parti büyüklüğü miktarı bilgisi yer alır. |
| 40 | `PARTIMIKTARITIPI` | char(1) | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için parti miktarı tipi bilgisi yer alır. |
| 41 | `CEVRIMSURE` | TDBFLOAT | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için üretim süresi bilgisi yer alır. |
| 42 | `CEVRIMSURETIPI` | char(1) | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için üretim süre tipi bilgiis yer alır. |
| 43 | `ESZAMMAKSAY` | TDBINTEGER | evet |  |  |
| 44 | `VERIMLILIK` | TDBFLOAT | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için verimlilik katsayısı bilgisi yer alır. |
| 45 | `CIZELGE` | char(1) | hayır |  | İleri üretim planlamadan giriliyor ise E değerini alır |
| 46 | `MAKINESAYISI` | TDBSMALLINT | hayır |  |  |
| 47 | `CARI_KOD` | TDBCARIKOD | evet |  | İleri üretim planlamadan girilen makine tanımlama ekranı için cari kodu bilgisi yer alır. |
| 48 | `MIN_CALIS_KAY` | TDBINTEGER | evet |  | Çizelgeleme genel algoritma için iki yeni makine tipi (Kazan ve manuel) için eklenen sahadır. |
| 49 | `MAX_CALIS_KAY` | TDBINTEGER | evet |  | Çizelgeleme genel algoritma için iki yeni makine tipi (Kazan ve manuel) için eklenen sahadır. |
| 50 | `KAZAN_FARKLI_URUN_YAPILSIN` | char(1) | evet |  | Çizelgeleme genel algoritma için iki yeni makine tipi (Kazan ve manuel) için eklenen sahadır. |
| 51 | `MIN_DOLULUK_ORANI` | TDBFLOAT | evet |  | 1 |
| 52 | `GRUPLAMA_SECENEGI` | TDBINTEGER | evet |  | İleri üretim çizelgeleme > Makine tanımlama ekranına "Gruplama Seçeneği" eklendi. Kazan tipli makinelerde "Farklı Ürünler Aynı Anda İşlem Görebilsin" seçeneği işaretlendiğinde hangi ürünlerin aynı anda işlem görebileceği, gruplama seçeneği alanı ile belirlenebilmesi sağlandı. Örneğin; A ve B mamulü var. İkisinin üretim süreleri aynı (veya gruplama seçeneğinde seçtirilen diğer alanlar da aynı olabilir) ve iki mamul de Mak1 kazanında kullanılabiliyor. İleri üretim çizelgeleme yapıldığında bu iki mamul aynı anda üretilebilecek şekilde çizelgelenir. Eğer mamullerin, gruplama seçeneğinde belirtilen alandaki değerleri farklı olsaydı aynı anda değil, ard arda üretilecek şeklide çizelgelenecekti. |

## Örnek sorgu

```sql
SELECT TOP 100 SIRKETKODU, DEMIR_KODU, INCKEYNO, DEMIR_ISMI, OPKODU, BIRIMMALIYET
FROM dbo.TBLMRPMAKINE WITH (NOLOCK);
```
