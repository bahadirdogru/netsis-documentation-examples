---
title: TBLPRGENETPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprgenetprm/
---

# TBLPRGENETPRM

> YARDIMCI PROGRAMLAR>KAYIT>E-NETSİS NET>E-NETSİS PARAMETRE EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `SUBE_KODU+ANAHTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ANAHTAR` | varchar(50) | hayır |  | E-netsis parametreleri ekranındaki parametre başlıklarını ayrı ayrı satırlar halinde gösterir. |
| 3 | `DEGER` | TDBMEMO | evet |  | E-netsis parametreleri ekranındaki parametre başlıklarına verilen değerleri ayrı ayrı satırlar halinde gösterir. |
| 4 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PRGOZELPRM_PKEY` | `SUBE_KODU+ANAHTAR` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PRGOZELPRM_PKEY` | `SUBE_KODU+ANAHTAR` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ANAHTAR, DEGER, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLPRGENETPRM WITH (NOLOCK);
```
