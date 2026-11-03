---
title: TBLCARIPLASIYER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariplasiyer/
---

# TBLCARIPLASIYER

> PLASIYER BILGILERINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 45
- **Birincil anahtar:** `PLASIYER_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PLASIYER_KODU` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 3 | `PLASIYER_ACIKLAMA` | varchar(30) | evet |  | Plasiyer acıklama alanını tutar. |
| 4 | `ISIM` | varchar(35) | evet |  | Plasiyer ismini tutar. |
| 5 | `GRUPKODU` | TDBGRUPKOD | evet |  | Grup kodunu tutar. |
| 6 | `GSMNO` | varchar(15) | evet |  | Plasiyerin cep telefonu numarasini tutar. |
| 7 | `PPCSIFRE` | varchar(15) | evet |  | Pocket PC sifresini tutar. |
| 8 | `PPCTIP` | TDBINTEGER | evet |  | Pocket PC tipini tutar. |
| 9 | `ACIKLAMA1` | varchar(50) | evet |  | Acıklama 1 alanını tutar. |
| 10 | `ACIKLAMA2` | varchar(50) | evet |  | Acıklama 2 alanını tutar. |
| 11 | `ACIKLAMA3` | varchar(50) | evet |  | Acıklama 3 alanını tutar. |
| 12 | `KASAKODU` | varchar(8) | evet |  | Kasa kodunu tutar. |
| 13 | `YAZICITIPI` | TDBINTEGER | evet |  | Faturaların basımında kullanılan yazıcının tipini tutar. |
| 14 | `YENICARIGIRISYAPACAKMI` | char(1) | evet | `0` | Parametre isaretli ise 1; degil ise 0 degerini alır. |
| 15 | `PENETRASYONTAKIPYAPACAKMI` | char(1) | evet | `0` |  |
| 16 | `ROUTEDISICARIYUKLESINMI` | char(1) | evet | `0` | Parametre isaretli ise 1; degil ise 0 degerini alır. |
| 17 | `CALISMATIPI` | char(1) | evet |  | H=Hotsell; P=Presell; K=Karma; T=Teslimatcı |
| 18 | `KILOMETRETAKIBIYAPACAKMI` | char(1) | evet | `0` | Parametre isaretli ise 1; degil ise 0 degerini alır. |
| 19 | `ADRES` | varchar(100) | evet |  | Plasiyer adres bilgisini tutar. |
| 20 | `IL` | varchar(15) | evet |  | Plasiyer il bilgisini tutar. |
| 21 | `ILCE` | varchar(15) | evet |  | Plasiyer ilce bilgisini tutar. |
| 22 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `C_YEDEK1` | char(1) | evet |  | Seri bilgisini tutar. |
| 28 | `C_YEDEK2` | char(1) | evet |  | Fiyata mudahale edilebilsin parametresi isaretli ise 1 degerini alır; degil ise NULL. |
| 29 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `S_YEDEK1` | varchar(50) | evet |  | Fatura no'yu tutar. |
| 36 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `C_YEDEK3` | char(1) | evet |  | Siparis yuklemede kullanılsın isaretli ise E; degil ise H degerini alir. |
| 38 | `TAHSILATYAPABILSIN` | char(1) | evet | `H` | Parametre isaretli ise E;degil ise H degerini tutar. |
| 39 | `TAHSILATNO` | varchar(15) | evet |  | Tahsilat noyu tutar. |
| 40 | `IRSALIYENO` | varchar(15) | evet |  | Irsaliye noyu tutar. |
| 41 | `CEKSENETNO` | varchar(15) | evet |  | Cek-senet noyu tutar. |
| 42 | `IADEALABILSIN` | char(1) | evet | `H` | Parametre isaretli ise E;degil ise H degerini tutar. |
| 43 | `SIPARISNO` | varchar(15) | evet |  | Siparis noyu tutar. |
| 44 | `SUBE_KODU` | TDBSMALLINT | hayır | `-1` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 45 | `KREDIKASAKOD` | varchar(8) | evet |  | Kredi tahsilat kasa kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIPLASIYER_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCARIPLASIYER_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCARIPLASIYER_FKEYPROJE` | `PROJE_KODU` |
| PRIMARY KEY | `TBLCARIPLASIYER_PKEY` | `PLASIYER_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIPLASIYER_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLCARIPLASIYER_IND_ADI` | `ISLETME_KODU, SUBE_KODU, PLASIYER_ACIKLAMA` | Nonclustered |
| `TBLCARIPLASIYER_PKEY` | `PLASIYER_KODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, PLASIYER_KODU, PLASIYER_ACIKLAMA, ISIM, GRUPKODU, GSMNO
FROM dbo.TBLCARIPLASIYER WITH (NOLOCK);
```
