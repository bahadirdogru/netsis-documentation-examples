---
title: TBLCRMSABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmsablon/
---

# TBLCRMSABLON

> SABLON HAZIRLAMADAN GIRILEN KAYITLARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `SABLONKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SABLONKOD` | TDBGRUPKOD | hayır |  | Tanımlanan sablona ait kodu tutar. |
| 3 | `SABLONISIM` | varchar(100) | evet |  | Tanımlanan sablona ait ismi tutar. |
| 4 | `SABLON_DATA` | TDBMEMO | evet |  | Hazırlanan metni tutar. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `SABLON_TIPI` | TDBSMALLINT | evet |  | Şablon tipinin tutulduğu datadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSABLON_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMSABLON_PKEY` | `SABLONKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSABLON_IND_1` | `SUBE_KODU, SABLONKOD` | Nonclustered, Unique |
| `TBLCRMSABLON_PKEY` | `SABLONKOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SABLONKOD, SABLONISIM, SABLON_DATA, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLCRMSABLON WITH (NOLOCK);
```
