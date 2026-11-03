---
title: TBLDETANAL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldetanal/
---

# TBLDETANAL

> DETAYLI MAL/MÜŞTERİ İSKONTO ANALIZ TABLOSUDUR

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | evet |  | Stok_kodu bilgisi tutulur |
| 2 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kod bilgisi tutulur |
| 3 | `GRUP_KODU` | varchar(35) | evet |  | Carinin grup kodu bilgisidir |
| 4 | `SATMIK` | TDBFLOAT | evet | `0` | Satış miktarını gösterir. |
| 5 | `BSATTUT` | TDBFLOAT | evet | `0` | Brüt satış tutarıdır |
| 6 | `NSATTUT` | TDBFLOAT | evet | `0` | Net satış tutarıdır. |
| 7 | `SMALFTUT` | TDBFLOAT | evet | `0` | Satış mal fazlası tutarı |
| 8 | `SSATTUT` | TDBFLOAT | evet | `0` | Satış iskonto tutarı |
| 9 | `SFATALT1` | TDBFLOAT | evet | `0` | Satış fatura altı iskonto1 tutarı |
| 10 | `SFATALT2` | TDBFLOAT | evet | `0` | Satış fatura altı iskonto2 tutarı |
| 11 | `SFATALT3` | TDBFLOAT | evet | `0` | Satış fatura altı iskonto3 tutarı |
| 12 | `ALMIK` | TDBFLOAT | evet | `0` | Alış miktar bilgisi |
| 13 | `BALTUT` | TDBFLOAT | evet | `0` | Brüt alış tutarı |
| 14 | `NALTUT` | TDBFLOAT | evet | `0` | Net alış tutar |
| 15 | `AMALFTUT` | TDBFLOAT | evet | `0` | Alış mal fazlası iskonto tutarı |
| 16 | `ASATTUT` | TDBFLOAT | evet | `0` | Alış iskonto tutarı |
| 17 | `AFATALT1` | TDBFLOAT | evet | `0` | Alış fatura altı iskonto1 tutarı |
| 18 | `AFATALT2` | TDBFLOAT | evet | `0` | Alış fatura altı iskonto2 tutarı |
| 19 | `AFATALT3` | TDBFLOAT | evet | `0` | Alış fatura altı iskonto3 tutarı |
| 20 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `STGRUP` | TDBGRUPKOD | evet |  | Stok grup kodunu gösterir. |
| 22 | `IL` | varchar(15) | evet |  | Cari ili gösterir. |
| 23 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(25) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDETANAL_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `DETANAL_IND` | `STOK_KODU, YAPKOD, CARI_KOD, GRUP_KODU, SUBE_KODU` | Unique |
| `TBLDETANAL_IDX_YAPKOD1` | `YAPKOD, STOK_KODU` | Duplicate |
| `TBLDETANAL_IND_2` | `SUBE_KODU, STGRUP, STOK_KODU` | Duplicate |
| `TBLDETANAL_IND_3` | `CARI_KOD, STGRUP, STOK_KODU` | Duplicate |
| `TBLDETANAL_IND_4` | `IL, STGRUP, STOK_KODU` | Duplicate |
| `TBLDETANAL_IND_5` | `GRUP_KODU, STGRUP, STOK_KODU` | Duplicate |
| `TBLDETANAL_IND_6` | `STGRUP, STOK_KODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, CARI_KOD, GRUP_KODU, SATMIK, BSATTUT, NSATTUT
FROM dbo.TBLDETANAL WITH (NOLOCK);
```
