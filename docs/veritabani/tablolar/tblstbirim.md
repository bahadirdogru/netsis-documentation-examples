---
title: TBLSTBIRIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstbirim/
---

# TBLSTBIRIM

> STOK ÖLÇÜ BİRİMİ KAYITLARI EKRANINDAN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KOD` | varchar(35) | evet |  | Tek bir stok ya da ortak özelliklere sahip stok grupları bazında stok kartında yapılan tanımlamaların dışında yapılan tanımlamalar için girilen kodu tutar. |
| 3 | `OLCUBIRIMI` | varchar(2) | hayır |  | Stok için kullanılan ölçü birimini gösterir. |
| 4 | `PAY` | TDBFLOAT | evet | `1` | 2. ölçü biriminin 1. ölçü birimine oranıdır. Oranın pay bölümünün girildiği alandır. |
| 5 | `PAYDA` | TDBFLOAT | evet | `1` | 2. ölçü biriminin 1. ölçü birimine oranıdır. Oranın payda bölümünün girildiği alandır. |
| 6 | `ACIKLAMA` | varchar(50) | evet |  | Girilen ölçü birimine ait girilen açıklamayı gösterir. |
| 7 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `TIP` | char(1) | evet |  | Stok ölçü birimi kayıtları ekranıda seçilen kod türünü gösterir. |
| 9 | `NETAGIRLIK` | TDBFLOAT | evet | `0` | Ölçü birimine bağlı stokların net ağırlığını gösterir. |
| 10 | `BRUTAGIRLIK` | TDBFLOAT | evet | `0` | Ölçü birimine bağlı stokların brüt ağırlığını gösterir. |
| 11 | `EN` | TDBFLOAT | evet | `0` | Ölçü birimine bağlı stokların enini gösterir. |
| 12 | `BOY` | TDBFLOAT | evet | `0` | Ölçü birimine bağlı stokların boyunu gösterir. |
| 13 | `YUKSEKLIK` | TDBFLOAT | evet | `0` | Ölçü birimine bağlı stokların yüksekliğini gösterir. |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTBIRIM_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSTBIRIM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTBIRIM_IND_2` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLSTBIRIM_IND_3` | `TIP+KOD+OLCUBIRIMI` | Unique, Non-clustered |
| `TBLSTBIRIM_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KOD, OLCUBIRIMI, PAY, PAYDA, ACIKLAMA
FROM dbo.TBLSTBIRIM WITH (NOLOCK);
```
