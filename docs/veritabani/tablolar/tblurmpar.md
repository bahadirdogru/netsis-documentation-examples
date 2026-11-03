---
title: TBLURMPAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurmpar/
---

# TBLURMPAR

> KAYIT> ÜRETİM PARAMETRELERİNİ TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 88

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MAL_CINS1` | char(1) | evet |  | Üretim sekmesinde maliyet tipini gösterir. |
| 3 | `MAL_CINS2` | char(1) | evet |  | Üretim sekmesinde ikame maliyet tipini gösterir. |
| 4 | `HATSUBE` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 5 | `HASS` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 6 | `LOKAL_DEPO` | char(1) | evet |  | Bu field bu tablodakullanılmamaktadır. |
| 7 | `REC_SAKLA` | char(1) | evet |  | Üretim sekmesinde iş emriyle reçete sakla parametresini gösterir. |
| 8 | `LDEPO_1` | TDBSMALLINT | evet | `0` | Üretim sekmesinde üretim çıkışlarında fifo seri oluşsun parametresini gösterir. |
| 9 | `LDEPO_2` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 10 | `LDEPO_3` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 11 | `LDEPO_4` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 12 | `LDEPO_5` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 13 | `LDEPO_6` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 14 | `LDEPO_7` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 15 | `LDEPO_8` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 16 | `LDEPO_9` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 17 | `LDEPO_10` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 18 | `LDEPO_11` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 19 | `LDEPO_12` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 20 | `LDEPO_13` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 21 | `LDEPO_14` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 22 | `LDEPO_15` | TDBSMALLINT | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 23 | `SUBE_1` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 24 | `SUBE_2` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 25 | `SUBE_3` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 26 | `SUBE_4` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 27 | `SUBE_5` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 28 | `SUBE_6` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 29 | `SUBE_7` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 30 | `SUBE_8` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 31 | `SUBE_9` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 32 | `SUBE_10` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 33 | `SUBE_11` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 34 | `SUBE_12` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 35 | `SUBE_13` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 36 | `SUBE_14` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 37 | `SUBE_15` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 38 | `HASSTUT` | TDBBYTE | evet | `0` | Bu field bu tablodakullanılmamaktadır. |
| 39 | `MUHENTEG` | char(1) | evet |  | Bu field bu tablodakullanılmamaktadır. |
| 40 | `MKOD` | char(1) | evet |  | Muhasebe sekmesinde mamül hesabı için seçilen hesabı gösterir. |
| 41 | `HKOD` | char(1) | evet |  | Muhasebe sekmesinde hammadde hesabı için seçilen hesabı gösterir. |
| 42 | `MIK` | char(1) | evet |  | Muhasebe sekmesinde miktarlar muhasebeye geçsin parametresini gösterir. |
| 43 | `HANGIMIK` | char(1) | evet |  | Bu field bu tablodakullanılmamaktadır. |
| 44 | `C_YEDEK1` | char(1) | evet |  | Üretim sekmesinde eksi bakiye kontrolü parametresini gösterir. |
| 45 | `C_YEDEK2` | char(1) | evet |  | Üretim sekmesinde eksi bakiyede işlem durdur parametresini gösterir. |
| 46 | `C_YEDEK3` | char(1) | evet |  | Üretim sekmesinde üretim fişlerinde seri takibi parametresini gösterir. |
| 47 | `C_YEDEK4` | char(1) | evet |  | Üretim sekmesinde ikinci miktar girilecek parametresini gösterir. |
| 48 | `C_YEDEK5` | char(1) | evet |  | Üretim sekmesinde üretimde iş emri kontrolü parametresini gösterir. |
| 49 | `C_YEDEK6` | char(1) | evet |  | Üretim sekmesinde reçete formül toplamına tamamlanacak parametresini gösterir. |
| 50 | `C_YEDEK7` | char(1) | evet |  | Üretim sekmesinde kati madde uygulaması parametresini gösterir. |
| 51 | `C_YEDEK8` | char(1) | evet |  | Üretim sekmesinde fire uygulaması parametresini gösterir. |
| 52 | `C_YEDEK9` | char(1) | evet |  | Üretim sekmesinde ek alan kullanımı parametresini gösterir. |
| 53 | `C_YEDEK10` | char(1) | evet |  | Mrp parametrelerine, "Mrp için satıcı siparişlerinde revizyon takibi var mı" parametresiyle ilgilidir. |
| 54 | `URETDEPO` | TDBSMALLINT | evet | `0` | Üretim sekmesinde üretim yapılan depo kodunu gösterir. |
| 55 | `DAT_ISEMRIBAKTAKIP` | char(1) | evet | `H` | Üretim sekmesinde dep. Trans. Ve ambar çıkış fişinde iş emrine ait malzemelerin bakiye takibi yapılabilsin parametresini gösterir. |
| 56 | `USK_ISEMRIBAKTAKIP` | char(1) | evet | `H` | Üretim sekmesinde üretim sonu kaydında iş emrine ait malzemelerin bakiye takibi yapılsın mı parametresini gösterir. |
| 57 | `BARKODLUISLEM` | char(1) | evet | `H` | Üretim sekmesinde üretim sonu kayıtlarında barkodlu işlem parametresini gösterir. |
| 58 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 59 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 60 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 61 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 62 | `ISFAZLAURYAP` | char(1) | evet | `E` | Üretim sekmesinde iş emrine bağlı fazla üretim yapılabilsin parametresini gösterir. |
| 63 | `FAZLAURORAN` | TDBFLOAT | evet | `0` | Üretim seklemsinde fazla üretim oranını gösterir. |
| 64 | `MRPTALEPOLUS` | char(1) | evet | `H` | Mrp parametrelerinde, “Mrp için satıcı siparişi yerine satın alma talebi oluşturulsun” parametresi ile ilgilidir. |
| 65 | `MIKDEFALAN` | char(1) | evet | `H` | Üretim sekmesinde reçete kaydında miktarın otomatik geleceği alan parametresinde seçileni gösterir. |
| 66 | `USK_RAP_BAK_GOSTER` | char(1) | hayır |  | Üretim Sonu Kayıtların Raporlarında Bakiye ve Maliyet Gösterilsin işaretli ise E değerini alır. |
| 67 | `REC_TEKSEVIYE_SAKLA` | char(1) | hayır |  | İş emri Reçetesi Saklanırken Reçteyi Tek Seviye sakla parametresi işaretli ise E değerini alır. |
| 68 | `MALIYET_ALISFIYAT1` | char(1) | hayır |  | Maliyet sıfır olduğunda alış fiyatı-1 e göre maliyet hesapla işaretli ise E değerini alır |
| 69 | `TARIHSELBAKIYE` | char(1) | hayır |  | Üretim Sonu kayıtlarında tarihsel bakiyeye bakılsın işaretli ise E değerini alır. |
| 70 | `USK_TEKSEVIYE_KULLAN` | char(1) | evet |  | ISK'Da Tek seviyeli Reçete kullan şiaretli ise E değerini alır. |
| 71 | `ISEMRINE_BAGLI_USK` | char(1) | hayır |  | İş emrine bağlı USK Girilmişse ilgili iş emri iptal edilemesin işaretli ise E değerini alır. |
| 72 | `ISEMRI_MIKTARI_POLITIKASI` | char(1) | hayır |  | İş emri miktar güncelleme politikası bilgisi yer alır. |
| 73 | `ISEMRI_TARIH_POLITIKASI` | char(1) | hayır |  | Rezervasyon/UAK/USK Varsa İş emri Teslim Tarihi Değiştirilemesin işaretli ise E değerini alır. |
| 74 | `KILITLI_MAMUL` | char(1) | hayır |  | Kilitli mamul kodu kontrolü yapılsın bilgisi yer alır. |
| 75 | `KILITLI_BILESEN` | char(1) | hayır |  | Kilitli bileşen kodu kontrolü yapılsın işaretli ise E değerini alır. |
| 76 | `USTISEMRIKULLANIMI` | char(1) | hayır |  | İş emri kalem uygulaması kullanılsın işaretli ise E değerini alır. |
| 77 | `ALTRECALAN` | char(1) | hayır |  | Alternatif Reçete Bilgisinin Müşteri Siparişinde Tutulacağı Saha bilgisi yer alır. |
| 78 | `ISFAZLASIPURYAP` | char(1) | hayır |  | Siparişe bağlı iş emri ve üretimde fazla miktar girilebilsin işaretli ise E değerini alır. |
| 79 | `YAYIMLANDI_ISEMRI_DEGIS` | char(1) | hayır |  | Rezervasyon Durumu yayımlandı Olan İş emirlerinin miktarı Değiştirilemesin işaretli ise E değerini alır. |
| 80 | `USK_ASGARI_STOK_KONTROL` | char(1) | hayır |  | USK'da Asgari Limit Kontrolü işaretli ise E değerini alır. |
| 81 | `ISEMRI_BAG_KAPAT` | char(1) | hayır |  | İş emirleri Kapatılırken Bağlantılı İş emirleri de kapatılsın işaretli ise E değerini alır. |
| 82 | `STOK_DEPO_KONTROL` | char(1) | hayır |  | Üretim sonu kaydında stok-depo kodu kontrol edilsin parametresi bilgisi yer alır. |
| 83 | `YAYIMLANDI_ISEMRI_DEGIS_TARIH` | char(1) | hayır |  | Rezervasyon Durumu yayımlandı Olan İş emirleri teslim tarihi Değiştirilemesin işaretli ise E değerini alır. |
| 84 | `BELGESERIGETIR` | char(1) | hayır |  | Serbest üretim sonu kaydında malzeme serileri DAT Belgesinden getirilsin parametresi tutulur. |
| 85 | `MALZEMETALEP_SERIOLUSTUR` | char(1) | hayır |  | İş emri malzeme talep işleminde FIFO seri oluştur parametresi bilgisi yer alır. |
| 86 | `FIREDETAY` | char(1) | hayır |  | Üretim 2 sekmesindeki fire girişinde fire kodu girilsin parametresine işaretli ise E değerini alır. |
| 87 | `ARALIKLIFIRETANIMI` | char(1) | hayır |  | Üretim Kayıtlarında Aralık Bazında Fire Oranları Dikkate Alınsın parametresi yer alır. |
| 88 | `DAT_TRANSFER_ONAYI` | char(1) | hayır |  | Üretim sonu kaydında depolar arası transfer onayı kontrol edilsin parametresi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURMPAR_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MAL_CINS1, MAL_CINS2, HATSUBE, HASS, LOKAL_DEPO
FROM dbo.TBLURMPAR WITH (NOLOCK);
```
