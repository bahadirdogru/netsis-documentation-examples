---
title: TBLCONFIGDEGER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigdeger/
---

# TBLCONFIGDEGER

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `OZELLIK_ID` | TDBINTEGER | hayır |  | Bağlanılan özellik numarasını tutar |
| 5 | `DEGER_KODU` | varchar(100) | hayır |  | Bağlanılan değerin kodunu tutar |
| 6 | `DEGER_ACIKLAMA` | varchar(100) | evet |  | Bağlanılan değerin açıklamasını tutar |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGDEGER_FKEY1` | `OZELLIK_ID` |
| FOREIGN KEY | `TBLCONFIGDEGER_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGDEGER_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCONFIGDEGER_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGDEGER_IND_1` | `OZELLIK_ID, DEGER_KODU` | nonclustered |
| `TBLCONFIGDEGER_IND_2` | `DEGER_KODU` | nonclustered |
| `TBLCONFIGDEGER_IND_3` | `ISLETME_KODU, SUBE_KODU, OZELLIK_ID, DEGER_KODU` | nonclustered |
| `TBLCONFIGDEGER_IND_4` | `ISLETME_KODU, SUBE_KODU, DEGER_KODU` | nonclustered |
| `TBLCONFIGDEGER_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, OZELLIK_ID, DEGER_KODU, DEGER_ACIKLAMA
FROM dbo.TBLCONFIGDEGER WITH (NOLOCK);
```
