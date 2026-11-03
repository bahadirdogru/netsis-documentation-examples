---
title: TBLCARIEMAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariemail/
---

# TBLCARIEMAIL

> CARI EPOSTA TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 37

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | E-posta kaydı yapılan cari kodu tutar. |
| 2 | `YETKILIKISI` | varchar(50) | evet |  | Yetkili kisi bilgisini tutar. |
| 3 | `UNVAN` | varchar(20) | evet |  | Unvan bilgisini tutar. |
| 4 | `DAHILITEL` | varchar(5) | evet |  | Dahili tel numarasını tutar. |
| 5 | `CEPTEL` | varchar(15) | evet |  | Cep tel numarasını tutar. |
| 6 | `ADRES` | varchar(50) | evet |  | Adres bilgisini tutar. |
| 7 | `ISLEMTIPI` | varchar(255) | evet |  | İslemlerde secilen islem tipini tutar. |
| 8 | `EMAIL` | varchar(1000) | hayır |  | Cari email bilgisini tutar. |
| 9 | `CCMAIL` | varchar(255) | evet |  | Cc posta adresini tutar. |
| 10 | `DUYURU_KOD` | varchar(8) | evet |  | Duyuru kodunu tutar. |
| 11 | `IL` | varchar(15) | evet |  | CRM den girilen il bilgisini tutar. |
| 12 | `ILCE` | varchar(15) | evet |  | CRM den girilen ilce bilgisini tutar. |
| 13 | `POSTAKODU` | varchar(8) | evet |  | CRM den girilen posta kodunu tutar. |
| 14 | `GOREV` | varchar(50) | evet |  | CRM den girilen gorev bilgisini tutar. |
| 15 | `TEL` | TDBTELFAX | evet |  | CRM den girilen telefon numarası bilgisini tutar. |
| 16 | `CRMDEN` | char(1) | evet |  | Cari eposta kaydı CRM irtibat bilgilerinden geliyor ise E degerini tutar. |
| 17 | `SMSISLEMTIPI` | varchar(255) | evet |  | SMS islem tiplerinden secilmis olan islem tiplerini tutar. |
| 18 | `DIZAYNBILGILERI` | text | evet |  | dizayn bilgileri yer alır. |
| 19 | `ULKETELKODU` | varchar(5) | evet |  |  |
| 20 | `RECID` | TDBINTEGER | hayır |  |  |
| 21 | `EKBILGI` | varchar(200) | evet |  | Ek bilgiler yer alır. |
| 22 | `AKTIF` | bit | evet |  | Aktif kolonu yer alır. |
| 23 | `CEPTEL2` | varchar(20) | evet |  | Cep tel numarasını 2 tutar. |
| 24 | `TEL2` | TDBTELFAX | evet |  | Telefon 2 bilgisi yer alır. |
| 25 | `ULKETEL2KODU` | varchar(5) | evet |  |  |
| 26 | `DAHILITEL2` | varchar(5) | evet |  | Dahili tel numarasını 2 tutar. |
| 27 | `DIREKTTEL` | TDBTELFAX | evet |  | Direkt tel bilgisini tutar. |
| 28 | `ULKEDIREKTTELKODU` | varchar(5) | evet |  |  |
| 29 | `OZELEMAIL` | varchar(70) | evet |  |  |
| 30 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `EMUTABAKATEMAIL` | varchar(255) | evet |  | E-mutabakat eposta adresleri yer alır. |
| 35 | `EKDOSYAISLEMTIPI` | varchar(255) | evet |  |  |
| 36 | `BAMUTABAKATEMAIL` | varchar(255) | evet |  | Ba e-mutabakat e-posta bilgisi yer alır. |
| 37 | `BSMUTABAKATEMAIL` | varchar(255) | evet |  | Bs e-mutabakat e-posta bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, YETKILIKISI, UNVAN, DAHILITEL, CEPTEL, ADRES
FROM dbo.TBLCARIEMAIL WITH (NOLOCK);
```
