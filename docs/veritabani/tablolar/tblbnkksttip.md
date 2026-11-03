---
title: TBLBNKKSTTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkksttip/
---

# TBLBNKKSTTIP

> BANKA KESINTI TIP KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `INCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KSTTIPKODU` | TDBGRUPKOD | hayır |  | Banka kesinti tip kayıtlarını tutar. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Kesinti tipinin acıklamasını tutar. |
| 4 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKKSTTIP_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBNKKSTTIP_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKKSTTIP_IND_1` | `KSTTIPKODU` | Nonclustered, Unique |
| `TBLBNKKSTTIP_IND_2` | `ACIKLAMA` | Nonclustered |
| `TBLBNKKSTTIP_PKEY` | `INCKEYNO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KSTTIPKODU, ACIKLAMA, ISLETME_KODU, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLBNKKSTTIP WITH (NOLOCK);
```
