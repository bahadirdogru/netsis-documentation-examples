---
title: TBLUAKPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluakparam/
---

# TBLUAKPARAM

> ÜRETİM AKIŞ KONTROL>KAYIT>PARAMETRE EKRANINDA İŞARETLENEN PARAMETRE KAYITLARINI TUTAR.

- **Modül:** [ÜRETİM AKIŞ KONTROL](/veritabani/moduller/uretim-akis-kontrol/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `EKACIKLAMA` | varchar(1) | evet |  | Ek açıklama sorulsun parametresini gösterir. |
| 7 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `V_YEDEK7` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `V_YEDEK8` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `MAKKUL` | varchar(1) | evet |  | Makina bilgisi okunsun parametresini gösterir. |
| 16 | `PERBIL` | varchar(1) | evet |  | Personel bilgisi okunsun parametresini gösterir. |
| 17 | `UAKSURETIPI` | TDBSMALLINT | evet |  | Süre tipini gösterir. Kayıtlar dakika olarak girilsin işaretli ise '0', kayıtlar saat olarak girilsin işaretli ise 'H' değerini gösterir. |
| 18 | `ARIZABAKIM` | char(1) | hayır |  | Default olarak 'H' değeri atılır. |
| 19 | `ZAMAN_KONTROL` | char(1) | evet |  | Makina bazında zaman çakışma kontrolü yapılsın işaretli ise E değerini alır. |
| 20 | `UAKTA_KKONT_YAPILSIN` | char(1) | evet |  | Üretim akış Kaydında Kalite Kontrol Girişi Yapılabilsin işaretli ise E değerini alır. |
| 21 | `FAB_SONDURUM_TAR_LIMIT` | TDBINTEGER | hayır |  | Fabrika son durumu OEE Hesabı için tarih limiti değeri yer alır. |
| 22 | `FAB_SONDURUM_TAR_LIMIT_TIPI` | char(1) | hayır |  | Fabrika son durumu OEE Hesabı için tarih limiti tipi yer alır. |
| 23 | `FAB_SONDURUM_GUNCEL_SIK` | TDBINTEGER | hayır |  | Fabrika son durumu grafik güncelleme sıklığı değeri yer alır. |
| 24 | `FAB_SONDURUM_GUNCEL_SIK_TIPI` | char(1) | hayır |  | Fabrika son durumu grafik güncelleme sıklığı tipi yer alır. |
| 25 | `FAB_SONDURUM_KUL_MAK` | char(1) | hayır |  | Kullanılmayan makineler rapora dahil edilmesin parametresi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLUAKARIZASABIT_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLUAKARIZASABIT_PKEY` | `ARIZAKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL, DUZELTMETARIHI, EKACIKLAMA
FROM dbo.TBLUAKPARAM WITH (NOLOCK);
```
