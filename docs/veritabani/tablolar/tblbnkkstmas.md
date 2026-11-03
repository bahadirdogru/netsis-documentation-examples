---
title: TBLBNKKSTMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkkstmas/
---

# TBLBNKKSTMAS

> BANKA KESINTI TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KSTKODU` | TDBBELGENO | hayır |  | Kesinti kodunu tutar. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Tanımlanan kesinti koduna ait acıklamayı tutar. |
| 4 | `KSTORANI` | TDBFLOAT | hayır |  | Kesinti oranını tutar. |
| 5 | `KSTZAMANI` | TDBSMALLINT | hayır |  | Kesinti zamanı;İlk tahsilatta ise 0;vadeli ise 1 degerini tutar. |
| 6 | `KSTTIPINCKEYNO` | TDBINTEGER | hayır |  | Kesinti tip inckeyno' yu tutar. |
| 7 | `MASRAFMUHKODU` | TDBMUHKOD | evet |  | Masraf muhasebe kodunu tutar. |
| 8 | `TAHAKKUKMUHKODU` | TDBMUHKOD | evet |  | Tahakkuk muhasebe kodunu tutar. |
| 9 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka ana kodunu tutar. |
| 10 | `KSTSIRA` | TDBINTEGER | hayır | `0` |  |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKKSTMAS_FKEY` | `NETBANKAKODU` |
| FOREIGN KEY | `TBLBNKKSTMAS_FKEY2` | `KSTTIPINCKEYNO` |
| PRIMARY KEY | `TBLBNKKSTMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKKSTMAS_IND_1` | `KSTKODU` | Nonclustered, Unique |
| `TBLBNKKSTMAS_IND_2` | `ACIKLAMA` | Nonclustered |
| `TBLBNKKSTMAS_IND_3` | `KSTSIRA` | Nonclustered |
| `TBLBNKKSTMAS_PKEY` | `INCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KSTKODU, ACIKLAMA, KSTORANI, KSTZAMANI, KSTTIPINCKEYNO
FROM dbo.TBLBNKKSTMAS WITH (NOLOCK);
```
