---
title: TBLKAPASITE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkapasite/
---

# TBLKAPASITE

> KAPASİTE PLANLAMA ÇALIŞTIRILDIĞINDA İŞ İSTASYONLARINA İLİŞKİN KAPASİTE DEĞERLERİ BU TABLODA TUTULUR

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 10

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MAMULKODU` | TDBSTOKKOD | hayır |  | Mamul kodu bilgisi |
| 2 | `SIPNO` | TDBBELGENO | evet | `0` | Sipariş no'su |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Kapasite planlama tarihi |
| 4 | `ISTKODU` | varchar(5) | hayır |  | İstasyon kodu |
| 5 | `TURU` | char(1) | evet | `I` | Mamuller için M yarımamüller için YM bilgisi tutulur |
| 6 | `OPKODU` | varchar(35) | hayır |  | Operasyon kodu |
| 7 | `OPMIK` | TDBFLOAT | evet | `0` | Oerasyona ilişkin miktar bilgisi |
| 8 | `TOPSURE` | TDBFLOAT | evet | `0` | Toplam süre |
| 9 | `OPNO` | varchar(8) | hayır |  | Oerasyon numarası |
| 10 | `YAPKOD` | varchar(15) | evet | `NULL` | Yapılandırma kodu |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKAPASITE_FKEY` | `MAMULKODU` |
| FOREIGN KEY | `TBLKAPASITE_FKEY1` | `OPKODU` |
| FOREIGN KEY | `TBLKAPASITEYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKAPASITE_IDX_YAPKOD1` | `YAPKOD, MAMULKODU` | Duplicate |
| `TBLKAPASITE_IND1` | `MAMULKODU, SIPNO, TARIH, ISTKODU, TURU, OPKODU, OPNO, YAPKOD` | Unique |

## Örnek sorgu

```sql
SELECT TOP 100 MAMULKODU, SIPNO, TARIH, ISTKODU, TURU, OPKODU
FROM dbo.TBLKAPASITE WITH (NOLOCK);
```
