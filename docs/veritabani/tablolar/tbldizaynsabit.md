---
title: TBLDIZAYNSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldizaynsabit/
---

# TBLDIZAYNSABIT

> KAYIT>DİZAYN EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [DİZAYN](/veritabani/moduller/dizayn/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `DIZAYNNO`
- **Identity:** `DIZAYNNO` (seed 1, artış 1)

## İlgili sayfalar

- [E-belge (NetOpenX COM)](/netopenx/e-belge/)
- [Basım (REST Print)](/rest/uclar/#basim-print)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIZAYNNO` | TDBINTEGER | hayır |  | İlk dizayndan itibaren sırayla artan unique değeri gösterir. Program tarafından otomatik olarak atılmaktadır |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `DIZAYNTIPI` | TDBINTEGER | hayır |  | Dizayn tipini gösterir. |
| 4 | `DZNADI` | varchar(8) | hayır |  | Dizayn adını gösterir. |
| 5 | `DZNACIK` | varchar(50) | evet |  | Dizayn açıklamasını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDIZAYNSABIT_PKEY` | `DIZAYNNO` |
| FOREIGN KEY | `TBLDIZAYNSABIT_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDIZAYNSABIT_FKEY2` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDIZAYNSABIT_IND_1` | `SUBE_KODU+DZNADI` | Unique, Non-clustered |
| `TBLDIZAYNSABIT_IND_2` | `SUBE_KODU+DIZAYNTIPI` | Non-unique, Non-clustered |
| `TBLDIZAYNSABIT_IND_3` | `SUBE_KODU` | Non-unique, Non-clustered |
| `TBLDIZAYNSABIT_PKEY` | `DIZAYNNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 DIZAYNNO, SUBE_KODU, DIZAYNTIPI, DZNADI, DZNACIK
FROM dbo.TBLDIZAYNSABIT WITH (NOLOCK);
```
