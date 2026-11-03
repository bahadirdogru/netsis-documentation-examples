---
title: TBLSATIRGUVENLIK (Oracle veritabanında vardır.)
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsatirguvenlik-oracle-veritabaninda-vardir/
---

# TBLSATIRGUVENLIK (Oracle veritabanında vardır.)

> KAYIT>SATIRBAZI GÜVENLİK EKRANINDA TANIMLANAN KAYITLARI GÖSTERİR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `KULLANICI_KODU+SUBE_KODU+NESNEADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Satır bazı güvenliğin aktif olacağı kullanıcı numarasını gösterir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `NESNEADI` | varchar(50) | hayır |  | Satır bazı güvenlik uygulaması için seçilen nesne adını gösterir. |
| 4 | `RESTRICTION` | TDBMEMO | evet |  | Seçilen nesne için uygulanan kısıtlamayı gösterir. |
| 5 | `HATAACK` | varchar(255) | evet |  | Seçilen nesneye ve verilen kısıta göre ekrana gelecek olan hata açıklamasını gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `SAHAGUVENLIK_PK` | `KULLANICI_KODU+SUBE_KODU+NESNEADI` |
| FOREIGN KEY | `SAHAGUVENLIK_FK` | `KULLANICI_KODU+SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `SAHAGUVENLIK_PK` | `KULLANICI_KODU+SUBE_KODU+NESNEADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KULLANICI_NO, SUBE_KODU, NESNEADI, RESTRICTION, HATAACK, KAYITYAPANKUL
FROM dbo.TBLSATIRGUVENLIK (Oracle veritabanında vardır.) WITH (NOLOCK);
```
