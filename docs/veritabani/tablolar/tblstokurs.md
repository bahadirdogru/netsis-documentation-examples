---
title: TBLSTOKURS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokurs/
---

# TBLSTOKURS

> ÜRETİM>KAYIT>ÜRETİM SONU KAYDI EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 43
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `URETSON_FISNO` | TDBBELGENO | hayır |  | Üretim sonu kaydı için fiş numarasını gösterir. |
| 2 | `URETSON_TARIH` | TDBDATETIME | evet |  | Üretim sonu kaydının yapıldığı tarihi gösterir. |
| 3 | `URETSON_SIPNO` | TDBBELGENO | evet |  | Üretim sonu kayıtları sipariş ya da iş emri bağlantılı çalışıyorsa iş emri ya da sipariş numarasını gösterir. |
| 4 | `URETSON_DEPO` | TDBSMALLINT | evet | `0` | Üretim sonu kaydında lokal depoya girilen depo kodunu gösterir. |
| 5 | `URETSON_MAMUL` | varchar(35) | hayır |  | Üretim sonu kaydı yapılacak mamül kodunu gösterir. |
| 6 | `URETSON_MIKTAR` | TDBFLOAT | evet | `0` | Üretim sonu kaydı yapılacak mamül kodunun miktarını gösterir. |
| 7 | `URETSON_MALY1` | TDBFLOAT | evet | `0` | Hammadde maliyetleri dışında tanımlanacak ek maliyetleri %' sel olarak gösterir. |
| 8 | `URETSON_MALY2` | TDBFLOAT | evet | `0` | Hammadde maliyetleri dışında tanımlanacak ek maliyetleri %' sel olarak gösterir. |
| 9 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(35) | evet |  | Ek alan-1 alanına girilen açıklamayı gösterir. |
| 14 | `S_YEDEK2` | varchar(35) | evet |  | Ek alan-2 alanına girilen açıklamayı gösterir. |
| 15 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Üretim sonu kaydında girilen mamül ya da yarı mamülün 2. miktarını gösterir. |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  |  |
| 19 | `I_YEDEK1` | TDBSMALLINT | evet |  | Üretim sonu kaydında çıkış depoya girilen depo kodunu gösterir. |
| 20 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK1` | char(1) | evet |  | Yapılan üretim sonu kaydı kayıtlara geçsin parametresi işaretlendiğinde 'X' değerini, işaretlenmenzse NULL değerini gösterir. |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `ACIKLAMA` | varchar(100) | evet |  | Kullanıcının yapılan işlemle ilgili girdiği açıklamayı gösterir. |
| 27 | `RECETE_TARIHI` | TDBDATETIME | evet |  | Reçetenin oluşturulma tarihini gösterir. |
| 28 | `SETNO` | varchar(25) | evet |  | Revizyon numarasını gösterir. |
| 29 | `ONCELIK` | TDBINTEGER | evet | `0` | Bileşenler için alternatif malzeme tanımlanması durumunda, girilen öncelik kodunu gösterir. |
| 30 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |
| 35 | `KAYIT_EDILSIN` | TDBBYTE | evet |  | Kayıtlara geçilsin işaretli ise 1 değerini alır. |
| 36 | `MALIYET_CARPILSIN` | TDBBYTE | evet |  | Maliyetler çarpılarak hesaplansın işaretli ise 1 değerini alır. |
| 37 | `MAMUL_OLCU_BIRIMI` | TDBBYTE | evet |  | Mamuller ölçü birimi değeri yer alır. |
| 38 | `BAKIYE_DEPO` | TDBBYTE | evet |  | Bekiye alanında seçili depo bligisi yer alır. |
| 39 | `OTO_YMAM_STOK_KULLAN` | TDBBYTE | evet |  | Otomatik yarımamullerde stoktan kullan işaretli ise 1 değerini alır. |
| 40 | `EKSIBAKIYE` | varchar(1) | evet |  | Eksi bakiye ise E değerini alır. |
| 41 | `MAMULPARCALA` | char(1) | hayır |  | Mamul parçala ise E değerini alır. |
| 42 | `HAT_KODU` | varchar(35) | evet |  | Hat kodu bilgisi yer alır. |
| 43 | `BELGE_TIPI` | char(1) | evet |  | Ters üretim sonu kaydını serbest üretim sonu kaydından ayırmak için eklenmiştir(58312 istek) |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKURS_IDX_YAPKOD1` | `YAPKOD+URETSON_MAMUL` | Non-unique, Non-clustered |
| `TBLSTOKURS_IND_1` | `INCKEYNO` | Unique, Non-clustered |
| `TBLSTOKURS_IND_2` | `URETSON_FISNO+URETSON_MAMUL` | Non-unique, Non-clustered |
| `TBLSTOKURS_IND_3` | `SUBE_KODU+INCKEYNO` | Non-unique, Non-clustered |
| `TBLSTOKURS_IND_4` | `SUBE_KODU+URETSON_FISNO` | Non-unique, Non-clustered |
| `TBLSTOKURSPKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 URETSON_FISNO, URETSON_TARIH, URETSON_SIPNO, URETSON_DEPO, URETSON_MAMUL, URETSON_MIKTAR
FROM dbo.TBLSTOKURS WITH (NOLOCK);
```
