---
title: TBLENETPORTLETMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblenetportletmas/
---

# TBLENETPORTLETMAS

> E-NETSİS-NET PORTAL TANIMLARI MENÜSÜNDEKİ KAYITLARI TUTAR.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `PORTLETKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PORTLETKODU` | varchar(8) | hayır |  | Tanımlanacak portlete verilecek kod numarasını gösterir. |
| 3 | `DOSYA_ADI` | varchar(250) | evet |  | Portlet için kullanılcak dll'in path bilgisi burada tutulur. |
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
| 18 | `PORTLET_TIPI` | char(1) | evet |  | Portlet tipini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLENETPORTLET_PKEY` | `PORTLETKODU` |
| FOREIGN KEY | `TBLENETPORTLET_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLENETPORTLET_PKEY` | `PORTLETKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, PORTLETKODU, DOSYA_ADI, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLENETPORTLETMAS WITH (NOLOCK);
```
