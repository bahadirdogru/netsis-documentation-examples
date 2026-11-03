---
title: TBLILETISIMIZINKAYITLARI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbliletisimizinkayitlari/
---

# TBLILETISIMIZINKAYITLARI

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckeyno bilgisi yer alır. |
| 2 | `KAYIT_TIPI` | char(1) | hayır |  | Kayıt tipinde seçili olan bilgiye karşılık gelir. |
| 3 | `KOD` | varchar(150) | hayır |  | Kullanıcı kodu cari hesap kodu gibi kayıt tipine göre karşılık gelen kodun girileceği alandır. |
| 4 | `SERI_KODU` | char(1) | hayır |  | İzin kodu tanımlarındaki seri bilgisi yer alır. |
| 5 | `IZIN_KODU` | TDBINTEGER | hayır |  | İzin kodunda seri kodunun yanında girilen bilgidir. |
| 6 | `IZIN_DURUMU` | char(1) | hayır |  | V-ar,Y-ok |
| 7 | `IZIN_ALMA_SEKLI` | char(1) | hayır |  | E-posta,T-elefon,S-ms,F-ax,Y-azılı Form |
| 8 | `IZIN_ALMA_TARIHI` | TDBDATETIME | hayır |  | İzin alma tarihi bilgisi yer alır. |
| 9 | `BASLANGIC_TARIHI` | TDBDATETIME | hayır |  | Başlangıç Tarihi bilgisi yer alır. |
| 10 | `BITIS_TARIHI` | TDBDATETIME | hayır |  | Bitiş tarihi bilgisi yer alır. |
| 11 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama bilgisi yer alır. |
| 12 | `IZIN_ALAN_KUL` | TDBSMALLINT | hayır |  | İzin alan kullanıcı bilgisi yer alır. |
| 13 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 14 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 19 | `ONLINE_ONAY_ID` | int | evet |  | Onay durumu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, KAYIT_TIPI, KOD, SERI_KODU, IZIN_KODU, IZIN_DURUMU
FROM dbo.TBLILETISIMIZINKAYITLARI WITH (NOLOCK);
```
