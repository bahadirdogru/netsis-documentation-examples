---
title: TBLKRTTHSLT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkrtthslt/
---

# TBLKRTTHSLT

> KREDI KARTI TAHSILAT KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | hayır |  | Tarih sahasıdır. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ALACAKNETHESKODU` | varchar(15) | hayır |  | Alacaklanacak banka hesap kodunu tutan sahadır. |
| 5 | `BORCNETHESKODU` | varchar(15) | hayır |  | Borclanacak banka hesap kodunu tutan sahadır. |
| 6 | `BNKKSTINCKEYNO` | TDBINTEGER | evet |  | Banka kesinti inckeynumarasını tutan sahadır. |
| 7 | `HARTURU` | TDBBYTE | hayır |  | Taksit tahsilati icin 4; kesinrti tahsilatı icin 6 degerini tutar. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Tutar sahasıdır. |
| 9 | `DUZELTILMISTUTAR` | TDBFLOAT | evet |  | Kredi tahsilat ekranında tutar uzerinde duzeltme yapılmıs ise,duzeltilmis tutar sahasıdır. |
| 10 | `DOVIZTIPI` | TDBBYTE | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DOVIZTUTARI` | TDBFLOAT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTILMISDOVIZTUTAR` | TDBFLOAT | evet |  | Kredi tahsilat ekranında doviz tutarı uzerinde duzeltme yapılmıs ise,duzeltilmis doviz tutarı sahasıdır. |
| 13 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `PLASIYERKODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ONAY` | char(1) | evet |  | Kayıt onaylanmıs ise E degerini tutan sahadır. |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKRTTHSLT_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKRTTHSLT_FKEY1` | `ALACAKNETHESKODU` |
| FOREIGN KEY | `TBLKRTTHSLT_FKEY2` | `BORCNETHESKODU` |
| FOREIGN KEY | `TBLKRTTHSLT_FKEY3` | `PROJE_KODU` |
| PRIMARY KEY | `TBLKRTTHSLT_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKRTTHSLT_IND_1` | `SUBE_KODU, ALACAKNETHESKODU` | Nonclustered |
| `TBLKRTTHSLT_IND_2` | `ALACAKNETHESKODU` | Nonclustered |
| `TBLKRTTHSLT_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, TARIH, SUBE_KODU, ALACAKNETHESKODU, BORCNETHESKODU, BNKKSTINCKEYNO
FROM dbo.TBLKRTTHSLT WITH (NOLOCK);
```
