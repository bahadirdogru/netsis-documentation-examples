---
title: Veri tipleri
url: https://netsis.bahadirdogru.com/veritabani/veri-tipleri/
---

# Veri tipleri

Netsis şeması SQL Server'ın yerleşik tiplerinin yanında `TDB` önekli **kullanıcı tanımlı tipler** (user-defined data type) kullanır. Bunlar yerleşik bir tipin takma adıdır; sorgu yazarken altta yatan tip gibi davranırlar.

| Tip | Kullanım sayısı | Örnek uzunluk | Anlamı |
|-----|---------------:|--------------:|--------|
| `varchar` | 3517 | 30 | SQL Server yerleşik tipi |
| `char` | 3341 | 1 | SQL Server yerleşik tipi |
| `TDBFLOAT` | 3146 | 13 | Tutar, miktar, fiyat. Ondalıklı sayı (şemada uzunluk 13, hassasiyet 28, ölçek 8) |
| `TDBDATETIME` | 2409 | 8 | Tarih / tarih-saat |
| `TDBINTEGER` | 1801 | 4 | int tabanlı tam sayı |
| `TDBSMALLINT` | 1320 | 2 | smallint tabanlı; şube, işletme kodu gibi küçük sayılar |
| `TDBNETSISKUL` | 831 | 12 | Netsis kullanıcı adı (12 karakter) |
| `TDBBYTE` | 556 | 1 | tinyint tabanlı; tip/durum kodları |
| `TDBMUHKOD` | 347 | 35 | Muhasebe hesap kodu (35 karakter) |
| `TDBBELGENO` | 181 | 15 | Belge / fiş numarası (genellikle 15 karakter) |
| `TDBSTOKKOD` | 171 | 35 | Stok kodu |
| `TDBCARIKOD` | 162 | 15 | Cari hesap kodu |
| `int` | 100 | 4 | SQL Server yerleşik tipi |
| `datetime` | 87 | 8 | SQL Server yerleşik tipi |
| `TDBGRUPKOD` | 81 | 8 | Grup kodu |
| `TDBPROJEKOD` | 73 | 15 | Proje kodu |
| `TDBMEMO` | 67 | 16 | Uzun metin |
| `text` | 58 | 16 | SQL Server yerleşik tipi |
| `decimal` | 48 | 13 | SQL Server yerleşik tipi |
| `float` | 43 | 8 | SQL Server yerleşik tipi |
| `TDBPLASIYER` | 39 | 8 | Plasiyer (satış temsilcisi) kodu |
| `TDBKDVORAN` | 29 | 5 | KDV oranı |
| `TDBREFKOD` | 28 | 15 | Referans kodu |
| `TDBTELFAX` | 27 | 20 | Telefon / faks numarası |
| `image` | 25 | 16 | SQL Server yerleşik tipi |
| `smallint` | 24 | 2 | SQL Server yerleşik tipi |
| `tinyint` | 19 | 1 | SQL Server yerleşik tipi |
| `smalldatetime` | 19 | 4 | SQL Server yerleşik tipi |
| `TDBANKETKODU` | 8 | 15 | Netsis kullanıcı tanımlı tipi |
| `nvarchar` | 8 | 30 | SQL Server yerleşik tipi |
| `varbinary` | 7 | -1 | SQL Server yerleşik tipi |
| `TDBENTKEY` | 7 | 50 | Entegrasyon anahtarı |
| `VarChar` | 6 | 50 | SQL Server yerleşik tipi |
| `TDBADAYKOD` | 6 | 15 | Netsis kullanıcı tanımlı tipi |
| `TDBAKTIVITEKOD` | 6 | 35 | Netsis kullanıcı tanımlı tipi |
| `TDBCRMKULKOD` | 6 | 35 | Netsis kullanıcı tanımlı tipi |
| `TDBSIKAYETKOD` | 4 | 35 | Netsis kullanıcı tanımlı tipi |
| `bit` | 3 | 1 | SQL Server yerleşik tipi |
| `bigint` | 3 | 8 | SQL Server yerleşik tipi |
| `TDBURETGRUPKOD` | 3 | 15 | Netsis kullanıcı tanımlı tipi |
| `TDBVARDIYAKOD` | 3 | 15 | Netsis kullanıcı tanımlı tipi |
| `TDBSKYAKTIVITEKOD` | 2 | 35 | Netsis kullanıcı tanımlı tipi |

Bir kullanıcı tanımlı tipin altındaki gerçek tipi görmek için:

```sql
SELECT name, TYPE_NAME(system_type_id) AS base_type, max_length, precision, scale
FROM sys.types WHERE is_user_defined = 1 AND name LIKE 'TDB%';
```

## Evet/Hayır alanları

Netsis mantıksal alanları çoğunlukla `char(1)` içinde `'E'` (evet) / `'H'` (hayır) olarak tutar. Bazı parametre alanları `'1'`/`'0'` kullanır. Kolon açıklamasını kontrol edin.
