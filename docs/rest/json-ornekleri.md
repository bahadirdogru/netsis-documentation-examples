---
title: JSON örnekleri
url: https://netsis.bahadirdogru.com/rest/json-ornekleri/
---

# JSON örnekleri

Gövdeler Logo'nun Postman örneklerinden ve yardım sayfalarından derlenmiştir. Hepsi `POST` ile, `Content-Type: application/json` ve `Authorization: Bearer <token>` başlıklarıyla gönderilir. Tarih biçimi `yyyy-MM-dd HH:mm:ss` ya da ISO 8601'dir.

Ortak üst düzey alanlar (birçok gövdede):

| Alan | Anlam |
|------|-------|
| `TransactSupport` | Transaction desteği; `OpenTransaction` ile birlikte kullanılır |
| `MuhasebelesmisBelge` | Muhasebeleşmiş belge işareti |
| `OnayTipi`, `OnayNum` | Onay akışı alanları (`"A"`, `0`) |

## Fatura

`POST api/v2/ItemSlips`

```json
{
  "FaturaTip": 0,
  "Seri": "ABC",
  "KayitliNumaraOtomatikGuncellensin": true,
  "SeriliHesapla": true,
  "EPostaGonderilsin": false,
  "FatUst": {
    "Sube_Kodu": 0,
    "Tip": 0,
    "TIPI": 2,
    "CariKod": "120-01-014",
    "Tarih": "2024-06-01 00:00:00",
    "FIYATTARIHI": "2024-06-01 00:00:00",
    "KDV_DAHILMI": false,
    "PLA_KODU": "01",
    "Proje_Kodu": "1",
    "EKACK1": "Sipariş: 4711"
  },
  "Kalems": [
    {
      "StokKodu": "STK001",
      "STra_GCMIK": 10.0,
      "STra_BF": 10.0,
      "STra_NF": 10.0,
      "STra_KDV": 20,
      "STra_ACIKLAMA": "açıklama",
      "STra_DOVTIP": 2,
      "STra_DOVFIAT": 1.5,
      "DEPO_KODU": 1,
      "ReferansKodu": "0342",
      "ProjeKodu": "1"
    }
  ]
}
```

Başarılı yanıtta `Data.FatUst.FATIRS_NO` kaydedilen belge numarasıdır.

### ItemSlips alanları

**Üst düzey:** `FaturaTip`, `Seri`, `FatUst`, `Kalems`, `Tahsilats`, `EIrsEkBilgi`, hesaplama bayrakları: `KosulluHesapla`, `FiyatSistemineGoreHesapla`, `StokKartinaGoreHesapla`, `SeriliHesapla`, `MaliyetTipineGoreHesapla`, `OtoIskontoGetir`, `OtoVadeGunGetir`, `OtomatikIslemTipiGetir`, `OtomatikOdemeKoduGetir`, `RiskKontrol`, `BaglantiKontrol`, `ProjeKodKontrol`, `SonNumaraYazilsin`, `KayitliNumaraOtomatikGuncellensin`, `EPostaGonderilsin`; ayrıca `TransactSupport`, `MuhasebelesmisBelge`, `Use64BitService`.

**`FatUst`:** `Sube_Kodu`, `CariKod`, `CARI_KOD2`, `FATIRS_NO`, `GIB_FATIRS_NO`, `Tarih`, `ENTEGRE_TRH`, `FIYATTARIHI`, `KOSULTARIHI`, `DovBazTarihi`, `FiiliTarih`, `SIPARIS_TEST`, `Tip`, `TIPI`, `KOD1`, `KOD2`, `PLA_KODU`, `Proje_Kodu`, `KOSULKODU`, `ODEMEGUNU`, `KDV_DAHILMI`, `EKACK1`…`EKACK16`, `AMBHARTUR`, `GCKOD_GIRIS`, `GCKOD_CIKIS`, `TopDepo`, `TopGirDepo`, `OnayTipi`, `OnayNum`, `EFatOzelKod`, `EIrsaliye`, `EIrsEkBilgi`, `Faturalanmayacak`, toplam alanları.

**`Kalems[]`:** `StokKodu`, `STra_GCMIK`, `STra_GCMIK2`, `STra_BF`, `STra_NF`, `STra_SatIsk`…`STra_SatIsk6`, `STra_KDV`, `STra_DOVTIP`, `STra_DOVFIAT`, `Olcubr`, `DEPO_KODU`, `Gir_Depo_Kodu`, `MuhasebeKodu`, `ReferansKodu`, `ProjeKodu`, `Plasiyer_Kodu`, `STra_SIPNUM`, `Stra_OnayTipi`, `IadeFaturaNo`, `IadeFaturaTarihi`, `KalemSeri[]`, `SatirBaziAciks`.

Tam ve sürümünüze uygun liste: `GET api/v2/definitions/ItemSlips`.

