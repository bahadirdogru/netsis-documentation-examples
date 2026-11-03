---
title: TBLDAGSTDAGITIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagstdagitim/
---

# TBLDAGSTDAGITIM

> STOK DAGITIM BILGILERINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `STOKKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOKKOD` | TDBSTOKKOD | hayır |  | Stok kodunu tutar. |
| 2 | `DAGITIMAD` | varchar(35) | evet |  | Kısa adı alanını tutar. |
| 3 | `EKRANSIRA` | TDBSMALLINT | evet | `0` | Ekrana gelme sırasını tutar. |
| 4 | `RAKIPURUNMU` | char(1) | evet |  | Rakıp urunmu parametresi isaretli ise 1 degerini tutar. |
| 5 | `RAFTAKIBIYAPILICAKMI` | char(1) | evet |  | Raf takibi yapilacak mi isaretli ise degerini tutar. |
| 6 | `MUADILURUNKOD` | TDBSTOKKOD | evet |  | Muadil urun kodunu tutar. |
| 7 | `DAGITIMGRPKOD` | TDBSTOKKOD | evet |  | Dagıtım grup kodunu tutar. |
| 8 | `MERKEZSTOKKOD` | TDBSTOKKOD | evet |  | Uretici firmanin bu stoga verdigi kodu tutar. |
| 9 | `YUKKOD` | varchar(15) | evet |  | Yukleme grup kodunu tutar. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `C_YEDEK1` | char(1) | evet |  | El terminaline aktarılsın parametresi isaretli ise 1 degerini tutar. |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGSTDAGITIM` | `STOKKOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGSTOKGRUP` | `STOKKOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 STOKKOD, DAGITIMAD, EKRANSIRA, RAKIPURUNMU, RAFTAKIBIYAPILICAKMI, MUADILURUNKOD
FROM dbo.TBLDAGSTDAGITIM WITH (NOLOCK);
```
