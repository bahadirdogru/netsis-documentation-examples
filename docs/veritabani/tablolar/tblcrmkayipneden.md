---
title: TBLCRMKAYIPNEDEN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmkayipneden/
---

# TBLCRMKAYIPNEDEN

> KAYIP NEDENLERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `KAYIPNEDENKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYIPNEDENKOD` | TDBGRUPKOD | hayır |  | Kayıp neden kodunu tutar. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ACIKLAMA` | varchar(100) | evet |  | Kayıp neden kodu acıklamasını tutar. |
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
| FOREIGN KEY | `TBLCRMKAYIPNEDEN_FKEY1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLCRMKAYIPNEDEN_PKEY` | `KAYIPNEDENKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMKAYIPNEDEN_IND1` | `ISLETME_KODU, KAYIPNEDENKOD` | Nonclustered |
| `TBLCRMKAYIPNEDEN_IND2` | `ISLETME_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMKAYIPNEDEN_PKEY` | `KAYIPNEDENKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KAYIPNEDENKOD, ISLETME_KODU, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLCRMKAYIPNEDEN WITH (NOLOCK);
```
