---
title: TBLHESKODESLES
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblheskodesles/
---

# TBLHESKODESLES

> İŞLEM TİPİ BAZINDA HESAP KODLARI TANIMLAMA BİLGİLERİ TABLOSU

- **Modül:** [ENTEGRASYON](/veritabani/moduller/entegrasyon/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `ISLETME_KODU, SUBE_KODU, ISLEMTIPI, KAYNAKHESKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KAYNAKHESKOD` | TDBMUHKOD | hayır |  | Kaynak hesap kodu bilgisi |
| 4 | `ISLEMTIPI` | varchar(8) | hayır |  | Alış faturası vb. işlem tipleri bilgisi bu sahada tutulur |
| 5 | `HEDEFHESKOD` | TDBMUHKOD | evet |  | Hedef hesap kodu bilgisi |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLHESKODESLES_PKEY` | `ISLETME_KODU, SUBE_KODU, ISLEMTIPI, KAYNAKHESKOD` |
| FOREIGN KEY | `TBLHESKODESLES_FKEY` | `SUBE_KODU REFERENCES TBLSUBELER (SUBE_KODU)` |
| FOREIGN KEY | `TBLHESKODESLES_FKEY1` | `ISLETME_KODU REFERENCES TBLISLETMELER (ISLETME_KODU)` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHESKODESLES_PKEY` | `ISLETME_KODU, SUBE_KODU, ISLEMTIPI, KAYNAKHESKOD` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, KAYNAKHESKOD, ISLEMTIPI, HEDEFHESKOD, KAYITYAPANKUL
FROM dbo.TBLHESKODESLES WITH (NOLOCK);
```
