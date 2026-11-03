---
title: TBLDEKSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekseri/
---

# TBLDEKSERI

> DEKONT SERI BİLGİLERİNİ TUTAR

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `SERI_NO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SERI_NO` | varchar(2) | hayır |  | Maksimum 2 karakter uzunluğunda seri kodu girişi yapılabilecek sahadır. |
| 2 | `ACIKLAMA` | varchar(35) | evet |  | Tanımlanan seri kodunun açıklamasının girileceği sahadır. |
| 3 | `YEDEK1` | varchar(8) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 4 | `YEDEK2` | varchar(8) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 5 | `YEDEK3` | TDBSMALLINT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEKSERI_PKEY` | `SERI_NO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKSERI_PKEY` | `SERI_NO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 SERI_NO, ACIKLAMA, YEDEK1, YEDEK2, YEDEK3
FROM dbo.TBLDEKSERI WITH (NOLOCK);
```
