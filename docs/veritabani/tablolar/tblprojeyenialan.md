---
title: TBLPROJEYENIALAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprojeyenialan/
---

# TBLPROJEYENIALAN

> PROJE KODU GİRİŞİ>KULLANICI TANIMLI SAHALAR>SAHA TANIMLARI MENÜSÜNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALANADI` | varchar(30) | hayır |  | Kullanıcı tarafından tanımlanan yeni alanları gösterir. Buraya girilen alan adının başına program tarafından “KT_” öndeğeri getirtilmektedir. Bunun sebebi, alanının kullanıcı tarafından tanımlandığının belirlenebilmesidir. Tanımlanan öndeğer değiştirilemez yada kaldırılamaz. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ALANTIPI` | TDBSMALLINT | hayır |  | Tanımlanan sahaya uygun tipini gösterir. Karakter, Karakter Dizesi, Tamsayı, Ondalık Sayı, Bayt ve Tarih tiplerinden biri seçilir. |
| 4 | `BASLIK` | varchar(100) | evet |  | Tanımlanan sahanın ekranda görülecek olan başlık bilgisini gösterir. |
| 5 | `COMPONENTTIP` | TDBINTEGER | hayır |  | Ekranda sahaların görüntülenmesi sırasında bazı kullanılan ekran bileşenlerini gösterir. Ekran bileşenleri; Kombo Seçim Alanı, Yazı Alanı, Onay Kutusu, Çoklu Onay Grubu ve Metin Alanıdır. |
| 6 | `ONDEGER` | varchar(200) | evet |  | Tanımlanan saha için, yeni kayıtta bir öndeğer atanması yapılmak isteniyorsa, girilen öndeğeri gösterir. |
| 7 | `UZUNLUK` | TDBINTEGER | evet |  | Tanımlanan sahaya kaç karakterlik bilgi girişi yapılması isteniyorsa, uzunluk bilgisini gösterir. |
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
| PRIMARY KEY | `TBLPROJEYENIALAN_PKEY` | `ALANADI` |
| FOREIGN KEY | `TBLPROJEYENIALAN_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPROJEYENIALAN_IND1` | `ALANADI+ISLETME_KODU` | Unique-Non-clustered |
| `TBLPROJEYENIALAN_IND2` | `BASLIK+ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLPROJEYENIALAN_IND3` | `COMPONENTTIP+ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLPROJEYENIALAN_IND4` | `ALANTIPI+ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLPROJEYENIALAN_PKEY` | `ALANADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ALANADI, ISLETME_KODU, ALANTIPI, BASLIK, COMPONENTTIP, ONDEGER
FROM dbo.TBLPROJEYENIALAN WITH (NOLOCK);
```
