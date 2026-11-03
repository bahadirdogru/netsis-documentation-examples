---
title: Enum'lar
url: https://netsis.bahadirdogru.com/netopenx/enumlar/
---

# Enum'lar

Aşağıdaki değerler gerçek kodda kullanılmış ya da REST istemci kütüphanesinde aynı adla görülmüştür. NetOpenX'in tür kitaplığında daha fazla değer vardır; Visual Studio'da Object Browser ile `NetOpenX50` altındaki tüm enum'ları görebilirsiniz.

## TFaturaTip

Belgenin türü (`kernel.yeniFatura` ikinci parametresi).

| Değer | Belge | `FTIRSIP` |
|-------|-------|-----------|
| `ftSFat` | Satış faturası | `1` |
| `ftAFat` | Alış faturası | `2` |
| `ftSIrs` | Satış irsaliyesi | `3` |
| `ftAIrs` | Alış irsaliyesi | `4` |
| `ftSSip` | Müşteri (satış) siparişi | `6` |
| `ftASip` | Satıcı (alış) siparişi | `7` |
| `ftLokalDepo` | Lokal depolar arası transfer | `8` |
| `ftAmbarC` | Ambar çıkış fişi | `8` |
| `ftAmbarG` | Ambar giriş fişi | `9` |
| `ftSatTeklif` | Satış teklifi | — |
| `ftSatTalep` | Satış talebi (REST'te görüldü) | — |
| `ftDepo` | Depolar arası (REST'te görüldü) | — |

## TFaturaTipi

Faturanın alt tipi, `FatUst.TIPI` (`TBLFATUIRS.TIPI`).

| Değer | Anlamı | `TIPI` (tablo) |
|-------|--------|----------------|
| `ft_Kapali` | Kapalı (peşin) | `1` |
| `ft_Acik` | Açık (vadeli) | `2` |
| `ft_Muhtelif` | Muhtelif | `3` |
| `ft_Iade` | İade | `4` |
| `ft_ZIade` | Zayi iade | `5` |
| `ft_Ihracat` | İhracat / ithalat | `6` |
| `ft_YurtIci` | Yurt içi (siparişlerde) | — |
| `ft_YurtDisi` | Yurt dışı (siparişlerde) | — |
| `ft_Bos` | Boş (depo/ambar fişlerinde) | — |

Sayısal eşleme tablo açıklamasından çıkarılmıştır; enum'un iç sayısal değeri farklı olabilir. REST'e sayı gönderiyorsanız [REST enum notlarına](/rest/kimlikler-ve-enumlar/) bakın.

## TVTTipi

| Değer | Veritabanı |
|-------|------------|
| `vtMSSQL` | Microsoft SQL Server |
| `vtOracle` | Oracle |

## TOkumaTipi

| Değer | Anlamı |
|-------|--------|
| `otAc` | Filtreyle kayıt kümesini aç |
| `otIlk` | İlk kayda git |

## TEBelgeTip

| Değer | Belge |
|-------|-------|
| `ebtEFatura` | E-fatura |
| `ebtArsiv` | E-arşiv |
| `ebtEIrs` | E-irsaliye |

## TEBelgeKaynakTipi

| Değer | Anlamı |
|-------|--------|
| `eitIrs` | Kaynak belge irsaliye |

## TEBelgeBoxType

| Değer | Anlamı |
|-------|--------|
| `ebAll` | Tüm kutular |
| `ebOutbox` | Giden kutusu |

## TAmbarHarTur

| Değer | Anlamı |
|-------|--------|
| `htMuhtelif` | Muhtelif |
| `htUretim` | Üretim |
| `htDepolar` | Depolar arası |

## TCikisYeri

| Değer | Anlamı |
|-------|--------|
| `cyStokKod` | Stok kodu |
| `cyMasrafMer` | Masraf merkezi |

## TFatUstDegissin

NetsisQuick'te yorum satırında geçer; fiyat/kur değişiminde neyin yeniden hesaplanacağını seçer: `fudFiyat`, `fudDovizFiyati`, `fudKur`.
