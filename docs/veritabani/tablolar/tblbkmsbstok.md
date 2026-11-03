---
title: TBLBKMSBSTOK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsbstok/
---

# TBLBKMSBSTOK

> MAKINELERIN BAKIMI SIRASINDA SARF EDILEN STOKLARIN KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REFTIP` | TDBSMALLINT | hayır |  | Referans tipini tutar. |
| 3 | `REFINCKEYNO` | TDBINTEGER | hayır |  | Referans inckeyno sunu tutar. |
| 4 | `SIRANO` | varchar(8) | hayır |  | Sıra no alanını tutar. |
| 5 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunu tutan sahadır. |
| 6 | `MIKTAR` | TDBFLOAT | hayır | `0` | Miktar bilgisini tutan sahadır. |
| 7 | `BIRIMFIYAT` | TDBFLOAT | hayır | `0` | Birim fiyatı tutan sahadır. |
| 8 | `HAREKETTIPI` | TDBSMALLINT | hayır |  | Hareket tipoini tutan sahadır. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMSBSTOK_FKEY1` | `STOKKODU` |
| PRIMARY KEY | `TBLBKMSBSTOK_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSBSTOK_IND_1` | `REFTIP, REFINCKEYNO, SIRANO` | nonclustered, unique |
| `TBLBKMSBSTOK_PK` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, REFTIP, REFINCKEYNO, SIRANO, STOKKODU, MIKTAR
FROM dbo.TBLBKMSBSTOK WITH (NOLOCK);
```
