---
title: TBLBFORMU
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbformu/
---

# TBLBFORMU

> B FORMU KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ALISSATIS` | char(1) | hayır |  | Tip alıs faturaları ise A; satıs faturaları ise S degerini tutar. |
| 4 | `SIRANO` | TDBSMALLINT | hayır | `0` | Sıra no bilgisini tutan sahadır. |
| 5 | `UNVAN` | varchar(100) | hayır |  | Faturanın kesildigi carinin ismini tutan sahadır. |
| 6 | `ULKEKODU` | varchar(4) | hayır |  | Ulke kodunu tutan sahadır. |
| 7 | `VERGINUMARASI` | varchar(15) | hayır |  | Carinin vergi numarasını tutan sahadır. |
| 8 | `BELGESAYISI` | TDBINTEGER | hayır | `0` | Raporda listelenen cari hesaba ait kayıt sayısını tutan sahadır. |
| 9 | `TUTAR` | TDBFLOAT | hayır | `0` | Cariye ait toplam tutar sahasıdır. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `TCKIMLIKNO` | varchar(15) | evet |  | Carinin TC kimlik numarasıdır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBFORMU_FKEY1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBFORMU_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBFORMU_IND_1` | `INCKEYNO` | Nonclustered, unique |
| `TBLBFORMU_IND_2` | `ISLETME_KODU, ALISSATIS, UNVAN` | Nonclustered, unique |
| `TBLBFORMU_IND_3` | `ISLETME_KODU, ALISSATIS, SIRANO` | Nonclustered, unique |
| `TBLBFORMU_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, ALISSATIS, SIRANO, UNVAN, ULKEKODU
FROM dbo.TBLBFORMU WITH (NOLOCK);
```
