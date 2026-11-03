---
title: TBLCASABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcasabit/
---

# TBLCASABIT

> CARI SABIT KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 75

## İlgili sayfalar

- [Cari kartı (NetOpenX COM)](/netopenx/cari-ve-stok/)
- [Cari uçları (REST ARPs)](/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions)
- [Temel tablolar](/veritabani/temel-tablolar/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 4 | `CARI_TEL` | TDBTELFAX | evet |  | Cari telefon numarasını tutar. |
| 5 | `CARI_IL` | varchar(15) | evet |  | İl bilgisini tutar. |
| 6 | `ULKE_KODU` | varchar(4) | evet |  | Ulke kodunu tutar. |
| 7 | `CARI_ISIM` | varchar(100) | evet |  | Cari ismini tutar. |
| 8 | `CARI_TIP` | char(1) | evet |  | Cari tipini tutar. |
| 9 | `GRUP_KODU` | TDBGRUPKOD | evet |  | Rapor kodları grup kodunu tutar. |
| 10 | `RAPOR_KODU1` | varchar(8) | evet |  | Rapor kodları kod-1 alanını tutar. |
| 11 | `RAPOR_KODU2` | varchar(8) | evet |  | Rapor kodları kod-2 alanını tutar. |
| 12 | `RAPOR_KODU3` | varchar(8) | evet |  | Rapor kodları kod-3 alanını tutar. |
| 13 | `RAPOR_KODU4` | varchar(8) | evet |  | Rapor kodları kod-4 alanını tutar. |
| 14 | `RAPOR_KODU5` | varchar(8) | evet |  | Rapor kodları kod-5 alanını tutar. |
| 15 | `CARI_ADRES` | varchar(100) | evet |  | Cari adres bilgisini tutar. |
| 16 | `CARI_ILCE` | varchar(15) | evet |  | Cari ilce bilgisini tutar. |
| 17 | `VERGI_DAIRESI` | varchar(15) | evet |  | Vergi dairesi bilgisini tutar. |
| 18 | `VERGI_NUMARASI` | varchar(15) | evet |  | Vergi numarasini tutar. |
| 19 | `FAX` | TDBTELFAX | evet |  | Cariye ait fax numarasını tutar. |
| 20 | `POSTAKODU` | varchar(8) | evet |  | Posta kodunu tutar. |
| 21 | `DETAY_KODU` | TDBSMALLINT | evet | `0` | Detay kod bilgisini tutar |
| 22 | `NAKLIYE_KATSAYISI` | TDBFLOAT | evet | `0` | Nakliye katsayısını tutar. |
| 23 | `RISK_SINIRI` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 24 | `TEMINATI` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 25 | `CARISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 26 | `CCRISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 27 | `SARISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 28 | `SCRISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 29 | `CM_BORCT` | TDBFLOAT | evet | `0` | Cari borc toplamını tutar. |
| 30 | `CM_ALACT` | TDBFLOAT | evet | `0` | Cari alacak toplamını tutar. |
| 31 | `CM_RAP_TARIH` | TDBDATETIME | evet |  | Rapor baz tarihini tutar. |
| 32 | `KOSULKODU` | varchar(8) | evet |  | Kosul kodunu tutar. |
| 33 | `ISKONTO_ORANI` | TDBFLOAT | evet | `0` | İskonto oranını tutar. |
| 34 | `VADE_GUNU` | TDBSMALLINT | evet | `0` | Vade gununu tutar. |
| 35 | `LISTE_FIATI` | TDBBYTE | evet | `0` | Liste fiyatını tutar. |
| 36 | `ACIK1` | varchar(50) | evet |  | Acıklama 1 alanını tutar. |
| 37 | `ACIK2` | varchar(50) | evet |  | Acıklama 2 alanını tutar. |
| 38 | `ACIK3` | varchar(50) | evet |  | Acıklama 3 alanını tutar. |
| 39 | `M_KOD` | varchar(35) | evet |  | Muhasebe kodunu tutar. |
| 40 | `DOVIZ_TIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `DOVIZ_TURU` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `HESAPTUTMASEKLI` | char(1) | evet |  | Hesaptipi yaslandırma ise Y, ozel hesap kapatma ise K degerini tutar. |
| 43 | `DOVIZLIMI` | char(1) | evet |  | Dövizli cari ise E degerini; degil ise H degerini tutar. |
| 44 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 45 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 46 | `LOKALDEPO` | TDBSMALLINT | evet | `0` | Lokal depo kodunu tutar. |
| 47 | `EMAIL` | varchar(60) | evet |  | Email adresini tutar. |
| 48 | `WEB` | varchar(60) | evet |  | Web adresini tutar. |
| 49 | `KURFARKIBORC` | varchar(35) | evet |  | Kur farkı borc muhasebe kodunu tutar. |
| 50 | `KURFARKIALAC` | varchar(35) | evet |  | Kur farkı alacak muhasebe kodunu tutar. |
| 51 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 52 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 53 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 55 | `C_YEDEK1` | char(1) | evet |  | Kilit secenegini tutar.c_yedek1 = A açık c_yedek1 = B Faturada kilit c_yedek1 = C tüm işlemlerde kilit |
| 56 | `C_YEDEK2` | char(1) | evet |  | Faturadan proje bazında detaysız parametresi isaretli ise E degerini tutar. |
| 57 | `B_YEDEK1` | TDBBYTE | evet |  | Ödeme günleri bilgisi yer alır. |
| 58 | `I_YEDEK1` | TDBSMALLINT | evet |  | Yurtici doviz tipini tutar. |
| 59 | `L_YEDEK1` | TDBINTEGER | evet |  | Firma takvimin kodunu tutar. |
| 60 | `FIYATGRUBU` | varchar(15) | evet |  | Fiyat grubunu tutar. |
| 61 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 62 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 63 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 64 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 65 | `ODEMETIPI` | TDBBYTE | evet | `0` | Odeme tipini tutar. |
| 66 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 67 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 68 | `MUSTERIBAZIKDV` | char(1) | evet | `H` | Musteri urun bazında farklı KDV sistemi parametresi isaretli ise E degerini tutar. |
| 69 | `AGIRLIK_ISK` | TDBFLOAT | evet |  | Bolge farkı iskontosunu tutar. |
| 70 | `CARI_TEL2` | TDBTELFAX | evet |  | Netlite web için eklenmiş sahalar |
| 71 | `CARI_TEL3` | TDBTELFAX | evet |  | Netlite web için eklenmiş sahalar |
| 72 | `FAX2` | TDBTELFAX | evet |  | Netlite web için eklenmiş sahalar |
| 73 | `GSM1` | TDBTELFAX | evet |  | Netlite web için eklenmiş sahalar |
| 74 | `GSM2` | TDBTELFAX | evet |  | Netlite web için eklenmiş sahalar |
| 75 | `GEKAPHESAPLANMASIN` | char(1) | evet |  | Geri dönüşüm katılım payı hesaplanmasın bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCASABIT_IND_ACK1` | `ISLETME_KODU, SUBE_KODU, ACIK1, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_ACK2` | `ISLETME_KODU, SUBE_KODU, ACIK2, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_ACK3` | `ISLETME_KODU, SUBE_KODU, ACIK3, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_ADI` | `ISLETME_KODU, SUBE_KODU, CARI_ISIM` | Nonclustered |
| `TBLCASABIT_IND_GRPKOD` | `ISLETME_KODU, SUBE_KODU, GRUP_KODU, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_IL` | `ISLETME_KODU, SUBE_KODU, CARI_IL, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_ILCE` | `ISLETME_KODU, SUBE_KODU, CARI_ILCE, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_KOD` | `ISLETME_KODU, SUBE_KODU, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_RAPKD1` | `ISLETME_KODU, SUBE_KODU, RAPOR_KODU1, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_RAPKD2` | `ISLETME_KODU, SUBE_KODU, RAPOR_KODU2, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_RAPKD3` | `ISLETME_KODU, SUBE_KODU, RAPOR_KODU3, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_RAPKD4` | `ISLETME_KODU, SUBE_KODU, RAPOR_KODU4, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_RAPKD5` | `ISLETME_KODU, SUBE_KODU, RAPOR_KODU5, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_TIP` | `ISLETME_KODU, SUBE_KODU, CARI_TIP, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_ULKE` | `ISLETME_KODU, SUBE_KODU, ULKE_KODU, CARI_KOD` | Nonclustered, unique |
| `TBLCASABIT_IND_WKRTIP` | `ISLETME_KODU, SUBE_KODU, ONAYTIPI` | Nonclustered |
| `TBLCASABIT_IND_WRKON` | `ISLETME_KODU, SUBE_KODU, ONAYNUM` | Nonclustered |
| `TBLCASABIT_PKEY` | `CARI_KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, CARI_KOD, CARI_TEL, CARI_IL, ULKE_KODU
FROM dbo.TBLCASABIT WITH (NOLOCK);
```
