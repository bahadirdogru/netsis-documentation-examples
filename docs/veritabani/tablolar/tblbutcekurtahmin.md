---
title: TBLBUTCEKURTAHMIN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutcekurtahmin/
---

# TBLBUTCEKURTAHMIN

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BUTCE_ID` | TDBINTEGER | evet |  | Bütçe numarasının tutulduğu sahadır |
| 3 | `GRUP_KOD` | TDBGRUPKOD | evet |  | Grup kodunu tutar. |
| 4 | `DOVIZ_TIPI` | TDBBYTE | evet |  | İlgili kaydın döviz tipini gösterir. |
| 5 | `DONEM_ID` | TDBINTEGER | evet |  |  |
| 6 | `KUR` | TDBFLOAT | evet |  |  |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEKURTAHMIN_FKEY_1` | `BUTCE_ID` |
| FOREIGN KEY | `TBLBUTCEKURTAHMIN_FKEY_2` | `DONEM_ID` |
| PRIMARY KEY | `TBLBUTCEKURTAHMIN_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEKURTAHMIN_IND_1` | `BUTCE_ID, GRUP_KOD, DOVIZ_TIPI` | nonclustered |
| `TBLBUTCEKURTAHMIN_IND_2` | `BUTCE_ID, GRUP_KOD, DOVIZ_TIPI, DONEM_ID` | nonclustered |
| `TBLBUTCEKURTAHMIN_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, BUTCE_ID, GRUP_KOD, DOVIZ_TIPI, DONEM_ID, KUR
FROM dbo.TBLBUTCEKURTAHMIN WITH (NOLOCK);
```
