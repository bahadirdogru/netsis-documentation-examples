---
title: TBLMRPSIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpsip/
---

# TBLMRPSIP

> MRP RAPORU/ SIPARIS KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 34

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Tanımlanan operasyonla ilgili varsa açıklamasını gösterir. |
| 5 | `SIPMIK` | TDBFLOAT | evet | `0` | Siparis miktarını tutan sahadır. |
| 6 | `SATICI_KODU` | TDBCARIKOD | evet |  | Satıcı kodunu tutan sahadır. |
| 7 | `OFLAG` | char(1) | evet | `E` | Siparis/isemri olustur. |
| 8 | `SIP_ISEMRI` | char(1) | evet | `S` | İsemri olusturulacak ise I;siparis olusturulacak ise S degerini tutan sahadır. |
| 9 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 10 | `TESTAR` | TDBDATETIME | evet |  | Teslim tarihini tutan sahadır. |
| 11 | `SIPNO` | TDBBELGENO | evet |  | Siparis olusturuldugunda verilen siparis numarası. |
| 12 | `HABERTAR` | TDBDATETIME | evet |  | Bildirim tarihini tutan sahadır. |
| 13 | `YUKLEGEC` | char(1) | evet | `H` |  |
| 14 | `HABERGEC` | char(1) | evet | `H` |  |
| 15 | `YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK2` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `TEPEMAM` | TDBSTOKKOD | hayır |  | İsemrinden girilmesi gereken miktar. |
| 22 | `TEPETAR` | TDBDATETIME | hayır |  | Bilesenin yapılandırma kodu. |
| 23 | `TEPESIPNO` | TDBBELGENO | evet | `0` | Ana mamulun yapılandırma kodu. |
| 24 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu tutan sahadır. |
| 25 | `TEPEMAMYAPKOD` | varchar(15) | evet | `NULL` | Ana mamulun siparis numarası. |
| 26 | `TEPESIPKONT` | TDBSMALLINT | evet | `0` | Siparis sıra numarasıdır. |
| 27 | `INCKEYNO` | TDBINTEGER | hayır |  |  |
| 28 | `FABRIKA_KODU` | varchar(35) | evet |  |  |
| 29 | `RECETENO` | varchar(120) | evet |  |  |
| 30 | `TEPESIPREVIZYON` | varchar(11) | evet |  |  |
| 31 | `BAZ_ISEMRINO` | TDBBELGENO | evet |  |  |
| 32 | `CONFIGMAS_ID` | TDBINTEGER | evet |  |  |
| 33 | `ALTRECNO` | TDBINTEGER | hayır |  |  |
| 34 | `BASLAYABILECEGI_TAR_BAS` | char(1) | evet |  |  |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRPSIP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU` | Nonclustered |
| `TBLMRPSIP_IND_1` | `SIP_ISEMRI, SATICI_KODU, TARIH, STOK_KODU, YAPKOD, SIPTAR, TEPEMAM, TEPEMAMYAPKOD, TEPETAR, TEPESIPNO, TEPESIPKONT` | Nonclustered, unique |
| `TBLMRPSIP_IND_2` | `TARIH, STOK_KODU, YAPKOD` | Nonclustered |
| `TBLMRPSIP_IND_3` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, TARIH, STOK_KODU, ACIKLAMA, SIPMIK, SATICI_KODU
FROM dbo.TBLMRPSIP WITH (NOLOCK);
```
