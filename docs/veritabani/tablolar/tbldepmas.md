---
title: TBLDEPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldepmas/
---

# TBLDEPMAS

> DİNAMİK DEPO HÜCRE TANIMLAMA KAYITLARINI TUTAR

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `HUCREKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `HUCREKODU` | varchar(15) | hayır |  | Hücre kodu bilgisi |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi şubeye ait olduğunu gösterir. |
| 3 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | İlgili hücrenin tanımlı olduğu, yani içinde bulunduğu lokal depo kodu |
| 4 | `HUCREGRKOD` | varchar(8) | evet |  | Hücre grup kodu bilgisini gösterir |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPMAS_PKEY` | `HUCREKODU` |
| FOREIGN KEY | `TBLDEPMAS_FKEY` | `HUCREGRKOD` |
| FOREIGN KEY | `TBLDEPMAS_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPMAS_PKEY` | `HUCREKODU` | Unique ,Primary Key |
| `TBLDEPMASIND1` | `HUCREGRKOD` | Duplicate |
| `TBLDEPMASIND2` | `SUBE_KODU, DEPO_KODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 HUCREKODU, SUBE_KODU, DEPO_KODU, HUCREGRKOD, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLDEPMAS WITH (NOLOCK);
```
