---
title: TBLKOSULEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosulek/
---

# TBLKOSULEK

> EK KOŞUL KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `KODTURU, KOD, BASLANGICTAR, KOSUL_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KODTURU` | TDBBYTE | hayır | `1` | Kod Türünü gösterir. |
| 2 | `KOD` | varchar(15) | hayır |  | Kodu gösterir. |
| 3 | `BASLANGICTAR` | TDBDATETIME | hayır |  | Başlangıç Tarihini gösterir. |
| 4 | `BITISTAR` | TDBDATETIME | evet |  | Bitiş Tarihini gösterir. |
| 5 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 6 | `KOSUL_KOD` | varchar(8) | hayır |  | Koşul Kodunu gösterir. |
| 7 | `HANGIBILGILER` | TDBBYTE | evet | `1` | Hangi Bilgiler bölümünde Genel Koşul1, Detay Koşul 2, Hepsi 3 değerini ifade etmektedir. |
| 8 | `ILAVESEKLI` | TDBBYTE | evet | `1` | Sıfır Değerler Dahil Üstüne Yaz parametresi işaretli ise 1, Sıfır Değerleri Değiştirmeden Üstüne Yaz parametresi işaretli ise 2, Eksi Gördüğün Değerleri Toplam Alırken Sıfırla parametresi işaretli ise 3, Normal Toplam Al parametresi işaretli ise 4 değerini alır. |
| 9 | `ISKTOPLAMSEKLI` | TDBBYTE | evet | `1` | İskonto Toplam Şekli Kademeli ise 1, Normal ise 2 değerini alır. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `CARIILISKI` | text | evet |  | Geçeri Cariler bölümünde yapılan kısıtlamaları gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSULEK_FKEY` | `KOSUL_KOD` |
| PRIMARY KEY | `TBLKOSULEK_PKEY` | `KODTURU, KOD, BASLANGICTAR, KOSUL_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSULEK_PKEY` | `KODTURU, KOD, BASLANGICTAR, KOSUL_KOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 KODTURU, KOD, BASLANGICTAR, BITISTAR, ACIKLAMA, KOSUL_KOD
FROM dbo.TBLKOSULEK WITH (NOLOCK);
```
