---
title: TBLISEMRI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemri/
---

# TBLISEMRI

> KAYIT>İŞ EMRİ GİRİŞİ EKRANINDA SABİT BİLGİLER SEKMESİNDE GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 46
- **Birincil anahtar:** `ISEMRINO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISEMRINO` | TDBBELGENO | hayır |  | Sabit bilgiler sekmesinde iş emri numarasını gösterir. |
| 2 | `TARIH` | TDBDATETIME | evet |  | Sabit bilgiler sekmesinde iş emri kayıt tarihini gösterir. |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Sabit bilgiler sekmesinde iş emrindeki stok kodunu gösterir. |
| 4 | `MIKTAR` | TDBFLOAT | evet | `0` | Sabit bilgiler sekmesinde iş emrindeki stok kodunu gösterir. |
| 5 | `ACIKLAMA` | varchar(35) | evet |  | Sabit bilgiler sekmesinde iş emri ile ilgili açıklamayı gösterir. |
| 6 | `TESLIM_TARIHI` | TDBDATETIME | hayır |  | Sabit bilgiler sekmesinde teslim tarihini gösterir. |
| 7 | `SIPARIS_NO` | TDBBELGENO | evet |  | Sabit bilgiler sekmesinde ilgili iş emrine bağlı sipariş numarasını gösterir. |
| 8 | `KAPALI` | char(1) | evet |  | Sabit bilgiler sekmesinde iş emrinin kapalı ya da açık olamsını gösterir. Kapalı ise 'H', açıksa yani işaretlenmemişse 'E' değerini gösterir. |
| 9 | `YEDEK1` | varchar(80) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | varchar(80) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | varchar(80) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | varchar(10) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `REVNO` | varchar(8) | evet |  | Sabit bilgiler sekmesinde iş emri belli bir revizyon numarası ile üretilecek ise revizyon numarası alanına girilen numarayı gösterir. |
| 16 | `ONCELIK` | TDBINTEGER | evet | `0` | Sabit bilgiler sekmesinde öncelik alanına girileni gösterir. |
| 17 | `REFISEMRINO` | TDBBELGENO | evet |  | Sabit bilgiler sekmesinde ref. İş emri nosu alanına girilen revizyon numarasını gösterir. |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |
| 23 | `SIPKONT` | TDBSMALLINT | evet | `0` | Sabit bilgiler sekmesinde sipariş kontrolü alanına girileni gösterir. |
| 24 | `TEPEMAM` | TDBSTOKKOD | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 25 | `TEPEYAPKOD` | varchar(15) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 26 | `TEPETARIH` | TDBDATETIME | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 27 | `CALISMAZAMANI` | TDBDATETIME | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 28 | `TEPESIPNO` | TDBBELGENO | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 29 | `TEPESIPKONT` | TDBSMALLINT | evet | `0` | Bu field bu tabloda kullanılmamaktadır. |
| 30 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 31 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |
| 32 | `SUBEKODU` | TDBSMALLINT | evet |  | Şube kodu bilgisi yer alır.‘URETIM’, ’IEREHBERSUBEKISIT’, 1özel parametresi tanımlandığında; iş emrine atılan kayıtlarda SUBEKODU sahası girilenşubeye göre dolduruluyor.Ayrıca özel parametre tanımlanırsa, iş emri ekranı veSUSK ekranındaki iş emri rehberleri de şube koduna göre filtreleniyor. |
| 33 | `REWORK` | char(1) | evet |  | Rework iş emri bilgisi yer alır |
| 34 | `DEPO_KODU` | smallint | evet |  | Depo kodu bilgisi yer alır. |
| 35 | `SERINO` | varchar(50) | evet |  | Seri numarası bilgisi yer alır. |
| 36 | `FASONCARI` | varchar(15) | evet |  | Fason cari bilgisi yer alır. |
| 37 | `CIKIS_DEPO_KODU` | smallint | evet |  | Çıkış depo kodu bilgisi yer alır. |
| 38 | `ASORTIKOD` | varchar(15) | evet |  | Asorti kod bilgisi yer alır. |
| 39 | `ISEMRI_SIRA` | TDBINTEGER | evet |  | İş emri sıra numarası bilgisi yer alır. |
| 40 | `USK_STATUS` | char(1) | hayır |  | USK durumu bilgisi yer alır. |
| 41 | `REZERVASYON_STATUS` | char(1) | hayır |  | Rezervasyon durumu bilgisi yer alır. |
| 42 | `SIRA_ONCELIK` | TDBINTEGER | evet |  | Öncelik bilgisi yer alır. |
| 43 | `USTISEMRI_ID` | TDBINTEGER | evet |  | Üst işemri ID numarası yer alır. |
| 44 | `BASLAYABILECEGI_TARIH` | TDBDATETIME | evet |  | Başlayabileceği tarih bilgisi yer alır. |
| 45 | `SERINO2` | varchar(50) | evet |  | Seri no 2 bilgisi yer alır. |
| 46 | `HAT_KODU` | varchar(35) | evet |  | hat kodu bilgisi yer alır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISEMRI_PKEY` | `ISEMRINO` |
| FOREIGN KEY | `TBLURMPAR_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLISEMRI_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLISEMRI_FKEYTMAM` | `STOK_KODU` |
| FOREIGN KEY | `TBLISEMRITYAPKOD` | `YAPKOD` |
| FOREIGN KEY | `TBLISEMRIYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISEMRI_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique, Non-clustered |
| `TBLISEMRI_IND_1` | `TARIH+ISEMRINO` | Non-unique, Non-clustered |
| `TBLISEMRI_IND_2` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLISEMRI_IND_3` | `TESLIM_TARIHI+STOK_KODU` | Non-unique, Non-clustered |
| `TBLISEMRI_IND_4` | `STOK_KODU+YAPKOD+TEPETARIH+TEPEMAM+TEPEYAPKOD+TEPESIPNO+TEPESIPKONT` | Non-unique, Non-clustered |
| `TBLISEMRI_PKEY` | `ISEMRINO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISEMRINO, TARIH, STOK_KODU, MIKTAR, ACIKLAMA, TESLIM_TARIHI
FROM dbo.TBLISEMRI WITH (NOLOCK);
```
