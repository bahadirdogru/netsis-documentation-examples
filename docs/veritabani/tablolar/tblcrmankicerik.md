---
title: TBLCRMANKICERIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmankicerik/
---

# TBLCRMANKICERIK

> ANKET ICERIK TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `ICERIKKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ICERIKKODU` | TDBANKETKODU | hayır |  | Tanımlanan icerigin kodunu tutar. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KONU` | varchar(100) | evet |  | İcerik ismi alanına girilen acıklmayı tutar. |
| 5 | `GRUPKODU` | TDBGRUPKOD | evet |  | Icerik kategorisi kodunu tutar. |
| 6 | `BASTARIH` | TDBDATETIME | evet |  | Tanımlanan icerigin gecerli olacagi baslangıc tarihini tutar. |
| 7 | `BITTARIH` | TDBDATETIME | evet |  | Tanımlanan icerigin gecerli olacagi bitis tarihini tutar. |
| 8 | `DURUM` | char(1) | evet | `U` | Duzeltiliyor=U;Inaktif=I;Aktif=A degeri ile tutuluyor. |
| 9 | `CEVAPTIPI` | TDBBYTE | evet | `1` | Secenek tipinde;Tek secmeli=1;Coktan Secmeli=2;Serbest= |
| 10 | `KATEGORITIPI` | TDBBYTE | evet | `1` | Kategori tipinin tutulduğu sahadır |
| 11 | `KATEGORIALAN` | text | evet |  | İcerik alanını tutar. |
| 12 | `AGIRLIK` | TDBFLOAT | evet | `0` | İcerik agirligini tutar. |
| 13 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKICERIK_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMANKICERIK_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCRMANKICERIK_FKEY3` | `GRUPKODU` |
| PRIMARY KEY | `TBLCRMANKICERIK_PKEY` | `ICERIKKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKICERIK_IND_1` | `ISLETME_KODU, SUBE_KODU, GRUPKODU` | Nonclustered |
| `TBLCRMANKICERIK_IND_2` | `ISLETME_KODU, SUBE_KODU, KONU` | Nonclustered |
| `TBLCRMANKICERIK_IND_3` | `ISLETME_KODU, SUBE_KODU, DURUM` | Nonclustered |
| `TBLCRMANKICERIK_IND_4` | `ISLETME_KODU, SUBE_KODU, BASTARIH, BITTARIH` | Nonclustered |
| `TBLCRMANKICERIK_IND_5` | `ISLETME_KODU, SUBE_KODU, ONAYTIPI` | Nonclustered |
| `TBLCRMANKICERIK_IND_6` | `ISLETME_KODU, SUBE_KODU, ONAYNUM` | Nonclustered |
| `TBLCRMANKICERIK_PKEY` | `ICERIKKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ICERIKKODU, ISLETME_KODU, SUBE_KODU, KONU, GRUPKODU, BASTARIH
FROM dbo.TBLCRMANKICERIK WITH (NOLOCK);
```
