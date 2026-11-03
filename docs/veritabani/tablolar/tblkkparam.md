---
title: TBLKKPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkparam/
---

# TBLKKPARAM

> KAYIT> KALİTE KONTROL PARAMETRE KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 39

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SATINALMADAKK` | char(1) | evet |  | Satın almada kalite kontrol yapılacak parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 3 | `URETIMDEKK` | char(1) | evet |  | Üretimde kalite kontrol kayıtları yapılacak parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 4 | `IADEDEKK` | char(1) | evet |  | İadede kalite kontrol kayıtları yapılacak parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 5 | `KKSERINEREDE` | char(1) | evet |  | Seri lot girişi parametresini gösterir. Alış irsaliyesinde işaretli ise 'A' ,Kalite Kontrolde işaretli ise 'K' değerini alır. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Kalite kontrol hareketleri otomatik oluşsun parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 11 | `C_YEDEK2` | char(1) | evet |  | Kalite kontrol ölçümleri otomatik oluşsun parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 12 | `C_YEDEK3` | char(1) | evet |  | Kalite Kontrol Numune Aralıkları Tanımlama parametresinin işaretli olup olmadığını gösterir. İşaretli ise 'E', değil ise 'H' değerini alır. |
| 13 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK5` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 değeri atılmaktadır. |
| 19 | `D_YEDEK6` | TDBDATETIME | evet |  | Default 1899-12-30 00:00:00.000 değeri atılmaktadır. |
| 20 | `V_YEDEK7` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK8` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `MUSTAHSILKK` | char(1) | evet |  | Müstahsil faturasında kalite kontrol yapılsın işaretli ise E değerini alır. |
| 23 | `DATKK` | char(1) | evet |  | Dat da ve ambar giriş fişinde kalite kontrol yapılsın işaretli ise E değerini alır. |
| 24 | `OTODAT` | char(1) | hayır |  | Kalite kontrol kayıt kapatmadan sonra otomatik DAT yapılsın işaretli ise E değerini alır. |
| 25 | `SPC_AMOUNT` | TDBINTEGER | hayır |  | Kontrol Grafiği gösterim tarihi limiti değeri yer alır. |
| 26 | `SPC_RANGE` | char(1) | hayır |  | Kontrol Grafiği gösterim tarihi limiti aralığı yer alır.Hafta,ay,gün gibi |
| 27 | `ONDALIK_DEGER` | char(1) | hayır |  | Ölçüm tanımlarında girilen ondalık değerleri kullanılsın işaretli ise E değerini alır. |
| 28 | `KURAL1` | char(1) | hayır |  |  |
| 29 | `KURAL2` | char(1) | hayır |  |  |
| 30 | `KURAL3` | char(1) | hayır |  |  |
| 31 | `KURAL4` | char(1) | hayır |  |  |
| 32 | `KURAL5` | char(1) | hayır |  |  |
| 33 | `KURAL6` | char(1) | hayır |  |  |
| 34 | `KURAL7` | char(1) | hayır |  |  |
| 35 | `KURAL8` | char(1) | hayır |  |  |
| 36 | `KK_GRUP_ESLESME_KONTROL` | char(1) | evet |  | Kalite kontrol kaydında grup eşleştirme bilgileri kontrol edilsin. |
| 37 | `KK_KAPAMA_SERILOT_KONTROL` | char(1) | evet |  | Kalite kontrol kayıt kapama seri lot girişleri kontrol edilsin. |
| 38 | `OTOTALEP` | char(1) | evet |  | Proses Kontrol dışına çıktığında otomatik olarak bakım talebi açılsın parametresi yer alır. |
| 39 | `IRS_KKONT_ZORUNLU` | char(1) | hayır |  | Kalite Kontrol Kaydı Kapatılmayan Alış İrsaliyeleri Faturalaştırılamasın parametresi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SATINALMADAKK, URETIMDEKK, IADEDEKK, KKSERINEREDE, KAYITYAPANKUL
FROM dbo.TBLKKPARAM WITH (NOLOCK);
```
