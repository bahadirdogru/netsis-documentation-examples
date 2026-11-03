---
title: TBLODEEMIR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblodeemir/
---

# TBLODEEMIR

> İŞLEMLER>ÖDEME İŞLEMLERİ>ÖDEME EMRİ OLUŞTURMA MENÜSÜNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SATICI_KOD` | TDBCARIKOD | hayır |  | Alacak bakiyesi veren satıcı cari kodun gösterir. |
| 2 | `FATNO` | TDBBELGENO | evet |  | Ödeme emirleri onaylama ekranında alacak kaydının cari hareket kayıtlarında fiş numarası sahasındaki numarasını gösterir. |
| 3 | `BANKA_KODU` | varchar(15) | evet |  | Havale banka ya da borç çeki banka hesap kodunu gösterir. |
| 4 | `TUTAR` | TDBFLOAT | evet |  | Ödeme emri oluşturma genel kısıtlar sekmesinde tutar alanına girilen değeri gösterir. |
| 5 | `ONAY` | char(1) | hayır |  | Ödeme emri oluşturma genel kısıtlar sekmesinde onay evet gelsin parametresini gösterir. |
| 6 | `FATTARIH` | TDBDATETIME | evet |  | Ödeme emirleri onalyama ekranında satıcının hareket kayıtlarındaki alacak tutarının kayıt tarihini gösterir. |
| 7 | `REFNO` | TDBREFKOD | evet |  | Referans numarsını gösterir. |
| 8 | `ISKO_TUT` | TDBFLOAT | evet |  | Varsa iskonto tutarını gösterir. |
| 9 | `CEKNO` | varchar(15) | evet |  | Ödeme emirleri onaylama ekranında alacak kaydının cari hareket kayıtlarında fiş numarası sahasındaki numarasını gösterir. |
| 10 | `VTARIH` | TDBDATETIME | evet |  | Ödeme emri oluşturma genel kısıtlar sekmesinde baz tarih alanına girilen baz tarihini gösterir. Fattarih kolonuyla aynı kaydı gösterir. |
| 11 | `TIP` | char(1) | hayır |  | Default Y değeri atılır. |
| 12 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atılan unique sayıları gösterir. Her kayıtta birer artarak ilerler. |
| 13 | `CH` | char(1) | evet |  | İşlemin havale mi yoksa çek mi olduğunu gösterir. |
| 14 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `TCMBBANKAKODU` | varchar(10) | evet |  | Merkez bankasının tanımlamış olduğu banka kodlarını gösterir. |
| 17 | `TCMBSUBEKODU` | varchar(10) | evet |  | Merkez bankasının tanımlamış olduğu banka şube kodlarını gösterir. |
| 18 | `BANKAHESNO` | varchar(30) | evet |  | Merkez bankasının tanımlamış olduğu banka hesap kodlarını gösterir. |
| 19 | `DOVIZTIPI` | TDBBYTE | evet |  | Döviz tipini gösterir. |
| 20 | `RAPOR_KODU` | char(1) | evet |  | Varsa rapor kodunu gösterir. |
| 21 | `IBANNO` | varchar(30) | evet |  | Iban numarası bilgisi yer alır. |
| 22 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama bligisi yer alır. |
| 23 | `DEKONTNO` | varchar(50) | evet |  | Dekont numarası bilgisi yer alır. |
| 24 | `REFERANS` | varchar(15) | evet |  | Referasn bilgisi yer alır. |
| 25 | `BELGETURU` | varchar(50) | evet |  | Belge türü bilgisi yer alır. |
| 26 | `ODEME_DURUM` | char(1) | evet |  | Ödeme durum bilgisi yer alır. |
| 27 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 28 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 29 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 30 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 31 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 32 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 33 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 34 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 35 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 36 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 37 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 38 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bligisi yer alır. |
| 39 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullancıı bilgisi yer alır. |
| 40 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 SATICI_KOD, FATNO, BANKA_KODU, TUTAR, ONAY, FATTARIH
FROM dbo.TBLODEEMIR WITH (NOLOCK);
```
