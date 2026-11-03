---
title: TBLPOSAKTARILANLAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblposaktarilanlar/
---

# TBLPOSAKTARILANLAR

> POS MODÜLÜ>POS MAKİNASINDAN AKTARILAN KAYITLARI TUTAR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 12
- **Birincil anahtar:** `SUBE_KODU+DEPO_KODU+MAGAZANO+POSNO+KASIYERNO+TARIH+SAAT`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DEPO_KODU` | TDBSMALLINT | hayır | `0` | Stokların bulunduğu depo kodunu gösterir. |
| 3 | `MAGAZANO` | varchar(6) | hayır |  | Pos cihazının bulunduğu mağaza numarasını gösterir. |
| 4 | `POSNO` | varchar(6) | hayır |  | Pos numarasını gösterir. |
| 5 | `KASIYERNO` | varchar(8) | hayır |  | Mağazada bulunan pos cihaazını kullanan kasyer numarasını gösterir. |
| 6 | `TARIH` | TDBDATETIME | hayır |  | Pos cihazından aktarım tarihini gösterir. |
| 7 | `SAAT` | varchar(12) | hayır |  | Pos cihazından aktarım saatini gösterir. |
| 8 | `AKTARILDI` | TDBBYTE | evet | `0` | Pos cihazından stokların aktarılıp aktarılmadığını gösterir. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPOSAKTARILANLAR_PKEY` | `SUBE_KODU+DEPO_KODU+MAGAZANO+POSNO+KASIYERNO+TARIH+SAAT` |
| FOREIGN KEY | `TBLPOSAKTARILANLAR_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPOSAKTARILANLAR_IND_1` | `SUBE_KODU+DEPO_KODU+AKTARILDI` | Non-unique,Non-clustered |
| `TBLPOSAKTARILANLAR_IND_2` | `AKTARILDI` | Non-unique,Non-clustered |
| `TBLPOSAKTARILANLAR_PKEY` | `SUBE_KODU+DEPO_KODU+MAGAZANO+POSNO+KASIYERNO+TARIH+SAAT` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, DEPO_KODU, MAGAZANO, POSNO, KASIYERNO, TARIH
FROM dbo.TBLPOSAKTARILANLAR WITH (NOLOCK);
```
