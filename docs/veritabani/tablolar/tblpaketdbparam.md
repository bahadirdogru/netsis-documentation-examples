---
title: TBLPAKETDBPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblpaketdbparam/
---

# TBLPAKETDBPARAM

> YARDIMCI PROGRAMLAR>KAYIT>DİĞER PAKETLERLE BAĞLANTI EKRANINDAKİ KAYITLARINI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PERDBNAME` | varchar(30) | evet |  | Bağlantı yapılacak personel paketinin veritabanı adını gösterir. |
| 3 | `PERDBUSER` | varchar(30) | evet |  | Bağlantı yapılacak personel paketinin veritabanı kullanıcı ismini gösterir. |
| 4 | `PERDBPASSW` | varchar(30) | evet |  | Bağlantı yapılacak personel paketinin veritabanı kullanıcı şifresini gösterir. |
| 5 | `DEMDBNAME` | varchar(30) | evet |  | Bağlantı yapılacak demirbaş paketinin veritabanı adını gösterir. |
| 6 | `DEMDBUSER` | varchar(30) | evet |  | Bağlantı yapılacak demirbaş paketinin veritabanı kullanıcı ismini gösterir. |
| 7 | `DEMDBPASSW` | varchar(30) | evet |  | Bağlantı yapılacak demirbaş paketinin veritabanı kullanıcı şifresini gösterir. |
| 8 | `ISLDBNAME` | varchar(30) | evet |  | Bağlantı yapılacak işletme paketinin veritabanı adını gösterir. |
| 9 | `ISLDBUSER` | varchar(30) | evet |  | Bağlantı yapılacak işletme paketinin veritabanı kullanıcı ismini gösterir. |
| 10 | `ISLDBPASSW` | varchar(30) | evet |  | Bağlantı yapılacak işletme paketinin veritabanı kullanıcı şifresini gösterir. |
| 11 | `KAYITYAPANKUL` | varchar(20) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | varchar(20) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK3` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `T_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `T_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPAKETDBPARAM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPAKETDBPARAM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPAKETDBPARAM_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, PERDBNAME, PERDBUSER, PERDBPASSW, DEMDBNAME, DEMDBUSER
FROM dbo.TBLPAKETDBPARAM WITH (NOLOCK);
```
