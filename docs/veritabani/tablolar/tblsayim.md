---
title: TBLSAYIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsayim/
---

# TBLSAYIM

> SAYIM GİRİŞİ EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Sayım yapılacak stok kodunu gösterir. |
| 3 | `DEPO_KODU` | TDBSMALLINT | hayır | `0` | Sayım yapılacak stok kodunun bulunduğu depoyu gösterir. |
| 4 | `PROMOSYON_KODU` | TDBBYTE | evet | `0` | Default 0 değeri atılır. |
| 5 | `CEVRIM` | TDBFLOAT | hayır | `0` | Stoğa ait sayımın, stok kartındaki birinci ölçü birimi dışındaki ölçü birimleri cinsinden yapılması halinde, miktarın sayım yapılan ölçü birim bilgisini gösterir. |
| 6 | `MIKTAR` | TDBFLOAT | evet | `1` | Sayım sonucu oluşan miktar bilgisini gösterir. |
| 7 | `ACIKLAMA` | varchar(35) | evet |  | Stok Parametre Kayıtlarında bulunan “Sayımda Açıklama ve Fiş No Girilsin” parametresinin işaretlenmesiyle aktif hale gelen bölümdür. Sayım girişi ile ilgili olarak açıklama bilgisini gösterir. |
| 8 | `TARIH` | TDBDATETIME | hayır |  | Sayım tarihini gösterir. |
| 9 | `CARI_KODU` | TDBCARIKOD | evet |  | Lokal depoların cari bazında tutulduğu durumlarda, lokal depo için tanımlanmış cari kodu gösterir. |
| 10 | `SAYIM_FISNO` | TDBBELGENO | evet |  | Stok Parametre Kayıtlarında bulunan “Sayımda Açıklama ve Fiş No Girilsin” parametresinin işaretlenmesiyle aktif hale gelir. 9 karakterden oluşan sayım fiş numarasını gösterir. |
| 11 | `SAYIM_FIAT` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK1` | TDBPROJEKOD | evet |  | Sayım yapılacak stoğun ait olduğu proje kodunu gösterir. |
| 13 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `YAPKOD` | varchar(15) | evet | `NULL` | Sayım yapılacak stoğa ait yaplandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSAYIMPKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSAYIM_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSAYIM_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSAYIM_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLSAYIMYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSAYIM_IDX_YAPKOD1` | `YAPKOD+STOK_KODU+TARIH` | Non-unique, Non-clustered |
| `TBLSAYIM_IND_1` | `SUBE_KODU+TARIH+CARI_KODU+SAYIM_FISNO+DEPO_KODU+PROMOSYON_KODU+CEVRIM+S_YEDEK1+YAPKOD` | Unique, Non-clustered |
| `TBLSAYIM_IND_2` | `TARIH+STOK_KODU+DEPO_KODU+PROMOSYON_KODU+CEVRIM` | Non-unique, Non-clustered |
| `TBLSAYIM_IND_3` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLSAYIM_IND_4` | `INCKEYNO` | Unique, Non-clustered |
| `TBLSAYIMPKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOK_KODU, DEPO_KODU, PROMOSYON_KODU, CEVRIM, MIKTAR
FROM dbo.TBLSAYIM WITH (NOLOCK);
```
