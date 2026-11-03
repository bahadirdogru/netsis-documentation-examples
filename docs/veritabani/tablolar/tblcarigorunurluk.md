---
title: TBLCARIGORUNURLUK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarigorunurluk/
---

# TBLCARIGORUNURLUK

> Açıklama yok.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 1
- **Birincil anahtar:** `CARI_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Her müşterinin deposunu lokal depo olarak tanımlayarak takip etmek isteyenler için cari kodunun girileceği sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLCARIGORUNURLUK_PKEY` | `CARI_KODU` |
| FOREIGN KEY | `TBLCARIGORUNURLUK_FKEY1` | `CARI_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIGORUNURLUK_PKEY` | `CARI_KODU` | clustered, unique, |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU
FROM dbo.TBLCARIGORUNURLUK WITH (NOLOCK);
```
