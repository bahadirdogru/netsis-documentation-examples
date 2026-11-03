---
title: TBLESNYAPNUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnyapnum/
---

# TBLESNYAPNUM

> KAYIT>ESNEK YAPILANDIRMA>ESNEK YAPILANDIRMA BAŞLANGIÇ NUMARALARI EKRANINDAKİ TANIMLAMALARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `YAPNUMKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `YAPNUMKOD` | varchar(15) | hayır |  | Yapılan tanımlamaya verilecek olan kodu gösterir. |
| 2 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama girilecek saha |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `SD` | char(1) | hayır | `S` | Sabit seçili ise 'S', değişken seçili ise 'D' değerini gösterir. |
| 6 | `BASLANGICKAREKTER` | text | hayır |  | Değişken seçeneği işaretli ise; yazılan SQL cümlesini, sabit seçili ise; başlangıç karakterini gösterir. |
| 7 | `BASLANGICNUMARASI` | TDBINTEGER | hayır | `0` | Otomatik yapılandırma kodunun, başlangıç karakterlerinden sonraki bölümünde yer alacak olan sıra numarasının başlangıç değerini gösterir. |
| 8 | `SONNUMARA` | TDBINTEGER | hayır | `0` | Yapılandırma kodunun son kaldığı numarayı gösterir. |
| 9 | `AKTIF` | char(1) | hayır | `E` | Otomatik üretim kodunun geçerli olup olmadığını gösterir. |
| 10 | `UZUNLUK` | TDBBYTE | hayır | `0` | Otomatik Yapılandırma kodunun kaç karakterden oluşacağını gösterir. |
| 11 | `KISIT` | text | evet |  | Geçerli Stoklar sekmesinde verilen kısıt bilgisini gösterir. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Tanımlanan Yapılandırma kodu üzerinde herhangi bir değişiklik yapılıp yapılmadığını gösterir. |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `TIP` | char(1) | evet | `NULL` | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLESNYAPNUM_PKEY` | `YAPNUMKOD` |
| FOREIGN KEY | `TBLESNYAPNUM_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLESNYAPNUM_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNYAPNUM_PKEY` | `YAPNUMKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 YAPNUMKOD, ACIKLAMA, SUBE_KODU, ISLETME_KODU, SD, BASLANGICKAREKTER
FROM dbo.TBLESNYAPNUM WITH (NOLOCK);
```
