---
title: TBLCEKSENLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblceksenlog/
---

# TBLCEKSENLOG

> MUSTERI/BORC CEK/SENET HAREKETLERINI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 16
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TURU` | TDBBYTE | evet |  | Musteri ceki ise 1;Musteri senedi ise 2;borc ceki ise 3; borc senedi ise 4 degerini tutan sahadır. |
| 2 | `SC_NO` | varchar(15) | evet |  | Senet/cekin numarasini tutan sahadır. |
| 3 | `SC_YERI` | char(1) | evet |  | Senet/cekin yerini tutan sahadır. |
| 4 | `SC_SONDUR` | char(1) | evet |  | Senet/cekin son durumunu tutan sahadır. |
| 5 | `TARIH` | TDBDATETIME | evet |  | Hareketin tarihini tutar. |
| 6 | `KOD` | varchar(35) | evet |  | Cari kod bilgisini tutan sahadır. |
| 7 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `ISLEM` | TDBBYTE | evet |  | İslem kodunu tutan sahadır. |
| 9 | `SC_ALB_NO` | varchar(15) | evet |  | Alındı bordro numarasını tutan sahadır. |
| 10 | `SC_VERB_NO` | varchar(15) | evet |  | Verildi bordro numarasını tutan sahadır. |
| 11 | `DEVIR` | char(1) | evet |  |  |
| 12 | `SC_NEREDEN` | char(1) | evet |  | Çek senet için nereden işlem yapıldığı bilgisi yer alır. |
| 13 | `SC_NEREYE` | char(1) | evet |  | Çek senet için nereye gönderildiğinin işlem tipi yer alır. |
| 14 | `TUTAR` | TDBFLOAT | evet |  | tutar bilgisi yer alır. |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCEKSENLOG_IND1` | `TURU, SC_NO, TARIH, INCKEYNO` | Nonclustered, unique |
| `TBLCEKSENLOG_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 TURU, SC_NO, SC_YERI, SC_SONDUR, TARIH, KOD
FROM dbo.TBLCEKSENLOG WITH (NOLOCK);
```
