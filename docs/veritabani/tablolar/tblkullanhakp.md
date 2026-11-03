---
title: TBLKULLANHAKP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkullanhakp/
---

# TBLKULLANHAKP

> KULLANICI MODUL YETKILERINI TUTAN TABLODUR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı kodunu tutan tablodur. |
| 3 | `MODUL_NO` | TDBINTEGER | hayır |  | Yetki verilen modul numarasını tutan tablodur. |
| 4 | `SORGU` | char(1) | evet |  | Sorgulama/izleme yetkisi tanımlanmıs ise E degerini tutar. |
| 5 | `KAYIT` | char(1) | evet |  | Kayıt yapma yetkisi tanımlanmıs ise E degerini tutar. |
| 6 | `DUZELTME` | char(1) | evet |  | Duzeltme yetkisi tanımlanmıs ise E degerini tutar. |
| 7 | `SILME` | char(1) | evet |  | Silme yetkisi tanımlanmıs ise E degerini tutar. |
| 8 | `YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `TRH_KILIT_GUNGECMIS` | TDBINTEGER | hayır |  | Dinamik tarih kilidi için geçmiş gün bilgisi yer alır. |
| 19 | `TRH_KILIT_GUNGELECEK` | TDBINTEGER | hayır |  | Dinamik tarih kilidi için gelecek gün bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKULLANHAKP_PKEY` | `SUBE_KODU, KULLANICI_NO, MODUL_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICI_NO, MODUL_NO, SORGU, KAYIT, DUZELTME
FROM dbo.TBLKULLANHAKP WITH (NOLOCK);
```
