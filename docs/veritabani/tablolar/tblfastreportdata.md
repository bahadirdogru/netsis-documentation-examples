---
title: TBLFASTREPORTDATA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfastreportdata/
---

# TBLFASTREPORTDATA

> Açıklama yok.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `DIZAYNID, DATAVIEW`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIZAYNID` | TDBINTEGER | hayır |  | Dizayn no'su bilgisidir. |
| 2 | `DATAVIEW` | varchar(50) | hayır |  | Görsel dizayn modülünde geçen view adı |
| 3 | `ORDERBY` | varchar(50) | evet |  | Basılacak bilginin sıralamasını simgeler |
| 4 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 5 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 6 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 7 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 8 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 9 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLFASTREPORTDATA_FKEY1` | `DIZAYNID` |
| PRIMARY KEY | `TBLFASTREPORTDATA_PKEY` | `DIZAYNID, DATAVIEW` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFASTREPORTDATA_PKEY` | `DIZAYNID, DATAVIEW` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 DIZAYNID, DATAVIEW, ORDERBY, C_YEDEK1, C_YEDEK2, D_YEDEK1
FROM dbo.TBLFASTREPORTDATA WITH (NOLOCK);
```
