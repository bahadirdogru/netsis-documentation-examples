---
title: TBLKALEMDETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkalemdetay/
---

# TBLKALEMDETAY

> Açıklama yok.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 52
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TABLOTIPI` | TDBSMALLINT | evet |  | Evrağın hangi sabit karta eklendiği bilgisini gösterir. (Stok Kart-1, Cari Kart-2 vb.) |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `REFINCKEYNO` | TDBINTEGER | evet |  | Referans inckeyno sunu tutar.TBLSTHAR-INCKEYNO |
| 5 | `STHAR_STISIM` | varchar(255) | evet |  | Stok isminin tutulduğu sahadır |
| 6 | `STHAR_GTIP` | varchar(20) | evet |  | Stok tipinin tutulduğu sahadır |
| 7 | `DIIBNO` | varchar(20) | evet |  | DIIB numarasını tutar |
| 8 | `STHAR_DOVNF` | TDBFLOAT | evet |  | Döviz net fiyat sahası |
| 9 | `STHAR_TEVKIFAT` | TDBFLOAT | evet |  |  |
| 10 | `STHAR_FOB` | TDBFLOAT | evet |  |  |
| 11 | `STHAR_CIF` | TDBFLOAT | evet |  |  |
| 12 | `STHAR_HESFIYAT1` | TDBFLOAT | evet |  |  |
| 13 | `STHAR_HESFIYAT2` | TDBFLOAT | evet |  |  |
| 14 | `BRUTKG` | TDBFLOAT | evet |  | Bürüt ağırlığı gösterir |
| 15 | `NETKG` | TDBFLOAT | evet |  | Net ağırlığı gösterir |
| 16 | `EKBILGI1` | varchar(255) | evet |  | Girilecek ek bilgi sahasıdır |
| 17 | `EKBILGI2` | varchar(255) | evet |  | Girilecek ek bilgi sahasıdır |
| 18 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 19 | `C_YEDEK3` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 20 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 21 | `C_YEDEK4` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 22 | `B_YEDEK1` | TDBBYTE | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 23 | `B_YEDEK2` | TDBBYTE | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 24 | `S_YEDEK1` | varchar(255) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 25 | `S_YEDEK2` | varchar(255) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 26 | `S_YEDEK3` | varchar(255) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 27 | `S_YEDEK4` | varchar(255) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 28 | `I_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 29 | `I_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 30 | `I_YEDEK3` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 31 | `I_YEDEK4` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 32 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 33 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 34 | `F_YEDEK3` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 35 | `F_YEDEK4` | TDBFLOAT | evet |  | Değişsin seçeneği tutulur |
| 36 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 37 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 38 | `D_YEDEK3` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 39 | `D_YEDEK4` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 40 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 43 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 44 | `KUNYENO` | varchar(50) | evet |  | Kalem bazında girilen künye no bilgisi yer alır. |
| 45 | `MALSAHIBI` | varchar(100) | evet |  | Kalem bazında girilen mal sahibi bilgisi yer alır. |
| 46 | `MALSAHIBITCKNO` | varchar(11) | evet |  | Kalem bazında girilen mal sahibi tckno/ vergi numarası bilgisi yer alır. |
| 47 | `GEKAPTUTAR` | TDBFLOAT | evet |  | Gekap tutarı yer alır. |
| 48 | `GEKAPAMBALAJTUTAR` | TDBFLOAT | evet |  | Gekap ambalaj tutarı yer alır. |
| 49 | `OTVTEVTUTAR` | TDBFLOAT | evet |  |  |
| 50 | `STOPAJORAN` | TDBFLOAT | evet |  | Kalem bazında girilen stopaj oran bilgisi yer alır. |
| 51 | `STOPAJTUTAR` | TDBFLOAT | evet |  | Kalem bazında girilen stopaj tutar bilgisi yer alır. |
| 52 | `STOKURS_INCKEYNO` | TDBINTEGER | evet |  | Inckey numarası bilgisi yer alır.Üretim sonu kayıtlarının TBLSTHAR da inckeyno bilgisinin de tutulması için TBLKALEMDETAY tablosuna STOKURS_INCKEYNO alanı eklenmiştir. Böylece aynı fiş üzerinden birden fazla mamul üretim kaydı yapılırken her mamul için STOKURS ve STHAR tablolarında inckeyno bilgisi tutulmuş olacaktır. |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TABLOTIPI, INCKEYNO, REFINCKEYNO, STHAR_STISIM, STHAR_GTIP
FROM dbo.TBLKALEMDETAY WITH (NOLOCK);
```
