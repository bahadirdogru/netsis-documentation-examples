---
title: TBLARACTIP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblaractip/
---

# TBLARACTIP

> FATURA MODULU NAKLIYE ISLEMLERINDEN GIRILEN KAYITLARIN TUTULDUGU TABLO.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `ARACTIPKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ARACTIPKOD` | TDBGRUPKOD | hayır |  | Arac tip tanımlamalarındakı tip no bilgisini tutar. |
| 2 | `ACIKLAMA` | varchar(30) | evet |  | Arac tip tanımlamalarındaki acıklama bilgisini tutar. |
| 3 | `BIRIMMALIYET` | TDBFLOAT | evet | `0` | Arac tip tanımlamalarındaki birim maliyet bilgisini tutar. |
| 4 | `ISTIHABHADDI` | TDBFLOAT | evet | `0` | Arac tip tanımlamalarındaki istihab haddi bilgisini tutar. |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLARACTIP_PKEY1` | `ARACTIPKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLARACTIP_PKEY1` | `ARACTIPKOD` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ARACTIPKOD, ACIKLAMA, BIRIMMALIYET, ISTIHABHADDI, C_YEDEK1, C_YEDEK2
FROM dbo.TBLARACTIP WITH (NOLOCK);
```
