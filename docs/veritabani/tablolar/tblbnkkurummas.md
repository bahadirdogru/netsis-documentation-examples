---
title: TBLBNKKURUMMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkkurummas/
---

# TBLBNKKURUMMAS

> DEKONT MODULU BANKA BAZINDA KURUM BILGI GIRISI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `BANKAKODU, KURUM`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BANKAKODU` | varchar(5) | hayır |  | Banka kodunu tutar. |
| 3 | `KURUM` | varchar(10) | hayır |  | Banka tarafından belirlenen kurum kodunu tutar. |
| 4 | `KURUMADI` | varchar(100) | evet |  | Kurum adını tutar. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKKURUMMAS_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBNKKURUMMAS_PKEY` | `BANKAKODU, KURUM` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKKURUMMAS_IND_1` | `SUBE_KODU, BANKAKODU, KURUM` | Nonclustered, Unique |
| `TBLBNKKURUMMAS_PKEY` | `BANKAKODU, KURUM` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BANKAKODU, KURUM, KURUMADI, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLBNKKURUMMAS WITH (NOLOCK);
```
