---
title: TBLMUSTAHSI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmustahsi/
---

# TBLMUSTAHSI

> KAYIT>MÜSTAHSİL MAKBUZ GİRİŞİ EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 56

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FATIRS_NO` | TDBBELGENO | hayır |  | Müstahsil makbuzu girişi sekmesinde müstahsil makbuz numarasını gösterir. |
| 3 | `TIPI` | TDBSMALLINT | evet |  | Müstahsil makbuzu girişi sekmesinde müstahsil makbuz tipini gösterir. (Açık/Kapalı/Muhtelif) |
| 4 | `CARI_ISIM` | varchar(50) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin cari kodunu gösterir. |
| 5 | `CARI_ADRES` | varchar(50) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin cari adresini gösterir. |
| 6 | `CARI_IL` | varchar(15) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin bulunduğu ili gösterir. |
| 7 | `CARI_ILCE` | varchar(15) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin bulunduğu ilçeyi gösterir. |
| 8 | `CARI_VERGI_DAIRE` | varchar(15) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin bağlı olduğu vergi dairesini gösterir. |
| 9 | `CARI_VERGI_NO` | varchar(15) | evet |  | Müstahsil makbuz girişinde ek bilgiler sekmesinde müstahsil makbuzunun kesileceği üreticinin vergi numarasını gösterir. |
| 10 | `TARIH` | TDBDATETIME | hayır |  | Müstahsil makbuzu girişi sekmesinde makbuzun düzenlenme tarihini gösterir. |
| 11 | `CARI_KODU` | TDBCARIKOD | evet |  | Müstahsil makbuzu girişi sekmesinde makbuzun kesildiği cari kodu gösterir. |
| 12 | `BRUTTUTAR` | TDBFLOAT | evet | `0` | Müstahsil kalemleri sekmesinde tutar sahasında hesaplanan brüt tutarı gösterir. |
| 13 | `FATKALEM_ADEDI` | TDBSMALLINT | evet |  | Müstahsil makbuzunda girilen kalem adedini gösterir. |
| 14 | `FON` | TDBFLOAT | evet | `0` | Makbuz girildikten sonra F5 tuşundan sonra gelen genel toplam ekranında fon alanına girileni gösterir. |
| 15 | `STOPAJ` | TDBFLOAT | evet | `0` | Müstahsil makbuzunun varsa stopaj tutarını gösterir. |
| 16 | `BORSA` | TDBFLOAT | evet | `0` | Makbuz girildikten sonra F5 tuşundan sonra gelen genel toplam ekranında borsa alanına girileni gösterir. |
| 17 | `AVANS` | TDBFLOAT | evet | `0` | Müstahsil makbuzunun varsa avans tutarını gösterir. |
| 18 | `CEK_NO` | TDBBELGENO | evet |  | Çek olarak ödeme yapılmışsa makbuza karşılık verilen çekin numarasını gösterir. |
| 19 | `BANKA` | varchar(9) | evet |  | İlgili çekin bankasını gösterir. |
| 20 | `CEK_TARIH` | TDBDATETIME | evet |  | Makbuza karşılık verilen çekin tarihini gösterir. |
| 21 | `CEK_TUTAR` | TDBFLOAT | evet | `0` | Makbuza karşılık verilen çekin tutarını gösterir. |
| 22 | `BAGKURNO` | TDBFLOAT | evet | `0` | Makbuz girildikten sonra F5 tuşundan sonra gelen genel toplam ekranında bağkur primi alanına girileni gösterir. |
| 23 | `MERA` | TDBFLOAT | evet | `0` | Makbuz girildikten sonra F5 tuşundan sonra gelen genel toplam ekranında borsa alanına girileni gösterir. |
| 24 | `ODEMEGUNU` | TDBBYTE | evet | `0` | Makbuzun vade gününü gösterir. |
| 25 | `BAGKUR` | varchar(50) | evet |  | Ek bilgiler sekmesinde bağkur dairesi/no-bağ. Muafiyet no- bağ emekli no- ssk numarasından seçilenin girilen değerini gösterir. |
| 26 | `BABA_ADI` | varchar(50) | evet |  | Ek bilgiler sekmesinde makbuz kesilen carinin baba adını gösterir. |
| 27 | `DOGUMYT` | varchar(50) | evet |  | Ek bilgiler sekmesinde makbuz kesilen carinin doğum yeri ve tarihini gösterir. |
| 28 | `MIKTAR` | TDBFLOAT | evet | `0` | Müstahsil kalemleri sekmesinde girilen stoğun miktarını gösterir. |
| 29 | `URUN_KODU` | TDBSTOKKOD | evet |  | Müstahsil kalemleri sekmesinde ilgili makbuz içinde girilen stok kodunu gösterir. |
| 30 | `URUN_ISMI` | varchar(50) | evet |  | Müstahsil kalemleri sekmesinde ilgili makbuz içinde girilen stok ismini gösterir. |
| 31 | `URUN_FIATI` | TDBFLOAT | evet | `0` | Müstahsil kalemleri sekmesinde ilgili makbuz içinde girilen stoğun birim fiyatını gösterir. |
| 32 | `TESMNO` | TDBCARIKOD | evet |  | Ek bilgiler sekmesinde teslim makbuz numarasını gösterir. |
| 33 | `KASA_KODU` | varchar(8) | evet |  | Müstahsil makbuzu tipinin Kapalı veya Muhtelif seçildiği durumlarda aktif olan alan olup, kesilen makbuz tutarının kaydolacağı kasa kodunu gösterir. |
| 34 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `B_YEDEK7` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `I_YEDEK8` | TDBSMALLINT | evet |  | Makbuz girişi sekmesinde bağkur dairesi/no-bağ. Muafiyet no- bağ emekli no- ssk numarasından seçileni gösterir. |
| 42 | `L_YEDEK9` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 45 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 46 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 48 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `TCNO` | varchar(15) | evet |  | Ek bilgiler sekmesinde makbuz kesilen carinin tc kimlik numarasını gösterir. |
| 50 | `KESINTI_DAHIL` | TDBBYTE | evet |  | Kesintinin dahil olup olmadığı bilgisi yer alır. |
| 51 | `CARI_SOYAD` | varchar(50) | evet |  | cari soyad bilgisi yer alır. |
| 52 | `ODEME_TURU` | TDBSMALLINT | evet |  | Ödeme türü bilgisi yer alır. |
| 53 | `OZELKESTOP` | TDBFLOAT | evet |  | Özel kesintiler toplamı yer alır. |
| 54 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Gib fatura numarası bilgisi yer alır. |
| 55 | `EBELGE` | TDBINTEGER | evet |  | emüstahsil belgesi ise 1 değerini alır. |
| 56 | `ODEKOD` | TDBGRUPKOD | evet |  | Ödeme kodu bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUSTAHSI_IND_2` | `TARIH` | Non-unique, Non-clustered |
| `TBLMUSTAHSI_IND_3` | `SUBE_KODU` | Non-unique, Non-clustered |
| `TBLMUSTAHSIPKEY` | `FATIRS_NO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FATIRS_NO, TIPI, CARI_ISIM, CARI_ADRES, CARI_IL
FROM dbo.TBLMUSTAHSI WITH (NOLOCK);
```
