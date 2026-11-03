---
title: TBLBKMSB
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsb/
---

# TBLBKMSB

> BAKIM SABLONLARI BAKIM BILGILERININ TUTULDUGU TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `BKMKODU` | varchar(35) | hayır |  | Bakım kodunu tutar. |
| 5 | `BKMADI` | varchar(50) | evet |  | Tanımlanan bakım adını tutar. |
| 6 | `GRUPKODU` | TDBGRUPKOD | evet |  | Grup kodunu tutar. |
| 7 | `BKMTIPI` | TDBSMALLINT | hayır | `0` | Bakım tipini tutar. |
| 8 | `PLANLANACAK` | char(1) | hayır | `NULL` | Planlanacak parametresi isaretli ise E degerini tutar. |
| 9 | `ARIZAKODU` | varchar(8) | evet |  | Arıza kodunu tutar.Bakım tipi, 3 yada 4 oldugunda aktif gelen alandır. |
| 10 | `HIZMETMI` | char(1) | hayır | `NULL` | Dısarıdan hizmet parametresi isaretli ise E degerini tutar. |
| 11 | `AKTIF` | char(1) | hayır | `NULL` | Aktif parametresi isaretli ise E degerini tutar. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `ACIKLAMA` | varchar(150) | evet |  | Açıklama bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMSB_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBKMSB_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBKMSB_FKEY3` | `ARIZAKODU` |
| PRIMARY KEY | `TBLBKMSB_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSB_IND_1` | `BKMKODU` | nonclustered, unique |
| `TBLBKMSB_IND_2` | `ISLETME_KODU, SUBE_KODU, BKMKODU` | nonclustered |
| `TBLBKMSB_IND_3` | `PLANLANACAK` | nonclustered |
| `TBLBKMSB_IND_4` | `INCKEYNO, PLANLANACAK, AKTIF` | nonclustered |
| `TBLBKMSB_PK` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, BKMKODU, BKMADI, GRUPKODU
FROM dbo.TBLBKMSB WITH (NOLOCK);
```
