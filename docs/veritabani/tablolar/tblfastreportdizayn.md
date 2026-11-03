---
title: TBLFASTREPORTDIZAYN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfastreportdizayn/
---

# TBLFASTREPORTDIZAYN

> Açıklama yok.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `DIZAYNID`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DIZAYNID` | TDBINTEGER | hayır |  | Dizayn no'su bilgisidir. |
| 2 | `KOD` | varchar(10) | evet |  | Dizayn kodunu tutar |
| 3 | `DIZAYN_TIP` | TDBINTEGER | evet |  | dizayn modülündeki tipi |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Kayıt sırasında girilen açıklamayı gösterir. |
| 5 | `DOSYAADI` | varchar(-1) | evet |  | Dosya adını gösterir |
| 6 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 7 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 8 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 9 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 16 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `SABLON` | varbinary(-1) | evet |  | Şablon bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLFASTREPORTDIZAYN_FKEY1` | `DIZAYNID` |
| PRIMARY KEY | `TBLFASTREPORTDIZAYN_PKEY` | `DIZAYNID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFASTREPORTDIZAYN_PKEY` | `DIZAYNID` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 DIZAYNID, KOD, DIZAYN_TIP, ACIKLAMA, DOSYAADI, C_YEDEK1
FROM dbo.TBLFASTREPORTDIZAYN WITH (NOLOCK);
```
