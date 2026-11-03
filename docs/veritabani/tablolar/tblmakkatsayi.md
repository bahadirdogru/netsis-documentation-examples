---
title: TBLMAKKATSAYI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmakkatsayi/
---

# TBLMAKKATSAYI

> MAKİNE MASRAF KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MAKINCKEYNO` | TDBINTEGER | hayır |  | Makine inckey numarasını tutan sahadır. |
| 4 | `MSRINCKEYNO` | TDBINTEGER | hayır |  | Masraf kodu inckey numarasını tutan sahadır. |
| 5 | `MUHFISSQL` | TDBMEMO | hayır |  | Tanımlanan masraf kısıtlarını tutan sahadır. |
| 6 | `YUZDE` | TDBFLOAT | hayır | `0` | dagıtılacak giderin yuzde kacının ilgili makineye yansıtılacagını tutan sahadır. |
| 7 | `YUZDESQL` | TDBMEMO | evet |  | Katsayı belirle sahasıdır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `STRYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `STRYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMAKKATSAYI_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMAKKATSAYI_FKEY2` | `MAKINCKEYNO` |
| FOREIGN KEY | `TBLMAKKATSAYI_FKEY3` | `MSRINCKEYNO` |
| PRIMARY KEY | `TBLMAKKATSAYI_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMAKKATSAYI_IND_1` | `SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO` | Nonclustered |
| `TBLMAKKATSAYI_IND_2` | `MAKINCKEYNO` | Nonclustered |
| `TBLMAKKATSAYI_IND_3` | `MSRINCKEYNO` | Nonclustered |
| `TBLMAKKATSAYI_PK` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, MAKINCKEYNO, MSRINCKEYNO, MUHFISSQL, YUZDE
FROM dbo.TBLMAKKATSAYI WITH (NOLOCK);
```
