---
title: TBLSTOKBIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokbil/
---

# TBLSTOKBIL

> STOK KARTINDA STOK BİLGİSİ SEKMESİNDE YAZILANLARI TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSTOKKOD | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BILGI` | TDBMEMO | evet |  | Stok kartında stok bilgisi sekmesinde stok ile ilgili ekstra yazılan bilgileri tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKBILPKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKBIL_FKEY` | `STOK_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKBIL_IND` | `STOK_KODU` | Unique, Non-clustered |
| `TBLSTOKBILPKEY` | `STOK_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BILGI
FROM dbo.TBLSTOKBIL WITH (NOLOCK);
```
