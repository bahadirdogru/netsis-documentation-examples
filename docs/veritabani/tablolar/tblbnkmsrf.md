---
title: TBLBNKMSRF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkmsrf/
---

# TBLBNKMSRF

> KREDI TAHSILAT KAYITLARINDAN OLUSTURULAN KESINTILERIN KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REFERANSNO` | varchar(20) | hayır |  | İslem referans numarasını tutan sahadır. |
| 3 | `MUHREFKOD` | varchar(15) | evet |  | Muhasebe referans kodunu tutan sahadır. |
| 4 | `MUHKODU` | TDBMUHKOD | evet |  | Kesinti icin tanımlanan masraf muhasabe kodunu tutan sahadır. |
| 5 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `BNKKSTINCKEYNO` | TDBINTEGER | hayır |  | Masraf kaydı girilen kesinti icin tanımlanan inckeynumarasıdır. |
| 7 | `TUTAR` | TDBFLOAT | evet |  | Tutar sahasıdır. |
| 8 | `DOVIZTIPI` | TDBBYTE | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DOVIZTUTARI` | TDBFLOAT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKMSRF_FKEY` | `MUHKODU` |
| FOREIGN KEY | `TBLBNKMSRF_FKEY2` | `PROJEKODU` |
| FOREIGN KEY | `TBLBNKMSRF_FKEY3` | `BNKKSTINCKEYNO` |
| PRIMARY KEY | `TBLBNKMSRF_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKMSRF_IND_1` | `REFERANSNO` | Nonclustered |
| `TBLBNKMSRF_PKEY` | `INCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, REFERANSNO, MUHREFKOD, MUHKODU, PROJEKODU, BNKKSTINCKEYNO
FROM dbo.TBLBNKMSRF WITH (NOLOCK);
```
