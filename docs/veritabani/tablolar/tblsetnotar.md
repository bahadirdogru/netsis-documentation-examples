---
title: TBLSETNOTAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsetnotar/
---

# TBLSETNOTAR

> ÜRETİM>KAYIT>PLANLANAN BİLEŞEN DEĞİŞİKLİKLERİ EKRANINDA ÜST KISIMDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `REVNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REVNO` | varchar(8) | hayır |  | Reçeteler için planlanan değişikliğin takip edileceği revizyon numarasını gösterir. |
| 3 | `PLANLANAN_TARIH` | TDBDATETIME | evet |  | İlgili revizyon numarasıyla kaydedilen değişikliğin, yapılacağı tahmin edilen tarihi gösterir. |
| 4 | `KAYIT_TARIHI` | TDBDATETIME | evet | `getdate()` | Revizyon tarihini gösterir. |
| 5 | `GERCEKLESEN_TARIH` | TDBDATETIME | evet |  | İlgili revizyon numarası ile kaydedilen değişikliğin yapıldığı tarihi gösterir. |
| 6 | `ACIKLAMA` | TDBMEMO | evet |  | Kaydedilen revizyona ait açıklamayı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK__TBLSETNOTAR__10CB707D` | `REVNO` |
| FOREIGN KEY | `TBLSETNOTAR_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK__TBLSETNOTAR__10CB707D` | `REVNO` | Clustered |
| `TBLSETNOTAR_IND_1` | `ISLETME_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, REVNO, PLANLANAN_TARIH, KAYIT_TARIHI, GERCEKLESEN_TARIH, ACIKLAMA
FROM dbo.TBLSETNOTAR WITH (NOLOCK);
```
