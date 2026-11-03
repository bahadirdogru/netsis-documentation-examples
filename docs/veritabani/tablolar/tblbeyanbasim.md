---
title: TBLBEYANBASIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbeyanbasim/
---

# TBLBEYANBASIM

> MUHTASAR ,KDV BEYANNAME, GECICI VERGI BEYANNAMESI, DAMGA VERGI BEYANNAMESI PARAMETRE KAYITLARI VE BASIM KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `ISLETME_KODU, BEYANKOD, KAYITTIP, ALANADI, KAYNAKADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BEYANKOD` | varchar(15) | hayır |  | Basılan beyanname kodunu tutan sahadır. |
| 2 | `KAYNAKADI` | varchar(15) | hayır |  | Beyanname adını tutan sahadır. |
| 3 | `KAYITTIP` | char(1) | hayır |  | Kayıt tipini tutan sahadır - kayıdın parametreden mi, basımdan mı geldigini tutan sahadır. |
| 4 | `ALANADI` | varchar(15) | hayır |  | Basılacak alan adını tutan sahadır. |
| 5 | `ALANDEGER` | varchar(255) | evet |  | Basılacak alana girilen degeri tutan sahadır. |
| 6 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `VDKOD` | varchar(6) | hayır |  | Vergi dairesi kodu bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBEYANBASIM_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBEYANBASIM_PK1` | `ISLETME_KODU, BEYANKOD, KAYITTIP, ALANADI, KAYNAKADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBEYANBASIM_IND1` | `ISLETME_KODU, DUZELTMEYAPANKUL, L_YEDEK1, BEYANKOD, KAYITTIP, ALANADI, KAYNAKADI` | Nonclustered, unique |
| `TBLBEYANBASIM_PK1` | `ISLETME_KODU, BEYANKOD, KAYITTIP, ALANADI, KAYNAKADI` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 BEYANKOD, KAYNAKADI, KAYITTIP, ALANADI, ALANDEGER, KAYITYAPANKUL
FROM dbo.TBLBEYANBASIM WITH (NOLOCK);
```
