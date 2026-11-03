---
title: TBLBCK_MRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mrp/
---

# TBLBCK_MRP

> SAKLANAN URETIM PLANLARI MRP RAPORU MRP SONUC KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BCKNO` | varchar(8) | hayır |  | Revisyon numarasini tutan sahadır. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisini tutan sahadır. |
| 4 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 5 | `URET_MIK` | TDBFLOAT | evet | `0` | Uretim miktarını tutan sahadır. |
| 6 | `BRUT_GEREK` | TDBFLOAT | evet | `0` | Brut gereksinim miktarını tutan sahadır. |
| 7 | `BUGUN_GIRIS` | TDBFLOAT | evet | `0` | Siparis ve is emrinden bugun yapılan giris miktarını tutan sahadır. |
| 8 | `DEVSTOK` | TDBFLOAT | evet | `0` | Devreden giris miktarını tutan sahadır. |
| 9 | `DEVSIP` | TDBFLOAT | evet | `0` | Siparisten giris miktarını tutan sahadır. |
| 10 | `DEVISEM` | TDBFLOAT | evet | `0` | İsemrinden giris miktarını tutan sahadır. |
| 11 | `DEVIR_BAKIYE` | TDBFLOAT | evet | `0` | Devreden bakiye miktarını tutan sahadır. |
| 12 | `NET_GEREK` | TDBFLOAT | evet | `0` | Net gereksinim miktarını tutan sahadır. |
| 13 | `SIP_MIK` | TDBFLOAT | evet | `0` | Siparis miktarını tutan sahadır. |
| 14 | `BUGUN_BAKIYE` | TDBFLOAT | evet | `0` | Tarih alanındaki tarihte stoga ait bakiye miktarını tutan sahadır. |
| 15 | `SIP_ISEMRI` | char(1) | evet |  | Siparis mi, is emri mi gosterir. |
| 16 | `SATICI_KODU` | TDBCARIKOD | evet |  | Satıcı kodunu tutan sahadır. |
| 17 | `SIPNO` | TDBBELGENO | evet |  | Siparis olusturuldugunda verilen siparis numarası. |
| 18 | `OFLAG` | char(1) | evet |  | Siparis/isemri olustur. |
| 19 | `SIPTAR` | TDBDATETIME | evet |  | Sipariş tarihini gösterir. |
| 20 | `SIPMIK` | TDBFLOAT | evet | `0` | Sipariş miktarını gösterir. |
| 21 | `ACIKLAMA` | varchar(50) | evet |  | Hata acıklama alanını tutan sahadır. |
| 22 | `INIT` | TDBBYTE | evet | `0` |  |
| 23 | `YEDEK` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `SEVIYE` | TDBSMALLINT | evet | `0` |  |
| 25 | `BUGUNSIPGIRIS` | TDBFLOAT | evet | `0` | Siparisten bugun girilen miktarı tutan sahadır. |
| 26 | `BUGUNISEMGIRIS` | TDBFLOAT | evet | `0` | İs emrinden bugun girilen miktarı tutan sahadır. |
| 27 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBCK_MRP_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBCK_MRP_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLBCK_MRPYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCK_MRP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU, BCKNO, TARIH` | Nonclustered |
| `TBLBCK_MRP_IND_1` | `BCKNO, TARIH, STOK_KODU, YAPKOD` | Nonclustered, unique |
| `TBLBCK_MRP_IND_2` | `BCKNO, STOK_KODU, YAPKOD, TARIH` | Nonclustered, unique |
| `TBLBCK_MRP_IND_3` | `SIP_ISEMRI, TARIH, SATICI_KODU` | Nonclustered |
| `TBLBCK_MRP_IND_4` | `ISLETME_KODU` | Nonclustered |
| `TBLBCK_MRPPKEYIDX` | `BCKNO, TARIH, STOK_KODU, YAPKOD` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BCKNO, TARIH, STOK_KODU, URET_MIK, BRUT_GEREK
FROM dbo.TBLBCK_MRP WITH (NOLOCK);
```
