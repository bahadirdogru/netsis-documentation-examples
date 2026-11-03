---
title: TBLENETKULRAP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblenetkulrap/
---

# TBLENETKULRAP

> E-NETSIS SERBEST RAPORLARDA HAZIRLANAN RAPORLARIN KULLANICI BAZINDA ULAŞIM YETKİ TANIMLAMALARINI TUTAR.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `SUBE_KODU+KULLANICI_NO+DOSYAADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Rapor hak tanımlaması yapılacak olan kullanıcıya ait numara bilgisini gösterir. |
| 3 | `DOSYAADI` | varchar(255) | hayır |  | Hak tanımlaması yapılacak olan raporun adını gösterir. |
| 4 | `ERISIM` | char(1) | hayır | `E` | Belirlenen dosyaya kullanıcının erişimi için işaretlenmesi gereken sahadır. |
| 5 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `ENETKULRAP_PKEY` | `SUBE_KODU+KULLANICI_NO+DOSYAADI` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `ENETKULRAP_PKEY` | `SUBE_KODU+KULLANICI_NO+DOSYAADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICI_NO, DOSYAADI, ERISIM, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLENETKULRAP WITH (NOLOCK);
```
