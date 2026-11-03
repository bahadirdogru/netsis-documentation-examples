---
title: TBLWORKPATH
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblworkpath/
---

# TBLWORKPATH

> İŞ AKIŞ KAYITLARINI TUTAR

- **Modül:** [İŞ AKIŞ YÖNETİMİ](/veritabani/moduller/is-akis-yonetimi/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `SUBE_KODU+PATHKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PATHKODU` | varchar(8) | hayır |  | İş akış kayıtlarında iş kodu sahasına girilen numarayı gösterir. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | İş akış kayıtlarında iş kodu sahasına girilen numara ile ilgili açıklamayı gösterir. |
| 3 | `MODULNO` | TDBINTEGER | evet |  | Girilen iş kodunun hangi modüle ait olduğunu gösterir. |
| 4 | `PROGRAMNO` | TDBSMALLINT | evet |  | Girilen iş kodu için belirtilen modül içerisindeki hangi programa ait olduğunu gösterir. |
| 5 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `PATHTIPI` | char(1) | evet | `H` | İş akışı için belirtilen pathtipi yeni kayıt ise 'I', kayıt düzeltme ise 'U', hepsi ise 'H' değerini gösterir. |
| 7 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | TAnımlanan iş akışı için e-posta gönderilsin işaretlenmişse 'E', işaretlenmemişse 'H' değerini gösterir. |
| 12 | `C_YEDEK2` | char(1) | evet |  | Tanımlanan iş akışı için pasif işaretlenmişse 'Y', işaretlenmemişse 'X' değerini gösterir. |
| 13 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `VBSCRIPT` | varchar(4000) | evet |  | Tanımlanan iş akışı için koşul tanımlaması yapılıyorsa ilgili koşulu, yapılmıyorsa NULL gösterir. |
| 22 | `PASIF` | char(1) | evet |  | Tanımlanan iş akışı için pasif işaretlenmişse 'E', işaretlenmemişse NULL değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLWORKPATHPKEY` | `SUBE_KODU+PATHKODU` |
| FOREIGN KEY | `TBLWORKPATHFKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLWORKPATHPKEY` | `SUBE_KODU+PATHKODU` | Clustered |
| `TBLWORKPATH_IND_1` | `SUBE_KODU+PATHKODU+MODULNO+PROGRAMNO+PATHTIPI` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 PATHKODU, ACIKLAMA, MODULNO, PROGRAMNO, SUBE_KODU, PATHTIPI
FROM dbo.TBLWORKPATH WITH (NOLOCK);
```
