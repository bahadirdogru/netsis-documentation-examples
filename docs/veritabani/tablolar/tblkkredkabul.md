---
title: TBLKKREDKABUL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkredkabul/
---

# TBLKKREDKABUL

> KAYIT>KABUL/RED KODLARI KAYITLARINI GÖSTERİR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(2) | hayır |  | Kabul/Red kodunu gösterir. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama sahasını gösterir. |
| 3 | `KABULRED` | char(1) | evet |  | Kabul/Red bilgisini gösterir. Kabul ise 'K', Red ise 'R' değerini gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKREDKABULPKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKREDKABUL_IND1` | `ISLETME_KODU+ACIKLAMA` | Non-unique, Non-clustered |
| `TBLKKREDKABUL_IND2` | `ISLETME_KODU+KABULRED` | Non-unique, Non-clustered |
| `TBLKKREDKABUL_IND3` | `ISLETME_KODU+KOD` | Unique, Non-clustered |
| `TBLKKREDKABULPKEY` | `KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, ACIKLAMA, KABULRED, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLKKREDKABUL WITH (NOLOCK);
```
