---
title: TBLSERITRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblseritra/
---

# TBLSERITRA

> SERI TAKİBİ VAR PARAMETRESİ AÇIK OLDUĞUNDA KULLANILAN STHAR ILE BAGLANTILI SERI HAREKET KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 37

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYIT_TIPI` | char(1) | evet |  | Seri hareketler (seri takibi ekranından girilir ise)devir hareketi ise 'D', (diğer hareketlerde) devir hareketi değilse 'A' değerini gösterir. |
| 2 | `SERI_NO` | varchar(50) | hayır |  | Seri numaralarını göstrir. |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Serisi olan stok kodunu gösterir. |
| 4 | `SIRA_NO` | TDBINTEGER | hayır |  | Program tarafından atanan, sıralı olarak artan tekrarsız rakamları gösterir. Her seri numarası için tekildir. |
| 5 | `STRA_INC` | TDBINTEGER | evet |  | Tblsthar tablosundaki inckeyno yu gösterir. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Stoklara ait serilerin oluşma tarihini gösterir. |
| 7 | `ACIK1` | varchar(50) | evet |  | Stoklara ait 2. seri numaralarını gösterir. |
| 8 | `ACIK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `GCKOD` | char(1) | evet |  | Stokların giriş/çıkış hareketlerini gösterir. Giriş hareketi ise 'G', çıkış hareketi ise 'C' değerini gösterir. |
| 10 | `MIKTAR` | TDBFLOAT | evet | `0` | Stok miktarını gösterir. |
| 11 | `MIKTAR2` | TDBFLOAT | evet | `1` | Stoğun ikinci miktarını gösterir. |
| 12 | `BELGENO` | TDBBELGENO | evet |  | Serili stokların yer aldığı belge numarasını gösterir. |
| 13 | `BELGETIP` | char(1) | evet |  | Serili stokların yer aldığı belgelerin tipini gösterir. |
| 14 | `HARACIK` | varchar(35) | evet |  | Tblsthar tablosundaki sthar_aciklama kolonunu gösterir. |
| 15 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DEPOKOD` | TDBSMALLINT | evet | `0` | Stoğun bulunduğu depo kodunu gösterir. |
| 17 | `SIPNO` | TDBBELGENO | evet |  | İlgili stoğa ait varsa sipariş numarasını gösterir. |
| 18 | `KARSISERI` | varchar(50) | evet |  | Üretim kaydındaki mamülün karşıseri numarasını gösterir. |
| 19 | `YEDEK1` | varchar(30) | evet |  | Dinamik depo kullanılıyorsa hücre numaralarının atıldığı sahadır. |
| 20 | `YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK3` | TDBFLOAT | evet |  | Sayım yapılacak stoğun ait olduğu proje kodunu gösterir. |
| 22 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK6` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `ACIK3` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `SERI_NO_3` | varchar(50) | evet |  | Ek kullanılabilecek seri sahasıdır. |
| 31 | `SERI_NO_4` | varchar(50) | evet |  | Ek kullanılabilecek seri sahasıdır. |
| 32 | `ACIKLAMA_4` | varchar(100) | evet |  | Açıklama bilgisi yer alır. |
| 33 | `ACIKLAMA_5` | varchar(100) | evet |  | Açıklama bilgisi yer alır. |
| 34 | `SON_KULLANMA_TARIHI` | TDBDATETIME | evet |  | Son kullanma tarihi bilgisi yer alır. |
| 35 | `PARENT_ID` | TDBINTEGER | evet |  | Serili parçalı faturalama için eklenen sahadır. (İrsaliyedeki sıra numarası*) |
| 36 | `INIT_MIKTAR` | TDBFLOAT | evet |  | Serili parçalı faturalama için eklenen sahadır. |
| 37 | `AKTARILAN_MIKTAR` | TDBFLOAT | evet |  | Serili parçalı faturalama için eklenen sahadır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSERITRA_IND_1` | `SERI_NO` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_2` | `SUBE_KODU+KAYIT_TIPI+STRA_INC` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_3` | `SIRA_NO` | Unique, Non-clustered |
| `TBLSERITRA_IND_4` | `KARSISERI` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_5` | `SUBE_KODU+KAYIT_TIPI+STOK_KODU+SERI_NO+GCKOD+SIRA_NO` | Unique, Non-clustered |
| `TBLSERITRA_IND_6` | `SUBE_KODU+KAYIT_TIPI+GCKOD+BELGETIP+BELGENO+HARACIK` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_7` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_8` | `YEDEK1` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_9` | `STOK_KODU+DEPOKOD+GCKOD` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_ONUM` | `ONAYNUM` | Non-unique, Non-clustered |
| `TBLSERITRA_IND_OTIP` | `ONAYTIPI` | Non-unique, Non-clustered |
| `TBLSERITRAPKEY` | `SIRA_NO` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KAYIT_TIPI, SERI_NO, STOK_KODU, SIRA_NO, STRA_INC, TARIH
FROM dbo.TBLSERITRA WITH (NOLOCK);
```
