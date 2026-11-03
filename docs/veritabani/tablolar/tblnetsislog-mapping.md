---
title: TBLNETSISLOG_MAPPING
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnetsislog-mapping/
---

# TBLNETSISLOG_MAPPING

> Log raporlarının belge detaylı takibi için gerekli bilgiler bu tabloda yer almaktadır.

- **Modül:** [LOG](/veritabani/moduller/log/)
- **Kolon sayısı:** 50

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MODUL_NO` | TDBSMALLINT | evet |  | Modül numarası bilgisi yer alır. |
| 2 | `PROGRAM_NO` | TDBSMALLINT | evet |  | Program numarası bilgisi yer alır. |
| 3 | `TABLENAME` | varchar(30) | evet |  | Tablo adı bilgisi yer alır. |
| 4 | `ISMASTERTABLE` | TDBSMALLINT | evet |  | 0-1 |
| 5 | `PARENTTABLENAME` | varchar(3000) | evet |  | İlişkili tablo adı yer alır. |
| 6 | `JOIN_TEXT` | varchar(3000) | evet |  | join bilgisi yer alır. |
| 7 | `COLUMN1` | varchar(128) | evet |  | 1. kolon adı yer alır. |
| 8 | `COLUMN1_DILKODU` | TDBINTEGER | evet |  | 1. kolon karşılığı dil kodu yer alır. |
| 9 | `COLUMN1_LOOKUP` | varchar(3000) | evet |  | belge detayına ait kodsal bilgiler yer alır. |
| 10 | `COLUMN2` | varchar(128) | evet |  | 2. kolon adı yer alır. |
| 11 | `COLUMN2_DILKODU` | TDBINTEGER | evet |  | 2. kolon karşılığı dil kodu yer alır. |
| 12 | `COLUMN2_LOOKUP` | varchar(3000) | evet |  | belge detayına ait kodsal bilgiler yer alır. |
| 13 | `COLUMN3` | varchar(128) | evet |  | 3. kolon adı yer alır. |
| 14 | `COLUMN3_DILKODU` | TDBINTEGER | evet |  | 3. kolon karşılığı dil kodu yer alır. |
| 15 | `COLUMN3_LOOKUP` | varchar(3000) | evet |  | belge detayına ait kodsal bilgiler yer alır. |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `COLUMN4` | varchar(128) | evet |  |  |
| 27 | `COLUMN4_DILKODU` | TDBINTEGER | evet |  |  |
| 28 | `COLUMN4_LOOKUP` | varchar(3000) | evet |  |  |
| 29 | `COLUMN5` | varchar(128) | evet |  |  |
| 30 | `COLUMN5_DILKODU` | TDBINTEGER | evet |  |  |
| 31 | `COLUMN5_LOOKUP` | varchar(3000) | evet |  |  |
| 32 | `COLUMN6` | varchar(128) | evet |  |  |
| 33 | `COLUMN6_DILKODU` | TDBINTEGER | evet |  |  |
| 34 | `COLUMN6_LOOKUP` | varchar(3000) | evet |  |  |
| 35 | `COLUMN1_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 36 | `COLUMN2_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 37 | `COLUMN3_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 38 | `COLUMN4_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 39 | `COLUMN5_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 40 | `COLUMN6_DATATYPE` | TDBINTEGER | evet |  | Talimat Şablonları ekranı için belge bazında log desteği |
| 41 | `LCN_RECORDTYPE` | varchar(100) | evet |  | Logo Kayit Degisiklikleri Bildirim Servisi (LCN) ile Netsis entegrasyonu için eklenen sahadır. |
| 42 | `LCN_EXTRA_FIELDS` | varchar(500) | evet |  | Logo Kayit Degisiklikleri Bildirim Servisi (LCN) ile Netsis entegrasyonu için eklenen sahadır. |
| 43 | `STOK_KODU_FIELD` | varchar(128) | evet |  | Stok Bazında İzleme Desteği için eklenen sahadır. |
| 44 | `STOK_KODU_FIELD_COND` | varchar(50) | evet |  | Stok Bazında İzleme Desteği için eklenen sahadır. |
| 45 | `CARI_KODU_FIELD` | varchar(128) | evet |  | Cari Bazında İzleme Desteği için eklenen sahadır. |
| 46 | `CARI_KODU_FIELD_COND` | varchar(50) | evet |  | Cari Bazında İzleme Desteği için eklenen sahadır. |
| 47 | `MUH_KODU_FIELD` | varchar(128) | evet |  | Muhasebe Kodu Bazında İzleme Desteği için eklenen sahadır. |
| 48 | `MUH_KODU_FIELD_COND` | varchar(50) | evet |  | Muhasebe Kodu Bazında İzleme Desteği için eklenen sahadır. |
| 49 | `PROJE_KODU_FIELD` | varchar(128) | evet |  | Proje kodu Bazında İzleme Desteği için eklenen sahadır. |
| 50 | `PROJE_KODU_FIELD_COND` | varchar(50) | evet |  | Proje kodu Bazında İzleme Desteği için eklenen sahadır. |

## Örnek sorgu

```sql
SELECT TOP 100 MODUL_NO, PROGRAM_NO, TABLENAME, ISMASTERTABLE, PARENTTABLENAME, JOIN_TEXT
FROM dbo.TBLNETSISLOG_MAPPING WITH (NOLOCK);
```
