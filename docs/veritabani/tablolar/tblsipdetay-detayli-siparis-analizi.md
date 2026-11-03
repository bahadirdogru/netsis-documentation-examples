---
title: TBLSIPDETAY (Detaylı Sipariş Analizi)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsipdetay-detayli-siparis-analizi/
---

# TBLSIPDETAY (Detaylı Sipariş Analizi)

> EK ANALİZ HAZIRLIĞI MÜŞTERİ/SATICI BAZINDA DETAYLI SİPARİŞ ANALİZ TABLOSU

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Sipariş içindeki stok kodunu gösterir. |
| 3 | `CARI_KOD` | TDBCARIKOD | evet |  | Sipariş içindeki cari kodunu gösterir. |
| 4 | `SIPNO` | TDBBELGENO | evet |  | Sipariş numarasını gösterir. |
| 5 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 6 | `TESTAR` | TDBDATETIME | evet |  | Siparişin teslim tarihini gösterir. |
| 7 | `SIPMIK` | TDBFLOAT | evet | `0` | Sipariş içinde bulunan stoğun miktarını gösterir. |
| 8 | `FIAT` | TDBFLOAT | evet | `0` | Sipariş içinde bulunan stoğun fiyatını gösterir. |
| 9 | `TESMIK` | TDBFLOAT | evet | `0` | Sipariş içinde bulunan stoğun teslim edilmiş miktarını gösterir. |
| 10 | `SIPTIPI` | char(1) | evet |  | Siparişin tipini (Müşteri/satıcı sip) gösterir. |
| 11 | `BAGTIPI` | char(1) | evet |  | Bağlantı tipini gösterir. Default B değeri atılır. |
| 12 | `IKINCIMIK` | TDBFLOAT | evet | `0` | Sipariş içinde bulunan stoğun ikinici miktarını gösterir. |
| 13 | `SIPACIK` | varchar(20) | evet |  | Siparişin varsa açıklamasını gösterir. |
| 14 | `TESISIM` | varchar(21) | evet |  | Teslim carisinin ismini gösterir. |
| 15 | `TESKOD` | TDBCARIKOD | evet |  | Teslim cari kodunu gösterir. |
| 16 | `NFIAT` | TDBFLOAT | evet | `0` | Net fiyatı gösterir. |
| 17 | `KOD1` | char(1) | evet |  | Siparişte girilen özel kod1 değerini gösterir. |
| 18 | `KOD2` | char(1) | evet |  | Siparişte girilen özel kod2 değerini gösterir. |
| 19 | `DOVTIP` | TDBBYTE | evet | `0` | Siparişin döviz tipini gösterir. |
| 20 | `DOVFIAT` | TDBFLOAT | evet | `0` | Siparişin döviz fiyatını gösterir. |
| 21 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `DEPOKODU` | TDBSMALLINT | evet | `0` | Stokların bulunduğu depo kodunu gösterir. |
| 31 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa esnek yapılandırma kodlarını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSIPDETAY_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIPDETAY_IND_1` | `SIPNO` | Non-unique,Non-clustered |
| `TBLSIPDETAY_IND_2` | `SUBE_KODU` | Non-unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOK_KODU, CARI_KOD, SIPNO, SIPTAR, TESTAR
FROM dbo.TBLSIPDETAY (Detaylı Sipariş Analizi) WITH (NOLOCK);
```
