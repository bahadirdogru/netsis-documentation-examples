---
title: TBLTEMPHAIS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltemphais/
---

# TBLTEMPHAIS

> İŞ EMRİ GİRİŞİNDEN SONRA KAYITLARIN ATILDIĞI GEÇİCİ TABLODUR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 10
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | evet |  | Girilen iş emri tarihini gösterir. |
| 3 | `ISEMRINO` | varchar(15) | evet |  | Girilen iş emri numarasını gösterir. |
| 4 | `STOK_KODU` | TDBSTOKKOD | evet |  | İş emri içindeki stok kodunu gösterir. |
| 5 | `STOK_ISMI` | varchar(50) | evet |  | İş emri içindeki stok ismini gösterir. |
| 6 | `MAM_KODU` | TDBSTOKKOD | evet |  | İş emri içindeki mamül kodunu gösterir. |
| 7 | `MAM_ISMI` | varchar(50) | evet |  | İş emri içindeki mamül ismini gösterir. |
| 8 | `MIKTAR` | TDBFLOAT | evet |  | İş emri içindeki girilen stoğa ait miktar bilgisini gösterir. |
| 9 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `SARFEDILEN_MAMUL` | TDBSTOKKOD | evet |  | Sarfedilen mamülü gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTEMPHAIS_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLTEMPHAIS_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTEMPHAIS_IND_1` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLTEMPHAIS_IND_2` | `SUBE_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TARIH, ISEMRINO, STOK_KODU, STOK_ISMI, MAM_KODU
FROM dbo.TBLTEMPHAIS WITH (NOLOCK);
```
