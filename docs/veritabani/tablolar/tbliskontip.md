---
title: TBLISKONTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbliskontip/
---

# TBLISKONTIP

> KAYIT>KOŞUL KAYITLARI>İSKONTO TİP KAYITLARI EKRANINDA GİRİLEN GÖSTERİR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `ISKONTOTIP`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISKONTOTIP` | TDBSMALLINT | hayır |  | Kullanıcı tarafından tanımlanan iskonto tipini gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Tanımlanan iskonto tipine ait açıklamayı gösterir. |
| 4 | `MUHASEBEKODU` | TDBMUHKOD | evet |  | İlgili iskonto tipine ait muhasebe kodunu gösterir. |
| 5 | `KAYITTAR` | TDBDATETIME | evet | `GETDATE()` | tanımlanan iskonto tipinin kayıt tarihini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLISKONTIP_PKEY` | `ISKONTOTIP` |
| FOREIGN KEY | `TBLISKONTIP_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISKONTIP_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLISKONTIP_PKEY` | `ISKONTOTIP` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ISKONTOTIP, ACIKLAMA, MUHASEBEKODU, KAYITTAR
FROM dbo.TBLISKONTIP WITH (NOLOCK);
```
