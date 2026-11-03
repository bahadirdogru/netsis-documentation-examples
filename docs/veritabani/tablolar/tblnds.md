---
title: TBLNDS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnds/
---

# TBLNDS

> YARDIMCI PROGRAMLARDA NETSİS ONDALIK SİSTEMİ EKRANINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `SUBE_KODU+KULLANICINO+MODNO+PRGNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICINO` | TDBSMALLINT | hayır |  | Kısıt kapsamı tüm kullanıcılar seçili ise '-1' değerini+kullanıcı seçildiğinde ilgili kullanıcı numarasını+grup seçildiğinde ilgili grup kodunu gösterir. |
| 3 | `MODNO` | TDBINTEGER | hayır |  | Ondalık hane tanımlaması yapılmak istenilen modül bilgisini gösterir. |
| 4 | `PRGNO` | TDBINTEGER | hayır |  | Ondalık hane tanımlaması yapılmak istenilen program bilgisini gösterir. |
| 5 | `MIKTARDEC` | TDBSMALLINT | evet |  | Miktar sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 6 | `TUTARDEC` | TDBSMALLINT | evet |  | Tutar sahasına kaç tane ondalık hane girilmesiisteniyorsa+o rakamı gösterir. |
| 7 | `DOVTUTDEC` | TDBSMALLINT | evet |  | Döviz Tutar sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 8 | `FIRDOVTUTDEC` | TDBSMALLINT | evet |  | Firma Döviz Tutar sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 9 | `ORANDEC` | TDBSMALLINT | evet |  | Oran sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 10 | `FIYATDEC` | TDBSMALLINT | evet |  | Fiyat sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 11 | `KURDEC` | TDBSMALLINT | evet |  | Kur sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 12 | `DOVFIYDEC` | TDBSMALLINT | evet |  | Döviz Fiyat sahasına kaç tane ondalık hane girilmesi isteniyorsa+o rakamı gösterir. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_NDS` | `SUBE_KODU+KULLANICINO+MODNO+PRGNO` |
| FOREIGN KEY | `NSD_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `IDX_TBLNDS_1` | `KULLANICINO+MODNO+PRGNO` | Non-unique+Non-clustered |
| `PK_NDS` | `SUBE_KODU+KULLANICINO+MODNO+PRGNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICINO, MODNO, PRGNO, MIKTARDEC, TUTARDEC
FROM dbo.TBLNDS WITH (NOLOCK);
```
