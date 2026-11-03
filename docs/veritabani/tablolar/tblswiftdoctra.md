---
title: TBLSWIFTDOCTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftdoctra/
---

# TBLSWIFTDOCTRA

> MT940 KAYITLARI-BANKA ENTEGRASYONU- YÜKLENEN DOSYAYA AİT HAREKET BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | İnckey numarası bilgisi yer alır. |
| 2 | `DOSYA_ID` | TDBINTEGER | hayır |  | TBLSWIFTDOCMAS (INCKEYNO) kolonuna karşılık gelir. |
| 3 | `SIRA_NO` | TDBINTEGER | hayır |  | Sıra numaraı bilgisi yer alır. |
| 4 | `VALOR_TARIHI` | TDBDATETIME | evet |  | İşlem tarihi bilgisi yer alır. |
| 5 | `GIRIS_TARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 6 | `GOSTERGE` | varchar(1) | evet |  | D-borç,C-alacak |
| 7 | `PARA_BIRIM` | varchar(1) | evet |  | Para birimi bilgisi yer alır. |
| 8 | `TUTAR` | TDBFLOAT | hayır |  | Tutar bilgisi yer alır. |
| 9 | `HAREKET_KODU` | varchar(5) | evet |  | VRM-virman,TRF-transfer gibi hareket kodları yer alır. |
| 10 | `ACIKLAMA` | varchar(-1) | evet |  | Belgeye ait açıklama bilgisi yer alır. |
| 11 | `AKTARILDI` | TDBBYTE | evet |  | Aktarıldı ise 1 değilse 0 değerini alır. |
| 12 | `AKTARIM_TARIH` | TDBDATETIME | evet |  | Aktarım tarihi bilgisi yer alır. |
| 13 | `KURAL_KODU` | varchar(15) | evet |  | TBLSWIFTKURAL (KURAL_KODU) kolonuna karşılık gelir. |
| 14 | `ALACAK_NETHESKODU` | varchar(15) | evet |  | NULL |
| 15 | `BORC_NETHESKODU` | varchar(15) | evet |  | NULL |
| 16 | `ANALIZ_KODU` | varchar(35) | evet |  | NULL |
| 17 | `BELGE_TIPI` | TDBBYTE | evet |  | Belge tipi bilgisi yer alır. |
| 18 | `ISLEM_TIPI` | char(1) | evet |  | İşlem tipinde seçili olan bilgi yer alır. |
| 19 | `KOD` | varchar(35) | evet |  | Eşleştirilen kod bilgisi yer alır. |
| 20 | `METIN` | varchar(500) | evet |  | Kural adı bilgisi yer alır. |
| 21 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 36 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 37 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 38 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 39 | `BELGENO` | varchar(20) | evet |  | NULL |
| 40 | `KURAL_AMACI` | TDBBYTE | hayır |  | Bilgi amaçlı işaretli ise 1 değerini alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, DOSYA_ID, SIRA_NO, VALOR_TARIHI, GIRIS_TARIHI, GOSTERGE
FROM dbo.TBLSWIFTDOCTRA WITH (NOLOCK);
```
