---
title: TBLFAIZORAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfaizoran/
---

# TBLFAIZORAN

> SENET TANZİM FAİZ ORANLARI TUTULUR

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `ISLETME_KODU, SINIRAY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SINIRAY` | TDBBYTE | hayır |  | Ay bilgisi tutulur. |
| 3 | `FAIZ` | TDBFLOAT | evet | `0` | Faiz oranı |
| 4 | `YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 5 | `YEDEK2` | varchar(10) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 6 | `YEDEK3` | TDBSMALLINT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır.Default 0 değerini alır. |
| 7 | `YEDEK4` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır.Default 0 değerini alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFAIZORAN_PKEY` | `ISLETME_KODU, SINIRAY` |
| FOREIGN KEY | `TBLFAIZORAN_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFAIZORAN_PKEY` | `ISLETME_KODU, SINIRAY` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SINIRAY, FAIZ, YEDEK1, YEDEK2, YEDEK3
FROM dbo.TBLFAIZORAN WITH (NOLOCK);
```
