---
title: TBLMUHAREF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuharef/
---

# TBLMUHAREF

> REFERAND KODU KAYITLARINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GRUP_KOD` | varchar(15) | hayır |  | Referans kodu tanımlamaları ekranında girilen refreans kodunu gösterir. |
| 2 | `GRUP_ISIM` | varchar(50) | evet |  | Girilen referans kodunun açıklamasını gösterir. |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHAREF_PKEY` | `GRUP_KOD` |
| FOREIGN KEY | `TBLMUHAREF_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMUHAREF_FKEY2` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHAREF_IND_1` | `ISLETME_KODU+SUBE_KODU+GRUP_KOD` | Unique-Non-clustered |
| `TBLMUHAREF_PKEY` | `GRUP_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 GRUP_KOD, GRUP_ISIM, ISLETME_KODU, SUBE_KODU, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLMUHAREF WITH (NOLOCK);
```
