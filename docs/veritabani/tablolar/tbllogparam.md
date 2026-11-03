---
title: TBLLOGPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbllogparam/
---

# TBLLOGPARAM

> LOG MODUDU PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [LOG](/veritabani/moduller/log/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `LOGTUTULSUN` | char(1) | evet |  | Log uygulaması kulalnılsın parametresi isaretli ise 1 degerini tutan sahadır. |
| 3 | `RAPLOGAYAZILSIN` | char(1) | evet |  | Raporlar loga yazılsın parametresi isaretli ise degerini tutan sahadır. |
| 4 | `DUZELTESKITUT` | char(1) | evet |  | Duzeltme islemlerinde kaydın eski hali tutulsun parametresi isaretli ise 1 degerini tutan sahadır. |
| 5 | `OTOMATIKLOGSILINSIN` | char(1) | evet |  |  |
| 6 | `KACGUNLUK` | TDBBYTE | evet |  |  |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Kullanıcı Oturum İşlemleri Log Kayıtları Tutulsun parametresi işaretli ise 1 değerini alır |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK6` | char(1) | evet |  | Log veritabanı ayrıldı ise 1 değerini almaktadır. |
| 17 | `C_YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `LCN_PARAM` | char(1) | hayır |  | Logo Kayit Degisiklikleri Bildirim Servisi (LCN) ile Netsis entegrasyonu için eklenen sahalardır. |
| 28 | `LCN_ADDRESS` | varchar(255) | evet |  | Logo Kayit Degisiklikleri Bildirim Servisi (LCN) ile Netsis entegrasyonu için eklenen sahalardır. |
| 29 | `LCN_PORT` | int | evet |  | Logo Kayit Degisiklikleri Bildirim Servisi (LCN) ile Netsis entegrasyonu için eklenen sahalardır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLLOGPARAM` | `SUBE_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, LOGTUTULSUN, RAPLOGAYAZILSIN, DUZELTESKITUT, OTOMATIKLOGSILINSIN, KACGUNLUK
FROM dbo.TBLLOGPARAM WITH (NOLOCK);
```
