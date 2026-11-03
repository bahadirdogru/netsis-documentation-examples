---
title: TBLBKMPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmprm/
---

# TBLBKMPRM

> BAKIM MODULU PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 43

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TALEPSERINO` | char(1) | evet |  | Talep seri alanını tutan sahadır. |
| 3 | `AMBARFISISERINO` | char(1) | evet |  | Ambar fisi seri no alanını tutan sahadır. |
| 4 | `TALEPTARIHISORULSUN` | char(1) | hayır |  | Talep tarihi sorulsun parametresi isaretli ise E degerini tutan sahadır. |
| 5 | `AMBARFISITARIHISORULSUN` | char(1) | hayır |  | Ambar fisi sorulsun parametresi isaretli ise E degerini tutan sahadır. |
| 6 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutan sahadır. |
| 7 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `TALEPACIKLAMA` | varchar(20) | evet |  | Talep acıklam alanını tutar. |
| 9 | `AMBARFISIACIKLAMA` | varchar(20) | evet |  | Ambar fisi acıklam alanını tutar. |
| 10 | `TALEPKOD1` | char(1) | evet |  | Talep kod 1 alanını tutar. |
| 11 | `AMBARFISIKOD1` | char(1) | evet |  | Ambar fisi kod 1 alanını tutar. |
| 12 | `TALEPKOD2` | char(1) | evet |  | Talep kod 2 alanını tutar. |
| 13 | `AMBARFISIKOD2` | char(1) | evet |  | Ambar fisi kod 2 alanını tutar. |
| 14 | `DEPO_KODU` | TDBSMALLINT | hayır |  | Depo kodunu tutan sahadır. |
| 15 | `BKMTIP1_RENK` | TDBINTEGER | evet |  | 1.tip bakımın hangi renk ile gosterilecegini tutar. |
| 16 | `BKMTIP2_RENK` | TDBINTEGER | evet |  | 2.tip bakımın hangi renk ile gosterilecegini tutar. |
| 17 | `BKMTIP3_RENK` | TDBINTEGER | evet |  | 3.tip bakımın hangi renk ile gosterilecegini tutar. |
| 18 | `BKMTIP4_RENK` | TDBINTEGER | evet |  | 4.tip bakımın hangi renk ile gosterilecegini tutar. |
| 19 | `BKMDRM0_RENK` | TDBINTEGER | evet |  | Secilen emir durumunun hangi renk ile gosterilecegini tutan sahadır. |
| 20 | `BKMDRM_RENK` | TDBINTEGER | evet |  | Secilen emir durumunun hangi renk ile gosterilecegini tutan sahadır. |
| 21 | `UAKTALEPAC` | char(1) | evet |  | UAK Modülüne Girilen Arıza Kayıtlarından, Bakım Emri Otomatik Oluşsun parametresi isaretli ise E degerini tutar. |
| 22 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `CYEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `CYEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `TATILGUNUKONTROL` | char(1) | evet |  | Tatil gunleri kontrol edilsin parametresi isaretli ise E degerini tutar. |
| 35 | `TATILGUNLERI` | int | evet |  | Secilen tatil gunlerini tutan sahadır. |
| 36 | `EKSIBAKIYEKONTROL` | char(1) | evet |  | Eksi bakiye kontrolu yapılsın parametresi isaretli ise E degerini tutar. |
| 37 | `EKSIBAKIYEDEVAM` | char(1) | evet |  | İslem ekside devam etsin parametresi isaretli ise E degerini tutar. |
| 38 | `GEREKSINIMKONTROL` | char(1) | evet |  | Gereksinim kontrol edilsin parametresinin değeri tutulur. |
| 39 | `ASGARIAZAMI` | char(1) | evet |  | asgari-azami stok miktarına tamamlansın parametresi değeri yer alır. |
| 40 | `UAKDURUSKONTROL` | char(1) | evet |  | Üretim akış kaydı girilirken duruşlu bakım emirleri kontrol edilsin parametresi bilgisi yer alır. |
| 41 | `MTBFLIMIT` | TDBINTEGER | hayır |  | Arızalar arası ortama süre analizi için tarih limiti değer yer alır. |
| 42 | `MTBFLIMITUNIT` | char(1) | hayır |  | Arızalar arası ortama süre analizi için tarih limiti gün-ay-hafta bilgisi yer alır. |
| 43 | `OTONOMTUMONAYZORUNLU` | char(1) | evet |  | Otonum bakım kaydında tüm işlemlerin onaylanması zorunludur parametresinin değeri yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMPRM_PK` | `REFTIP, REFINCKEYNO, SIRANO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TALEPSERINO, AMBARFISISERINO, TALEPTARIHISORULSUN, AMBARFISITARIHISORULSUN, PLASIYERKODU
FROM dbo.TBLBKMPRM WITH (NOLOCK);
```
