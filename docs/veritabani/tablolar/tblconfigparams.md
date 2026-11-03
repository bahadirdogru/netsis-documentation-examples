---
title: TBLCONFIGPARAMS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigparams/
---

# TBLCONFIGPARAMS

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 34
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `YONETICI_MAIL` | TDBMEMO | evet |  | Yönetici mail adresinin tutulduğu sahadır |
| 5 | `ON_ONAY_SISTEMI` | char(1) | evet |  | Ön onay parametresi olup olmadığının bilgisini tutar |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `TEKLIF_GUNCELLE` | char(1) | evet |  | Confgrasyon onaylama işleminde teklif güncelleme yapılıp yapılmayacağı bilgisini tutar |
| 23 | `TEKLIF_KONFIG` | char(1) | evet |  | Teklif konfigre edilip edilmeyeceğini gösterir |
| 24 | `SIPARIS_KONFIG` | char(1) | evet |  | Şiparişin konfigre edilip edilmeyeceğini gösterir |
| 25 | `TALEP_KONFIG` | char(1) | evet |  | Talebin konfigre edilip edilmeyeceğini gösterir. |
| 26 | `SIPARIS_GUNCELLE` | char(1) | evet |  | Configrasyon onaylama işleminde sipariş güncelleme yapılıp yapılmayacağı bilgisini tutar |
| 27 | `TALEP_GUNCELLE` | char(1) | evet |  | Configrasyon onaylama işleminde talep güncelleme yapılıp yapılmayacağı bilgisini tutar |
| 28 | `BELGE_SATIR_KAPAT` | char(1) | evet |  | Ön onaya gönderilen taslak reddeildiğinde bağlantılı belge satırını kapat parametresi yer alır. |
| 29 | `BIRLIKTELIK` | char(1) | evet |  | Konfigürasyonlarda birliktelik kontrolü yapılsın parametresi yer alır. |
| 30 | `HATA_ONAYLAMA` | char(1) | evet |  | Hata bulunduğunda konfigürasyon onaylanamasın parametresi yer alır. |
| 31 | `HATA_BELG_KULLANMA` | char(1) | evet |  | Hata bulunduğunda belgede kullanılamasın onaya gönderilemesin parametresi yer alır. |
| 32 | `BIRLIKTELIK_OTO_SECIM` | char(1) | evet |  | Birliktelik seti değişiminde tek kalan alternatifin otomatik seçilmesi parametresi yer alır. |
| 33 | `OZELLIK_KOPYALAMA` | char(1) | evet |  | Ortak özellikler otomatik değişsin parametresi yer alır. |
| 34 | `GUNCELLEME_MODU_ACIK` | char(1) | evet |  | Ürün konfigüratörü güncelleme modunda açılsın parametresi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGPARAMS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, YONETICI_MAIL, ON_ONAY_SISTEMI, C_YEDEK1
FROM dbo.TBLCONFIGPARAMS WITH (NOLOCK);
```
