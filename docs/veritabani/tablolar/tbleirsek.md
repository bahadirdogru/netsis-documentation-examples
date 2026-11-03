---
title: TBLEIRSEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbleirsek/
---

# TBLEIRSEK

> E-irsaliye ek bilgi girişi ekranındaki bilgiler yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 27

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GIB_FATIRS_NO` | varchar(16) | hayır |  | Resmi fatura numarası bilgisi yer alır. |
| 2 | `LICENSEPLATEID` | varchar(20) | evet |  | Plaka no yer alır. |
| 3 | `CARRIERVKN` | varchar(15) | evet |  | Taşıyıcı vergi kimilk numarası bilgisi yer alır. |
| 4 | `CARRIERNAME` | varchar(100) | evet |  | Taşıyıcı ünvan bilgisi yer alır. |
| 5 | `CARRIERSUBCITY` | varchar(50) | evet |  | Taşıyıcı ilçe bilgisi yer alır. |
| 6 | `CARRIERCITY` | varchar(50) | evet |  | Taşıyıcı il bilgisi yer alır. |
| 7 | `CARRIERCOUNTRY` | varchar(50) | evet |  | Taşıyıcı ülke bilgisi yer alır. |
| 8 | `CARRIERPOSTAL` | varchar(8) | evet |  | Taşıyıcı posta kodu bilgisi yer alır. |
| 9 | `DPERSON1FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-1 adı bilgisi yer alır. |
| 10 | `DPERSON1FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-1 soyadı bilgisi yer alır. |
| 11 | `DPERSON1TITLE` | varchar(50) | evet |  | Şoför bilgileri-1 açıklama bilgisi yer alır. |
| 12 | `DPERSON1NID` | varchar(20) | evet |  | Şoför bilgileri-1 TCKNO bilgisi yer alır. |
| 13 | `DPERSON2FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-2 adı bilgisi yer alır. |
| 14 | `DPERSON2FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-2 soyadı bilgisi yer alır. |
| 15 | `DPERSON2TITLE` | varchar(50) | evet |  | Şoför bilgileri-2 açıklama bilgisi yer alır. |
| 16 | `DPERSON2NID` | varchar(20) | evet |  | Şoför bilgileri-2 TCKNO bilgisi yer alır. |
| 17 | `DPERSON3FIRSTNAME` | varchar(50) | evet |  | Şoför bilgileri-3 adı bilgisi yer alır. |
| 18 | `DPERSON3FAMILYNAME` | varchar(50) | evet |  | Şoför bilgileri-3 soyadı bilgisi yer alır. |
| 19 | `DPERSON3TITLE` | varchar(50) | evet |  | Şoför bilgileri-3 açıklama bilgisi yer alır. |
| 20 | `DPERSON3NID` | varchar(20) | evet |  | Şoför bilgileri-3 TCKNO bilgisi yer alır. |
| 21 | `SEVKTAR` | TDBDATETIME | evet |  | Sevk tarihi saati bilgisi yer alır. |
| 22 | `DORSEPLAKA1` | varchar(20) | evet |  | Dorse plaka 1 bilgisi yer alır. |
| 23 | `DORSEPLAKA2` | varchar(20) | evet |  | Dorse plaka 2 bilgisi yer alır. |
| 24 | `DORSEPLAKA3` | varchar(20) | evet |  | Dorse plaka 3 bilgisi yer alır. |
| 25 | `MATBUKULLANILSIN` | TDBSMALLINT | evet |  | Matbu kullanılsın işaretli olup olmadığı bilgisi yer alır. |
| 26 | `MATBUNO` | varchar(50) | evet |  | Matbu numarasına girilen değer tutulur. |
| 27 | `MATBUTARIH` | TDBDATETIME | evet |  | Matbu tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 GIB_FATIRS_NO, LICENSEPLATEID, CARRIERVKN, CARRIERNAME, CARRIERSUBCITY, CARRIERCITY
FROM dbo.TBLEIRSEK WITH (NOLOCK);
```
