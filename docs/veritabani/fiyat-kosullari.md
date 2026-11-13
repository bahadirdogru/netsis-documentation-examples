---
title: Fiyat koşulları
url: https://netsis.bahadirdogru.com/veritabani/fiyat-kosullari/
---

# Fiyat koşulları

Fiyat koşulu, bir carinin hangi stoğa hangi fiyat, iskonto ve vade günüyle satış yapılacağını tanımlar. Bu sayfa tabloları anlatır. Bulgular tek bir test şirketinde, Netsis çekirdeği 9.0.72.5 ile yapılan canlı denemelerden gelir.

> **Koşulu SQL ile yeniden çözmeyin.** Hangi satırın hangi stoğa uygulanacağı tarih, stok grubu, miktar aralığı ve ek koşul kurallarına bağlıdır. Fiyatı ve iskontoyu Netsis'e hesaplatın: `ItemSlips/Calculate` ve `KosulluHesapla: true` ([Sipariş hesaplama ve değiştirme](/rest/siparis-islemleri/#calculate)). Aşağıdaki tablo bilgisi koşulu göstermek ve kontrol etmek içindir.

## Tablolar

| Tablo | İçerik |
|-------|--------|
| `TBLKOSULMAS` | Koşul başlığı: `KOSUL_KOD` (`varchar(8)`), `ACIKLAMA`, `KOSRAPORKODU`, `EKKOSULUSTEYAZ` … |
| `TBLKOSDETAY` | Koşul satırı: bir stok (`STOKKODU`) ya da stok grubu (`RAPORKODU`) için fiyat ve iskonto |
| `TBLCASABIT.KOSULKODU` | Carinin koşulu |
| `TBLSIPAMAS` | Sipariş başlığında `KOSULKODU`, `KOSVADEGUNU`, `KOSULTARIHI`, `FIYATTARIHI` |
| `TBLSIPATRA` | Sipariş satırında `KOSULKODU`, `KOSULTARIHI` |

`TBLKOSDETAY` kolonları:

| Kolon | Anlam |
|-------|-------|
| `KOSUL_KOD` | Başlığa bağ |
| `STOKKODU` / `RAPORKODU` | Satır tek bir stok için ya da bir stok grubu için |
| `BASLANGICTARIHI`, `BITISTARIHI` | Geçerlilik; `BITISTARIHI` boşsa süre açık |
| `KAPATILMIS` | `H` = satır etkin |
| `VADEGUNU` | Satırın vade günü |
| `ORANTUTAR` | `O` = oran (yüzde) |
| `DEGERI` | Birinci iskonto yüzdesi |
| `ISKORAN2` … `ISKORAN6` | Sonraki iskontolar (kademeli) |
| `LISTEFIATI`, `FIYATGRUBU` | Liste fiyatı ve fiyat grubu |
| `DEGER1` … `DEGER6`, `ISK1` … `ISK6` | Miktar aralığına göre iskonto |
| `MALF*` | Mal fazlası (bedelsiz miktar) |

Kayıt damgaları (`KAYITYAPANKUL`, `KAYITTARIHI`, …): [Kayıt kullanıcısı](/veritabani/kayit-kullanicisi/).

`KOSRAPORKODU` ve `RAPORKODU` ilişkisi: test şirketinde `KOSRAPORKODU = 6` idi ve `RAPORKODU` stok kartındaki `TBLSTSABIT.KOD_4` ile eşleşti. `KOSRAPORKODU` değerlerinin hangi stok kodu kolonuna denk geldiği bu durum dışında **doğrulanmadı**.

## Kayıtlı iskonto biçimi

`TBLSIPATRA.STHAR_SATISK` (birinci satır iskontosu) yüzde değeri 100000'e bölünmüş olarak saklanır: yüzde 10 iskonto `0.0001`, yüzde 50 `0.0005` yazılır. `STHAR_SATISK2` ve `STRA_SATISK3` düz yüzde olarak saklanır. Okurken kolon başına dönüşümü ayrı yapın.

## Vade günü

Test şirketinde bir koşulun etkin satırlarının neredeyse hepsi aynı `VADEGUNU` değerini taşıyordu. Koşul tarihinde etkin satırlar arasında en sık görülen değeri koşulun vade günü saymak işe yarayan bir kuraldı. Bu Netsis'in kuralı değil, gözlemdir; kesin sonuç için `Calculate` yanıtındaki `STra_ODEGUN` değerini kullanın.

## Carinin koşul satırlarını listelemek

```sql
SELECT d.KOSUL_KOD, d.STOKKODU, d.RAPORKODU, d.BASLANGICTARIHI, d.BITISTARIHI,
       d.VADEGUNU, d.ORANTUTAR, d.DEGERI, d.ISKORAN2, d.ISKORAN3,
       d.ISKORAN4, d.ISKORAN5, d.ISKORAN6, d.LISTEFIATI, d.FIYATGRUBU
FROM TBLCASABIT c WITH (NOLOCK)
JOIN TBLKOSDETAY d WITH (NOLOCK) ON d.KOSUL_KOD = c.KOSULKODU
WHERE c.CARI_KOD = @CariKod
  AND d.KAPATILMIS = 'H'
  AND d.BASLANGICTARIHI <= GETDATE()
  AND (d.BITISTARIHI IS NULL OR d.BITISTARIHI >= GETDATE())
ORDER BY d.STOKKODU, d.RAPORKODU;
```

Bu sorgu hangi satırların aday olduğunu gösterir; hangisinin siparişe uygulandığını göstermez.
