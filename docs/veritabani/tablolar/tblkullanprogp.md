---
title: TBLKULLANPROGP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkullanprogp/
---

# TBLKULLANPROGP

> KULLANICI PROGRAM YETKILERINI TUTAN SAHADIR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `SUBE_KODU, KULLANICI_NO, MODUL_NO, PROGRAM_NO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı kodunu tutan sahadır. |
| 3 | `MODUL_NO` | TDBINTEGER | hayır |  | Yetki tanımlaması yapılacak modul numarasını tutan sahadır. |
| 4 | `PROGRAM_NO` | TDBSMALLINT | hayır |  | Yetki tanımlaması yapılacak program numarasını tutan sahadır. |
| 5 | `SORGU` | char(1) | evet |  | Sorgulama/izleme yetkisi tanımlanmıs ise E degerini tutar. |
| 6 | `KAYIT` | char(1) | evet |  | Kayıt yapma yetkisi tanımlanmıs ise E degerini tutar. |
| 7 | `DUZELTME` | char(1) | evet |  | Duzeltme yetkisi tanımlanmıs ise E degerini tutar. |
| 8 | `SILME` | char(1) | evet |  | Silme yetkisi tanımlanmıs ise E degerini tutar. |
| 9 | `YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `TRH_KILIT_GUNGECMIS` | TDBINTEGER | hayır |  | Dinamik tarih aralığı için girilen geçmiş gün bilgisidir. |
| 20 | `TRH_KILIT_GUNGELECEK` | TDBINTEGER | hayır |  | Dinamik tarih aralığı için girilen gelecek gün bilgisidir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKULLANPROGP_FKEY` | `SUBE_KODU, KULLANICI_NO, MODUL_NO` |
| FOREIGN KEY | `TBLKULLANPROGP_FKEY1` | `SUBE_KODU` |
| PRIMARY KEY | `TBLKULLANPROGP_PKEY` | `SUBE_KODU, KULLANICI_NO, MODUL_NO, PROGRAM_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKULLANPROGP_PKEY` | `SUBE_KODU, KULLANICI_NO, MODUL_NO, PROGRAM_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICI_NO, MODUL_NO, PROGRAM_NO, SORGU, KAYIT
FROM dbo.TBLKULLANPROGP WITH (NOLOCK);
```
