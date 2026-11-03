---
title: TBLEFATURA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatura/
---

# TBLEFATURA

> E-FATURA KAYITLARINI TUTAR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 32

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Tekrarlanmayan sıra numarasıdır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | İlgili kaydın şube kodunu gösterir. |
| 3 | `GIB_FATIRS_NO` | varchar(16) | hayır |  | E-Faturanın gelirler idaresine iletilecek olan fatura numarasını gösterir. |
| 4 | `FTIRSIP` | char(1) | hayır |  | Faturanın tipini gösterir. Satış faturası için 1 değerini alır. |
| 5 | `FATIRS_NO` | TDBBELGENO | evet |  | E-Faturanın Netsis satış fatura numarasıdır. |
| 6 | `CARI_KODU` | TDBCARIKOD | evet |  | Satış faturasının cari kodunu gösterir. |
| 7 | `TARIH` | TDBDATETIME | hayır |  | Belge tarihini gösterir. |
| 8 | `GUNCELLEMETARIHI` | TDBDATETIME | evet |  | NULL |
| 9 | `XMLVERI` | TDBMEMO | hayır |  | E-Fatura görüntüsünün XML verisini tutar. Taslak ekranda açılırken bu veri okunarak, seçilmiş olan dizayna göre görüntüsü oluşturulur. |
| 10 | `DURUM` | TDBBYTE | hayır |  | Satış faturasının taslağı oluşturulduğunda 1; zarfı gönderildiğinde ise 2 değerini alır. |
| 11 | `ZARFID` | varchar(50) | evet |  | E-Fatura taslaklar sekmesinde beklerken bu sahanın değeri NULL'dır. Zarfı gönderildiğinde ise gelirler idaresine iletilen ZARF ID ile güncellenir. |
| 12 | `YANITZARFID` | varchar(50) | evet |  | NULL |
| 13 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kaydı yapan kullanıcıyı gösterir. |
| 14 | `KAYITTARIHI` | datetime | evet |  |  |
| 15 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | NULL |
| 16 | `DUZELTMETARIHI` | datetime | evet |  | NULL |
| 17 | `YEDEK1` | char(1) | evet |  | NULL |
| 18 | `YEDEK2` | char(1) | evet |  | NULL |
| 19 | `YEDEK3` | int | evet |  | NULL |
| 20 | `YEDEK4` | int | evet |  | NULL |
| 21 | `YEDEK5` | float | evet |  | NULL |
| 22 | `YEDEK6` | float | evet |  | NULL |
| 23 | `YEDEK7` | datetime | evet |  | NULL |
| 24 | `YEDEK8` | datetime | evet |  | NULL |
| 25 | `YEDEK9` | varchar(250) | evet |  | E-Faturanın hangi XSLT dizaynı seçilerek oluşturulduğunu gösterir. |
| 26 | `YEDEK10` | varchar(250) | evet |  | NULL |
| 27 | `UUID` | varchar(200) | evet |  | Gelirler idaresinin istediği ve fatura bazında tek olan bir ID'dir. E-Fatura görüntüleme ekranındaki ETTN numarasıdır. |
| 28 | `SENDERNAME` | varchar(200) | evet |  | Göndericinin firma ismini gösterir. Satış tarafı için bu alanda firmanın kendi unvanı yazar. |
| 29 | `SENDERVNO` | varchar(50) | evet |  | Göndericinin vergi numarasını gösterir. Satış tarafı için bu alanda firmanın kendi vergi numarası yazar. |
| 30 | `RESPONSECODE` | TDBINTEGER | evet |  | Satış tarafı için NULL değerini alır. Alış için ise Ticari faturaya yanıt verilip verilmediği bilgisini tutar. |
| 31 | `YEDEK11` | varchar(250) | evet |  | NULL |
| 32 | `YEDEK12` | varchar(250) | evet |  | NULL |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, GIB_FATIRS_NO, FTIRSIP, FATIRS_NO, CARI_KODU
FROM dbo.TBLEFATURA WITH (NOLOCK);
```
