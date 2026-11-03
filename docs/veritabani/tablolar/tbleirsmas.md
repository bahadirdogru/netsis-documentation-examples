---
title: TBLEIRSMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsmas/
---

# TBLEIRSMAS

> E-irsaliye gönderici alıcıya ait bilgiler yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 55

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası yer alır. |
| 2 | `EFATINCKEYNO` | TDBINTEGER | evet |  | TBLEFATURA-INCKEYNO kolonuna karşılık gelir |
| 3 | `FATIRS_NO` | varchar(17) | evet |  | Resmi fatura numarası yer alır. |
| 4 | `CARIKOD` | varchar(15) | evet |  | NULL |
| 5 | `FTIRSIP` | char(1) | evet |  | FATUIRS -FTIRSIP alanları ile aynıdır. |
| 6 | `SUPP_CARI_ISIM` | varchar(100) | evet |  | Tedarikçi cari ismi. Yardımcı programlardaki ünvan |
| 7 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisi yer alır. |
| 8 | `SUPP_CARI_VERGINUMARASI` | varchar(15) | evet |  | Yardımcı programlardaki VKNO bilgisi yer alır. |
| 9 | `SUPP_CARI_TCKIMLIKNO` | varchar(15) | evet |  | Yardımcı programlardaki TCKNO bilgisi yer alır. |
| 10 | `SUPP_CARI_VERGIDAIRESI` | varchar(50) | evet |  | Yardımcı programlardaki vergi dairesi bilgisi yer alır. |
| 11 | `SUPP_CARI_ADRES` | varchar(100) | evet |  | Yardımcı programlardaki adres bilgisi yer alır. |
| 12 | `SUPP_CARI_ULKEKODU` | varchar(50) | evet |  | Yardımcı programlardaki ülke kodu bilgisi yer alır. |
| 13 | `SUPP_CARI_IL` | varchar(50) | evet |  | Yardımcı programlardaki il bilgisi yer alır. |
| 14 | `SUPP_CARI_ILCE` | varchar(50) | evet |  | Yardımcı programlardaki ilçe bilgisi yer alır. |
| 15 | `SUPP_CARI_EMAIL` | varchar(50) | evet |  | Yardımcı programlardaki email bilgisi yer alır. |
| 16 | `SUPP_CARI_WEBSITEURI` | varchar(50) | evet |  | Yardımcı programlardaki web sitesi bigisi yer alır. |
| 17 | `DURUM` | TDBBYTE | evet |  |  |
| 18 | `UUID` | varchar(200) | evet |  | ETTN numarasıdır. TBLEFATURA-UUID |
| 19 | `RESPONSECODE` | TDBINTEGER | evet |  |  |
| 20 | `SENDERNAME` | varchar(200) | evet |  |  |
| 21 | `SENDERVNO` | varchar(50) | evet |  |  |
| 22 | `CUST_CARI_VERGINUMARASI` | varchar(15) | evet |  | Alıcı vergi kimlik numarası yer alır. |
| 23 | `CUST_CARI_VERGIDAIRESI` | varchar(50) | evet |  | Alıcı vergi dairesi yer alır. |
| 24 | `CUST_CARI_ISIM` | varchar(100) | evet |  | Alıcı cari isim bilgisi yer alır. |
| 25 | `CUST_CARI_ADRES` | varchar(100) | evet |  | Alıcı cari adres bilgisi yer alır. |
| 26 | `CUST_CARI_ULKEKODU` | varchar(50) | evet |  | Alıcı ülke kodu bilgisi yer alır. |
| 27 | `CUST_CARI_IL` | varchar(50) | evet |  | Alıcı cari il bilgisi yer alır. |
| 28 | `CUST_CARI_ILCE` | varchar(50) | evet |  | Alıcı cari ilçe bilgisi yer alır. |
| 29 | `CUST_CARI_WEBSITEURI` | varchar(50) | evet |  | Alıcı web adresi bilgisi yer alır. |
| 30 | `CUST_CARI_TCKIMLIKNO` | varchar(15) | evet |  | Alıcı TCK numarası bilgisi yer alır. |
| 31 | `SHIP_LICENSEPLATEID` | varchar(20) | evet |  | Plaka numarası bilgisi yer alır. |
| 32 | `SHIP_CARRIERVKN` | varchar(25) | evet |  | Taşıyıcı vergi kimilk numarası bilgisi yer alır. |
| 33 | `SHIP_CARRIERNAME` | varchar(50) | evet |  | Taşıyıcı ünvan bilgisi yer alır. |
| 34 | `SHIP_CARRIERSUBCITY` | varchar(50) | evet |  | Taşıyıcı ilçe bilgisi yer alır. |
| 35 | `SHIP_CARRIERCITY` | varchar(50) | evet |  | Taşıyıcı il bilgisi yer alır. |
| 36 | `SHIP_CARRIERCOUNTRY` | varchar(50) | evet |  | Taşıyıcı ülke bilgisi yer alır. |
| 37 | `SHIP_CARRIERPOSTAL` | varchar(8) | evet |  | Taşıyıcı posta kodu bilgisi yer alır. |
| 38 | `SHIP_DPERSON1FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-1 adı bilgisi yer alır. |
| 39 | `SHIP_DPERSON1FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-1 soyadı bilgisi yer alır. |
| 40 | `SHIP_DPERSON1TITLE` | varchar(50) | evet |  | Şoför bilgileri-1 açıklama bilgisi yer alır. |
| 41 | `SHIP_DPERSON1NID` | varchar(20) | evet |  | Şoför bilgileri-1 TCKNO bilgisi yer alır. |
| 42 | `SHIP_DPERSON2FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-2 adı bilgisi yer alır. |
| 43 | `SHIP_DPERSON2FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-2 soyadı bilgisi yer alır. |
| 44 | `SHIP_DPERSON2TITLE` | varchar(50) | evet |  | Şoför bilgileri-2 açıklama bilgisi yer alır. |
| 45 | `SHIP_DPERSON2NID` | varchar(20) | evet |  | Şoför bilgileri-2 TCKNO bilgisi yer alır. |
| 46 | `SHIP_DPERSON3FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-3 adı bilgisi yer alır. |
| 47 | `SHIP_DPERSON3FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-3 soyadı bilgisi yer alır. |
| 48 | `SHIP_DPERSON3TITLE` | varchar(50) | evet |  | Şoför bilgileri-3 açıklama bilgisi yer alır. |
| 49 | `SHIP_DPERSON3NID` | varchar(20) | evet |  | Şoför bilgileri-3 TCKNO bilgisi yer alır. |
| 50 | `SHIP_SEVKTAR` | TDBDATETIME | evet |  | Sevk tarihi bilgisi yer alır. |
| 51 | `SHIPDORSEPLAKA1` | varchar(20) | evet |  | Dorse Plaka 1 bilgisi yer alır |
| 52 | `SHIPDORSEPLAKA2` | varchar(20) | evet |  | NULL |
| 53 | `SHIPDORSEPLAKA3` | varchar(20) | evet |  | NULL |
| 54 | `PROFILEID` | tinyint | evet |  | 4 |
| 55 | `SUBE_KODU` | TDBSMALLINT | evet |  | Şube kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, EFATINCKEYNO, FATIRS_NO, CARIKOD, FTIRSIP, SUPP_CARI_ISIM
FROM dbo.TBLEIRSMAS WITH (NOLOCK);
```
