---
title: TBLCRMFORECAST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmforecast/
---

# TBLCRMFORECAST

> MONITORING SATIS TAHMINI BILGILERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 32

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CRMKULKOD` | varchar(35) | evet |  | Satış elemanının kodunu tutar. |
| 2 | `ENKOTU` | TDBFLOAT | evet | `0` | En kotu tahmini tutar. |
| 3 | `ENIYI` | TDBFLOAT | evet | `0` | En iyi satıs tahmini tutar. |
| 4 | `TAHMIN` | TDBFLOAT | evet | `0` | Tahmini tutar. |
| 5 | `HEDEF` | TDBFLOAT | evet | `0` | Yıllık hedefi tutar. |
| 6 | `TOPLAM` | TDBFLOAT | evet | `0` | Fırsat toplamını tutar. |
| 7 | `AGIRTOPLAM` | TDBFLOAT | evet | `0` | Fırsat ağırlıklı toplam bilgilerini tutar. |
| 8 | `GERCEKLESEN` | TDBFLOAT | evet | `0` | Gerçekleşen bilgisini tutar. |
| 9 | `DONEMTIP` | char(1) | evet |  | Tahmin girisi yapılan donemi tutar. |
| 10 | `DONEMBAS` | TDBDATETIME | evet |  | Donem baslangıc tarihini tutar. |
| 11 | `DONEMBIT` | TDBDATETIME | evet |  | Donem bitis tarihini tutar. |
| 12 | `GONTARIH` | TDBDATETIME | evet |  | En iyi,tahmin ve en kotu tahminlerinin kaydedildigi tarih. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `V_YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `V_YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMFORECAST_IND_1` | `CRMKULKOD, GONTARIH` | Nonclustered |
| `TBLCRMFORECAST_IND_2` | `CRMKULKOD, DONEMTIP, DONEMBAS, DONEMBIT, GONTARIH` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 CRMKULKOD, ENKOTU, ENIYI, TAHMIN, HEDEF, TOPLAM
FROM dbo.TBLCRMFORECAST WITH (NOLOCK);
```
