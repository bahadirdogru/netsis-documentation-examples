---
title: TBLCRMYENIALANDEGER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmyenialandeger/
---

# TBLCRMYENIALANDEGER

> SERBEST TANIMLAMALAR ONDEGER KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `ALANADI, GOSTERSIRASI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALANADI` | varchar(30) | hayır |  | Alan adını tutar. |
| 2 | `GOSTERSIRASI` | TDBINTEGER | hayır |  | Tanımlanan ondegerin ekrana kacıncı sıra getirilecegini tutar. |
| 3 | `DEGER` | varchar(100) | evet |  | Tanımlanan sahanın alabilecegi degerleri tutar. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMKULALANDEGER_FKEY1` | `ALANADI` |
| PRIMARY KEY | `TBLCRMKULALANDEGER_PKEY` | `ALANADI, GOSTERSIRASI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMKULALANDEGER_PKEY` | `ALANADI, GOSTERSIRASI` | Clustered, Unique |
| `TBLCRMYENIALANDEGER_IND1` | `ALANADI, DEGER` | Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ALANADI, GOSTERSIRASI, DEGER, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLCRMYENIALANDEGER WITH (NOLOCK);
```
