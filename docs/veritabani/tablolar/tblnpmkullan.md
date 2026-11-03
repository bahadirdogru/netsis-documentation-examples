---
title: TBLNPMKULLAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnpmkullan/
---

# TBLNPMKULLAN

> SÜREÇ ERİŞİM HAKLARI TABLOSUDUR

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı nıo'sudur. |
| 4 | `NPMRELMASINCKEYNO` | TDBINTEGER | hayır |  | Süreç yönetimi master kayıt tablosu inckeynosudur. |
| 5 | `MENUDISABLE` | TDBBYTE | hayır | `0` | Menüleri kapat işaretlenirse 1 aksi takdirde 0 değerini alır. |
| 6 | `SHOWMSG` | TDBBYTE | hayır | `1` | Açıklama mesajlarını göster aktif ise 1 değil ise 0 değer |
| 7 | `ENABLESOUND` | TDBBYTE | hayır | `0` | Çıkan mesajlar seslendirilsin işaretli ise 1 değil ise 0 kaydı atar. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `CYEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `CYEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNPMKULLAN_PK` | `INCKEYNO` |
| FOREIGN KEY | `TBLNPMKULLAN_FK1` | `SUBE_KODU, KULLANICI_NO` |
| FOREIGN KEY | `TBLNPMKULLAN_FK2` | `NPMRELMASINCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNPMKULLAN_IND_1` | `SUBE_KODU, KULLANICI_NO, NPMRELMASINCKEYNO` | Unique |
| `TBLNPMKULLAN_PK` | `INCKEYNO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, KULLANICI_NO, NPMRELMASINCKEYNO, MENUDISABLE, SHOWMSG
FROM dbo.TBLNPMKULLAN WITH (NOLOCK);
```
