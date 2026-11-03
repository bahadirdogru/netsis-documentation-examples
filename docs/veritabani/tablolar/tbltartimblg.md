---
title: TBLTARTIMBLG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltartimblg/
---

# TBLTARTIMBLG

> KAYIT> HAREKET GİRİŞİ EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [KANTAR](/veritabani/moduller/kantar/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `TARTIM_NO`
- **Identity:** `TARTIM_NO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARTIM_NO` | TDBINTEGER | hayır |  | Tartım numarasını gösterir. |
| 2 | `PLAKA` | varchar(15) | evet |  | Kamyonun plakasını gösterir. |
| 3 | `KANTARKOD` | varchar(8) | hayır |  | Tanımlanan kantar kodunu gösterir. |
| 4 | `GEL_TARIH` | TDBDATETIME | evet |  | Kamyonun tartıma geliş tarihini ve saatini gösterir. |
| 5 | `GIT_TARIH` | TDBDATETIME | evet |  | Kamyonun tartımdan çıkış tarihini ve saatini gösterir. |
| 6 | `ILK` | TDBFLOAT | evet | `0` | İlk tartım değerini gösterir. |
| 7 | `SON` | TDBFLOAT | evet | `0` | Son tartım değerini gösterir. |
| 8 | `URUN_KODU` | TDBSTOKKOD | evet |  | Tartım kaydının aktarılacağı irsaliye için stok kodunu gösterir. |
| 9 | `CARI_KODU` | TDBCARIKOD | evet |  | Tartım kaydının aktarılacağı irsaliye için müşteri ya da satıcı kodunu gösterir. |
| 10 | `IRSALIYE_KESILDI` | char(1) | evet | `H` | İrsaliyenin kesilip kesilmediğini gösterir. |
| 11 | `IRSALIYE_NO` | TDBBELGENO | evet |  | Tartım bilgilerine bağlı girilen irsaliye numarasını gösterir. |
| 12 | `KAPATMA` | char(1) | evet |  |  |
| 13 | `KAPATMA_ACIKLAMA` | varchar(50) | evet |  |  |
| 14 | `ISIM` | varchar(20) | evet |  | Şoför ismini gösterir. |
| 15 | `MODEL` | varchar(20) | evet |  | Kamyonun modelini gösterir. |
| 16 | `OPERATOR` | varchar(30) | evet |  | Programa girildiğinde tartım kayıtlarını oluşturan operatörün adını gösterir. |
| 17 | `DISTARTIM` | TDBFLOAT | evet | `0` |  |
| 18 | `FARKLI_TESLIM` | char(1) | evet |  | Farklı teslim carisini gösterir. |
| 19 | `ACIKLAMA1` | varchar(50) | evet |  | Açıklama1 alanına girilen açıklamayı gösterir. |
| 20 | `ACIKLAMA2` | varchar(50) | evet |  | Açıklama2 alanına girilen açıklamayı gösterir. |
| 21 | `ACIKLAMA3` | varchar(50) | evet |  | Açıklama3 alanına girilen açıklamayı gösterir. |
| 22 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK1` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK2` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK3` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK1` | TDBFLOAT | evet |  | Fire miktarını gösterir. |
| 29 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `SONKANTARKOD` | varchar(8) | evet |  | Son kantar kodunu gösterir. |
| 32 | `SONOPERATOR` | varchar(30) | evet |  | Son operatörü gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTARTIMBLG_PKEY` | `TARTIM_NO` |
| FOREIGN KEY | `TBLTARTIMBLG_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLTARTIMBLG_FKEY1` | `CARI_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTARTIMBLG_IND_1` | `PLAKA+TARTIM_NO` | Unique-Non-clustered |
| `TBLTARTIMBLG_IND_2` | `KANTARKOD` | Non-unique, Non-clustered |
| `TBLTARTIMBLG_PKEY` | `TARTIM_NO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 TARTIM_NO, PLAKA, KANTARKOD, GEL_TARIH, GIT_TARIH, ILK
FROM dbo.TBLTARTIMBLG WITH (NOLOCK);
```
