---
title: TBLPROJE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblproje/
---

# TBLPROJE

> PROJE KODU GİRİŞİ>PROJE SABİT TANIMLARI EKRANINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `PROJE_KODU`

## İlgili sayfalar

- [Proje (REST Project)](/rest/uclar/#siparis-makbuz-ve-diger-belgeler)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Yardımcı programlardan proje kodu uygulaması parametresi işaretlendiğinde proje sabit tanımları ekranında proje kodu sahasına girilen kodu gösterir. |
| 3 | `TUR` | char(1) | evet |  | Proje sabit tanımları ekranında proje kodun türünü gösterir. Proje türü ana ise 'A', muavin ise 'M' değerini gösterir. |
| 4 | `PROJE_ACIKLAMA` | varchar(50) | evet |  | Proje sabit tanımları ekranında proje kodu sahasına girilen kodunun açıklamasını gösterir. |
| 5 | `RAPOR_KOD1` | varchar(8) | evet |  | İlgili proje için rapor amaçlı bilgi girişinde girilen kayıtları tutar. Rapor amaçlı bir sahadır. |
| 6 | `RAPOR_KOD2` | varchar(8) | evet |  | İlgili proje için rapor amaçlı bilgi girişinde girilen kayıtları tutar. Rapor amaçlı bir sahadır. |
| 7 | `REF_KOD` | TDBREFKOD | evet |  | Girilen proje koduna ait varsa referans kodunu gösterir. |
| 8 | `SORUMLU` | varchar(50) | evet |  | İlgili projeden sorumlu olan kişinin isim bilgisini gösterir. Rapor amaçlı bir sahadır. |
| 9 | `DURUM` | varchar(50) | evet |  | Projenin durumu ile ilgili rapor amaçlı girilen bilgiyi gösterir. Bu alana Kapandı, Devam Ediyor veya Durduruldu gibi açıklamalar girilerek, daha sonra bu girilen açıklamalara göre rapor alınabilmektedir. |
| 10 | `AKTIF` | TDBSMALLINT | evet |  | Proje kodunun aktif olup olmadığını gösterir. |
| 11 | `BASTAR` | TDBDATETIME | evet |  | İlgili projeye başlama tarihini gösterir. |
| 12 | `BITTAR` | TDBDATETIME | evet |  | İlgili projeye bitiş tarihini gösterir. |
| 13 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPROJE_PKEY` | `PROJE_KODU` |
| FOREIGN KEY | `TBLPROJE1_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPROJE_IND_1` | `TUR+PROJE_KODU` | Unique, Non-clustered |
| `TBLPROJE_IND_2` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLPROJE_PKEY` | `PROJE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, PROJE_KODU, TUR, PROJE_ACIKLAMA, RAPOR_KOD1, RAPOR_KOD2
FROM dbo.TBLPROJE WITH (NOLOCK);
```
