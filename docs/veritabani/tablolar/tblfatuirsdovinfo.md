---
title: TBLFATUIRSDOVINFO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuirsdovinfo/
---

# TBLFATUIRSDOVINFO

> Fatura üst döviz bilgileri yer alır.

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `FTIRSIP` | char(1) | hayır |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 4 | `FATIRS_NO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 5 | `CARI_KODU` | TDBCARIKOD | hayır |  | cari kodu bilgisi yer alır. |
| 6 | `DOVIZTIP` | TDBSMALLINT | hayır |  | Döviz tipi bilgisi yer alır. |
| 7 | `GEN_ISK1T` | TDBFLOAT | evet |  | Genel iskonto 1 tutarı bilgisi yer alır. |
| 8 | `GEN_ISK2T` | TDBFLOAT | evet |  | Genel iskonto 2 tutarı bilgisi yer alır. |
| 9 | `GEN_ISK3T` | TDBFLOAT | evet |  | Genel iskonto 3 tutarı bilgisi yer alır. |
| 10 | `BRUTTUTAR` | TDBFLOAT | evet |  | brüt tutar bilgisi yer alır. |
| 11 | `GENELTOPLAM` | TDBFLOAT | evet |  | Genel toplam bilgisi yer alır. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, FTIRSIP, FATIRS_NO, CARI_KODU, DOVIZTIP
FROM dbo.TBLFATUIRSDOVINFO WITH (NOLOCK);
```
