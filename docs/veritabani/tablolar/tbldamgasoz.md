---
title: TBLDAMGASOZ
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldamgasoz/
---

# TBLDAMGASOZ

> EVRAKLARIN UZERINDEN KESILECEK DAMGA VERGISI ORAN YADA TUTARLARININ KAYDEDILDIGI TABLODUR.

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SOZKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SOZKODU` | varchar(5) | hayır |  | Sozlesme kodunu tutan sahadır. |
| 2 | `BELGEACK` | varchar(100) | evet |  | Acıklama alanını tutan sahadır. |
| 3 | `TUTAR_ORAN` | char(1) | evet |  | Tutar ise T; Oran ise O degerini tutar. |
| 4 | `DEGER` | TDBFLOAT | evet | `0` | Tutar secilmis ise tutarı; oran secilmis ise damga vegisi oranını tutan sahadır. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDAMGASOZ_PKEY` | `SOZKODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAMGASOZ_PKEY` | `SOZKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SOZKODU, BELGEACK, TUTAR_ORAN, DEGER, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLDAMGASOZ WITH (NOLOCK);
```
