---
title: TBLDAGYUKLEMEGRUP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagyuklemegrup/
---

# TBLDAGYUKLEMEGRUP

> DAGITIM MODULU YUKLEME GRUPLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `YUKKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `YUKKOD` | varchar(15) | hayır |  | Yukleme grup kodunu tutar. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama alanını tutar. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGYUKLEMEGRUP` | `YUKKOD` |
| FOREIGN KEY | `TBLDGYUKGRUP_ISKODU_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGYUKLEMEGRUP` | `YUKKOD` | clustered, unique |
| `TBLDAGYUKLEMEGRUP_IND_1` | `ISLETME_KODU, YUKKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, YUKKOD, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLDAGYUKLEMEGRUP WITH (NOLOCK);
```
