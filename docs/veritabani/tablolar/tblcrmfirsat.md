---
title: TBLCRMFIRSAT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmfirsat/
---

# TBLCRMFIRSAT

> CRM FIRSAT KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `FIRSATKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `FIRSATKOD` | TDBADAYKOD | hayır |  | Fırsat kaydında girilen fırsat kod numarasını tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ADAYKOD` | TDBADAYKOD | evet |  | Aday kaydından fırsat olusturuldu ise aday kodunu tutar. |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Musteri kod numarasını tutar. |
| 5 | `PAZAKTKOD` | TDBAKTIVITEKOD | evet |  | Pazarlama aktivite kodunu tutar. |
| 6 | `CRMKULKOD` | TDBCRMKULKOD | evet |  | Kayıt yapan kullanıcı kodunu tutar. |
| 7 | `SATASAMAKOD` | TDBSMALLINT | evet |  | Satıs asaması kodunu tutar. |
| 8 | `KAYIPNEDENKOD` | TDBGRUPKOD | evet |  | Satıs asaması 0-Kaybedildi ise secilen kayıp neden kodunu tuta. |
| 9 | `ACIKLAMA` | varchar(200) | evet |  | Fırsat kaydında girilen acıklama alanını tutar. |
| 10 | `OLASILIK` | TDBFLOAT | evet | `0` | Satıs yapılması ile ilgili tahmini olasılık degerini tutar. |
| 11 | `SATISDEGER` | TDBFLOAT | evet |  | Tahmini satıs tutarını tutar. |
| 12 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DOVSATISDEGER` | TDBFLOAT | evet |  | Tahmini dovizli satis degerini tutar. |
| 14 | `KAPANISTARIHI` | TDBDATETIME | evet |  | Fırsatın kapanıs tarihini tutar. |
| 15 | `GIZLI` | char(1) | evet | `H` | Gızlı ise E;Herkese acık ise H degerini alır. |
| 16 | `KAYITDEGTIP` | char(1) | evet | `W` | Kayıt duzeltme tipi ondegeri,oku-yaz için W,Salt oku için R degerini alıyor. |
| 17 | `DURUM` | char(1) | evet | `O` | Acık=0;Satıldı=S;Kayıp=L degerlerini alıyor. |
| 18 | `DURUMTARIHI` | TDBDATETIME | evet |  | Durum degisikliginin hangi tarihte oldugunu gosterir. |
| 19 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY1` | `ADAYKOD` |
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY3` | `SATASAMAKOD` |
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY4` | `KAYIPNEDENKOD` |
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY5` | `PAZAKTKOD` |
| FOREIGN KEY | `TBLCRMFIRSAT_FKEY6` | `CRMKULKOD` |
| PRIMARY KEY | `TBLCRMFIRSAT_PKEY` | `FIRSATKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMFIRSAT_IND1` | `SUBE_KODU, FIRSATKOD` | Nonclustered, unique |
| `TBLCRMFIRSAT_IND10` | `SUBE_KODU, SATASAMAKOD` | Nonclustered |
| `TBLCRMFIRSAT_IND11` | `SUBE_KODU, KAYIPNEDENKOD` | Nonclustered |
| `TBLCRMFIRSAT_IND2` | `SUBE_KODU, ADAYKOD` | Nonclustered |
| `TBLCRMFIRSAT_IND3` | `SUBE_KODU, CARI_KOD, DURUM` | Nonclustered |
| `TBLCRMFIRSAT_IND4` | `SUBE_KODU, CRMKULKOD, GIZLI` | Nonclustered |
| `TBLCRMFIRSAT_IND5` | `SUBE_KODU, GIZLI` | Nonclustered |
| `TBLCRMFIRSAT_IND6` | `SUBE_KODU, KAYITDEGTIP` | Nonclustered |
| `TBLCRMFIRSAT_IND7` | `SUBE_KODU, PAZAKTKOD` | Nonclustered |
| `TBLCRMFIRSAT_IND8` | `SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMFIRSAT_IND9` | `SUBE_KODU, CRMKULKOD, DURUM` | Nonclustered |
| `TBLCRMFIRSAT_PKEY` | `FIRSATKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 FIRSATKOD, SUBE_KODU, ADAYKOD, CARI_KOD, PAZAKTKOD, CRMKULKOD
FROM dbo.TBLCRMFIRSAT WITH (NOLOCK);
```
