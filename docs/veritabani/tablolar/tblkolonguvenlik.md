---
title: TBLKOLONGUVENLIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkolonguvenlik/
---

# TBLKOLONGUVENLIK

> KOLON BAZI GEÇERLİK DEĞERLERİNİ TUTAR

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `KULLANICI_NO, SUBE_KODU, NESNEADI, KOLONADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kısıtlamanın gecerli olacagı kullanıcı kodunu tutan sahadır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `NESNEADI` | varchar(50) | hayır |  | Kolonbazı kısıtlamanın hangi tablo icin yapılacagını tutan sahadır. |
| 4 | `KOLONADI` | varchar(50) | hayır |  | Kolonbazı kısıtlamanın hangi saha icin yapılacagını tutan sahadır. |
| 5 | `VALIDATIONSQL` | TDBMEMO | evet |  | Kısıtlamanın tanımlamasını tutan SQl cumlesinin sahasıdır. |
| 6 | `HATAACK` | varchar(255) | evet |  | Hata acıklama alanını tutan sahadır. |
| 7 | `NULLKONTROLYAPILSINMI` | char(1) | evet | `H` | Null kontrolu yapılsın mı parametresi isaretli ise E degerini tutan sahadır. |
| 8 | `VALIDATIONKOLON` | varchar(90) | evet |  | Kolon bazı geçerlilik değerlerinde seçilen saha adınu tutar |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Silme kontrolu yapılsın parametresi isaretli ise E degerini tutar. |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `KOLONGUVENLIK_FK` | `SUBE_KODU, KULLANICI_NO` |
| PRIMARY KEY | `KOLONGUVENLIK_PK` | `KULLANICI_NO, SUBE_KODU, NESNEADI, KOLONADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `KOLONGUVENLIK_PK` | `KULLANICI_NO, SUBE_KODU, NESNEADI, KOLONADI` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KULLANICI_NO, SUBE_KODU, NESNEADI, KOLONADI, VALIDATIONSQL, HATAACK
FROM dbo.TBLKOLONGUVENLIK WITH (NOLOCK);
```
