---
title: TBLNETSISLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnetsislog/
---

# TBLNETSISLOG

> LOG RAPORU KAYITLARINI TUTAR

- **Modül:** [LOG](/veritabani/moduller/log/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | timestamp | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `WORKPLACEID` | TDBINTEGER | evet |  |  |
| 4 | `TARIH` | TDBDATETIME | evet | `getdate()` | Tarih bilgilerini tutar. |
| 5 | `MODNO` | TDBSMALLINT | evet |  | Modül numaralarını tutar. |
| 6 | `PRGNO` | TDBSMALLINT | evet |  | Program numaraları tutar. |
| 7 | `TABLENAME` | varchar(30) | evet |  | Tablo adlarını tutar. |
| 8 | `LOGINNAME` | varchar(30) | evet |  | Login name adlarını tutar. |
| 9 | `NETSISUSERID` | TDBSMALLINT | evet |  | Netsis kullanıcı idlerini tutar. |
| 10 | `ISLEMTURU` | char(1) | evet |  | O-Operasyon D-İptal U-Düzeltme I-Kayıt |
| 11 | `MENUBASLIK` | varchar(80) | evet |  | Menü başlıklarını tutar. |
| 12 | `LOGBUFFERNEW` | text | evet |  | Log bilgilerini tutar. |
| 13 | `LOGBUFFEROLD` | text | evet |  |  |
| 14 | `CLIENTNAME` | varchar(64) | evet |  | Makina adlarını tutar. |
| 15 | `EXTERNALPROGRAM` | varchar(64) | evet |  | V.T. Uygulama Adı numarasına karşılık gelir. |
| 16 | `KEY1` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |
| 17 | `KEY2` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |
| 18 | `KEY3` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |
| 19 | `KEY4` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |
| 20 | `KEY5` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |
| 21 | `KEY6` | varchar(255) | evet |  | Belge bazında log raporu için 6 adet key desteği getirilmiştir. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNETSISLOG_IND_1` | `SUBE_KODU+TARIH+ISLEMTURU` | Non-unique, Non-clustered |
| `TBLNETSISLOG_IND_2` | `SUBE_KODU+TARIH+INCKEYNO` | Non-unique, Non-clustered |
| `TBLNETSISLOG_IND_3` | `SUBE_KODU+TARIH+MODNO+PRGNO` | Non-unique, Non-clustered |
| `TBLNETSISLOG_IND_4` | `SUBE_KODU+TARIH+TABLENAME` | Non-unique, Non-clustered |
| `TBLNETSISLOG_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, WORKPLACEID, TARIH, MODNO, PRGNO
FROM dbo.TBLNETSISLOG WITH (NOLOCK);
```
