---
title: TBLDAGVASITABILGI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagvasitabilgi/
---

# TBLDAGVASITABILGI

> VASITA BILGILERINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `PLAKANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `PLAKANO` | varchar(15) | hayır |  | Plaka numarasını tutar. |
| 4 | `DEPOKOD` | TDBINTEGER | evet |  | Depo kodunu tutar. |
| 5 | `HACIM` | TDBFLOAT | evet |  | Kamyonun toplam hacmini tutar. |
| 6 | `PLASIYERKOD` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 7 | `AGIRLIK` | TDBFLOAT | evet |  | Kamyonun agırlıgını tutar. |
| 8 | `ISIM1` | varchar(50) | evet |  | Acıklama1 alanını tutar. |
| 9 | `ISIM2` | varchar(50) | evet |  | Acıklama2 alanını tutar. |
| 10 | `BIRIMLITREFIYAT` | TDBFLOAT | evet |  | Kamyonun 1 km de yaktıgı akaryakıt fiyatını tutar. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDGVASBILGI_ISKODU_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDGVASBILGI_SUBEKODU_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `PK_TBLDAGVASITABILGI` | `PLAKANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `IDX_TBLDAGKAMYONBILGI_DEPKOD` | `DEPOKOD` | nonclustered |
| `IDX_TBLDAGKAMYONBILGI_PLSKOD` | `ISLETME_KODU, SUBE_KODU, PLASIYERKOD` | nonclustered |
| `PK_TBLDAGVASITABILGI` | `PLAKANO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, PLAKANO, DEPOKOD, HACIM, PLASIYERKOD
FROM dbo.TBLDAGVASITABILGI WITH (NOLOCK);
```
