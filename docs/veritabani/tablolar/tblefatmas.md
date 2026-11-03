---
title: TBLEFATMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatmas/
---

# TBLEFATMAS

> E-Faturanın üst bilgi kayıtlarını tutar.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 65

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Tekrarlanmayan sıra numarasıdır. |
| 2 | `EFATINCKEYNO` | TDBINTEGER | evet |  | Bağlı olduğu efaturanın inckeyno değerini gösterir. |
| 3 | `FATIRS_NO` | varchar(17) | evet |  | E-Faturanın GIB fatura numarasını tutar. TBLEFATURA - GIB_FATIRS_NO sahasına eşittir. |
| 4 | `CARIKOD` | varchar(15) | evet |  | Adına fatura oluşturulan carinin vergi kimlik numarasını gösterir. |
| 5 | `FTIRSIP` | char(1) | evet |  | Faturanın tipini gösterir. Satış faturaları için 1 değerini alır. |
| 6 | `CARI_ISIM` | varchar(100) | evet |  | Adına fatura oluşturulan carinin ismini gösterir. |
| 7 | `TARIH` | TDBDATETIME | evet |  | Fatura tarihini gösterir. |
| 8 | `DOVIZTIP` | TDBBYTE | evet |  | Faturanın döviz tipini gösterir. |
| 9 | `DOVIZTUTAR` | TDBFLOAT | evet |  | Faturanın döviz tutarını gösterir. |
| 10 | `GENELTOPLAM` | TDBFLOAT | evet |  | Faturanın genel toplamını gösterir. |
| 11 | `BRUTTUTAR` | TDBFLOAT | evet |  | Faturanın brüt tutarını gösterir. |
| 12 | `DOVIZBRUTTUTAR` | TDBFLOAT | evet |  | Faturanın döviz brüt tutarını gösterir. |
| 13 | `KDV` | TDBFLOAT | evet |  | Faturanın KDV tutarını gösterir. |
| 14 | `DOVIZKDV` | TDBFLOAT | evet |  | Faturanın döviz KDV tutarını gösterir. |
| 15 | `OTV` | TDBFLOAT | evet |  | Faturanın ÖTV tutarını gösterir. |
| 16 | `DOVIZOTV` | TDBFLOAT | evet |  | Faturanın döviz ÖTV tutarını gösterir. |
| 17 | `KDV1O` | TDBFLOAT | evet |  | KDV 1 oranını gösterir. |
| 18 | `KDV1T` | TDBFLOAT | evet |  | KDV 1 tutarını gösterir. |
| 19 | `KDV2O` | TDBFLOAT | evet |  | KDV 2 oranını gösterir. |
| 20 | `KDV2T` | TDBFLOAT | evet |  | KDV 2 tutarını gösterir. |
| 21 | `KDV3O` | TDBFLOAT | evet |  | KDV 3 oranını gösterir. |
| 22 | `KDV3T` | TDBFLOAT | evet |  | KDV 3 tutarını gösterir. |
| 23 | `KDV4O` | TDBFLOAT | evet |  | KDV 4 oranını gösterir. |
| 24 | `KDV4T` | TDBFLOAT | evet |  | KDV 4 tutarını gösterir. |
| 25 | `KDV5O` | TDBFLOAT | evet |  | KDV 5 oranını gösterir. |
| 26 | `KDV5T` | TDBFLOAT | evet |  | KDV 5 tutarını gösterir. |
| 27 | `KDV6O` | TDBFLOAT | evet |  | KDV 6 oranını gösterir. |
| 28 | `KDV6T` | TDBFLOAT | evet |  | KDV 6 tutarını gösterir. |
| 29 | `KDV7O` | TDBFLOAT | evet |  | KDV 7 oranını gösterir. |
| 30 | `KDV7T` | TDBFLOAT | evet |  | KDV 7 tutarını gösterir. |
| 31 | `CARI_VERGINUMARASI` | varchar(15) | evet |  | Carinin vergi numarasını gösterir. |
| 32 | `CARI_TCKIMLIKNO` | varchar(15) | evet |  | Carinin TC kimlik numarasını gösterir. |
| 33 | `CARI_VERGIDAIRESI` | varchar(50) | evet |  | Carinin vergi dairesini gösterir. |
| 34 | `CARI_ADRES` | varchar(100) | evet |  | Carinin adresini gösterir. |
| 35 | `CARI_ULKEKODU` | varchar(4) | evet |  | Carinin ulke kodunu gösterir. |
| 36 | `CARI_IL` | varchar(50) | evet |  | Carinin ilini gösterir. |
| 37 | `CARI_ILCE` | varchar(50) | evet |  | Carinin ilçesini gösterir. |
| 38 | `DURUM` | TDBBYTE | evet |  |  |
| 39 | `UUID` | varchar(200) | evet |  | Faturanın UUID'sini gösterir. TBLEFATURA'daki UUID değeri ile aynıdır. |
| 40 | `SENDERNAME` | varchar(200) | evet |  | Faturayı gönderenin unvanını gösterir. Bu değer satış faturaları için firmanın kendi unvanına eşit olur. |
| 41 | `SENDERVNO` | varchar(50) | evet |  | Faturayı gönderenin vergi numarasını gösterir. Bu değer satış faturaları için firmanın kendi vergi numarasıdır. |
| 42 | `RESPONSECODE` | TDBINTEGER | evet |  | Satış tarafı için NULL değerini alır. Alış için ise Ticari faturaya yanıt verilip verilmediği bilgisini tutar. |
| 43 | `YEDEK11` | varchar(250) | evet |  |  |
| 44 | `YEDEK12` | varchar(250) | evet |  |  |
| 45 | `PROFILEID` | tinyint | evet |  | Faturanın senaryosunu gösterir. Temel fatura ise 0, ticari fatura ise 1 değerini alır, ihracat e-fatura ise 2 değerini alır. TBLEFATZARF'taki PROFILEID kolonuna eşittir. |
| 46 | `SUBE_KODU` | TDBSMALLINT | evet |  | Faturanın şube kodunu gösterir. |
| 47 | `SIPARISNO` | varchar(50) | evet |  | Fatura siparişten oluşmuş ise, ilgili siparişin numarasını gösterir. |
| 48 | `SIPARIS_TARIH` | TDBDATETIME | evet |  | Fatura siparişten oluşmuş ise, ilgili siparişin tarihini gösterir. |
| 49 | `TIPI` | TDBBYTE | evet |  | ’0’---ALIŞ,’1’---İADE,’2’---İHRAÇ KAYITLI,’3’---TEVKİFAT,’5’---İSTİSNA |
| 50 | `OTVTIP` | varchar(10) | evet |  | OTV kodunu gösterir. 0071, 0073, 0074 gibi. |
| 51 | `C_YEDEK1` | char(1) | evet |  | Yedek sahadır. |
| 52 | `C_YEDEK2` | char(1) | evet |  | Yedek sahadır. |
| 53 | `D_YEDEK1` | TDBDATETIME | evet |  | Yedek sahadır. |
| 54 | `D_YEDEK2` | TDBDATETIME | evet |  | Yedek sahadır. |
| 55 | `F_YEDEK1` | TDBFLOAT | evet |  | İndirim tutarı bilgisi yer alır.Amount currencyID |
| 56 | `F_YEDEK2` | TDBFLOAT | evet |  | Yedek sahadır. |
| 57 | `I_YEDEK1` | TDBINTEGER | evet |  | Yedek sahadır. |
| 58 | `I_YEDEK2` | TDBINTEGER | evet |  | Yedek sahadır. |
| 59 | `S_YEDEK1` | varchar(50) | evet |  | Faturanın uluslararası para birim kodunu gösterir. Örneğin, TRL: Türk Lirası ; USD: ABD Doları gibi. |
| 60 | `S_YEDEK2` | varchar(50) | evet |  | Kullanıcı bilgilendirme bilgisi tutulmaktadır. |
| 61 | `TAXEXEMPTIONREASON` | varchar(500) | evet |  | İstisna muafiyet sebebi bilgisi yer alır. |
| 62 | `TAXEXEMPTIONREASONCODE` | int | evet |  | İstisna muafiyet kodu bilgisi yer alır. |
| 63 | `PAYMENTMEANSCODE` | varchar(5) | evet |  | Uluslar arası Ödeme kodu bilgisi yer alır. |
| 64 | `DLVTERMSID` | varchar(5) | evet |  | İthalat ihracat tipi bilgisi yer alır. |
| 65 | `KULSUBEKODU` | TDBSMALLINT | evet |  | Fatura Bazında Gelen e-Fatura" ekranındaki "Kullanıcı Bilgilendirme" işlemine "Şubeler Dahil" seçeneği eklenmiştir. İşaretlendiğinde, diğer şube kullanıcılarının da bilgilendirilmesi sağlanmıştır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, EFATINCKEYNO, FATIRS_NO, CARIKOD, FTIRSIP, CARI_ISIM
FROM dbo.TBLEFATMAS WITH (NOLOCK);
```
