---
title: TBLKKHAREKET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkhareket/
---

# TBLKKHAREKET

> KALİTE KONTROL HAREKET KAYITLARI YER ALIR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 18

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası yer alır. |
| 2 | `TIP` | TDBBYTE | hayır |  | Belge türü bilgisi yer alır.BELGE TÜRÜ : DAT KABUL, DAT RED, DAT HURDA, DAT ŞARTLIKABUL, İADE İRSALİYESİ, USK |
| 3 | `BELGEID` | TDBINTEGER | evet |  | TBLSTOKURS-INCKEYNO bilgisine karşılık gelir(tip-6 için) |
| 4 | `KKNO` | varchar(8) | hayır |  | TBLKKMAS-KKNO alanına karşılık gelir. |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, TIP, BELGEID, KKNO, C_YEDEK1, C_YEDEK2
FROM dbo.TBLKKHAREKET WITH (NOLOCK);
```
