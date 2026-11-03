---
title: TBLFINANSTEMP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfinanstemp/
---

# TBLFINANSTEMP

> FİNANSMAN RAPORU BİLGİLERİ BU TABLODA TUTULUR

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 17
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi tutulur |
| 2 | `TIP` | TDBBYTE | hayır | `0` | Bank borçları 0,Kasa 1,Müşteri çekleri 2,Müşteri senedi 3,Borç Çekleri 4,Borç Senetleri 5,Müşteri Siparişler 6,Satıcı Siparişi 7,Cari Borç 8,Cari Alacak 9,Özel Tahsil 10,Özel Tediye 11,Banka Alacakları 12 olarak kayıt atar.Bu saha yardımı ile hareket türleri yarımı gerçekleşir |
| 3 | `SUBTIP` | TDBBYTE | hayır | `0` | Bu alanda yukarda ki tip numarasının yanına ikinci seviyeyi belirleyen bir numara konularak ilgili modülün altındaki işlem ayrıntısına gidilir.Örneğin müşteri çekinin portföy veya teminat olma alt durumu bu sahada ana modül numarası+subtip numarası şeklinde verilen numaralar ile takip edilir. |
| 4 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama sahası |
| 5 | `POZITIF_TUTAR` | TDBFLOAT | evet | `0` | Tahsil tutarlarımızdır. |
| 6 | `NEGATIF_TUTAR` | TDBFLOAT | evet | `0` | Tediye tutarlarımızdır. |
| 7 | `DOVIZ_TIPI` | TDBBYTE | evet | `0` | Döviz tipi |
| 8 | `DOVIZ_TUTAR` | TDBFLOAT | evet | `0` | Döviz tutarıdır. |
| 9 | `DEGIS_TUTAR` | TDBFLOAT | evet | `0` | Normalde bu saha tediye veya tahsil rakamına eşittir.Ancak kayıtlar üzerinde değişiklik yapılsın parametresi kullanılıp tutarda değişiklik yapılırsa değiştirilen tutar bu sahada tutulur. |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `NAKITAKIS_ID` | TDBINTEGER | hayır |  | TBLNAKITAKISMAS ınckeyno bilgisi yer alır. |
| 13 | `TAHMIN_TIP` | TDBINTEGER | evet |  | Tahmin tipleri yer alır. |
| 14 | `TAHMIN_KOD` | varchar(35) | evet |  | null |
| 15 | `TAHMIN_DONEM` | TDBSMALLINT | evet |  | null |
| 16 | `TAHMIN_YIL` | TDBSMALLINT | evet |  | null |
| 17 | `TAHMIN_AKTIF` | char(1) | hayır |  | aktif ise E değerini alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFINANSTEMP_PKEY` | `SUBE_KODU, TARIH, TIP, SUBTIP, INCKEYNO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 TARIH, TIP, SUBTIP, ACIKLAMA, POZITIF_TUTAR, NEGATIF_TUTAR
FROM dbo.TBLFINANSTEMP WITH (NOLOCK);
```
