---
title: TBLBARKODPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbarkodprm/
---

# TBLBARKODPRM

> STOKBAR ISLEMLERI-BARKOD PARAMETRELERINI TUTAN TABLODUR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BASAMAK1` | varchar(15) | evet |  | Barkod aralık alanını tutar. |
| 3 | `BASAMAK2` | varchar(15) | evet |  | Barkod aralık alanını tutar. |
| 4 | `TURKCE_1` | char(1) | evet |  | Turkce karakter-1(Ü-Ç-Ö) parametresi isaretli ise E degerini tutan sahadır. |
| 5 | `TURKCE_2` | char(1) | evet |  | Turkce karakter-1(İ-Ş-Ğ-ı) parametresi isaretli ise E degerini tutan sahadır. |
| 6 | `ISBN` | char(1) | evet |  | ISBN uygulaması parametresi isaretli ise E degerini tutan sahadır. |
| 7 | `EAN13` | char(1) | evet |  | Barkod bilgisi 12 digit alınsın parametresi isaretli ise E degerini tutan sahadır. |
| 8 | `YEDEK1` | char(1) | evet |  | Birim agırlık 0 ise fiyat yazma parametresi isaretli ise E degerini tutan sahadır. |
| 9 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK5` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK6` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK7` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBARKODPRM_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBARKODPRM_PKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBARKODPRM_PKEY` | `ISLETME_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BASAMAK1, BASAMAK2, TURKCE_1, TURKCE_2, ISBN
FROM dbo.TBLBARKODPRM WITH (NOLOCK);
```
