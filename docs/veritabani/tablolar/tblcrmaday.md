---
title: TBLCRMADAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmaday/
---

# TBLCRMADAY

> ADAY SAYFASINDAN YAPILAN ADAY KAYITLARINI TUTAR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `ADAYKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ADAYKOD` | TDBADAYKOD | hayır |  | Aday kodunu gosterir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `CARI_KOD` | TDBCARIKOD | hayır |  | Müşteri bilgilerinde girilen cari kodu gosterir. |
| 4 | `PAZAKTKOD` | TDBAKTIVITEKOD | evet |  | Aday kaydında girilen pazarlama aktivite kodunu gosterir. |
| 5 | `CRMKULKOD` | TDBCRMKULKOD | evet |  | Aday sahibi kullanıcı kodunu gosterir. |
| 6 | `SATASAMAKOD` | TDBSMALLINT | evet |  | Aday kaydında girilen satıs asaması kodunu gosterir. |
| 7 | `KAYIPNEDENKOD` | TDBGRUPKOD | evet |  | Kayıp neden kodunu gosterir. |
| 8 | `ACIKLAMA` | varchar(200) | evet |  | Acıklam sahasına girilen bilgisi tutar. |
| 9 | `OLASILIK` | TDBFLOAT | evet | `0` | Olasılık oranını tutar. |
| 10 | `SATISDEGER` | TDBFLOAT | evet |  | Satıs degerini tutar. |
| 11 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DOVSATISDEGER` | TDBFLOAT | evet |  | Dovizli satis degerini gosterir. |
| 13 | `KAPANISTARIHI` | TDBDATETIME | evet |  | Adaya yapılacak olası satıs tarihini gosterir. |
| 14 | `GIZLI` | char(1) | evet | `H` | Gizli ise E, degil ise H degerini atar. |
| 15 | `KAYITDEGTIP` | char(1) | evet | `W` | Kayıt duzeltme tipi oku/yaz ise W, salt oku ise R degerini alır. |
| 16 | `DURUM` | char(1) | evet | `O` | Acık=0;Satıldı=S;Fırsatlastırıldı=Q;Kayıp=L degerlerini atacaktır. |
| 17 | `DURUMTARIHI` | TDBDATETIME | evet |  | Durum degisikliginin hangi tarihte oldugunu gosterir. |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMADAY_FKEY1` | `DOVIZTIPI` |
| FOREIGN KEY | `TBLCRMADAY_FKEY2` | `DURUM` |
| FOREIGN KEY | `TBLCRMADAY_FKEY3` | `GIZLI` |
| FOREIGN KEY | `TBLCRMADAY_FKEY4` | `KAYITDEGTIP` |
| FOREIGN KEY | `TBLCRMADAY_FKEY5` | `OLASILIK` |
| PRIMARY KEY | `TBLCRMADAY_PKEY` | `ADAYKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMADAY_IND1` | `SUBE_KODU, ADAYKOD` | Nonclustered, Unique |
| `TBLCRMADAY_IND10` | `SUBE_KODU, KAYIPNEDENKOD` | Nonclustered |
| `TBLCRMADAY_IND2` | `SUBE_KODU, CARI_KOD, DURUM` | Nonclustered |
| `TBLCRMADAY_IND3` | `SUBE_KODU, CRMKULKOD, GIZLI` | Nonclustered |
| `TBLCRMADAY_IND4` | `SUBE_KODU, GIZLI` | Nonclustered |
| `TBLCRMADAY_IND5` | `SUBE_KODU, KAYITDEGTIP` | Nonclustered |
| `TBLCRMADAY_IND6` | `SUBE_KODU, PAZAKTKOD` | Nonclustered |
| `TBLCRMADAY_IND7` | `SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMADAY_IND8` | `SUBE_KODU, CRMKULKOD, DURUM` | Nonclustered |
| `TBLCRMADAY_IND9` | `SUBE_KODU, SATASAMAKOD` | Nonclustered |
| `TBLCRMADAY_PKEY` | `ADAYKOD` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ADAYKOD, SUBE_KODU, CARI_KOD, PAZAKTKOD, CRMKULKOD, SATASAMAKOD
FROM dbo.TBLCRMADAY WITH (NOLOCK);
```
