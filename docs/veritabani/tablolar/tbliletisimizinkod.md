---
title: TBLILETISIMIZINKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbliletisimizinkod/
---

# TBLILETISIMIZINKOD

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 6

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası |
| 2 | `SERI_KODU` | char(1) | hayır |  | İzin kodu alanında girilen ilk seri kodudur |
| 3 | `IZIN_KODU` | TDBINTEGER | hayır |  | İzin kodu numarası yer alır. |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama bilgisi yer alır. |
| 5 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 6 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SERI_KODU, IZIN_KODU, ACIKLAMA, SUBE_KODU, ISLETME_KODU
FROM dbo.TBLILETISIMIZINKOD WITH (NOLOCK);
```
