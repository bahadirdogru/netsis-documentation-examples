---
title: TBLCRMANKSECENEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmanksecenek/
---

# TBLCRMANKSECENEK

> ICERIK KAYITLARINDA,ICERIK SECENEKLERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `ICERIKKODU, SECENEKKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ICERIKKODU` | TDBANKETKODU | hayır |  | Icerik kodunu tutar. |
| 2 | `SECENEKKODU` | varchar(8) | hayır |  | Tanımlanan secenegin kodunu tutar. |
| 3 | `SECENEK` | text | hayır |  | Secenekte yazılan degeri tutar. |
| 4 | `AGIRLIK` | TDBFLOAT | evet | `0` | Secenegin agırlıgını gosterir. |
| 5 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKSECENEK_FKEY` | `ICERIKKODU` |
| PRIMARY KEY | `TBLCRMANKSECENEK_PKEY` | `ICERIKKODU, SECENEKKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKSECENEK_IND_1` | `ONAYTIPI` | Nonclustered |
| `TBLCRMANKSECENEK_IND_2` | `ONAYNUM` | Nonclustered |
| `TBLCRMANKSECENEK_PKEY` | `ICERIKKODU, SECENEKKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ICERIKKODU, SECENEKKODU, SECENEK, AGIRLIK, ONAYTIPI, ONAYNUM
FROM dbo.TBLCRMANKSECENEK WITH (NOLOCK);
```
