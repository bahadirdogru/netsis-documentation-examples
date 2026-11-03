---
title: TBLBKMSBISSTOKTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmsbisstoktra/
---

# TBLBKMSBISSTOKTRA

> Açıklama yok.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SIRANO` | varchar(8) | hayır |  | Sıra no alanını tutar. |
| 3 | `STOKKODU` | TDBSTOKKOD | hayır |  | Fiyatı için özel fiyat listeleri hazırlanacak stok kodudur. |
| 4 | `MIKTAR` | TDBFLOAT | hayır | `0` | Bileşen stok kodunun karma koli içindeki miktarını gösterir. |
| 5 | `BIRIMFIYAT` | TDBFLOAT | hayır | `0` | Birim fiyat sahası |
| 6 | `HAREKETTIPI` | TDBSMALLINT | hayır |  | Hareket tipini gösterir |
| 7 | `DURUMU` | TDBBYTE | hayır | `0` | Durum kodunu tutan sahadır. |
| 8 | `BELGENO` | TDBBELGENO | evet |  | Fis no alanını tutar. |
| 9 | `HAREKET_ID` | TDBINTEGER | evet |  | Hareket numarasını gösterir |
| 10 | `REF_ISLEM_ID` | TDBINTEGER | evet |  | Referans işlem numarasını gösterir |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMSBISSTOKTRA_FKEY_1` | `REF_ISLEM_ID` |
| FOREIGN KEY | `TBLBKMSBISSTOKTRA_FKEY_2` | `STOKKODU` |
| PRIMARY KEY | `TBLBKMSBISSTOKTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMSBISSTOKTRA_IND_1` | `REF_ISLEM_ID, SIRANO` | nonclustered, unique |
| `TBLBKMSBISSTOKTRA_IND_2` | `STOKKODU` | nonclustered |
| `TBLBKMSBISSTOKTRA_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SIRANO, STOKKODU, MIKTAR, BIRIMFIYAT, HAREKETTIPI
FROM dbo.TBLBKMSBISSTOKTRA WITH (NOLOCK);
```
