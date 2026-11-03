---
title: TBLCARIIHRSOZLESME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariihrsozlesme/
---

# TBLCARIIHRSOZLESME

> Açıklama yok.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `CARI_KODU, SOZLESMENO`
- **Not:** Bu tablo şema dokümanında ikinci kez, [DIŞ TİCARET modülünde](/veritabani/tablolar/tblcariihrsozlesme-2/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Her müşterinin deposunu lokal depo olarak tanımlayarak takip etmek isteyenler için cari kodunun girileceği sahadır. |
| 2 | `SOZLESMENO` | varchar(50) | hayır |  | Sozlesme numaralarını tutan sahadır. |
| 3 | `BASTAR` | TDBDATETIME | evet |  | Baslangıc tarihini tutan sahadır. |
| 4 | `BITTAR` | TDBDATETIME | evet |  | Bitis tarihini tutan sahadır. |
| 5 | `ACIKLAMA` | varchar(255) | evet |  | Acıklama alanını tutan sahadır. |
| 6 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIIHRSOZLESME_FKEY1` | `CARI_KODU` |
| PRIMARY KEY | `TBLCARIIHRSOZLESME_PKEY` | `CARI_KODU, SOZLESMENO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIIHRSOZLESME_PKEY` | `CARI_KODU, SOZLESMENO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU, SOZLESMENO, BASTAR, BITTAR, ACIKLAMA, SUBE_KODU
FROM dbo.TBLCARIIHRSOZLESME WITH (NOLOCK);
```
