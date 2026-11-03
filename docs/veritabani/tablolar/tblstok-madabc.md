---
title: TBLSTOK_MADABC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstok-madabc/
---

# TBLSTOK_MADABC

> STOK>İŞLEMLER>NETSİS SİPARİŞ ÖNERİSİ>OKM/ABC İZLEME EKRANINA GİRİLEN KAYITLARI TUTAR. Ortalama kullanım miktarı hesaplama ve ABC analizlerinin çalıştırılması ile oluşur.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Stokların bulunduğu lokal depoyu gösterir. |
| 5 | `MAD` | TDBFLOAT | evet | `0` | Hesaplamalar sonucu bulunan ortalama kullanım miktarını gösterir. |
| 6 | `ABC_KODU` | varchar(8) | evet |  | Hesaplamalar sonucu bulunan ABC önem kodlarını gösterir. |
| 7 | `ASGARI_STOK` | TDBFLOAT | evet | `0` | Asgari stok bilgisini gösterir. |
| 8 | `AZAMI_STOK` | TDBFLOAT | evet | `0` | Azami stok bilgisini gösterir. |
| 9 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOK_MADABC_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSTOK_MADABC_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSTOK_MADABCYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOK_MADABC_1` | `SUBE_KODU+STOK_KODU+DEPO_KODU` | Non-unique, Non-Clustered |
| `TBLSTOK_MADABC_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTOK_MADABC_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, STOK_KODU, SUBE_KODU, DEPO_KODU, MAD, ABC_KODU
FROM dbo.TBLSTOK_MADABC WITH (NOLOCK);
```
