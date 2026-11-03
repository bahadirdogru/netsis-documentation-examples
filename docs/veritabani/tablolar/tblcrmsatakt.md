---
title: TBLCRMSATAKT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmsatakt/
---

# TBLCRMSATAKT

> SATIS AKTIVITESI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `SATAKTKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SATAKTKOD` | TDBAKTIVITEKOD | hayır |  | Satıs aktivite kodunu tutar. |
| 2 | `SATAKTISIM` | varchar(50) | evet |  | Satıs aktivite adını tutar. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Musteri kodunu tutar. |
| 5 | `SATAKTYAPILAN` | char(1) | evet | `C` | Satıs aktivitesi yapılan Musteri=M; Aday=A; Fırsat=F degerini tutar. |
| 6 | `SATAKTYAPILANKOD` | TDBADAYKOD | evet |  | Satıs aktivitesi gerceklestirilen aday ise aday kodu;fırsat ise fırsat kodunu tutar. |
| 7 | `CRMKULKOD` | TDBCRMKULKOD | evet |  | Aktiviteyi gerceklestiren yada sorumlu olan CRM kullanıcı kodunu tutar. |
| 8 | `SATAKTTIPKOD` | TDBGRUPKOD | hayır |  | Satıs aktivite kodunu tutar. |
| 9 | `KAYITTARIH` | TDBDATETIME | evet |  | Satıs aktivitesi kayıt tarihini tutar. |
| 10 | `AKTTARIH` | TDBDATETIME | evet |  | Satıs aktivitesinin gerceklestirilecegi tarihini tutar. |
| 11 | `DURUM` | char(1) | evet | `A` | Durum acık ise A; kapalı ise K degerini tutar. |
| 12 | `ACIKLAMA` | varchar(255) | evet |  | Acıklama alanını tutar. |
| 13 | `GIZLI` | char(1) | evet | `H` | Gızlı ise E;Herkese acık ise H degerini alır. |
| 14 | `KAYITDEGTIP` | char(1) | evet | `W` | Kayıt duzeltme tipi,oku-yaz için W,Salt oku için R degerini tutar. |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSATAKT_FKEY1` | `CARI_KOD` |
| FOREIGN KEY | `TBLCRMSATAKT_FKEY2` | `CRMKULKOD` |
| FOREIGN KEY | `TBLCRMSATAKT_FKEY3` | `SATAKTTIPKOD` |
| FOREIGN KEY | `TBLCRMSATAKT_FKEY4` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMSATAKT_PKEY` | `SATAKTKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSATAKT_IND1` | `SUBE_KODU, SATAKTKOD` | Nonclustered, Unique |
| `TBLCRMSATAKT_IND10` | `SUBE_KODU, GIZLI` | Nonclustered |
| `TBLCRMSATAKT_IND11` | `SUBE_KODU, SATAKTYAPILAN, CARI_KOD, SATAKTYAPILANKOD` | Nonclustered |
| `TBLCRMSATAKT_IND2` | `SUBE_KODU, CARI_KOD` | Nonclustered |
| `TBLCRMSATAKT_IND3` | `SUBE_KODU, SATAKTKOD, CARI_KOD` | Nonclustered |
| `TBLCRMSATAKT_IND4` | `SUBE_KODU, KAYITTARIH, AKTTARIH, CARI_KOD` | Nonclustered |
| `TBLCRMSATAKT_IND5` | `SUBE_KODU, DURUM, CARI_KOD` | Nonclustered |
| `TBLCRMSATAKT_IND6` | `SUBE_KODU, CRMKULKOD, GIZLI` | Nonclustered |
| `TBLCRMSATAKT_IND7` | `SUBE_KODU, KAYITTARIH, AKTTARIH, CRMKULKOD` | Nonclustered |
| `TBLCRMSATAKT_IND8` | `SUBE_KODU, KAYITDEGTIP` | Nonclustered |
| `TBLCRMSATAKT_IND9` | `SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMSATAKT_PKEY` | `SATAKTKOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SATAKTKOD, SATAKTISIM, SUBE_KODU, CARI_KOD, SATAKTYAPILAN, SATAKTYAPILANKOD
FROM dbo.TBLCRMSATAKT WITH (NOLOCK);
```
