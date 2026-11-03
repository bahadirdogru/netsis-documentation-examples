---
title: TBLMUHAGEC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhagec/
---

# TBLMUHAGEC

> ENTEGRASYONDAKİ KAYITLARI TUTAR

- **Modül:** [ENTEGRASYON](/veritabani/moduller/entegrasyon/)
- **Kolon sayısı:** 37
- **Birincil anahtar:** `SIRA`
- **Identity:** `SIRA` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi şubeye ait olduğunu gösterir. |
| 2 | `MGECDK` | varchar(2) | evet |  | Entegrasyondaki kaydın türünü gösterir.[KB(Kasa Borçlu), KA(Kasa AlacaklıI), CB(Cari Borçlu), CA(Cari Alacaklı), SB(Satıcı Borçlu), SA(Satıcı Alacaklı), DD(dekont) ] |
| 3 | `KS_KOD` | varchar(8) | evet |  | Kasadan işlenen bir hareketin entegrasyonda kasa kodunu gösterir. |
| 4 | `TARIH` | TDBDATETIME | evet |  | Entegrasyondaki kaydın işlem tarihini gösterir. |
| 5 | `KOD` | varchar(35) | evet |  | Entegrasyondaki kaydın muhasebeleştirilirken atılacağı muhasebe kodunu gösterir. |
| 6 | `ACIKLAMA` | varchar(100) | evet |  | Entegrasyondaki kaydın açıklamasını gösterir. |
| 7 | `MIKTAR` | TDBFLOAT | evet | `0` | Entegrasyondaki kaydın miktarını gösterir. |
| 8 | `TUTAR` | TDBFLOAT | evet | `0` | Entegrasyondaki kaydın tutarını gösterir. |
| 9 | `KULL_ID` | TDBSMALLINT | evet |  | Entegrasyondaki kaydın hangi netsis kullanıcısı tarafından oluşturulduğunu gösterir. |
| 10 | `EVRAKTARIHI` | TDBDATETIME | evet |  | Entegrasyondaki kaydın oluşumunu sağlayan ilgili evrağın kayıt tarihini gösterir. |
| 11 | `MUHREFKOD` | TDBREFKOD | evet |  | Entegrasyondaki kaydın muhasebe referans kodunu gösterir. |
| 12 | `REFKOD` | varchar(8) | evet |  | Entegrasyondaki kaydın işlem tipini gösterir. |
| 13 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Hareketlerde yapılan düzeltme/iptal işlemleri için entegre anahtar numarasını gösterir. |
| 14 | `KAYITTIPI` | TDBBYTE | evet |  | Entegrasyondaki kaydın kayıt tipini gösterir.(1, 2, 3, 4, 5) |
| 15 | `DOVIZ_TIPI` | TDBBYTE | evet |  | Entegrasyondaki kaydın döviz tipini gösterir. |
| 16 | `DOVTUT` | TDBFLOAT | evet |  | Entegrasyondaki kaydın döviz tutarını gösterir. |
| 17 | `UPDATE_KODU` | char(1) | evet |  | Kaydın konsalide edilğine dair atılan işareti gösterir. |
| 18 | `MODULCHOICE` | varchar(30) | evet |  | Entegrasyondaki kaydın ön muhasebedeki hangi modülden geldiğini gösterir. |
| 19 | `YONTEM` | char(1) | evet |  | Oluşan kaydın (T) transfer mi, (E) entegreden mi geldiğini gösterir. |
| 20 | `SIRA` | TDBINTEGER | hayır |  | Programın entegrasyona atılan kayıtlara verdiği sıra numarasını gösterir. |
| 21 | `YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHAGECPKEY` | `SIRA` |
| FOREIGN KEY | `TBLMUHAGEC_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMUHAGEC_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHAGEC_IND_1` | `SUBE_KODU-MGECDK-TARIH-SIRA` | Unique,Non-clustered |
| `TBLMUHAGEC_IND_2` | `ENTEGREFKEY` | Non-unique, Non-clustered |
| `TBLMUHAGEC_IND_3` | `SUBE_KODU-KULL_ID-TARIH-MGECDK` | Non-unique, Non-clustered |
| `TBLMUHAGEC_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLMUHAGEC_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLMUHAGECPKEY` | `SIRA` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, MGECDK, KS_KOD, TARIH, KOD, ACIKLAMA
FROM dbo.TBLMUHAGEC WITH (NOLOCK);
```
