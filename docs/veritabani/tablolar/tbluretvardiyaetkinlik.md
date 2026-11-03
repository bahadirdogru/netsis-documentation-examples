---
title: TBLURETVARDIYAETKINLIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretvardiyaetkinlik/
---

# TBLURETVARDIYAETKINLIK

> Gezgin\Üretim\MRP\Kayıt\İleri Üretim Çizelgeleme vardiya tanımlama detay bilgileri yer alır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `VARDIYA_KOD` | TDBVARDIYAKOD | hayır |  | TBLURETVARDIYA (VARDIYA_KOD) |
| 4 | `ETKINLIK_TIPI` | char(1) | evet |  | Etkinlik tipi bilgisi yer alır. |
| 5 | `ACIKLAMA` | varchar(50) | evet |  | açıklama bilgisi yer alır. |
| 6 | `BASSAATI` | TDBDATETIME | evet |  | Başlangıç saati bilgisi yer alır. |
| 7 | `BITSAATI` | TDBDATETIME | evet |  | Bitiş saati bilgisi yer alır. |
| 8 | `TAMGUN` | char(1) | evet |  | Tam gün bilgisi yer alır. |
| 9 | `SONRAKIGUN` | char(1) | evet |  | Sonraki gün bilgisi yer alır. |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, VARDIYA_KOD, ETKINLIK_TIPI, ACIKLAMA, BASSAATI
FROM dbo.TBLURETVARDIYAETKINLIK WITH (NOLOCK);
```
