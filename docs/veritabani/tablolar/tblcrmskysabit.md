---
title: TBLCRMSKYSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskysabit/
---

# TBLCRMSKYSABIT

> MUSTERI SIKAYET KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `SIKAYET_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SIKAYET_KODU` | TDBSIKAYETKOD | hayır |  | Sikayet kodunu tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 4 | `SIKAYET_TARIHI` | TDBDATETIME | evet | `getdate()` | Sikayetin musteriden geldigi tarihi tutar. |
| 5 | `KONU` | varchar(100) | evet |  | Sikayet konusunu tutar. |
| 6 | `ACIKLAMA` | text | evet |  | Sikayetin detaylı acıklamasını tutar. |
| 7 | `DURUMU` | char(1) | evet | `A` | Sikayet Acık ise A; Kapalı ise K degerini alır. |
| 8 | `KAPANIS_TARIHI` | TDBDATETIME | evet |  | Sikayetin kapandigi tarihi tutar. |
| 9 | `KAPANIS_ACIKLAMA` | text | evet |  | Kapanısta girilen aciklamayi tutar. |
| 10 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodunu tutar. |
| 11 | `GRUP_KOD` | TDBSTOKKOD | evet |  | Sikayet grup kodunu tutar. |
| 12 | `SIKAYET_SAHIBI` | TDBSMALLINT | hayır |  | Sikayet kaydını yapan crm kullanıcısı. |
| 13 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYSABIT_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMSKYSABIT_FKEY2` | `CARI_KOD` |
| FOREIGN KEY | `TBLCRMSKYSABIT_FKEY3` | `PROJE_KODU` |
| FOREIGN KEY | `TBLCRMSKYSABIT_FKEY4` | `GRUP_KOD` |
| FOREIGN KEY | `TBLCRMSKYSABIT_FKEY5` | `SUBE_KODU, SIKAYET_SAHIBI` |
| PRIMARY KEY | `TBLCRMSKYSABIT_PKEY` | `SIKAYET_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYSABIT_IND_1` | `SUBE_KODU, CARI_KOD, DURUMU` | Nonclustered |
| `TBLCRMSKYSABIT_IND_2` | `SUBE_KODU, SIKAYET_TARIHI, DURUMU` | Nonclustered |
| `TBLCRMSKYSABIT_IND_3` | `SUBE_KODU, CARI_KOD, KONU` | Nonclustered |
| `TBLCRMSKYSABIT_IND_4` | `SUBE_KODU, GRUP_KOD, DURUMU, SIKAYET_TARIHI` | Nonclustered |
| `TBLCRMSKYSABIT_IND_5` | `SUBE_KODU, PROJE_KODU, DURUMU, SIKAYET_TARIHI` | Nonclustered |
| `TBLCRMSKYSABIT_IND_6` | `SUBE_KODU, ONAYTIPI` | Nonclustered |
| `TBLCRMSKYSABIT_IND_7` | `SUBE_KODU, ONAYNUM` | Nonclustered |
| `TBLCRMSKYSABIT_PKEY` | `SIKAYET_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SIKAYET_KODU, SUBE_KODU, CARI_KOD, SIKAYET_TARIHI, KONU, ACIKLAMA
FROM dbo.TBLCRMSKYSABIT WITH (NOLOCK);
```
