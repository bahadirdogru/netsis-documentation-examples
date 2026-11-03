---
title: TBLEMUTABAKATMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblemutabakatmas/
---

# TBLEMUTABAKATMAS

> E-MUTABAKAT GENEL TANIMLAMALARI YER ALIR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan otomatik ID değeridir. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 4 | `MUTABAKATISMI` | varchar(50) | hayır |  | e-mutabakat ismi bilgisi yer alır. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | e-mutabakat açıklama bilgisi yer alır. |
| 6 | `TURU` | TDBBYTE | hayır |  | 0-Ba,1-Bs,2-Bakiye |
| 7 | `DONEMTIPI` | TDBBYTE | hayır |  | 0-aylık,1- tarih aralıklı (bakiye seçili ise aktif gelmektedir) |
| 8 | `YIL_KODU` | TDBSMALLINT | evet |  | Girilen yıl bilgisi yer alır. |
| 9 | `AY_KODU` | TDBSMALLINT | evet |  | Girilen ay kodu bilgisi yer alır. |
| 10 | `BASLANGIC_TARIHI` | TDBDATETIME | evet |  | Dönem tipi tarih aralıklı ise girilen başlangıç tarihi bilgisi yer alır. |
| 11 | `BITIS_TARIHI` | TDBDATETIME | evet |  | Dönem tipi tarih aralıklı ise girilen bitiş tarihi bilgisi yer alır. |
| 12 | `DURUMU` | TDBBYTE | hayır |  | 253- bekliyor,254-gönderildi. |
| 13 | `TIP` | TDBBYTE | hayır |  | 0 |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi yer alır. |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi yer alır. |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MUTABAKATISMI, ACIKLAMA, TURU
FROM dbo.TBLEMUTABAKATMAS WITH (NOLOCK);
```
