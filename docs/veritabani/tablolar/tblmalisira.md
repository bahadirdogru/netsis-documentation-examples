---
title: TBLMALISIRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmalisira/
---

# TBLMALISIRA

> ISLEM SIRASI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SIRANO, ANAKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SIRANO` | TDBSMALLINT | hayır | `0` | Sıra numarasını tutar. |
| 3 | `ANAKOD` | varchar(15) | hayır |  | Maliyet ana grup kodunu tutar. |
| 4 | `SUBENO` | TDBSMALLINT | evet | `0` | Sube kodunu tutar. |
| 5 | `SAFHAADEDI` | TDBSMALLINT | evet | `0` | Safha adedini tutar. |
| 6 | `DEPO` | TDBSMALLINT | evet | `0` | depo kodunu tutan sahadır. |
| 7 | `YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK3` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK4` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK5` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK6` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALISIRA_FKEY` | `ANAKOD` |
| FOREIGN KEY | `TBLMALISIRA_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLMALISIRA_FKEY2` | `SUBENO` |
| PRIMARY KEY | `TBLMALISIRAPKEY` | `SIRANO, ANAKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALISIRA_IND_2` | `ANAKOD` | Nonclustered |
| `TBLMALISIRA_IND_3` | `ISLETME_KODU` | Nonclustered |
| `TBLMALISIRAPKEY` | `SIRANO, ANAKOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SIRANO, ANAKOD, SUBENO, SAFHAADEDI, DEPO
FROM dbo.TBLMALISIRA WITH (NOLOCK);
```
