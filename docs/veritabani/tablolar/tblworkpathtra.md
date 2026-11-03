---
title: TBLWORKPATHTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblworkpathtra/
---

# TBLWORKPATHTRA

> İŞ AKIŞ YOLU KAYITLARINI TUTAR

- **Modül:** [İŞ AKIŞ YÖNETİMİ](/veritabani/moduller/is-akis-yonetimi/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `SUBE_KODU+PATHKODU+KULLANICINO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PATHKODU` | varchar(8) | hayır |  | İş akış kayıtlarında iş kodu sahasına girilen numarayı gösterir. |
| 2 | `KULLANICINO` | TDBSMALLINT | hayır |  | İş akış kayıtlarında ilgili evrağın onaylanması için tanımlanan kullanıcı numaralarını gösterir. |
| 3 | `SIRA` | TDBBYTE | evet |  | İlgili evrağın onaylanması için tanımlanan kullanıcılarının iş akış yolundaki sıralarını gösterir. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `SURE` | TDBFLOAT | evet | `0` | İş akışına tabi tutulan işin, ilgili kullanıcı tarafından ne kadar süre içerisinde onaylanması gerektiğini gösterir. (Süre cinsi dakikadır.) |
| 6 | `TAKVIMEBAKILSIN` | char(1) | evet | `H` | İş akış yolu kayıtlarında takvime bakılsın mı parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 7 | `OVERDUETIPI` | char(1) | evet |  | İş akış kayıtlarındaki gecikme durumu sıradaki kullanıcı ise 'S', yönetici ise 'Y' değerini tutar. |
| 8 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLWORKPATHTRAPKEY` | `SUBE_KODU+PATHKODU+KULLANICINO` |
| FOREIGN KEY | `TBLWORKPATHTRAFKEY1` | `SUBE_KODU+PATHKODU` |
| FOREIGN KEY | `TBLWORKPATHTRAFKEY2` | `SUBE_KODU+KULLANICI_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLWORKPATHTRA_IND_1` | `SUBE_KODU+PATHKODU+SIRA` | Non-unique, Non-clustered |
| `TBLWORKPATHTRAPKEY` | `SUBE_KODU+PATHKODU+KULLANICINO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 PATHKODU, KULLANICINO, SIRA, SUBE_KODU, SURE, TAKVIMEBAKILSIN
FROM dbo.TBLWORKPATHTRA WITH (NOLOCK);
```
