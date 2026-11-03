---
title: TBLEFATPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatprm/
---

# TBLEFATPRM

> E-fatura parametreleri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 20

## İlgili sayfalar

- [E-belge (NetOpenX COM)](/netopenx/e-belge/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır |
| 3 | `SERTIFIKASERINO` | varchar(50) | evet |  | NULL |
| 4 | `EFATENTEG` | varchar(1) | evet |  | Efatura uygulaması kullanılsın işaretli ise E değerini alır. |
| 5 | `PATH` | varchar(200) | evet |  | Gelen giden dizin bilgisi yer alır. |
| 6 | `BIRIMKOD` | varchar(3) | evet |  | Belge birim kod bilgisi yer alır. |
| 7 | `BIRIMETIKET` | varchar(200) | evet |  | Gönderici birim etiketi bilgisi yer alır. |
| 8 | `COKLUBIRIM` | char(1) | evet |  | Çokul ölçü birimi kullanılsın işaretli ise E değerini alır. |
| 9 | `EFATTEVKOD` | TDBINTEGER | evet |  | Efatura tevkifat kodu bilgisi yer alır. |
| 10 | `UBLVERSION` | TDBBYTE | evet |  | UBL Versiyon bilgisi yer alır. |
| 11 | `IHRACAT` | char(1) | evet |  | İhracat efatura uygulaması kullanılıyor ise E değerini alır. |
| 12 | `CHGPROFILEID` | char(1) | evet |  | Belge bazlı efatura senaryo seçimi parametresidir. |
| 13 | `IRSALIYE` | char(1) | evet |  | E-irsaliye parametresidir. |
| 14 | `ESLFATGOSTERME` | char(1) | evet |  | E-Fatura Eşleştirme Ekranı Fatura Girişinde Gösterilmesin parametresi tutulur. |
| 15 | `ESLDEKGOSTERME` | char(1) | evet |  | E-Fatura Eşleştirme Ekranı Dekont Kaydında Gösterilmesin parametresi tutulur. |
| 16 | `ALIASSEC` | char(1) | evet |  | Cari etiket bilgisi seçilebilsin parametresi yer alır. |
| 17 | `HARICIFATSIL` | char(1) | evet |  | Harici yolla yapılan iptallerde fatura 8 gün içerisinde silinebilsin. |
| 18 | `IRSBIRIMETIKET` | varchar(200) | evet |  | İrsaliye gönderici birim etiketi bilgisi yer alır. |
| 19 | `CARISABLON` | char(1) | evet |  | Carideki e-irsaliye ek bilgi şablonu kullanılsın parametresi yer alır. |
| 20 | `IRSKABUL` | char(1) | evet |  | Kabul yanıtı gelmeyen irsaliyeler faturalaştırılmasın |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, SERTIFIKASERINO, EFATENTEG, PATH, BIRIMKOD
FROM dbo.TBLEFATPRM WITH (NOLOCK);
```
