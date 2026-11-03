---
title: TBLCRMANK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmank/
---

# TBLCRMANK

> TANIMLANAN ANKETLERIN TUTULDUGU TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `ANKETKODU, ICERIKKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ANKETKODU` | TDBANKETKODU | hayır |  | Hazırlanan anketin kodunu gosterir. |
| 2 | `ICERIKKODU` | TDBANKETKODU | hayır |  | Ankete eklenen icerigin kodunu gosterir. |
| 3 | `SIRANO` | varchar(8) | evet |  | Eklenen icerigin gosterim sırasını tutar. |
| 4 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANK_FKEY1` | `ANKETKODU` |
| FOREIGN KEY | `TBLCRMANK_FKEY2` | `ICERIKKODU` |
| PRIMARY KEY | `TBLCRMANK_PKEY` | `ANKETKODU, ICERIKKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANK_IND_1` | `ANKETKODU, SIRANO` | Nonclustered |
| `TBLCRMANK_IND_2` | `ONAYTIPI` | Nonclustered |
| `TBLCRMANK_IND_3` | `ONAYNUM` | Nonclustered |
| `TBLCRMANK_PKEY` | `ANKETKODU, ICERIKKODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ANKETKODU, ICERIKKODU, SIRANO, ONAYTIPI, ONAYNUM, KAYITYAPANKUL
FROM dbo.TBLCRMANK WITH (NOLOCK);
```
