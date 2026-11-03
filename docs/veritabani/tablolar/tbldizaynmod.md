---
title: TBLDIZAYNMOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldizaynmod/
---

# TBLDIZAYNMOD

> KAYIT>MODÜL DİZAYNLARI EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [DİZAYN](/veritabani/moduller/dizayn/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MODULID` | TDBBYTE | hayır | `0` | Modül adı bilgisini gösterir. |
| 3 | `DIZAYNADI` | varchar(8) | hayır |  | Dizayn adını gösterir. |
| 4 | `SORULSUN` | TDBBYTE | evet |  | Sorulsun mu parametresini gösterir. İlgili modüllerden yapılan kayıtlarda Dizayn Adı’nın sorgulanması için bu sahanın Evet olarak işaretlenmesi gereklidir. |
| 5 | `LOGTUTULSUN` | char(1) | evet | `H` | Log tutulsun parametresini gösterir. İşaretli ise 'E'+değilse 'H' değerini gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDIZAYNMOD_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDIZAYNMOD_FKEY` | `SUBE_KODU+MODULID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDIZAYNMOD_IND_1` | `DIZAYNADI` | Non-unique, Non-clustered |
| `TBLDIZAYNMOD_PKEY` | `SUBE_KODU+MODULID` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, MODULID, DIZAYNADI, SORULSUN, LOGTUTULSUN, KAYITYAPANKUL
FROM dbo.TBLDIZAYNMOD WITH (NOLOCK);
```
