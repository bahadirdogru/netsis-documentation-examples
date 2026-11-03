---
title: TBLDBSLIMITRISK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldbslimitrisk/
---

# TBLDBSLIMITRISK

> BANKA-İŞLEMLER-DBS İŞLEMLERİ- LİMİT RİSK İŞLEMLERİ İLE BANKADAN GELEN LİMİT VE RİSK BİLGİLERİ YER ALIR. (bu tabloya entegrasyon yapılınca kayıt atmaktadır

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 4 | `BANKID` | TDBBYTE | hayır |  |  |
| 5 | `HESAPNO` | varchar(30) | hayır |  | hesap numarası bilgisi yer alır. |
| 6 | `LIMITTUT` | TDBFLOAT | evet |  | Limit tutarı bilgisi yer alır. |
| 7 | `RISKTUT` | TDBFLOAT | evet |  | Risk tutarı bilgisi yer alır. |
| 8 | `TAHSILKABULTUT` | TDBFLOAT | evet |  | Kabul tahsil tutarı bilgisi yer alır. |
| 9 | `TOPLAMFATTUT` | TDBFLOAT | evet |  | Toplam fatura tutarı bilgisi yer alır. |
| 10 | `KREDIKABULFATTUT` | TDBFLOAT | evet |  | Kabul fatura toplamı bilgisi yer alır. |
| 11 | `KREDIYETERSIZFATTUT` | TDBFLOAT | evet |  | Limit yetersiz fatura tutarı bilgisi yer alır. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
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
SELECT TOP 100 INCKEYNO, SUBE_KODU, CARI_KOD, BANKID, HESAPNO, LIMITTUT
FROM dbo.TBLDBSLIMITRISK WITH (NOLOCK);
```
