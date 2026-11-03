---
title: TBLBNKODEEMIR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkodeemir/
---

# TBLBNKODEEMIR

> ODEME EMIRLERI SORGULA SAYFASINDAKI KAYITLARI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SATICI_KOD` | TDBCARIKOD | evet |  | Satıcı kodu sahasıdır. |
| 2 | `FATNO` | TDBBELGENO | evet |  | Belge numarasıdır. |
| 3 | `BANKA_KODU` | varchar(15) | evet |  | Banka kodunu tutar. |
| 4 | `TUTAR` | TDBFLOAT | evet | `0` | Tutar sahasıdır. |
| 5 | `ONAY` | char(1) | evet |  | Onay sahasıdır,odeme emri onaylanmıs ise E degerini tutar. |
| 6 | `FATTARIH` | TDBDATETIME | evet |  | Belgenin tarihidir. |
| 7 | `REFNO` | TDBREFKOD | evet |  | Referans numarası sahasıdır. |
| 8 | `ISKO_TUT` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 9 | `CEKNO` | varchar(15) | evet |  | Cek numarasının tutuldugu sahadır. |
| 10 | `VTARIH` | TDBDATETIME | evet |  | Vade tarihidir. |
| 11 | `TIP` | char(1) | evet |  | Cari hesap tipine göre değişimini gösteren sahadır. |
| 12 | `INCKEYNO` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `CH` | char(1) | evet | `('H')` | Cari ödeme tipine göre değişimini gösteren sahadır. |
| 14 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `TCMBBANKAKODU` | varchar(10) | evet |  | TCMB Banka kodu sahasıdır. |
| 17 | `TCMBSUBEKODU` | varchar(10) | evet |  | TCMB Sube kodu sahasıdır. |
| 18 | `BANKAHESNO` | varchar(30) | evet |  | Banka hesap kodunu tutan sahadır. |
| 19 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `BNKREFKEY` | TDBINTEGER | evet |  | Ödeme emirlerinde yer alan INCKEYNO bilgisi tutulmaktadır. |
| 21 | `STATUS` | char(1) | evet |  | Durum kodunu tutar. |
| 22 | `GONDERILDI` | char(1) | evet | `('H')` | Gonderildi ise E degerini tutan sahadır. |
| 23 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 24 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |
| 25 | `IBANNO` | varchar(30) | evet |  | İban numarası bilgisi yer alır. |
| 26 | `DEKONTNO` | varchar(50) | evet |  | Dekont numarası bligisi yer alır. |
| 27 | `ACIKLAMA` | varchar(100) | evet |  | açıklama bilgisi yer alır. |
| 28 | `BELGETURU` | varchar(50) | evet |  | Belge türü bilgisi yer alır. |
| 29 | `REFERANS` | varchar(15) | evet |  | Referans numarası sahasıdır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKODEEMIR_IND_1` | `SUBE_KODU, CH, SATICI_KOD, STATUS` | Nonclustered |
| `TBLBNKODEEMIR_IND_2` | `SUBE_KODU, CH, BANKA_KODU, STATUS` | Nonclustered |
| `TBLBNKODEEMIR_IND_3` | `INCKEYNO` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 SATICI_KOD, FATNO, BANKA_KODU, TUTAR, ONAY, FATTARIH
FROM dbo.TBLBNKODEEMIR WITH (NOLOCK);
```