> **Enum'lar sayı ya da ad olarak.** Örneklerde `Tip: 0`, `TIPI: 2` gibi sayılar da, C# istemcisinde `ftSFat`, `ft_Acik` gibi adlar da kullanılır. Sayı–ad eşlemesi için [Kimlikler ve enum'lar](/rest/kimlikler-ve-enumlar/#sayisal-enum-degerleri).

## Fatura hesaplama

`POST api/v2/ItemSlips/Calculate`: gövde fatura ile aynıdır, kayıt yapmaz, toplamları döndürür.

## Siparişten fatura

`POST api/v2/ItemSlips/SiparisToIrsFat`

```json
{
  "DocumentType": "ftSSip",
  "DocumentNumber": "000000000000123",
  "CustomerCode": "120-01-001",
  "ItemSlip": {
    "FaturaTip": "ftSFat",
    "Seri": "ABC",
    "FatUst": { "Tarih": "2024-06-01 00:00:00", "TIPI": "ft_Acik" }
  }
}
```

`ItemSlip`, hedef belgenin başlığını ve bayraklarını taşır. `IrsToFat` aynı yapıdadır (`DocumentType` irsaliye tipi). Alan adları yardım sayfasından alınmıştır; değerler örnektir ve bu gövde canlıda sınanmamıştır.

## Cari kartı

`POST api/v2/ARPs`

```json
{
  "CariTemelBilgi": {
    "Sube_Kodu": 0, "ISLETME_KODU": 1,
    "CARI_KOD": "120-01-999", "CARI_ISIM": "Örnek Ticaret A.Ş.", "CARI_TIP": "A",
    "M_KOD": "120-01-999",
    "CARI_ADRES": "Atatürk Cad. No:1", "CARI_IL": "İzmir", "CARI_ILCE": "Konak", "CARI_TEL": "2320000000",
    "VERGI_DAIRESI": "Konak", "VERGI_NUMARASI": "1234567890",
    "RISK_SINIRI": 0.0, "VADE_GUNU": 0, "DOVIZ_TIPI": 0,
    "HESAPTUTMASEKLI": "Y", "DOVIZLIMI": "H", "MUSTERIBAZIKDV": "H"
  },
  "CariEkBilgi": {
    "CARI_KOD": "120-01-999",
    "TcKimlikNo": "11111111111",
    "Kull1S": "segment-A", "Kull1N": 0.0,
    "CariRisk": "E"
  },
  "SubelerdeOrtak": false,
  "IsletmelerdeOrtak": false
}
```

Alanlar `TBLCASABIT` ve `TBLCASABITEK` kolonlarına karşılık gelir.

## Cari hareket

`POST api/v2/ARPTransactions`

```json
{
  "TransactSupport": true,
  "MuhasebelesmisBelge": false,
  "SilmeIcinGerekliSahalar": "INC_KEY_NUMBER",
  "SonKayitNoAl": false,
  "Sube_Kodu": 0,
  "CARI_KOD": "120-01-999",
  "Tarih": "2024-06-01",
  "Vade_Tarihi": "2024-07-01",
  "Belge_No": "DKT000000000001",
  "Aciklama": "Açılış",
  "Hka": "A",
  "Borc": 1.0,
  "Alacak": 0.0,
  "DOVIZ_TURU": 0,
  "Doviz_Tutar": 0.0,
  "Hareket_Turu": "A",
  "Proje_Kodu": "1",
  "OnayTipi": "A",
  "OnayNum": 0
}
```

`SilmeIcinGerekliSahalar` silmede kullanılacak anahtarı (`INC_KEY_NUMBER`) belirtir. `Hka` ve `Hareket_Turu` ayrı alanlardır; değer listeleri belgelenmemiştir (`TBLCAHAR.HKA` açıklamasına göre `K` "öncelikli kapatılmış").

## Stok kartı

`POST api/v2/Items` (en küçük gövde)

```json
{
  "StokTemelBilgi": { "Stok_Kodu": "HAMMADDE-1", "Stok_Adi": "Deneme" },
  "StokEkBilgi": { "Stok_Kodu": "HAMMADDE-1" }
}
```

Diğer `StokTemelBilgi` alanları: `KDV_Orani`, `Alis_Kdv_Kodu`, `Satis_Fiat1..2`, `Alis_Fiat1..2`, `Giris_Seri`, `Cikis_Seri`, `Pay_1`, `Payda_1`, `Pay2`, `Payda2`. `StokEkBilgi`: `Ingisim`, `I_Yedek1`.

## Stok hareketi

`POST api/v2/ItemTransactions`

```json
{
  "Stok_Kodu": "STK001",
  "Sthar_Tarih": "2024-06-01",
  "Sthar_Htur": "M",
  "Sthar_Gckod": "G",
  "Sthar_Gcmik": 5,
  "Sthar_Bf": 10,
  "DEPO_KODU": 1,
  "Proje_Kodu": "1",
  "Plasiyer_Kodu": "01"
}
```

## Kasa

`POST api/v2/SafeDeposits`

```json
{
  "KsMas_Kod": "01",
  "Tarih": "2024-06-01",
  "Fisno": "KSA000000000001",
  "IO": "G",
  "Tip": "C",
  "Cari_Muh": "C",
  "Kod": "120-01-999",
  "Aciklama": "Tahsilat",
  "Tutar": 45.0,
  "DovizTut": 0.0,
  "Kur": 0.0,
  "Sube_Kodu": 0,
  "Proje_Kodu": "1",
  "OnayTipi": "A",
  "OnayNum": 0
}
```

`IO`: `G` gelir / `C` gider. `Tip`: `C` cari, `F` fatura, `M` muhtelif… `Cari_Muh`: `Kod` alanı cari mi (`C`) muhasebe mi (`M`).

## Çek / senet

`POST api/v2/CheckAndPNotesMain`

```json
{
  "Tip": 0,
  "CekSenEvrakKaydetmeTip": 0,
  "BordroNo": "A00000000000001",
  "Evraklar": [{
    "Sube_Kodu": 0,
    "SC_NO": "CEK-0001",
    "SC_GIRTRH": "2024-06-01", "VADETRH": "2024-07-01", "SC_ODETRH": "2024-07-01",
    "SC_VERENK": "120-01-999",
    "AS_C": "A", "SC_SONDUR": "B", "SC_YERI": "P",
    "Tutar": 456.0,
    "DOVTIP": 0, "DOVTUT": 0.0,
    "GIRILDIGIYER": 2,
    "Proje_Kodu": "1",
    "OnayTipi": "A", "OnayNum": 0
  }]
}
```

## E-belge

| Uç | Gövde |
|----|-------|
| `POST api/v2/EDocument` (taslak) | `{ "BelgeNo": "ABC2024000000123", "Tip": 1, "DizaynKontrol": false, "DovizliOlustur": false }` |
| `POST api/v2/EDocument/SendEDocument` | `{ "DocumentNumber": "...", "CustomerCode": "...", "DocumentType": "ftSFat", "EDocumentType": 1 }` |
| `POST api/v2/EDocument/ShowEDocument` | `{ "GIBDocumentNumber": "ABC2024000000123", "HtmlPath": "", "DocumentBoxType": 2, "EDocumentType": 1 }` |

`Tip` ve `EDocumentType`: **0 e-arşiv, 1 e-fatura, 2 e-irsaliye**. `ShowEDocument`'ta `HtmlPath` boş bırakılırsa HTML yanıtta döner; dolu ise sunucudaki o klasöre yazılır.

## Toplu faturalama

`POST api/v2/BatchInvoicing`

```json
{
  "FaturaTip": 2,
  "AltCariKodu": "120-01-001", "UstCariKodu": "120-01-999",
  "AltIrsaliyeNumarasi": "IRS000000000001", "UstIrsaliyeNumarasi": "IRS000000000999",
  "FaturaNumarasi": "ABC2024000000200",
  "IrsaliyelerBirlessin": true,
  "KapaliIrsaliyeIcinKasa": "00",
  "PlaKodFarkliIrsBirlessin": true,
  "ProjeKodFarkliIrsBirlessin": true,
  "EFaturaCarileriGetirilsin": true
}
```

Alt/üst alanları bir aralık tanımlar (cari ve irsaliye numarası aralığı).

## İş emri

`POST api/v2/ProductionOrder`

```json
{
  "TransactSupport": true,
  "IsEmriNo": "000000000000033",
  "Tarih": "2024-06-01 00:00:00",
  "StokKodu": "A-MAMUL",
  "Miktar": 1.0,
  "Olcubr": 0,
  "TeslimTarihi": "2024-06-02 00:00:00",
  "Kapali": false,
  "Oncelik": 0,
  "SipKont": 0,
  "SubeKodu": 0,
  "DepoKodu": 1,
  "CikisDepoKodu": 1,
  "Rework": false,
  "OnayTipi": "A", "OnayNum": 0
}
```

## Serbest üretim

`POST api/v2/FinishedGoodsReceiptWChanges/ReceiptProduce`

```json
{
  "TransactSupport": true,
  "UretSon_FisNo": "000000000000428",
  "UretSon_Tarih": "2024-06-01 00:00:00",
  "UretSon_Depo": 1,
  "UretSon_Mamul": "MMLX1",
  "UretSon_Miktar": 1.0,
  "Sube_Kodu": 0,
  "Proje_Kodu": "1",
  "Recete_Tarih": "2024-06-01 00:00:00",
  "BAKIYE_DEPO": 0,
  "OTO_YMAM_GIRDI_CIKTI": true,
  "KayitlaraGecilsin": true
}
```

Seri takipli mamullerde `Seri: [{ "Seri1": "...", "Seri2": "...", "Miktar": 1 }]` eklenir.
