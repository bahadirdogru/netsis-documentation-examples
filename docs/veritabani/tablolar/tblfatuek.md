---
title: TBLFATUEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuek/
---

# TBLFATUEK

> FATURA-İRSALİYE EK KAYITLARINI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 37
- **Birincil anahtar:** `FKOD+FATIRSNO+CKOD`

## İlgili sayfalar

- [Fatura ve irsaliye (NetOpenX COM)](/netopenx/fatura-ve-irsaliye/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FKOD` | char(1) | hayır |  | TBLFATUIRS tablosundaki FTIRSIP kolonuna karşılık gelir. |
| 3 | `FATIRSNO` | TDBBELGENO | hayır |  | Kaydedilen evrak Belge Numarasını gösterir. |
| 4 | `CKOD` | TDBCARIKOD | hayır |  | Faturaya ait ek tanımlama yapılacağı faturanın cari kodunu gösterir. |
| 5 | `ACIK1` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 1 bilgisini gösterir. |
| 6 | `ACIK2` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 2 bilgisini gösterir. |
| 7 | `ACIK3` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 3 bilgisini gösterir. |
| 8 | `ACIK4` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 4 bilgisini gösterir. |
| 9 | `ACIK5` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 5 bilgisini gösterir. |
| 10 | `ACIK6` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 6 bilgisini gösterir. |
| 11 | `ACIK7` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 7 bilgisini gösterir. |
| 12 | `ACIK8` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 8 bilgisini gösterir. |
| 13 | `ACIK9` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 9 bilgisini gösterir. |
| 14 | `ACIK10` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 10 bilgisini gösterir.'SEVKYUKLEME','YUKTEKRARKULLAN' özel parametresi tanımlı ise; yükleme emrinden olusan irsaliye/faturada Ek Acıklama 10 alanına yukleme kalemının sıra numarası yazılıyor |
| 15 | `ACIK11` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 11 bilgisini gösterir. |
| 16 | `ACIK12` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 12 bilgisini gösterir. |
| 17 | `ACIK13` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 13 bilgisini gösterir. |
| 18 | `ACIK14` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 14 bilgisini gösterir. |
| 19 | `ACIK15` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 15 bilgisini gösterir. |
| 20 | `ACIK16` | varchar(100) | evet |  | Faturaek tanımlamalarında açıklama 1 bilgisini gösterir. |
| 21 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK9` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `I_YEDEK10` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `G_YEDEK11` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `OKCSERINO` | varchar(25) | evet |  | ÖKC seri numarası bilgisi yer alır. |
| 33 | `ZRAPORNO` | varchar(25) | evet |  | Z rapor no bilgisi yer alır. |
| 34 | `OKCTARIH` | TDBDATETIME | evet |  | Fiş tarihi bilgisi yer alır. |
| 35 | `OKCFISNO` | varchar(25) | evet |  | Fiş no bilgisi yer alır. |
| 36 | `OKCFISTIP` | varchar(50) | evet |  | Tipi bilgisi yer alır. |
| 37 | `PROFILEID` | TDBSMALLINT | evet |  | belge bazlı ayrım.0-temel,1-ticari |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFATUEKPKEY` | `FKOD+FATIRSNO+CKOD` |
| FOREIGN KEY | `TBLFATUEK_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUEK_IND_1` | `SUBE_KODU+FKOD+FATIRSNO+CKOD` | Unique,Non-clustered |
| `TBLFATUEKPKEY` | `FKOD+FATIRSNO+CKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FKOD, FATIRSNO, CKOD, ACIK1, ACIK2
FROM dbo.TBLFATUEK WITH (NOLOCK);
```
