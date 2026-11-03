---
title: TBLSIPTTOP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsipttop/
---

# TBLSIPTTOP

> Açıklama yok.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 12

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Mamul,yarımamul,hammadde stok kodu bilgisi tutulur |
| 4 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 5 | `BAKIYE` | TDBFLOAT | evet | `0` | Bakiye tutarını atar. |
| 6 | `TIPI` | char(1) | evet |  | Default S değerini atar |
| 7 | `URM` | TDBFLOAT | evet | `0` | Üretim miktarını belirten sahadır. |
| 8 | `YAPKOD` | varchar(15) | evet | `NULL` | Stokların varsa esnek yapılandırma kodlarını gösterir. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSIPTTOP_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSIPTTOP_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSIPTTOPFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSIPTTOP_IDX_YAPKOD1` | `YAPKOD, STOK_KODU` | nonclustered |
| `TBLSIPTTOP_IND_1` | `SUBE_KODU, STOK_KODU, YAPKOD` | nonclustered, unique |
| `TBLSIPTTOPPKEYIDX` | `SUBE_KODU, STOK_KODU, YAPKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, STOK_KODU, MIKTAR, BAKIYE, TIPI
FROM dbo.TBLSIPTTOP WITH (NOLOCK);
```
