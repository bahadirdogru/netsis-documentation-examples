---
title: TBLNPMRELMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnpmrelmas-2/
---

# TBLNPMRELMAS

> Açıklama yok.

- **Modül:** [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)
- **Not:** Bu tablo şema dokümanında ikinci kez, [NETSİS SÜREÇ YÖNETİMİ modülünde](/veritabani/tablolar/tblnpmrelmas/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CODE` | varchar(12) | hayır |  | Süreç Tanımında Kullanıcı Tarafından Belirlenen Kod |
| 3 | `SOURCEMOD` | tinyint | hayır |  | Kaynak Modül Verilen Sayısal Degerdir |
| 4 | `PROCNAME` | varchar(20) | hayır |  | Süreç adı |
| 5 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `STDATE` | TDBDATETIME | hayır |  | Başlangıç tarihi |
| 8 | `EXPDATE` | TDBDATETIME | evet |  | Bitiş Tarihi |
| 9 | `CONDITION` | TDBMEMO | evet |  | Script girişi yapılarak tanımlanan kısıt bu sahada tutulur |
| 10 | `INFO` | TDBMEMO | evet |  | Süreç açıklaması |
| 11 | `AUTOPROC` | char(1) | hayır | `H` | Sonraki aşamaya otomatik geç işaretli ise 'E' değilse 'H' degerini alır |
| 12 | `AUTOCYCLE` | char(1) | hayır | `H` | Sonlandığında tekrar çalıştırılsın parametresine göre 'E' veya 'H' değerini alır |
| 13 | `REPLOG` | char(1) | hayır | `E` | Log tutulsun parametresine göre 'E' veya 'H' değerini alır. |
| 14 | `SHOWFULLEX` | char(1) | hayır | `E` | Süreç detayında süreç otomatik olarak açık olarak gelmesi için E ,tersi için H değeri tutulur. |
| 15 | `NETPROGNO` | TDBINTEGER | hayır | `0` |  |
| 16 | `ISPROCESS` | char(1) | hayır | `E` |  |
| 17 | `NETSISDEF` | char(1) | hayır | `H` |  |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLNPMRELMAS_FK1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLNPMRELMAS_FK2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLNPMRELMAS_PK` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNPMRELMAS_IND_1` | `CODE` | nonclustered, unique |
| `TBLNPMRELMAS_IND_2` | `SOURCEMOD` | nonclustered |
| `TBLNPMRELMAS_IND_3` | `ISLETME_KODU, SUBE_KODU` | nonclustered |
| `TBLNPMRELMAS_PK` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, CODE, SOURCEMOD, PROCNAME, ISLETME_KODU, SUBE_KODU
FROM dbo.TBLNPMRELMAS WITH (NOLOCK);
```
