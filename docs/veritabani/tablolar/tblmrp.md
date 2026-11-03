---
title: TBLMRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrp/
---

# TBLMRP

> MRP RAPORU/MRP SONUC SEKMESINI TUTAN SAHADIR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 3 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 4 | `URET_MIK` | TDBFLOAT | evet | `0` | Uretim miktarını tutan sahadır. |
| 5 | `BRUT_GEREK` | TDBFLOAT | evet | `0` | Brut gereksinim miktarını tutan sahadır. |
| 6 | `BUGUN_GIRIS` | TDBFLOAT | evet | `0` | Siparis ve is emrinden bugun yapılan giris miktarını tutan sahadır. |
| 7 | `DEVSTOK` | TDBFLOAT | evet | `0` | Devreden giris miktarını tutan sahadır. |
| 8 | `DEVSIP` | TDBFLOAT | evet | `0` | Siparisten giris miktarını tutan sahadır. |
| 9 | `DEVISEM` | TDBFLOAT | evet | `0` | İsemrinden giris miktarını tutan sahadır. |
| 10 | `DEVIR_BAKIYE` | TDBFLOAT | evet | `0` | Devreden bakiye miktarını tutan sahadır. |
| 11 | `NET_GEREK` | TDBFLOAT | evet | `0` | Net gereksinim miktarını tutan sahadır. |
| 12 | `SIP_MIK` | TDBFLOAT | evet | `0` | Siparis miktarını tutan sahadır. |
| 13 | `BUGUN_BAKIYE` | TDBFLOAT | evet | `0` | Tarih alanındaki tarihte stoga ait bakiye miktarını tutan sahadır. |
| 14 | `SIP_ISEMRI` | char(1) | evet |  | Siparis mi, is emri mi gosterir. |
| 15 | `SATICI_KODU` | TDBCARIKOD | evet |  | Satıcı kodunu tutan sahadır. |
| 16 | `SIPNO` | TDBBELGENO | evet |  | Siparis olusturuldugunda verilen siparis numarası. |
| 17 | `OFLAG` | char(1) | evet |  | Siparis/isemri olustur. |
| 18 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 19 | `SIPMIK` | TDBFLOAT | evet | `0` | Siparis miktarını tutan sahadır. |
| 20 | `ACIKLAMA` | varchar(50) | evet |  | Hata acıklama alanını tutan sahadır. |
| 21 | `INIT` | TDBBYTE | evet | `0` |  |
| 22 | `YEDEK` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `SEVIYE` | TDBSMALLINT | evet | `0` |  |
| 24 | `BUGUNSIPGIRIS` | TDBFLOAT | evet | `0` | Siparisten bugun girilen miktarı tutan sahadır. |
| 25 | `BUGUNISEMGIRIS` | TDBFLOAT | evet | `0` | İs emrinden bugun girilen miktarı tutan sahadır. |
| 26 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRP_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLMRP_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLMRPYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, TARIH` | Nonclustered |
| `TBLMRP_IND_1` | `ISLETME_KODU, TARIH, STOK_KODU, YAPKOD` | Nonclustered, unique |
| `TBLMRP_IND_2` | `ISLETME_KODU, STOK_KODU, YAPKOD, TARIH` | Nonclustered, unique |
| `TBLMRP_IND_3` | `ISLETME_KODU, SIP_ISEMRI, TARIH, SATICI_KODU` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, TARIH, STOK_KODU, URET_MIK, BRUT_GEREK, BUGUN_GIRIS
FROM dbo.TBLMRP WITH (NOLOCK);
```
