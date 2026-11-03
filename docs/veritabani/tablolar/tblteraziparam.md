---
title: TBLTERAZIPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblteraziparam/
---

# TBLTERAZIPARAM

> POS MODÜLÜ>KAYIT>TERAZİ PARAMETRELERİNİ TUTAR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `SUBE_KODU+TERAZITIPI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TERAZITIPI` | TDBBYTE | hayır | `0` | Bilgi aktarılacak terazi tipini gösterir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STFILENAME` | varchar(30) | evet |  | Oluşacak text dosyaya verilecek adı gösterir. |
| 4 | `TERAZIPATHGID` | varchar(60) | evet |  | Teraziye gönderilecek stokların bulunduğu text dosyanın hangi dizine atılacağını gösterir. |
| 5 | `TERAZIPATHGEL` | varchar(60) | evet |  | Terazi parametrelerinde bu alan kullanılmamaktadır. |
| 6 | `UPTDBDATETIMEKODU` | char(1) | evet |  | Terazi parametrelerinde bu alan kullanılmamaktadır. |
| 7 | `SATFIYTUR` | char(1) | evet | `1` | Gönderilecek fiyat alanında teraziye gönderilecek fiyat tipini gösterir. |
| 8 | `DEPARTMAN` | char(1) | evet | `1` | Farklı reyonlarda bulunan teraziler için reyon numaralarının stok kartında hangi sahada tutulacağını gösterir. |
| 9 | `STKODBARKOD` | char(1) | evet | `1` | Gönderilecek barkod alanında hangi bilginin teraziye gönderileceği ile ilgili seçilen kodu gösterir. |
| 10 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK6` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK7` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK8` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK9` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK10` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK11` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK12` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK13` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK14` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK15` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK16` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK17` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK18` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK19` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK20` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTERAZIPARAM_PKEY` | `SUBE_KODU+TERAZITIPI` |
| FOREIGN KEY | `TBLTERAZIPARAM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTERAZIPARAM_PKEY` | `SUBE_KODU+TERAZITIPI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 TERAZITIPI, SUBE_KODU, STFILENAME, TERAZIPATHGID, TERAZIPATHGEL, UPTDBDATETIMEKODU
FROM dbo.TBLTERAZIPARAM WITH (NOLOCK);
```
