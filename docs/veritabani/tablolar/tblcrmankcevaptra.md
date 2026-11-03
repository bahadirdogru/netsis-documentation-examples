---
title: TBLCRMANKCEVAPTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmankcevaptra/
---

# TBLCRMANKCEVAPTRA

> ANKET CEVAPLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ANKCEVMASINCKEYNO` | TDBINTEGER | hayır |  | TBLCRMANKCEVAPMAS ta kayıtlı olan inckeyno tutar. |
| 2 | `ICERIKKODU` | TDBANKETKODU | hayır |  | İcerigin kodunu tutar. |
| 3 | `SECENEKKODU` | varchar(8) | evet |  | Katılımcının isaretledigi cevap kodunu tutar. |
| 4 | `CEVAP` | text | evet |  | Secenek tipi serbest ise yazılan cevabı tutar. |
| 5 | `AGIRLIK` | TDBFLOAT | evet |  | Cevaplanan icerigin agırlık bilgisini tutar. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKCEVAPTRA_FKEY1` | `ANKCEVMASINCKEYNO` |
| FOREIGN KEY | `TBLCRMANKCEVAPTRA_FKEY2` | `ICERIKKODU` |
| FOREIGN KEY | `TBLCRMANKCEVAPTRA_FKEY3` | `ICERIKKODU, SECENEKKODU` |
| PRIMARY KEY | `TBLCRMANKCEVAPTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKCEVAPTRA_IND_1` | `ANKCEVMASINCKEYNO, ICERIKKODU, SECENEKKODU` | Clustered, unique |
| `TBLCRMANKCEVAPTRA_PKEY` | `INCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ANKCEVMASINCKEYNO, ICERIKKODU, SECENEKKODU, CEVAP, AGIRLIK, INCKEYNO
FROM dbo.TBLCRMANKCEVAPTRA WITH (NOLOCK);
```
