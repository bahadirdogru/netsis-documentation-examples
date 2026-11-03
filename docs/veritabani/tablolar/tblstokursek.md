---
title: TBLSTOKURSEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokursek/
---

# TBLSTOKURSEK

> ÜRETİM>KAYIT>ÜRETİM SONU KAYDINDA KULLANICI TANIMLI SAHALARDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `INCKEYNOEK`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SERI` | char(1) | evet |  | İş emirleri ve üretim sonu fişlerinin serilerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKURSEK_PKEY` | `INCKEYNOEK` |
| FOREIGN KEY | `TBLSTOKURSEK_FKEY1` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKURSEK_PKEY` | `INCKEYNOEK` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERI
FROM dbo.TBLSTOKURSEK WITH (NOLOCK);
```
