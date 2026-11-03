---
title: TBLCONFIGURUNGRUPBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigurungrupbaglanti/
---

# TBLCONFIGURUNGRUPBAGLANTI

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `URUNGRUBU_ID` | TDBINTEGER | hayır |  | Ürün grup numarasını tutar |
| 5 | `ALTERNATIFGRUBU_ID` | TDBINTEGER | hayır |  | Alternatif grup numarasını tutar |
| 6 | `EKPARCA` | char(1) | evet | `H` | Tanımlanmakta olan alternatif grubun ekparça olup olmadığı bilgisi |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK3` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGURUNGRUPBAGLANTI_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPBAGLANTI_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPBAGLANTI_FKEY3` | `URUNGRUBU_ID` |
| FOREIGN KEY | `TBLCONFIGURUNGRUPBAGLANTI_FKEY4` | `ALTERNATIFGRUBU_ID` |
| PRIMARY KEY | `TBLCONFIGURUNGRUPBAGLANTI_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGURUNGRUPBAGLANTI_IND_1` | `ALTERNATIFGRUBU_ID, URUNGRUBU_ID, EKPARCA` | nonclustered |
| `TBLCONFIGURUNGRUPBAGLANTI_IND_2` | `ISLETME_KODU, SUBE_KODU, ALTERNATIFGRUBU_ID, URUNGRUBU_ID, EKPARCA` | nonclustered |
| `TBLCONFIGURUNGRUPBAGLANTI_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, URUNGRUBU_ID, ALTERNATIFGRUBU_ID, EKPARCA
FROM dbo.TBLCONFIGURUNGRUPBAGLANTI WITH (NOLOCK);
```
