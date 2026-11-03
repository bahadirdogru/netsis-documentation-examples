---
title: TBLCARISTOK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcaristok/
---

# TBLCARISTOK

> MUSTERI/SATICI STOK , STOK PLANLAMA VE CARI PLANLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 85
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok kodunu tutar. |
| 2 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kodunu tutar. |
| 3 | `CARISTOK_KODU` | TDBSTOKKOD | evet |  | Cari stok kodunu tutar. |
| 4 | `CARISTOKISMI` | varchar(50) | evet |  | Cari stok ismini tutar. |
| 5 | `OLCU_BR` | varchar(2) | evet |  | Olcu birimini tutar. |
| 6 | `LOT_SIZE` | TDBFLOAT | evet |  | Parti buyuklugunu tutar. |
| 7 | `TEDARIK_SURESI` | TDBFLOAT | evet |  | Bildirim/uretim suresini tutar. |
| 8 | `MINSIPARISMIKTARI` | TDBFLOAT | evet |  | Min. Siparis miktarını tutar. |
| 9 | `KILIT` | char(1) | evet |  | Kilit parametresi isaretli ise E degil ise H degerini tutar. |
| 10 | `YUKLEME_PERIYOD_TIPI` | char(1) | evet |  | Yukleme periyod tipini tutar. |
| 11 | `YUKLEME_GUNU` | TDBBYTE | evet |  | Yukleme gununu tutar. |
| 12 | `NAKLIYE_SURESI` | TDBBYTE | evet |  | Nakliye suresini tutar. |
| 13 | `KESINLESME_PERIYOD_TIPI` | char(1) | evet |  | Kesinlesme periyod tipini tutar. |
| 14 | `KESINLESME_SURESI` | TDBBYTE | evet |  | Kesinlesme suersini tutar. |
| 15 | `HABER_PERIYOD_TIPI` | char(1) | evet |  | Haber periyod tipini tutar. |
| 16 | `PLAN_HAFTA_SAYISI` | TDBBYTE | evet |  | Planlanan hafta sayısını tutar. |
| 17 | `PLAN_AY_SAYISI` | TDBBYTE | evet |  | Planlanan ay sayısını tutar. |
| 18 | `DAGITIM_ORANI` | TDBFLOAT | evet |  | Siparis oranını tutar. |
| 19 | `SIPARIS_POLITIKA` | char(1) | evet |  | Siparis politikası kesikli ise K; sabit ise S degerini tutar. |
| 20 | `YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `FAZTESORAN` | TDBFLOAT | evet |  | Fazla teslimat oranı. |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `SATISKDVORANI` | TDBKDVORAN | evet |  | Satıs KDV oranını tutar. |
| 28 | `ALISKDVORANI` | TDBKDVORAN | evet |  | Alıs KDV oranını tutar. |
| 29 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `FAZLAURORAN` | TDBFLOAT | evet |  | İsemrinden fazla uretim oranını tutar. |
| 31 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodunu tutar. |
| 32 | `ABCKODU` | varchar(8) | evet |  | ABC code alanını tutar. |
| 33 | `PERFORMANSKODU` | varchar(4) | evet |  | Performans kodunu tutar. |
| 34 | `AZAMI_STOK` | TDBFLOAT | evet |  | Azami stok seviyesini tutar. |
| 35 | `ASGARI_STOK` | TDBFLOAT | evet |  | Asgari stok seviyesini tutar. |
| 36 | `KUL_MIK` | TDBFLOAT | evet |  | Kullanım miktarını tutar. |
| 37 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `KULL1N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 1. |
| 40 | `KULL2N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 2. |
| 41 | `KULL3N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 3. |
| 42 | `KULL4N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 4. |
| 43 | `KULL5N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 5. |
| 44 | `KULL6N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 6. |
| 45 | `KULL7N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 7. |
| 46 | `KULL8N` | TDBFLOAT | evet |  | Kullanıcı tanımlı sayısal sahalar 8. |
| 47 | `KULL1S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 1. |
| 48 | `KULL2S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 2. |
| 49 | `KULL3S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 3. |
| 50 | `KULL4S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 4. |
| 51 | `KULL5S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 5. |
| 52 | `KULL6S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 6. |
| 53 | `KULL7S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 7. |
| 54 | `KULL8S` | varchar(25) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 8. |
| 55 | `EXTRAINFO` | text | evet |  | Coklu yukleme gunu girisini tutar. |
| 56 | `BASTAR` | TDBDATETIME | evet |  | Baslangıc tarihini tutar. |
| 57 | `ONCELIK` | TDBSMALLINT | evet |  | MRP parametrelerinde, satıcı belirleme öncelik durumunda ise planlama kayıtlarında öncelik bilgisi girilir ve burada tutulur. |
| 58 | `SIPARISKARSILAMA` | char(1) | hayır |  | Bu sahada M-mümkün olduğunda / T tamamı için kullanılır |
| 59 | `SIPARISTAKIP` | char(1) | hayır |  | Sipariş takip bilgilerini tutar |
| 60 | `PLANLAMATIPI` | char(1) | hayır |  | Planlama tipini tutar |
| 61 | `MAXSIPARISMIKTARI` | TDBFLOAT | hayır |  | Planlama tipini tutar |
| 62 | `ZAMANSKALASI` | TDBFLOAT | hayır |  | Zaman skalasına girilen değeri tutar. |
| 63 | `TEDARIKCITERCIH` | char(1) | hayır |  |  |
| 64 | `AUPSIPARISBAK` | char(1) | evet |  | AUP olusturulurken siparislere bakılsın isaretli ise E degil ise H degerini alır. |
| 65 | `MALIYET` | TDBFLOAT | hayır |  | Maliyet bilgisini tutar |
| 66 | `KAPASITEPERYOTTIPI` | char(1) | evet |  | Günlük mü haftalık mı aylık mı yıllık mı olduğunu belirtir |
| 67 | `KAPASITE` | TDBFLOAT | evet |  | Kapasite bilgisini tutar |
| 68 | `TEDARIK_MIKTARI` | TDBFLOAT | evet |  |  |
| 69 | `FASON` | char(1) | evet |  |  |
| 70 | `SAT_SIP_YONTEM` | char(1) | evet |  | Satıcı sipariş ve planlama yöntemi bligisi yer alır. |
| 71 | `ISEMRI_YONTEM` | char(1) | evet |  | İş emri ve planlama bilgisi yer alır. |
| 72 | `ORANLAMA_DONEMI` | TDBINTEGER | hayır |  | Dağıtım oranlamada değerlendirme bilgisi yer alır. |
| 73 | `FASON_ISEMRI` | char(1) | evet |  |  |
| 74 | `KABULYUZDESI` | TDBFLOAT | evet |  |  |
| 75 | `REZERV_BAK_TAKIP` | char(1) | hayır |  |  |
| 76 | `ONEMSIZ_STOK` | char(1) | hayır |  |  |
| 77 | `KESINLESEN_GUNCELLENMESIN` | char(1) | hayır |  |  |
| 78 | `SIPARIS_ONAYLI` | char(1) | hayır |  |  |
| 79 | `REC_ISEM_OLUS` | char(1) | hayır |  | Reçeteden iş emri oluşturmaya dahil edilsin işaretli ise E değerini alır. |
| 80 | `URET_GIRIS_DEPO` | TDBSMALLINT | hayır |  | Stok planlama kayıtlrındaki üretim giriş deposu bilgisi yer alır. |
| 81 | `URET_CIKIS_DEPO` | TDBSMALLINT | hayır |  | Stok planlama kayıtlrındaki üretim çıkış deposu bilgisi yer alır. |
| 82 | `URETIM_TRANSFER_SURESI` | TDBFLOAT | evet |  | Üretim transfer süresi bilgisi yer alır. |
| 83 | `MRP_POLITIKA` | char(1) | hayır |  | Talebe dayalı MRP parametrelerinde seçili olan MRP politikası bilgisi yer alır |
| 84 | `DDMRP_GECMIS_HAFTA` | TDBINTEGER | hayır |  | Ortalama Günlük Tüketim Hesabı Parametrlerinde yer alan geçmiş hafta sayısı bilgisi yer alır. |
| 85 | `DDMRP_GELECEK_HAFTA` | TDBINTEGER | hayır |  | Ortalama Günlük Tüketim Hesabı Parametrlerinde yer alan gelecek hafta sayısı bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARISTOK_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, CARI_KOD` | Nonclustered |
| `TBLCARISTOK_IND_1` | `CARISTOK_KODU, CARI_KOD, YAPKOD, SUBE_KODU, BASTAR` | Nonclustered, unique |
| `TBLCARISTOK_IND_2` | `STOK_KODU, CARI_KOD, YAPKOD, BASTAR, SUBE_KODU` | Nonclustered, unique |
| `TBLCARISTOK_IND_3` | `SUBE_KODU, BASTAR, STOK_KODU, YAPKOD, CARI_KOD` | Nonclustered, unique |
| `TBLCARISTOK_IND_4` | `BASTAR, SUBE_KODU, CARI_KOD, STOK_KODU, YAPKOD` | Nonclustered, unique |
| `TBLCARISTOK_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, CARI_KOD, CARISTOK_KODU, CARISTOKISMI, OLCU_BR, LOT_SIZE
FROM dbo.TBLCARISTOK WITH (NOLOCK);
```
