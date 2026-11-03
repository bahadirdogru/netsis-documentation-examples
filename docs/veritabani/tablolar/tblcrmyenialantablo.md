---
title: TBLCRMYENIALANTABLO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmyenialantablo/
---

# TBLCRMYENIALANTABLO

> SAHA TABLO ESLESTIRMELERINI TUTAN TABLODUR

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `TABLOADI, ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TABLOADI` | varchar(30) | hayır |  | Alanın eklendigi tabloyu tutar. |
| 2 | `ALANADI` | varchar(30) | hayır |  | Alan adını tutar. |
| 3 | `ZORUNLU` | char(1) | evet | `H` | Zorunlu bir alan ise E;degil ise H degerini alır. |
| 4 | `AKTIF` | char(1) | evet | `H` | Aktif ise E;degil ise H degerini alır. |
| 5 | `GOSTERSIRASI` | TDBINTEGER | hayır |  | Gosterim sırasını tutar. |
| 6 | `VTDEGISTI` | char(1) | evet | `H` |  |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Bir tabloya eklenan ilk saha ise E degerini tutar. |
| 12 | `C_YEDEK2` | char(1) | evet |  | Default=NULL;Web ortamında kullanılsın isaretli ise E;degil ise H degerini alır. |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMYENIALANTABLO_FKEY1` | `ALANADI` |
| PRIMARY KEY | `TBLCRMYENIALANTABLO_PKEY` | `TABLOADI, ALANADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMYENIALANTABLO_IND1` | `TABLOADI, GOSTERSIRASI` | Nonclustered |
| `TBLCRMYENIALANTABLO_IND2` | `TABLOADI, AKTIF, GOSTERSIRASI` | Nonclustered |
| `TBLCRMYENIALANTABLO_PKEY` | `TABLOADI, ALANADI` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 TABLOADI, ALANADI, ZORUNLU, AKTIF, GOSTERSIRASI, VTDEGISTI
FROM dbo.TBLCRMYENIALANTABLO WITH (NOLOCK);
```
