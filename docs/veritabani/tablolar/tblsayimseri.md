---
title: TBLSAYIMSERI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsayimseri/
---

# TBLSAYIMSERI

> STOK>İŞLEMLER>STOK SAYIM İŞLEMLERİ>SAYIM GİRİŞİ EKRANINDA SERİLİ BİR STOK GİRİLDİĞİNDE SERİ EKRANINDAKİ SERİ KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `SIRA_NO`
- **Identity:** `SIRA_NO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYIT_TIPI` | char(1) | evet |  | Sayım girişi ekranında girilen kayıtların tipini gösterir.Devir hareketi girildiği için 'A' değerini gösterir. |
| 2 | `SERI_NO` | varchar(50) | evet |  | Sayım girişinde girilen stoklar serili ise, seri numaralarını gösterir. |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Sayım girişinde serili girilen stok kodlarını gösterir. |
| 4 | `SIRA_NO` | TDBINTEGER | hayır |  | Eklenen her yeni seri için program tarafından atılan birbirini takip eden ve unique olan rakamları gösterir. |
| 5 | `STRA_INC` | TDBINTEGER | evet |  | Program tarafından atılan ve sayım girişinde girilen serili stokların seri numaraları için aynı numarayı gösterir. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Sayım tarihini gösterir. |
| 7 | `ACIK1` | varchar(50) | evet |  | Sayım girişinde serili stok kodu girildiğinde açılan seri ekranında seri-2 ye girilen seri kodlarını gösterir. |
| 8 | `ACIK2` | varchar(50) | evet |  | Sayım girişinde serili stok kodu girildiğinde açılan seri ekranında açıklama1 alanına girilen açıklamayı gösterir. |
| 9 | `GCKOD` | char(1) | evet |  | Sayım girişi ekranında girilen serili stok kodlarının giriş ya da çıkış hareketlerini gösterir. Giriş hareketi ise 'G', çıkış hareketi ise 'C' değerini gösterir. |
| 10 | `MIKTAR` | TDBFLOAT | evet | `0` | Sayım girişi ekranında serili stoğun miktarını gösterir. |
| 11 | `MIKTAR2` | TDBFLOAT | evet | `0` | Sayım girişi ekranında serili stoğun 2. miktarını gösterir. |
| 12 | `BELGENO` | TDBBELGENO | evet |  | Bu field kullanılmamaktadır. |
| 13 | `BELGETIP` | char(1) | evet |  | Bu field kullanılmamaktadır. |
| 14 | `HARACIK` | varchar(35) | evet |  | Sayım girişi ekranında açıklama alanına girilen açıklamayı gösterir. |
| 15 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DEPOKOD` | TDBSMALLINT | evet | `0` | Sayım girişi ekranında depo kodu alanuna girilen depo kodunu gösterir. |
| 17 | `SIPNO` | TDBBELGENO | evet |  | Bu field kullanılmamaktadır. |
| 18 | `KARSISERI` | varchar(50) | evet |  | Bu field kullanılmamaktadır. |
| 19 | `YEDEK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK6` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `ACIK3` | varchar(100) | evet |  | Sayım girişinde serili stok kodu girildiğinde açılan seri ekranında açıklama2 alanına girilen açıklamayı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSAYIMSERIPKEY` | `SIRA_NO` |
| FOREIGN KEY | `TBLSAYIMSERI_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSAYIMSERI_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSAYIMSERI_FKEY2` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSAYIMSERI_IND_1` | `SUBE_KODU+TARIH+STOK_KODU` | Non-unique, Non-clustered |
| `TBLSAYIMSERIPKEY` | `SIRA_NO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KAYIT_TIPI, SERI_NO, STOK_KODU, SIRA_NO, STRA_INC, TARIH
FROM dbo.TBLSAYIMSERI WITH (NOLOCK);
```
