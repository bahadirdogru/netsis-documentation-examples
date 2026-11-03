---
title: TBLMUGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmugrup/
---

# TBLMUGRUP

> MUHASEBE>KAYIT>GRUP KODU KAYITLARI EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 4
- **Birincil anahtar:** `GRUP_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `GRUP_KOD` | varchar(8) | hayır |  | Grup kodunu gösterir. |
| 3 | `GRUP_ISIM` | varchar(50) | evet |  | Grup kodu ismini gösterir. |
| 4 | `INGILIZCE_ISIM` | varchar(50) | evet |  | Parametrik olarak aktif hale geçer ve ingilizce grup kodu isimlerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUGRUP_PKEY` | `GRUP_KOD` |
| FOREIGN KEY | `TBLMUGRUP_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUGRUP_IND_1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLMUGRUP_PKEY` | `GRUP_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, GRUP_KOD, GRUP_ISIM, INGILIZCE_ISIM
FROM dbo.TBLMUGRUP WITH (NOLOCK);
```
