---
title: TBLISLETMELER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisletmeler/
---

# TBLISLETMELER

> YARDIMCI PROGRAMLAR>KAYIT>ŞİRKET/ŞUBE/PARAMETRE TANIMLARI EKRANINDA İŞLETMELER SEKMESİNDE TANIMLANAN KAYITLARI TUTAR.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 8
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ADI` | varchar(100) | evet |  | İşletme adını gösterir. |
| 3 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 4 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `AKTIF` | char(1) | hayır | `E` | İşletmenin+bağlantı ekranındaki işletme listesinde olup olmadığını gösterir. Aktif işaretli ise 'E'+değilse 'H' değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `ISLETMELER_PKEY` | `ISLETME_KODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `ISLETMELER_PKEY` | `ISLETME_KODU` | Clustered |
| `TBLISLETMELER_IND_1` | `AKTIF` | Non-unique+Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ADI, C_YEDEK1, C_YEDEK2, F_YEDEK1, F_YEDEK2
FROM dbo.TBLISLETMELER WITH (NOLOCK);
```
