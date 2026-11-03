---
title: TBLKASA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkasa/
---

# TBLKASA

> KAYIT>KASA KAYITLARINI TUTAR.

- **Modül:** [KASA](/veritabani/moduller/kasa/)
- **Kolon sayısı:** 45
- **Birincil anahtar:** `SIRA`
- **Identity:** `SIRA` (seed 1, artış 1)

## İlgili sayfalar

- [Kasa (REST SafeDeposits)](/rest/uclar/#kasa-safedeposits)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KSMAS_KOD` | varchar(2) | hayır |  | Kasa Kodunu gösterir. |
| 2 | `TARIH` | varchar(50) | evet |  | Tarihi gösterir. |
| 3 | `FISNO` | char(1) | evet |  | Fiş Numarasını gösterir. |
| 4 | `IO` | TDBNETSISKUL | evet |  | Gelir/Gider i gösterir.Gelir ise 'G', Gider ise 'C' değerini gösterir. |
| 5 | `TIP` | TDBDATETIME | evet |  | Tipi gösterir. Banka ise 'B', Cari ise 'C', Çek ise 'E', Fatura ise 'F', Muhtelif ise 'M', Senet ise 'S', Transfer ise 'T' değerini gösterir. |
| 6 | `ACIKLAMA` | TDBNETSISKUL | evet |  | Kasa Açıklamasını gösterir. |
| 7 | `TUTAR` | TDBDATETIME | evet | `0` | Tutarı gösterir. |
| 8 | `CARI_MUH` | TDBSMALLINT | evet |  | Cari Kod var ise 'C', Muhasebe Kodu var ise 'M', banka var ise 'B' değerini gösterir. |
| 9 | `KOD` | char(1) | evet |  | Cari Kod veya Muhasebe Kodunu gösterir. |
| 10 | `DOVIZTUT` | char(1) | evet | `0` | Döviz Tutarını gösterir. |
| 11 | `KUR` | TDBSMALLINT | evet | `0` | Kuru gösterir. |
| 12 | `PLASIYER_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `ODEMETURU` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `UPDATE_KODU` | TDBFLOAT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ZAMAN` | TDBDATETIME | evet |  | Kaydın yapıldığı saati gösterir. |
| 16 | `KULL_ID` | TDBDATETIME | evet |  | Kaydı yapan kullanıcının kodunu gösterir. |
| 17 | `SIRA` | varchar(50) | evet |  | Sıra Numarasını gösterir. |
| 18 | `SUBE_KODU` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KREDI_KART_NO` | varchar(2) | hayır |  | Kredi Kartı Numarasını gösterir. Ayrıca çek sent sekmesinden yapılan tahsilatlar için çek veya senet numarasını gösterir. |
| 20 | `KDV_ORAN` | varchar(50) | evet |  | Girilen kdv oranını gösterir. |
| 21 | `KDV_DAHIL` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK1` | TDBNETSISKUL | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK3` | TDBNETSISKUL | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK5` | TDBSMALLINT | evet |  | Kdv tutarını gösterir. |
| 27 | `YEDEK6` | char(1) | evet |  | B Formu işaretli ise E değerini alır |
| 28 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK9` | TDBSMALLINT | evet |  | Kasadan transfer yapıldığında diğer kasanın sıra numarasını gösterir. |
| 31 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `PROJE_KODU` | TDBFLOAT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `KAYITYAPANKUL` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `DUZELTMEYAPANKUL` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `DUZELTMETARIHI` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `ONAYTIPI` | varchar(2) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `ONAYNUM` | varchar(50) | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `KAYNAK` | char(1) | evet |  | Kredi kartı kayıtları oluşturulurken kayıt atar. Kaynak Fatura ise '2', değilse '1' değerini gösterir. |
| 40 | `ENTEGREFKEY` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `KRTSOZMASINCKEYNO` | TDBDATETIME | evet |  | TBLKRTSOZKST tablosundaki KRTSOZMASINCKEYNO fieldına atılan rakamı gösterir. |
| 42 | `TAKSIT` | TDBNETSISKUL | evet |  | Fatura modülünden kapalı fatura kesildiğinde hızlı tahsilat ekranında girilen taksit sayısını gösterir. |
| 43 | `GECERLI` | TDBDATETIME | evet |  | Fatura modülünden kapalı fatura kesildiğinde 'E' değerini atar. Diğer durumlarda 'H' değerini gösterir. |
| 44 | `BFORMCARIKODU` | TDBCARIKOD | evet |  | B formu için girilen cari kodu yer alır |
| 45 | `REFKOD` | TDBREFKOD | evet |  | Referans kodu yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `KASAPKEY` | `SIRA` |
| FOREIGN KEY | `TBLKASA_FKEY` | `KSMAS_KOD` |
| FOREIGN KEY | `TBLKASA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKASA_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `KASAPKEY` | `SIRA` | Clustered |
| `TBLKASA_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLKASA_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLKASATRA_IND_1` | `KSMAS_KOD+TARIH+IO+SIRA` | Unique,Non-clustered |
| `TBLKASATRA_IND_2` | `SIRA` | Unique,Non-clustered |
| `TBLKASATRA_IND_3` | `SUBE_KODU+KSMAS_KOD+TARIH+TIP+IO` | Non-unique, Non-clustered |
| `TBLKASATRA_IND_4` | `SUBE_KODU+TIP+SIRA` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KSMAS_KOD, TARIH, FISNO, IO, TIP, ACIKLAMA
FROM dbo.TBLKASA WITH (NOLOCK);
```
