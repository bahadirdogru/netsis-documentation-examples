---
title: TBLMUHFIS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhfis/
---

# TBLMUHFIS

> YEVMİYE FİŞ GİRİŞİNDE FİŞ DETAY SEKMESİNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 48

## İlgili sayfalar

- [Muhasebe (REST GLSlips)](/rest/uclar/#muhasebe-fisi-glslips-ve-hesap-plani-glaccounts)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AY_KODU` | TDBBYTE | hayır |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde ay kodu sahasına girilen ay bilgisini gösterir. |
| 2 | `FISNO` | TDBBELGENO | hayır |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde ilgili aya ait yevmiye fiş numaralarını gösterir. |
| 3 | `SIRA` | TDBSMALLINT | hayır |  | Yevmiye fiş girişinde fiş detay sekmesinde fiş içerisindeki kayıtların sıra numarasını gösterir. Progrtam tarafından otomatik olarak atanır. Kullanıcının müdahale etmesine izin vermez. |
| 4 | `HES_KOD` | TDBMUHKOD | hayır |  | Yevmiye fiş satırının hesap planındaki hesaplardan hangi muavine ait olduğunu belirtmek için girilen hesap kodunu gösterir. |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde girilen tarih bilgisini gösterir. |
| 6 | `BA` | char(1) | hayır |  | Yevmiye fiş girişinin borç mu yoksa alacak mı girileceğini gösterir. Borç ise '1'', alacak ise '2' değerini gösterir. |
| 7 | `ACIKLAMA` | varchar(100) | evet |  | Yevmiye fiş satırının açıklamasını gösterir. |
| 8 | `TUTAR` | TDBFLOAT | hayır | `0` | Yevmiye fişinde girilen sıradaki borç ya da alacak kaydının tutarını gösterir. |
| 9 | `MIKTAR` | TDBFLOAT | evet | `0` | Oluşturulan kaydın miktarı varsa, ya da entegrasyondan aktarılan kayıtların miktarları varsa miktarlarını gösterir. |
| 10 | `REF_KOD` | TDBREFKOD | evet |  | Aktif/Pasif/Gelir/Gider veya Nazım fiş kayıtlarının ait olduğu referans kodunu gösterir. |
| 11 | `ACIKLAMA2` | varchar(35) | evet |  | Yevmiye fiş girişinde fiş detay sekmesinde fiş içerisindeki kayıtlar için açıklama2 sahasına girilen açıklamayı gösterir. |
| 12 | `DOVIZTIP` | TDBBYTE | evet |  | Yevmiye fişindeki sıradaki kaydın döviz tipini gösterir. |
| 13 | `DOVIZTUT` | TDBFLOAT | evet | `0` | Yevmiye fişindeki sıradaki kaydın döviz tutarını gösterir. |
| 14 | `FIRMADOVTIP` | TDBBYTE | evet |  | Firma döviz tipini gösterir. |
| 15 | `FIRMADOVTUT` | TDBFLOAT | evet | `0` | Firma döviz tutarını gösterir. |
| 16 | `UPDATEKODU` | char(1) | evet |  | Update kodunu tutan sahadır |
| 17 | `EVRAKTARIHI` | TDBDATETIME | evet |  | Yevmiye fişinde bulunan evrağın evrak tarihini gösterir. |
| 18 | `HESAPISMI` | varchar(60) | evet |  | Yevmiye fiş satırının hesap planındaki hesaplardan hangi muavine ait olduğunu belirtmek için girilen hesap kodunun açıklamasını gösterir. |
| 19 | `YONTEM` | char(1) | evet |  |  |
| 20 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Entegrasyondan aktarılan kayıtlar için oluşturulan yevmiye fişinde program tarafından atılan değeri gösterir. Entegrasyondan aktarım olmuyorsa null değerini gösterir. |
| 21 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK6` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK7` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK10` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `SUBELI` | char(1) | evet | `H` | Entegrasyondan aktarılan kayıtlar için tanımlanmış olan önmuhasebe hesap kodları şubelerde ortak ise 'E', değilse 'H' değerini gösterir. Entegrasyondan aktarılmayan direkt muhasebede yevmiye fiş oluşturulduğunda, muhasebe hesap kodları şubelerde ortak olsan bile 'H' değerini gösterir. |
| 35 | `HARKONTROL` | TDBSMALLINT | evet | `0` | Default olarak 0 değeri atılır. |
| 36 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `BFORMCARIKODU` | TDBCARIKOD | evet |  | B form cari kodu bilgisi yer alır. |
| 41 | `BFORMBELGENO` | varchar(16) | evet |  | b form belge no bilgisi yer alır. |
| 42 | `GUID` | varchar(50) | evet |  | GUID numarası yer alır. |
| 43 | `ISLEMSIRANO` | TDBINTEGER | evet |  |  |
| 44 | `KAYITSEKLI` | char(1) | evet |  | Tahmini D-Doğrudan(online),t-Transfer(Entegrasyondan gelen) |
| 45 | `MGECDK` | varchar(2) | evet |  | CA-cari alacak-cari borç,DD-dekont gibi |
| 46 | `KULL_ID` | TDBSMALLINT | evet |  | Kullanıcı ID |
| 47 | `ISLEMTIPI` | varchar(8) | evet |  | İşlem tipi bilgisi yer alır. |
| 48 | `EDEFTER_SIRA` | TDBINTEGER | evet |  |  |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHFIS_IND_2` | `HES_KOD+TARIH+FISNO+SIRA` | Unique, Non-clustered |
| `TBLMUHFIS_IND_3` | `AY_KODU+FISNO+BA+HES_KOD+SIRA` | Unique, Non-clustered |
| `TBLMUHFIS_IND_4` | `TARIH+FISNO+BA+HES_KOD+SIRA` | Unique, Non-clustered |
| `TBLMUHFIS_IND_5` | `TARIH+FISNO+SIRA` | Unique, Non-clustered |
| `TBLMUHFIS_IND_6` | `ENTEGREFKEY` | Non-unique, Non-clustered |
| `TBLMUHFIS_IND_7` | `SUBE_KODU+HES_KOD` | Non-unique, Non-clustered |
| `TBLMUHFIS_IND_8` | `AY_KODU+FISNO+YEDEK6` | Non-unique, Non-clustered |
| `TBLMUHFISPKEY` | `AY_KODU+FISNO+SIRA` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 AY_KODU, FISNO, SIRA, HES_KOD, TARIH, BA
FROM dbo.TBLMUHFIS WITH (NOLOCK);
```
