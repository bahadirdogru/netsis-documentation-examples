---
title: TBLSWIFTKURAL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblswiftkural/
---

# TBLSWIFTKURAL

> MT940 KAYITLARI-KURAL BİLGİLERİ YER ALIR

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KURAL_KODU` | varchar(15) | hayır |  | Kural kodu bilgisi yer alır. |
| 2 | `KURAL_ADI` | varchar(100) | evet |  | Kural adı bilgisi yer alır. |
| 3 | `BELGE_TIPI` | TDBBYTE | evet |  | Belge tıpı bilgisi yer alır. |
| 4 | `ISLEM_TIPI` | char(1) | evet |  | Islem tıpı bilgisi yer alır. |
| 5 | `KOD` | varchar(35) | evet |  | Kod bilgisi yer alır. |
| 6 | `METIN` | varchar(500) | evet |  | Metin bilgisi yer alır. |
| 7 | `KURAL_TIPI` | tinyint | hayır |  | 0 |
| 8 | `BAGLANTI_TIPI` | tinyint | evet |  | NULL |
| 9 | `TABLO_ADI` | varchar(30) | evet |  | NULL |
| 10 | `SAHA_ADI` | varchar(50) | evet |  | NULL |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 25 | `KURAL_AMACI` | TDBBYTE | hayır |  | Bilgi amaçlı işaretli ise 1 değerini alır. |
| 26 | `PARA_BIRIM` | varchar(1) | evet |  | Para birimi bilgisi yer alır. |
| 27 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 KURAL_KODU, KURAL_ADI, BELGE_TIPI, ISLEM_TIPI, KOD, METIN
FROM dbo.TBLSWIFTKURAL WITH (NOLOCK);
```
