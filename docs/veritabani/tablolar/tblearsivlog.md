---
title: TBLEARSIVLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblearsivlog/
---

# TBLEARSIVLOG

> E-Arşiv gönderim servisi işaretli iken tutulan log kayıtları yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 17

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TIME_STAMP` | bigint | hayır |  | Zaman damgası bilgisi yer alır. |
| 2 | `SUBE_KODU` | smallint | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `GIB_FATIRS_NO` | varchar(16) | evet |  | Resmi fatura numarası bilgisi yer alır. |
| 4 | `UUID` | varchar(200) | evet |  | Faturaya ait UUID bilgsi yer alır. |
| 5 | `TIP` | tinyint | hayır |  | Tip bilgisi yer alır. |
| 6 | `ACIKLAMA` | varchar(4000) | hayır |  | Açıklama bilgisi yer alır. |
| 7 | `KAYIT_TARIHI` | datetime | hayır |  | Kayıt tarihi bilgisi yer alır. |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 10 | `D_YEDEK1` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `D_YEDEK2` | datetime | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `F_YEDEK1` | decimal(28,8) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `F_YEDEK2` | decimal(28,8) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `I_YEDEK1` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `I_YEDEK2` | int | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 TIME_STAMP, SUBE_KODU, GIB_FATIRS_NO, UUID, TIP, ACIKLAMA
FROM dbo.TBLEARSIVLOG WITH (NOLOCK);
```
