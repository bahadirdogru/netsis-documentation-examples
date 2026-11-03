---
title: TBLURTYENIALAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurtyenialan/
---

# TBLURTYENIALAN

> ÜRETİM>KAYIT>SAHA TABLO EŞLEŞTİRMESİ EKRANINDA>GENEL TANIMLAMALAR>SAHA TANIMLAMALARINDAN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALANADI` | varchar(30) | hayır |  | Kullanıcı tarafından alan adı sahasına girilen veritabanında yeni oluşacak nesnenin adını gösterir. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ALANTIPI` | TDBSMALLINT | hayır |  | Oluşacak yeni nesne alanının tipini gösterir. |
| 4 | `BASLIK` | varchar(100) | evet |  | Oluşacak yeni nesne alanın üretim sonu kaydı>kullanıcı tanımlı sahalar sekmesinde görünecek başlık bilgisini gösterir. |
| 5 | `COMPONENTTIP` | TDBINTEGER | hayır |  | Yeni oluşacak nesnenin bileşen tipini gösterir. |
| 6 | `ONDEGER` | varchar(200) | evet |  | Yeni oluşacak nesne alanına default gelmesi istenen değerini gösterir. |
| 7 | `UZUNLUK` | TDBINTEGER | evet |  | Yeni oluşacak nesne alanına girilecek karakter uzunluğunu gösterir. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLURTYENIALAN_PKEY` | `ALANADI` |
| FOREIGN KEY | `TBLURTYENIALAN_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURTYENIALAN_IND1` | `ISLETME_KODU+ALANADI` | Unique, Non-clustered |
| `TBLURTYENIALAN_IND2` | `ISLETME_KODU+BASLIK` | Non-unique, Non-clustered |
| `TBLURTYENIALAN_IND3` | `ISLETME_KODU+COMPONENTTIP` | Non-unique, Non-clustered |
| `TBLURTYENIALAN_IND4` | `ISLETME_KODU+ALANTIPI` | Non-unique, Non-clustered |
| `TBLURTYENIALAN_PKEY` | `ALANADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ALANADI, ISLETME_KODU, ALANTIPI, BASLIK, COMPONENTTIP, ONDEGER
FROM dbo.TBLURTYENIALAN WITH (NOLOCK);
```
