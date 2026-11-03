---
title: TBLIHRLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblihrlog/
---

# TBLIHRLOG

> DOSYAYA AİT LOG BİLGİLERİ TUTULUR-İPTAL EDİLMİŞ BELGELER

- **Modül:** [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `DOSYANO` | TDBBELGENO | evet |  | Dosya numarası bilgisi yer alır. |
| 3 | `FATIRS_NO` | TDBBELGENO | evet |  | Fatura numarası bilgisi yer alır. |
| 4 | `FTIRSIP` | char(1) | evet |  | P-Proforma, R-irsaliyesi oluşmamış ithalat,Q-irsaliyesi oluşmuş ithalat diğerleri TBLFATUIRS-FTIRSIP ile aynı |
| 5 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 6 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama bilgisi yer alır. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
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
SELECT TOP 100 INCKEYNO, DOSYANO, FATIRS_NO, FTIRSIP, TARIH, ACIKLAMA
FROM dbo.TBLIHRLOG WITH (NOLOCK);
```
