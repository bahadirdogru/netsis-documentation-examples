---
title: TBLURTYENIALANTABLO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurtyenialantablo/
---

# TBLURTYENIALANTABLO

> ÜRETİM>KAYIT>SAHA TABLO EŞLEŞTİRMESİ EKRANINDA>GENEL TANIMLAMALAR>SAHA TABLO EŞLEŞTİRMELERİNDEN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `TABLOADI+ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TABLOADI` | varchar(30) | hayır |  | Oluşturulan nesnenin varitabanında hangi tabloya eklendiğini gösterir. |
| 2 | `ALANADI` | varchar(30) | hayır |  | Kullanıcı tarafından alan adı sahasına girilen veritabanında yeni oluşacak nesnenin adını gösterir. |
| 3 | `ZORUNLU` | char(1) | evet | `H` | Kullanıcı tarafından yaratılan nesne alanına değer girilmesinin zorunlu olup olmadığı bilgisini gösterir. |
| 4 | `AKTIF` | char(1) | evet | `H` | Kullanıcı tarafından yaratılan nesne alanının üretim sonu kaydındaki kullanıcı tanımlı sahalar sekmesinde aktif olarak görünüp görünmemesi bilgisini gösterir. |
| 5 | `GOSTERSIRASI` | TDBINTEGER | hayır |  | Birden fazla nesne alanı kullanıcı tarafından yaratıldı ise bu nesnelerin kendi aralarındaki gösterim sırasını gösterir. |
| 6 | `VTDEGISTI` | char(1) | evet | `H` | Alan altına çizgi çizilsin arametresini gösterir. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FATALANNO` | int | evet |  | Eklenen ek saha-59383 nolu istek |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLURTYENIALANTABLO_PKEY` | `TABLOADI+ALANADI` |
| FOREIGN KEY | `TBLURTYENIALANTABLO_FKEY1` | `ALANADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURTYENIALANTABLO_IND1` | `TABLOADI+GOSTERSIRASI` | Unique, Non-clustered |
| `TBLURTYENIALANTABLO_IND2` | `TABLOADI+GOSTERSIRASI+AKTIF` | Non-unique, Non-clustered |
| `TBLURTYENIALANTABLO_PKEY` | `TABLOADI+ALANADI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 TABLOADI, ALANADI, ZORUNLU, AKTIF, GOSTERSIRASI, VTDEGISTI
FROM dbo.TBLURTYENIALANTABLO WITH (NOLOCK);
```
