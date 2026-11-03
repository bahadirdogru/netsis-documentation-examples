---
title: TBLKKSTANDART_ISO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkstandart-iso/
---

# TBLKKSTANDART_ISO

> KALİTE ISO 2859 STANDARD DESTEĞİ İLE GELEN ÖRNEKLEME MİKTAR TANIMLARI YER ALIR

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 17

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `MIKTARKOD` | char(1) | hayır |  | Miktar kod bilgisi yer alır. |
| 3 | `ORNEKLEMMIK` | TDBFLOAT | hayır |  | Örnekleme miktarı bilgisi yer alır. |
| 4 | `KABUL_KALITE_LIMITI` | TDBFLOAT | hayır |  | Kabul kalite limit bilgisi yer alır. |
| 5 | `KABULMIK` | TDBFLOAT | hayır |  | Kabul miktarı bilgisi yer alır. |
| 6 | `REDMIK` | TDBFLOAT | hayır |  | Red miktarı bilgisi yer alır. |
| 7 | `ISO_STANDART` | TDBINTEGER | evet |  | 1 |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MIKTARKOD, ORNEKLEMMIK, KABUL_KALITE_LIMITI, KABULMIK, REDMIK
FROM dbo.TBLKKSTANDART_ISO WITH (NOLOCK);
```
