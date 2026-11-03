---
title: TBLSTOKBAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokbar/
---

# TBLSTOKBAR

> STOK>KAYIT>BARKOD KAYITLARI EKRANINA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `STOK_KODU+BARKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BARKOD` | varchar(35) | hayır |  | Stok kodu için tanımlanmış barkod kodunu gösterir. |
| 3 | `BARTIP` | char(1) | evet |  | Stok kodu için tanımlanmış barkod tipini gösterir. |
| 4 | `BARTARIH` | TDBDATETIME | evet |  | Stok kodu için tanımlanmış barkod kodunun kayıt tarihini gösterir. |
| 5 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBSMALLINT | evet |  | Stok kodunun ölçü birimini gösterir. |
| 10 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `KILIT` | char(1) | evet |  | Tanımlanan barkod bilgisinin kullanılmayacağı durumlarda, kilitlenmesi için kullanılır. Kilit parametresi işaretlendiğinde 'E' değerini gösterir. |
| 15 | `YAPKOD` | varchar(15) | evet | `NULL` | Stok kodunun varsa yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKBARPKEY` | `STOK_KODU+BARKOD` |
| FOREIGN KEY | `TBLSTOKBAR_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKBARYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKBAR_IDX_YAPKOD1` | `YAPKOD+STOK_KODU` | Non-unique, Non-Clustered |
| `TBLSTOKBAR_IND_1` | `STOK_KODU+KILIT` | Non-unique, Non-Clustered |
| `TBLSTOKBAR_IND_2` | `BARKOD` | Unique, Non-Clustered |
| `TBLSTOKBARPKEY` | `STOK_KODU+BARKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, BARKOD, BARTIP, BARTARIH, S_YEDEK1, S_YEDEK2
FROM dbo.TBLSTOKBAR WITH (NOLOCK);
```
