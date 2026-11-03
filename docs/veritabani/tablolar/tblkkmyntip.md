---
title: TBLKKMYNTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkmyntip/
---

# TBLKKMYNTIP

> MUAYENE TİPİ TANIMLARI KAYITLARINI TUTAR

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `MYNKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MYNKODU` | varchar(8) | hayır |  | Muayene Kodunu gösterir. |
| 3 | `MYNADI` | varchar(50) | evet |  | Muayene Adını gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKMYNTIP_PKEY` | `MYNKODU` |
| FOREIGN KEY | `TBLKKMYNTIP_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKMYNTIP_PKEY` | `MYNKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MYNKODU, MYNADI, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLKKMYNTIP WITH (NOLOCK);
```
