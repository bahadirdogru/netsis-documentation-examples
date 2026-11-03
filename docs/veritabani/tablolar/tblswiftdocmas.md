---
title: TBLSWIFTDOCMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftdocmas/
---

# TBLSWIFTDOCMAS

> MT940 KAYITLARI-BANKA ENTEGRASYONU- YÜKLENEN DOSYAYA AİT HESAP BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 26

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme Kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 4 | `ISLEM_REFERANS_NO` | varchar(20) | hayır |  | İşlem referans numarası bilgisi yer alır. |
| 5 | `ILGILI_REFERANS_NO` | varchar(20) | evet |  |  |
| 6 | `HESAP_NO` | varchar(30) | hayır |  | Hesap numarası bligisi yer alır. |
| 7 | `SIRA_NO` | varchar(8) | hayır |  | Ekstre numarası bilgisi yer alır. |
| 8 | `ACILIS_BAKIYE` | TDBFLOAT | evet |  | Açılış bakiye bilgisi yer alır. |
| 9 | `KAPANIS_BAKIYE` | TDBFLOAT | evet |  | Kapanış bakiye bilgisi yer alır. |
| 10 | `OLASI_BAKIYE` | TDBFLOAT | evet |  | Esnek bakiye bilgisi yer alır. |
| 11 | `DOSYA_ADI` | varchar(250) | evet |  | Gelen dosya ismi bilgisi yer alır. |
| 12 | `DOSYA_DIZIN` | varchar(500) | evet |  | Dosyanın bulunduğu dizin bilgisi yer alır. |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, INCKEYNO, ISLEM_REFERANS_NO, ILGILI_REFERANS_NO, HESAP_NO
FROM dbo.TBLSWIFTDOCMAS WITH (NOLOCK);
```
