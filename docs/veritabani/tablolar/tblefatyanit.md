---
title: TBLEFATYANIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatyanit/
---

# TBLEFATYANIT

> Uygulama ve sistem yanıt bilgilerinin tutulduğu tablodur.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Tekrarlanmayan sıra numarasıdır. |
| 2 | `YANITID` | varchar(50) | hayır |  | Gönderilen e-faturanın yanıt numarasıdır. Bu numara zarf bazında giden kutusu ekranındaki sistem yanıtları kısmında görünen Yanıt Numarası kolonuna karşılık gelir. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Yanıtın alındığı tarihtir. |
| 4 | `XMLVERI` | TDBMEMO | hayır |  | Yanıtın XML verisinin tutulduğu tablodur. |
| 5 | `DURUM` | TDBSMALLINT | evet |  | Faturanın kabul ya da red bilgisini tutar. 0 ise KABUL edildiği, 1 ise RED edildiği, NULL ise yanıt beklediği anlamına gelir. |
| 6 | `ZARFID` | varchar(50) | hayır |  | Uygulama yanıtı için uygulama yanıtının ait olduğu faturanın ZARFID'sini gösterir. Sistem yanıtı için ise sistem yanıt zarfının GIB'e hangi zarf id'si ile ulaştığını gösterir. |
| 7 | `REFZARFID` | varchar(50) | hayır |  | Uygulama yanıtı için uygulama yanıtının ait olduğu faturanın UUID'sidir. Sistem yanıtı için ise sistem yanıtının ait olduğu faturanın zarf id'sini gösterir. |
| 8 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kaydı yapan kullanıcıyı gösterir. |
| 9 | `KAYITTARIHI` | datetime | evet |  | İlgili kaydın kayıt tarihini gösterir. |
| 10 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | NULL |
| 11 | `DUZELTMETARIHI` | datetime | evet |  | NULL |
| 12 | `YEDEK1` | char(1) | evet |  | Satış tarafı için bu saha yedek sahadır. Gelen faturalar için ise kabul/red bilgisini tutar. |
| 13 | `YEDEK2` | char(1) | evet |  | Yedek sahadır. |
| 14 | `YEDEK3` | int | evet |  | Uygulama yanıt zarfının INCKEYNO değeridir. |
| 15 | `YEDEK4` | int | evet |  | Yedek sahadır. |
| 16 | `YEDEK5` | float | evet |  | Yedek sahadır. |
| 17 | `YEDEK6` | float | evet |  | Yedek sahadır. |
| 18 | `YEDEK7` | datetime | evet |  | Yedek sahadır. |
| 19 | `YEDEK8` | datetime | evet |  | Yedek sahadır. |
| 20 | `YEDEK9` | varchar(50) | evet |  | Yedek sahadır. |
| 21 | `YEDEK10` | varchar(50) | evet |  | Yedek sahadır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, YANITID, TARIH, XMLVERI, DURUM, ZARFID
FROM dbo.TBLEFATYANIT WITH (NOLOCK);
```
