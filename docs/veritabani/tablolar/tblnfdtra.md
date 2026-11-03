---
title: TBLNFDTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnfdtra/
---

# TBLNFDTRA

> FORMBAZI GÜVENLİK ALAN VE TİP KAYITLARI TUTAR

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `RECID`
- **Identity:** `RECID` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `RECID` | int | hayır |  | Formbazı güvenlik kayıtları için program tarafından atanan değerleri gösterir. Bu rakamlar unique olmalıdır. |
| 2 | `MASID` | int | hayır |  | Recid numarasına bağlı formbazı yapılmak istenen sahalar kadar aynı recid numarası oluşur. |
| 3 | `CNAME` | varchar(50) | hayır |  | Formbazı yapılacak olan alan adlarını gösterir. |
| 4 | `CTYPE` | varchar(20) | evet |  | Formbazı güvenlik tipini gösterir. |
| 5 | `COLID` | tinyint | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 6 | `CENABLE` | char(1) | evet |  | Formbazı yapılacak sahaların değiştirilebilirlik bilgisini tutar. |
| 7 | `CVISIBLE` | char(1) | evet |  | Formbazı yapılacak sahaların görünürlük bilgisini tutar. |
| 8 | `CCOLOR` | int | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 9 | `CCAPTION` | varchar(50) | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 10 | `CFORMAT` | varchar(15) | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 11 | `CONDALIK` | tinyint | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 12 | `CUZUNLUK` | tinyint | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 13 | `CGENISLIK` | tinyint | evet |  | Bu kolonda artık kayıt tutulmamaktadır. |
| 14 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK1` | smallint | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK2` | smallint | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `TYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNFDTRA_PKEY` | `RECID` |
| FOREIGN KEY | `TBLNFDTRA_FKEY1` | `RECID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNFDTRA_IND1` | `MASID+CNAME+COLID` | Unique, Non-clustered |
| `TBLNFDTRA_IND2` | `CNAME+COLID` | Non-unique, Non-clustered |
| `TBLNFDTRA_PKEY` | `RECID` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 RECID, MASID, CNAME, CTYPE, COLID, CENABLE
FROM dbo.TBLNFDTRA WITH (NOLOCK);
```
