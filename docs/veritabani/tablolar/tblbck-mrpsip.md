---
title: TBLBCK_MRPSIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mrpsip/
---

# TBLBCK_MRPSIP

> SAKLANAN URETIM PLANLARI MRP RAPORU SIPARIS KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BCKNO` | varchar(8) | hayır |  | Revisyon numarasini tutan sahadır. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 5 | `ACIKLAMA` | varchar(50) | evet |  | Tanımlanan operasyonla ilgili varsa açıklamasını gösterir. |
| 6 | `SIPMIK` | TDBFLOAT | evet | `0` | Siparis miktarını tutan sahadır. |
| 7 | `SATICI_KODU` | varchar(15) | evet |  | Satıcı kodunu tutan sahadır. |
| 8 | `OFLAG` | char(1) | evet | `E` | Siparis/isemri olustur. |
| 9 | `SIP_ISEMRI` | char(1) | evet | `S` | İsemri olusturulacak ise I;siparis olusturulacak ise S degerini tutan sahadır. |
| 10 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 11 | `TESTAR` | TDBDATETIME | evet |  | Teslim tarihini tutan sahadır. |
| 12 | `SIPNO` | varchar(15) | evet |  | Siparis numarasidir. |
| 13 | `HABERTAR` | TDBDATETIME | evet |  | Bildirim tarihini tutan sahadır. |
| 14 | `YUKLEGEC` | char(1) | evet | `H` |  |
| 15 | `HABERGEC` | char(1) | evet | `H` |  |
| 16 | `YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK2` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `TEPEMAM` | TDBSTOKKOD | hayır |  | İsemrinden girilmesi gereken miktar. |
| 23 | `TEPETAR` | TDBDATETIME | hayır |  | Bilesenin yapılandırma kodu. |
| 24 | `TEPESIPNO` | varchar(15) | evet | `0` | Ana mamulun yapılandırma kodu. |
| 25 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu tutan sahadır. |
| 26 | `TEPEMAMYAPKOD` | varchar(15) | evet | `NULL` | Ana mamulun siparis numarası. |
| 27 | `TEPESIPKONT` | TDBSMALLINT | evet | `0` | Siparis sıra numarasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBCK_MRPSIP_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBCK_MRPSIPFKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLBCK_MRPSIPFKEY1` | `TEPEMAMYAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCK_MRPSIP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, TARIH` | Nonclustered |
| `TBLBCK_MRPSIP_IND_1` | `BCKNO, SIP_ISEMRI, SATICI_KODU, TARIH, STOK_KODU, YAPKOD, SIPTAR, TEPEMAM, TEPEMAMYAPKOD, TEPETAR, TEPESIPNO, TEPESIPKONT` | Nonclustered, unique |
| `TBLBCK_MRPSIP_IND_2` | `TARIH, STOK_KODU, YAPKOD` | Nonclustered |
| `TBLBCK_MRPSIP_IND_3` | `ISLETME_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BCKNO, TARIH, STOK_KODU, ACIKLAMA, SIPMIK
FROM dbo.TBLBCK_MRPSIP WITH (NOLOCK);
```
