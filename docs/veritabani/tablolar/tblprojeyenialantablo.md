---
title: TBLPROJEYENIALANTABLO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprojeyenialantablo/
---

# TBLPROJEYENIALANTABLO

> PROJE KODU GİRİŞİ>KULLANICI TANIMLI SAHALAR>SAHA TABLO EŞLEŞTİRME MENÜSÜNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `TABLOADI+ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TABLOADI` | varchar(30) | hayır |  | Kullanıcı tarafından oluşturulan alanadının veritabanında hangi tabloya ekleneceğini gösterir. |
| 2 | `ALANADI` | varchar(30) | hayır |  | Saha tanımlama ekranında alan adı sahasında kullanıcı tarafından tanımlanan alan adını gösterir. |
| 3 | `ZORUNLU` | char(1) | evet | `H` | Kullanıcı tarafından girilmesi zorunlu bir alansa 'E', değilse 'H' değerini gösterir. |
| 4 | `AKTIF` | char(1) | evet | `H` | Kullanıcı tarafından oluşturulan alanadının proje kodu girişi ekranında görünüyorsa 'E', görünmüyorsa 'H' değerini gösterir. |
| 5 | `GOSTERSIRASI` | TDBINTEGER | hayır |  | Birden fazla alanadı girildiğinde öncelik sırasını gösterir. |
| 6 | `VTDEGISTI` | char(1) | evet | `H` | Default olarak 'H' değeri atılır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK2` | char(1) | evet |  | Alt çizgi çekilsin parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPROJEYENIALANTABLO_PKEY` | `TABLOADI+ALANADI` |
| FOREIGN KEY | `TBLPROJEYENIALANTABLO_FKEY1` | `ALANADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPROJEYENIALANTABLO_IND1` | `TABLOADI+GOSTERSIRASI` | Unique-Non-clustered |
| `TBLPROJEYENIALANTABLO_IND2` | `TABLOADI+AKTIF+GOSTERSIRASI` | Non-unique, Non-clustered |
| `TBLPROJEYENIALANTABLO_PKEY` | `TABLOADI+ALANADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 TABLOADI, ALANADI, ZORUNLU, AKTIF, GOSTERSIRASI, VTDEGISTI
FROM dbo.TBLPROJEYENIALANTABLO WITH (NOLOCK);
```
